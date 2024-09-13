import Item from './Item';
import './Productbox.css';

function Productbox(){
    
    return(
        <div className='productbox'>
            This is the Item Listed here:
            <Item date="16" month="09" year="03" name="rakib"></Item>
            <Item date="1" month="09" year="03" name="yello"></Item>
            <Item date="16" month="09" year="3" name="zida"></Item>
        </div>
    );
}

export default Productbox;