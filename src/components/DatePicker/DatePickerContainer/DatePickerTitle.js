import React, { useCallback, useContext, useMemo } from 'react';
import format from 'date-fns/format';
import { addMonths, addYears, getYearList } from 'src/components/DatePicker/services';
import { DatePickerContext } from 'src/components/DatePicker/context';
import { DATEPICKER_CHANGE_VIEWMODE, DATEPICKER_SELECT_DATE } from 'src/components/DatePicker/constant';

const getTitleToRender = ({ viewMode, date, years }) => {
  if (viewMode === 'day') {
    return format(date, 'MMM-yyyy');
  }
  if (viewMode === 'month') {
    return format(date, 'yyyy');
  }
  if (viewMode === 'year') {
    return (
      <>
        <span>{years[0]}</span>
        <span> - </span>
        <span>{years[years.length - 1]}</span>
      </>
    );
  }
  return (<></>);
};

const DatePickerTitle = () => {
  const [state, dispatch] = useContext(DatePickerContext);
  const { value, viewMode, canChangeViewMode } = state;
  const handleAddDayPicker = useCallback(month => dispatch({ type: DATEPICKER_SELECT_DATE, payload: addMonths(value, month) }), [dispatch, value]);
  const handleAddMonthPicker = useCallback(year => dispatch({ type: DATEPICKER_SELECT_DATE, payload: addYears(value, year) }), [dispatch, value]);
  const handleAddYearPicker = useCallback(year => dispatch({ type: DATEPICKER_SELECT_DATE, payload: addYears(value, year * 25) }), [dispatch, value]);
  const handleDayViewMode = useCallback(() => dispatch({ type: DATEPICKER_CHANGE_VIEWMODE, payload: 'month' }), [dispatch]);
  const handleMonthViewMode = useCallback(() => dispatch({ type: DATEPICKER_CHANGE_VIEWMODE, payload: 'year' }), [dispatch]);

  const actionSelect = useMemo(() => ({
    day: {
      nextStep: handleAddDayPicker,
      currentStep: handleDayViewMode
    },
    month: {
      nextStep: handleAddMonthPicker,
      currentStep: handleMonthViewMode
    },
    year: {
      nextStep: handleAddYearPicker,
      currentStep: () => {}
    }
  }), [handleAddDayPicker, handleAddMonthPicker, handleAddYearPicker, handleDayViewMode, handleMonthViewMode]);
  const { nextStep, currentStep } = useMemo(() => actionSelect[viewMode], [viewMode, actionSelect]);
  const years = useMemo(() => getYearList(value.getFullYear()), [value]);

  return (
    <div className='date-picker__header-wrapper'>
      <button
          className='date-picker__button date-picker__button-next'
          onClick={() => nextStep(-1)}
      >
        {"< "}
      </button>
      <button
          className='date-picker__button date-picker__button-title'
          disabled={!canChangeViewMode}
          onClick={currentStep}
      >
        {getTitleToRender({ viewMode, date: value, years })}
      </button>
      <button
          className='date-picker__button date-picker__button-next'
          onClick={() => nextStep(1)}
      >
        {" >"}
      </button>
    </div>
  );
};

export default DatePickerTitle;
