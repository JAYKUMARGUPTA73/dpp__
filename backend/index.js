const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const connectToMongo = async () => {
    try {
        // Replace 'mongodb://localhost:27017/your_database_name' with your MongoDB connection URI
        const uri = "mongodb+srv://jaystrp2022:X91yKsdNfNQ91eZy@cluster0.ab9zijb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

      await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        // Exit the process if MongoDB connection fails
        process.exit(1);
    }
};
connectToMongo();

// Regular User Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Authentication Routes
const authRoutes = require('./routes/authroutes');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});