import { Dispatch } from "react"
import { OrderActions } from "../reducers/order-resucer"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps = {
    dispatch : Dispatch<OrderActions>
    tip: number
} 

function TipPercentageForm({dispatch, tip}: TipPercentageFormProps) {
  return (
    <>
        <h3 className="font-black text-2xl">
            Propina:
        </h3>

        <form>
            {tipOptions.map(tipOption =>(
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input
                     type="radio"
                     id = {tipOption.id} 
                     name = "tip"
                     value={tipOption.value}
                     //signo mas para q lo convierta a number
                     onChange={e => dispatch({type: "add-tip", payload: {value: +e.target.value}})}
                     checked = {tipOption.value === tip}
                    />
                </div>
            ))}
            
        </form>
    </>
  )
}

export default TipPercentageForm