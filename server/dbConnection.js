const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        // Connect to MongoDB using Mongoose
        const connect = await mongoose.connect(process.env.CONNECT, {
            // Optional: Additional connection options
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Upon successful connection, log connection details
        console.log(
            "Database connected",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        // If there's an error connecting to the database, log the error and exit the process
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
};

module.exports = connectDb;
