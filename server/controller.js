const UserRegister = require("./registerSchema");
const userLogin = require("./loginSchema");

const show = (req, res) => {
    res.status(200).json({
        message: "register here"
    });
};

const register = async (req, res) => {
    try {
        const { firstName, email, password } = req.body; // collecting data from users

        const user = await UserRegister.create({
            firstName: firstName,
            email: email,
            password: password
        });
        if (user) {
            res.status(200).json({
                message: "User registration created",
                data: user
            });
        } else {
            res.status(400).json({
                message: "Not created"
            });
        }
    } catch (err) {
        console.log('Error in Register', err);
        res.status(500).json({
            message: 'Server error'
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user by email
        const user = await UserRegister.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Compare email and password
        if (user.email === email && user.password === password) {  // here user.email is the email from data base and email is the email by the user

            console.log("Logged in");
            // Send user data
            res.json({ user });
        } else {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { show, register, login };
