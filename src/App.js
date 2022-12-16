import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    // { title: "Nutrition", amount: 560.56, date: new Date(16, 12, 22) },
    // { title: "Kira", amount: 560.56, date: new Date(16, 12, 22) },
    // { title: "Faturalar", amount: 560.56, date: new Date(16, 12, 22) },
    // { title: "Yatirim", amount: 560.56, date: new Date(16, 12, 22) },
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "Fistik Ezmesi", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Protein Tozu",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Cam agaci",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: `g1`,
      title: "Go Vamos",
      amount: `Breath, Giyin, Uc`,
      date: new Date(2022, 12, 16),
    },
  ];

  return (
    <div>
      <h2>Welcome each day as it is the last!</h2>
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      ></ExpenseItem>
      <h2>Self love is key against approval from outside</h2>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <h2>Streak!</h2>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      <p>We are finally ready to dive in React LFG</p>
      <button>Hey, I am button</button>
    </div>
  );
}

export default App;
