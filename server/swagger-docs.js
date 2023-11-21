const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'API documentation for your application',
    },
    servers: [
      {
        url: 'http://localhost:3001', // Update this URL according to your app's URL
      },
    ],
  },
  apis: ['./routes/products.js'], // Add the correct path to your route files
};

const specs = swaggerJsdoc(options);

module.exports = specs;
