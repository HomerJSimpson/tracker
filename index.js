var monitor = require('active-window');

monitor.getActiveWindow(w => {
	console.log(JSON.stringify(w));
	return w;
});

