import { Request, Response } from "express";

export interface AppContext {
    req: Request;
    res: Response;
    payload?: { userId: string };
}
