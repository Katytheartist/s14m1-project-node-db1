const router = require('express').Router()

const md = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
try {
  //throw new Error('poo')
  res.json('get accts')
} catch(err) {
  next(err)
}
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
try {
  res.json('get acct by id')
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
