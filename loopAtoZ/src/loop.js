function generateAtoZ() {
  // your solution here
  const result = [];

  for (let i = 65; i <= 90; i++) {
    result.push(String.fromCharCode(i));
  }

  return result;
}

module.exports = { generateAtoZ };
