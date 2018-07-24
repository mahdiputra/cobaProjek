//profile berguna untuk menyimpan data profil pengguna

const express =require('express');
const router = express.Router()


//res .json mengirim file json
router.get('/test',(req,res)=> res.json({msg:"profile works"}))


module.exports = router;