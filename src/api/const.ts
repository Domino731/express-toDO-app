export enum API_CONSTANTS {
    LOCALHOST = "http://localhost:8080"
}

export enum API_METHODS {
    POST = "POST",
    PUT = "PUT",
    GET = "GET",
    "DELETE" = "DELETE"
}

export type ApiMethodsUnion = keyof typeof API_METHODS;