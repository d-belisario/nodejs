module.exports = function(app){

	app.get('/', function(req, res){

		var connection = app.config.dbConfig();
		var noticiaModel = new app.app.models.noticiasModel(connection);

		noticiaModel.getNoticiasHome(function(error, result){
			
			res.render('home/index', {noticias: result});
		});
		
	});
	
};