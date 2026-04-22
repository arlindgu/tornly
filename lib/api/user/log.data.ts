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

export interface MoneyReceiveData {
    sender: number
    anonymous: number
    money: number
    message: string
}

export interface ItemUseWalletData {
    item: number
    faction: number
    items: ItemUseWalletExtra[]
    money: number
}

export interface ItemUseWalletExtra {
    id: number
    uid: any
    qty: number
}

export interface OffshoreBankInterestData {
    interest: number
    balance: number
}



