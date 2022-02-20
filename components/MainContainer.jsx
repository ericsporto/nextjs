import Navbar from "./Navbar";
import Footer from "./Footer";
import style from '../styles/MainContainer.module.css'

export default function MainContainer ({children}) {
    return (
        <>
            <Navbar/>
            <div className={style.main}>
                {children}
            </div>
            <Footer />
        
        </>
    )
}