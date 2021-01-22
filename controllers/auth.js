const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');


// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public

exports.register = async (req, res) => {

  const { name, email, password, role} = req.body;

  //Create user
  const user = await User.create({
      name,
      email,
      password,
      role
  })
  console.log(user)
  user.save((err,result) => {
      if(err){
          return res.status(400).json({
              err
          })
      }
      res.status(200).json({ result})
  })
 
}