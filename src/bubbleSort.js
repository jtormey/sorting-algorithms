var bubbleSort = function (array) {

	// Start by making as many passes as there are elements in the array
	// lastIdx decreases with each pass, reducing the size of the next pass
	for (var lastIdx = array.length - 1; lastIdx > 0; --lastIdx) {

		// This is where each "pass" happens
		// From the beginning of the array, examine pairs of indexes
		for (var currentIdx = 0; currentIdx < lastIdx; ++currentIdx) {

			// If the lower index has a greater value, switch them around
			if (array[currentIdx] > array[currentIdx + 1]) {

				var tmp = array[currentIdx];
				array[currentIdx] = array[currentIdx + 1];
				array[currentIdx + 1] = tmp;

			}

		}

	}

	return array;
};
