const Application = require('./framework/Application')
const PORT = process.env.PORT || 5001
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const parseUrl = require('./framework/parseUrl')
const mongoose = require('mongoose')

const app = new Application()

app.use(jsonParser)
app.use(parseUrl('http://localhost:5001'))

app.addRouter(userRouter)

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://giver0:12345@cluster0.8oohz6f.mongodb.net/?retryWrites=true&w=majority')
    app.listen(PORT, () => console.log(`Server start on PORT: ${PORT}`))
  } catch (error) {
    console.log(error);
  }
}

start()
