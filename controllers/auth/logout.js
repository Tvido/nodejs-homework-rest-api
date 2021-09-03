const { User } = require("../../models");

const logout = async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { token: null });
  res.json({
    status: "success",
    code: 200,
    message: "Success logout",
  });
};

// const logout = async (req, res, next) => {
//   try {
//     const id = req.user.id;
//     await User.updateToken(id, null);
//     res.status(204).json({});
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = logout;
