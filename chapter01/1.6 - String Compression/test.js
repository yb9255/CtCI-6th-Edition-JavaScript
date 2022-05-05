function strComp(str) {
  let comp = "";
  let left = 0;
  let right = 1;

  while (left < str.length) {
    if (str[left] === str[right]) {
      right++;
    }

    if (str[left] !== str[right]) {
      const curStringCount = right - left;
      comp += (str[left] + curStringCount);
      [left, right] = [right, right + 1];
    }
  }

  return comp.length < str.length ? comp : str;
};

console.log(strComp("aabcccccaaa"));
console.log(strComp("aaaaaaaa"));
console.log(strComp("abcdefg"));
console.log(strComp("aaaaabaaaaaaa"));
