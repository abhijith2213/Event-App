import Image from "next/image"
import Link from "next/link"

export const HomeComponent = ({ data }) => (
  <main>
    {data.map((event) => (
      <Link href={`/events/${event.id}`} key={event.id}>
        <Image src={event.image} width={200} height={100} alt={event.title} />
        <h2>{event.title}</h2>
        <p>{event.description}</p>
      </Link>
    ))}
  </main>
)
