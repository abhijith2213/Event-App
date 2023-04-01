import Image from "next/image"
import Link from "next/link"

export const CatEvents = ({ data, pageName }) => {
  return (
    <div className="cat_events">
      <h1>Event in {pageName}</h1>
      <div className="content">
        {data.map((event) => (
          <Link
            href={`/events/${event.city}/${event.id}`}
            key={event.id}
            passHref
          >
            <div className="card">
              <Image
                src={event.image}
                width={500}
                height={300}
                alt={event.title}
              />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
