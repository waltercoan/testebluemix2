exports.index = function(req, res) {
	res.render('index');
}
exports.lista = function(req, res) {
	res.json({
		lista:	[
			{
				item: 'Detergente',
				quantidade: 10
			},
			{
				item: 'Sabão',
				quantidade: 2
			}
		]
	});
}
