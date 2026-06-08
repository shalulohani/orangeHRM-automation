export function randomString(length: number) {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function randomFirstName() {
  const names = ['Aarav', 'Vivaan', 'Reyansh', 'Naksh', 'Ishaan', 'Kabir', 'Advik'];
  return names[Math.floor(Math.random() * names.length)];
}

export function randomLastName() {
  const names = ['Sharma', 'Verma', 'Singh', 'Mehta', 'Kapoor', 'Nair', 'Rao'];
  return names[Math.floor(Math.random() * names.length)];
}

export function randomUsername() {
  return `user_${randomString(6)}`;
}

export function randomPassword() {
  return `Pass@${Math.floor(Math.random() * 10000)}`;
}
