import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import EmailLogin from '../containers/auth/EmailLogin';

interface EmailLoginPageProps extends RouteComponentProps {}
const EmailLoginPage: React.SFC<EmailLoginPageProps> = ({
  location,
  history,
}) => {
  return <EmailLogin history={history} location={location} />;
};

export default withRouter(EmailLoginPage);
