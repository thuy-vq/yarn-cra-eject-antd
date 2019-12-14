import React, { useContext, useMemo } from 'react';
import onClickOutside from 'react-onclickoutside';
import format from 'date-fns/format';
import DatePickerProvider, { DatePickerContext } from 'src/components/DatePicker/context';

import DatePickerImgPopup from 'src/components/DatePicker/DatePickerContainer/DatePickerImgPopup';
import DatePickerBody from 'src/components/DatePicker/DatePickerContainer/DatePickerBody';

import './style.scss';
import { DATEPICKER_CLOSE_POPUP } from 'src/components/DatePicker/constant';

const DatePicker = ({ value }) => {
  const [state, dispatch] = useContext(DatePickerContext);
  const { showPopup } = state;
  const convertedValue = useMemo(() => format(value, 'dd-MM-yyyy'), [value]);

  // this is the func of "react-onclickoutside", not redundant...
  // eslint-disable-next-line
  DatePicker.handleClickOutside = evt => {
    dispatch({ type: DATEPICKER_CLOSE_POPUP });
  };

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
    <DatePickerProvider {...props}>
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
