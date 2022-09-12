import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
 
     
    },
    backButton: {
      marginRight: theme.spacing(4),
      marginLeft:"1em",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      color:"black",
    },
  }),
);

function getSteps() {
  return ['お問い合わせ', 'オンライン面談','留学時期、期間、留学先の決定', '留学事務手続きの開始','渡航準備、オンラインオリエンテーション'];
}

function getStepContent(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return '留学までのステップ１　留学内容、費用などの具体的な留学相談';
    case 1:
      return '留学までのステップ２　LINE, FBメッセンジャー、スカイプ等で留学の適性判断';
    case 2:
      return '留学までのステップ３　留学先の学校、期間、時期、費用等を決定';
      case 3:
      return '留学までのステップ４　学校入学、ホームステイ手続きから海外送金のご案内';
      case 4:
        return '留学までのステップ５　渡航手続き航空券の購入、渡航準備（健康診断、ビザ申請）からオンラインによる渡航前オリエンテーション';
    default:
      return 'Unknown stepIndex';
  }
}

export default function StepperFnc() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>留学の始まりです<img 
            style={{marginTop:"10px",width:"28px",height:"28px"}}src={'/assets/party.svg'}></img></Typography>
            <Button onClick={handleReset}>リセット</Button>
          </div>
        ) : (
          <div style={{marginLeft:"3em",marginTop:"1em"}}>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                戻る
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? '終わり' : '次へ'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}