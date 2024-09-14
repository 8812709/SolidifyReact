import { useState } from "react";

export default function Newitem() {
    const[newtitle,Settitle]=useState('');
    const[newdate,Setdate]=useState('');
    function changedatehandler(event){
        Settitle(event.target.value);
        console.log(newtitle);

    }
    function changetexthandler(event){
        console.log(event.target.value);
        Setdate(event.target.value);
        console.log(newdate);
    }
    function formsubmithandler(event){
        event.preventDefault();
        let productitems={
            title:newtitle,
            date:newdate
        };
        console.log(productitems);

    }

  return (
    <form onSubmit={formsubmithandler}>
      <label htmlFor="texty" >Enter the new-item name</label>
      <input type="text" id='texty' onChange={changetexthandler}/>
      <label htmlFor="dated">Enter the date</label>
      <input type="date" id="dated" onChange={changedatehandler}/>
      <button type="submit">Add Product</button>
    </form>
  )
}
