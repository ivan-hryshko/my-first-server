const Application = require('./framework/Application')
const PORT = process.env.PORT || 5000
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')

const app = new Application()

app.use(jsonParser)

app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Server start on PORT: ${PORT}`))
