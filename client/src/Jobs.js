import React from "react";

import Typography from "@material-ui/core/Typography";

import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import Job from "./Job";
import JobModal from "./JobModal"

function Jobs({ jobs }) {

  const ENTRIES_PER_PAGE = 50;
  const NUM_JOBS = jobs.length;
  const NUM_PAGES = Math.ceil(NUM_JOBS / ENTRIES_PER_PAGE);

//paginaiton
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  // modal
  const [open, setOpen] = React.useState(false);
  const [selectedJob, selectJob] = React.useState({})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // step=0 0-49
  // step=1 50-99

  const jobsOnPage = jobs.slice(
    ENTRIES_PER_PAGE * activeStep,
    ENTRIES_PER_PAGE * activeStep + ENTRIES_PER_PAGE
  );
//   console.log(jobsOnPage.length);

  return (
    <div className="Jobs">
        <JobModal open={open} job={selectedJob} handleClose={handleClose}/>
      <Typography variant="h4" component="h1">
        Entry level software jobs
      </Typography>
      <Typography variant="h6" component="h2">
        Number of jobs {NUM_JOBS}
      </Typography>
      {jobsOnPage.map((job,i) => (
        <Job key={i} job={job} onClick={() => {
            handleClickOpen()
            selectJob(job);

        }}/>
      ))}
      <div>
        Page {activeStep + 1} of {NUM_PAGES}
      </div>
      <MobileStepper
        variant="progress"
        steps={NUM_PAGES}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 4}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
}

export default Jobs;
