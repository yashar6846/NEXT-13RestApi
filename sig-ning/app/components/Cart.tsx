interface proopsType{
 size: string,
}

export default function Cart({ size}) {
  return (
    <div className={`absolute bg-red-600 text-white text-[15px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>
        3
    </div>
  )
}
