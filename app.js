const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello from AWS ECS CI/CD! this is updated'));

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
