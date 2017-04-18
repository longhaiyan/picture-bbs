var fs = require("fs");
var path = require("path");
var bodyParser = require('body-parser')
var Msg = require('./msg').msg;

const dataDirPath = path.resolve(__dirname, '../static/api/')
// console.log('dataDirPath:',dataDirPath)

module.exports = function(app){
	//test page
	app.use( bodyParser.json() );       // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
		extended: true
	}))

	app.all('/data',function(req,res){
		Msg( req.query, "request.query" );

		if(!req.query.name && !req.body.name){
			res.status(500).json({
				success:false,
				message:"错误！错误原因:未指定接口"
			});

		}else{
			var jsonName = req.query.name || req.body.name;

			Msg( jsonName, "json.name" )

			try	{
				var jsonStr = fs.readFileSync(path.resolve(dataDirPath, jsonName + '.json'), 'utf8')
				// Msg( jsonStr, "json.body" )
				var fileJSON = JSON.parse(jsonStr);
				var rsp = {};
				if( fileJSON.success == false ){
					rsp = fileJSON;
					if( rsp.message==undefined){
						rsp.message=""
					}
				}else{
					rsp = {
						success:true,
						vars : fileJSON,

					};

				}

				rsp._query = req.query
				// Msg( rsp, "json.rsp" )

				res.json(rsp);
			}
			catch(err){
				res.status(500).json({
					success:false,
					message:"错误！错误原因:" + err
				})
			}
		}
	});
}
