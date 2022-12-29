import { NextFunction, Request, Response } from "express"

export type Schema = {
    [key: string]: string
}

export type Error = {
    property: string
    reason: string 
}

export class Errors {
    constructor(
        public errors: Error[]
    ) {}

    isSuccess() {
        return this.errors.length == 0
    }
}

type Requirement = {
    type: string
    isRequired: boolean
}

export const query = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const errors = validate(req.query, schema)

        if (errors.isSuccess()) {
            next()
        }
        else {
            res.status(400).json({
                message: "Invalid query parameters",
                errors: errors.errors
            })
        }
    }
}

export const params = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const errors = validate(req.params, schema)

        if (errors.isSuccess()) {
            next()
        }
        else {
            res.status(400).json({
                message: "Invalid url parameters",
                errors: errors.errors
            })
        }
    }
}

export const body = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const errors = validate(req.body, schema)

        if (errors.isSuccess()) {
            next()
        }
        else {
            res.status(400).json({
                message: "Invalid body parameters",
                errors: errors.errors
            })
        }
    }
}

const validate = (body: any, schema: Schema) => {
    return new Errors(
        Object.entries(schema)
            .map(([property, requirement]) => checkProperty(body, property, parseRequirement(requirement)))
            .filter(error => error != null)
            .map(error => error!)
    )
}

const parseRequirement = (requirement: string): Requirement => {
    let isRequired = !requirement.endsWith('?')
    let type = isRequired ? requirement : requirement.substring(0, requirement.length - 1)

    return {
        type,
        isRequired
    }
}

const checkProperty = (body: any, property: string, requirement: Requirement): Error | null => {

    const isExists = Object.keys(body).includes(property)

    if (!isExists && requirement.isRequired) {
        return {
            property,
            reason: "is required"
        }
    }

    if (isExists) {
        const type = typeof body[property]

        if (requirement.type == 'array') {
            console.log(body[property]);
            if (!Array.isArray(body[property])) {
                return {
                    property,
                    reason: "must be a " + requirement.type + " but found " + type
                }
            }
        }
        else if (type != requirement.type) {
            return {
                property,
                reason: "must be a " + requirement.type + " but found " + type
            }
        }
    }

    return null
}