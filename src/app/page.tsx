"use client"

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

  return (
    <>
      <header className="flex justify-center w-screen bg-gradient-to-t to-green-300 from-green-400 h-24 text-2xl font-bold items-center">
        <h1>Lista de compras</h1>
      </header>

      <div>
        <ul>
          {marketList.map((product) => (
            <li>
              <h1>título: {product.name}</h1>
              <p>quantidade: {product.qnt}</p>
              <p>preço: {product.unitPrice}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col w-[50%]">
        <input placeholder="item" className=" border border-black" type="text" />
        <input placeholder="quantidade" className=" border border-black" type="text" />
        <input placeholder="preço" className=" border border-black" type="text" />
        <button onClick={() => {marketList = [...marketList, {name:"xibaca", qnt:1, unitPrice:9999.99}]; console.log(marketList);
        }}>Adicionar</button>
      </div>
      
        

    </>
  )
}
