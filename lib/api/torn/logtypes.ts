import { tornFetch } from "@/lib/api/client";
import { TornResponse } from "../errors/errors";

export interface TornLogtypesResponse {
    logtypes: Logtype[]
}

export interface Logtype {
    id: number
    title: string
}

export default async function getTornLogtypes(): Promise<TornResponse<TornLogtypesResponse>> {
    return await tornFetch<TornLogtypesResponse>({
        endpoint: "/torn/logtypes"
    });
}