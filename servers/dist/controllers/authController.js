"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SECRET_KEY = process.env.JWT_SECRET || 'yourSecretKey';
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstName, lastName, email, password } = req.body;
    try {
        const db = yield database_1.default;
        const existingUser = yield db.get('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists. Please log in.' });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        yield db.run('INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)', [firstName, lastName, email, hashedPassword]);
        res.status(201).json({ success: true, message: 'User created successfully!' });
    }
    catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
exports.signup = signup;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const db = yield database_1.default;
        const user = yield db.get('SELECT * FROM users WHERE email = ?', [email]);
        if (!user || !(yield bcrypt_1.default.compare(password, user.password))) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({ success: true, message: 'Login successful!', token });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
exports.login = login;
