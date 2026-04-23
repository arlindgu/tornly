// Auto-generated from Torn API logtypes

export interface Log1401Data { 
    dumper: number
    item: number
    energy_used: number
} // Dump find (legacy)

export interface Log1402Data { 
    // TODO GET LOGS
} // Dump find none

export interface Log1404Data {
    dumer: number
    item: [
        {
        id: number
        uid: number
        qty: number
        }
    ]
    energy_used: number
} // Dump find

export interface Log2010Data { 
    item: number
    faction: number
    energy_decreased: number
    happy_increased: number
} // Item use entertainment

export interface Log2201Data { 
} // Item use cannabis overdose

export interface Log2211Data { 
    item: number
    faction: number
    happy_decreased: number
    energy_decreased: number
} // Item use ecstasy overdose

export interface Log2221Data { 
    item: number
    faction: number
    hospital_time_increased: number
    nerve_decreased: number
    energy_decreased: number
    happy_decreased: number
} // Item use ketamine overdose

export interface Log2231Data {
    item: number
    faction: number
    nerve_decreased: number
    happy_decreased: number
    energy_decreased: number
 } // Item use LSD overdose

export interface Log2241Data { 
    // TODO GET LOGS
} // Item use opium overdose

export interface Log2251Data {
    // TODO GET LOGS
 } // Item use PCP overdose

export interface Log2260Data { 
    item: number
    faction: number
    happy_increased: number
    energy_decreased: number
} // Item use shrooms

export interface Log2261Data { 
    item: number
    faction: number
    hospital_time_increased: number
    happy_decreased: number
    energy_decreased: number
    nerve_decreased: number
} // Item use shrooms overdose

export interface Log2271Data { 
    item: number
    faction: number
    happy_decreased: number
    energy_decreased: number
    nerve_decreased: number
    defense_decreased: number
    strength_decreased: number
    hospital_time_increased: number
} // Item use speed overdose

export interface Log2291Data { 
    item: number
    faction: number
    energy_decreased: number
    nerve_decreased: number
    happy_decreased: number
    hospital_time_increased: number
} // Item use xanax overdose

export interface Log2443Data {
    //
 } // Dirty bomb radiation

export interface Log4006Data { 
    parcel_id: number
    parcel_type: number
    nerve_decreased: number
    happy_decreased: number
    energy_decreased: number
} // Parcel open horses head

export interface Log5300Data { 
    trains: number
    energy_used: number
    strength_before: string
    strength_after: number
    strength_increased: number
    happy_used: number
    gym: number
} // Gym train strength

export interface Log5301Data { 
    trains: number
    energy_used: number
    defense_before: string
    defense_after: number
    defense_increased: number
    happy_used: number
    gym: number
} // Gym train defense

export interface Log5302Data { 
    trains: number
    energy_used: number
    speed_before: string
    speed_after: number
    speed_increased: number
    happy_used: number
    gym: number
} // Gym train speed

export interface Log5303Data { 
    trains: number
    energy_used: number
    dexterity_before: string
    dexterity_after: number
    dexterity_increased: number
    happy_used: number
    gym: number
} // Gym train dexterity

export interface Log5410Data { 
    user: number
    energy_used: number
    chance: string
    reviving_skill: string
} // Revive

export interface Log5415Data {
    patient: number
    energy_used: number
    chance: string
 } // Revive failure

export interface Log5971Data { 
    //NONE
} // Church pray

export interface Log6020Data { 
    session_type: string
    cost: number
    income: number
    hunting_skill_gain: string
    hunting_skill: string
} // Hunting

export interface Log6914Data { 
    territory: number
    status: string
} // Faction territory wall join energy cost

export interface Log8100Data { 
    defender: number
    energy_used: number
    hospital_time_increased: number
    log: string
} // Attack lost

export interface Log8105Data { 
    defender: number
    energy_used: number
    log: string
} // Attack stalemate

export interface Log8110Data {
    defender: number
    energy_used: number
    hospital_time_increased: number
    log: string
 } // Attack timeout

export interface Log8115Data {
    defender: number
    energy_used: number
    log: string
 } // Attack escape

export interface Log8140Data { 
    defender: number
    energy_used: number
    log: string
} // Attack failed

export interface Log8145Data { 
    defender: number
    energy_used: number
    log: string
} // Attack assist

export interface Log8150Data { 
    defender: number
    anonymous: number
    energy_used: number
    attackers: number
    chain: number
    log: string
} // Attack leave

export interface Log8155Data {
    defender: number
    anonymous: number
    energy_used: number
    attackers: number
    chain: number
    log: string
 } // Attack mug

export interface Log8160Data { 
    defender: number
    anonymous: number
    energy_used: number
    attackers: number
    chain: number
    log: string
} // Attack hospitalize

export interface Log8165Data { 
    // TODO GET LOGS
} // Attack arrest

