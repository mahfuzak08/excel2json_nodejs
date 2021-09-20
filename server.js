const http = require('http');
var XLSX = require('xlsx');

const requestListener = function (req, res) {
	var workbook = XLSX.readFile('Book1.xlsx');
	var sheet_name_list = workbook.SheetNames;
	var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
	console.log(xlData.length);
	res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(xlData, null, 3));
}

const server = http.createServer(requestListener);
server.listen(3000);