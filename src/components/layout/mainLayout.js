import { Footer } from "../footer/footerComponent"
import { Header } from "../header/headerComponent"

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main> {children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
