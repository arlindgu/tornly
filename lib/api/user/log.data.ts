const logTypes = [
        {
            "id": 1104,
            "title": "Item market sell (old)"
    },
        {
            "id": 1113,
            "title": "Item market sell"
    },
        {
            "id": 1221,
            "title": "Bazaar sell (legacy)"
    },
        {
            "id": 1226,
            "title": "Bazaar sell"
    },
        {
            "id": 2405,
            "title": "Item use wallet"
    },
        {
            "id": 2407,
            "title": "Item use stash box"
    },
        {
            "id": 4210,
            "title": "Item shop sell"
    },
        {
            "id": 4220,
            "title": "Item shop sell points"
    },
        {
            "id": 4441,
            "title": "Trade money incoming"
    },
        {
            "id": 4510,
            "title": "Ammo sell"
    },
        {
            "id": 4810,
            "title": "Money receive"
    },
        {
            "id": 5011,
            "title": "Points market sell"
    },
        {
            "id": 5451,
            "title": "Bank withdraw"
    },
        {
            "id": 5460,
            "title": "Cashiers check withdraw"
    },
        {
            "id": 5511,
            "title": "Stock sell"
    },
        {
            "id": 5531,
            "title": "Stock special money"
    },
        {
            "id": 5720,
            "title": "Crime success money gain"
    },
        {
            "id": 5928,
            "title": "Property sell"
    },
        {
            "id": 5937,
            "title": "Property rental market rent owner"
    },
        {
            "id": 5943,
            "title": "Property rental market extension accept owner"
    },
        {
            "id": 6012,
            "title": "Offshore bank interest"
    },
        {
            "id": 6020,
            "title": "Hunting"
    },
        {
            "id": 6200,
            "title": "Loan increase"
    },
        {
            "id": 6220,
            "title": "Job pay"
    },
        {
            "id": 6221,
            "title": "Company employee pay"
    },
        {
            "id": 6285,
            "title": "Company withdraw"
    },
        {
            "id": 6300,
            "title": "Company sell"
    },
        {
            "id": 6404,
            "title": "Job special gain money"
    },
        {
            "id": 6407,
            "title": "Job special class action lawsuit"
    },
        {
            "id": 6509,
            "title": "Company special gain money"
    },
        {
            "id": 6539,
            "title": "Company special use intricate hack"
    },
        {
            "id": 6549,
            "title": "Company special use logistics report"
    },
        {
            "id": 6708,
            "title": "Bounty refund"
    },
        {
            "id": 6710,
            "title": "Bounty claim"
    },
        {
            "id": 6736,
            "title": "Faction give money receive"
    },
        {
            "id": 6754,
            "title": "Faction money receive ownership"
    },
        {
            "id": 6793,
            "title": "Faction payout money receive"
    },
        {
            "id": 6811,
            "title": "Faction payday receive"
    },
        {
            "id": 7125,
            "title": "Image advert refund"
    },
        {
            "id": 7815,
            "title": "Missions complete"
    },
        {
            "id": 8155,
            "title": "Attack mug"
    },
        {
            "id": 8165,
            "title": "Attack arrest"
    },
        {
            "id": 8300,
            "title": "Casino slots win"
    },
        {
            "id": 8305,
            "title": "Casino roulette win"
    },
        {
            "id": 8314,
            "title": "Casino high-low cash in full"
    },
        {
            "id": 8315,
            "title": "Casino high-low cash in half"
    },
        {
            "id": 8320,
            "title": "Casino keno win"
    },
        {
            "id": 8331,
            "title": "Casino craps win"
    },
        {
            "id": 8355,
            "title": "Casino blackjack win"
    },
        {
            "id": 8357,
            "title": "Casino blackjack insurance win"
    },
        {
            "id": 8358,
            "title": "Casino blackjack push"
    },
        {
            "id": 8359,
            "title": "Casino blackjack surrender"
    },
        {
            "id": 8374,
            "title": "Casino spin the wheel win money"
    },
        {
            "id": 8395,
            "title": "Casino russian roulette win"
    },
        {
            "id": 8399,
            "title": "Casino russian roulette timeout refund"
    },
        {
            "id": 8400,
            "title": "Casino russian roulette leave"
    },
        {
            "id": 8411,
            "title": "Casino poker table leave"
    },
        {
            "id": 8413,
            "title": "Casino poker tournament unregister"
    },
        {
            "id": 8444,
            "title": "Casino poker tournament winnings"
    },
        {
            "id": 8455,
            "title": "Bookie withdraw"
    },
        {
            "id": 8465,
            "title": "Bookie withdraw (new)"
    },
        {
            "id": 8741,
            "title": "Racing receive refund"
    },
        {
            "id": 8940,
            "title": "Christmas town money"
    },
        {
            "id": 8960,
            "title": "Easter egg hunt pickup blue egg (legacy)"
    },
        {
            "id": 9015,
            "title": "Crime success money gain (new)"
    },
        {
            "id": 9052,
            "title": "Crime success bootlegging sell DVDs"
    },
        {
            "id": 9056,
            "title": "Crime success skimming sell card details"
    }
    ] as const

export interface ItemMarketSellOldData { //1104

}

export interface ItemMarketSellData { //1113

}

export interface BazaarSellLegacyData { //1221

}

export interface BazaarSellData { //1226

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





















