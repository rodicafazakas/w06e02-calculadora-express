 const sumar = (req, res) => {
	const {a,b} = req.query;

	let result = {};
	if(isNaN(`${a  }`) || isNaN(`${b  }`)) {	
		res.write('Not a number');
		return;
	}
	result = parseFloat(a) + parseFloat(b);

	res.type('json');
	res.send(JSON.stringify({result}));
}


 const restar = (req, res) => {
	const {a, b} = req.query;

	let result = {};
	if(isNaN(`${a  }`) || isNaN(`${b  }`)) {	
		res.write('Not a number');
		return;
	}	
	result = parseFloat(a) - parseFloat(b);
	
  res.type('json');
	res.send(JSON.stringify({result}));
}

 const multiplicar = (req, res) => {
	const {a, b} = req.query;

	let result = {};
	if(isNaN(`${a  }`) || isNaN(`${b  }`)) {	
		res.write('Not a number');
		return;
	}
	
	result = parseFloat(a) * parseFloat(b);
	res.type('json');
	res.send(JSON.stringify({result}));

	
}

const dividir = (req, res) => {
	const {a, b} = req.query;

	let result = {};
	if(isNaN(`${a  }`) || isNaN(`${b  }`)) {	
		res.write('Not a number');
		return;
	}
	
	result = parseFloat(a) / parseFloat(b);
	res.type('json');
	res.send(JSON.stringify({result}));
}

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
}