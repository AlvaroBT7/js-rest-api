import { Router } from "express";
import usersData from "../js/users.js";

let users = usersData;

import {
  addUser,
  createUser,
  getUser,
  getUsers,
  removeUser,
} from "../js/utilities.js";

const router = Router();

router.get("/", (req, res) => {
  if (getUsers(users).length === 0) return res.status(200).send("No users yet");
  console.log(getUsers(users));
  res.status(200).json(getUsers(users));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const user = getUser(getUsers(users), +id);
  if (!user) return res.status(404).send("User not found");
  res.status(200).json(user);
});

router.post("/", (req, res) => {
  const newEntry = req.body;
  const newUser = createUser(newEntry);
  res.json(addUser(getUsers(users), newUser));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const user = getUser(getUsers(users), +id);
  if (!user) return res.status(404).send("User not found");
  const newUsers = removeUser(getUsers(users), user);
  users = newUsers;
  res.json(newUsers);
});

export default router;
