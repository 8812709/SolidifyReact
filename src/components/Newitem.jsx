import { useState } from "react";

export default function Newitem() {
    function handlebuttonclick(event){
        event.preventDefault();
    }
    const[title,Settitle]=useState('');
    const[date,Setdate]=useState('');
    function changedatehandler(event){
        Settitle(event.target.value);
        console.log(title);

    }
    function changetexthandler(event){
        console.log(event.target.value);
        Setdate(event.target.value);
        console.log(date);
    }
    function formhandler(event){
        event.preventDefault();

    }

  return (
    <form onSubmit={formhandler}>
      <label htmlFor="texty" >Enter the new-item name</label>
      <input type="text" id='texty' onChange={changetexthandler}/>
      <label htmlFor="dated">Enter the date</label>
      <input type="date" id="dated" onChange={changedatehandler}/>
      <button type="submit">Add Product</button>
    </form>
  )
}
