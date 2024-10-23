import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-resucer"

type OrderTotalsProps = {
    order: OrderItem[],
    tip:number,
    dispatch: Dispatch<OrderActions>
}

function OrderTotals({order, tip, dispatch}: OrderTotalsProps) {

    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), 
    [order])

    const tipAmount = useMemo(() => subTotalAmount*tip, [tip, order])
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order])


  return (
    <>
        <section className="space-y-3">
            <h2 className="font-black text-2xl">Totales y propinas</h2>
            <p>Subtotal a pagar: {" "}
                <span className="font-bold">
                    {formatCurrency(subTotalAmount)}
                </span>
            </p>
            <p>Propina: {" "}
                <span className="font-bold">
                   {formatCurrency(tipAmount)}
                </span>
            </p>
            <p>Total a pagar: {" "}
                <span className="font-bold">
                    {formatCurrency(totalAmount)}
                </span>
            </p>
        </section>

        <button
        className="w-full bg-black p-3 text-white font-bold mt-3
        disabled:opacity-30"
        disabled = {totalAmount === 0}
        onClick={() => dispatch({type : "place-order"})}

        >
            Guardar Orden
        </button>
    </>
  )
}

export default OrderTotals