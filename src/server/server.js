import express from 'express';
import path from 'path';

const app = express(),
            DIST_DIR = 'dist',
            HTML_FILE = path.join(DIST_DIR, 'index.html')
            
app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
  res.send(HTML_FILE);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});