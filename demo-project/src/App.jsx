import { useState } from 'react'
import './App.css'
import Company from './Company'
import Employee from './Employee'
import MyCar from './MyCar'
import ShoppingList from './ShoppingList'
import Counter from './Counter'





function App() {
  // js code 
  const [username , setUsername] = useState("demo")
  const empName = " Max Miller"
  const shopItems = ["books" ,  "groceries" ,"pen","stationery" , "lotion", "sunscream"]
  const showData = ()=>{
    alert ("alert !!!!")
  }
  const displayData = (data)=>{
    alert (`data from app component!!!! : ${data}`)
  }
  const getUserName = (tag)=>{
    console.log(typeof tag , tag.value);
    setUsername (tag.value)
    
  }

  return (
    <>
      <h1 style={{textAlign:'center', color:'red'}} >DEMO PROJECT</h1>
      <Counter/>
      <h2 style={{textAlign:'center', color:'blue' , marginTop:'10px'}}>{empName}</h2>
      <div className='text-center my-5'>
        <button onClick={showData} className='btn btn-primary'>show alert</button>
        <button  onClick={()=>displayData(empName)} className='btn btn-success ms-4'>show alert with data</button>
      </div>
      <div className='w-50 m-5'>
        <input onChange={(e)=>getUserName(e.target)} placeholder='input user name here' type="text" className='form-control' />
        <h3>username is : <span className='text-danger
        '>{username}</span></h3>
      </div>
      <Employee dataFromParent = {empName} empDesg="Developer" empStatus = "true" />
      <Company/>
      <ShoppingList shopItems= {shopItems}/>
      <MyCar/>
    
    </>
  )
}

export default App
