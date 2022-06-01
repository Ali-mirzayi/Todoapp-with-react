/* eslint-disable eqeqeq */
import { useDispatch } from "react-redux";
import { deleteTodo } from '../statemanagement/todoSlice';
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Typography, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import AddInput from "./addInput";

const useStyles = makeStyles({
  root: { margin: "15px 60px", padding: "20px" ,
  display:'flex',
  justifyContent: 'space-between'
},
  text: {
    fontSize: "1rem",
  }
});

const AddForm = ({ todos, search, searchBool }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [edit, editTodo] = useState({
    id: null,
    value: ''
  });

  function submitUpdate () {
    editTodo({
      id: null,
      value: ''
  })
  }

  if (edit.id) {
    return <AddInput edit={edit} onSubmit={submitUpdate} />
    //this tell todo now you can have input to update.
    }

  let res=null;
  if(searchBool==true){res=search}else{res=todos}

  return (
    <>
      {res.map((todo) => {
        const { text, id } = todo;
        return (
          <Paper className={classes.root} elevation={2} key={id}>
            <Typography
              variant="subtitle2"
              component={"span"}
              className={classes.text}
            >
              {text}
            </Typography>
            <span>
            <IconButton
              color="primary"
              aria-label="Edit"
              onClick={() =>{editTodo({ id, text});}}
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              color="error"
              aria-label="Delete"
              onClick={()=>{dispatch(deleteTodo(id));}}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
            </span>
          </Paper>
        );
      })}
    </>
  );
};

export default AddForm;
