import { useId } from "react"


function Inputbox({
    label,
    amount,
    Mytype,
    currencyOptions = [],
    onAmountChange,
    onCurrencyChange,
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}){
    const FormId = useId();
    return(
        
        <div className="bg-white flex p-3 rounded-xl">
            <div className="w-1/2 flex flex-col">
               <label htmlFor= {FormId} className="text-gray-500" >
                {label}
               </label>
               <input
                 id= {FormId}
                 type={Mytype}
                 value={amount}
                 onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                 disabled = {amountDisable}
                 className="p-2 outline-none w-32 text-gray-500"
               />
            </div>            
            
            <div className="w-1/2 flex flex-wrap justify-end text-right">
               <p className="text-gray-500" >Currency Type</p>
               <select
               className="text-gray-500"
               value={selectCurrency}
               onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
               disabled = {currencyDisable}
               >
                {currencyOptions.map((currency) =>
                <option key={currency} value={currency}>
                    {currency}
                </option> 
                )
                }
               </select>
            </div>
        </div>
    );
}
export default Inputbox