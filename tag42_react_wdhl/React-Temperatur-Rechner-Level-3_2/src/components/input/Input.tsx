import React, { type ChangeEventHandler } from "react"

type InputProps = {
  text: string
  // value: number
  value: string
  onchange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({ text, value, onchange, unit }: InputProps) {
  return (
    <>
      <fieldset className="flex flex-col items-center border-1 border-black p-2 mt-5 w-150">
        <legend className="text-center">Schreibe Temperatur in {text}:</legend>
        <input type="number" className="border-1 border-black w-50" value={value} onChange={onchange} />
      </fieldset>
    </>
  )
}
