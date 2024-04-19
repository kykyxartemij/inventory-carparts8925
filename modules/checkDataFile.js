const checkDataFile = (req, res, next) => {
    if (!DATA_FILE) {
      res.status(500).json({ error: 'Data file not specified' });
    } else {
      next();
    }
  };
  
  module.exports = { checkDataFile };
  