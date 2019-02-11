import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendStripeToken } from '../actions';

class Payment extends React.Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 emails credits"
        amount={500}
        token={token => this.props.sendStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PK}
      >
        <Button color="blue">Add Credits</Button>
      </StripeCheckout>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  { sendStripeToken },
)(Payment);
