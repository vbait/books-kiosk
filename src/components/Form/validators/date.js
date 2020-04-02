import { DateTime } from 'luxon';
import MESSAGES from './messages';
import { DATE_ISO_FORMAT } from '../../../constants';

export default function date(format = DATE_ISO_FORMAT) {
  return (value) => {
    return value && !DateTime.fromFormat(value, format).isValid
      ? MESSAGES.DATE
      : undefined;
  };
}
