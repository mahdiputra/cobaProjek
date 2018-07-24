//users hanya berguna untuk autentikasi username email paspord
const express =require('express');
const router = express.Router();


//res .json mengirim file json
router.get('/test',(req,res)=> res.json({msg:"users works"}));


module.exports = router;