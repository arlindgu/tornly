"use server"

import { cookies } from "next/headers";
import { TornResponse } from "./errors/errors";


interface TornFetchParams {
    endpoint?: string;
    comment?: string;
    timestamp?: number;
}

export async function tornFetch<T>(
    baseParams: TornFetchParams = {},
    additionalParams: Record<string, any> = {}
): Promise<TornResponse<T>> {
    const cookieStore = await cookies();
    const apiKey = cookieStore.get("tornly:apikey")?.value;

    const url = new URL(`https://api.torn.com/v2/${baseParams.endpoint}`);

    if (baseParams.timestamp) url.searchParams.set("timestamp", baseParams.timestamp.toString());
    if (baseParams.comment) url.searchParams.set("comment", baseParams.comment);

    Object.entries(additionalParams).forEach(([key, value]) => {
        if (value !== undefined) url.searchParams.set(key, value.toString());
    });

    try {
        const res = await fetch(url.toString(), {
            headers: {
                "Authorization": `ApiKey ${apiKey}`
            }
        });
        const json = await res.json();

        // ✅ Prüfe ob es ein Error von Torn ist
        if ('error' in json && json.error !== null) {
            return {
                data: null,
                error: json.error  // TornAPIError object
            };
        }

        // ✅ Success - gib data zurück
        return {
            data: json as T,
            error: null
        };

    } catch (error) {
        // ✅ Network/Parse Error
        return {
            data: null,
            error: {
                code: 0,
                error: error instanceof Error ? error.message : 'Unknown error'
            }
        };
    }
}


