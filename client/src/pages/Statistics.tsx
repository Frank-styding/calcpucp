export const Item = ({ name }: { name: string }) => {
  return (
    <div className="w-[95%] rounded-lg h-12 bg-gray-900 grid grid-cols-[1fr_1fr] border-gray-500 border-[1px]">
      <div className="border-gray-500 border-r-[1px] grid place-content-center text-3xl text-gray-400 select-none">
        {name}
      </div>
      <div className=" grid place-content-center text-3xl text-gray-400">
        {12}
      </div>
    </div>
  );
};

export const Statistics = () => {
  return (
    <div className="w-full h-full bg-gray-800 flex justify-center p-5 gap-10 relative hide-scroll">
      <Item name={"hola"} />
    </div>
  );
};
