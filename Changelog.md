### Intro

mình đang tạo 1 boilerplate từ 0 , b muốn bổ xung thì rẽ nhánh r pull request nhé

## TODO

- Màn hình logout

- Header, Footer

- Kết nối API

### Base

React không phải là một framework hoàn chình mà đơn thuần phục vụ cho tầngchỉ phục View (trong mô hình MVC).
Luồng dữ liệu trong React là luồng giữ liệu một chiều từ cha xuống con.

JSX : JSX is an extension to javascript. Though it is not mandatory to use JSX in react, it is one of the good features and easy to use.

### Add

- Màn hình login
https://github.com/mui/material-ui/tree/v5.11.10/docs/data/material/getting-started/templates/sign-in


---
Add lib UI:
https://mui.com/material-ui/
Core UI
React Router: npm install react-router-dom
npm install react-bootstrap bootstrap

Elemental UI : npm install elemental --save 



---

- Route
  In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

```js
<Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">List Expenses</Link>
        </li>
        <li>
          <Link to="/test">Add Expense</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route exact path="/" element={<ExpenseEntryItem />}></Route>
      <Route exact path="/register" element={<Welcome />} />
      <Route exact path="/test" element={<Hello />} />
    </Routes>
  </div>
</Router>
```

---

https://beta.reactjs.org/learn/importing-and-exporting-components

You may encounter files that leave off the .js file extension like so:

```js
import Gallery from "./Gallery";
```

https://transform.tools/html-to-jsx
