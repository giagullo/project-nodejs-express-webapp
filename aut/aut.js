var arr = ['myuser']
var devUser = ''

// force user authorization in dev: no proxy active to send Remote-User
module.exports.setDevelopmentUser = function (sUser) {
    devUser = sUser
}

module.exports.protect =  function () {
    return function protect (req, res, next) {
        let remoteUser = (req.get('remote-user') || devUser)
        if (!remoteUser) {
            err  = new Error ('Not logged in');
            err.status=401;
            next (err)
        } else {
            console.log('Got user:' + remoteUser)
            if (arr.includes(remoteUser)  ) {
                // ok to access
                next()
            }
            else   {
                // errore
                err  = new Error ('User not authorized for this resource');
                err.status=403;    
                next (err)
            }
        }
    }
};