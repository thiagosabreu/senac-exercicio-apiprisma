import { createUser, createUserWithPost, findUserByEmail, findUsers, updateUser } from "../models/User.js";

export const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await createUser(name, email);
    res.status(201).json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to add users", message: error.message });
  }
};

export const findAllUsers = async (req, res) => {
  try {
    const users = await findUsers();
    res.status(200).json({ users });
  }
  catch (error) {
    res
      .status(500)
      .json({ error: "Failed to find users", message: error.message })
  }
};

export const getUserByEmail = async (req, res) => {
  try {
    const user = await findUserByEmail(req.params.email);
    res.status(200).json({ user });
  }
  catch (error) {
    res
      .status(500)
      .json({ error: "Failed to find user", message: error.message })
  }
};

export const update = async (req, res) => {
  try {
    const { email } = req.params.email;
    const userData = req.body;
    const user = await updateUser(email, userData);
    res.status(200).json({ user });
  }
  catch (error) {
    res
      .status(500)
      .json({ error: "Failed to update user", message: error.message })
  }
};

export const delUser = async (req, res) => {
  try {
    const { email } = req.params.email;
    const user = await deleteUser(email);
    res.status(200).json({ user });
  }
  catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete user", message: error.message })
  }
};

export const createUserPost = async (req, res) => {
  try {
    const { userData, postData } = req.body;
    const user = await createUserWithPost(userData, postData);
    res.status(200).json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create user with post", message: error.message });
  }
};