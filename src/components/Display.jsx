const Display = ({ value }) => {
  return (
    <div className="bg-screen-bg h-20 w-full rounded-2xl mb-4 flex items-center justify-end">
      <div className="text-text-display px-5 p-4 text-[32px] font-semibold">
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default Display;
