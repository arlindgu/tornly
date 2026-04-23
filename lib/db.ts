"use client";

import { Dexie, EntityTable } from "dexie";
import { Log } from "./api/user/log";
import { Log6221Data, Log6220Data, Log5011Data, Log7815Data, Log8155Data, Log4810Data, Log2405Data, Log6012Data, Log1104Data, Log1113Data, Log1221Data, Log1226Data, Log2407Data, Log4210Data, Log4220Data } from "./api/user/log-data/money/incoming.data";
import { Log1Data, Log2Data, Log3Data } from "./api/user/log-data/system/account.data";
import { LogParams } from "./api/user/log.params";

const db = new Dexie("TornlyDB:logs") as Dexie & {
    log1: EntityTable<Log<Log1Data, LogParams>, "id">;
    log2: EntityTable<Log<Log2Data, LogParams>, "id">;
    log3: EntityTable<Log<Log3Data, LogParams>, "id">;
    log1104: EntityTable<Log<Log1104Data, LogParams>, "id">;
    log1113: EntityTable<Log<Log1113Data, LogParams>, "id">;
    log1221: EntityTable<Log<Log1221Data, LogParams>, "id">;
    log1226: EntityTable<Log<Log1226Data, LogParams>, "id">;
    log2405: EntityTable<Log<Log2405Data, LogParams>, "id">;
    log2407: EntityTable<Log<Log2407Data, LogParams>, "id">;
    log4210: EntityTable<Log<Log4210Data, LogParams>, "id">;
    log4220: EntityTable<Log<Log4220Data, LogParams>, "id">;
    log6221: EntityTable<Log<Log6221Data, LogParams>, "id">;
    log6220: EntityTable<Log<Log6220Data, LogParams>, "id">;
    log5011: EntityTable<Log<Log5011Data, LogParams>, "id">;
    log7815: EntityTable<Log<Log7815Data, LogParams>, "id">;
    log8155: EntityTable<Log<Log8155Data, LogParams>, "id">;
    log4810: EntityTable<Log<Log4810Data, LogParams>, "id">;
    log6012: EntityTable<Log<Log6012Data, LogParams>, "id">;
};


db.version(9).stores({
    log1: "id, timestamp",
    log2: "id, timestamp",
    log3: "id, timestamp",
    log1104: "id, timestamp, details.id, data.item.qty, data.item.id, data.cost",
    log1113: "id, timestamp, details.id, data.items.id, data.items.qty, data.cost_total, data.fee, data.cost_each",
    log1221: "id, timestamp, details.id, data.item, data.quantity, data.cost_each, data.cost_total",
    log1226: "id, timestamp, details.id, data.items.id, data.items.qty, data.cost_each, data.cost_total",
    log2405: "id, timestamp, details.id, data.item, data.faction, data.items.id, data.items.qty, data.money",
    log2407: "id, timestamp, details.id, data.item, data.faction, data.money",
    log4210: "id, timestamp, details.id, data.item, data.quantity, data.value_each, data.total_value",
    log4220: "id, timestamp, details.id, data.quantity, data.value_each, data.total_value",
    log6221: "id, timestamp, details.id, data.pay, data.job_points, data.company",
    log6220: "id, timestamp, details.id, data.pay, data.job_points, data.job",
    log5011: "id, timestamp, details.id, data.cost_total, data.cost_each, data.quantity",
    log7815: "id, timestamp, details.id, data.money, data.credits, data.difficulty",
    log8155: "id, timestamp, details.id, data.defender, data.energy_used, data.money_mugged",
    log4810: "id, timestamp, details.id, data.sender, data.money, data.anonymous",
    log6012: "id, timestamp, details.interest, details.balance"
});

export async function initDB() {
    try {
        await db.open();
        console.log('✅ Database initialized:', db.name);
        return true;
    } catch (error) {
        console.error('❌ Database initialization failed:', error);
        return false;
    }
}

export async function saveToDB<D, P>(
    logType: keyof typeof db,
    logs: Log<D, P>[],
): Promise<{ success: boolean; error?: string }> {
    try {
        const table = db[logType] as EntityTable<Log<D, P>, "id">;
        await table.bulkPut(logs);

        return { success: true };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
}

export { db }

