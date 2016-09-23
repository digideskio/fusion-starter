export function formatDate(date) {
  const backToDateTime = new Date(date);
  const d = backToDateTime.getDate();
  const m = backToDateTime.getMonth() + 1;
  const y = backToDateTime.getFullYear().toString().substring(2);

  const hours = backToDateTime.getHours();
  const h = hours % 12 || 12;
  const minutes = backToDateTime.getMinutes();
  const mins = minutes < 10 ? '0'+minutes : minutes;
  const ampm = hours >= 12 ? 'pm' : 'am';
  const time = h + ':' + mins + ampm;

  const formattedDate = m + '/' + d + '/' + y + ' ' + time;
  return formattedDate;
}
