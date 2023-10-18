
export default function Home() {

  let marketList = [
    {
      name: "abacaxi", 
      qnt: 2,
      unitPrice: 2.5
    },  
    {
      name: "laranja", 
      qnt: 3,
      unitPrice: 1
    },

  ]
  console.log(marketList)
  return (
    <>
      <header className="">
        <h1>Lista de compras</h1>
      </header>

      <div>
        <ul>
          {marketList.map( (product)=> (
            <li>
              <h1>título: {product.name}</h1>
              <p>quantidade: {product.qnt}</p>
              <p>preço: {product.unitPrice}</p>
            </li>
          ))}
        </ul>
      </div>

    </>
  )
}
