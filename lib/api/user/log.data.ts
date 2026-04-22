export interface ItemMarketSellOldData {

}

export interface ItemMarketSellData {

}

export interface BazaarSellLegacyData {

}

export interface BazaarSellData {

}

export interface ItemUseWalletData {
    item: number
    faction: number
    items: [
        id: number,
        uid: any,
        qty: number,
    ]
    money: number
}

export interface ItemUseStashBoxData {
}

export interface ItemShopSellData {

}

export interface ItemShopSellPointsData {
    
}

export interface TradeMoneyIncomingData {

}

export interface AmmoSellData {

}


export interface MoneyReceiveData {
    sender: number
    anonymous: number
    money: number
    message: string
}

export interface PointsMarketSellData {
    buyer: number
    quantity: number
    cost_each: number
    cost_total: number
    listing_id: number
}

export interface BankWithdrawData {
}

export interface CashiersCheckWithdrawnData {
}

export interface StockSellData {

}

export interface StockSpecialMoney {

}

export interface CrimeSucessMoneyGain {

}

export interface PropertySellData {
}

export interface PropertyRentalMarketRentOwnerData {

}

export interface PropertyRentalMarketExtensionAcceptOwner {

}

export interface OffshoreBankInterestData {
    interest: number
    balance: number
}

export interface HuntinData{

}

export interface LoanIncreaseData {

}

export interface JobPayData {
    pay: number
    job_points: number
    working_stats_received: string
    job: number
}

export interface CompanyEmployeePayData {
    pay: number
    job_points: number
    working_stats_received: string
    company: number
}

export interface CompanyWithdrawData {

}

export interface CompanySellData {

}

export interface JobSpecialGainMoney {

}

export interface JobSpecialClassActionLawsuitData {

}

export interface CompanySpecialGainMoney {

}

export interface CompanySpecialUseIntrticateHackData {
    
}

export interface CompanySpecialUseLogisticsReportData {

}

export interface BountyRefundData {

}

export interface BountyClaimData {

}

export interface FactionMoneyReceiveOwnershipData {

}

export interface FactionPayOutMoneyReceiveData {
    
}

export interface FactionPayDayReceiveData {
    
}

export interface ImageAdvertRefundData {

}

export interface MissionsCompleteData {
    type: string;
    agent: number;
    mission: number;
    difficulty: string;
    money: number;
    credits: number;
}

export interface AttackMugData {
    defender: number
    anonymous: number
    energy_used: number
    money_mugged: number
    attackers: number
    chain: number
    log: string
}

export interface AttackArrestData {

}

export interface CasinoSlotsWinData {

}

export interface CasinoRouletteWinData {

}

export interface CasinoHighLowCashInFullData {

}

export interface CasinoHighLowCashInHalfData {
    
}   

export interface CasinoKenoWinData {

}

export interface CasinoBlackjackWinData {

}

export interface CasinoBlackjackInsuranceWinData {
    
}

export interface CasinoBlackjackPushWinData {
    
}

export interface CasinoBlackjackSurrenderData {
    
}

export interface CasinoRussianRouletteWinData {
    
}

export interface CasinoRussianRouletteTimeoutRefundData {
    
}

export interface CasinoRusiaanRouletteLeaveData {

}

export interface CasinoPokerTableLeaveData {

}

export interface CasinoPokerTournamentUnregisterData {
    
}

export interface CasinoPokerTounamentWinningsData {

}

export interface BookieWithdrawData {

}

export interface BookieWithdrawNewData {
    
}

export interface RacingReceiveRefundData {
    
}

export interface ChristmasTownMoneyData {

}

export interface EasterEggHuntPickupBlueEggLegacyData {
    
}

export interface CrimeSucessMoneyGainNewData {

}

export interface CrimeSucessBotleggingSellDVDsData {

}

export interface CrimeSucessSkimmingSellCardDetailsData {

}





















