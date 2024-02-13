"use client";
import {useState} from "react"



export default function Counter() {
const [count,setCount] = useState<number>(0)

    const handleIncrement = () : void => {
        setCount(count + 1 )
    }
    const handleDecrement = () : void => {
        if(count === 0) {
            setCount(0);
        }else {
            setCount(count - 1)
        }
  
    }

    return (<div className="border border-solid  border-slate-500 rounded-sm p-2 h-56 w-56 flex flex-col  gap-4 place-content-center">
            <div className="counter-view py-2">
                <h1 className="text-center">Current Count:  {count}</h1>
            </div>
            <div className="btns-container flex  gap-4 place-content-center">

                <button className="btns-container__btn border border-solid  border-slate-500 rounded-sm bg-blue-700 px-5" type="button" onClick={handleIncrement} title="Increment the counter" > + </button>
                <button className={`btns-container__btn border border-solid  border-slate-500 rounded-sm bg-red-700 px-5 ${count === 0 ?  'cursor-not-allowed' : ''}`} type="button" onClick={handleDecrement} title="Decrement the counter" disabled={count === 0}> - </button>
            </div>

        </div>
    )


}
