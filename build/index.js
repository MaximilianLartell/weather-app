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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const services_1 = require("./services");
const utils_1 = require("./utils");
const app = express_1.default();
app.use(express_1.default.json());
const PORT = 8000;
app.use(express_1.default.static(__dirname + '/public'));
app.get('', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, '/public', 'index.html'));
});
app.get('/api/weather', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const city = utils_1.parseQuery(req.query.city);
        const weatherData = yield services_1.getWeatherData(city);
        console.log(weatherData);
        res.json(weatherData);
    }
    catch (e) {
        console.log(e);
    }
}));
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
