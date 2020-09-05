import React from 'react';

import SignIn from '../../components/signin/signin.components';
import SignUp from '../../components/signup/sign-up.component';

import './auth.styles.scss';

const AuthPage = () => (
    <div className='auth'>
        <SignIn />
        <SignUp />
    </div>

);

export default AuthPage;