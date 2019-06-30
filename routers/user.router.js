const express = require('express');
const router = express.Router();

const UPLOAD_CONFIG = require('../utils/multer-config');


const users = [
    {
        username: 'User 01',
        images:{
            mainImg: ['hinh1.jpg'],
            otherImg:['hinh2.jpg', 'hinh3.jpg']
        }
    },
    {
        username: 'User 02',
        images:{
            mainImg: ['hinh4.jpg'],
            otherImg:['hinh5.jpg', 'hinh6.jpg']
        }
    },
    {
        username: 'User 03',
        images:{
            mainImg: ['hinh7.jpg'],
            otherImg:['hinh8.jpg', 'hinh9.jpg']
        }
    },
    {
        username: 'User 04',
        images:{
            mainImg: ['hinh6.jpg'],
            otherImg:['hinh9.jpg', 'hinh3.jpg']
        }
    }
];

const configImage = [
    {name:'mainImg', maxCount: 1},
    {name:'otherImg', maxCount: 2}
]

router.get('/', (req, res)=>{
    res.render('user', {users});
});

router.post('/add', UPLOAD_CONFIG.fields(configImage), (req, res)=>{
    const {username} = req.body;

    let mainImg = req.files.mainImg.map(img => img.originalname);
    let otherImg = req.files.otherImg.map(img => img.originalname);

    users.push({username, images: {mainImg, otherImg}});
    res.redirect('/user');
})

module.exports = router;