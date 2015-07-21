var mergeSort = function (array) {
 	// Start by leaving mergeSort alone and just implement merge below
 	// Or, if you're feeling bold, delete this function body and rewrite it too!
 	if (array.length === 1) { return array; }
 	var mid   = Math.floor(array.length/2);
 	var left  = mergeSort(array.slice(0, mid)) || [];
 	var right = mergeSort(array.slice(mid, array.length)) || [];
 	return merge(left, right);
};

function merge (left, right) {
	// Implement a helper function to merge elements here
	var result = [],
	i = 0,
	j = 0;

	// Compare elements in the left and right lists to each other
	// Add the smallest element until one list is empty
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {

			result.push( left[i++]  );

		} else {

			result.push( right[j++] );

		}
	}

	// Append leftover elements to the end of the resultant list
	// We can assume that this new list will be in sorted order
	result = result.concat( left.slice(i)  );
	result = result.concat( right.slice(j) );
	return result;
};
