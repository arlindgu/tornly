import { tornFetch } from "@/lib/api/client";
import { TornResponse } from "../errors/errors";

export interface TornLogcategoriesResponse {
    logcategories: Logcategory[]
}

export interface Logcategory {
    id: number
    title: string
}

export default async function getTornLogcategories(): Promise<TornResponse<TornLogcategoriesResponse>> {
    return await tornFetch<TornLogcategoriesResponse>({
        endpoint: "/torn/logcategories"
    });
}