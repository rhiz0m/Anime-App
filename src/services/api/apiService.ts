import { formData } from "../../models/formModels"

export const submitData = async (data: formData): Promise<void> => {
  
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
}
