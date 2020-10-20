import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../index.css';
import ButtonFetch from './ButtonFetch';

//Material UI styling components
const useStyles = makeStyles({
  card: {
    maxWidth: 275,
    margin: ' 3% auto 0 auto',
    boxShadow: '0px 0px 5px grey;'
  },
  header: {
    background: '#F7F7F7',
    marginTop: '0',
    padding: '2% 3%'
  },
  cardContent: {
    padding: '5%'
  }
});
function AdviceResult(props) {
  const classes = useStyles(); //applies styles to variable
  const advice = props.getAdvice.advice; //advice content
  const adviceID = props.getAdvice.id; //advice ID
  return (
    <Card className={classes.card}>
      {advice && <h3 className={classes.header}>Today's Advice</h3>}
      <CardContent className={classes.cardContent}>
        {advice && <h3>Tip #{adviceID}</h3>}
        <p>{advice}</p>
      </CardContent>
      <ButtonFetch
        className={classes.button}
        generateAdvice={props.generateAdvice}
      />
    </Card>
  );
}

export default AdviceResult;
