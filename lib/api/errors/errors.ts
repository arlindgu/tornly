// lib/torn/errors.ts

export interface TornAPIError {
    code: number;
    error: string;
}

// ✅ Success hat data + error: null
export interface TornSuccessResponse<T> {
    data: T;
    error: null;
}

// ✅ Error hat data: null + error object
export interface TornErrorResponse {
    data: null;
    error: TornAPIError;
}

// Union Type
export type TornResponse<T> = TornSuccessResponse<T> | TornErrorResponse;

// Type Guards
export function isSuccess<T>(
    response: TornResponse<T>
): response is TornSuccessResponse<T> {
    return response.error === null;
}

export function isError<T>(
    response: TornResponse<T>
): response is TornErrorResponse {
    return response.error !== null;
}

// ✅ Error Codes (nur zur Referenz, einfacher)
export const TornErrorCodes: TornAPIError[] = [
    { code: 0, error: "Unknown error: Unhandled error, should not occur." },
    { code: 1, error: "Key is empty: Private key is empty in current request." },
    { code: 2, error: "Incorrect Key: Private key is wrong/incorrect format." },
    { code: 3, error: "Wrong type: Requesting an incorrect basic type." },
    { code: 4, error: "Wrong fields: Requesting incorrect selection fields." },
    { code: 5, error: "Too many requests: Requests are blocked for a small period of time because of too many requests per user (max 100 per minute)." },
    { code: 6, error: "Incorrect ID: Wrong ID value." },
    { code: 7, error: "Incorrect ID-entity relation: A requested selection is private." },
    { code: 8, error: "IP block: Current IP is banned for a small period of time because of abuse." },
    { code: 9, error: "API disabled: Api system is currently disabled." },
    { code: 10, error: "Key owner is in federal jail: Current key can't be used because owner is in federal jail." },
    { code: 11, error: "Key change error: You can only change your API key once every 60 seconds." },
    { code: 12, error: "Key read error: Error reading key from Database." },
    { code: 13, error: "The key is temporarily disabled due to owner inactivity: The key owner hasn't been online for more than 7 days." },
    { code: 14, error: "Daily read limit reached: Too many records have been pulled today by this user from our cloud services." },
    { code: 15, error: "Temporary error: An error code specifically for testing purposes that has no dedicated meaning." },
    { code: 16, error: "Access level of this key is not high enough: A selection is being called of which this key does not have permission to access." },
    { code: 17, error: "Backend error occurred, please try again." },
    { code: 18, error: "API key has been paused by the owner." },
    { code: 19, error: "Must be migrated to crimes 2.0." },
    { code: 20, error: "Race not yet finished." },
    { code: 21, error: "Incorrect category: Wrong cat value." },
    { code: 22, error: "This selection is only available in API v1." },
    { code: 23, error: "This selection is only available in API v2." },
    { code: 24, error: "Closed temporarily." },
    { code: 25, error: "Invalid stat requested." },
    { code: 26, error: "Only category or stats can be requested." },
    { code: 27, error: "Must be migrated to organized crimes 2.0." },
    { code: 28, error: "Incorrect log ID." },
    { code: 29, error: "Category selection is not available for interaction logs." },
];