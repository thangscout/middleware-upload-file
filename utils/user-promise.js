const fs = require('fs');

const removeImage = (indexFinded, users, pathImagesRemove) =>{
    return new Promise(resolve =>{
        try {
            pathImagesRemove.forEach(pathImages=>{
                fs.unlink(pathImages, error =>{
                    if(error) return resolve({error: true, message: error.message});
                    resolve({error: false, message: 'REMOVE_IMAGE_SUCCESS'});
                })
            })
            users.splice(indexFinded, 1);
            return resolve({error: false, message:'REMOVE_IMAGE_SUCCESS 2'});
        } catch (error) {
            resolve({error: true, message: error.message});
        }
    })
}

exports.REMOVE_PROMISE = removeImage;