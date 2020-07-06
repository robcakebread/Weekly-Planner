import React from 'react';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  IconButton
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
  
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
    maxWidth: 500,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    'font-family': 'Raleway',
  },
  day: {
    'text-decoration': 'underline',
    'font-family': 'Raleway',
  },
  timetext: {
    color: '#f15025',
  }
}));

function TaskList ({ weekdays, todos, deleteTodo })  {
  const classes = useStyles();
  const sortedTodos = todos.sort((a, b) => (a.timeStart > b.timeStart) ? 1 : -1)
  return(
    <List>
      {sortedTodos.map((todo, index) => {
        if(todo.day === weekdays)
          { 
          return (      
            <ListItem key={index.toString()} dense button>
              <ListItemText><b><span className={classes.timetext}>{todo.timeStart} - {todo.timeEnd}</span> {todo.task}</b></ListItemText>
                <IconButton
                  aria-label="Delete"
                  onClick={() => {
                    deleteTodo(index);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
            </ListItem>
            )
          } else { return null}
        })}
    </List>
  );
}

export default TaskList;