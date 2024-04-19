const fs = require('fs');
const csv = require('csv-parser');

module.exports = {
    readCSV: function (filename) {
        return new Promise((resolve, reject) => {
            const results = [];
            const stream = fs.createReadStream(filename, { encoding: 'utf-8' });

            stream.pipe(csv({
                headers: ['id', 'name', 'warehouse1', 'warehouse2', 'warehouse3', 'warehouse4', 'warehouse5', 'price', 'class', 'brand', 'oilneededpermile'],
                separator: '\t'
            }))
            .on('data', (data) => results.push(data))
            .on('end', () => {
                stream.close(); // Clean up the stream
                resolve(results);
            })
            .on('error', (error) => {
                stream.close(); // Clean up the stream
                reject(error);
            });
        });
    }
};
