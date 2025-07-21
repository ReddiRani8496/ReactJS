function isAnagram(str1, str2) {
  // Your implementation
  str1 = str1.replace(/[^a-zA-Z]/g, "");
  str2 = str2.replace(/[^a-zA-Z]/g, "");
  if (str1.length != str2.length) return false;
  return (
    str1.toLowerCase().split("").sort().join("") ==
    str2.toLowerCase().split("").sort().join("")
  );
}

console.log(isAnagram("dormitory!!", "dirty room"));
module.exports = isAnagram;
