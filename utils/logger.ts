import fs from 'fs';
import path from 'path';

/**
 * Simple logging utility for Playwright framework
 * Author: Nakshatra Lohani
 * Phase‑10: Timestamped logging
 */

const logDir = path.join('reports', 'logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

function getTimestamp(): string {
  return new Date().toISOString().replace('T', ' ').split('.')[0];
}

export function logStep(message: string): void {
  const timestamp = getTimestamp();
  const formatted = `[${timestamp}] 🧩 ${message}`;
  console.log(formatted);
  fs.appendFileSync(path.join(logDir, 'framework.log'), formatted + '\n');
}

export function logError(message: string): void {
  const timestamp = getTimestamp();
  const formatted = `[${timestamp}] ❌ ERROR: ${message}`;
  console.error(formatted);
  fs.appendFileSync(path.join(logDir, 'framework.log'), formatted + '\n');
}

export function logSuccess(message: string): void {
  const timestamp = getTimestamp();
  const formatted = `[${timestamp}] ✅ SUCCESS: ${message}`;
  console.log(formatted);
  fs.appendFileSync(path.join(logDir, 'framework.log'), formatted + '\n');
}
