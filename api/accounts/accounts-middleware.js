const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR 
  console.log('checkAccountPayload middleware')
  next()
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR 
  console.log('checkAccountNameUnique middleware')
  next()
}

exports.checkAccountId = async (req, res, next) => {
  //console.log('checkAccountId midware')
  try{
    const account = await Account.getById(req.params.id)
    if(!account){
      next({
        status: 404, message: 'account not found',
      })
    } else{
      req.account = account
      next()
    }
  } catch(err){
    next(err)
  }
  next()
}
