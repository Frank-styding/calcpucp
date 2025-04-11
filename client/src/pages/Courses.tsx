import { useStore } from "hooks/store/useStore";
import { Link } from "react-router-dom";

const CourseItem = ({ name }: { name: string }) => {
  const data = useStore((state) => state.grades[name]);

  return (
    <Link
      to={"/courses/" + name}
      className="grid grid-cols-[auto_80px] bg-gray-900 w-full h-30  border-neutral-500 border-[1px] rounded-2xl overflow-hidden"
    >
      <div className="grid place-content-center border-neutral-500 border-[1px] text-2xl text-gray-300">
        {name}
      </div>
      <div className="grid place-content-center text-gray-200 text-2xl">
        {data.finalGrade}
      </div>
    </Link>
  );
};

export const Courses = () => {
  const data = useStore((state) => state.coursesStruct);

  return (
    <div className="w-full h-full overflow-x-hidden hide-scroll overflow-y-scroll bg-gray-800">
      <div className="flex flex-col gap-2 items-center p-5">
        {Object.keys(data).map((courseName) => (
          <CourseItem name={courseName} key={courseName} />
        ))}
      </div>
    </div>
  );
};
