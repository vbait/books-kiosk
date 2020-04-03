import MESSAGES from './messages';

export default function text(value) {
  if (!value || (value && !value.match(/[a-zA-Z]+/g))) {
    return MESSAGES.TEXT;
  }
  return undefined;
}
