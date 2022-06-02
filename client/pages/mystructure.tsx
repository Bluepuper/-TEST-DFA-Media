import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ListOfCards from '../components/list_of_cards/List'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<>
			<h1>Моя структура</h1>
			<ListOfCards />
		</>
	)
}

export default Home