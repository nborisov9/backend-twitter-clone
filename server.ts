import express from 'express';

import { registerValidations } from './validations/register';
import { UserCtrl } from './controllers/UserContoller';

const app = express();

app.use(express.json());

app.get('/users', UserCtrl.index);
app.post('/users', registerValidations, UserCtrl.create);
// app.patch('/users', UserCtrl.update);
// app.delete('/users', UserCtrl.delete);

app.listen(8888, (): void => {
  console.log('SERVER RUNNING!');
});
