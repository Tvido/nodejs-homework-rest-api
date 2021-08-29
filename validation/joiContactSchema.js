const Joi = require("joi");

const emailmask =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phonemask = /^[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const joiContactSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().pattern(emailmask).required(),
  phone: Joi.string().pattern(phonemask).required(),
});

module.exports = joiContactSchema;
