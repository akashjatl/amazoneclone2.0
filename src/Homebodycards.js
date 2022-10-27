import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Rating from '@mui/material/Rating';
import {useContext} from 'react'
import {UseContent} from './UseContent'
const Homebodycards = ({id,text,rating,img,price}) => {
  let {cartvalue,setval,setitems,cartitems,setprice,totalprice}=useContext(UseContent)
  const handleclick=async()=>{
   
    //   // setitems(prevState=>{
    //   //   let State=prevState;
    //   //   State.push()
    //   //   return  State
    //   // })
  

    let index =await  cartitems.findIndex((item)=> id===item.id);
    console.log(index)

    if (index===-1)
    {
      setval(cartvalue+1)
      setitems([...cartitems,{id,text,rating,img,price}])  
     setprice(totalprice+price)
   
    }
  }
  return (  
    
    <div>
      <Card  className=' border-solid border-2 border-white bg-white text-justify justify-center pl-12'>
      <Card.Body>
        <Card.Text>
         {text}
        </Card.Text>
    <Rating name="read-only" value={rating} readOnly />
        <Card.Img variant="top" src={img} /><br></br>
        <Card.Text>{price}</Card.Text>
        <Button variant="warning" style={{background:"#fcb603",width:"68%"}} onClick={handleclick} >Add to cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Homebodycards