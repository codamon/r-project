'use client';
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from "./loginForm.module.css"

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          className="text-black block bg-gray-100 text-left w-full px-4 py-2 my-8 rounded-md"
          placeholder='Password'
        />
      </div>
  </form>
      <div className="block items-center justify-center">
        <button type="submit" className="bg-[#1EB3EC] rounded-full border-4 w-full px-32 py-1 text-white text-center">Login</button>
        <a className="text-center block mx-auto" href=''>Forgot password?</a>
      </div>

      
    </div>
  )
}