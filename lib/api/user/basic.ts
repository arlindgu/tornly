import { TornResponse } from "../errors/errors"
import { tornFetch } from "../client";

export interface UserBasicResponse {
    profile: Profile
}

export interface Profile {
    id: number
    name: string
    level: number
    gender: string
    status: Status
}

export interface Status {
    description: string
    details: any
    state: string
    color: string
    until: any
}

export default async function getUserBasic(): Promise<TornResponse<UserBasicResponse>> {
    return await tornFetch<UserBasicResponse>({
        endpoint: "/user/basic"
    });
}