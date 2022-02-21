import React, { useState } from "react";
import List from "./list";
import "./style.css";
import data from "./data";
const BirthdayReminder = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3> {people.length} birthdays Today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
};

export default BirthdayReminder;
