import { EventsComponent } from "@/src/components/events/eventsComponent"

const Events = ({ data }) => {
  return <EventsComponent data={data} />
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
