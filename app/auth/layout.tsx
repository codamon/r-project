import styles from "./layout.module.css"
import Link from "next/link"

// export const metadata = {
//     title: 'Login Page',
//     description: 'Auth Page',
//   }

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div>
            {/* <Link href='/'>Home</Link>
            <Link href='/auth/login'>Login</Link>
            <Link href='/auth/register'>Register</Link> */}
            <h1 className={styles.h1}>Auth Layout</h1>
            {children}
        </div>
            
    )
  }
  