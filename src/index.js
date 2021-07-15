module.exports  = function toReadable (number) {  
  let nameNumbers = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  }
  
  if (number in nameNumbers) {
      return nameNumbers[number];
  }
  else if (number > 10 && number < 100) {
    return nameNumbers[number - number % 10] + ' ' + nameNumbers[number % 10];
  }
  else if ((number % 100) in nameNumbers && (number % 100) != 0) {
    return nameNumbers[(number - number % 100) / 100] +  ' hundred ' + nameNumbers[number % 100];
  }
  else {
      if (number % 100 === 0) {
          return nameNumbers[number / 100] + ' hundred';
      }
      else if (number % 10 === 0) {
          return nameNumbers[(number - number % 100) / 100] +  ' hundred ' + nameNumbers[number % 100];
      }
      else {    
          return nameNumbers[(number - number % 100) / 100] + ' hundred ' + nameNumbers[(number % 100) - (number % 10)] + ' ' +  nameNumbers[(number % 10)]
      }
  }
}

