import Image from "next/image"
import Link from "next/link"
const Events = ({ data }) => {
  return (
    <div>
      <h1>Events</h1>
      <div>
        {data.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={300}
            />
            <h2>{event.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Events

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json")
  return {
    props: {
      data: events_categories,
    },
  }
}
