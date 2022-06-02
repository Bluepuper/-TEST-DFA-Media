import React, { useState } from 'react'
import styles from '/styles/NavigationLayout.module.scss'
import Navbar from '/components/navbar/Navbar'
import { IoMdMenu, IoMdCloseCircleOutline, IoMdLogIn } from 'react-icons/io'

const NavigationLayout: React.FC<any> = (props) => {
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
    const [isPopupOpened, setIsPopupOpened] = useState<boolean>(false)
    
    return (
        <> 
        <div className={styles.main_container}>
            <section
                className={
                    isPopupOpened ?
                    `${styles.popup_wrapper} ${styles.popup_opened}` :
                    styles.popup_wrapper
                }
            >
                <div className={styles.popup_container}>
                    <h2>LOG IN</h2>
                    <input type="text" />
                    <input type="text" />
                    <button>log in</button>
                    <div
                        className={styles.closePopup}
                        onClick={() => setIsPopupOpened(false)}
                    >
                        <IoMdCloseCircleOutline/>
                    </div>
                </div>
            </section>
            <section className={styles.nav_container} >
                <span className={styles.mobile_menu}>
                    <IoMdMenu
                        onClick={() => {
                            console.log(isMenuOpened)
                            setIsMenuOpened(true)
                        }
                    }/>
                </span>
                <nav className={isMenuOpened ? styles.opened : ''}>
                    <Navbar />
                    <IoMdCloseCircleOutline
                        className={styles.close}
                        onClick={() => setIsMenuOpened(false)}
                    />
                </nav>
                <div
                    className={styles.login_wrapper}
                    onClick={() => {setIsPopupOpened(true)}}
                >
                    <p>login</p>
                    <span> <IoMdLogIn /> </span>
                </div>
            </section>

            <section className={styles.content_container}>
                <main>
                    <div>{props.children}</div>
                </main>
            </section>

        </div>
            
            
            
        </>
    )

}

export default NavigationLayout