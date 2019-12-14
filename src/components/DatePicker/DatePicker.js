import React, { useContext, useEffect, useMemo } from 'react';
import onClickOutside from 'react-onclickoutside';
import format from 'date-fns/format';
import DatePickerProvider, {
  DatePickerDispatchContext,
  DatePickerStateContext,
} from 'src/components/DatePicker/context';

import DatePickerImgPopup from 'src/components/DatePicker/DatePickerContainer/DatePickerImgPopup';
import DatePickerBody from 'src/components/DatePicker/DatePickerContainer/DatePickerBody';

import './style.scss';
import { DATEPICKER_CLOSE_POPUP } from 'src/components/DatePicker/constant';

const DatePicker = ({ onChange }) => {
  const { value, showPopup } = useContext(DatePickerStateContext);
  const dispatch = useContext(DatePickerDispatchContext);
  const convertedValue = useMemo(() => format(value, 'dd-MM-yyyy'), [value]);

  // this is the func of "react-onclickoutside", not redundant...
  // eslint-disable-next-line
  DatePicker.handleClickOutside = evt => {
    dispatch({ type: DATEPICKER_CLOSE_POPUP });
  };

  useEffect(() => {
    onChange(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <span className='date-picker-div-wrapper'>

      <input
          className='date-picker-input'
          type='text'
          value={convertedValue}
          readOnly
      />
      <DatePickerImgPopup />

      {showPopup && <DatePickerBody />}

    </span>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => DatePicker.handleClickOutside
};

const DatePickerWithOutsideClick = onClickOutside(DatePicker, clickOutsideConfig);

const DatePickerWraper = (props) => (
    <DatePickerProvider>
      <DatePickerWithOutsideClick {...props} />
    </DatePickerProvider>
);

//  import DatePickerPopup from '@knox/ui_components/app/components/DatePickerPopup';
//  <DatePickerPopup
//    value={new Date()}
//    initViewMode='day'
//    onChange={(value) => console.log(value)}
//    showQuickDay
//  />

export default DatePickerWraper;
