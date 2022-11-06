const Router = require('./framework/Router')
const Application = require('./framework/Application')
const PORT = process.env.PORT || 5000

const router = new Router()
const app = new Application()

router.get('/users', (req, res) => {
  res.end('YOU SEND REQUEST TO /USERS')
})
router.get('/posts', (req, res) => {
  res.end('YOU SEND REQUEST TO /POSTS')
})

app.addRouter(router)
app.listen(PORT, () => console.log(`Server start on PORT: ${PORT}`))
