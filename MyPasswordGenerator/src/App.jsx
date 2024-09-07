import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [length, setLength] = useState(8);
  const [NumberCheck, setNumberCheck] = useState(false);
  const [CharCheck, setCharCheck] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(
    () =>{

      let temp = "";
      let pass = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (NumberCheck) pass+="0123456789";
      if(CharCheck) pass+="!@#$^&*()_+:<>,.|\?/";
      for(let i =0; i < length; i++){
        let random = (Math.floor(Math.random() * pass.length + 1));
        temp += pass.charAt(random);
      }
      setPassword(temp);
    },[length,NumberCheck,CharCheck]
  );

  useEffect(
    () =>{
      passwordGenerator();
    },[length, NumberCheck, CharCheck]
  )

  const PasswordReff = useRef(null);

  const CopyToClickBoard = useCallback(
    ()=>{ 
      PasswordReff.current.select();
      window.navigator.clipboard.writeText(password);
    },[password]
  );
  return (
    <>
      <div className='bg-blue-900 border-4 border-white '>
      <div
        className='flex flex-wrap justify-center text-white p-10'
      >
        <h1 style={{fontSize:60}} class="relative" >Password Generator</h1>
      </div>
      <div
          className='flex flex-wrap justify-center pb-10  '
        >
          <input
            type='text'
            value={password}
            className='outline-none w-96 py-1 px-5'
            placeholder='password'
            ref={PasswordReff}
            readOnly
          >
          </input>
          <button
          className='outline-none rounded-none bg-blue-400 text-white'
          onClick={CopyToClickBoard}
          >
            Copy Me
          </button>
        </div>
        <div className='flex flex-wrap justify-center pb-8 space-x-4'>
        <div className='text-white'>
          <input
              type='range'
              min={1}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
          >
          </input>
          <label> Length:({length})</label>
        </div>
        <div className='text-white'>
          <input
              type='checkbox'
              checked = {NumberCheck}
              id="NumCheck"
              onChange ={() => 
                {
                  setNumberCheck(prev => !prev);
                }
              }
          >
          </input>
          <label htmlFor="NumCheck">Numbers</label>
        </div>
        <div className='text-white'>
          <input
              type='checkbox'
              checked = {CharCheck}
              id="CharCheck"
              onChange={() => {
                setCharCheck(prev => !prev)
              }
            }
          >
          </input>
          <label htmlFor="CharCheck">Charecters</label>
        </div>
        </div>
      </div>
      
      
    </>
  )
}

export default App
