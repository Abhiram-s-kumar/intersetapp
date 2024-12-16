import { TextField , Stack , Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [Interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear]=useState(0)


  const[invalidPrinciple,setInvalidPrinciple] = useState(false)
  const[invalidRate,setInvalidRate] = useState(false)
  const[invalidYear,setInvalidYear] = useState(false)
 

  const validateInputs = (inputTag)=>{
    console.log(typeof inputTag);
    const {name,value} = inputTag
    console.log(name, value);
    console.log(!!value.match(/^[0-9]*.?[0-9+$]/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if (name=="principle"){
      setPrinciple(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidPrinciple(false)

      }else{
       setInvalidPrinciple(true)

      }
    }


    if (name=="rate"){
      setRate(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidRate(false)

      }else{
       setInvalidRate(true)

      }
    }



    
    if (name=="year"){
      setYear(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidYear(false)

      }else{
       setInvalidYear(true)

      }
    }
    
    
    
    

  }

  return (
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
     <div style={{width:'600px'}} className='bg-light
       rounded p-5'>
      <h3>SIMPLE INTERST APP</h3>
      <p>Calculate Your Simple Interest Easily</p>
      <div className='bg-warning p-3 text-light text-center rounded'>
        <h1> ₹1500</h1>
        <p>Total Simple Interst</p>
      </div>
      <form className='mt-5'>
        <div className='mt-5'>
        <TextField name='principle' onChange={(e)=>validateInputs(e.target)} id="outlined-principle" label="Principle Amount  ₹" className='w-100' variant="outlined" />

        </div>
        {/* invalid principle */}
         {invalidPrinciple && <div className='mb-3 text-danger fw-bolder+'>invalid principle amount
          </div>}
           {/* rate */}
        <div className='mt-5'>
       
        <TextField name='rate' onChange={(e)=>validateInputs(e.target)} id="outlined-rate" label="Rate %" className='w-100' variant="outlined" />

        </div>
        {invalidRate && <div className='mb-3 text-danger fw-bolder+'>invalid rate
          </div>}

        {/* year */}
        <div className='mt-5'>
        <TextField name='year' onChange={(e)=>validateInputs(e.target)} id="outlined-year" label="Time Period (yr)" className='w-100' variant="outlined" />

        </div>
        {invalidYear && <div className='mb-3 text-danger fw-bolder+'>invalid year
          </div>}
        <Stack direction="row" spacing={2}>
        <Button disabled={invalidPrinciple || invalidRate || invalidYear} style={{width:'50%' , height:'70px'}} className='bg-dark mt-3 ' variant="contained">Calaculate</Button>
        <Button  style={{width:'50%' , height:'70px'}} className='bg-dark mt-3  text-light
        +9' variant="outlined">Reset</Button>
        </Stack>
      </form>
     </div>
    
    </div>
  )
}

export default App
