const got = require('got')
const express = require('express')
const app = express()

app.get('/', async (req, res) => {
  const { get } = req.query
  if (!get) {
    const { body } = await got('https://kusonime.com').catch(e => res.json({
      success: false,
      message: e
    }))
    return res.send(body)
  }
  const { body } = await got(`https://kusonime.com/${get}`).catch(e => res.json({
    success: false,
    message: e
  }))
  res.send(body)
})

app.listen(4545, () => {
  console.log(`Kusoproxy started @ localhost:4545`)
})