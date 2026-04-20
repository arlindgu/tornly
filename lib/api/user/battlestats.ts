"use server"

import { tornFetch } from "@/lib/api/client";
import { TornResponse } from "../errors/errors";

export interface UserBattlestatsResponse {
    battlestats: Battlestats
}

export interface Battlestats {
    strength: BattleStat
    defense: BattleStat
    speed: BattleStat
    dexterity: BattleStat
    total: number
}

export interface BattleStat {
    value: number
    modifier: number
    modifiers: Modifier[]
}

export interface Modifier {
    effect: string
    value: number
    type: string
}


export default async function getUserBattlestats(): Promise<TornResponse<UserBattlestatsResponse>> {
    return await tornFetch<UserBattlestatsResponse>({
        endpoint: "/user/battlestats"
    });
}



