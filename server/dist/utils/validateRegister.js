"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
exports.validateRegister = (input) => {
    if (!input.email.includes("@")) {
        return [
            {
                field: "email",
                message: "email not valid",
            },
        ];
    }
    if (input.username.length <= 2) {
        return [
            {
                field: "username",
                message: "length must be greater than 3",
            },
        ];
    }
    if (input.username.includes("@")) {
        return [
            {
                field: "username",
                message: "cannot include an @",
            },
        ];
    }
    if (input.password.length <= 6) {
        return [
            {
                field: "password",
                message: "length must be greater than 6",
            },
        ];
    }
    return null;
};
//# sourceMappingURL=validateRegister.js.map