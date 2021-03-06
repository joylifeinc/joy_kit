import * as React from 'react';
import { css } from 'glamor';
import { Button } from '../../components';
import closeIcon from '../../assets/iconClose.svg';
import logo from '../../assets/images/logo.png';

export interface Props {
  close: (e) => void;
  signUp: (e) => void;
}

const signUpBackgroundRules = css({
  height: '100%',
  background: 'grey',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  position: 'absolute',
  left: '0'
});

const signUpContainerRules = css({
  position: 'relative',
  width: '500px',
  fontSize: '13px',
  color: '#3A3C3E',
  background: 'white',
  display: 'flex',
  flexDirection: 'column',
  padding: '30px',
  borderRadius: '3px'
});

const textRules = css({
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const logoRules = css({
  width: 'auto',
  height: '100px',
  marginBottom: '30px'
});

const closeSignUpRules = css({
  position: 'absolute',
  top: '0',
  right: '0',
  paddingRight: '10px',
  paddingTop: '10px',
  zIndex: '9px'
});

const signUpHeaderRules = css({
  fontSize: '18px',
  margin: '10px 0',
  fontWeight: '700',
  textAlign: 'center'
});

const paragraphRules = css({
  width: '100%',
  fontSize: '15px',
  lineHeight: '25px',
  marginBottom: '20px',
  opacity: '0.55',
  textAlign: 'center'
});

const freeRules = css({
  fontSize: '0.83em',
  textAlign: 'center',
  paddingBottom: '15px'
});

const buttonRules = css({
  fontWeight: '100'
});

export class SignUpPrompt extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div {...signUpBackgroundRules}>
        <div {...signUpContainerRules}>
          <img
            {...closeSignUpRules}
            onClick={this.props.close}
            src={closeIcon}
          />
          <div {...textRules}>
            <img {...logoRules} src={logo} />
            <div {...signUpHeaderRules}>You're almost done!</div>
            <div {...paragraphRules}>
              Create an account to save your changes and continue customizing
              your site.
            </div>
            <div {...freeRules}>
              Joy is 100% free. Update your information anytime
            </div>
            <Button
              handleOnClick={this.props.signUp}
              styleOverride={{
                fontSize: '13px',
                fontWeight: '300'
              }}
              uppercase={false}
            >
              Sign Up & Create Wedding
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
