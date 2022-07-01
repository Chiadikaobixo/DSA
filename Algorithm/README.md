# Linear Search
Process of searching through an array, moving from one item from another, beginning from the start and moving towards the end or vice versa.

# Binary Search
This is a more faster form of searching, and it works on only sorted arrays. Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time.

# Naive string Search
This involves searching for a larger string in a sub-string

# burble sort
it places the larger value into sorted position

# selection sort
similar to burble sort, but instead of first placing large values into sorted position, it places small values into sorted position 

# insertion sort
taking an element, one at a time and inserting it at the right spot. i.e, it builds up the sort by gradually creating a larger left half which is always sorted

# merge sort
it is a combination of two things, merging and sorting. it works by decomposing an array into smaller arrays of 0 - 1 elements and then building up a newly sorted array.

# quick sort
just like merge sort, it exploits the fact that arrays of 0 or 1 element are always sorted. it works by selecting one element (called the pivot) and finding the index where the pivot should end up in the sorted array. once the pivot is positioned properly, quick sort can be applied on either side of the pivot

# radix sort
Radix sort is a special sorting algorithm that works on list of numbers and it doesn't make comparisons between elements. it exploits that fact that information about the size of the number is encoded in number of digits (more digits means bigger number). Time complexity O(nk) for the best, worst and average case senerios and space complexity o(n + K). where n is the length of the array we are sorting and and K is the length of those numbers or number of digits(average)