function oneAway(str1, str2) {
  if (Math.abs(str1.length - str2.length) > 1) {
    return false;
  }

  const str1Count = {};
  const str2Count = {};
  let isEditedOnce = false;

  for (let i = 0; i < str1.length; i++) {
    str1Count[str1[i]] = (str1Count[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    str2Count[str2[i]] = (str2Count[str2[i]] || 0) + 1;
  }

  for (const char in str2Count) {
    const foundDiff = str1Count[char] !== str2Count[char];

    if (foundDiff) {
      if (!isEditedOnce)  {
        isEditedOnce = true;
      } else {
        return false;
      }
    }
  }

  return true;
}

console.log(oneAway('pale', 'ple'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('pale', 'bale'));
console.log(oneAway('pale', 'bake'));
