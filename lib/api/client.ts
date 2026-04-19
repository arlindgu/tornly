import { cookies } from "next/headers";
import { isTornError, TornResponse } from "./errors/errors";
import { toast } from "sonner";


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
    url.searchParams.set("key", apiKey!);

    if (baseParams.timestamp) url.searchParams.set("timestamp", baseParams.timestamp.toString());
    if (baseParams.comment) url.searchParams.set("comment", baseParams.comment);

    Object.entries(additionalParams).forEach(([key, value]) => {
        if (value !== undefined) url.searchParams.set(key, value.toString());
    });

    const res = await fetch(url.toString());
    return res.json(); // ✅ einfach zurückgeben — ist entweder T oder TornAPIErrorResponse
}