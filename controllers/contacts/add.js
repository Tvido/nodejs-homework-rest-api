// const fs = require("fs/promises");
// const path = require("path");

const { Contact } = require("../../models");

// const productsDir = path.join(__dirname, "../../", "public/products");

const add = async (req, res, next) => {
  const result = await Contact.create(req.body);
  // const dirPath = path.join(productsDir, result._id);
  // await fs.mkdir(dirPath);
  res.status(201).json({ result });
};

// const add = async (req, res, next) => {
//   try {
//     const result = await Contact.create(req.body);
//     res.status(201).json({ result });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = add;
