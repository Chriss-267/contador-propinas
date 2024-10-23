import { formatCurrency } from "../helpers"
import type { OrderItem } from "../types"
import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-resucer"

type OrderContentsProps = {
    order:OrderItem[]
    dispatch : Dispatch<OrderActions>
}

function OrderContents({order, dispatch}:OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>
        <section className="space-y-3 mt-5">
            {
                order.map(item => (
                    <section key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                        <section>
                            <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                            <p className="font-black">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                        </section>
                       
                        <button className="bg-red-600 h-8 w-8 rounded-full text-white hover:bg-red-500 font-black"
                            onClick={() => dispatch({ type : "remove-item", payload : {id: item.id}})}
                        >
                            X
                        </button>
                    </section>
                ))
             }
        </section>

    </div>
  )
}

export default OrderContents