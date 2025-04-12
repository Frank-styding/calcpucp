import { AddIcon } from "src/components/icons/AddIcon";
import { useStore } from "hooks/store/useStore";

export const CourseItem = ({ name }: { name: string }) => {
  const deleteCourse = useStore((state) => state.deleteCourseStructure);
  const onClick = () => {
    //? fetch course and insert to store
    //? /* deleteCourse(name); */
  };
  return (
    <div className="w-full bg-gray-900 h-20 rounded-2xl border-gray-500 border-[1px] grid grid-cols-[auto_80px]">
      <div className="grid place-content-center text-2xl text-gray-400 select-none">
        {name}
      </div>
      <div
        className="grid place-content-center cursor-pointer"
        onClick={onClick}
      >
        <AddIcon className="fill-blue-800" />
      </div>
    </div>
  );
};

const Input = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      type="text"
      placeholder="curso"
      className="w-[80%] p-2 min-h-[30px] outline-none rounded-lg bg-gray-800 text-gray-400 text-center text-xl"
    />
  );
};

const SelectCareer = ({
  options,
  onChange,
}: {
  options: string[];
  onChange: (value: string) => void;
}) => {
  return (
    <select
      onChange={(e) => onChange(e.target.value)}
      className={`
       bg-gray-800 outline-none text-center border-none text-gray-400 text-xl w-[80%] 
         rounded-lg block p-2 border-gray-500 border-[1px]
         focus:ring-blue-500 focus:border-blue-500  
        `}
    >
      {["carrera", ...options].map((item, idx) => (
        <option key={idx} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export const AddCourse = () => {
  const onSelectCareer = (value: string) => {
    console.log(value, "career");
  };
  const onChangeCourseName = (value: string) => {
    console.log(value, "courseName");
  };
  return (
    <div className="h-full w-full  bg-gray-800 grid grid-rows-[150px_auto]">
      <div className="flex flex-col gap-5 justify-center items-center bg-gray-900">
        <SelectCareer onChange={onSelectCareer} options={["hola"]} />
        <Input onChange={onChangeCourseName} />
      </div>
      <div className="flex p-10 justify-center">
        <CourseItem name="hola" />
      </div>
    </div>
  );
};
