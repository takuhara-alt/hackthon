const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

module.exports = connectDB;
