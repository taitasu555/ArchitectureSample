import express, { Request, Response } from 'express';
import router from './infrastructure/router';
import bodyParser from 'body-parser';

const app = express();

// bodyがundefinedにならないように
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route設定
app.use('/api', router);
//404
router.use((req: Request, res: Response): void => {
  res.status(404).send('404 Not Found');
});

app.listen(3000, (): void => {
  console.log('listening on port 3000');
});

export default app;
