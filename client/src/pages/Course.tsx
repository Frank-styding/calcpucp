import { useStore } from "hooks/store/useStore";
import { useParams } from "react-router";
import { FinalGrade } from "../components/FinalGrade";
import { useRef, useState } from "react";
import { Input } from "../components/Input";

const GradeInput = ({
  idx,
  onChange,
  value,
}: {
  idx: number;
  onChange: (value: number, idx: number) => void;
  value: number;
}) => {
  return (
    <div className="flex gap-x-8">
      <div className="text-2xl text-gray-400">{idx + 1}</div>
      <Input value={value} onChange={(value) => onChange(value, idx)} />
    </div>
  );
};

const Exam = ({
  examName,
  onClick,
  open,
  courseName,
}: {
  examName: string;
  courseName: string;
  open: boolean;
  onClick: () => void;
}) => {
  const grades = useStore((state) => state.grades);
  const struct = useStore((state) => state.coursesStruct);
  const setGrade = useStore((state) => state.setGrade);
  const amount = struct[courseName].exams[examName].amount;

  const onChange = (value: number, idx: number) => {
    if (Number.isNaN(value)) {
      value = 0;
    }
    setGrade(courseName, examName, idx, value);
  };

  if (amount == 1) {
    return (
      <div className="w-[90%] rounded-2xl h-[60px] bg-gray-900 grid grid-cols-[1fr_1fr] border-gray-500 border-[1px]">
        <div className="border-gray-500 border-r-[1px] grid place-content-center text-3xl text-gray-400 select-none">
          {examName}
        </div>
        <div className=" grid place-content-center text-3xl text-gray-400">
          <Input
            value={grades[courseName].exams[examName].grades[0]}
            onChange={(value) => onChange(value, 0)}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        (open ? "max-h-[500px]" : "max-h-[60px]") +
        " w-[90%] min-h-[60px] bg-gray-900 rounded-2xl grid grid-rows-[60px_auto] overflow-hidden transition-[max-height] ease-in-out duration-300 border-gray-500 border-[1px]"
      }
    >
      <div className="w-full h-[60px] bg-gray-900 grid grid-cols-[1fr_1fr] border-b-gray-500 border-b-[1px]">
        <div
          onClick={onClick}
          className="border-gray-500 border-r-[1px] grid place-content-center text-3xl text-gray-400 select-none"
        >
          {examName}
        </div>
        <div className="grid place-content-center text-3xl text-gray-400">
          {grades[courseName].exams[examName].average}
        </div>
      </div>

      <div className="w-full flex gap-x-10 gap-y-5 flex-wrap content-start pl-20 pr-15 pt-5 pb-5">
        {new Array(amount)
          .fill(0)
          .map((_, idx) => idx)
          .map((idx) => (
            <GradeInput
              value={grades[courseName].exams[examName].grades[idx]}
              idx={idx}
              key={idx}
              onChange={onChange}
            />
          ))}
      </div>
    </div>
  );
};

export const Course = () => {
  const { name: courseName } = useParams();
  const [active, setActive] = useState(-1);
  const grades = useStore((state) => state.grades);

  if (courseName == undefined || grades[courseName] == undefined) {
    return <></>;
  }

  return (
    <div className="w-full h-full grid grid-rows-[100px_auto] relative bg-gray-800">
      <h1 className="grid place-content-center text-gray-300 text-4xl select-none">
        {courseName}
      </h1>

      <div className="w-full max-h-full">
        <div className="flex flex-col items-center gap-5">
          {Object.keys(grades[courseName].exams).map((examName, idx) => (
            <Exam
              open={idx == active}
              courseName={courseName}
              examName={examName}
              onClick={() => setActive(idx != active ? idx : -1)}
              key={examName}
            />
          ))}
        </div>
        <FinalGrade value={grades[courseName].finalGrade} />
      </div>
    </div>
  );
};
