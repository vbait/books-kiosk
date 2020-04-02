import MESSAGES from './messages';

export default function require(value) {
  return !value ? MESSAGES.REQUIRED : undefined;
}
