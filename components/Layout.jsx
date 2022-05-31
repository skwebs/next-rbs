import Menu from './TopMenu'
import Footer from './Footer'
import OffCanvas from './OffCanvas'
import Sidebar from './Sidebar'


export default function Layout({children}){
  return <>
    <div className="app-body">
        <header>
          <Menu/>
          <OffCanvas/>
        </header>
        <main>
          {children}
        </main>
        <footer>
         <Footer/>
        </footer>
    </div>
  </>
}