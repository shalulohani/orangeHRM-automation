"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomString = randomString;
exports.randomFirstName = randomFirstName;
exports.randomLastName = randomLastName;
exports.randomUsername = randomUsername;
exports.randomPassword = randomPassword;
function randomString(length) {
    const chars = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
function randomFirstName() {
    const names = ['Aarav', 'Vivaan', 'Reyansh', 'Naksh', 'Ishaan', 'Kabir', 'Advik'];
    return names[Math.floor(Math.random() * names.length)];
}
function randomLastName() {
    const names = ['Sharma', 'Verma', 'Singh', 'Mehta', 'Kapoor', 'Nair', 'Rao'];
    return names[Math.floor(Math.random() * names.length)];
}
function randomUsername() {
    return `user_${randomString(6)}`;
}
function randomPassword() {
    return `Pass@${Math.floor(Math.random() * 10000)}`;
}
