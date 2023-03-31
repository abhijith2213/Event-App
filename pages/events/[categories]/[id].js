import Image from "next/image"

const SingleEvent = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  )
}

export default SingleEvent

export async function getStaticPaths() {
  const data = await import("/data/data.json")
  const { allEvents } = data

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        categories: path.city,
        id: path.id,
      },
    }
  })
  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const { allEvents } = await import("/data/data.json")

  const eventData = allEvents.find((event) => id === event.id)

  return {
    props: { data: eventData },
  }
}
