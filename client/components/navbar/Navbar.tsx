import { useRouter } from 'next/router'
import React from 'react'
import styles from './Navbar.module.scss'
import Link from 'next/link'
import {
    TbSmartHome,
    TbHeartHandshake,
    TbCreditCard,
    TbDeviceAnalytics,
    TbCurrencyRipple,
    TbGolf,
    TbUsers,
    TbLicense
} from 'react-icons/tb'

const Navbar: React.FC<any> = () => {
    const router = useRouter()

    const navigation = [
        {
            name: 'Дашборд',
            link: '/dashboard',
            icon: <TbSmartHome />
        },
        {
            name: 'Биржа активности',
            link: '/activitymarket',
            icon: <TbDeviceAnalytics />
        },
        {
            name: 'Биржа блогеров',
            link: '/bloggersmarket',
            icon: <TbUsers />
        },
        {
            name: 'Взаимопиар',
            link: '/mutualpiar',
            icon: <TbHeartHandshake />
        },
        {
            name: 'Моя структура',
            link: '/mystructure',
            icon: <TbCurrencyRipple />
        },
        {
            name: 'Магазин',
            link: '/shop',
            icon: <TbCreditCard />
        },
        {
            name: 'Марафон',
            link: '/marathon',
            icon: <TbGolf />
        },
        {
            name: 'Лендинги',
            link: '/lendings',
            icon: <TbLicense />
        }
    ]

    return (
        <>
            <ul className={styles.list}>
                {navigation.map((item, index) => {
                    return (
                        <Link key={index} href={item.link}>
                            <li
                                className={
                                    item.link === router.asPath ?
                                    `${styles.item} ${styles.item_active}` :
                                    styles.item
                                }
                            >
                                <div>
                                    <span>{item.icon}</span>
                                    <a>{item.name}</a>
                                </div>
                            </li>  
                        </Link>
                    )
                })}
            </ul>
        </>
    )

}

export default Navbar