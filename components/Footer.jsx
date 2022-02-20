import styles from '../styles/Footer.module.css'

export default function Footer () {
    return (
        <>
        <div className={styles.footer}>
            <ul > 
               <li>Facebook</li>
               <li>Instagram</li>
               <li>Discord</li>
               
            </ul> 
            <p>Developed by Eric Carvalho</p>

        </div>
        
        </>
    )
}