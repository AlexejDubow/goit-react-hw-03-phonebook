// const phoneNumber = /^\d[\d() -]{4,14}\d$/;
// const phoneNumber = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
// const isPhoneValid = (number) => (phoneNumber.test(number));
const isPhoneValid = (number) => {
  let phoneNumber;
  if (number.length > 9) {
    phoneNumber = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    phoneNumber.test(number);
    return phoneNumber;
  }
  if (number.length < 10) {
    phoneNumber = /^\d[\d() -]{4,10}\d$/;
    phoneNumber.test(number);
    return phoneNumber;
  }
  // if (number.length < 11) {
  //   phoneNumber = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  //   phoneNumber.test(number);
  //   return phoneNumber;
  // }
};
export default isPhoneValid;

//   isPhoneValid = (number) => {
//     const phoneNumber = /^\d[\d\(\)\ -]{4,14}\d$/;
//     return phoneNumber.test(number)
// }
