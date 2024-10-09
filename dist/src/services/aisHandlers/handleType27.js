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
exports.handleType27 = void 0;
const aisType27data_1 = __importDefault(require("../../models/aisType27data"));
const getCombinedAISData_1 = require("../../services/aisHandlers/getCombinedAISData");
const handleType27 = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const aisType27Data = new aisType27data_1.default({
        type: data.type,
        mmsi: data.mmsi,
        positionAccuracy: data.positionAccuracy,
        raimFlag: data.raimFlag,
        longitude: data.longitude,
        latitude: data.latitude,
        positionStatus: data.positionStatus,
        timestamp: new Date(),
    });
    yield aisType27Data.save();
    console.log('AIS Type 27 Data berhasil disimpan ke database');
    // Update combined AIS data
    yield (0, getCombinedAISData_1.getAndCombineAisData)(data.mmsi);
});
exports.handleType27 = handleType27;
