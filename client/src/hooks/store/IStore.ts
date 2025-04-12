import { IPrecision } from "utils/IPrecision";

interface IExamStruct {
  amount: number;
  validAmount: number;
  weight: number;
  precision?: IPrecision;
}

export interface ICourseStruct {
  precision?: IPrecision;
  exams: Record<string, IExamStruct>;
}

export interface IExamData {
  average: number;
  grades: number[];
}

interface ICourseData {
  finalGrade: number;
  exams: Record<string, IExamData>;
}

export interface IStoreData {
  coursesStruct: Record<string, ICourseStruct>;
  grades: Record<string, ICourseData>;
}

interface IStoreActions {
  setGrade: (course: string, exam: string, idx: number, grade: number) => void;
  initGrades: () => void;
  addCourseStructure: (name: string, course: ICourseStruct) => void;
  deleteCourseStructure: (name: string) => void;
}

export type IStore = IStoreData & IStoreActions;
