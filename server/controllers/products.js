const Products = require('../models/Products')

const createProduct = async (req, res) => {
    const { imgPath, title, price, description } = req.body;
  
    Products.findOne({}, (err, product) => {
      if (err) {
        res.status(500).json({ error: 'Error finding product' });
      } else {
        if (!product) {
          const newProduct = new Products({
            videoGames: [],
            imgPath,
            title,
            price,
            description,
          });
  
          newProduct.save()
            .then(savedProduct => {
              res.status(201).json(savedProduct);
            })
            .catch(error => {
              res.status(500).json({ error: 'Error saving product' });
            });
        } else {
          product.videoGames.push({
            imgPath,
            title,
            price,
            description
          });
  
          product.save()
            .then(savedProduct => {
              res.status(201).json(savedProduct);
            })
            .catch(error => {
              res.status(500).json({ error: 'Error saving product' });
              console.log(error);
            });
        }
      }
    });
  };
  

const getProducts = async (_,res) => {
    try {
       
        const allProducts = await Products.find({}).maxTimeMS(20000);
        res.status(200).json({allProducts})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Could not find the data.'})
    }
}

const getSingleProduct = async (req,res) => {
    try {
        const getProduct = await Products.findById(req.params.id)
    res.status(200).json({getProduct})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Could not find the data.'})
    }
    
}

const updateSingleProduct = async(req,res) => {
    const getProduct = await Products.findByIdAndUpdate({_id: req.body.productId}, req.body)
    if(getProduct){
        
        res.status(200).json(req.body)
    }else{
        res.status(404).json({message: "Something went wrong!"})
        throw new Error
    }
}

const deleteSingleProduct = async(req,res) => {
    const getProduct = await Products.findByIdAndDelete({_id: req.body.productId})
    if(getProduct){
        
        res.status(200).json("Deleted successfully!")
    }else{
        res.status(404).json({message: "Something went wrong!"})
    }
}


module.exports = {
    createProduct,
    getProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct
}
