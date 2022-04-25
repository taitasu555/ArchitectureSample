import express from 'express'
import router from './router'
import bodyParser from 'body-parser'

const app = express()

// bodyがundefinedにならないように
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Route設定
app.use('/api', router)

app.listen(3001, () => {
  console.log('listening on port 3001')
})

export default app
