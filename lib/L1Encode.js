exports.encodeL1 = function(biosName) {
	var b = new Buffer(biosName, "ascii");
	return b;
}
