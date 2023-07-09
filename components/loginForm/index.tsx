'use client';
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from "./loginForm.module.css"

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement authentication logic here
    router.push("/");
  };

  return (
    <div className="block items-center justify-center">
      <p className="text-2l font-bold pb-3 text-[#4F5864] text-center">Login using your email</p>
      <form onSubmit={handleSubmit} className='block items-center justify-center'>
        <div className="block items-center justify-center">
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder='Email Address'
            className="text-black block bg-gray-100 text-left w-full px-4 py-2 my-8 rounded-md"
          />

          <input
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="text-black block bg-gray-100 text-left w-full px-4 py-2 my-2 rounded-md"
            placeholder='Password'
          />

          <div className="flex items-center mb-8">
            <input
              type="checkbox"
              checked={keepSignedIn}
              onChange={(event) => setKeepSignedIn(event.target.checked)}
              className="mr-2"
            />
            <label htmlFor="keepSignedIn" className="text-sm text-gray-600">
              Keep me signed in
            </label>
          </div>
        </div>
      </form>
      <div className="block items-center justify-center">
        <button type="submit" className="bg-[#1EB3EC] rounded-full border-4 w-full px-32 py-1 text-white text-center">Login</button>
        <a className="text-center block mx-auto mt-2" href=''>Forgot password?</a>
      </div>

      <div className="signinreg-divider flex text-base items-center px-4 my-4">
        <div className="flex-1 h-px bg-gray-300 mr-4"></div>
        <span className="text-black">or</span>
        <div className="flex-1 h-px bg-gray-300 ml-4"></div>
      </div>

      <section>
        <p className="text-2l font-bold pb-3 text-[#4F5864] text-center">Sign in to xxx with ...</p>

        <div className="flex justify-center my-8">
          <div className="flex justify-center rounded-full border-4 py-1 mx-2">
            <svg id="facebook-circle-fill" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='mx-2'>
              <path id="Path_1131" data-name="Path 1131" d="M0,0H24V24H0Z" fill="none"></path>
              <path id="Path_1132" data-name="Path 1132" d="M12,2a10,10,0,0,0-1.562,19.879V14.89H7.9V12h2.54V9.8a3.528,3.528,0,0,1,3.777-3.89,15.393,15.393,0,0,1,2.238.2v2.46h-1.26a1.445,1.445,0,0,0-1.63,1.562V12h2.773l-.443,2.89h-2.33v6.989A10,10,0,0,0,12,2Z" fill="#1677f3"></path>
            </svg>
            <a className='text-sm  text-black text-center mx-2' href='www.facebook.com'>Continue with Facebook</a>
          </div>

          <div className="flex justify-center rounded-full border-4 py-1 mx-2">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24" className='mx-2'>
              <g>
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </g>
            </svg>
            <a className='text-sm  text-black text-center mx-2'  href='www.Google.com'>Continue with Google</a>
          </div>

        </div>

        <p className="text-2l pb-3 text-[#4F5864] text-center"> Don&apos;t have a xxx account?
          <a className="text-base text-left text-[#01b2ee]" href="register"> Sign up</a>
        </p>
      </section>
    </div>
  )
}