export const FinalGrade = ({ value }: { value: number }) => {
  return (
    <div className="absolute bottom-10 right-[50%] translate-x-[50%]  w-30 h-15 rounded-2xl bg-gray-900 text-2xl text-gray-300 grid place-content-center border-gray-500 border-[1px]">
      {value}
    </div>
  );
};
