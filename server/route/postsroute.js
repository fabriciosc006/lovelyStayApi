const express = require ('express');
const router = express.Router();
const postService = require('../service/postsService');
const getService = require('../service/getService');


router.get('/posts', async function(req,res){
    const get = await getService.getFetch();
    res.json();
});
router.post('/posts');
router.put('/posts/:id');
router.delete('/posts/:id');




module.exports = router;