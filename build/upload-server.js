var multer  = require('multer')
module.exports = function(app){
	
	var storage = multer.diskStorage({
	 //设置上传后文件路径，uploads文件夹会自动创建。
		destination: function (req, file, cb) {
			cb(null, 'static/uploadfiles')
		}, 
		//给上传文件重命名，获取添加后缀名
		filename: function (req, file, cb) {
			var fileFormat = (file.originalname).split(".");
			cb(null, fileFormat[0] + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
		}
	});
	
	function GetRandomNum(Min,Max){   
		var Range = Max - Min;   
		var Rand = Math.random();   
		return(Min + Math.round(Rand * Range));   
	}
	
	var upload = multer({storage: storage});
	app.post('/file-upload', upload.single('file') || upload.single('filename'), function (req, res, next) {
		console.log("begin upload!");
		// console.log("req.file",req.file);
		// res.send('File uploaded');
		
		// 转为丁香园通用结构
		const {filename, path} = req.file;
		
		let rlt = Object.assign({},req.file,{
			'id':GetRandomNum(1,10),
			'name':filename,
			'payload':req.body,
			'thumbnailsUrl':path,
			'publicUrl':path
		});
		
		res.json({
			success:true,
			results:rlt
		})
		// console.log(rlt);
		// console.log(req.body);
	  // req.file is the `avatar` file
	  // req.body will hold the text fields, if there were any
	})
}