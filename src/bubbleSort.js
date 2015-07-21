var bubbleSort = function (array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = array.length; j > 0; j--) {
			if (array[j] < array[j - 1]) {
				var tmp = array[j];
				array[j] = array[j - 1];
				array[j - 1] = tmp;
			}
		}
	}
	return array;
};
