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
 * /api/v1/products:
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
 *                 type: string
 *               color:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successfully created a product
 *       500:
 *         description: Server error
 */
router.post('/', createProduct);

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
 * /api/v1/products/{id}:
 *   put:
 *     summary: Update a product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
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
 *                 type: string
 *               color:
 *                 type: string
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
router.put('/:id', updateSingleProduct);

/**
 * @swagger
 * /api/v1/products/{id}:
 *   delete:
 *     summary: Delete a product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully deleted the product
 *       404:
 *         description: Product not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteSingleProduct);

module.exports = router;
