interface IUsers {
  name: string,
  age: number,
  email: string
}


export default function Home() {

  const users:IUsers[] = [
    { name: "bernardo", age: 354, email: "fdoase" },
    { name: "354", age: 34, email: "sdfgdfg" },
    {name: "blabalbal", age: 454, email: "fgfhgth"},
    {name: "dfgfg", age: 454, email: "gfhfgh"}
  ]

  const newUSer = {
    name: "lucas",
    age: 807,
    email: "SDFDFGFHF"
  }

  

  return (
    <>
      <header className="font-mono flex justify-center text-4xl mt-4">TO DO LIST</header>
      <p>{users.map((user) => (
        <li key={user.email}>
          {user.name}, {user.email}
        </li>
      ))}</p>
    </>
  )
}
