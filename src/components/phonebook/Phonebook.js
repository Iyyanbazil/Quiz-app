import React from 'react'
import "./phonebook.css"
import {useState,useEffect} from "react"
import {BsTrash} from "react-icons/bs"
import {FcBusinessContact} from "react-icons/fc"
const Phonebook = () => {

    // const [phonebook,setPhonebook]=useState([])
    const [storage,setStorage]=useState([])
    const [data,setData]=useState({
        name:"",
        number:""
    })
    const [changer,setChanger]=useState(false)
    const [shower,setShower]=useState(false)
    
useEffect(() => {
    const value=window.localStorage.getItem("List")
    if(value){
        
        const parseValue=JSON.parse(value)
        setStorage(parseValue)
    }
}, [])
useEffect(()=>{
    // if(changer===true){
        // window.localStorage.setItem("List",JSON.stringify(phonebook))
    // }
  setChanger(false)
},[,changer])
    const handleClick=()=>{
        if(data.name!=="" && data.number!==""){
        setStorage([...storage,data])
    }
    
    }

  useEffect(()=>{
    console.log("length from storage")
    console.log(storage.length)
       if(data.name!=="" && data.number!==""){
     
        if(storage.length > 0){
            window.localStorage.setItem("List",JSON.stringify(storage))
        }
  
     }
  },[,storage])

    const handleChange=(e)=>{
        const {name,value}=e.target
        setData({
            ...data,
            [name]:value
        })
    }
    const remove=(number)=>{
        console.log(number)
        const filter=storage.filter((elem,index)=>index !==number)
        console.log(filter)
        setStorage(filter)
        window.localStorage.setItem("List",JSON.stringify(filter))
     
    }
    const showBook=()=>{
        setShower(!shower)
    }
  return (
    <>
    <div className='main-div'>
        <p className="heading"> <FcBusinessContact/>PhoneBook</p>
        <div className='input-div'>
            <input type="text" name="name" vlaue={storage.name}  placeholder='Name' onChange={(e)=>{handleChange(e)}}  />
            <input type="number" name="number" value={storage.number} placeholder='Number' onChange={(e)=>{handleChange(e)}}  />
            <button onClick={handleClick}>Add to phonebook</button>
        </div>
      {storage.length === 0 ? (< p className="no-number">NO number yet!!!</p>):(<></>)}
        {storage.length > 0 && shower!==true ? (<>
            <div className='data-div'>
            <p className='recent'>Recently added</p>
{storage
.slice(-3)
.map((elem,index)=>{
    
    return(
        
        <>
         
        <div className='details-div'>
            <p className='index'>{index+1}</p>
        <p className='details-name'>{elem.name}:</p>
        <p className='details-number'>{elem.number}</p>
        <button className='remove-btn' onClick={()=>{remove(index)}}><BsTrash/></button>
        </div>
        </>
    )
})}
        </div>

        </>):(<></>)}
        
        <button onClick={()=>{showBook()}} className="open-close-list">{ shower ? (<>Close PhoneBook</>):(<> Show full PhoneBook</>)}</button>
        {storage.length > 0 && shower===true ? (<>
            <div className='data-div'>

{storage
// .slice(-1)
.map((elem,index)=>{
    return(
        <>
        <div className='details-div'>
            <p className='index'>{index+1}</p>
        <p className='details-name'>{elem.name}:</p>
        <p className='details-number'>{elem.number}</p>
        <button className='remove-btn' onClick={()=>{remove(index)}}><BsTrash/></button>
        </div>
        </>
    )
})}

        </div>

        </>):(<></>)}
        
    </div>
    </>
  )
}

export default Phonebook