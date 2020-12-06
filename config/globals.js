// Set up Public array of global variables.
module.exports =
{
    'db': 'mongodb+srv://admin:admin@cluster0.x7aky.mongodb.net/tasks',
    ids: {
        'google': {
            clientID: '898603682684-4k1tad6c1s141gnqv26f4g3qq8hgknls.apps.googleusercontent.com',
            clientSecret: '0p7_CmOfTLnrIWdo9Qx0L2ll',
            callbackURL: 'http://localhost:3000/google/callback'
            //callbackURL: 'https://a-2-hospital-management.herokuapp.com/google/callback'
        },
        'facebook': {
            clientID: '284983652946610',
            clientSecret: '3dff81e1932f00fe9d6cb0f5e22d89ca',
            callbackURL: 'http://localhost:3000/facebook/callback'
            //callbackURL: 'nodemon'
        },

        /* 'github': {
             clientID: '',
             clientSecret: '',
             callbackURL: 'http://localhost:3000/github/callback'
             //callbackURL: 'nodemon'
         }*/
    }
}