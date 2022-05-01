function palinPerm(string) {
  const hash = {};
  string = string.toLowerCase().replace(' ', '');

  if (string.length % 2 === 0) {
    for (let i = 0; i < string.length; i++) {
      hash[string[i]] = (hash[string[i]] || 0) + 1;
    }

    for (const char in hash) {
      if (hash[char] % 2 !== 0) {
        return false;
      }
    }
  } else {
    let foundMiddle = false;

    for (let i = 0; i < string.length; i++) {
      hash[string[i]] = (hash[string[i]] || 0) + 1;
    }

    for (const char in hash) {
      if (hash[char] % 2 !== 0 && !foundMiddle) {
        foundMiddle = true;
        continue;
      };

      if (hash[char] % 2 !== 0 && foundMiddle) {
        return false;
      };
    }
  }

  return true;
}

console.log(palinPerm('Tact Coa'));

function palinPerm2(string) {
  let oddCount = 0;
  const hash = {};
  string = string.toLowerCase().replace(' ', '');

  for (let i = 0; i < string.length; i++) {
    hash[string[i]] = (hash[string[i]] || 0) + 1;
  }

  for (const char in hash) {
    if (hash[char] % 2 !== 0) {
      oddCount++;
    }
  }

  const isPalin = oddCount < 2;
  return isPalin;
}
