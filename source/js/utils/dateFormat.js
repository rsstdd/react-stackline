const locale = 'en-us';
const returnMonth = (date) => {
  const rtnData = new Date(date);
  return rtnData.toLocaleString(locale, { month: 'short' }).toUpperCase();
}

export default returnMonth;
