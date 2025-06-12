export const questions = [
  {
    id: 1,
    name: "Two Sum",
    difficulty: "easy",
    likeCount: 12000,
    dislikeCount: 500,
    description: "Return indices of the two numbers such that they add up to the target.",
    image: "",
    example1: {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "nums[0] + nums[1] == 9, return [0, 1]"
    },
    example2: {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
      explanation: "nums[1] + nums[2] == 6, return [1, 2]"
    },
    constraints: "2 <= nums.length <= 10^4\n-10^9 <= nums[i], target <= 10^9\nOnly one valid answer exists.",
    timeComplexity: "O(n)",
    accepted: 13499686,
    submissions: 25531603,
    favourite: false,
    sampleInput: "2 7 11 15\n9",
    sampleOutput: "0 1"
  },
  {
    id: 2,
    name: "Palindrome Number",
    difficulty: "easy",
    likeCount: 8700,
    dislikeCount: 1200,
    description: "Return true if an integer is a palindrome.",
    image: "",
    example1: {
      input: "x = 121",
      output: "true",
      explanation: "121 reads the same backward and forward."
    },
    example2: {
      input: "x = -121",
      output: "false",
      explanation: "-121 is not a palindrome."
    },
    constraints: "-2^31 <= x <= 2^31 - 1",
    timeComplexity: "O(log n)",
    accepted: 10245678,
    submissions: 19234567,
    favourite: false,
    sampleInput: "121",
    sampleOutput: "true"
  },
  {
    id: 3,
    name: "Valid Parentheses",
    difficulty: "easy",
    likeCount: 9800,
    dislikeCount: 700,
    description: "Check if the input string of brackets is valid.",
    image: "",
    example1: {
      input: "s = '()[]{}'",
      output: "true",
      explanation: "All brackets closed in correct order."
    },
    example2: {
      input: "s = '(]'",
      output: "false",
      explanation: "Mismatched brackets."
    },
    constraints: "1 <= s.length <= 10^4\ns consists of (), [], {} only.",
    timeComplexity: "O(n)",
    accepted: 11234678,
    submissions: 19023123,
    favourite: false,
    sampleInput: "()[]{}",
    sampleOutput: "true"
  },
  {
    id: 4,
    name: "Merge Two Sorted Lists",
    difficulty: "easy",
    likeCount: 11000,
    dislikeCount: 300,
    description: "Merge two sorted linked lists and return as one sorted list.",
    image: "",
    example1: {
      input: "l1 = [1,2,4], l2 = [1,3,4]",
      output: "[1,1,2,3,4,4]",
      explanation: "Merged into one sorted list."
    },
    example2: {
      input: "l1 = [], l2 = [0]",
      output: "[0]",
      explanation: "Only one list has values."
    },
    constraints: "The number of nodes in both lists is in [0, 50].\n-100 <= Node.val <= 100",
    timeComplexity: "O(n + m)",
    accepted: 8432121,
    submissions: 14267891,
    favourite: false,
    sampleInput: "1 2 4\n1 3 4",
    sampleOutput: "1 1 2 3 4 4"
  },
  {
    id: 5,
    name: "Best Time to Buy and Sell Stock",
    difficulty: "easy",
    likeCount: 15000,
    dislikeCount: 800,
    description: "Find the maximum profit from buying and selling one share of stock.",
    image: "",
    example1: {
      input: "prices = [7,1,5,3,6,4]",
      output: "5",
      explanation: "Buy on day 2 (price=1) and sell on day 5 (price=6)."
    },
    example2: {
      input: "prices = [7,6,4,3,1]",
      output: "0",
      explanation: "No profit can be made."
    },
    constraints: "1 <= prices.length <= 10^5\n0 <= prices[i] <= 10^4",
    timeComplexity: "O(n)",
    accepted: 10000432,
    submissions: 20003432,
    favourite: false,
    sampleInput: "7 1 5 3 6 4",
    sampleOutput: "5"
  },
  {
    id: 6,
    name: "Climbing Stairs",
    difficulty: "easy",
    likeCount: 9000,
    dislikeCount: 600,
    description: "You can climb 1 or 2 steps. How many distinct ways to reach the top?",
    image: "",
    example1: {
      input: "n = 2",
      output: "2",
      explanation: "1 step + 1 step, or 2 steps."
    },
    example2: {
      input: "n = 3",
      output: "3",
      explanation: "1+1+1, 1+2, 2+1"
    },
    constraints: "1 <= n <= 45",
    timeComplexity: "O(n)",
    accepted: 8723123,
    submissions: 12398211,
    favourite: false,
    sampleInput: "5",
    sampleOutput: "8"
  },
  {
    id: 7,
    name: "Remove Duplicates from Sorted Array",
    difficulty: "easy",
    likeCount: 7400,
    dislikeCount: 450,
    description: "Remove duplicates in-place and return new length.",
    image: "",
    example1: {
      input: "nums = [1,1,2]",
      output: "2",
      explanation: "Array becomes [1,2,_]"
    },
    example2: {
      input: "nums = [0,0,1,1,1,2,2,3,3,4]",
      output: "5",
      explanation: "Array becomes [0,1,2,3,4,_...]"
    },
    constraints: "1 <= nums.length <= 3 * 10^4\n-100 <= nums[i] <= 100\nnums is sorted in non-decreasing order.",
    timeComplexity: "O(n)",
    accepted: 6931222,
    submissions: 10998232,
    favourite: false,
    sampleInput: "1 1 2",
    sampleOutput: "2"
  },
  {
    id: 8,
    name: "Maximum Subarray",
    difficulty: "easy",
    likeCount: 13200,
    dislikeCount: 700,
    description: "Find the contiguous subarray with the largest sum.",
    image: "",
    example1: {
      input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
      output: "6",
      explanation: "Subarray [4,-1,2,1] has the largest sum."
    },
    example2: {
      input: "nums = [1]",
      output: "1",
      explanation: "Only one element."
    },
    constraints: "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4",
    timeComplexity: "O(n)",
    accepted: 11998231,
    submissions: 14998231,
    favourite: false,
    sampleInput: "-2 1 -3 4 -1 2 1 -5 4",
    sampleOutput: "6"
  },
  {
    id: 9,
    name: "Length of Last Word",
    difficulty: "easy",
    likeCount: 5300,
    dislikeCount: 300,
    description: "Return the length of the last word in a string.",
    image: "",
    example1: {
      input: '"Hello World"',
      output: "5",
      explanation: "The last word is 'World' which has length 5."
    },
    example2: {
      input: '"   fly me   to   the moon  "',
      output: "4",
      explanation: "The last word is 'moon'."
    },
    constraints: "1 <= s.length <= 10^4\ns consists of only English letters and spaces.",
    timeComplexity: "O(n)",
    accepted: 5530098,
    submissions: 7898123,
    favourite: false,
    sampleInput: "Hello World",
    sampleOutput: "5"
  },
  {
    id: 10,
    name: "Plus One",
    difficulty: "easy",
    likeCount: 6900,
    dislikeCount: 420,
    description: "Given a large integer represented as an array, increment the integer by one.",
    image: "",
    example1: {
      input: "digits = [1,2,3]",
      output: "[1,2,4]",
      explanation: "123 + 1 = 124"
    },
    example2: {
      input: "digits = [9]",
      output: "[1,0]",
      explanation: "9 + 1 = 10"
    },
    constraints: "1 <= digits.length <= 100\n0 <= digits[i] <= 9\nThe number does not contain leading zero.",
    timeComplexity: "O(n)",
    accepted: 8392013,
    submissions: 12345678,
    favourite: false,
    sampleInput: "1 2 3",
    sampleOutput: "1 2 4"
  }
];

{
[
  {
    "id": 1,
    "name": "Reverse a String",
    "difficulty": "easy",
    "description": "Reverse the input string.",
    "image": "",
    "example1": { "input": "hello", "output": "olleh",  "explanation": "The characters of the string are reversed."},
    "example2": { "input": "racecar", "output": "racecar", "explanation": "The string is the same backward and forward." },
    "constraints": "1 ≤ length ≤ 1000",
    "timeComplexity": "O(n)",
    "sampleInput": "Codify",
    "sampleOutput": "yfidoC",
    "testCases": [
      {"input":"hello","output":"olleh"},
      {"input":"world","output":"dlrow"},
      {"input":"Codify","output":"yfidoC"},
      {"input":"racecar","output":"racecar"},
      {"input":"a","output":"a"},
      {"input":"ab","output":"ba"},
      {"input":"12345","output":"54321"},
      {"input":"OpenAI GPT","output":"TPG IAnepO"},
      {"input":"!@#$","output":"$#@!"},
      {"input":"","output":""}
    ]
  },
  {
    "id": 2,
    "name": "Sum of Digits",
    "difficulty": "easy",
    "description": "Return the sum of digits of an integer.",
    "image": "",
    "example1": { "input": "123", "output": "6", "explanation": "The digits are 1 + 2 + 3 = 6." },
    "example2": { "input": "999", "output": "27", "explanation": "The digits are 9 + 9 + 9 = 27." },
    "constraints": "0 ≤ num ≤ 10^9",
    "timeComplexity": "O(log n)",
    "sampleInput": "456",
    "sampleOutput": "15",
    "testCases": [
      {"input":"0","output":"0"},
      {"input":"5","output":"5"},
      {"input":"123","output":"6"},
      {"input":"4567","output":"22"},
      {"input":"9999","output":"36"},
      {"input":"1001","output":"2"},
      {"input":"808","output":"16"},
      {"input":"111111","output":"6"},
      {"input":"1000000000","output":"1"},
      {"input":"314159","output":"23"}
    ]
  },
  {
    "id": 3,
    "name": "Palindrome Number",
    "difficulty": "easy",
    "description": "Determine if a number is a palindrome.",
    "image": "",
    "example1": { "input": "121", "output": "true", "explanation": "121 is the same forward and backward." },
    "example2": { "input": "123", "output": "false", "explanation": "123 is not the same when reversed." },
    "constraints": "0 ≤ num ≤ 10^9",
    "timeComplexity": "O(log n)",
    "sampleInput": "1221",
    "sampleOutput": "true",
    "testCases": [
      {"input":"0","output":"true"},
      {"input":"1","output":"true"},
      {"input":"11","output":"true"},
      {"input":"121","output":"true"},
      {"input":"12321","output":"true"},
      {"input":"123","output":"false"},
      {"input":"10","output":"false"},
      {"input":"123454321","output":"true"},
      {"input":"1234554321","output":"true"},
      {"input":"100","output":"false"}
    ]
  },
  {
    "id": 4,
    "name": "FizzBuzz",
    "difficulty": "easy",
    "description": "Print fizz/buzz for numbers 1..N.",
    "image": "",
    "example1": { "input": "5", "output": "1,2,fizz,4,buzz", "explanation": "3 is divisible by 3, hence fizz. 5 is divisible by 5, hence buzz." },
    "example2": { "input": "3", "output": "1,2,fizz", "explanation": "Every number divisible by 3 is replaced with fizz" },
    "constraints": "1 ≤ N ≤ 100",
    "timeComplexity": "O(n)",
    "sampleInput": "10",
    "sampleOutput": "1,2,fizz,4,buzz,fizz,7,8,fizz,buzz",
    "testCases": [
      {"input":"1","output":"1"},
      {"input":"3","output":"1,2,fizz"},
      {"input":"5","output":"1,2,fizz,4,buzz"},
      {"input":"15","output":"1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz"},
      {"input":"16","output":"1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16"},
      {"input":"20","output":"1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz"},
      {"input":"30","output":"...buzz"}, 
      {"input":"2","output":"1,2"},
      {"input":"4","output":"1,2,fizz,4"},
      {"input":"6","output":"1,2,fizz,4,buzz,fizz"}
    ]
  },
  {
    "id": 5,
    "name": "Factorial",
    "difficulty": "medium",
    "description": "Compute factorial of N.",
    "image": "",
    "example1": { "input": "5", "output": "120", "explanation": "5! = 5×4×3×2×1 = 120." },
    "example2": { "input": "0", "output": "1", "explanation": "By definition, 0! = 1." },
    "constraints": "0 ≤ N ≤ 20",
    "timeComplexity": "O(n)",
    "sampleInput": "6",
    "sampleOutput": "720",
    "testCases": [
      {"input":"0","output":"1"},
      {"input":"1","output":"1"},
      {"input":"5","output":"120"},
      {"input":"10","output":"3628800"},
      {"input":"12","output":"479001600"},
      {"input":"15","output":"1307674368000"},
      {"input":"20","output":"2432902008176640000"},
      {"input":"3","output":"6"},
      {"input":"7","output":"5040"},
      {"input":"8","output":"40320"}
    ]
  },
  {
    "id": 6,
    "name": "Fibonacci",
    "difficulty": "medium",
    "description": "Compute N-th Fibonacci number (0-indexed).",
    "image": "",
    "example1": { "input": "0", "output": "0", "explanation": "0th Fibonacci number is 0." },
    "example2": { "input": "5", "output": "5", "explanation": "Fibonacci sequence: 0,1,1,2,3,5. 5th number is 5." },
    "constraints": "0 ≤ N ≤ 30",
    "timeComplexity": "O(n)",
    "sampleInput": "7",
    "sampleOutput": "13",
    "testCases": [
      {"input":"0","output":"0"},
      {"input":"1","output":"1"},
      {"input":"2","output":"1"},
      {"input":"5","output":"5"},
      {"input":"10","output":"55"},
      {"input":"15","output":"610"},
      {"input":"20","output":"6765"},
      {"input":"25","output":"75025"},
      {"input":"30","output":"832040"},
      {"input":"3","output":"2"}
    ]
  },
  {
    "id": 7,
    "name": "Max in Array",
    "difficulty": "easy",
    "description": "Find maximum element in array.",
    "image": "",
    "example1": { "input": "[1,2,3]", "output": "3", "explanation": "The largest element in [1,2,3] is 3" },
    "example2": { "input": "[-5,0,5]", "output": "5", "explanation": "The largest element in [-5, 0, 5] is 5." },
    "constraints": "1 ≤ n ≤ 1000",
    "timeComplexity": "O(n)",
    "sampleInput": "[3,1,4,1,5]",
    "sampleOutput": "5",
    "testCases": [
      {"input":"[1,2,3]","output":"3"},
      {"input":"[-1,-2,-3]","output":"-1"},
      {"input":"[5,5,5]","output":"5"},
      {"input":"[0]","output":"0"},
      {"input":"[100,50,1000]","output":"1000"},
      {"input":"[-100,100]","output":"100"},
      {"input":"[3,1,4,1,5]","output":"5"},
      {"input":"[1,100,51]","output":"100"},
      {"input":"[7,8,9]","output":"9"},
      {"input":"[2,2,2,2]","output":"2"}
    ]
  },
  {
    "id": 8,
    "name": "Prime Check",
    "difficulty": "medium",
    "description": "Check if number is prime.",
    "image": "",
    "example1": { "input": "7", "output": "true", "explanation": "7 is only divisible by 1 and 7." },
    "example2": { "input": "8", "output": "false", "explanation": "8 is divisible by numbers other than 1 and itself." },
    "constraints": "2 ≤ n ≤ 10^6",
    "timeComplexity": "O(√n)",
    "sampleInput": "13",
    "sampleOutput": "true",
    "testCases": [
      {"input":"2","output":"true"},
      {"input":"3","output":"true"},
      {"input":"4","output":"false"},
      {"input":"17","output":"true"},
      {"input":"18","output":"false"},
      {"input":"19","output":"true"},
      {"input":"20","output":"false"},
      {"input":"997","output":"true"},
      {"input":"1000","output":"false"},
      {"input":"999983","output":"true"}
    ]
  },
  {
    "id": 9,
    "name": "Anagram Check",
    "difficulty": "medium",
    "description": "Determine if two strings are anagrams.",
    "image": "",
    "example1": { "input": "listen, silent", "output": "true", "explanation": "Both strings have same letters in different orders." },
    "example2": { "input": "hello, world", "output": "false", "explanation": "Different letters make them not anagrams." },
    "constraints": "lowercase letters, length ≤ 1000",
    "timeComplexity": "O(n)",
    "sampleInput": "listen, silent",
    "sampleOutput": "true",
    "testCases": [
      {"input":"listen silent","output":"true"},
      {"input":"triangle integral","output":"true"},
      {"input":"apple, paple","output":"true"},
      {"input":"hello world","output":"false"},
      {"input":"rat tar","output":"true"},
      {"input":"dusty, study","output":"true"},
      {"input":"education, indication","output":"false"},
      {"input":"abc, cba","output":"true"},
      {"input":"aabb, abba","output":"true"},
      {"input":"abcde, edcab","output":"true"}
    ]
  },
  {
  "id": 10,
  "name": "Two Sum",
  "difficulty": "easy",
  "description": "Return indices of two numbers that add up to target.",
  "image": "",
  "example1": {
    "input": "4\n2 7 11 15\n9",
    "output": "0 1",
    "explanation": "2 + 7 = 9, hence indices 0 and 1."
  },
  "example2": {
    "input": "3\n3 2 4\n6",
    "output": "1 2",
    "explanation": "2 + 4 = 6, hence indices 1 and 2."
  },
  "constraints": "exactly one solution exists",
  "timeComplexity": "O(n)",
  "sampleInput": "4\n2 7 11 15\n9",
  "sampleOutput": "0 1",
  "testCases": [
    {"input": "4\n2 7 11 15\n9", "output": "0 1"},
    {"input": "3\n3 2 4\n6", "output": "1 2"},
    {"input": "2\n3 3\n6", "output": "0 1"},
    {"input": "4\n-1 0 1 2\n1", "output": "0 2"},
    {"input": "4\n0 4 3 0\n0", "output": "0 3"},
    {"input": "4\n1 2 3 4\n7", "output": "2 3"},
    {"input": "4\n5 5 5 5\n10", "output": "0 1"},
    {"input": "4\n2 5 5 11\n10", "output": "1 2"},
    {"input": "4\n1 2 3 0\n3", "output": "0 2"},
    {"input": "4\n4 5 6 7\n13", "output": "2 3"}
  ]
}

]
}
