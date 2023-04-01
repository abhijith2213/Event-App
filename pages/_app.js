import MainLayout from "@/src/components/layout/mainLayout"
import "../styles/global.css"
import "../styles/general.sass"

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
