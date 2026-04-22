"use server"

import { tornFetch } from "@/lib/api/client";
import { TornResponse } from "@/lib/api/errors/errors";


export interface UserLogResponse<D = Data, P = Params> {
    log: Log<D, P>[]
    _metadata: Metadata
}

export interface Log<D = Data, P = Params> {
    id: string
    timestamp: number
    details: Details
    data: D
    params: P
}

export interface Details {
    id: number
    title: string
    category: string
}

export interface Metadata {
    links: Links
}

export interface Links {
    next: string
    prev: string
}

export interface DataDefault {
}

export interface ParamsDefault {

}

export type Data = DataDefault
export type Params = ParamsDefault

export interface UserLogParams {
    log?: number[]
    cat?: number
    target?: number
    limit?: number
    to?: number 
    from?: number
}

export async function getUserLogs<Data, Params>({log, cat, target, limit, to, from}: UserLogParams): Promise<TornResponse<UserLogResponse<Data, Params>>> {
    return await tornFetch<UserLogResponse<Data, Params>>({
        endpoint: "user/log"
    }, {log, cat, target, limit, to, from});
}

export async function getUserCreationDate(): Promise<TornResponse<UserLogResponse<Data, Params>>> {
    return await tornFetch<UserLogResponse<Data, Params>>({
        endpoint: "user/log"
    }, { cat: 1, limit: 3 });
}

export async function getAllUserLogs<Data, Params>(params: UserLogParams): Promise<TornResponse<UserLogResponse<Data, Params>>> {
    let allLogs: Log<Data, Params>[] = [];
    let nextPage = true;
    let currentParams = {...params};

    while (nextPage) {
                const response = await getUserLogs<Data, Params>(currentParams);
        if (response.error) {
            return { data: null, error: response.error };
        }

        allLogs = allLogs.concat(response.data.log);

        if (response.data._metadata.links.prev) {
            const url = new URL(response.data._metadata.links.prev);
            currentParams = {
                log: url.searchParams.getAll("log").map(Number),
                cat: url.searchParams.get("cat") ? Number(url.searchParams.get("cat")) : undefined,
                target: url.searchParams.get("target") ? Number(url.searchParams.get("target")) : undefined,
                limit: url.searchParams.get("limit") ? Number(url.searchParams.get("limit")) : undefined,
                to: url.searchParams.get("to") ? Number(url.searchParams.get("to")) : undefined,
                from: url.searchParams.get("from") ? Number(url.searchParams.get("from")) : undefined,
            };
        } else {
            nextPage = false;
        }
    }

    return { data: { log: allLogs, _metadata: { links: { next: "", prev: "" } } }, error: null };
}

// ✅ Hole ÄLTERE Logs (rückwärts via prev)
// ✅ Hole ÄLTERE Logs (rückwärts via prev)
export async function continueGetAllUserLogsOlder<Data, Params>(
    params: UserLogParams
): Promise<TornResponse<UserLogResponse<Data, Params>>> {
    let allLogs: Log<Data, Params>[] = [];
    let nextPage = true;
    let currentParams = { ...params };

    while (nextPage) {
        
        const response = await getUserLogs<Data, Params>(currentParams);

        if (response.error) {
            return { data: null, error: response.error };
        }

        allLogs = allLogs.concat(response.data.log);

        if (response.data._metadata.links.prev) {
            const url = new URL(response.data._metadata.links.prev);
            currentParams = {
                log: url.searchParams.getAll("log").map(Number),
                cat: url.searchParams.get("cat") ? Number(url.searchParams.get("cat")) : undefined,
                target: url.searchParams.get("target") ? Number(url.searchParams.get("target")) : undefined,
                limit: url.searchParams.get("limit") ? Number(url.searchParams.get("limit")) : undefined,
                to: url.searchParams.get("to") ? Number(url.searchParams.get("to")) : undefined,
                from: url.searchParams.get("from") ? Number(url.searchParams.get("from")) : undefined,
            };
        } else {
            nextPage = false;
        }
    }

    return {
        data: {
            log: allLogs,
            _metadata: { links: { next: "", prev: "" } }
        },
        error: null
    };
}

// ✅ Hole NEUERE Logs (vorwärts via next)
export async function continueGetAllUserLogsNewer<Data, Params>(
    params: UserLogParams
): Promise<TornResponse<UserLogResponse<Data, Params>>> {
    let allLogs: Log<Data, Params>[] = [];
    let nextPage = true;
    let currentParams = { ...params };

    while (nextPage) {
        
        const response = await getUserLogs<Data, Params>(currentParams);

        if (response.error) {
            return { data: null, error: response.error };
        }

        allLogs = allLogs.concat(response.data.log);

        if (response.data._metadata.links.next) {  // ← NEXT statt PREV!
            const url = new URL(response.data._metadata.links.next);
            currentParams = {
                log: url.searchParams.getAll("log").map(Number),
                cat: url.searchParams.get("cat") ? Number(url.searchParams.get("cat")) : undefined,
                target: url.searchParams.get("target") ? Number(url.searchParams.get("target")) : undefined,
                limit: url.searchParams.get("limit") ? Number(url.searchParams.get("limit")) : undefined,
                to: url.searchParams.get("to") ? Number(url.searchParams.get("to")) : undefined,
                from: url.searchParams.get("from") ? Number(url.searchParams.get("from")) : undefined,
            };
        } else {
            nextPage = false;
        }
    }

    return {
        data: {
            log: allLogs,
            _metadata: { links: { next: "", prev: "" } }
        },
        error: null
    };
}