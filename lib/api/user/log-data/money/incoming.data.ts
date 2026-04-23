
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
        { id: number, uid: number, qty: number }
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
    user: number
    trade_id: string
    parsed_trade_id: number
    money: number
}

export interface Log4510Data { // Ammo sell
    ammo: number
    quantity: number
    value: number
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
    amount: number
}

export interface Log5460Data { // Cashiers check withdraw
    amount: number
}

export interface Log5511Data { // Stock sell
    stock: number
    amount: number
    worth: number
    price: string
    fees: number
    profit: number
}

export interface Log5531Data { // Stock special money
stock: number
money: number
}

export interface Log5720Data { // Crime success money gain
    crime: number
    nerve: number
    money_gained: number
}

export interface Log5928Data { // Property sell
    property: number
    property_id: number
    cost: number
    happy: number
    buyer: number
}

export interface Log5937Data { // Property rental market rent owner
    property: 7
    property_id: number
    rent: number
    days: number
    happy: number
    renter: number
}

export interface Log5943Data { // Property rental market extension accept owner
    // TODO GET LOGS
}

export interface Log6012Data { // Offshore bank interest
    interest: number
    balance: number
}

export interface Log6020Data { // Hunting
    session_type: string
    cost: number
    income: number
    hunting_skill_gain: string
    hunting_skill: string
}

export interface Log6200Data { // Loan increase
    received: number
    loan_balance: number
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
company: number
withdrawn: number
balance: number
}

export interface Log6300Data { // Company sell
company: number
sale_value: number
type: number
}

export interface Log6404Data { // Job special gain money
special_used: string
job_points_used: number
job_points: number
money_gained: number
}

export interface Log6407Data { // Job special class action lawsuit
lawyer: number
money_increased: number
}

export interface Log6509Data { // Company special gain money
special_used: number
job_points_used: number
job_points: number
money_gained: number
}

export interface Log6539Data { // Company special use intricate hack
//
}

export interface Log6549Data { // Company special use logistics report
//
}

export interface Log6708Data { // Bounty refund
//
}

export interface Log6710Data { // Bounty claim
    lister: number
    anonymous: number
    target: number
    bounty_reward: number
}

export interface Log6736Data { // Faction give money receive
sender: number
faction: number
money_given: number
}

export interface Log6754Data { // Faction money receive ownership
// TODO GET LOGS
}

export interface Log6793Data { // Faction pay out money receive
// TODO GET LOGS
}

export interface Log6811Data { // Faction pay day receive
sender: number
faction: number
money_given: number
}

export interface Log7125Data { // Image advert refund
money: number
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
// TODO GET LOGS
}

export interface Log8300Data { // Casino slots win
bet_amount: number
won_amount: number
barrel_position: number[]
combination: number
}

export interface Log8305Data { // Casino roulette win
bet_amount: number
won_amount: number
result: number
bet_type: number
bet_numbers: number[]
}

export interface Log8314Data { // Casino high low cash in full
round: number
pot: number
}

export interface Log8315Data { // Casino high low cash in half
    round: number
    pot: number
}

export interface Log8320Data { // Casino keno win
bet_amount: number
won_amount: number
numbers: number
matches: number
}

export interface Log8331Data { // Casino craps win}
roll: string
winnings: [
    {
        dontPass: number
    }
]
}

export interface Log8355Data { // Casino blackjack win
player_cards: string
dealer_cards: string
winnings: number
win_state: string
}

export interface Log8357Data { // Casino blackjack insurance win
bet: number
winnings: number
}

export interface Log8358Data { // Casino blackjack push win
player_cards: string
dealer_cards: string
money: number
}

export interface Log8359Data { // Casino blackjack surrender
    player_cards: string
    dealer_cards: string
    money: number
}

export interface Log8374Data { // Casino russian roulette win
wheel: string
money: number
}

export interface Log8399Data { // Casino russian roulette timeout refund
// TODO GET LOGS
}

export interface Log8400Data { // Casino russian roulette leave
game_id: number
opponent: string
refund: number
}

export interface Log8411Data { // Casino poker table leave
table: number
value: number
}

export interface Log8413Data { // Casino poker tournament unregister
// TODO GET LOGS
}

export interface Log8444Data { // Casino poker tournament winnings
// TODO GET LOGS
}

export interface Log8455Data { // Bookie withdraw
withdrawn: number
}

export interface Log8465Data { // Bookie withdraw new
    withdrawn: number
}

export interface Log8741Data { // Racing receive refund
refund: number
}

export interface Log8940Data { // Christmas town money
minigame: string
money: number
}

export interface Log8960Data { // Easter egg hunt pickup blue egg (legacy)
money_increased: number
}

export interface Log9015Data { // Crime success money gain new
crime_action: string
outcome: number
nerve: number
money_gained: number
unique: string
}

export interface Log9052Data { // Crime success bootlegging sell dvds
crime_action: string
outcome: number
nerve: number
dvds: number
money_gained: number
unique: string
}

export interface Log9056Data { // Crime success skimming sell card details
crime_action: string
outcome: number
nerve: number
card_details: number
money_gained: number
unique: string
}

















