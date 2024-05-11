const router = require('express').Router()

const Account = require('./accounts-model')

const md = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
try {
  const accounts = await Account.getAll()
  //throw new Error('poo')
  res.json(accounts)
} catch(err) {
  next(err)
}
})

router.get('/:id', md.checkAccountId, async (req, res, next) => {
try {
  const account = await Account.getById(req.params.id)
  res.json(account)
} catch(err) {
  next(err)
}
})

router.post('/', 
md.checkAccountNameUnique, 
md.checkAccountPayload, 
(req, res, next) => {
  // DO YOUR MAGIC
try {
  res.json('create acct')
} catch(err) {
  next(err)
}
})

router.put('/:id', 
md.checkAccountId, 
md.checkAccountNameUnique, 
md.checkAccountPayload, 
(req, res, next) => {
  // DO YOUR MAGIC
try {
  res.json('update acct')
} catch(err) {
  next(err)
}
});

router.delete('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
try {
  res.json('delete acct')
} catch(err) {
  next(err)
}
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = router;
