import React, { useCallback, useContext, useMemo } from 'react';
import { DatePickerDispatchContext, DatePickerStateContext } from 'src/components/DatePicker/context';
import { getYearList, setYear } from 'src/components/DatePicker/services';
import { DATEPICKER_SELECT_YEAR } from 'src/components/DatePicker/constant';

function getClassYear({ selectedYear, year }) {
  let result = 'date-picker__button date-picker__button-year';
  if (selectedYear === year) {
    result += ' date-picker__button-year--selected';
  }

  return result;
}

const DatepickerYear = () => {
  const { value } = useContext(DatePickerStateContext);
  const dispatch = useContext(DatePickerDispatchContext);
  const selectedYear = useMemo(() => value.getFullYear(), [value]);
  const years = useMemo(() => getYearList(selectedYear), [selectedYear]);
  const handleClick = useCallback(year => dispatch({ type: DATEPICKER_SELECT_YEAR, payload: setYear(value, year) }), [dispatch, value]);

  return (
    <>
      {years.map((year, index) => {
        return (
          <button
              key={index}
              className={getClassYear({ selectedYear, year })}
              onClick={() => handleClick(year)}
          >
            {year}
          </button>
        )
      })}
    </>
  );
};

export default DatepickerYear;
