import express from 'express';
import path from 'path';
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';

const app = express(),
            DIST_DIR = 'dist',
            HTML_FILE = path.join(DIST_DIR, 'index.html')
            
app.use(express.static(DIST_DIR))

app.get('/', (req, res) => {
  res.send(HTML_FILE);
});

//const url = 'https://api.bls.gov/publicAPI/v2/timeseries/data/'
const url = 'https://download.bls.gov/pub/time.series/wm/wm.area'

const getData = async (url) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

app.get('/test', (options, res) => {
  let data = getData(url);
  let array = data.split('\n').map(function(ln){
    return ln.split('\t');
  });
  console.log(array);
})

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});