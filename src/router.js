const Router = require('express').Router()

Router.get('/', (request, response) => {
    response.status(200).send({
        succes: true,
        data: {
            autor: 'Adrian RM',
            email: 'hodurbalder@gmail.com',
            message: 'NodeJS API'
        }
    })
})

module.exports = [
    Router,
    require('./users/users.router'),
    // require('./sessions/sessions.router'),
]