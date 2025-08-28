interface ProductProps {
  title: string
  price: number
  urlImg?: string
}

export default function Products(product: ProductProps) {
  console.log("product:", product)
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img className="w-80 mb-2" src={product.urlImg} alt={product.title} />
        <h2 className="font-bold mb-2">{product.title}</h2>
        <p className="mb-2">$ {product.price}</p>
        <button
          type="button"
          className="bg-pink-300 text-white rounded pt-2 pr-8 pb-2 pl-8 cursor-pointer hover:bg-pink-400">
          BUY NOW
        </button>
      </div>
    </>
  )
}
// interface ProductProps {
//   product: {
//     title: string
//     price: number
//   }
// }

// export default function Products({ product }: ProductProps) {
//   console.log("product:", product)
//   return (
//     <>
//       <div>
//         <h3>{product.title}</h3>
//         <p>{product.price}</p>
//         <button>BUY NOW</button>
//       </div>
//     </>
//   )
// }
