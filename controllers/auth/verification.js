const { User } = require("../../models");

const { NotFound } = require("http-errors");

const verification = async (req, res) => {
  const { verificationToken } = req.params;
  const user = await User.findOneAndUpdate(verificationToken);

  if (!user) {
    throw new NotFound("User not found");
  }

  await User.findOneAndUpdate(user._id, {
    verificationToken: null,
    verify: true,
  });

  res.status(200).json({
    status: "success",
    code: 200,
    message: "Verification successful",
  });
};

module.exports = { verification };
