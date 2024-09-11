// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cards from "./Cards";
// import Login from "./Login";
// import NavBar from "./NavBar";

import Button from "./components/Button";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./store/slices/counterSlice";

function App() {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <Button value="Increment" handleFunction={handleIncrement} />
      <Button value="Decrement" handleFunction={handleDecrement} />
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route index element={<Login />} />
    //     <Route path="/dashboard" element={<NavBar />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
