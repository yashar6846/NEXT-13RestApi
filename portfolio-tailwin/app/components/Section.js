import Image from "next/image"
import Link from "next/link"
import Author from "./-child/Author"

const Section = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto md:-px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Translete</h1>

        {Slide()}
      </div>
    </section>
  )
}
function Slide (){
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
              <Link href={'/'}><Image src={"/images/p.jpg"} width={500} height={500} /></Link>
            </div>
            <div className="info">
               <div className="cat">
                 <Link href={'/'} className="text-orange-600 hover:text-orange-800">Business Travel--</Link>
                 <Link href={'/'} className="text-orange-500 hover:text-orange-600"> september,2,2023</Link>
               </div>
               <div className="title">
                <Link href={'/'} className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</Link>
               </div>
               <p>
               repudiandae consequuntur voluptatum laborum
               numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium  optio,
               eaque rerum! Provident similique accusantium nemo autem
               </p>
               <Author />
            </div>
        </div>
    )
}
export default Section