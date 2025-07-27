const CHARSET =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function encode(int: number): string {
  if (int === 0) {
    return CHARSET[0];
  }

  let result = '';

  while (int > 0) {
    result = CHARSET[int % 62] + result;
    int = Math.floor(int / 62);
  }

  return result;
}

function decode(str: string): number {
  const length = str.length;
  let result: number = 0;

  for (let i = 0; i < length; i++) {
    let char: number = str.charCodeAt(i);

    if (char < 58) {
      char = char - 48;
    } else if (char < 91) {
      char = char - 29;
    } else {
      char = char - 87;
    }

    result += char * Math.pow(62, length - i - 1);
  }

  return result;
}

function padWithZeros(input: number | string) {
  const str = String(input);
  return str.padStart(6, '0');
}

function removeLeadingZeros(input: number) {
  const str = String(input);
  let index = 0;

  while (index < str.length && str[index] === '0') {
    index++;
  }

  return str.slice(index) || '0';
}

export { encode, decode, padWithZeros, removeLeadingZeros };
