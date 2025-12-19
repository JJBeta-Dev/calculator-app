const keys = [
  { label: "7", type: "num" },
  { label: "8", type: "num" },
  { label: "9", type: "num" },
  { label: "DEL", type: "del" },

  { label: "4", type: "num" },
  { label: "5", type: "num" },
  { label: "6", type: "num" },
  { label: "+", type: "op" },

  { label: "1", type: "num" },
  { label: "2", type: "num" },
  { label: "3", type: "num" },
  { label: "-", type: "op" },

  { label: ".", type: "num" },
  { label: "0", type: "num" },
  { label: "/", type: "op" },
  { label: "x", type: "op" },

  { label: "RESET", type: "reset", colSpan: 2 },
  { label: "=", type: "eq", colSpan: 2 },
];

const styles = {
  num: `
    bg-key-num-bg
    text-text-dark
    shadow-[0_4px_0_var(--color-key-num-shadow)]
    active:shadow-[0_2px_0_var(--color-key-num-shadow)]
  `,
  op: `
    bg-key-num-bg
    text-text-dark
    shadow-[0_4px_0_var(--color-key-num-shadow)]
    active:shadow-[0_2px_0_var(--color-key-num-shadow)]
  `,
  del: `
    bg-key-del-bg
    text-text-light
    shadow-[0_4px_0_var(--color-key-del-shadow)]
    active:shadow-[0_2px_0_var(--color-key-del-shadow)]
  `,
  reset: `
    bg-key-del-bg
    text-text-light
    shadow-[0_4px_0_var(--color-key-del-shadow)]
    active:shadow-[0_2px_0_var(--color-key-del-shadow)]
  `,
  eq: `
    bg-key-eq-bg
    text-text-eq
    shadow-[0_4px_0_var(--color-key-eq-shadow)]
    active:shadow-[0_2px_0_var(--color-key-eq-shadow)]
  `,
};
const Keypad = ({ onKeyPress }) => {
  return (
    <div className={`grid grid-cols-4 gap-3 rounded-2xl bg-keypad-bg p-4`}>
      {keys.map(({ label, type, colSpan }) => (
        <button
          onClick={() => onKeyPress(label, type)}
          key={label}
          className={`
        rounded-lg py-3 font-bold
        ${type === "num" ? "text-xl" : ""}
        ${styles[type]}
        ${colSpan === 2 ? "col-span-2" : ""}
        hover:brightness-110
        active:translate-y-[2px]
        transition
      `}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
