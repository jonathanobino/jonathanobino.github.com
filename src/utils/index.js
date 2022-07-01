export function emailValidator(value) {
  return /[(a-zA-Z0-9)]+[@]+[(a-zA-Z0-9)]+\.+[(a-zA-Z0-9)]+$/gi.test(value);
}
