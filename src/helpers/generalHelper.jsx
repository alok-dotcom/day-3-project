export const validateForm = ({
    fullname,
    email,
    password,
    mobileNumber,
    cpassword,
}) => {
    if (
        ![fullname, email, password, mobileNumber, cpassword].every(
            (field) => field !== undefined
        )
    ) {
        alert('Fill the required fields');
        return;
    }
    if (fullname.length == 0) {
        alert('Invalid Form, Full Name can not be empty');
        return;
    }

    if (email.length == 0) {
        alert('Invalid Form, Email Address can not be empty');
        return;
    }

    if (mobileNumber.length !== 10) {
        alert('Enter valid number');
        return;
    }

    if (password.length < 8) {
        alert(
            'Invalid Form, Password must contain greater than or equal to 8 characters.'
        );
        return;
    }

    if (!/[A-Z]/.test(password)) {
        alert('Invalid Form, 0 upper case characters in password');
        return;
    }

    if (!/[a-z]/.test(password)) {
        alert('Invalid Form, 0 lower case characters in password');
        return;
    }

    if (!/\d/.test(password)) {
        alert('Invalid Form, 0 digit characters in password');
        return;
    }

    if (!/[!@#$%^&*()_\-+=\[\]{}:;<>,.?]/.test(password)) {
        alert('Invalid Form, 0 special characters in password');
        return;
    }

    if (password !== cpassword) {
        alert("Password didn't match");
        return;
    }

    alert('Form is valid');
};
