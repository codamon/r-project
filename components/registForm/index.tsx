'use client';
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from "./loginForm.module.css"

export default function LoginForm() {
  const [firstname, setFirstname] = useState(""); // [state, setState
  const [lastname, setLastname] = useState(""); // [state, setState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState(""); // [state, setState
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement authentication logic here
    router.push("/");
  };

  return (
    <div>
      <p className="text-2l font-bold pb-3">Regist your account</p>
    <form onSubmit={handleSubmit}>
    <input
          type="text"
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)}
          placeholder='First Name'
          className="text-black block mb-4 py-2 pr-60"
        />

        <input
          type="text"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
          placeholder='last Name'
          className="text-black block mb-4 py-2 pr-60"
        />
        
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='Email Address'
          className="text-black block mb-4 py-2 pr-60"
        />
        <input
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="text-black block mb-4 py-2 pr-60"
          placeholder='Password'
        />

        <input
          type="text"
          value={passwordConfirmation}
          onChange={(event) => setPasswordConfirmation(event.target.value)}
          className="text-black block mb-4 py-2 pr-60"
          placeholder='Confirm Password'
        />

      <button type="submit" className="bg-indigo-500 rounded-full border-4 px-20 py-1">Regist</button>
    </form>
    </div>
  )
}