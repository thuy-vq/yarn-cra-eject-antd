import cloneDeep from 'lodash/cloneDeep';

function range(start, end) {
  let ans = [];
  for (let i = start; i <= end; i++) {
    ans.push(i);
  }

  return ans;
}

const minYear = 1500;

function getYearList(selectedYear) {
  let temp = (selectedYear - minYear) / 25;
  if (temp === Math.floor(temp)) {
    temp = Math.floor(temp) - 1;
  } else {
    temp = Math.floor(temp);
  }
  const start = minYear + 25 * temp + 1;   // 3.6 -> 3
  const result = range(start, start + 24);
  return result;
}

function addMonths(date, month) {
  let dateClone = cloneDeep(date);
  let result =  new Date(dateClone.setMonth(dateClone.getMonth() + month));
  return result;
}

function addYears(date, year) {
  let dateClone = cloneDeep(date);
  const result = new Date(dateClone.setFullYear(dateClone.getFullYear() + year));
  return result;
}

function setYear(date, year) {
  let dateClone = cloneDeep(date);
  const result = dateClone.setYear(year);
  return new Date(result);
}

export {
  getYearList,
  addMonths,
  addYears,
  setYear,
}
