/* eslint-disable eqeqeq */
import { useSelector } from "react-redux";
import AddInput from "./addInput";
import AddForm from "./addForm";
import Searchside from "./search";
import { useState } from "react";

const Todo = () => {
    const res = useSelector((state) => state.todos.todos);
    const search = useSelector((state) => state.todos.finder);
    const [searchBool, setSearchBool] = useState(false);
    //to show finder or todo state
    
  return (
    <>
      <Searchside todos={res} setSearchBool={setSearchBool} />
      <AddInput />
      <AddForm todos={res} search={search} searchBool={searchBool} />
    </>
  );
};

export default Todo;
