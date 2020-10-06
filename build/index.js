"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.use(express_1.default.json());
const PORT = 8000;
app.get('/home', express_1.default.static('public'));
app.get('/', (_req, res) => {
    res.send('HELLO WORLD');
});
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
