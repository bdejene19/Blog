import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import BasicInfoForm from './BasicInfoForm';
import UserPassForm from './UserPassForm';
import Home from '../../pages/Home';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Basic', 'Profile Info'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
              <BasicInfoForm/>
      )
    case 1:
      return (
        <UserPassForm></UserPassForm>
      )
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

export default function FormStepper() {
  const classes = useStyles();
  const [formOneInfo, setFormOneObj] = React.useState({})
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = (e) => {
    e.preventDefault();
    let totalInputs = document.querySelectorAll('input');
    let numUnhandledInputs = 0;
    
    for (var count = 0; count < totalInputs.length; count++) {
      if (totalInputs[count].value === "") {
        totalInputs[count].style.border = 'red solid 3px';
        numUnhandledInputs++;
        let textInput = totalInputs[count];
        setTimeout(() => {
          textInput.style.border = 'black solid 1px';
          textInput.style.borderRadius = '3px';
        }, 3000)
      } 
    }

    let formOneSubmission = {};

    if (numUnhandledInputs === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

      if (document.getElementById('form1') !== null) {
        formOneSubmission = { "firstName": totalInputs[0].defaultValue, "lastName": totalInputs[1].defaultValue}
        setFormOneObj(formOneSubmission);
      } else {
        let multiStepFormSubmit = {
          ...formOneInfo,
          username: totalInputs[0].value,
          password: totalInputs[1].value,
          confirmPassword: totalInputs[2].value
        }

        if (multiStepFormSubmit.password === multiStepFormSubmit.confirmPassword) {
          try {
             fetch('/createUser', {
              headers: {
                'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify(multiStepFormSubmit),
            }) 
            window.location.href = '/home'

          } catch(e) {
            console.log(e);
          }
        }
      }
    }

  
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  return (
    <div className={classes.root}>

      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel><div style={{fontSize: 20}}>{label}</div></StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
         null
        ) : (
          <div>
            <div>{getStepContent(activeStep)}</div>
            <div style={{textAlign: 'center'}}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              
              
              <Button variant="contained"  color="primary" type='submit' onClick={handleNext}>
                { activeStep !== steps.length - 1  ? 'Next' : 'Submit'}

              </Button> 
            </div>
          </div>)}
      </div>

    </div>
  );
}
