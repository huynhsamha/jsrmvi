(() => {
	const { jsrmvi } = window;
	const { removeVI, DefaultOption } = jsrmvi;

	console.log('File script.js');
	console.log(jsrmvi);
	console.log(DefaultOption);

	console.log('Null or empty text:');
	console.log('1: ' + removeVI());
	console.log('2: ' + removeVI(null));
	console.log('3: ' + removeVI(undefined));
	console.log('4: ' + removeVI(''));
})();
