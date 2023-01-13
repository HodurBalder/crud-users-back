const Bcrypt = require('bcrypt')

module.exports = {
    bcryptHash,
    bcryptCompare,
}


function bcryptHash(value) {
    return Bcrypt.hashSync(value, 7)
}

function bcryptCompare(value, hash) {
    return Bcrypt.compareSync(value, hash)
}
