export function getDay() {
  const today = new Date();
  const daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysArr[today.getDay()];
}
