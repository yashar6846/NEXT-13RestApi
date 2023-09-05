import Image from 'next/image'
import Navbar from './components/Navbar'
import Section from './components/Section'
import Header from './components/gat'
import Filter from './components/Filter'

export default function Home() {
  return (
    <>
    <Navbar />
    <Section />
    <Header />
    <br/>
    <Filter />
    </>
  )
}
