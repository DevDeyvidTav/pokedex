/*components */
import Header from "./components/Header"
import Cards from "./components/Cards"


export function App(){
  return (
    <div className="w-screen h-screen max-w-full">
      <Header/>
      <Cards/>
    </div>
  )
}