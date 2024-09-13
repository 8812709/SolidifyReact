import './Item.css';
import React,{useState} from 'react';
function Item(props){
    const [name,setName]=useState(props.name); // this is a use state in which i have initialized the value of the name as prop.name and to update the same value u can use the setName function which is also returned bu the usestate function which is  implemented on the props.name 

    //this function get invoked when the button of change name is clicked and on that it prints in console and change the value of the name to the updated value which is popcorn inside the setName
    function clickHandler(){
        console.log("The button has been clciked");
        setName("popcorn");
    }

    //JsXML code where name is a  variable mentioned above and that name is pointting towards the props attribute which is on the next page {props.name} the attribute is named as name in next child page the element is imported there
    return(
        <div className='item-container'>
            <p className="item-name">{name}</p>
            <p className='item-date'>{props.date},{props.month},{props.year}</p>
            <button className='button1' onClick={clickHandler}>change name</button>
            {/* on clicking this button it will inovke the function which will only change the name of property named as "name" for this jsx code and not some other property used in different page in that way it maintains the seperation of the components even if it is used multiple times in the parent page*/}
        </div>
        
    );
}

export default Item;