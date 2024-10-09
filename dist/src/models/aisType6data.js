"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AisType6DataSchema = new mongoose_1.Schema({
    type: { type: Number, required: true },
    mmsi: { type: Number, required: true },
    destinationMMSI: { type: Number, required: true },
    sequenceNumber: { type: Number, required: true },
    retransmitFlag: { type: Boolean, required: true },
    spare: { type: Number, required: true },
    binaryData: { type: String, required: true },
});
const AisType6Data = (0, mongoose_1.model)('AisType6Data', AisType6DataSchema);
exports.default = AisType6Data;
