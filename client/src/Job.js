import React from "react";
// import './App.css';
import Paper from '@material-ui/core/Paper'

import Typography from "@material-ui/core/Typography";
function Job({ job, onClick }) {
  return (
    <Paper onClick={onClick} className="Job">
      <div>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant='h6'>{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div>
          <Typography>{job.created_at.split(' ').slice(0,3).join(' ')}</Typography>
      </div>
    </Paper>
  );
}

export default Job;
