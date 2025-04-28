"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "2405";
        this.middleware();
    }
    ;
    middleware() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static('public'));
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    }
    ;
    liste() {
        this.app.listen(this.port, () => {
            console.log("el servidor corre en el puerto " + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map