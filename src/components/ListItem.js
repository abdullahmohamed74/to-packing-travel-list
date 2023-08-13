function ListItem({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onDoneItems,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => onDoneItems(id)}
      />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
export default ListItem;
