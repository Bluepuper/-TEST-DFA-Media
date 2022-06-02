import Image from 'next/image'
import React from 'react'
import styles from './ListOfCards.module.scss'

interface ComponentProps {
    paymentLevel: number,
    activePartners: number,
    count: number
}

const Card: React.FC<ComponentProps> = (props: ComponentProps) => {

    let people = []
    for (let i = 0; i < props.count; ++i) {
        people.push(
            <li key={i}>
                <div>
                    <img src="avatar.jpg" alt="" />
                </div>
                <span>kris_anfalova</span>
            </li>
        )
      }

    return (
        <>
            <div className={styles.info}>
                <span>{props.paymentLevel}</span>
                <span>{props.activePartners}</span>
                <div className={styles.devider}></div>
                <span className={styles.descr}>Уровень выплат</span>
                <span className={styles.descr}>Активных партнеров</span>
            </div>
            <ul className={styles.people}>
                {people}
            </ul>
        </>
    )
}

export default Card