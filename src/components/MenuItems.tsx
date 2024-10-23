import type { MenuItems } from "../types"
import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-resucer"

type MenuItemProps = {
    item:MenuItems,
    dispatch: Dispatch<OrderActions>
}

function MenuItems({item, dispatch} :MenuItemProps) {
  return (
    <button
    className="border-2 border-sky-600 hover:bg-sky-200 w-full p-3 flex justify-between rounded-md"
    onClick={() => dispatch({type: "add-item", payload : {item} })}
    >
         <p>{item.name}</p>
         <p className="font-black">${item.price}</p>

    </button>
   
  )
}

export default MenuItems