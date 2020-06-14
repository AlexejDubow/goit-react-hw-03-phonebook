const parsePhone = (number) => {
  let parseNumber;
  if (number.length > 11) {
    const pattern = new RegExp(`(^\\d{${number.length % 10}})(\\d{3})(\\d{3})(\\d{2})(\\d{2}$)`);
    parseNumber = number.replace(pattern, '+$1($2)$3-$4-$5');
    return parseNumber;
  }
  if (number.length > 10) {
    const pattern = new RegExp('(^\\d{1})(\\d{3})(\\d{2})(\\d{2})(\\d{1,})');
    parseNumber = number.replace(pattern, '$1-$2-$3-$4-$5');
    return parseNumber;
  }
  if (number.length > 7) {
    const pattern = new RegExp('(^\\d{3})(\\d{2})(\\d{2})(\\d{1,})');
    parseNumber = number.replace(pattern, '$1-$2-$3-$4');
    return parseNumber;
  }
  if (number.length < 8) {
    const pattern = new RegExp('(^\\d{3})(\\d{2})(\\d{1,})');
    parseNumber = number.replace(pattern, '$1-$2-$3');
    return parseNumber;
  }
};

export default parsePhone;
