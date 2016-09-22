export function formatDate(date) {
  console.log(date);
  /*
  const backToDateTime = new Date(date);
  const day = backToDateTime.getDate();
  const month = backToDateTime.getMonth() + 1;
  const year = backToDateTime.getFullYear().toString().substring(2);
  const hours = backToDateTime.getHours();

  const ampm = hours >= 12 ? 'pm' : 'am';
  const hours = hours % 12;
  const hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutes = minutes < 10 ? '0'+minutes : minutes;


  const mins = backToDateTime.getMinutes();
  return month + '/' + day + '/' + year + ' ' + hours + ':' + mins;
  */
}
