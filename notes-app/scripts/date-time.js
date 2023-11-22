// Unix epoch -- January 1 1970 00:00:00
const now = new Date();
const timestamp = now.getTime();
const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

const time1 = new Date('April 14 2022 19:00:00 EDT');
const time2 = new Date('July 14 2018 15:00:00 EDT');
const timestamp1 = time1.getTime();
const timestamp2 = time2.getTime();
const date1 = new Date(timestamp1);
const date2 = new Date(timestamp2);

console.log(timestamp1 < timestamp2 ? date1.toString() : date2.toString());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);
