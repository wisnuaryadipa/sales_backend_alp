import {Request} from 'express';
import sendResponse from '@src/utilities/sendResponse';
import flags from '@src/errors/flags';
import Joi from 'joi';
import BadRequest from '@src/errors/badRequest';

interface IRequestValidationSchema {
    body?: Joi.Schema;
    query?: Joi.Schema;
    params?: Joi.Schema;
    header?: Joi.Schema;
}

const baseController = {

    sendResponses : sendResponse,
    validateRequest: async (schema: IRequestValidationSchema, req: Request) => {
        const { query, body, headers, params } = req

        if (schema.query)
        await schema.query.validateAsync(query).catch(error => {
            throw new BadRequest({ message: error.message, flag: flags.INVALID_QUERY_PARAM })
        })

        if (schema.body)
        await schema.body.validateAsync(body).catch(error => {
            throw new BadRequest({ message: error.message, flag: flags.INVALID_BODY })
        })

        if (schema.header)
        await schema.header.validateAsync(headers, { allowUnknown: true }).catch(error => {
            throw new BadRequest({ message: error.message, flag: flags.INVALID_HEADER })
        })

        if (schema.params)
        await schema.params.validateAsync(params, { allowUnknown: true }).catch(error => {
            throw new BadRequest({ message: error.message, flag: flags.INVALID_URL_PARAM })
        })
    }
}

export {sendResponse}
export default baseController;