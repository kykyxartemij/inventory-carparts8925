const express = require('express');
const csvReader = require('./modules/csvReader');
const filter = require('./modules/filter');
const pagination = require('./modules/pagination');
const { checkDataFile } = require('./modules/checkDataFile');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3300;
const DATA_FILE = process.env.DATA_FILE || null;

app.use(checkDataFile);

app.get('/spare-parts', async (req, res) => {
  try {
    const parts = await csvReader.readCSV(DATA_FILE);
    const filteredParts = filter.filterParts(parts, req.query);
    const paginatedParts = pagination.paginate(filteredParts, req.query);
    res.json(paginatedParts);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}/spare-parts`);
});
