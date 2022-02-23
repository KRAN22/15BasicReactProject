import BirthdayReminder from "./01-birthday-reminder/home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const Links = () => {
    return (
      <center>
        <div style={{ marginTop: "100px" }}>
          <ul>
            <li style={{ listStyle: "none" }}>
              <Link
                style={{ textDecoration: "none", fontSize: "25px" }}
                to={"/birthday"}
              >
                Birthday
              </Link>
            </li>
          </ul>
        </div>
      </center>
    );
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Links />} />
          <Route path="/birthday" element={<BirthdayReminder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
