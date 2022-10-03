"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

/* eslint-disable no-console */
const path_1 = require("path");
const compression_1 = __importDefault(require("compression"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));

class Server {

    /**
     * @param options options
     */
     constructor(options) {
        this.options = options;
    }
    /**
     * Start server.
     */
     start() {
        const { version, path, port, buildDir } = this.options;
        console.log('Starting server');
        console.log(`Version=${version}`);

        // Main router
        const router = express_1.default.Router();
        router.use(express_1.default.static(buildDir));
        router.use('/*/static', (req, res) => res.redirect(`${path}/static${req.path}`));
        router.use((req, res) => res.sendFile((0, path_1.join)(buildDir, 'index.html')));

        // App
        const app = (0, express_1.default)();
        app.use((0, helmet_1.default)({ contentSecurityPolicy: false }));
        app.use((0, compression_1.default)());
        app.use(path, router);
        app.listen(port, () => console.log(`Server is started, port=${port}, path=${path}`));

     }


}
exports.Server = Server;