const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const localSignupStrategy = require('../passport/local-signup')
const localLoginStrategy = require('../passport/local-login')
const authRoutes = require('../routes/auth')
const furnitureRoutes = require('../routes/furniture')
const projectRoutes = require('../routes/project')
const partRoutes = require('../routes/part')
const commentRoutes = require('../routes/comment')
const orderRoutes = require('../routes/order')
const statsRoutes = require('../routes/stats')

module.exports = app => {
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())
  app.use(passport.initialize())
  app.use(cors({
    origin: 'http://localhost:4200'
  }))

  passport.use('local-signup', localSignupStrategy)
  passport.use('local-login', localLoginStrategy)

  // routes
  app.use('/auth', authRoutes)
  app.use('/furniture', furnitureRoutes)
  app.use('/order', orderRoutes)
  app.use('/project', projectRoutes)
  app.use('/part', partRoutes)
  app.use('/comment', commentRoutes)
  app.use('/stats', statsRoutes)
}