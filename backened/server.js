const express = require('express')
require('dotenv').config()
const cors = require('cors')
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const app = express()

const port = process.env.PORT || 3001
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

let SID, phnNumber

app.get("/", (req, res) => {
  res.send('Hola')
})

app.post('/checkverify', async (req, res) => {
  phnNumber = req.body.phnNumber
  const service = await client.verify.services.create({ friendlyName: 'Connect app Verification code' })
  SID = service.sid
  const verification = await client.verify.services(SID).verifications.create({ to: phnNumber, channel: 'sms' })
  res.send(verification.status)
})

app.post('/checktoken', async (req, res) => {
  let verifyCode = req.body.verifyCode
  const verification_check = await client.verify.services(SID).verificationChecks.create({ to: phnNumber, code: verifyCode })
  console.log(verification_check)
  res.send(verification_check.status)
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})
