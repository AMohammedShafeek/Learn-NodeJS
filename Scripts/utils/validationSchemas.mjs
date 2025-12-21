export const createUserValidationSchema = {
    user_name: {
        notEmpty: {
            errorMessage: "Username is Required"
        },
        isLength: {
            option: {min:3, max:12},
            errorMessage: "Name Lenth Requirement not Met"
        },
        
    },
    age: {
        notEmpty: {
            errorMessage: "Age is Required"
        },
        isString: {
            errorMessage: "Age Must be in Numbers"
        }
    }
}