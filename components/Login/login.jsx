import { useAuth0, User } from '@auth0/auth0-react';
import classes from './login.module.css'

export function Login() {
    const {
        isAuthenticated,
        loginWithRedirect,
        logout,
        user
    } = useAuth0();

    return (
        <div>
            {!isAuthenticated && (
                <div>
                    <button className={classes.loginbutton} onClick={() => logout()}>ログアウト</button>
                </div>
            )}
            {isAuthenticated && (
                <div>
                    <button onClick={() => loginWithRedirect()}>ログイン</button>
                </div>
            )}
        </div>
    )
}
