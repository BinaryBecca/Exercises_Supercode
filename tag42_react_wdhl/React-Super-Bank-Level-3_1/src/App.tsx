import { useState } from "react"
import "./App.css"

import { CreditCard } from "react-kawaii"

function App() {
  const [currentMoneyInBank, setCurrentMoneyInBank] = useState(0)
  const [inputUser, setInputUser] = useState("")

  const addingMoney = () => {
    const money = Number(inputUser)
    setCurrentMoneyInBank(currentMoneyInBank + money)
    setInputUser("")
  }

  const removingMoney = () => {
    const money = Number(inputUser)
    setCurrentMoneyInBank(currentMoneyInBank - money)
    setInputUser("")
  }

  const moodCreditCard = (): "happy" | "blissful" | "sad" => {
    if (currentMoneyInBank > 1000) return "blissful"
    if (currentMoneyInBank < 0) return "sad"
    return "happy"
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2">
        <CreditCard size={240} mood={moodCreditCard()} color="#add2ff" />
        {/* <CreditCard size={240} mood="happy" color="#add2ff"" /> */}
        {/* <CreditCard size={240} mood="blissful" color="#add2ff"" /> */}
        {/* <CreditCard size={240} mood="sad" color="#add2ff" /> */}

        <h1 className="font-bold text-2xl">SUPER BANK</h1>

        <div className="flex flex-col justify-center items-center gap-2 bg-[#add2ff] p-[2rem] rounded-[1.5rem]">
          <p>Dein Girokonto</p>
          <h1 className="text-2xl">{currentMoneyInBank}€</h1>
          <input
            type="text"
            required
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
            placeholder="Gib einen Geldbetrag ein"
            className="border-1 p-2 bg-white"
          />
          <div className="flex gap-3">
            <button onClick={addingMoney} className="bg-[#add2ff] p-[.5rem] rounded-[1.5rem] border-1 border-black">
              Einzahlen
            </button>
            <button onClick={removingMoney} className="bg-[#add2ff] p-[.5rem] rounded-[1.5rem] border-1 border-black">
              Auszahlen
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
