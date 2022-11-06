const http = require('http')
const EventEmitter = require('events')
const PORT = process.env.PORT || 5000

const emitter = new EventEmitter()
class Router {
  constructor() {
    this.endpoints = {}
  }

  request(method = 'GET', path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {}
    }

    const endpoint = this.endpoints[path]

    if (endpoint[method]) {
      throw new Error (`[${method} at address ${path} is exist]`)
    }

    endpoint[method] = handler
    emitter.on(`[${path}]:[${method}]`, (req, res) => {
      handler(req, res)
    })
  }

  get(path, handler) {
    this.request('GET', path, handler)
  }
  post(path, handler) {
    this.request('POST', path, handler)
  }
  put(path, handler) {
    this.request('PUT', path, handler)
  }
  delete(path, handler) {
    this.request('DELETE', path, handler)
  }
}

const router = new Router()
router.get('/users', (req, res) => {
  res.send('YOU SEND REQUEST TO /USERS')
})
router.get('/posts', (req, res) => {
  res.send('YOU SEND REQUEST TO /POSTS')
})

const server = http.createServer((req, res) => {
  // res.writeHead(200, {
  //   'Content-type': 'text/html; charset=utf-8 '
  // })
  res.writeHead(200, {
    'Content-type': 'application/json;'
  })
  // res.end('І Ї працює!')
  // res.end('<h1>Hello world</h1>')
 //
  if (req.url === '/post') {
    res.end('POSTS')
  }
  if (req.url === '/users') {
    res.end('USERS')
  }
  res.end(JSON.stringify({
    id: 1,
    name: 'ivan'
  }))
})

server.listen(PORT, () => console.log(`Server start on PORT: ${PORT}`))
