import React, { useContext, useMemo } from 'react'
import DatePickerTitle from './DatePickerTitle';
import DatepickerYear from './DatepickerYear';
import DatePickerToday from './DatePickerToday';
import { DatePickerContext } from '../context';

const DatePickerHeader = ({ headerComponent : HeaderComponent }) => {
  const [{ viewMode }] = useContext(DatePickerContext);

  const isYearViewMode = useMemo(() => viewMode === 'year', [viewMode]);
  return (
    <div className='date-picker__header-div'>
      <DatePickerTitle />
      <div className={`date-picker__div-year-wrapper${isYearViewMode ? ' date-picker__div-year-wrapper__day-month-select' : ''}`}>
        {isYearViewMode ? <DatepickerYear /> : HeaderComponent}
      </div>
      {isYearViewMode && <DatePickerToday />}

    </div>
  );
};

export default DatePickerHeader;
