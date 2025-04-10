import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IStore } from "./IStore";
import { setPrecision } from "utils/setPrecision";

const initialState = {
  coursesStruct: {},
  grades: {},
};

export const useStore = create<IStore>()(
  persist(
    (set) => ({
      ...initialState,
      setGrade(course, exam, idx, grade) {
        set((state) => {
          state.grades[course].exams[exam].grades[idx] = grade;
          return state;
        });
        this.updateGrades(course);
      },
      updateGrades(course: string) {
        const struct = this.coursesStruct[course];
        const exams = this.grades[course].exams;
        set((state) => {
          const finalGrade = Object.keys(exams)
            .map((examName) => {
              const examData = exams[examName];
              const { validAmount, precision, weight } = struct.exams[examName];
              let average = setPrecision(
                examData.grades
                  .sort((a, b) => b - a)
                  .slice(0, validAmount)
                  .reduce((a, b) => a + b, 0) / validAmount,
                precision
              );
              state.grades[course].exams[examName].average = average;
              return average * weight;
            })
            .reduce((a, b) => a + b, 0);

          state.grades[course].finalGrade = setPrecision(
            finalGrade,
            struct.precision
          );

          return state;
        });
      },
    }),
    { name: "courses-store" }
  )
);
