import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import format from 'date-fns/format';

import { addMonths, addYears, setYear } from './services';

import DatePickerImgPopup from './DatePickerContainer/DatePickerImgPopup';
import DatePickerBody from './DatePickerContainer/DatePickerBody';
import DatePickerHeader from './DatePickerContainer/DatePickerHeader';

import './style.scss';

const newDate = new Date();
const newDateStr = format(newDate, 'yyyy-MM-dd');
const tomorrowDate = new Date(newDate.getTime() + 86400000); //24 * 60 * 60 * 1000
const tomorrowDateStr = format(tomorrowDate, 'yyyy-MM-dd');

class DatePickerPopup extends Component {
  state = {
    selectedDate: this.props.selectedDate,
    viewMode: this.props.initViewMode,
    showPopup: false,
  };

  handleChangeDate = selectedDate => {
    const { viewMode } = this.state;

    if (viewMode === 'day') {
      this.setState({
        selectedDate,
        showPopup: false,
      }, () => this.onSuccessCallback());
    } else if (viewMode === 'month') {
      this.setState({ viewMode: 'day' });
    }
  };

  handleClickPopup = () => this.setState({ showPopup: !this.state.showPopup });

  // this is the func of "react-onclickoutside", not redundant...
  handleClickOutside = evt => {
    if (this.state.showPopup) {
      this.setState({ showPopup: false });
    }
  };

  onSuccessCallback = () => {
    const { selectedDate } = this.state;

    if (selectedDate !== this.props.selectedDate) {
      this.props.onChange(selectedDate);
    }
  }

  isOutRange = value => {
    const { minDate, maxDate } = this.props;
    return !this.props.canChangeViewMode ||
        ((minDate !== undefined && minDate !== null) && value < format(minDate, 'yyyy-MM-dd')) ||
        ((maxDate !== undefined && maxDate !== null) && value > format(maxDate, 'yyyy-MM-dd'));
  };

  isToDayDisabled = () => this.isOutRange(newDateStr);
  isTomorrowDisabled = () => this.isOutRange(tomorrowDateStr);

  selectToday = () => {
    this.setState({
      showPopup: false,
      selectedDate: newDate,
      viewMode: 'day'
    }, () => this.onSuccessCallback());
  };

  selectTomorrow = () => {
    this.setState({
      showPopup: false,
      selectedDate: tomorrowDate
    }, () => this.onSuccessCallback());
  };

  isTodaySelected = () => format(this.state.selectedDate, 'yyyy-MM-dd') === newDateStr;
  isTomorrowSelected = () => format(this.state.selectedDate, 'yyyy-MM-dd') === tomorrowDateStr;

  handleDayViewMode = () => this.setState({ viewMode: 'month' });
  handleMonthViewMode = () => this.setState({ viewMode: 'year' });

  handleClickYear = year => {
    this.setState({
      viewMode: 'month',
      selectedDate: setYear(this.state.selectedDate, year),
    });
  }

  handleAddDayPicker = month => this.setState({ selectedDate: addMonths(this.state.selectedDate, month) });
  handleAddMonthPicker = year => this.setState({ selectedDate: addYears(this.state.selectedDate, year) });
  handleAddYearPicker = year => this.setState({ selectedDate: addYears(this.state.selectedDate, 25 * year) });

  actionSelect =  {
    day: {
      nextStep: this.handleAddDayPicker,
      current: this.handleDayViewMode
    },
    month: {
      nextStep: this.handleAddMonthPicker,
      current: this.handleMonthViewMode
    },
    year: {
      nextStep: this.handleAddYearPicker,
      current: () => {}
    }
  };

  renderHeader = ({ children }) => {
    const { viewMode, selectedDate } = this.state;
    const { canChangeViewMode } = this.props;
    return (
      <DatePickerHeader
        viewMode={viewMode}
        canChangeViewMode={canChangeViewMode}
        selectedDate={selectedDate}
        actionSelect={this.actionSelect[viewMode]}
        handleClickYear={this.handleClickYear}
        selectToday={this.selectToday}
        headerComponent={children}
      />
    );
  };

  render() {
    const { selectedDate, viewMode, showPopup } = this.state;
    const { showQuickDay, minDate, maxDate } = this.props;
    return (
        <span className='date-picker-div-wrapper'>

      <input
          className='date-picker-input'
          type='text'
          value={format(this.props.selectedDate, 'dd-MM-yyyy')}
          readOnly
      />
      <span className='date-picker-btn'>
        <DatePickerImgPopup onClick={this.handleClickPopup} />
      </span>
          {showPopup && (
              <DatePickerBody
                  showQuickDay={showQuickDay}
                  isToDayDisabled={this.isToDayDisabled()}
                  isTomorrowDisabled={this.isTomorrowDisabled()}
                  isTodaySelected={this.isTodaySelected()}
                  isTomorrowSelected={this.isTomorrowSelected()}
                  selectToday={this.selectToday}
                  selectTomorrow={this.selectTomorrow}
                  selectedDate={selectedDate}
                  handleChangeDate={this.handleChangeDate}
                  showMonthYearPicker={viewMode === 'month'}
                  renderHeader={this.renderHeader}
                  minDate={minDate}
                  maxDate={maxDate}
              />
          )}
    </span>
    );
  }
}

const propTypes = {
  initViewMode: PropTypes.string,   // 'day', 'month' or 'year'
  canChangeViewMode: PropTypes.bool,
  showQuickDay: PropTypes.bool,
  selectedDate: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

const defaultProps = {
  initViewMode: 'day',
  canChangeViewMode: true,
  showQuickDay: false,
  selectedDate: newDate,
  onChange: () => {},
};

DatePickerPopup.propTypes = propTypes;
DatePickerPopup.defaultProps = defaultProps;

//  import DatePickerPopup from '@knox/ui_components/app/components/DatePickerPopup';
//  <DatePickerPopup
//    selectedDate={new Date()}
//    initViewMode='day'
//    onChange={(selectedDate) => console.log(selectedDate)}
//    showQuickDay
//  />

export default onClickOutside(DatePickerPopup);
