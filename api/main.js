const jsonServer = require('json-server')
const auth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.db = router.db

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(auth)

server.use('/api', router)
server.listen(3000, () => {
  console.log('Server api dang chay')
})