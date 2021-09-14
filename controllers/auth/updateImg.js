const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models");
const avatarsDir = path.join(__dirname, "../../", "public/products");

const updateImg = async (req, res) => {
  const { id } = req.params;
  const { path: tmpPath, origanalname } = req.file;
  const uploadPath = path.join(avatarsDir, req.params.id, id, origanalname);
  try {
    const file = await Jimp.read(tmpPath);
    await file.resize(250, 250).write(tmpPath);
    await fs.rename(tmpPath, uploadPath);
    const image = `/public/avatars/${id}/${origanalname}`;
    await User.findByIdAndUpdate(id, { image });
    res.json({
      Status: "success",
      code: 200,
      data: {
        result: image,
      },
    });
  } catch (error) {
    await fs.unlink(tmpPath);
    throw error;
  }
};

module.exports = updateImg;
