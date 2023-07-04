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
      <div className="display: flex flex-col items-center ">
        <div>
          <section className="items-center bg-[#ffffff] rounded-t-lg shadow-lg py-10">
            
            <a className="text-lg px-5 py-4 border-[1px]
            border-[#D6DCE0] border-t-0 border-l-0 border-r-0 mb-[-2px]"></a>

            <a className="text-lg text-center justify-center rounded-tl-lg rounded-tr-lg px-[1.6rem] 
            py-4 border-[1px] border-[#D6DCE0] border-b-0 mb-[-2px]" href="login" >Already Registered?</a>

            <a className="text-lg text-center justify-center px-[1.6rem] py-4 border-[1px]
            border-[#D6DCE0] border-t-0 border-l-0 border-r-0 mb-[-2px]" href="register">New to Here?</a>
            
            <a className="text-lg px-2 py-4 border-[1px]
            border-[#D6DCE0] border-t-0 border-l-0 border-r-0 mb-[-2px]"></a>
            
            {/* <a className="text-lg rounded-tr-lg px-5 py-5 border-2 
            border-[#D6DCE0] border-t-0 border-l-0 border-r-0"></a>

            <a className="text-lg w-1/2 rounded-tl-lg rounded-tr-lg px-20 
            py-5 border-2 border-[#D6DCE0] border-b-0" href="login" >Login</a>

            <a className="text-lg rounded-tr-lg px-20 py-5 border-2 
            border-[#D6DCE0] border-t-0 border-l-0 border-r-0" href="register">Register</a>
            
            <a className="text-lg rounded-tr-lg px-2 py-5 border-2 
            border-[#D6DCE0] border-t-0 border-l-0 border-r-0"></a> */}
          </section>
          <section className="items-center bg-[#ffffff] rounded-b-lg shadow-lg p-6">
            {children}
          </section>
        </div>
      </div>
       
    )
  }
  