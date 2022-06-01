import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Todo from "./components/Todo";
import todoSlice from "./statemanagement/todoSlice";
import Avatar from "@mui/material/Avatar";
import { ButtonBase } from '@mui/material';

const store = configureStore({
  reducer: { todos: todoSlice },
});

export default function App() {
  return (
    <>
      <Provider store={store}>
        <main>
          <Todo />
        </main>
      </Provider>
      <ButtonBase href="https://github.com/Ali-mirzayi/Todoapp-with-react.git">
      <Avatar
        alt="GitHub"
        src="/images/get-it-on-github.png"
        sx={{
          position: "fixed",
          bottom: 10,
          left: "40%",       
          width: 186,
          height:72,
        }}
        variant="square"
        />
        </ButtonBase>
    </>
  );
}
