import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {
  getUserByEmailIdAndPassword,
  getUserById,
} from "../../controllers/userController";
import { PassportStrategy, CustomUser } from "../../interfaces/index";

const localStrategy = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    const user = getUserByEmailIdAndPassword(email, password);
    return user
      ? done(null, user)
      : done(null, false, {
          message: "Your login details are not valid. Please try again",
        });
  }
);

/*
FIX ME (types) 😭
*/
passport.serializeUser(function (
  user: CustomUser,
  done: (err: any, id?: number) => void
) {
  console.log(user.id + "inside serialuser");
  done(null, user.id);
});

/*
FIX ME (types) 😭
*/
// for done create type called user with {id:num, email: string, password: string}
// 2 interface with the same name will be mergged together, called delcaration merging
// done looks for user interface which is empty on defualt
passport.deserializeUser(function (
  id: number,
  done: (err: any, id?: CustomUser | null) => void
) {
  let user = getUserById(id);
  if (user) {
    done(null, user);
  } else {
    done({ message: "User not found" }, null);
  }
});

const passportLocalStrategy: PassportStrategy = {
  name: "local",
  strategy: localStrategy,
};

export default passportLocalStrategy;
