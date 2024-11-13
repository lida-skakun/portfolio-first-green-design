let expenses = {
  "2023-01": {
    "01": {
      food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      fuel: [210.22],
    },
    "09": {
      food: [11.9],
      fuel: [190.22],
    },
  },
  "2023-03": {
    "07": {
      food: [20, 11.9, 30.2, 11.9],
    },
    "04": {
      food: [10.2, 11.5, 2.5],
      fuel: [],
    },
  },
  "2023-04": {},
};

function solution(expenses) {
  let result = null;
  console.log(expenses.length);
  result = expenses["2023-01"]["01"].food.reduce((acc, cur) => acc + cur, 0);
  return result;
}
//println(solution(expenses));
let date = new Date("2023-02" + "-01").getDay();
solution(expenses);
