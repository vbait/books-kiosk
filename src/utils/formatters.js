import { DateTime } from 'luxon';
import { DATE_ISO_FORMAT, DISPLAY_DATE_FORMAT } from '../constants';

export const displayDate = (value, format = DATE_ISO_FORMAT) => {
  return DateTime.fromFormat(value, format).toFormat(DISPLAY_DATE_FORMAT);
};

export const displayTitle = (value) => {
  return value;
};
