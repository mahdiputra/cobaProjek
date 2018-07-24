//post untuk post status dan yang lainnya dan komen
const express =require('express');
const router = express.Router()


//res .json mengirim file json
router.get('/test',(req,res)=> res.json({msg:"posts works"}))


module.exports = router;