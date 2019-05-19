module.exports.login = (req,res)=>{
  res.send('Login')
};
module.exports.postLogin = (req,res) =>{
  req.body.status = true;
  res.status(200).json(req.body);
};