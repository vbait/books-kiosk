import { DateTime } from 'luxon';
import { DATE_ISO_FORMAT, DISPLAY_DATE_FORMAT } from '../constants';

export const displayDate = (value, format = DATE_ISO_FORMAT) => {
  return DateTime.fromFormat(value, format).toFormat(DISPLAY_DATE_FORMAT);
};

export const displayTitle = (value) => {
  const newValue = value
    .replace(/[^a-zA-Z\s]+/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
    .split(' ')
    .map((v) => v.replace(v.charAt(0), v.charAt(0).toUpperCase()))
    .join(' ');
  return newValue;
};
