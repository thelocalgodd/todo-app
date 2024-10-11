import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import { addTodo, removeTodo } from "../slices/todosSlice";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

function TodosPage() {
  const [newTodo, setNewTodo] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        todos
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Add a New Todo"
          fullWidth
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          margin="dense"
        />
        <Button type="submit" variant="contained" sx={{ mt: 1 }}>
          Add Todo
        </Button>
      </form>
      <List sx={{ mt: 2 }}>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.text} />
            <IconButton
              edge="end"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              🗑️
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Container style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Log Out
        </Button>
      </Container>
    </Container>
  );
}

export default TodosPage;
