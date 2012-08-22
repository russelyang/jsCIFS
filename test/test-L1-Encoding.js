exports['encoding'] = function(test) {
	var encode_L1 = require("../lib/L1Encode");
	test.equal('Neko',encode_L1.encodeL1('EOGFGLGP'));
	test.done();
};
