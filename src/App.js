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
      date: new Date(2020, 12, 27),
    },
    {
      id: "e2",
      title: "Ecstatic Dance",
      amount: 360,
      date: new Date(2020, 12, 27),
    },
    {
      id: "e3",
      title: "Halisaha",
      amount: 35,
      date: new Date(2020, 12, 27),
    },
    {
      id: "e4",
      title: "Sigara",
      amount: 550,
      date: new Date(2020, 12, 27),
    },
    {
      id: `g1`,
      title: "Nefes-Duş",
      amount: `Breath, Giyin, Uc`,
      date: new Date(2020, 12, 27),
    },
  ];

  return (
    <div>
      <h2>Welcome each day as it is the last!</h2>
      <h2>Self love is key against approval from outside</h2>
      <p>We are finally ready to dive in React LFG</p>
      <button>Hey, I am button</button>

      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
