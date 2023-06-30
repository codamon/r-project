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
    <div>
      <p className="text-2l font-bold pb-3">Login using your email</p>
    <form onSubmit={handleSubmit}>
        {/* <label>
        Email:
      </label> */}
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='Email Address'
          className="text-black block mb-4 py-2 pr-60"
        />

{/* 
      <label>
        Password:
        </label> */}
        <input
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="text-black block mb-4 py-2 pr-60"
          placeholder='Password'
        />

      <button type="submit" className="bg-indigo-500 rounded-full border-4 px-20 py-1">Login</button>
    </form>
    </div>
  )
}