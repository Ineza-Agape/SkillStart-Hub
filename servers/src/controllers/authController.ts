import { Request, Response } from 'express';
import dbPromise from '../database';
import bcrypt from 'bcrypt';

export const signup = async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const db = await dbPromise;
    const existingUser = await db.get('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists. Please log in.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await db.run('INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)', 
                [firstName, lastName, email, hashedPassword]);

    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const db = await dbPromise;
    const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};