export const evaluate = ({ current, previous, operator }) => {
  const prev = parseFloat(previous);
  const curr = parseFloat(current);

  if (isNaN(prev) || isNaN(curr)) return "";

  let result = "";

  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "x":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
  }

  return result.toString();
};
