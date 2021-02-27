function Horse() {

}

Horse.prototype.jump = function() {
	// body...
	console.log('jumped...');
};

Horse.prototype.run = function() {
	console.log('Running');
}

module.exports = Horse;