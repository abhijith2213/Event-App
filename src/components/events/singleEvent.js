import Image from "next/image"

export const SingleEvents = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p>{data.description}</p>
      <input className="input" type="email" />
      <button className="btn">Submit</button>
    </div>
  )
}
