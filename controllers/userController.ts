import { userModel, database } from "../models/userModel";
import { Profile } from "passport-github2";

const getUserByEmailIdAndPassword = (email: string, password: string) => {
  let user = userModel.findOne(email);
  if (user) {
    if (isUserValid(user, password)) {
      return user;
    }
  }
  return null;
};
const getUserById = (id: any) => {
  let user = userModel.findById(id);
  if (user) {
    return user;
  }
  return null;
};

function isUserValid(user: any, password: string) {
  return user.password === password;
}

const isUserEmailValid = (email: string) => {
  const emailLookup = database.find((user) => user.email === email);
  return emailLookup?.email;
};

const passwordLookup = (password: string) => {
  const pass = database.find((user) => user.password === password);
  return pass?.password;
};

const addUser = (id: any, name: string) => {
  const user = database.find((user) => user.id === id);
  if (user) {
    return null;
  }

  const gitUser = { id: id, name: name };

  database.push(gitUser);
  console.log("in add git user, after the push");
};

export {
  getUserByEmailIdAndPassword,
  getUserById,
  addUser,
  isUserEmailValid,
  isUserValid,
  passwordLookup,
};
