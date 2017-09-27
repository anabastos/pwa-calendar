import cron from 'node-cron';
import { push } from '../services/pushNotification';

export async function cronJob() {

  cron.schedule('*/1 * * * *', function () {
    console.log('running a task every one minutes');
    push();
  });

}
