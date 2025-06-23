//leaders in array
const findLeaders = (array) => {
  const leaders = [];
  let maxFromRight = array[array.length - 1];
  leaders.push(maxFromRight);

  for (let i = array.length - 2; i >= 0; i--) {
    if (array[i] > maxFromRight) {
      maxFromRight = array[i];
      leaders.push(maxFromRight);
    }
  }

  return leaders.reverse();
};
const arr = [16, 17, 4, 3, 5, 2];
console.log("Leaders in the array:", findLeaders(arr)); // Output: [17, 5, 2]
