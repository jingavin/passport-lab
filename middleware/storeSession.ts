import session, { MemoryStore } from "express-session";

const store = new MemoryStore();

export const sessionSettings = session({
  store,
  secret: "secretKey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 24 * 60 * 60 * 1000,
  },
});

export { store };
