var Application = {};

(function(Application, $){
	var
        _document,
        _container,
        _metrics = {
        "mm" 	: [ 1 		, "Millimetres" ],
        "sm" 	: [ 10 		, "Santimetres"	],
        "m" 	: [ 1000 	, "Metres"		],
        "in" 	: [ 25.4 	, "Inches"		],
        "ft" 	: [ 304.8 	, "Foots" 		],
        "yd" 	: [ 914.4 	, "Yards" 		],
        "ml" 	: [ 1609347 , "Miles" 		],
        "km" 	: [ 1000000 , "Kilometres"	]
      };

Application.init = function (document) {
	 _document = document;
     _$container = $('#calc-container');
     _$container.css({"width" : "550px","height": " 26px", "position": "absolute","top": "0","bottom": "0",
     				"left": "0","right": "0","margin": "auto", "padding": "40px","background": "LightBlue"});
     this.createForm(_$container);
     _$container.change($.proxy(this.convertMeasures, this));
};

Application.createForm = function ($baseNode){
	$baseNode.append($('<form method="post" id="form"><input type="text" id="fromValue" value="1"><select id="convertFrom"></select><input type="text" id="toValue" value="1"><select id="convertTo"></select></form>'));
	_$convertFrom = $("select#convertFrom");
	_$convertTo = $("select#convertTo");
	for (var name in _metrics){
		_$convertFrom.append($('<option value='+name+'>'+_metrics[name][1]+'</option>'));
		_$convertTo.append($('<option value='+name+'>'+_metrics[name][1]+'</option>'));
	}
}

Application.convertMeasures = function (evt){
	_$fromValue = $('#fromValue').val();
	 $('#toValue').val(_metrics[$("#convertFrom").val()][0]*_$fromValue/_metrics[$("#convertTo").val()][0]);
}

})(Application, jQuery);