import * as React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress } from 'react-places-autocomplete';
import { css } from 'glamor';
import { error } from 'util';

export interface Props {
  location: string;
  inputProps?: any;
  updateLocation: (e) => any;
  handleBlur: (e) => any;
  error?: string;
  label?: string;
}

const barOptions = (side: string) =>
  css(
    {
      content: '""',
      height: '2px',
      width: '0',
      bottom: '1px',
      position: 'absolute',
      background: '#4A90E2',
      transition: '0.2s ease all'
    },
    side === 'left' ? { left: '50%' } : { right: '50%' }
  );

const barRules = css({
  position: 'relative',
  display: 'block',
  '::before': barOptions('left'),
  '::after': barOptions('right')
});

const errorBarRules = css({
  position: 'relative',
  display: 'block',
  content: '""',
  height: '2px',
  bottom: '1px',
  background: 'red'
});

const errorText = css({
  color: 'red',
  margin: '4px 0 0 5px',
  fontSize: '14px'
});

const labelRules = css({
  fontSize: '15px',
  opacity: '0.5'
});

export class LocationLookup extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    const { error, label, location, handleBlur, updateLocation } = this.props;

    const inputProps = {
      value: location,
      onChange: updateLocation,
      onBlur: handleBlur
    };

    const myStyles = {
      root: {
        position: 'relative',
        paddingBottom: '10px'
      },
      input: {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid #757575',
        display: 'inline-block',
        padding: '10px',
        ':focus': {
          outline: 'none'
        }
      },
      autocompleteItem: { color: 'black' }
    };

    const options = {
      types: ['(cities)']
    };

    return (
      <div>
        {label ? <label {...labelRules}>{label}</label> : null}
        <PlacesAutocomplete
          inputProps={inputProps}
          styles={myStyles}
          options={options}
        />
        <span {...errorText}>{error}</span>
      </div>
    );
  }
}
