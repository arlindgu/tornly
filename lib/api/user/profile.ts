"use server"

import { tornFetch } from "../client";
import { TornResponse } from "../errors/errors";

export interface UserProfileResponse {
    profile: Profile
}

export interface Profile {
    id: number
    name: string
    level: number
    rank: string
    title: string
    age: number
    signed_up: number
    faction_id: number
    honor_id: number
    property: Property
    donator_status: string
    image: string
    gender: string
    revivable: boolean
    role: string
    status: Status
    spouse: Spouse
    awards: number
    friends: number
    enemies: number
    forum_posts: number
    karma: number
    last_action: LastAction
    life: Life
}

export interface Property {
    id: number
    name: string
}

export interface Status {
    description: string
    details: any
    state: string
    color: string
    until: any
}

export interface Spouse {
    id: number
    name: string
    status: string
    days_married: number
}

export interface LastAction {
    status: string
    timestamp: number
    relative: string
}

export interface Life {
    current: number
    maximum: number
}



export default async function getUserProfile(): Promise<TornResponse<UserProfileResponse>> {
    return await tornFetch<UserProfileResponse>({
        endpoint: "/user/profile"
    });
}