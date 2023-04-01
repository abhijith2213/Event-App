import Image from "next/image"
import { useRouter } from "next/router"
import { useRef, useState } from "react"
export const SingleEvents = ({ data }) => {
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const inputEmail = useRef()
  const router = useRouter()
  const onSubmit = async (e) => {
    e.preventDefault()
    const emailValue = inputEmail.current.value
    const eventId = router?.query.id

    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!emailValue.match(validRegex)) {
      setError("Please provide a valid email")
      return
    }
    try {
      const response = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      })
      if (!response.ok) {
        const data = await response.json()
        setError(data?.message)
        inputEmail.current.value = ""
      } else {
        const data = await response.json()
        if (data) {
          setMessage(data?.message)
          inputEmail.current.value = ""
        }
      }
    } catch (error) {
      console.log(error, "error")
      setError(error?.message)
    }
  }
  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get Registered for this Event</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="enter your email here..."
        />
        <button type="submit">Submit</button>
      </form>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <p className="message">{message}</p>
      )}
    </div>
  )
}
