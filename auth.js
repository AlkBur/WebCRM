import jwt from 'jsonwebtoken';
import { tokenKey } from "./config.js";

export default function (req, res, next) {
    const token = req.cookies.access_token;
    if (token) {
        jwt.verify(token, tokenKey, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}