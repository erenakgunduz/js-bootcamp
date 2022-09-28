import {
  setMinutes,
  getMinutes,
  set,
  add,
  sub,
  format,
  formatDistance,
  formatDistanceToNow,
  getTime,
} from 'https://cdn.skypack.dev/date-fns';

const now = new Date();
console.log(now.toString());
console.log(setMinutes(now, 1).toString());
console.log(getMinutes(now));

let nowChanged = add(now, { years: 1 });
nowChanged = sub(nowChanged, { days: 20 });
console.log(format(nowChanged, 'MMMM do, yyyy'));
console.log(formatDistance(new Date('5 Oct 2023'), nowChanged, { addSuffix: true }));
console.log(formatDistanceToNow(new Date('8/15/2022'), { addSuffix: true }));

// Working with timestamps
const nowTimestamp = getTime(now);
console.log(nowTimestamp, nowTimestamp === now.getTime()); // returns true, obviously
console.log(new Date(nowTimestamp).toString());

// Challenge
let tupac = new Date();
tupac = set(tupac, { year: 1971, month: 5, date: 16 });
console.log(format(tupac, 'MMM d, yyyy'));
