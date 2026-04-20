import { tornFetch } from "@/lib/api/client";
import { TornResponse } from "../errors/errors";

export interface UserIconsResponse {
    icons: Icon[]
}

export interface Icon {
    id: number
    title: string
    description?: string
    until?: number
}

export default async function getUserIcons(): Promise<TornResponse<UserIconsResponse>> {
    return await tornFetch<UserIconsResponse>({
        endpoint: "/user/icons"
    });
}