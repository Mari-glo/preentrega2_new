const { Router } = require ('express')
const { productModel } = require('../Daos/Mongo/models/products.model')

const router = Router()

router.get('/', async (req,res)=>{
    const products = await productModel.paginate({},{limit, page, lean: true})
    if(!products){
        res.send({status:'error', error: 'No se encontraron productos'})
    }
    res.send({status:'ok', payload: products})
})
router.post('/', async (req,res)=>{
    const newProduct = req.body
    try {
        let result = await productModel.create(newProduct)
    res.send({status:'ok', payload: result})
        
    } catch (error) {
        console.log(error);
        
    }
    
})
router.get('/:prod_id', async (req,res)=>{
    res.send('get product')
})

router.put('/:prod_id', async (req,res)=>{
    res.send('update product')
})

router.delete('/:prod_id', async (req,res)=>{
    res.send('delete product')
})



module.exports = router