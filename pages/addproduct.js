function changePhoneCode() {
  const countryCode = document.getElementById('countryCode').value;
  let phoneCode = '+';

  // Map country codes to phone codes
  if (countryCode === '95') {
    phoneCode += '95'; // Myanmar
  } else if (countryCode === '41') {
    phoneCode += '41'; // Switzerland
  } else if (countryCode === '92') {
    phoneCode += '92'; // Unknown Country
  }else if (countryCode === '91') {
    phoneCode += '91'; // Unknown Country
  }else if (countryCode === '1') {
    phoneCode += '1'; // Unknown Country
  }
  
  // Update the displayed phone code
  document.getElementById('phoneCode').innerText = phoneCode;
}
