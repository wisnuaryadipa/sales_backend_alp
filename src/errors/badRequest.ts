import ApplicationError from '@src/errors/applicationError';
import { IApplicationErrorOption } from '@src/interfaces/IApplicationErrorOption';

export default class BadRequest extends ApplicationError {
    constructor(option?: IApplicationErrorOption) {
        super({
            ...option,
            message: option?.message || 'Bad request',
            httpCode: 400,
        })
    }
}