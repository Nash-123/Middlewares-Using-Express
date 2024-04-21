"use strict";
// Middleware is called before or after every request Handler  or an endpoint call
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let requestCount = 0;
function Middleware(req, res, next) {
    if (req != "favicon.ico") {
        requestCount++;
    }
    next(); // will call the endpoints 
}
exports.Middleware = Middleware;
app.use(Middleware);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/requestCount", (req, res) => {
    res.json({
        requestCount
    });
});
app.listen(3000);
