const { body, validationResult } = require('express-validator');

const bookValidationRules = () => {
    return [
        body('author')
            .not()
            .isEmpty()
            .withMessage('Author is required')
            .trim()
            .escape(),
        body('title')
            .not()
            .isEmpty()
            .trim()
            .escape()
            .withMessage('Title is required'),
        body('description')
            .not()
            .isEmpty()
            .trim()
            .escape()
            .withMessage('Description is required'),
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const returnedErrors = [];
    errors.array().map((err) => returnedErrors.push({ [err.param]: err.msg }));

    return res.status(400).json({
        errors: returnedErrors,
    });
};

export { bookValidationRules, validate };
