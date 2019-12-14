import React, { useContext, useCallback, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { DatePickerContext } from 'src/components/DatePicker/context';
import { DATEPICKER_SELECT_DATE } from 'src/components/DatePicker/constant';
import compareAsc from 'date-fns/compareAsc';
import cloneDeep from 'lodash/cloneDeep';

const newDate = new Date();

const DatePickerToday = () => {
  const [state, dispatch] = useContext(DatePickerContext);
  const { minDate, maxDate } = state;
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

  return (
    <button
        className='date-picker__button date-picker__button-today'
        onClick={selectToday}
        disabled={isToDayDisabled}
    >
      <FormattedMessage id="IDS_KC_SELECT_TODAY" />
    </button>
  );
};

export default DatePickerToday;
