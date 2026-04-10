require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;

const userDB = require("./model/userModel");

const app = express();

// ✅ PORT (MATCH GOOGLE CONSOLE)
const PORT = process.env.PORT;

// ✅ DB
mongoose.connect(process.env.MONGO_URL);
console.log("✅ MongoDB Connected");

// ✅ GOOGLE CREDENTIALS
const clientid = process.env.GOOGLE_CLIENT_ID;
const clientsecret = process.env.GOOGLE_CLIENT_KEY;

// ✅ MIDDLEWARE
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

// ✅ SESSION
app.use(
  session({
    secret: "addy123",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// ✅ PASSPORT
app.use(passport.initialize());
app.use(passport.session());

// ✅ GOOGLE STRATEGY
passport.use(
  new OAuth2Strategy(
    {
      clientID: clientid,
      clientSecret: clientsecret,
      callbackURL: "http://localhost:8000/auth/google/callback", // ✅ MATCHED
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await userDB.findOne({ googleId: profile.id });

        if (!user) {
          user = new userDB({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
          });
          await user.save();
        }

        return done(null, user);
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

// ✅ SESSION OPTIMIZATION
passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userDB.findById(id);
  done(null, user);
});

// ================= ROUTES ================= //

// ✅ START LOGIN
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// ✅ CALLBACK
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/dashboard",
    failureRedirect: "http://localhost:5173/login",
  })
);

// ✅ LOGIN SUCCESS
app.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      message: "User Login Successful",
      user: req.user,
    });
  } else {
    res.status(401).json({
      message: "Not Authorized",
    });
  }
});

// ✅ LOGOUT
app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);

    req.session.destroy(() => {
      res.redirect("http://localhost:5173/");
    });
  });
});

// ================= SERVER ================= //
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});