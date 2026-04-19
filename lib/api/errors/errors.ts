interface TornErrorResponse {
    error: TornAPIError
}

interface TornAPIError {
    code: number
    error: string
}

export const TornErrorCodes: TornErrorResponse[] = [
    { error: { code: 0, error: "Unknown error: Unhandled error, should not occur." } },
    { error: { code: 1, error: "Key is empty: Private key is empty in current request." } },
    { error: { code: 2, error: "Incorrect Key: Private key is wrong/incorrect format." } },
    { error: { code: 3, error: "Wrong type: Requesting an incorrect basic type." } },
    { error: { code: 4, error: "Wrong fields: Requesting incorrect selection fields." } },
    { error: { code: 5, error: "Too many requests: Requests are blocked for a small period of time because of too many requests per user (max 100 per minute)." } },
    { error: { code: 6, error: "Incorrect ID: Wrong ID value." } },
    { error: { code: 7, error: "Incorrect ID-entity relation: A requested selection is private." } },
    { error: { code: 8, error: "IP block: Current IP is banned for a small period of time because of abuse." } },
    { error: { code: 9, error: "API disabled: Api system is currently disabled." } },
    { error: { code: 10, error: "Key owner is in federal jail: Current key can't be used because owner is in federal jail." } },
    { error: { code: 11, error: "Key change error: You can only change your API key once every 60 seconds." } },
    { error: { code: 12, error: "Key read error: Error reading key from Database." } },
    { error: { code: 13, error: "The key is temporarily disabled due to owner inactivity: The key owner hasn't been online for more than 7 days." } },
    { error: { code: 14, error: "Daily read limit reached: Too many records have been pulled today by this user from our cloud services." } },
    { error: { code: 15, error: "Temporary error: An error code specifically for testing purposes that has no dedicated meaning." } },
    { error: { code: 16, error: "Access level of this key is not high enough: A selection is being called of which this key does not have permission to access." } },
    { error: { code: 17, error: "Backend error occurred, please try again." } },
    { error: { code: 18, error: "API key has been paused by the owner." } },
    { error: { code: 19, error: "Must be migrated to crimes 2.0." } },
    { error: { code: 20, error: "Race not yet finished." } },
    { error: { code: 21, error: "Incorrect category: Wrong cat value." } },
    { error: { code: 22, error: "This selection is only available in API v1." } },
    { error: { code: 23, error: "This selection is only available in API v2." } },
    { error: { code: 24, error: "Closed temporarily." } },
    { error: { code: 25, error: "Invalid stat requested." } },
    { error: { code: 26, error: "Only category or stats can be requested." } },
    { error: { code: 27, error: "Must be migrated to organized crimes 2.0." } },
    { error: { code: 28, error: "Incorrect log ID." } },
    { error: { code: 29, error: "Category selection is not available for interaction logs." } },
];

export type TornResponse<T> = T | TornErrorResponse;

export function isTornError(response: unknown): response is TornErrorResponse {
    return typeof response === "object" && response !== null && "error" in response;
}