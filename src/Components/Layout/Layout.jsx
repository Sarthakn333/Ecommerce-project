import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        {/* Main content will grow as needed */}
        <div className="flex-grow">{children}</div>
        {/* Footer will stick to the bottom */}
        <Footer />
      </div>
    </>
  )
}

export default Layout
