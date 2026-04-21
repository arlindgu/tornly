export interface CompanyEmployeePayData {
    pay: number
    job_points: number
    working_stats_received: string
    company: number
}

export interface JobPayData {
    pay: number
    job_points: number
    working_stats_received: string
    job: number
}

export interface PointsMarketSellData {
    buyer: number
    quantity: number
    cost_each: number
    cost_total: number
    listing_id: number
}

export interface MissionsCompleteData {
    type: string;
    agent: number;
    mission: number;
    difficulty: string;
    money: number;
    credits: number;
}

export interface AttackMugData{
    defender: number
    anonymous: number
    energy_used: number
    money_mugged: number
    attackers: number
    chain: number
    log: string
}

