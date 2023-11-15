import { Fragment } from 'react';
import { signInWithGoogle, gooleSignOut }
    from '../../firebase/firebase-utility';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthDetails } from '../../store/storeIndex';

function SignIn() {
    const { userDetails } = useSelector(state => state.authUserInfo);
    const dispatch = useDispatch();

    const signIn = async () => {
        try {
            const res = await signInWithGoogle();
            dispatch(setAuthDetails(res._tokenResponse));
        } catch (error) {
            console.log(error);
        }
    };

    const signOut = () => {
        gooleSignOut()
            .then(res => {
                dispatch(setAuthDetails(null));
            })
            .catch(err => console.log(err));
    }

    const signInBtn = <button onClick={signIn} className='px-3 ml-4 login-with-google-btn font-bold'>SIGN IN</button>;

    const signOutBtn = (
        <div className='flex px-4'>

            <div className='flex items-center'>
                <img src={userDetails?.photoUrl} alt='profile-display-pic'
                    className='rounded-full h-8 w-8 mr-2' />
                <div className='flex flex-col'>
                    <span className='font-semibold text-lg'>
                        Hi, {userDetails?.firstName.substring(0, 1).toUpperCase()}{userDetails?.firstName.substring(1)}</span>
                    <button onClick={signOut} className='font-bold text-xs flex justify-start'>
                        SIGN OUT
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <Fragment>
            {userDetails ? signOutBtn : signInBtn}
        </Fragment>
    );

}

export default SignIn;