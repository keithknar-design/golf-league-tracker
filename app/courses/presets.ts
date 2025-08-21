export type TeeInfo = {
  key: string;
  name: string;        // e.g., Whites (M) 35.2/122
  rating: number;      // 35.2
  slope: number;       // 122
  yards: number[];     // length per hole
};

export type CoursePreset = {
  id: string;
  name: string;
  holes: string[];   // display labels (e.g., ['10','11',...,'18'])
  par: number[];     // per-hole par
  hcp: number[];     // per-hole stroke index (1..18)
  tees: Record<string, TeeInfo>;
};

export const courses: CoursePreset[] = [
  {
    id: "grey-hawk-back-9",
    name: "Grey Hawk Golf Club — Back 9",
    holes: ["10","11","12","13","14","15","16","17","18"],
    par:  [   5,   3,   4,   3,   5,   4,   4,   3,   5 ],
    hcp:  [   6,  12,   8,  16,   2,  14,  10,  18,   4 ],
    tees: {
      "white_m": {
        key: "white_m",
        name: "Whites (M) 35.2/122",
        rating: 35.2,
        slope: 122,
        yards: [515,148,380,148,512,374,377,166,544],
      },
      "red_f": {
        key: "red_f",
        name: "Reds (F) 34.8/114",
        rating: 34.8,
        slope: 114,
        yards: [432,94,321,107,441,295,298,109,461],
      }
    }
  }
];

export function courseById(id: string): CoursePreset | undefined {
  return courses.find(c => c.id === id);
}
