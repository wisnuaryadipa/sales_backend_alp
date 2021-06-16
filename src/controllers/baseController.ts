import {Request, RequestHandler} from 'express';
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

export class BaseController {
    public Joi = Joi;

    sendResponse = sendResponse

    requestHandler!: RequestHandler;

}