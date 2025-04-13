import { DeleteIcon } from "src/components/icons/DeleteIcon";
import { useStore } from "src/hooks/useStore/useStore";
import { AddIcon } from "src/components/icons/AddIcon";
import { Link } from "react-router-dom";

export const CourseItem = ({ name }: { name: string }) => {
  const deleteCourse = useStore((state) => state.deleteCourseStructure);
  const onClick = () => {
    deleteCourse(name);
  };
  return (
    <div className="w-full bg-gray-900 h-20 rounded-2xl border-neutral-500 border-[1px] grid grid-cols-[auto_80px]">
      <div className="grid place-content-center text-2xl text-gray-300 select-none">
        {name}
      </div>
      <button
        className="grid place-content-center cursor-pointer"
        onClick={onClick}
      >
        <DeleteIcon className="fill-blue-800" />
      </button>
    </div>
  );
};
export const Settings = () => {
  const coursesStruct = useStore((state) => state.coursesStruct);

  return (
    <div className="w-full h-full bg-gray-800 flex p-5 flex-col gap-5 relative hide-scroll">
      {Object.keys(coursesStruct).map((courseName) => (
        <CourseItem name={courseName} key={courseName} />
      ))}
      <Link
        to={"/addCourse"}
        className="absolute bottom-10 right-[50%] translate-x-[50%]  w-30 h-15 rounded-2xl bg-gray-900 text-2xl text-gray-300 grid place-content-center border-gray-500 border-[1px]"
      >
        <AddIcon className="fill-blue-800" />
      </Link>
    </div>
  );
};
