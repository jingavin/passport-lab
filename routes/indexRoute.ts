import express from "express";
const router = express.Router();
import { ensureAuthenticated } from "../middleware/checkAuth";
import { store } from "../middleware/storeSession";

router.get("/", (req, res) => {
  res.send("welcome");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  console.log(JSON.stringify(req.user) + " REQ< USER JERJERE");
  console.log(" DSAHBOARD ROUTE HERE");
  res.render("dashboard", {
    user: req.user,
  });
});

router.get("/admin", ensureAuthenticated, (req, res) => {
  const user = req.user;

  if (user?.admin) {
    store.all((err, sessions) => {
      // chatgpt wrote this formatted array
      const sessionArray = Object.entries(sessions || {}).map(
        ([sessionId, sessionData]) => ({
          sessionId,
          sessionData,
        })
      );

      res.render("admin", { sessionArray });
    });
  } else {
    res.redirect("/dashboard");
  }
});

router.post("/admin/revoke", ensureAuthenticated, (req, res) => {
  const { sessionId } = req.body;

  store.destroy(sessionId, (err) => {
    res.redirect("/admin");
  });
});

export default router;
