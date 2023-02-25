import "./App.css";
import Welcome from "./components/sample.js";
import h1tag from "./components/test";
import ExpenseEntryItem from "./components/ExpenseEntryItem.js";
import SignIn from "./Layout/SignIn.js";
// Bootstrap for react
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Hello from "./components/test2.jsx";

function App() {
  return (
    <div className="App">
      {/* <Welcome />
      <ExpenseEntryItem />

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "3rem",
          fontWeight: "bolder",
        }}
      >
        TODO LIST
      </Row> */}

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/catalog">Sản phẩm</Link>
              </li>
              <li>
                <Link to="/accessories">Phụ kiện</Link>
              </li>
              <li>
                <Link to="/contact">Liên hệ</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route exact path="/" element={<ExpenseEntryItem />}></Route>
            <Route exact path="/catalog" element={<Welcome />} />
            <Route exact path="/accessories" element={<Hello />} />
            <Route exact path="/contact" element={<SignIn />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
