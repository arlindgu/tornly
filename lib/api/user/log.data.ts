
export interface Log1104Data { // Item market sell (old)
    buyer: number
    item: number | [
        {
            id: number,
            uid: any,
            qty: number
        }
    ]
    cost: number
}

export interface Log1113Data { // Item market sell
    buyer: number
    anonymous: number
    items: [
        {
            id: number,
            uid: any,
            qty: number
        }
    ]
    cost_total: number
    fee: number
    cost_each: number
}

export interface Log1221Data { // Bazaar sell (legacy)
    buyer: number
    item: number
    quantity: number
    cost_each: number
    cost_total: number
}

export interface Log1226Data { // Bazaar sell
    buyer: number
    items: [
        {id: number, uid: number, qty: number }
    ]
    cost_each: number
    cost_total: number
}

export interface Log2405Data { // Item use wallet
    item: number
    faction: number
    items: [
        id: number,
        uid: any,
        qty: number,
    ]
    money: number
}

export interface Log2407Data { // Item use stash box
    item: number
    faction: number
    money: number
}

export interface Log4210Data { // Item shop sell
    item: number
    quantity: number
    value_each: number
    total_value: number
}

export interface Log4220Data { // Item shop sell points
    quantity: number
    value_each: number
    total_value: number
}

export interface Log4441Data { // Trade money incoming

}

export interface Log4510Data { // Ammo sell

}


export interface Log4810Data { // Money receive
    sender: number
    anonymous: number
    money: number
    message: string
}

export interface Log5011Data { // Points market sell
    buyer: number
    quantity: number
    cost_each: number
    cost_total: number
    listing_id: number
}

export interface Log5451Data { // Bank withdraw
}

export interface Log5460Data { // Cashiers check withdraw
}

export interface Log5511Data { // Stock sell

}

export interface Log5531Data { // Stock special money

}

export interface Log5720Data { // Crime success money gain

}

export interface Log5928Data { // Property sell
}

export interface Log5937Data { // Property rental market rent owner

}

export interface Log5943Data { // Property rental market extension accept owner

}

export interface Log6012Data { // Offshore bank interest
    interest: number
    balance: number
}

export interface Log6020Data { // Hunting

}

export interface Log6200Data { // Loan increase

}

export interface Log6220Data { //Job pay
    pay: number
    job_points: number
    working_stats_received: string
    job: number
}

export interface Log6221Data { // Company employee pay
    pay: number
    job_points: number
    working_stats_received: string
    company: number
}

export interface Log6285Data { // Company withdraw

}

export interface Log6300Data { // Company sell

}

export interface Log6404Data { // Job special gain money

}

export interface Log6407Data { // Job special class action lawsuit

}

export interface Log6509Data { // Company special gain money

}

export interface Log6539Data { // Company special use intricate hack
    
}

export interface Log6549Data { // Company special use logistics report

}

export interface Log6708Data { // Bounty refund

}

export interface Log6710Data { // Bounty claim
    lister: number
    anonymous: number
    target: number
    bounty_reward: number
}

export interface Log6736Data { // Faction give money receive

}

export interface Log6754Data { // Faction money receive ownership

}

export interface Log6793Data { // Faction pay out money receive

}

export interface Log6811Data { // Faction pay day receive

}

export interface Log7125Data { // Image advert refund

}

export interface Log7815Data { // Missions complete
    type: string;
    agent: number;
    mission: number;
    difficulty: string;
    money: number;
    credits: number;
}

export interface Log8155Data { // Attack mug
    defender: number
    anonymous: number
    energy_used: number
    money_mugged: number
    attackers: number
    chain: number
    log: string
}

export interface Log8165Data { // Attack arrest

}

export interface Log8300Data { // Casino slots win

}

export interface Log8305Data { // Casino roulette win

}

export interface Log8314Data { // Casino high low cash in full

}

export interface Log8315Data { // Casino high low cash in half
    
}   

export interface Log8320Data { // Casino keno win

}

export interface Log8331Data { // Casino craps win}
}

export interface Log8355Data { // Casino blackjack win

}

export interface Log8357Data { // Casino blackjack insurance win
    
}

export interface Log8358Data { // Casino blackjack push win
    
}

export interface Log8359Data { // Casino blackjack surrender
    
}

export interface Log8374Data { // Casino russian roulette win
    
}

export interface Log8399Data { // Casino russian roulette timeout refund
    
}

export interface Log8400Data { // Casino russian roulette leave

}

export interface Log8411Data { // Casino poker table leave

}

export interface Log8413Data { // Casino poker tournament unregister
    
}

export interface Log8444Data { // Casino poker tournament winnings

}

export interface Log8455Data { // Bookie withdraw

}
 
export interface Log8465Data { // Bookie withdraw new
    
}

export interface Log8741Data { // Racing receive refund
    
}

export interface Log8940Data { // Christmas town money

}

export interface Log8960Data { // Easter egg hunt pickup blue egg (legacy)
    
}

export interface Log9015Data { // Crime success money gain new

}

export interface Log9052Data { // Crime success bootlegging sell dvds

}

export interface Log9056Data { // Crime success skimming sell card details

}

export interface Log1Data {
    ipadress: string
}

export interface Log2Data {
}

export interface Log3Data {
}



















