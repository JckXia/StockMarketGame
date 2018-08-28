const Ninja = require('../models/ninja');

var JwtStrategy = require('passport-jwt').Strategy,
   ExtractJwt = require('passport-jwt').ExtractJwt;
   module.exports=function(passport){
var opts = {}
opts.jwtFromRequest =ExtractJwt.fromAuthHeaderWithScheme('jwt')
opts.secretOrKey = 'secret';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  
   Ninja.findOne({name: jwt_payload.name}, function(err, user) {
       if (err) {
           return done(err, false);
       }
       if (user) {
           return done(null, user);
       } else {

           return done(null, false);
           // or you could create a new account
       }
   });
}));
}
