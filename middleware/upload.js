const moment = require('moment');
const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')

    },
    fileName(req, file, cb) {
        const date = moment().format('DDMMYYYY-HHmmss_SSS')
        cb(null, `${date}-${file.originalname}`)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false);
    }
}

const limits = {
    fileSize: 1024*1024*5
}

const multerConfig = multer({
    storage,
    fileFilter,
    limits
});

module.exports = { multerConfig }
