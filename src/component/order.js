import '../style.css';
function Order(props){
    return (
    <div className="order_box">
        <p className="order_name txt">{props.name}</p>
        <p className='company_name txt'>{props.company}</p>
        <p className='email txt'>{props.email}</p>
    </div>
    );
}
export default Order;