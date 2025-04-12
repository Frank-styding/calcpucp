export const Input = ({
  onChange,
  value,
}: {
  onChange: (value: number) => void;
  value: number;
}) => {
  return (
    <input
      type="number"
      placeholder={"0"}
      className="outline-none bg-gray-600 h-10 rounded-lg w-20 text-center text-xl text-gray-300"
      onChange={(e) => onChange(parseInt(e.target.value))}
      max={20}
      min={0}
      defaultValue={value}
    />
  );
};
