const multer = require("multer");
const path = require("path");

const tmpDir = path.join(process.cwd(), "../tmp");
// const tmpDir = path.join(__dirname, "../", "tmp");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tmpDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  lomits: {
    filesize: 10240,
  },
});

const uploadMiddleware = multer({
  storage,
});

module.exports = uploadMiddleware;
