"use server"

import { tornFetch } from "../client";
import { TornResponse } from "../errors/errors";

export interface UserTimestampResponse {
    timestamp: number
}

export default async function getUserTimestamp(): Promise<TornResponse<UserTimestampResponse>> {
    return await tornFetch<UserTimestampResponse>({
        endpoint: "/user/timestamp"
    });
}