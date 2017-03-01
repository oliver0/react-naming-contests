import express from 'express';
import data from '../src/testData';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

router.get('/contests/', (req, res) =>{
  res.send({
    contests: contests
  });
});


router.get('/contests/:contestId', (req, res) =>{
  let contest = contests[req.params.contestId];
  contest.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate dapibus est sed cursus. Pellentesque lectus lacus, commodo id cursus tincidunt, accumsan sed risus. Curabitur a enim maximus, malesuada nibh eu, porttitor quam. Nam neque nulla, gravida eget justo sit amet, ullamcorper ultricies quam.";
  res.send(contest);
});

export default router;
