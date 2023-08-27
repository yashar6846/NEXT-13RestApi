import Image from 'next/image'
import { data } from './utils/data'

export default function Home() {
  const {products} = data
  return (
    <>
    {
      products.map(product =>(
        <div key={product.id}>{product.name}</div>
      ))
    }
    </>
  )
}
