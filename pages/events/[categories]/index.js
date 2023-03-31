import Image from "next/image"
import Link from "next/link"

const EventsPerCity = ({ data, pageName }) => {
  return (
    <div>
      <div>
        <h1>Event in {pageName}</h1>
      </div>
      {data.map((event) => (
        <Link href={`/events/${event.city}/${event.id}`} key={event.id}>
          <Image src={event.image} width={300} height={300} alt={event.title} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </div>
  )
}

export default EventsPerCity

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json")
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        categories: event.id.toString(),
      },
    }
  })
  return {
    paths: allPaths,
    fallback: false,
  }
}
export async function getStaticProps(context) {
  const id = context?.params.categories
  const { allEvents } = await import("/data/data.json")

  const data = allEvents.filter((event) => event.city === id)

  return { props: { data, pageName: id } }
}
