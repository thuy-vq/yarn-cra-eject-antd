import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import messages_de from '../translations/de';
import messages_en from '../translations/en';

const messages = {
  'de': messages_de,
  'en': messages_en
};

const LocaleComponent = ({ locale, children }) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}

export default connect(
  state => ({
    locale: state.system.locale
  }),
  null
)(LocaleComponent);
