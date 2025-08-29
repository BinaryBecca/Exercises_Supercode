import React, { useState } from "react"

export default function Input() {
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")

  interface IUser {
    firstName: string
    lastName: string
    email: string
  }

  const [user, setUser] = useState<IUser>({
    firstName: "",
    lastName: "",
    email: "",
  })

  return (
    <>
      <div className="bg-white h-[10px]"></div>
      <div className="flex flex-col items-center bg-red-100 text-red-700 p-5 w-200 gap-5">
        <form className="flex flex-row justify-evenly w-200">
          <input
            className="bg-orange-100 h-10 w-50"
            type="text"
            value={firstName}
            placeholder=" Enter your first name"
            onChange={(event) => setFirstName(event.target.value)}
          />

          <input
            className="bg-orange-100 h-10 w-50"
            type="text"
            value={lastName}
            placeholder=" Enter your last name"
            onChange={(event) => setLastName(event.target.value)}
          />

          <input
            className="bg-orange-100 h-10 w-50"
            type="text"
            value={email}
            placeholder=" Enter your email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </form>

        <div className="flex justify-evenly w-200 gap-5 p-5">
          <div className="w-50">First name: {firstName}</div>
          <div className="w-50">Last name: {lastName}</div>
          <div className="w-50">Email: {email}</div>
        </div>
      </div>
    </>
  )
}
