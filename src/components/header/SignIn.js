import { Fragment, useState } from 'react';
import { signInWithGoogle, gooleSignOut }
    from '../../firebase/firebase-utility';

function SignIn() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const signIn = async () => {
        try {
            const res = await signInWithGoogle();
            setIsAuthenticated(true);
        } catch (error) {
            console.log(error);
        }
    };

    const signOut = () => {
        gooleSignOut()
            .then(res => {
                setIsAuthenticated(false);
            })
            .catch(err => console.log(err));
    }

    const signInBtn = <button onClick={signIn} className='px-3 login-with-google-btn'>Sign In</button>;

    const signOutBtn = <button onClick={signOut} className='px-3 login-with-google-btn'>Sign Out</button>;

    return (
        <Fragment>
            {isAuthenticated ? signOutBtn : signInBtn}
        </Fragment>
    );

}

export default SignIn;