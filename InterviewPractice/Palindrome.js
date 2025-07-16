function validatePalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // here /g means global and /[^a-z0-9]/g means all characters except a-z and 0-9
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

//For the purpose of user debugging.

console.log(validatePalindrome("A man, a plan, a canal, Panama"));
