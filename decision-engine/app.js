const express = require('express')
const app = express()
const port = 5005

app.use(express.json())

app.post('/loanResult', (req, res) => {
  const { business, overallProfit, preAssessment } = req.body
  // logic to approve or reject, this is an assumption
  console.log('Logging in decision engine...', business, overallProfit, preAssessment)
  // logic for assessment
  const valid = true

  res.send(res.status(200).json({ approved: valid, approvalRate: preAssessment }))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
