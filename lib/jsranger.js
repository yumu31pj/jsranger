const jsranger = (start, end, step) => {
  let array = new Array();
  // if step is undefined, step should be 1.
  let steps = step === undefined ? 1: step;
  let counter = start;

  while (counter < end) {
    array.push(counter);
    counter += steps;
  }

  return array;
}

export default jsranger;