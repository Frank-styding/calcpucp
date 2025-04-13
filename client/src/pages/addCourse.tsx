import { useNavigate } from "react-router-dom";
import { AddIcon } from "src/components/icons/AddIcon";
import { useGetCareers } from "src/hooks/useGetCareers/useGetCareers";
import { useSearchCourse } from "src/hooks/useSearchCourse/useSearchCourse";
import { ICourseStruct } from "src/hooks/useStore/IStore";
import { useStore } from "src/hooks/useStore/useStore";

export const CourseItem = ({
  name,
  course,
}: {
  name: string;
  course: ICourseStruct;
}) => {
  const addCourse = useStore((state) => state.addCourseStructure);
  const navegate = useNavigate();
  const onClick = () => {
    addCourse(name, course);
    navegate("/settings");
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
      onChange={(e) => onChange(e.target.value.replace("carrera", ""))}
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
  const [setCourseName, setCareer, courses] = useSearchCourse();
  const careers = useGetCareers();
  const onSelectCareer = (value: string) => {
    setCareer(value);
  };
  const onChangeCourseName = (value: string) => {
    setCourseName(value);
  };

  return (
    <div className="h-full w-full  bg-gray-800 grid grid-rows-[150px_auto]">
      <div className="flex flex-col gap-5 justify-center items-center bg-gray-900">
        <SelectCareer onChange={onSelectCareer} options={careers} />
        <Input onChange={onChangeCourseName} />
      </div>
      <div className="flex p-10 gap-5 items-center flex-col">
        {courses.map((item) => (
          <CourseItem name={item.name} course={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};
