
import Link from "next/link";
import Image from "next/image";
import ProductRate from "./ProductRate";
export default function ProductItem({ product}) {
  return (
    <div className="mb-5 block  reunded-lg border border-gray-200 shadow-md">
      <Link href={`/produc/${product.id}`}>
        <Image
        src={`${product.image}`}
        width={400}
        height={400}
        alt={product.name}
        className="rounded shadow object-cover h-96 w-full"
         />
     </Link>
     <div className="flex flex-col items-center justify-center p-5 mb-5  ">
        <Link href={`/produc/${product.id}}`}>
            <h2 className="text-lg">{product.name}</h2>
        </Link>
        <ProductRate rate={product.rating} count={product.numReviews}/>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button>Add to cart</button>
     </div>
    </div>
  )
}
