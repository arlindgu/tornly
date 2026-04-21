import { Dexie, EntityTable } from "dexie";
import { Log } from "./api/user/log";
import { AttackMugData, CompanyEmployeePayData, JobPayData, MissionsCompleteData, PointsMarketSellData } from "./api/user/log.data";
import { AttackMugParams, CompanyEmployeePayParams, JobPayParams, MissionsCompleteParams, PointsMarketSellParams } from "./api/user/log.params";



const db = new Dexie("TornlyDB:logs") as Dexie & {
    log6221: EntityTable<Log<CompanyEmployeePayData, CompanyEmployeePayParams>, "id">;
    log6220: EntityTable<Log<JobPayData, JobPayParams>, "id">;
    log5011: EntityTable<Log<PointsMarketSellData, PointsMarketSellParams>, "id">;
    log7815: EntityTable<Log<MissionsCompleteData, MissionsCompleteParams>, "id">;
    log8155: EntityTable<Log<AttackMugData, AttackMugParams>, "id">;
};

db.version(5).stores({
    log6221: "id, timestamp, details.id, data.pay, data.job_points, data.company",
    log6220: "id, timestamp, details.id, data.pay, data.job_points, data.job",
    log5011: "id, timestamp, details.id, data.cost_total, data.cost_each, data.quantity",
    log7815: "id, timestamp, details.id, data.money, data.credits, data.difficulty",
    log8155: "id, timestamp, details.id, data.defender, data.energy_used, data.money_mugged"
    
});

export async function saveToDB<D, P>(
    logType: keyof typeof db,
    logs: Log<D, P>[],
): Promise<{ success: boolean; error?: string }> {
    try {
        const table = db[logType] as any;
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

