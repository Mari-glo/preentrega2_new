const { Router } = require ('express')
const { uploader } = require('../utils/multer')
const { userModel } = require ('../Daos/Mongo/models/user.model')


const router = Router()

router.get('/users', async (req, res)=>{
    try {
        const {numPage=1, limit=20, query=''} = req.query

        let { 
            docs,
            hasPrevPage,
            hasNextPage,
            nextPage,
            prevPage,
            page
         } = await userModel.paginate({}, {limit: limit, page: numPage, lean: true})
         res.status(200).render('users',{
            showNav: true,
            users: docs,
            hasPrevPage,
            hasNextPage,
            prevPage,
            nextPage,
            page

         })
    } catch (error) {
        console.log(error)
        
    }
})

router.get('/subirarch', (req, res)=>{
    res.render('subirArch')
})

router.post('/subirarch', uploader.single('file'), (req,res)=>{
    if(!req.file) return res.status(400).send({status:'error', error:'No se ha guardado la imagen'})
    res.send({status:'Exito', payload: 'El archivo se ha subido con éxito'})

})

router.get('/products', (req, res)=>{
    res.render('products')
})
router.get('/chat', (req, res)=>{
    res.render('chat')
})
router.get('/carts', (req, res)=>{
    res.render('carts')
})
router.get('/', (req, res)=>{
    res.render('index')
})

  



module.exports = router