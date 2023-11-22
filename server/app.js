const express = require('express');
require('dotenv').config();
require('express-async-errors');
const cors = require('cors');
const bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger-docs'); // Adjust the path

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const authRouter = require('./routes/auth');
const productsRouter = require('./routes/products');

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/products', productsRouter);

const connectDB = require('./db/connect');

const port = process.env.PORT || 3001;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}.`);
        });

    } catch (error) {
        console.log(error);   
    }
}

// Serve Swagger UI documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

start();

module.exports = app;
