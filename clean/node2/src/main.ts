import express from 'express';
import router from './infrastructure/router';
import bodyParser from 'body-parser';

const app = express();

// bodyがundefinedにならないように
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route設定
app.use('/api', router);

app.listen(
  3000,
  (): void => {
    console.log('listening on port 3000');
  },
);

export default app;
