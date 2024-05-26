import Dashboard from '../models/dashboard.js';

// Get all users
export const getAllUsers = async (req, res) => {
      const users = await Dashboard.find();
      return users;
};
