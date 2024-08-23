import React, { useState } from "react"
import { submitData } from "./services/api/apiService"
import "./App.css"

function App() {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [comment, setComment] = useState("")
  const [author, setAuthor] = useState("")

 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const data = {
    title,
    date,
    comment,
    author
  }   

  try {
await submitData(data)
  } catch(error) {
console.log(error)
  }
 }

  return (
    <div>
      <p>Feedback Form</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Date:
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            ></input>
          </label>
        </div>

        <div>
          <label>
            Comment:
            <textarea
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </label>
        </div>

        <div>
          <label>
          Author:
          <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          >
          </input>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
