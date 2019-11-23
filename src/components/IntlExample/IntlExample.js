import React from 'react';
import { connect } from 'react-redux';

import { Button, Card, Empty } from 'antd';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { CHANGE_LOCALE } from '../../redux/LanguageProvider/constants';

const IntlExample = ({ locale, actionChangeLocale }) => (
  <Card title="Card title" bordered={false}>
    <p>
      <FormattedHTMLMessage
        id="app.text"
        defaultMessage="Edit <code>src/App.js</code> and save to reload.<br/>Now with {what}!"
        description="Welcome header on app main page"
        values={{ what: 'react-intl' }}
      />
    </p>
    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
      <FormattedMessage
        id="app.learn-react-link"
        defaultMessage="Learn React"
        description="Link on react page"
      />
    </a>
    <Empty />
    <div>
      <Button onClick={() => actionChangeLocale(locale === 'en' ? 'de' : 'en')}>change language: {locale}</Button>
    </div>
  </Card>
);

const mapStateToProps = state => ({
  locale: state.language.locale
});

const mapDispatchToProps = dispatch => ({
  actionChangeLocale: locale => dispatch({ type: CHANGE_LOCALE, locale })
});

export default connect(
  mapStateToProps,
    mapDispatchToProps
)(IntlExample);
