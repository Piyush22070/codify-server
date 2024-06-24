
export const questions = [
    {
        id: 1,
        name: "Two Sum",
        difficulty: "Easy",
        like: 12000,
        dislike: 500,
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        example1: {
            Input: "nums = [2,7,11,15], target = 9",
            Output: "[0,1]",
            Explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
        },
        example2: {
            Input: "nums = [3,2,4], target = 6",
            Output: "[1,2]",
            Explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
        },
        Constraints: "2 <= nums.length <= 10^4\n-10^9 <= nums[i] <= 10^9\n-10^9 <= target <= 10^9\nOnly one valid answer exists.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 2,
        name: "Reverse Integer",
        difficulty: "Easy",
        like: 8500,
        dislike: 120,
        description: "Given a signed 32-bit integer x, return x with its digits reversed.",
        example1: {
            Input: "x = 123",
            Output: "321",
            Explanation: "The reversed integer is 321."
        },
        example2: {
            Input: "x = -123",
            Output: "-321",
            Explanation: "The reversed integer is -321. Note that the reversed integer should be in the range [-2^31, 2^31 - 1]. If it is not a valid reversed integer, return 0."
        },
        Constraints: "-2^31 <= x <= 2^31 - 1",
        timeComplexity: "O(log(x))",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 3,
        name: "Palindrome Number",
        difficulty: "Easy",
        like: 9200,
        dislike: 230,
        description: "Given an integer x, return true if x is a palindrome integer.",
        example1: {
            Input: "x = 121",
            Output: "true",
            Explanation: "121 is a palindrome."
        },
        example2: {
            Input: "x = -121",
            Output: "false",
            Explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
        },
        Constraints: "-2^31 <= x <= 2^31 - 1",
        timeComplexity: "O(log(x))",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 4,
        name: "Roman to Integer",
        difficulty: "Easy",
        like: 6200,
        dislike: 100,
        description: "Given a roman numeral, convert it to an integer.",
        example1: {
            Input: "s = \"III\"",
            Output: "3",
            Explanation: "Roman numeral III is represented as 3 in integer."
        },
        example2: {
            Input: "s = \"IV\"",
            Output: "4",
            Explanation: "Roman numeral IV is represented as 4 in integer."
        },
        Constraints: "1 <= s.length <= 15\ns contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 5,
        name: "Longest Common Prefix",
        difficulty: "Easy",
        like: 10200,
        dislike: 400,
        description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string \"\".",
        example1: {
            Input: "strs = [\"flower\",\"flow\",\"flight\"]",
            Output: "\"fl\"",
            Explanation: "The longest common prefix is \"fl\"."
        },
        example2: {
            Input: "strs = [\"dog\",\"racecar\",\"car\"]",
            Output: "\"\"",
            Explanation: "There is no common prefix among the input strings."
        },
        Constraints: "0 <= strs.length <= 200\n0 <= strs[i].length <= 200\nstrs[i] consists of only lower-case English letters.",
        timeComplexity: "O(n * m)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 6,
        name: "Valid Parentheses",
        difficulty: "Easy",
        like: 9800,
        dislike: 300,
        description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        example1: {
            Input: "s = \"()\"",
            Output: "true",
            Explanation: "The input string is valid because brackets are balanced."
        },
        example2: {
            Input: "s = \"([)]\"",
            Output: "false",
            Explanation: "The input string is not valid because brackets are not balanced."
        },
        Constraints: "1 <= s.length <= 10^4\ns consists of parentheses only '()[]{}'.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 7,
        name: "Merge Two Sorted Lists",
        difficulty: "Easy",
        like: 7600,
        dislike: 200,
        description: "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
        example1: {
            Input: "l1 = [1,2,4], l2 = [1,3,4]",
            Output: "[1,1,2,3,4,4]",
            Explanation: "Merging the sorted lists l1 and l2 yields [1,1,2,3,4,4]."
        },
        example2: {
            Input: "l1 = [], l2 = []",
            Output: "[]",
            Explanation: "Merging an empty list with another empty list results in an empty list."
        },
        Constraints: "The number of nodes in both lists is in the range [0, 50].\n-100 <= Node.val <= 100\nBoth l1 and l2 are sorted in non-decreasing order.",
        timeComplexity: "O(n + m)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 8,
        name: "Remove Duplicates from Sorted Array",
        difficulty: "Easy",
        like: 9300,
        dislike: 400,
        description: "Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.",
        example1: {
            Input: "nums = [1,1,2]",
            Output: "2",
            Explanation: "After removing the duplicates, nums has elements [1,2] and its length is 2."
        },
        example2: {
            Input: "nums = [0,0,1,1,1,2,2,3,3,4]",
            Output: "5",
            Explanation: "After removing the duplicates, nums has elements [0,1,2,3,4] and its length is 5."
        },
        Constraints: "0 <= nums.length <= 3 * 10^4\n-10^4 <= nums[i] <= 10^4\nnums is sorted in ascending order.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 9,
        name: "Remove Element",
        difficulty: "Easy",
        like: 8500,
        dislike: 300,
        description: "Given an integer array nums and an integer val, remove all occurrences of val in nums in-place and return the new length.",
        example1: {
            Input: "nums = [3,2,2,3], val = 3",
            Output: "2",
            Explanation: "After removing the occurrences of value 3, nums has elements [2,2] and its length is 2."
        },
        example2: {
            Input: "nums = [0,1,2,2,3,0,4,2], val = 2",
            Output: "5",
            Explanation: "After removing the occurrences of value 2, nums has elements [0,1,3,0,4] and its length is 5."
        },
        Constraints: "0 <= nums.length <= 100\n0 <= nums[i] <= 50\n0 <= val <= 100",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 10,
        name: "Implement strStr()",
        difficulty: "Easy",
        like: 7200,
        dislike: 150,
        description: "Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
        example1: {
            Input: "haystack = \"hello\", needle = \"ll\"",
            Output: "2",
            Explanation: "The first occurrence of needle \"ll\" in haystack \"hello\" is at index 2."
        },
        example2: {
            Input: "haystack = \"aaaaa\", needle = \"bba\"",
            Output: "-1",
            Explanation: "Needle \"bba\" is not part of haystack \"aaaaa\"."
        },
        Constraints: "0 <= haystack.length, needle.length <= 5 * 10^4\nhaystack and needle consist of lowercase English letters.",
        timeComplexity: "O(n * m)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 11,
        name: "Search Insert Position",
        difficulty: "Easy",
        like: 7800,
        dislike: 180,
        description: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
        example1: {
            Input: "nums = [1,3,5,6], target = 5",
            Output: "2",
            Explanation: "The target value 5 is found at index 2."
        },
        example2: {
            Input: "nums = [1,3,5,6], target = 2",
            Output: "1",
            Explanation: "The target value 2 is not found but it would be inserted at index 1."
        },
        Constraints: "1 <= nums.length <= 10^4\n-10^4 <= nums[i] <= 10^4\nnums contains distinct values sorted in ascending order.",
        timeComplexity: "O(log(n))",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 12,
        name: "Count and Say",
        difficulty: "Easy",
        like: 6300,
        dislike: 200,
        description: "The count-and-say sequence is a sequence of digit strings defined by the recursive formula.\n    - countAndSay(1) = \"1\"\n    - countAndSay(n) is the way you would \"say\" the digit string from countAndSay(n-1), which is then converted into a different digit string.",
        example1: {
            Input: "n = 1",
            Output: "\"1\"",
            Explanation: "The sequence starts with \"1\"."
        },
        example2: {
            Input: "n = 4",
            Output: "\"1211\"",
            Explanation: "To generate the sequence, we read the previous string \"111221\". Then \"1\" is read as \"one 1\" or \"11\". \"2\" is read as \"two 1s\" or \"21\". \"1\" is read as \"one 2, then one 1\" or \"1211\"."
        },
        Constraints: "1 <= n <= 30",
        timeComplexity: "O(2^n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 13,
        name: "Maximum Subarray",
        difficulty: "Easy",
        like: 9200,
        dislike: 350,
        description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
        example1: {
            Input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
            Output: "6",
            Explanation: "The contiguous subarray [4,-1,2,1] has the largest sum = 6."
        },
        example2: {
            Input: "nums = [1]",
            Output: "1",
            Explanation: "The contiguous subarray [1] has the largest sum = 1."
        },
        Constraints: "1 <= nums.length <= 2 * 10^4\n-10^5 <= nums[i] <= 10^5",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 14,
        name: "Length of Last Word",
        difficulty: "Easy",
        like: 6700,
        dislike: 300,
        description: "Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.",
        example1: {
            Input: "s = \"Hello World\"",
            Output: "5",
            Explanation: "The last word \"World\" has a length of 5."
        },
        example2: {
            Input: "s = \"   fly me   to   the moon  \"",
            Output: "4",
            Explanation: "The last word \"moon\" has a length of 4."
        },
        Constraints: "1 <= s.length <= 10^4\ns consists of only English letters and spaces ' '.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 15,
        name: "Plus One",
        difficulty: "Easy",
        like: 7200,
        dislike: 150,
        description: "Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer and return the result as an array of decimal digits. The digits are stored so that the most significant digit is at the head of the list, and each element in the array contains a single digit.",
        example1: {
            Input: "digits = [1,2,3]",
            Output: "[1,2,4]",
            Explanation: "The array represents the integer 123. Incrementing by one gives 124."
        },
        example2: {
            Input: "digits = [4,3,2,1]",
            Output: "[4,3,2,2]",
            Explanation: "The array represents the integer 4321. Incrementing by one gives 4322."
        },
        Constraints: "1 <= digits.length <= 100\n0 <= digits[i] <= 9",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 16,
        name: "Add Binary",
        difficulty: "Easy",
        like: 2900,
        dislike: 123,
        description: "Given two binary strings a and b, return their sum as a binary string.",
        example1: {
            Input: "a = \"11\", b = \"1\"",
            Output: "\"100\"",
            Explanation: "The binary sum of \"11\" and \"1\" is \"100\"."
        },
        example2: {
            Input: "a = \"1010\", b = \"1011\"",
            Output: "\"10101\"",
            Explanation: "The binary sum of \"1010\" and \"1011\" is \"10101\"."
        },
        Constraints: "1 <= a.length, b.length <= 10^4\na and b consist only of '0' or '1' characters.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 17,
        name: "Sqrt(x)",
        difficulty: "Easy",
        like: 2100,
        dislike: 123,
        description: "Given a non-negative integer x, compute and return the square root of x. Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.",
        example1: {
            Input: "4",
            Output: "2",
            Explanation: "The square root of 4 is 2."
        },
        example2: {
            Input: "8",
            Output: "2",
            Explanation: "The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned."
        },
        Constraints: "0 <= x <= 2^31 - 1",
        timeComplexity: "O(log(x))",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 18,
        name: "Climbing Stairs",
        difficulty: "Easy",
        like: 4300,
        dislike: 234,
        description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        example1: {
            Input: "2",
            Output: "2",
            Explanation: "There are two ways to climb to the top: 1 step + 1 step or 2 steps."
        },
        example2: {
            Input: "3",
            Output: "3",
            Explanation: "There are three ways to climb to the top: 1 step + 1 step + 1 step, 1 step + 2 steps, or 2 steps + 1 step."
        },
        Constraints: "1 <= n <= 45",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 19,
        name: "Remove Duplicates from Sorted List",
        difficulty: "Easy",
        like: 6400,
        dislike: 250,
        description: "Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.",
        example1: {
            Input: "head = [1,1,2]",
            Output: "[1,2]",
            Explanation: "The linked list with duplicates removed and sorted is [1,2]."
        },
        example2: {
            Input: "head = [1,1,2,3,3]",
            Output: "[1,2,3]",
            Explanation: "The linked list with duplicates removed and sorted is [1,2,3]."
        },
        Constraints: "The number of nodes in the list is in the range [0, 300].\n-100 <= Node.val <= 100\nThe list is guaranteed to be sorted in ascending order.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 20,
        name: "Merge Sorted Array",
        difficulty: "Easy",
        like: 5800,
        dislike: 100,
        description: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.",
        example1: {
            Input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
            Output: "[1,2,2,3,5,6]",
            Explanation: "Merged nums1 and nums2 is [1,2,2,3,5,6]. The elements are sorted in non-decreasing order."
        },
        example2: {
            Input: "nums1 = [1], m = 1, nums2 = [], n = 0",
            Output: "[1]",
            Explanation: "Merged nums1 and nums2 is [1]. The elements are already sorted in non-decreasing order."
        },
        Constraints: "nums1.length == m + n\nnums2.length == n\n0 <= m, n <= 200\n1 <= m + n <= 200\n-10^9 <= nums1[i], nums2[i] <= 10^9",
        timeComplexity: "O(m + n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 21,
        name: "Valid Palindrome",
        difficulty: "Easy",
        like: 7600,
        dislike: 300,
        description: "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
        example1: {
            Input: "s = \"A man, a plan, a canal: Panama\"",
            Output: "true",
            Explanation: "Palindrome string ignoring cases and non-alphanumeric characters is \"amanaplanacanalpanama\"."
        },
        example2: {
            Input: "s = \"race a car\"",
            Output: "false",
            Explanation: "String \"raceacar\" is not a palindrome."
        },
        Constraints: "1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 22,
        name: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        like: 5800,
        dislike: 200,
        description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
        example1: {
            Input: "prices = [7,1,5,3,6,4]",
            Output: "5",
            Explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
        },
        example2: {
            Input: "prices = [7,6,4,3,1]",
            Output: "0",
            Explanation: "In this case, no transactions are done and the max profit = 0."
        },
        Constraints: "1 <= prices.length <= 10^5\n0 <= prices[i] <= 10^4",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 23,
        name: "Rotate Array",
        difficulty: "Easy",
        like: 6300,
        dislike: 150,
        description: "Given an array, rotate the array to the right by k steps, where k is non-negative.",
        example1: {
            Input: "nums = [1,2,3,4,5,6,7], k = 3",
            Output: "[5,6,7,1,2,3,4]",
            Explanation: "Rotate the array to the right by 3 steps: [4,5,6,7,1,2,3]."
        },
        example2: {
            Input: "nums = [-1,-100,3,99], k = 2",
            Output: "[3,99,-1,-100]",
            Explanation: "Rotate the array to the right by 2 steps: [3,99,-1,-100]."
        },
        Constraints: "1 <= nums.length <= 10^5\n-2^31 <= nums[i] <= 2^31 - 1\n0 <= k <= 10^5",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 24,
        name: "Factorial Trailing Zeroes",
        difficulty: "Easy",
        like: 5700,
        dislike: 180,
        description: "Given an integer n, return the number of trailing zeroes in n!.",
        example1: {
            Input: "n = 3",
            Output: "0",
            Explanation: "3! = 6, no trailing zero."
        },
        example2: {
            Input: "n = 5",
            Output: "1",
            Explanation: "5! = 120, one trailing zero."
        },
        Constraints: "0 <= n <= 10^4",
        timeComplexity: "O(log(n))",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 25,
        name: "Majority Element",
        difficulty: "Easy",
        like: 6800,
        dislike: 250,
        description: "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.",
        example1: {
            Input: "nums = [3,2,3]",
            Output: "3",
            Explanation: "Element 3 appears more than ⌊3 / 2⌋ = 1.5 times."
        },
        example2: {
            Input: "nums = [2,2,1,1,1,2,2]",
            Output: "2",
            Explanation: "Element 2 appears more than ⌊7 / 2⌋ = 3.5 times."
        },
        Constraints: "1 <= nums.length <= 5 * 10^4\n-2^31 <= nums[i] <= 2^31 - 1",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 26,
        name: "Excel Sheet Column Title",
        difficulty: "Easy",
        like: 4500,
        dislike: 180,
        description: "Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.",
        example1: {
            Input: "columnNumber = 1",
            Output: "\"A\"",
            Explanation: "Column number 1 corresponds to title \"A\"."
        },
        example2: {
            Input: "columnNumber = 28",
            Output: "\"AB\"",
            Explanation: "Column number 28 corresponds to title \"AB\"."
        },
        Constraints: "1 <= columnNumber <= 2^31 - 1",
        timeComplexity: "O(log(columnNumber))",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 27,
        name: "Power of Two",
        difficulty: "Easy",
        like: 4300,
        dislike: 150,
        description: "Given an integer n, return true if it is a power of two. Otherwise, return false.",
        example1: {
            Input: "n = 1",
            Output: "true",
            Explanation: "2^0 = 1."
        },
        example2: {
            Input: "n = 16",
            Output: "true",
            Explanation: "2^4 = 16."
        },
        Constraints: "-2^31 <= n <= 2^31 - 1",
        timeComplexity: "O(1)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 28,
        name: "Single Number",
        difficulty: "Easy",
        like: 7600,
        dislike: 350,
        description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
        example1: {
            Input: "nums = [2,2,1]",
            Output: "1",
            Explanation: "1 is the only element that does not appear twice."
        },
        example2: {
            Input: "nums = [4,1,2,1,2]",
            Output: "4",
            Explanation: "4 is the only element that does not appear twice."
        },
        Constraints: "1 <= nums.length <= 3 * 10^4\n-3 * 10^4 <= nums[i] <= 3 * 10^4\nEach element in the array appears twice except for one element which appears only once.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 29,
        name: "Convert Sorted Array to Binary Search Tree",
        difficulty: "Easy",
        like: 5300,
        dislike: 180,
        description: "Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree (BST). A height-balanced BST is a binary tree in which the depth of the two subtrees of every node never differs by more than one.",
        example1: {
            Input: "nums = [-10,-3,0,5,9]",
            Output: "[0,-3,9,-10,null,5]",
            Explanation: "A height-balanced BST is [0,-3,9,-10,null,5], where each node's value is its index in the array."
        },
        example2: {
            Input: "nums = [1,3]",
            Output: "[3,1]",
            Explanation: "A height-balanced BST is [3,1], where each node's value is its index in the array."
        },
        Constraints: "1 <= nums.length <= 10^4\n-10^4 <= nums[i] <= 10^4\nnums is sorted in a strictly increasing order.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 30,
        name: "Reverse Linked List",
        difficulty: "Easy",
        like: 7300,
        dislike: 250,
        description: "Reverse a singly linked list.",
        example1: {
            Input: "head = [1,2,3,4,5]",
            Output: "[5,4,3,2,1]",
            Explanation: "Reverse the linked list from 1 -> 2 -> 3 -> 4 -> 5 to 5 -> 4 -> 3 -> 2 -> 1."
        },
        example2: {
            Input: "head = [1,2]",
            Output: "[2,1]",
            Explanation: "Reverse the linked list from 1 -> 2 to 2 -> 1."
        },
        Constraints: "The number of nodes in the list is in the range [0, 5000].\n-5000 <= Node.val <= 5000",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 31,
        name: "Number of 1 Bits",
        difficulty: "Easy",
        like: 5700,
        dislike: 150,
        description: "Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).",
        example1: {
            Input: "n = 11",
            Output: "3",
            Explanation: "Binary representation of 11 is '1011', which has 3 bits set to '1'."
        },
        example2: {
            Input: "n = 128",
            Output: "1",
            Explanation: "Binary representation of 128 is '10000000', which has 1 bit set to '1'."
        },
        Constraints: "The input must be a binary string of length 32.",
        timeComplexity: "O(1)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 32,
        name: "Symmetric Tree",
        difficulty: "Easy",
        like: 6300,
        dislike: 180,
        description: "Given a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
        example1: {
            Input: "[1,2,2,3,4,4,3]",
            Output: "true",
            Explanation: "Tree structure is:\n    1\n   / \\ \n  2   2\n / \\ / \\ \n3  4 4  3\nThis tree is symmetric."
        },
        example2: {
            Input: "[1,2,2,null,3,null,3]",
            Output: "false",
            Explanation: "Tree structure is:\n    1\n   / \\ \n  2   2\n   \\   \\ \n   3    3\nThis tree is not symmetric."
        },
        Constraints: "The number of nodes in the tree is in the range [1, 1000].\n-1000 <= Node.val <= 1000",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 33,
        name: "Count and Say",
        difficulty: "Easy",
        like: 6200,
        dislike: 200,
        description: "The count-and-say sequence is a sequence of digit strings defined by the recursive formula:\n- countAndSay(1) = \"1\"\n- countAndSay(n) is the way you would 'say' the digit string from countAndSay(n-1), which is then converted into a different string.",
        example1: {
            Input: "n = 1",
            Output: "\"1\"",
            Explanation: "The base case, countAndSay(1) = \"1\"."
        },
        example2: {
            Input: "n = 4",
            Output: "\"1211\"",
            Explanation: "countAndSay(4) is \"1211\", which can be read as \"one 1, one 2, two 1s\"."
        },
        Constraints: "1 <= n <= 30",
        timeComplexity: "O(2^n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 34,
        name: "Implement strStr()",
        difficulty: "Easy",
        like: 5300,
        dislike: 180,
        description: "Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
        example1: {
            Input: "haystack = \"hello\", needle = \"ll\"",
            Output: "2",
            Explanation: "Index of first occurrence of 'll' in 'hello' is 2."
        },
        example2: {
            Input: "haystack = \"aaaaa\", needle = \"bba\"",
            Output: "-1",
            Explanation: "Needle 'bba' is not found in haystack 'aaaaa'."
        },
        Constraints: "0 <= haystack.length, needle.length <= 5 * 10^4\nhaystack and needle consist of lowercase English letters.",
        timeComplexity: "O(m * n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 35,
        name: "Reverse Integer",
        difficulty: "Easy",
        like: 7200,
        dislike: 250,
        description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
        example1: {
            Input: "x = 123",
            Output: "321",
            Explanation: "Reversed integer of 123 is 321."
        },
        example2: {
            Input: "x = -123",
            Output: "-321",
            Explanation: "Reversed integer of -123 is -321."
        },
        Constraints: "-2^31 <= x <= 2^31 - 1",
        timeComplexity: "O(log(x))",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 36,
        name: "Valid Parentheses",
        difficulty: "Easy",
        like: 7100,
        dislike: 350,
        description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        example1: {
            Input: "s = \"()\"",
            Output: "true",
            Explanation: "String '()' is valid."
        },
        example2: {
            Input: "s = \"([)]\"",
            Output: "false",
            Explanation: "String '([)]' is not valid."
        },
        Constraints: "1 <= s.length <= 10^4\ns consists of parentheses only '()[]{}'.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 37,
        name: "Intersection of Two Arrays II",
        difficulty: "Easy",
        like: 6500,
        dislike: 200,
        description: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.",
        example1: {
            Input: "nums1 = [1,2,2,1], nums2 = [2,2]",
            Output: "[2,2]",
            Explanation: "Intersection of [1,2,2,1] and [2,2] is [2,2]."
        },
        example2: {
            Input: "nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
            Output: "[4,9]",
            Explanation: "Intersection of [4,9,5] and [9,4,9,8,4] is [4,9]."
        },
        Constraints: "1 <= nums1.length, nums2.length <= 1000\n0 <= nums1[i], nums2[i] <= 1000",
        timeComplexity: "O(m + n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 38,
        name: "First Unique Character in a String",
        difficulty: "Easy",
        like: 6800,
        dislike: 250,
        description: "Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.",
        example1: {
            Input: "s = \"leetcode\"",
            Output: "0",
            Explanation: "First non-repeating character in 'leetcode' is 'l' at index 0."
        },
        example2: {
            Input: "s = \"loveleetcode\"",
            Output: "2",
            Explanation: "First non-repeating character in 'loveleetcode' is 'v' at index 2."
        },
        Constraints: "1 <= s.length <= 10^5\ns consists of only lowercase English letters.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 39,
        name: "Linked List Cycle",
        difficulty: "Easy",
        like: 6200,
        dislike: 200,
        description: "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Return true if there is a cycle in the linked list. Otherwise, return false.",
        example1: {
            Input: "head = [3,2,0,-4], pos = 1",
            Output: "true",
            Explanation: "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed)."
        },
        example2: {
            Input: "head = [1,2], pos = 0",
            Output: "true",
            Explanation: "There is a cycle in the linked list, where the tail connects to the 0th node (0-indexed)."
        },
        Constraints: "The number of nodes in the list is in the range [0, 10^4].\n-10^5 <= Node.val <= 10^5\npos is -1 or a valid index in the linked list.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 40,
        name: "Valid Palindrome",
        difficulty: "Easy",
        like: 6700,
        dislike: 150,
        description: "Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
        example1: {
            Input: "s = \"A man, a plan, a canal: Panama\"",
            Output: "true",
            Explanation: "Palindrome string ignoring non-alphanumeric characters is 'amanaplanacanalpanama'."
        },
        example2: {
            Input: "s = \"race a car\"",
            Output: "false",
            Explanation: "Non-palindrome string ignoring non-alphanumeric characters is 'raceacar'."
        },
        Constraints: "1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 41,
        name: "Merge Two Sorted Lists",
        difficulty: "Easy",
        like: 7300,
        dislike: 180,
        description: "Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.",
        example1: {
            Input: "l1 = [1,2,4], l2 = [1,3,4]",
            Output: "[1,1,2,3,4,4]",
            Explanation: "Merged sorted linked list from l1 = [1,2,4] and l2 = [1,3,4] is [1,1,2,3,4,4]."
        },
        example2: {
            Input: "l1 = [], l2 = []",
            Output: "[]",
            Explanation: "Merged sorted linked list from empty lists is []."
        },
        Constraints: "The number of nodes in both lists is in the range [0, 50].\n-100 <= Node.val <= 100\nBoth l1 and l2 are sorted in non-decreasing order.",
        timeComplexity: "O(n + m)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 42,
        name: "Power of Three",
        difficulty: "Easy",
        like: 6300,
        dislike: 120,
        description: "Given an integer n, return true if it is a power of three. Otherwise, return false. An integer n is a power of three, if there exists an integer x such that n == 3^x.",
        example1: {
            Input: "n = 27",
            Output: "true",
            Explanation: "27 is 3^3."
        },
        example2: {
            Input: "n = 0",
            Output: "false",
            Explanation: "0 is not a power of three."
        },
        Constraints: "-2^31 <= n <= 2^31 - 1",
        timeComplexity: "O(log n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 43,
        name: "Longest Common Prefix",
        difficulty: "Easy",
        like: 7200,
        dislike: 250,
        description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string \"\".",
        example1: {
            Input: "strs = [\"flower\",\"flow\",\"flight\"]",
            Output: "\"fl\"",
            Explanation: "Longest common prefix among 'flower', 'flow', 'flight' is 'fl'."
        },
        example2: {
            Input: "strs = [\"dog\",\"racecar\",\"car\"]",
            Output: "\"\"",
            Explanation: "There is no common prefix among 'dog', 'racecar', 'car'."
        },
        Constraints: "1 <= strs.length <= 200\n0 <= strs[i].length <= 200\nstrs[i] consists of only lower-case English letters.",
        timeComplexity: "O(n * m)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 44,
        name: "Excel Sheet Column Number",
        difficulty: "Easy",
        like: 6700,
        dislike: 150,
        description: "Given a column title as appear in an Excel sheet, return its corresponding column number.",
        example1: {
            Input: "columnTitle = \"A\"",
            Output: "1",
            Explanation: "Column 'A' corresponds to column number 1."
        },
        example2: {
            Input: "columnTitle = \"AB\"",
            Output: "28",
            Explanation: "Column 'AB' corresponds to column number 28."
        },
        Constraints: "1 <= columnTitle.length <= 7\ncolumnTitle consists only of uppercase English letters.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 45,
        name: "Maximum Subarray",
        difficulty: "Easy",
        like: 7100,
        dislike: 350,
        description: "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
        example1: {
            Input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
            Output: "6",
            Explanation: "Contiguous subarray [4,-1,2,1] has the largest sum 6."
        },
        example2: {
            Input: "nums = [1]",
            Output: "1",
            Explanation: "The entire array is the contiguous subarray with sum 1."
        },
        Constraints: "1 <= nums.length <= 3 * 10^4\n-10^5 <= nums[i] <= 10^5",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 46,
        name: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
        like: 7300,
        dislike: 180,
        description: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.",
        example1: {
            Input: "prices = [7,1,5,3,6,4]",
            Output: "5",
            Explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
        },
        example2: {
            Input: "prices = [7,6,4,3,1]",
            Output: "0",
            Explanation: "In this case, no transactions are done and the max profit = 0."
        },
        Constraints: "1 <= prices.length <= 10^5\n0 <= prices[i] <= 10^4",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 47,
        name: "Contains Duplicate",
        difficulty: "Easy",
        like: 6200,
        dislike: 200,
        description: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
        example1: {
            Input: "nums = [1,2,3,1]",
            Output: "true",
            Explanation: "There are duplicate values 1 in the array."
        },
        example2: {
            Input: "nums = [1,2,3,4]",
            Output: "false",
            Explanation: "There are no duplicate values in the array."
        },
        Constraints: "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 48,
        name: "Single Number",
        difficulty: "Easy",
        like: 6400,
        dislike: 180,
        description: "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",
        example1: {
            Input: "nums = [2,2,1]",
            Output: "1",
            Explanation: "Single number that appears only once is 1."
        },
        example2: {
            Input: "nums = [4,1,2,1,2]",
            Output: "4",
            Explanation: "Single number that appears only once is 4."
        },
        Constraints: "1 <= nums.length <= 3 * 10^4\n-3 * 10^4 <= nums[i] <= 3 * 10^4\nEach element in the array appears twice except for one element which appears only once.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 49,
        name: "Reverse Linked List",
        difficulty: "Easy",
        like: 6300,
        dislike: 120,
        description: "Reverse a singly linked list.",
        example1: {
            Input: "head = [1,2,3,4,5]",
            Output: "[5,4,3,2,1]",
            Explanation: "Reversed linked list is [5,4,3,2,1]."
        },
        example2: {
            Input: "head = [1,2]",
            Output: "[2,1]",
            Explanation: "Reversed linked list is [2,1]."
        },
        Constraints: "The number of nodes in the list is in the range [0, 5000].\n-5000 <= Node.val <= 5000",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
    {
        id: 50,
        name: "Valid Anagram",
        difficulty: "Easy",
        like: 7200,
        dislike: 180,
        description: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
        example1: {
            Input: "s = \"anagram\", t = \"nagaram\"",
            Output: "true",
            Explanation: "Strings 'anagram' and 'nagaram' are anagrams."
        },
        example2: {
            Input: "s = \"rat\", t = \"car\"",
            Output: "false",
            Explanation: "Strings 'rat' and 'car' are not anagrams."
        },
        Constraints: "1 <= s.length, t.length <= 5 * 10^4\ns and t consist of lowercase English letters.",
        timeComplexity: "O(n)",
        Accepted: 13499686,
        Submissions: 25531603,
        favourite: false
    },
]