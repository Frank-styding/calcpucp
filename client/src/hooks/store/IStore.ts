import { IPrecision } from "utils/IPrecision";

interface IExamStruct {
  amount: number;
  validAmount: number;
  weight: number;
  precision?: IPrecision;
}

interface ICourseStruct {
  precision?: IPrecision;
  exams: Record<string, IExamStruct>;
}

interface IExamData {
  average: number;
  grades: number[];
}

interface ICourseData {
  finalGrade: number;
  exams: Record<string, IExamData>;
}

interface IStoreData {
  coursesStruct: Record<string, ICourseStruct>;
  grades: Record<string, ICourseData>;
}

interface IStoreActions {
  setGrade: (course: string, exam: string, idx: number, grade: number) => void;
  updateGrades: (course: string) => void;
}

export type IStore = IStoreData & IStoreActions;
