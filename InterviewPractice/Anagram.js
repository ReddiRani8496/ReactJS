function isAnagram(str1, str2) {
  // Your implementation
  if (str1.length != str2.length) return false;
  return (
    str1.toLowerCase().split("").sort().join("") ==
    str2.toLowerCase().split("").sort().join("")
  );
}

//For the purpose of user debugging.
isAnagram("listen", "silent");
module.exports = isAnagram;
