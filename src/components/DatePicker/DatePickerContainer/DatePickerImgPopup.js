import React, { useCallback, useContext } from 'react';
import { DatePickerDispatchContext } from 'src/components/DatePicker/context';
import datePickerImg from 'images/date_picker.svg';
import { DATEPICKER_CHANGE_STATE } from 'src/components/DatePicker/constant';

const DatePickerImgPopup = () => {
  const dispatch = useContext(DatePickerDispatchContext);
  const handleClickPopup = useCallback(() => dispatch({ type: DATEPICKER_CHANGE_STATE }), [dispatch]);

  return (
    <span className='date-picker-btn'>
      <img
        className='date-picker__icon'
        src={datePickerImg}
        alt='date-picker-popup'
        onClick={handleClickPopup}
      />
    </span>
  );
}

export default DatePickerImgPopup;
