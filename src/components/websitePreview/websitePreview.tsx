import * as React from 'react';
import { css } from 'glamor';
import { margin } from 'glamor/utils';
const loveImage = require('~src/assets/images/cw-default-photo.jpg');
const menuIcon = require('~src/assets/iconMenu.svg');

export interface Props {
  ownerFirstName: string;
  ownerLastName: string;
  location: string;
  date: any;
}

const previewRules = css({
  position: 'absolute',
  left: '50%',
  top: '50%',
  fontSize: '15px',
  transform: 'translate(-50%,-50%)',
  width: '800px',
  height: '500px',
  backgroundColor: '#E2E2E4',
  boxShadow: '0 15px 60px 0 rgba(0,0,0,.1), 0 32px 75px 0 rgba(0,0,0,.1)',
  fontFamily: 'proxima-nova,Helvetica Neue,sans-serif',
  fontWeight: '300',
  borderRadius: '5px'
});

const titleRules = css({
  width: '100%',
  textAlign: 'center',
  fontSize: '10px',
  textTransform: 'uppercase',
  fontWeight: '600',
  letterSpacing: '.2px',
  lineHeight: '36px'
});

const buttonRules = css({
  position: 'absolute',
  left: '10px',
  top: '0',
  height: '36px',
  display: 'flex',
  alignItems: 'center'
});

const windowBtn = css({
  height: '10px',
  width: '10px',
  borderRadius: '10px',
  margin: '0 3px'
});

const close = css({
  backgroundColor: '#ff5e53'
});

const minimize = css({
  backgroundColor: '#ffc107'
});

const expand = css({
  backgroundColor: '#00cd36'
});

const leftPane = css({
  position: 'absolute',
  top: '36px',
  left: '0',
  width: '480px',
  height: '464px',
  borderRadius: '5px',
  background:
    'linear-gradient(to bottom,transparent 0,transparent 40%,rgba(0,0,0,.4) 100%)'
});

const menuRules = css({
  fontSize: '12px',
  position: 'absolute',
  top: '30px',
  left: '25px',
  height: '20px',
  width: '20px'
});

const introRules = css({
  letterSpacing: '1',
  color: '#fff',
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '10% 20% 10% 10%'
});

const imageRules = css({
  zIndex: '-10',
  maxHeight: '100%'
});

const nameRules = css({
  fontSize: '44px'
});

const greetingRules = css({
  fontSize: '15px',
  marginTop: '5.5%'
});

const rightPane = css({
  position: 'absolute',
  width: '320px',
  height: '464px',
  left: '480px',
  top: '36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0 0 5px',
  fontSize: '15px',
  backgroundColor: '#f3efeb',
  flexDirection: 'column'
});

const locationRules = css({
  margin: '15px 0',
  fontSize: '18px',
  lineHeight: '30px'
});

const dateRules = css({
  fontSize: '12px',
  lineHeight: '17px'
});

const ctaButtonContainer = css({
  margin: '20px',
  padding: '15px',
  textAlign: 'center'
});

const guestNameRules = css({
  fontSize: '7px',
  lineHeight: '24px',
  letterSpacing: '1.25px',
  fontWeight: '400',
  textTransform: 'uppercase'
});

const ctaButtonRules = css({
  fontWeight: '400',
  lineHeight: '28px',
  border: '1.4px solid',
  borderRadius: '5px',
  minWidth: '150px',
  fontSize: '11px',
  padding: '0 20px',
  textAlign: 'center'
});

export default function WebsitePreview(props) {
  //this aint pretty but it gets the job done
  let days: any = {
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
    Sun: 'Sunday'
  };
  let formattedDate;
  if (props.date) {
    let fDate = new Date(props.date).toDateString().split(' ');
    formattedDate = `${days[fDate[0]]} ${fDate[1]} ${fDate[2]}, ${fDate[3]}`;
  }

  return (
    <div {...previewRules}>
      <div {...titleRules}>
        <div>
          {props.ownerFirstName || 'Romeo'} &{' '}
          {props.fianceeFirstName || 'Juliet'}
        </div>
        <div {...buttonRules}>
          <div {...windowBtn} {...close} />
          <div {...windowBtn} {...minimize} />
          <div {...windowBtn} {...expand} />
        </div>
      </div>
      <div {...leftPane}>
        <img {...imageRules} src={loveImage} />
        <div {...nameRules}>
          <img {...menuRules} src={menuIcon} />
          <div {...introRules}>
            <div {...nameRules}>
              {props.ownerFirstName || 'Romeo'} <br />
              & {props.fianceeFirstName || 'Juliet'}
            </div>
            <div {...greetingRules}>
              We are so excited to celebrate with you. Help us capture our
              wedding with Joy.
            </div>
          </div>
        </div>
      </div>
      <div {...rightPane}>
        <div {...locationRules}>{props.location}</div>
        <div {...dateRules}>
          {formattedDate || new Date(Date.now()).toDateString()}
        </div>
        <div {...ctaButtonContainer}>
          <div {...guestNameRules}>Hi guest name!</div>
          <div {...ctaButtonRules}>Don't Forget to RSVP</div>
        </div>
      </div>
    </div>
  );
}
