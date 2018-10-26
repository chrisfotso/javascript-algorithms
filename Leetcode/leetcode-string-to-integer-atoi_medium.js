var myAtoi = function(str) {
  str = str.trim();
  if (!/(\+*|-*){1}\d+/.test(str)) return 0;
  if (parseInt(str) > 2147483647) {
    return 2147483647;
  } else if (parseInt(str) < -2147483648) {
    return -2147483648;
  } else return parseInt(str);
};