import joi, { Schema } from 'joi'

export const SignInSchema: Schema = joi.object()
.keys({
    email: joi.string()
        .email(),
    password: joi.string()
        .min(3)
        .max(40),
  })  