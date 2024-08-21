import { useState } from "react"
import "./App.css"

function App() {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = {
      name: name,
      mail: mail,
    }

    try {
      const response = await fetch("http://localhost:3000/submit", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        const result = await response.json()
        console.log("Response from backend:", result)
      } else {
        console.log("Failed to send data:", response.statusText)
      }
    } catch (error) {
      console.error("Error:", error)
    }
  }

  return (
    <div>
      <p>Test Form</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Email:
            <input
              type="text"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            ></input>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
