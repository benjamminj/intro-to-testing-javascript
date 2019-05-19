function avg(...args) {
  let sum = 0;

  for (let i; i < args.length; i++) {
    sum += args[i];
  }

  return sum / args.length;
}

module.exports = avg;
