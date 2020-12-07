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
            clientID: '2241452869319986',
            clientSecret: '51a3f6685988df8dd8e441fa5d1fec5b',
            callbackURL: 'http://localhost:3000/facebook/callback'
            //callbackURL: 'https://a-2-hospital-management.herokuapp.com/facebook/callback'
        },

        'github': {
             clientID: 'aac01a441f229be4fa4f',
             clientSecret: 'a58679ba9ffbc582929d21e2950b025b93e9776e',
             callbackURL: 'http://localhost:3000/github/callback'
          
         }
    }
}