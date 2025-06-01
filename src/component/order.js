import '../style.css';
function Order(props){
    return (
    <div className="order_box">
        <h1 className="order_name">{props.name}</h1>
    </div>
    )
}
export default Order;