// Find the maximum interval between two consecutive arguments.

// Example:

// maxInterv(3, 5, 2, 7); //5
// maxInterv(3, 5, 2, 7, 11, 0, -2); //11
// maxInterv(3, 5); //2
// maxInterv(3); //0


const maxInterv = (...arr) => {
  if (arr.length < 2) return 0;

  let maxDiff = 0;
  for (let i = 1; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }

  return maxDiff;
};