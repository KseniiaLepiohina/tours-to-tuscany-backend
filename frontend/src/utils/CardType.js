export default  function getTypeCard (number) {
  const cardNumber = number.replace(/\s+/g,'');
  if (/^4\d{12}(\d{3})?(\d{3})?$/.test(cardNumber)) {
    return 'Visa';
  }
  if (/^(5[1-5]\d{4}|222[1-9]\d{2}|22[3-9]\d{3}|2[3-6]\d{4}|27[01]\d{3}|2720\d{2})\d{10}$/.test(cardNumber)) {
    return 'MasterCard';
  }
  if (/^(6011\d{12}|65\d{14}|64[4-9]\d{13}|622(12[6-9]|1[3-9]\d|[2-8]\d{2}|9([01]\d|2[0-5]))\d{10})$/.test(cardNumber)) {
    return 'Discover';
  }
  if (/^(5[06-9]|6\d)\d{10,17}$/.test(cardNumber)) {
    return 'Maestro';
  }
}