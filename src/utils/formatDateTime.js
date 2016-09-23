export function formatDateTime(date) {
  const dateTime = new Date(date);

  const fullDate = dateTime.getMonth() + 1 + '/' + dateTime.getDate() + '/' + dateTime.getFullYear().toString().substring(2);

  const hours = dateTime.getHours();
  const h = hours % 12 || 12;
  const minutes = dateTime.getMinutes();
  const m = minutes < 10 ? '0'+ minutes : minutes;
  const ampm = hours >= 12 ? 'pm' : 'am';
  const time = h + ':' + m + ampm;

  const formattedDate = fullDate + ' ' + time;
  return formattedDate;
}
