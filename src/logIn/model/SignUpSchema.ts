import joi, { Schema } from 'joi'

export const SignUpSchema: Schema = joi.object()
.keys({
    username: joi.string()
        .min(3)
        .max(40),
    email: joi.string()
        .email(),
    password: joi.string()
        .min(3)
        .max(40),
  });
