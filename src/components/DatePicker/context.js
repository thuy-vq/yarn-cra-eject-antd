import React from 'react';
import PropTypes from 'prop-types';
import {
  DATEPICKER_CHANGE_DATE,
  DATEPICKER_CHANGE_STATE, DATEPICKER_CHANGE_VIEWMODE, DATEPICKER_CLOSE_POPUP,
  DATEPICKER_SELECT_DATE,
  DATEPICKER_SELECT_TOMORROW,
  DATEPICKER_SELECT_YEAR
} from './constant';

const propTypes = {
  initViewMode: PropTypes.string,   // 'day', 'month' or 'year'
  canChangeViewMode: PropTypes.bool,
  showQuickDay: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

const defaultProps = {
  initViewMode: 'day',
  canChangeViewMode: true,
  showQuickDay: false,
  value: new Date(),
  minDate: undefined,
  maxDate: undefined,
  onChange: () => {},

};

export const DatePickerContext = React.createContext();

function datepickerReducer(state, action) {
  switch (action.type) {
    case DATEPICKER_CHANGE_STATE: {
      return {
        ...state,
        showPopup: !state.showPopup
      };
    }
    case DATEPICKER_CLOSE_POPUP: {
      return {
        ...state,
        showPopup: false,
      };
    }
    case DATEPICKER_SELECT_DATE: {
      return {
        ...state,
        value: action.payload,
      };
    }
    case DATEPICKER_CHANGE_DATE: {
      if (state.viewMode === 'day') {
        state.onChange(action.payload);
        return {
          ...state,
          value: action.payload,
          showPopup: false,
        };
      } else if (state.viewMode === 'month') {
        return {
          ...state,
          viewMode: 'day',
        };
      }

      return {
        ...state,
      };
    }
    case DATEPICKER_SELECT_TOMORROW: {
      state.onChange(action.payload);
      return {
        ...state,
        showPopup: false,
        value: action.payload,
      };
    }
    case DATEPICKER_SELECT_YEAR: {
      return {
        ...state,
        viewMode: 'month',
        value: action.payload,
      };
    }

    case DATEPICKER_CHANGE_VIEWMODE: {
      return {
        ...state,
        viewMode: action.payload,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}



function DatePickerProvider({ children, value, minDate, maxDate, initViewMode, onChange }) {
  const initialState = {
    ...defaultProps,
    showPopup: false,
    minDate,
    maxDate,
    value,
    viewMode: initViewMode,
    onChange,
  };
  const reducer = React.useReducer(datepickerReducer, initialState);
  return (
    <DatePickerContext.Provider value={reducer}>
      {children}
    </DatePickerContext.Provider>
  )
}

DatePickerProvider.propTypes = propTypes;
DatePickerProvider.defaultProps = defaultProps;

export default DatePickerProvider;
