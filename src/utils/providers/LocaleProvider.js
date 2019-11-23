import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';

import messages_de from '../translations/de';
import messages_en from '../translations/en';

// antd
import enUS from 'antd/es/locale/en_US';
import deDE from 'antd/es/locale/de_DE';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');
// antd

const messages = {
  'de': messages_de,
  'en': messages_en
};

const LocaleComponent = ({ locale, children }) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ConfigProvider locale={locale === 'en' ? enUS : deDE}>
        {children}
      </ConfigProvider>
    </IntlProvider>
  );
}

export default connect(
  state => ({
    locale: state.language.locale
  }),
  null
)(LocaleComponent);
