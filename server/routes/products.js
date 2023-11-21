const express = require('express');
const router = express.Router();

const {
  createProduct,
  getProducts,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct
} = require('../controllers/products');

/**
 * @swagger
 * /api/v1/products/createProduct:
 *   post:
 *     summary: Create a new product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               imgPath:
 *                 type: string
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created a product
 *       500:
 *         description: Server error
 */
router.post('/createProduct', createProduct);

/**
 * @swagger
 * /api/v1/products:
 *   get:
 *     summary: Get all products
 *     responses:
 *       200:
 *         description: Successfully retrieved products
 *       500:
 *         description: Server error
 */
router.get('/', getProducts);

/**
 * @swagger
 * /api/v1/products/{id}:
 *   get:
 *     summary: Get a single product by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved the product
 *       500:
 *         description: Server error
 */
router.get('/:id', getSingleProduct);

/**
 * @swagger
 * /api/v1/products/updateProduct:
 *   put:
 *     summary: Update a product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               imgPath:
 *                 type: string
 *               title:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully updated the product
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
router.put('/updateProduct', updateSingleProduct);

/**
 * @swagger
 * /api/v1/products/deleteProduct:
 *   delete:
 *     summary: Delete a product
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully deleted the product
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
router.delete('/deleteProduct', deleteSingleProduct);

module.exports = router;
