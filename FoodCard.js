function FoodCard(props){
    function checkOrder(){
       if(Number(props.price) > 150){
        console.log("Eligible for free delivery");
        console.log("Your Order: " + props.name )
       }
       else{
        console.log("No free delivery! Total: " + (Number(props.price) + 20));
       }
    }
    return(
        <div className="food-container">
            <div className="food-header">
                <img src={props.img} className="food-img"></img>
            </div>
            <p>{props.name}</p>
            <p>{props.des}</p>
            <p>Rs. {props.price}</p>
            <button className="btn" onClick={checkOrder}>Order Now</button>
        </div>
    );
}

export default FoodCard;