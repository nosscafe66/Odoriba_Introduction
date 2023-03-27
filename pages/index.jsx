import styles from '../styles/Home.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Home() {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    const { loginuser } = useUser();
    if (typeof loginuser === 'undefined') {
        console.log("not, Login");
    } else {
        console.log(user.name);
        console.log("sub=", user.sub);
    }
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                {isAuthenticated && (
                    <div>
                        {<p>{loginuser.name}</p>}
                        <button onClick={() => logout()}>ログアウト</button>
                    </div>
                )}
                {!isAuthenticated && (
                    <div>
                        <button className={styles.loginbutton} onClick={() => loginWithRedirect()}>新規登録/ログイン</button>
                    </div>
                )}
            </main>
        </div>
    );
}
