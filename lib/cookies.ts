"use server"

import { cookies } from "next/headers";

export async function saveCookie(value: string) {
    const cookieStore = await cookies();
    cookieStore.set({
        name: "tornly:apikey",
        value: value,
    });
}

export  async function getCookie(key: string) {
    const cookieStore = await cookies();
    return cookieStore.get(key)?.value;
}

export async function deleteCookie(key: string) {
    const cookieStore = await cookies();
    cookieStore.delete(key);
}