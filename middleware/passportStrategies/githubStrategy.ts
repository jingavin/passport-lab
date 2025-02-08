import { Strategy as GitHubStrategy, Profile } from "passport-github2";
import { PassportStrategy } from "../../interfaces/index";
import { addUser, getUserById } from "../../controllers/userController";
import { Request } from "express";
import dotenv from "dotenv";
dotenv.config();

const githubStrategy: GitHubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID || "",
    clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    callbackURL: "http://localhost:8000/auth/github/callback",
    passReqToCallback: true,
  },

  /* FIX ME 😭 */
  async (
    // AM I EVEN SUPOSE TO USE THJESE IDK WHAT THEY ARE FOR EVEN
    req: Request,
    accessToken: any,
    refreshToken: any,
    profile: any,
    // profile: Profile,
    // WHY NO WORK PROFILE?
    done: any
  ) => {
    if (!getUserById(profile.id)) {
      addUser(
        profile.id,
        profile.displayName,
        profile.profileUrl,
        profile.provider
      );
      //   addUser(profile);
    }
    console.log("IN GITHUBE STRAT");
    console.log(profile);
    done(null, profile);
  }
);

const passportGitHubStrategy: PassportStrategy = {
  name: "github",
  strategy: githubStrategy,
};

export default passportGitHubStrategy;
