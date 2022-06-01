import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { addTodo,updateTodo } from '../statemanagement/todoSlice';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    "&.Mui-focused": {
      border: "2px solid blue",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
    },
  },
});

function AddInput(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [input, setInput] = useState(props.edit ? props.edit.text : "");
  const [editor, setEditor] = useState(input);
  
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const hndlChange = (e) => {
    setEditor(e.target.value);
  };

  const handleClick = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: input,
    };
    dispatch(addTodo(newTodo));
    setInput("");
  };
  const hndlClick = () => {
    const updated = {
      id: props.edit.id,
      text: editor
    }
    dispatch(updateTodo(updated));
    setEditor("");
    props.onSubmit();
  };
  return (
    <>
      {!props.edit ? (
        <Box sx={{ flexGrow: 1 }}>
          <Paper
            component="form"
            elevation={3}
            sx={{
              m: "1rem 12vmin",
              p: "20px 0",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <InputBase
              className={classes.root}
              autoFocus
              inputProps={{ spellCheck: false }}
              type="text"
              multiline={true}
              value={input}
              onChange={handleChange}
              sx={{
                ml: 1,
                background: "#F5F5F5",
                width: "50%",
                fontSize: "1.2rem",
              }}
              placeholder="Add item"
            />
            <Button
              onClick={handleClick}
              variant="contained"
              endIcon={<AddIcon />}
            >
              Add
            </Button>
          </Paper>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <Paper
            component="form"
            elevation={3}
            sx={{
              m: "1rem 12vmin",
              p: "20px 0",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <InputBase
              className={classes.root}
              autoFocus
              inputProps={{ spellCheck: false }}
              type="text"
              multiline={true}
              value={editor}
              onChange={hndlChange}
              sx={{
                ml: 1,
                background: "#F5F5F5",
                width: "50%",
                fontSize: "1.2rem",
              }}
              placeholder="Edit item"
            />
            <Button
              onClick={hndlClick}
              variant="contained"
              endIcon={<AddIcon />}
            >
              Edit
            </Button>
          </Paper>
        </Box>
      )}
    </>
  );
}

export default AddInput;
