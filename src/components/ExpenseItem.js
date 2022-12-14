import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className = "expense-item">
      <div>14.12.22</div>
      <div className = "expense-item__description">
        <h2>Taso + shoe + gss</h2>
        <div className = "expense-item__price">140 + 250 + 700 </div>
      </div>
    </div>
  );
}
export default ExpenseItem;
