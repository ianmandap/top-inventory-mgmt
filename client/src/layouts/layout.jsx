import Footer from "./footer";
import Header from "./header";
import Sidebar from "./sidebar";
import "../styles/pixelweapons.css"
import "../styles/styles.css"

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <div id="main">
        <Sidebar/>
        <div id="content">
          {children}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Layout;