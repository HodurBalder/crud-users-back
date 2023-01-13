require('colors').enable()

const Express = require('express')
const Morgan = require('morgan')
const Path = require('path')
const Middlewares = require('./src/middlewares')
const Database = require('./src/database')
const Config = require('./src/config')
const Router = require('./src/router')
const Cors = require('cors')


const App = Express()

App.set('port', process.env.PORT || 3000)


App.use(Morgan('dev'))
App.use(Express.urlencoded({extended: false}))
App.use(Express.json())

App.use(Middlewares.responseType)
App.use(Router)
App.use(Middlewares.serverNotFound)
App.use(Middlewares.serverError)
App.use(Cors())

Database.then(() => {
    App.listen(Config.port, () => {
        console.info(`[HOST] ${ Config.host }`.magenta)
        console.info(`[PORT] ${ Config.port }`.magenta)
        console.info(`[TZ] ${ new Date() }`.magenta)
    })
}).catch(() => {
    process.exit(0)
})