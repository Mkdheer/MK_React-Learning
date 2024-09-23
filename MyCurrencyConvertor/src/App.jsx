import { useEffect, useState } from 'react'
import './App.css'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState("usd");
  const [currencyTo, setCurrencyTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);


  const CurrencyList = useCurrencyInfo(currencyFrom);

  const currencyKeys = Object.keys(CurrencyList);

  const swap = () => {
    const newCurrencyFrom = currencyTo;
    const newCurrencyTo = currencyFrom;
    const newAmount = convertedAmount;
    setCurrencyFrom(newCurrencyFrom);
    setCurrencyTo(newCurrencyTo);
    setAmount(newAmount); 
  }
 useEffect(
  () => {
    if(currencyFrom && currencyTo && CurrencyList[currencyTo])
      setConvertedAmount(amount * CurrencyList[currencyTo]);
  },[currencyFrom, amount, CurrencyList[currencyTo]]
 );

  return (
    <>
      <div className='w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
       style={{backgroundImage: "URL('https://wallpapers.com/images/high/finance-gold-coins-and-graphs-7a9ktmlo09qgrhtc.webp')"
       }}
      >
       <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
           <form
             onSubmit={(e)=> e.preventDefault()} 
           >
            <div className="w-full mb-1">
              <InputBox
              label = "from"
              Mytype = "number"
              amount = {amount}
              currencyOptions = {currencyKeys}
              onCurrencyChange={(currency) => setCurrencyFrom(currency)}
              selectCurrency = {currencyFrom}
              onAmountChange = {(currency) => setAmount(currency)}
              />
            </div>
            <div className='flex justify-center -mt-4'>
              <button
              className='bg-blue-800 p-4 rounded-xl text-white hover:scale-95'
              onClick={swap}
              >Swap</button>
            </div>

            <div className="w-full mb-1 -mt-3">
              <InputBox
              label = "To"
              Mytype="text"
              amount = {convertedAmount}
              currencyOptions = {currencyKeys}
              onCurrencyChange={(currency) => setCurrencyTo(currency)}
              selectCurrency = {currencyTo}
              onAmountChange = {(currency) => setAmount(currency)}
              currencyDisable = {true}
              />
            </div>
            <div className='flex justify-center mt-3 bg-fuchsia-800 p-2 rounded-xl px-5 text-white font-bold'>
              
                {currencyFrom.toUpperCase()} to {currencyTo.toUpperCase()}
              
            </div>
           </form>
        </div>
       </div> 
      </div>
    </>
  )
}

export default App
