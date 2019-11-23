import moment from 'moment';
import { CHANGE_LOCALE, DEFAULT_LOCALE } from './constants';

const initialState = {
  locale: DEFAULT_LOCALE,
};

const languageProvider = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      moment.locale(action.locale);  // for antd
      return {
        ...state,
        locale: action.locale
      };
    default:
      return state;
  }
};

export default languageProvider;
