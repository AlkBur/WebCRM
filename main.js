import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import path from 'path';
import * as utils from "./utils.js";
import auth from "./auth.js";
import { logger, expressLogger } from "./log.js";
import loginRouter from './routes/login.js';
import { port, tokenKey } from './config.js';
import models, { sequelize } from './models/index.js';



const app = express();
app.use(expressLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser(tokenKey));

app.use(express.static(path.join(utils.__dirname, 'public')));
app.use('/ui', auth);
app.use('/ui', express.static(path.join(utils.__dirname, 'ui')));
app.use('/', loginRouter);

sequelize.sync().then(() => {
    app.listen(port, () => {
        logger.info(`WebCRM running at http://localhost:${port}`)
    })
});