import { NextFunction, Request, Response } from "express"

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
    }
    catch(err: any) {
        next(err)        
    }
}