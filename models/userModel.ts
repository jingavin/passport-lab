const database = [
  {
    id: 1,
    name: "Jimmy Smith",
    email: "jimmy123@gmail.com",
    password: "jimmy",
  },
  {
    id: 2,
    name: "Johnny Doe",
    email: "johnny123@gmail.com",
    password: "johnny123!",
  },
  {
    id: 3,
    name: "Jonathan Chen",
    email: "jonathan123@gmail.com",
    password: "jonathan123!",
  },
];

const userModel = {
  /* FIX ME (types) 😭 */
  // DONE ??
  findOne: (email: string) => {
    const user = database.find((user) => user.email === email);
    if (user) {
      return user;
    }
    throw new Error(`Couldn't find user with email: ${email}`);
  },
  /* FIX ME (types) 😭 */
  // DONE ??
  findById: (id: number) => {
    console.log(id + "ID HEREHREHRHERERHEH IDIDIDIDDII");
    const user = database.find((user) => user.id === id);
    if (user) {
      return user;
    }
    return null;
    // throw new Error(`Couldn't find user with id: ${id}`);
  },
};

export { database, userModel };
