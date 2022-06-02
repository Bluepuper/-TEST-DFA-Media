import React from 'react'
import styles from './ListOfCards.module.scss'
import mockData from './data'
import Card from './Card'

const ListOfCards: React.FC = () => {

    console.log(mockData)
    return (
        <>
            <ul className={styles.list}>
                {mockData.map( (item, index) => {
                    return (
                        <li key={index} className={styles.card}>
                            <Card
                                paymentLevel={item.paymentLevel}
                                activePartners={item.activePartners}
                                count={item.count}
                            />
                        </li>
                    )
                })} 
            </ul>
            
            
        </>
    )

}

export default ListOfCards