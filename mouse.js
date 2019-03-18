function Mouse(name){
	this.name = name;
	this.death = false;
}

Mouse.prototype.die = function(){
	this.dead = true;
}

module.exports = Mouse;