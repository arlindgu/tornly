"use server"

import { tornFetch } from "../client";
import { TornResponse } from "../errors/errors";

export interface UserBarsResponse {
    bars: Bars
}

export interface Bars {
    energy: Energy
    nerve: Nerve
    happy: Happy
    life: Life
    chain: Chain
}

export interface Energy {
    current: number
    maximum: number
    increment: number
    interval: number
    tick_time: number
    full_time: number
}

export interface Nerve {
    current: number
    maximum: number
    increment: number
    interval: number
    tick_time: number
    full_time: number
}

export interface Happy {
    current: number
    maximum: number
    increment: number
    interval: number
    tick_time: number
    full_time: number
}

export interface Life {
    current: number
    maximum: number
    increment: number
    interval: number
    tick_time: number
    full_time: number
}

export interface Chain {
    id: number
    current: number
    max: number
    timeout: number
    modifier: number
    cooldown: number
    start: number
    end: number
}


export default async function getUserBars(): Promise<TornResponse<UserBarsResponse>> {
    return await tornFetch<UserBarsResponse>({
        endpoint: "/user/bars"
    });
}