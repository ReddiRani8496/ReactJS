function decodeSecretCode(s) {
  // your solution
  let res = "";
  if (!s) return "";
  if (s.length == 0 || s.length % 2 != 0) return "";
  for (let i = 0; i < s.length; i += 2) {
    let ch = s.charCodeAt(i) + Number(s.charAt(i + 1));
    res += String.fromCharCode(ch);
  }
  return res;
}

let output = decodeSecretCode("a2b3c1");
console.log("Output ", output);
