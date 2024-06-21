function weekday(str) {
  str = str.toLowerCase();
  const days = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };

  return days[str] !== undefined ? days[str] : -1;
}

console.log(weekday("Sunday"));
console.log(weekday("Monday"));
console.log(weekday("Tuesday"));
console.log(weekday("Wednesday"));
console.log(weekday("Thursday"));
console.log(weekday("Friday"));
console.log(weekday("Saturday"));

//source: chatgpt
