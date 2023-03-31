import { Footer } from "../footer/footerComponent"
import { Header } from "../header/headerComponent"

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout
