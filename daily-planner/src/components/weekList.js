import React, { useState } from 'react';
import TaskList from './taskList';
import TodoForm from './todos';
import {
  makeStyles,
  Typography,
  Grid,
  Paper
} from "@material-ui/core";
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
    'font-family': 'Raleway',
    },
  paper: {
    padding: theme.spacing(2),
    margin: `${theme.spacing(1)}px auto`,
    maxWidth: 400,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    'font-family': 'Raleway',
  },
  day: {
    'text-decoration': 'underline',
    'font-family': 'Raleway',
  }
}));


function WeekList ()  {
  const classes = useStyles();
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const [todos, setTodos] = useState([]);
  return(
    <div>
      <TodoForm
        saveTodo={(todoText) => {
            setTodos([...todos, todoText]);
          }
        }
      />
      {week.map((weekdays, index) => (
        <Paper className={classes.paper}>
            <Grid container spacing={3}>
                  <Grid item xs={12} alignItems="center" justify="center">
                  <Typography className={classes.root} noWrap>
                    <span className={classes.day}><b>{weekdays}</b></span><br />
                    <TaskList 
                      todos={todos} 
                      weekdays={weekdays}
                      deleteTodo={(todoIndex) => {
                        const newTodos = todos.filter((_, index) => index !== todoIndex);
                        setTodos(newTodos);
                      }}  
                    />
                  </Typography>
                </Grid>
            </Grid>
        </Paper>

      ))}
    </div>
  );
}
export default WeekList;