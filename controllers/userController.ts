import { json } from "stream/consumers";
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

const addUser = (id: number, name: string, email: string, password: string) => {
  const user = database.find((user) => user.id === id);
  if (user) {
    return null;
  }

  const gitUser = { id: id, name: name, email: email, password: password };

  database.push(gitUser);
  console.log("in add git user, after the push");
};

// IM SO LOST OBJECT OBECJET??

// const addUser = (profile: Profile) => {
//   const user = database.find((user) => user.id === parseInt(profile.id));
//   if (user) {
//     return null;
//   }

//   const gitUser = {
//     id: parseInt(profile.id),
//     name: profile.displayName,
//     email: profile.profileUrl,
//     password: profile.provider,
//   };

//   database.push(gitUser);
//   console.log("in add git user, after the push");
// };

export { getUserByEmailIdAndPassword, getUserById, addUser };
