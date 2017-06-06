import moment from 'moment';

export default function (value) {
  if (typeof value !== 'number') {
    return value;
  }

  return moment(value).format('ddd');
}
