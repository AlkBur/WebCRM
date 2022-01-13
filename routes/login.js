import express from 'express';
import jwt from 'jsonwebtoken';
import * as users from "../models/user.js";
import { logger } from "../log.js";
import { tokenKey } from "../config.js";
import auth from "../auth.js";

const router = express.Router();

router.post('/login', function (req, res) {
    try {

        const { username, password } = req.body;

        const user = users.find(username);
        if (user && user.verifyPassword(password)) {

            const accessToken = jwt.sign({ username: user.username }, tokenKey);

            res.cookie('access_token', accessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
            })

            return res.status(200).json({
                message: 'User found',
                token: accessToken,
                code: 0,
            })
        }
    } catch (e) {
        logger.warn(`WebCRM running at http://localhost:${port}`)
        res.status(404).json({ message: 'User not found', code: -1 })
    }
});

router.get("/logout", auth, (req, res) => {
    return res
        .clearCookie("access_token")
        .status(200)
        .json({ message: "Successfully logged out" });
});



export default router;