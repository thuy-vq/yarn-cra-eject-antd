import React, { useCallback, useContext, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import DatePickerQuickDay from './DatePickerQuickDay';
import DatePickerToday from './DatePickerToday';

import 'react-datepicker/dist/react-datepicker.min.css';
import { DatePickerDispatchContext, DatePickerStateContext } from 'src/components/DatePicker/context';
import DatePickerHeader from 'src/components/DatePicker/DatePickerContainer/DatePickerHeader';
import { DATEPICKER_CHANGE_DATE } from 'src/components/DatePicker/constant';

const renderCustomHeader = () => {};

const DatePickerBody = () => {
  const { value, showQuickDay, viewMode, minDate, maxDate } = useContext(DatePickerStateContext);
  const dispatch = useContext(DatePickerDispatchContext);
  const handleChangeDate = useCallback(
      date => dispatch({ type: DATEPICKER_CHANGE_DATE, payload: date }), [dispatch]
  );
  const showMonthYearPicker = useMemo(() => viewMode === 'month', [viewMode]);
  const renderHeader = useCallback(({ children }) => <DatePickerHeader headerComponent={children} />, []);

  return (
    <div className="date-picker-custom">
      {showQuickDay && <DatePickerQuickDay />}

      <DatePicker
        selected={value}
        onChange={handleChangeDate}
        inline
        showMonthYearPicker={showMonthYearPicker}
        shouldCloseOnSelect={false}
        renderCustomHeader={renderCustomHeader}
        calendarContainer={renderHeader}
        minDate={minDate}
        maxDate={maxDate}
      >
        <DatePickerToday />
      </DatePicker>

    </div>
  );
};

export default DatePickerBody;
