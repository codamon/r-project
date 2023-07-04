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
        <div className="text-[#1EB8EA] ">
            {/* <Link href='/'>Home</Link>
            <Link href='/auth/login'>Login</Link>
            <Link href='/auth/register'>Register</Link> */}
            <h1 className="text-5xl font-bold my-8 text-center">Auth Layout</h1>
            {children}
        </div>
            
    )
  }
  