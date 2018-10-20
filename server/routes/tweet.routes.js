import express from 'express';
import tweetsCtrl from '../controllers/tweets.controller';
//import usersCtrl from '../users.controller';

const router = express.Router();

router.route('/api/tweets')
      .get(tweetsCtrl.list);

export default router;
