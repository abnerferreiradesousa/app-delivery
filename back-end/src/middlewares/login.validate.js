const loginSchema = require('../validations/login.schema');
const ErrorConstructor = require('../helpers/errorConstructor');

const loginValidate = (req, res, next) => {
  const { email, password } = req.body;

  const { error } = loginSchema.validate({ email, password });

  if (error) next(ErrorConstructor(400, error.message));

  next();
};

module.exports = loginValidate; 