import Head from "next/head"
import styles from "../styles/Home.module.css"
import Header from "../components/Header"
import AddContact from "../components/AddContact"
import SendMessage from "../components/SendMessage"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Contract Lottery</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <AddContact />
            <SendMessage />
        </div>
    )
}