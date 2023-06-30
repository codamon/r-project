// import styles from "./layout.module.css"
import Link from "next/link"

export const metadata = {
    title: 'Login Page',
    description: 'Login Page',
  }

export default function loginLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="display: flex flex-col items-center">
        <div>
          <section className="items-center bg-gray-300 pt-8 rounded-t-lg">
            
            <a className="text-lg rounded-tr-lg px-5 py-5 border-2 
            border-gray-100 border-t-0 border-l-0 border-r-0"></a>

            <a className="text-lg w-1/2 rounded-tl-lg rounded-tr-lg px-20 
            py-5 border-2 border-gray-100 border-b-0" href="login" >Login</a>

            <a className="text-lg rounded-tr-lg px-20 py-5 border-2 
            border-gray-100 border-t-0 border-l-0 border-r-0" href="register">Register</a>
            
            <a className="text-lg rounded-tr-lg px-2 py-5 border-2 
            border-gray-100 border-t-0 border-l-0 border-r-0"></a>
          </section>
          <section className="items-center bg-gray-300 p-8 rounded-b-lg">
            {children}
          </section>
        </div>
      </div>
       
    )
  }
  