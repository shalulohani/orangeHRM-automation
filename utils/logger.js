"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logStep = logStep;
exports.logError = logError;
exports.logSuccess = logSuccess;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * Simple logging utility for Playwright framework
 * Author: Nakshatra Lohani
 * Phase‑10: Timestamped logging
 */
const logDir = path_1.default.join('reports', 'logs');
if (!fs_1.default.existsSync(logDir)) {
    fs_1.default.mkdirSync(logDir, { recursive: true });
}
function getTimestamp() {
    return new Date().toISOString().replace('T', ' ').split('.')[0];
}
function logStep(message) {
    const timestamp = getTimestamp();
    const formatted = `[${timestamp}] 🧩 ${message}`;
    console.log(formatted);
    fs_1.default.appendFileSync(path_1.default.join(logDir, 'framework.log'), formatted + '\n');
}
function logError(message) {
    const timestamp = getTimestamp();
    const formatted = `[${timestamp}] ❌ ERROR: ${message}`;
    console.error(formatted);
    fs_1.default.appendFileSync(path_1.default.join(logDir, 'framework.log'), formatted + '\n');
}
function logSuccess(message) {
    const timestamp = getTimestamp();
    const formatted = `[${timestamp}] ✅ SUCCESS: ${message}`;
    console.log(formatted);
    fs_1.default.appendFileSync(path_1.default.join(logDir, 'framework.log'), formatted + '\n');
}
