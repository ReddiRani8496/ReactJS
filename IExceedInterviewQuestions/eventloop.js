console.log("Before time out");
setTimeout(() => {
  console.log("inside time out");
}, 100);
console.log("After time out");

// Event Loop: When an browser api is getting called like click of button, timeout, it will be stored in call back queue after call stack
// is empty event loop moves the call back queue into the call stack.
