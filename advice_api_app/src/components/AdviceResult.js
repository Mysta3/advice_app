import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../index.css';

//Material UI styling components
const useStyles = makeStyles({
  card: {
    maxWidth: 275,
    margin: ' 5% auto',
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
  const adviceID = props.getAdvice.slip_id; //advice ID

  return (
    <Card className={classes.card}>
      <h2 className={classes.header}>Today's Advice</h2>
      <CardContent className={classes.cardContent}>
        {advice && <h3>Tip #{adviceID}</h3>}
        <p>{advice}</p>
      </CardContent>
    </Card>
  );
}

export default AdviceResult;
