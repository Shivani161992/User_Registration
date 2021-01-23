const path = require('path');

exports.getSummary= (req, res, next)=>{
    res.sendFile(path.join(__dirname, '../', 'views', 'summary.html'));

}