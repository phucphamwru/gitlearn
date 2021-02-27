function Dog(name) {
	this.name = name;
	this.stomach = [];
}

Dog.prototype.eat = function(cat) {
	// body...
	this.stomach.push(cat);
};

module.exports = Dog;