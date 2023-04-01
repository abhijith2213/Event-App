import Image from "next/image"
import Link from "next/link"

export const EventsComponent = ({ data }) => {
  return (
    <div className="events_page">
      {data.map((event) => (
        <Link href={`/events/${event.id}`} key={event.id}>
          <div className="card">
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={300}
            />
            <h2>{event.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}
