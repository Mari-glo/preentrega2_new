const { productModel } = require("../models/products.model");

class ProductManagerMongo{
    constructor(){
        this.model = productModel
    }

    async getAllProducts(query, options) {
      const products = await productModel.paginate(query, options);
      return products;
    }
    
      
      async getProductById(id) {
        const productFind = await Product.findOne({ _id: id });
        if (!productFind) return `No se encuentra el producto "${id} "`;
        return productFind;
      }
    
      
      async addProduct(product) {
        let { title, description, img, price, stock, status } = product;
    
        const verProductInfo = Object.values(product).includes(undefined);
    
        if (verProductInfo) return "información incompleta";
    
        if (status = "true") product.status = true;
        if (status = "false") product.status = false;
    
        const newProduct = await Product.create(product);
        return newProduct;
      }
    
     
      async updateProduct(id, data) {
        const productUpdate = await Product.updateOne({ _id: id }, data);
        return productUpdate;
      }
    
      
      async deleteProduct(id) {
        const productDelete = await Product.deleteOne({ _id: id });
    
        return productDelete;
      }
    }
    

module.exports = { ProductManagerMongo }