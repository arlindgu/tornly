"use server"

import { tornFetch } from "../client";
import { isTornError, TornResponse } from "../errors/errors";

export interface KeyInfoResponse {
    info: Info
}

export interface Info {
    selections: Selections
    access: Access
    user: User
}

export interface Selections {
    company: string[]
    faction: string[]
    market: string[]
    property: string[]
    torn: string[]
    user: string[]
    racing: string[]
    forum: string[]
    key: string[]
}

export interface Access {
    level: number
    type: string
    faction: boolean
    company: boolean
    log: Log
}

export interface Log {
    custom_permissions: boolean
    available: any[]
}

export interface User {
    id: number
    faction_id: number
    company_id: number
}



export default async function getKeyInfo(): Promise<TornResponse<KeyInfoResponse>> {
    return await tornFetch<KeyInfoResponse>({
        endpoint: "/key/info"
    });
}

export async function checkAPIKey(data: KeyInfoResponse): Promise<boolean> {
    return data.info.access.type === "Full Access";
}
