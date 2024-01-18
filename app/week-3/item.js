const Item = ({name, quantity,category}) => {
    return(
        <div>
        <div>{name}</div>
        <div>buy {quantity} in {category}</div>
        </div>
    );
}
export default Item;
