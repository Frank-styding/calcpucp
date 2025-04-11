import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ICourseStruct, IExamData, IStore, IStoreData } from "./IStore";
import { produce } from "immer";
import { setPrecision } from "utils/setPrecision";

const initialState: IStoreData = {
  coursesStruct: {
    "Calculo integral": {
      exams: {
        PC: {
          amount: 5,
          weight: 0.5,
          validAmount: 3,
        },
        PD: {
          amount: 1,
          weight: 0.5,
          validAmount: 0,
        },
      },
      precision: {
        fixed: true,
        decimals: 2,
      },
    },
  },
  grades: {
    "Calculo integral": {
      exams: {
        PC: {
          grades: [],
          average: 0,
        },
        PD: {
          grades: [],
          average: 0,
        },
      },
      finalGrade: 0,
    },
  },
};

export const useStore = create<IStore>()(
  persist(
    (set) => ({
      ...initialState,
      setGrade: (course, exam, idx, grade) => {
        set(
          produce((state: IStore) => {
            if (!state.grades[course] || !state.grades[course].exams[exam])
              return;

            const struct = state.coursesStruct[course];
            const exams = state.grades[course].exams;
            const grades = state.grades[course].exams[exam].grades;
            if (grades == undefined || grades.length == 0) {
              state.grades[course].exams[exam].grades = new Array(
                struct.exams[exam].amount
              ).fill(0);
            }
            state.grades[course].exams[exam].grades[idx] = grade;

            const finalGrade = Object.keys(exams)
              .map((examName) => {
                const examData = exams[examName];
                const { amount, validAmount, precision, weight } =
                  struct.exams[examName];
                let average;
                if (amount > 1) {
                  average = setPrecision(
                    examData.grades
                      .slice()
                      .sort((a, b) => b - a)
                      .slice(0, validAmount)
                      .reduce((a, b) => a + b, 0) / validAmount,
                    precision
                  );
                } else {
                  average = examData.grades[0];
                }

                state.grades[course].exams[examName].average = average;

                return average * weight;
              })
              .reduce((a, b) => a + b, 0);
            state.grades[course].finalGrade = setPrecision(
              finalGrade,
              struct.precision
            );
          })
        );
      },
      initGrades: () => {
        set(
          produce((state: IStore) => {
            Object.keys(state.coursesStruct).forEach((item) => {
              state.grades[item] ||= {
                exams: Object.keys(state.coursesStruct[item].exams).reduce<
                  Record<string, IExamData>
                >((o, i) => {
                  o[i].grades = new Array(
                    state.coursesStruct[item].exams[i].amount
                  ).fill(0);
                  o[i].average = 0;
                  return o;
                }, {} as Record<string, IExamData>),
                finalGrade: 0,
              };
            });
          })
        );
      },
      addCourseStructure: (name: string, course: ICourseStruct) => {
        set(
          produce((store: IStore) => {
            store.coursesStruct[name] = course;
          })
        );
      },
      deleteCourseStructure: (name: string) => {
        set(
          produce((store: IStore) => {
            delete store.coursesStruct[name];
          })
        );
      },
    }),
    { name: "courses-store" }
  )
);
