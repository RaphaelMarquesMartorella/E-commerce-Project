const Products = require('../models/Products'); // Import the Product model

// Create Product
const createProduct = async (req, res) => {
  try {
    const { imgPath, title, price, description } = req.body;
    
    const newProduct = new Products({
      imgPath,
      title,
      price,
      description
    });

    await newProduct.save();

    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Error creating product' });
  }
};

// Get All Products
const getProducts = async (_, res) => {
    try {
        const allProducts = await Products.find({}).maxTimeMS(20000);
        res.status(200).json(allProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Could not find the data.' });
    }
};

// Get Single Product by ID
const getSingleProduct = async (req, res) => {
    try {
        const getProduct = await Products.findById(req.params.id);
        if (!getProduct) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.status(200).json(getProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Could not find the data.' });
    }
};

// Update Single Product
const updateSingleProduct = async (req, res) => {
    try {
        const getProduct = await Products.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!getProduct) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.status(200).json(getProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating product.' });
    }
};

// Delete Single Product
const deleteSingleProduct = async (req, res) => {
    try {
        const getProduct = await Products.findByIdAndDelete(req.params.id);
        if (!getProduct) {
            return res.status(404).json({ message: 'Product not found.' });
        }
        res.status(200).json({ message: 'Deleted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting product.' });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct
};
