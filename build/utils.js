"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseResult = exports.parseQuery = void 0;
const isString = (text) => {
    return typeof text === 'string' || text instanceof String;
};
const isNumber = (num) => {
    return typeof num === 'number' && num !== NaN;
};
const parseStringResponse = (str) => {
    if (!str || !isString(str)) {
        throw new Error('incorrect or missing response');
    }
    return str;
};
const parseNumberResponse = (num) => {
    if (!num || !isNumber(num)) {
        throw new Error('incorrect or missing response');
    }
    return num;
};
const parseTemp = (num) => {
    if (!num || !isNumber(num)) {
        throw new Error('incorrect or missing response');
    }
    return Math.round(num - 272.15);
};
exports.parseQuery = (str) => {
    if (!str || !isString(str)) {
        throw new Error('incorrect or missing query');
    }
    return str;
};
exports.parseResult = (object) => {
    const parsedData = {
        weather: parseStringResponse(object.weather[0].main),
        description: parseStringResponse(object.weather[0].description),
        temp: parseTemp(object.main.temp),
        feelsLike: parseTemp(object.main.feels_like),
        humidity: parseNumberResponse(object.main.humidity),
        city: parseStringResponse(object.name),
    };
    return parsedData;
};
