import { NextFunction, Request, Response } from "express";

/*
FIX ME (types) 😭
DONE ??
*/
export const ensureAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.isAuthenticated());
  console.log(" IN AUTHNETICAED");
  if (req.isAuthenticated()) {
    console.log("abouce req.user");
    console.log(req.user);
    return next();
  }
  res.redirect("/auth/login");
};

/*
FIX ME (types) 😭
DONE ??
*/
export const forwardAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/dashboard");
};
