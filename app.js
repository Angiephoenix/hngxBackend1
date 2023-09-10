const express = require('express');
const moment = require('moment');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
  // Get query parameters
  const slackName = req.query.slack_name || '';
  const track = req.query.track || 'unknown';

  // Get current day and time in UTC
  const currentDay = moment().utc().format('dddd');
  const currentUTC = moment().utc().format();

  // GitHub URLs
  const githubFileURL = 'https://github.com/Angiephoenix/hngxBackend1/blob/master/app.js';
  const githubRepoURL = 'https://github.com/Angiephoenix/hngxBackend1.git';

  // Response JSON
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentUTC,
    track: track,
    github_file_url: githubFileURL,
    github_repo_url: githubRepoURL,
    status_code: 200,
  };

  res.status(200).json(response);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
