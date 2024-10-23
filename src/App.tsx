import { useReducer } from "react"
import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import { initialState, orderReducer } from "./reducers/order-resucer"

function App() {
  


  const [state, dispatch] = useReducer(orderReducer, initialState)
  
  
  return (
    <>
      <header className="bg-sky-600 py-5">
        <h1 className="text-center text-lg text-white">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="max-w-7xl mx-auto py-10 grid md:grid-cols-2">

        <section className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          <section className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item = {item}
                dispatch ={dispatch}
              />
            ))}
          </section>
          

        </section>

        <section className="border border-dashed border-blue-400 p-5 rounded-lg space-y-10">
            {state.order.length > 0 ? (
              <>
              <OrderContents
              order={state.order}
              dispatch = {dispatch}
            />
            <TipPercentageForm
              dispatch ={dispatch}
              tip = {state.tip}
             
            />
            <OrderTotals
              order ={state.order}
              tip = {state.tip}
              dispatch = {dispatch}
            />
              </>
            ) : <p className="text-center">No hay ninguna orden</p> }
            
        </section>
        
      </main>
    </>
  )
}

export default App
