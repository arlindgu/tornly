"use server"

import { cookies } from "next/headers";

export async function saveCookie(key: string, value: string) {
    const cookieStore = await cookies();
    cookieStore.set({
        name: key,
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

export async function checkCookieExists(key: string): Promise<boolean> {
    const cookieStore = await cookies();

    if (cookieStore.has(key)) {
        console.log(`Cookie "${key}" exists.`);
        return true;
    } else {
        console.log(`Cookie "${key}" does not exist.`);
        return false;
    }
}