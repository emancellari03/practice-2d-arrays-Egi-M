function reverseString(str) {
    // Base Case
    if (str.length <=1) {
        return str;
    }
    // Recursive Case
    return str[str.length - 1] + reverseString(str.slice(0,-1));

}

// Test the Function

console.log (reverseString ("hello"));       // olleh
console.log (reverseString ("recursion"));   // noisrucer
console.log (reverseString ("a"));           // a
console.log (reverseString (""))             // ""