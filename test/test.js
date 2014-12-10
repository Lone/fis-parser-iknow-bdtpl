var fs = require('fs');
fs.readFile('./test.bdtpl', 'utf8', function(err, data){
	if (err){
		throw err;
	}
	var bdtpl = require('../index.js');
	//未配置监控条件
	var c = bdtpl(data, {id: './test.bdtpl', rExt: '.bdtpl'}, {});
	fs.writeFile('./result.js', c);
});