import { Fragment } from 'react';
import { signInWithGoogle, gooleSignOut }
    from '../../firebase/firebase-utility';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthDetails } from '../../store/storeIndex';

function SignIn() {
    const { userDetails } = useSelector(state => state.authUserInfo );
    const dispatch = useDispatch();

    const signIn = async () => {
        try {
            const res = await signInWithGoogle();
            console.log(res);
            // setIsAuthenticated(true);
        } catch (error) {
            console.log(error);
        }
    };

    const signOut = () => {
        gooleSignOut()
            .then(res => {
                // setIsAuthenticated(false);
            })
            .catch(err => console.log(err));
    }

    const signInBtn = <button onClick={signIn} className='px-3 ml-4 login-with-google-btn font-bold'>SIGN IN</button>;

    const signOutBtn = <button onClick={signOut} className='px-3 ml-4 login-with-google-btn font-bold'>SIGN OUT</button>;

    return (
        <Fragment>
            {/* {isAuthenticated ? signOutBtn : signInBtn} */}
            {signInBtn}
        </Fragment>
    );

}

export default SignIn;