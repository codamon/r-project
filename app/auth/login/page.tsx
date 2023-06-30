import Link from "next/link";
import LoginForm from "../../../components/loginForm"
// import styles from "./layout.module.css"

export default function login() {
  return (
    <main>
        {/* <h1 className={styles.h1}>Login Page</h1> */}
        {/* <h1>Login Page</h1> */}

        <LoginForm />
        
        {/* <Link href= '/auth/register'>Register</Link> */}
        
    </main>
  )
}
