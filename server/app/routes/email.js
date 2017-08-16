const router = require('express').Router();
const clearbit = require('clearbit')('sk_b31c25d85b308515f3a2554e53a42103');
const Person = clearbit.Person;

router.post('/', (req, res, next) => {
  const resultObj = {}
  clearbit.Enrichment.find({email: req.body.email})
  .then((result)=>{
    resultObj.name = result.person.name.fullName;
    resultObj.company = result.company.name;
    resultObj.employees = result.company.metrics.employees;
    resultObj.phoneNumber = result.company.phone;
    res.send(resultObj);
  })
  .catch(clearbit.Enrichment.QueuedError, function (err) {
    console.log(err)
    res.send('error');
  })
  .catch(function (err) {
    console.log(err)
    res.send('error');
  });
});

module.exports = router;
