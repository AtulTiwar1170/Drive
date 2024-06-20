const multer = require('multer');

const Storage = multer.memoryStorage();
const upload = multer(
    {
        Storage: Storage,
    }
);


module.exports = upload;