// export default function Home(){
//   return(
//     <div className="m-4">
//       <h1 className="text-5xl text-blue-600">Hammad Shah</h1>
//       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid, voluptatibus nesciunt cupiditate magni aliquam quos. Quisquam, est veritatis quas eos, aliquid quia veniam delectus laborum quidem voluptas omnis consequuntur.</p>
//       <button className="bg-red-600 rounded-full py-2 px-5 mt-3">Contact Us</button>
//     </div>
    
//   )
// }
import Image from "next/image"

export default function Person(){
  return(
    <div className="bg-gray-100 h-screen flex items-center ">
      <div className="text-3xl ml-14 -mt-8 ">
        <Image src={"/picture/facebook.svg"} width={300} height={100} alt="Facebook Logo"/>
        <p className="mx-7 -m-2">Facebook helps you connect and share with the people in your life</p>
      </div>
      <div className="bg-white flex flex-col p-4 rounded-xl w-1/3 mr-40  ">
        <input className="my-2 border border-1 border-gray-400 focus:outline-offset-1 outline-blue-500 w-80 p-3 rounded-md" type="text" placeholder="Email address or phone number"/>
        <input className="my-2 border border-1 border-gray-400 focus:outline-offset-1 outline-blue-500 w-80 p-3 rounded-md" type="password" placeholder="Password"/>
        <button className="bg-blue-600 hover:bg-blue-500 p-3 rounded-lg font-bold text-white w-80">Log in</button>
        <p className="text-blue-600 cursor-pointer hover:underline p-3 pl-20 text-sm">Forgotten password?</p>
        <span className="py-2 w-80"><hr/></span>
        <button className="bg-green-600 hover:bg-green-700 p-4  px-3 mt-4 rounded-lg font-bold text-white pt-2.5 w-48 ml-14">Create new account</button>
      </div>
    </div>
  )
}