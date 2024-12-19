import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { StatusCode } from './types';
import { v4 as uuid } from 'uuid';
import Joi, { boolean } from 'joi';

interface User {
    name: string;
    email: string;
    password: string;
    active: boolean;
    registerNumber: number;
}

const userSchema = Joi.object<User>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    active: Joi.boolean().optional(),
    registerNumber: Joi.number().optional()
})

function validateRequest(data: User) {
    return userSchema.validate(data, { abortEarly: false });
}

function validateUserRequest(data: User) {
    const { error } = validateRequest(data);
    if (error) {
        return {
            error: error.details.map((error) => error.message).join(', ')
        };
    }
    return data;
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.get('/', (req: Request, res: Response) => {
    res.status(StatusCode.NOT_FOUND).json({
        version: '1.0.0',
        message: 'Dominio total del mundo'
    })
});

app.post('/user', (req: Request, res: Response) => {
    const { name, email, password, active, registerNumber } = req.body as User;
    const userOrError = validateUserRequest({ name, email, password, active, registerNumber })

    if ('error' in userOrError) {
        res.status(StatusCode.BAD_REQUEST).json({
            error: userOrError.error
        });
        return;
    }

    if ( !name ) {
        res.status(StatusCode.BAD_REQUEST).json({
            error: 'Name is required'
        });
        return; 
    }

    if (typeof name !== 'string') {
        res.status(StatusCode.BAD_REQUEST).json({
            error: 'Name must be a string'
        });
        return; 
    }

    const id = uuid();
    res.status(StatusCode.CREATED).json({
        id,
        ...req.body
    });
});


export default app;
