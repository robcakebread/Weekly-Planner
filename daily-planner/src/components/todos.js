import React, { useState } from 'react';
import {
	makeStyles,
  	TextField,
  	Select,
  	MenuItem,
  	FormControl,
  	InputLabel,
  	Button,
  	Typography,
  	Grid,
  	Paper
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    background: '#fff',
    border: 0,
    borderRadius: 3,
    width: '220px',
    'font-family': 'Raleway',
  },
  taskName: {
    background: '#fff',
    border: 0,
    borderRadius: 3,
    'font-family': 'Raleway',
    'margin-top': '10px',
  },
  button: {
  	background: 0,
    border: '2px solid #f15025',
    color: '#f15025',
    margin: '20px 0 auto',
    'font-family': 'Raleway',
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    maxWidth: 400,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    'font-family': 'Raleway',
  },
  day: {
    'text-decoration': 'underline',
    'font-family': 'Raleway',
  },
  timeStart: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
	background: '#fff',
    padding: '5px',
    'margin-top': '10px',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    borderRadius: 3,
    'font-family': 'Raleway',
    width: '90px',
  },
}));

const TodoForm = ({ saveTodo }) => {
   	const classes = useStyles();

	const [value, setValue] = useState({
		task: '',
		day: 'Monday',
		timeStart: '00:00',
		timeEnd: '01:00',
	});

	return (
		<Paper className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={12} alignItems="center" justify="center">
                  	<Typography className={classes.root} noWrap>
						<form style={{ background: '#fff', padding: '10px' }}>
				 			<FormControl variant="outlined" className={classes.formControl}>
						        <InputLabel id="demo-simple-select-outlined-label">Day</InputLabel>
						        <Select
						          	labelId="demo-simple-select-outlined-label"
						          	id="demo-simple-select-outlined"
						          	label="Day"
						          	name="day"
			                    	value={value.day}
							       	onChange={e => setValue({...value, day: e.target.value})} 
						        >
						          <MenuItem value={'Monday'}>Monday</MenuItem>
						          <MenuItem value={'Tuesday'}>Tuesday</MenuItem>
						          <MenuItem value={'Wednesday'}>Wednesday</MenuItem>
						          <MenuItem value={'Thursday'}>Thursday</MenuItem>
						          <MenuItem value={'Friday'}>Friday</MenuItem>
						          <MenuItem value={'Saturday'}>Saturday</MenuItem>
					          	  <MenuItem value={'Sunday'}>Sunday</MenuItem>
						        </Select>
						    </FormControl>
						    <br />
					        <TextField
					      		className={classes.timeStart}
							    id="timeStart"
							    label="Start"
							    type="time"
					          	value={value.timeStart}
							  	onChange={e => setValue({...value, timeStart: e.target.value})} 
							    InputLabelProps={{
							      shrink: true,
							    }}
							    inputProps={{
							      step: 300,
							    }}
							  />
  					        <TextField
					      		className={classes.timeStart}
							    id="timeEnd"
							    label="End"
							    type="time"
					          	value={value.timeEnd}
							  	onChange={e => setValue({...value, timeEnd: e.target.value})} 
							    InputLabelProps={{
							      shrink: true,
							    }}
							    inputProps={{
							      step: 300, // 5 min
							    }}
							  />
					        <br />
					      	<TextField 	
					      		className={classes.taskName}
						        variant="outlined"
						        placeholder="Add event"
						        margin="normal"
						        name="task"
			                	value={value.task}
						       	onChange={e => setValue({...value, task: e.target.value})} 
							/>
							<br />
			 				<Button 
				 				className={classes.button}
				 				variant="outlined" 
				 				onClick =  {(event) => {
									event.preventDefault();
									saveTodo(value);
									setValue({...value, task: ''});
								}}
				 				>Submit
			 				</Button>
						</form>
                  	</Typography>
                </Grid>
            </Grid>
        </Paper>
	)
}

 export default TodoForm