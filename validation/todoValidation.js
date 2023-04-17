const Validator = require("validator");
const isEmpty = require("is-empty");

const validateTodoInput = data => {
	let errors = {};
	// convert empty fields to an empty string so we can use validator functions
	data.todo = !isEmpty(data.todo) ? data.todo : "";

	// name check
	if (Validator.isEmpty(data.todo)) {
		errors.todo = "Todo is required";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

module.exports = validateTodoInput;