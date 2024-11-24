// lib/db.js
import clientPromise from './mongodb';
import bcrypt from 'bcryptjs';

export const getUserByEmail = async (email) => {
  const client = await clientPromise;
  const db = client.db();
  const usersCollection = db.collection('users');
  const user = await usersCollection.findOne({ email });
  return user;
};

export const createUser = async (userData) => {
  const client = await clientPromise;
  const db = client.db();
  const usersCollection = db.collection('users');
  const result = await usersCollection.insertOne(userData);
  return result;
};

export const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 12); // Hash with 12 rounds
  return hashedPassword;
};

export const verifyPassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};


