const Item = ({ item, onSelectItem, isSelected }) => {
  const { name, quantity, category } = item;

  const handleClick = () => {
    onSelectItem(item);
  }

  return (
    <div class={`${isSelected ? 'bg-green-400' : 'bg-pink-400'} bg-cover max-w-sm p-2 m-4 hover:bg-pink-600`} onClick={handleClick} >
      <div class="text-white font-bold text-xl" >{name}</div>
      <div class="text-white text-l">
        buy {quantity} in {category}
      </div>
    </div >
  );
};
export default Item;