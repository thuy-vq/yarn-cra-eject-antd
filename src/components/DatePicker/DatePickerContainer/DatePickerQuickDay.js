import React, { useCallback, useContext, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { DatePickerDispatchContext, DatePickerStateContext } from 'src/components/DatePicker/context';
import { DATEPICKER_SELECT_DATE, DATEPICKER_SELECT_TOMORROW } from 'src/components/DatePicker/constant';
import cloneDeep from 'lodash/cloneDeep';
import compareAsc from 'date-fns/compareAsc';
import isSameDay from 'date-fns/isSameDay';

const newDate = new Date();
const tomorrowDate = new Date(newDate.getTime() + 86400000); //24 * 60 * 60 * 1000

const DatePickerQuickDay = () => {
  const { value, minDate, maxDate } = useContext(DatePickerStateContext);
  const dispatch = useContext(DatePickerDispatchContext);
  const selectToday = useCallback(() => dispatch({ type: DATEPICKER_SELECT_DATE, payload: newDate }), [dispatch]);
  const isToDayDisabled = useMemo(() => {
    const clonedValue = new Date().setHours(0, 0, 0);
    if (minDate && compareAsc(clonedValue, cloneDeep(minDate).setHours(0, 0, 0)) === 1) {   // value < min
      return true;
    }
    if (maxDate && compareAsc(cloneDeep(maxDate).setHours(0, 0, 0), clonedValue) === 1) {   // max < value
      return true;
    }
    return false;
  }, [minDate, maxDate]);
  const isTomorrowDisabled = useMemo(() => {
    const clonedValue = new Date(newDate.getTime() + 86400000).setHours(0, 0, 0);
    if (minDate && compareAsc(clonedValue, cloneDeep(minDate).setHours(0, 0, 0)) === 1) {   // value < min
      return true;
    }
    if (maxDate && compareAsc(cloneDeep(maxDate).setHours(0, 0, 0), clonedValue) === 1) {   // max < value
      return true;
    }
    return false;
  }, [minDate, maxDate]);
  const isTodaySelected = isSameDay(value, newDate);
  const isTomorrowSelected = isSameDay(value, tomorrowDate);
  const selectTomorrow = () => dispatch({ type: DATEPICKER_SELECT_TOMORROW, payload: tomorrowDate });

  return (
    <li className="date-picker-custom__group-quick-day-btn">

      <button
          type="button"
          disabled={isToDayDisabled}
          className={`mode-date-button btn-default clear-button${isTodaySelected ? ' clear-button--selected' : ''}`}
          onClick={selectToday}
      >
        <FormattedMessage id="IDS_KC_TODAY" />
      </button>
      <button
          type="button"
          disabled={isTomorrowDisabled}
          className={`mode-date-button btn-default clear-button${isTomorrowSelected ? ' clear-button--selected' : ''}`}
          onClick={selectTomorrow}
      >
        <FormattedMessage id="IDS_KC_TOMORROW" />
      </button>

    </li>
  );
};

export default DatePickerQuickDay;
