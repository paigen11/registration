import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;
import User from 'models/Users';

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    User.findById(id, done);
});

authFail = (done) => {
    done(null, false, { message: 'incorrect email/password combination'});
};

passport.use(new LocalStrategy((email, password, done) => {
    User.findOne({
        email: email
    }, (err, user) => {
        if (err) return done(err);
        if (!user) {
            return authFail(done);
        }
        if(!user.validPassword(password)) {
            return authFail(done);
        }
        return done(null, user);
    });
}));

