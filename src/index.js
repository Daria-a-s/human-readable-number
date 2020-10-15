module.exports = function toReadable (number) {
    let res = [];

  if (number > 99)
  {
    switch (Math.floor(number/100)) {
        case 1:
            res.push('one');
            break;
        case 2:
            res.push('two');
            break;
        case 3:
            res.push('three');
            break;
        case 4:
            res.push('four');
            break;
        case 5:
            res.push('five');
            break;               
        case 6:
            res.push('six');
            break;
        case 7:
            res.push('seven');
            break;        
        case 8:
            res.push('eight');
            break;
        case 9:
            res.push('nine');
            break;
    }
    res.push('hundred');
  }

  if (((number % 100) < 20) && ((number % 100) > 9))
  {
      switch (number%100)
      {
        case 10:
            res.push('ten');
            break;
        case 11:
            res.push('eleven');
            break;
        case 12:
            res.push('twelve');
            break;
        case 13:
            res.push('thirteen');
            break;
        case 14:
            res.push('fourteen');
            break;
        case 15:
            res.push('fifteen');
            break;               
        case 16:
            res.push('sixteen');
            break;
        case 17:
            res.push('seventeen');
            break;        
        case 18:
            res.push('eighteen');
            break;
        case 19:
            res.push('nineteen');
            break;
      }
  } else {
      switch(Math.floor(number%100/10))
      {
      case 2:
            res.push('twenty');
            break;
        case 3:
            res.push('thirty');
            break;
        case 4:
            res.push('forty');
            break;
        case 5:
            res.push('fifty');
            break;               
        case 6:
            res.push('sixty');
            break;
        case 7:
            res.push('seventy');
            break;        
        case 8:
            res.push('eighty');
            break;
        case 9:
            res.push('ninety');
            break;
      }

      switch(number%10)
        {
        case 1:
            res.push('one');
            break;
        case 2:
            res.push('two');
            break;
        case 3:
            res.push('three');
            break;
        case 4:
            res.push('four');
            break;
        case 5:
            res.push('five');
            break;               
        case 6:
            res.push('six');
            break;
        case 7:
            res.push('seven');
            break;        
        case 8:
            res.push('eight');
            break;
        case 9:
            res.push('nine');
            break;
        }
}

if (number == 0) res.push('zero');

return res.join(' ');
}
