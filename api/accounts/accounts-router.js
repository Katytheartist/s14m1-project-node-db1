const router = require('express').Router()

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
try {
  //throw new Error('poo')
  res.json('get accts')
} catch(err) {
  next(err)
}
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
try {
  res.json('get acct by id')
} catch(err) {
  next(err)
}
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
try {
  res.json('create acct')
} catch(err) {
  next(err)
}
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
try {
  res.json('update acct')
} catch(err) {
  next(err)
}
});

router.delete('/:id', (req, res, next) => {
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
