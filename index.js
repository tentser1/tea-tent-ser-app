// Helper function to convert a string to uppercase
function toUpperCase(str) {
    if (typeof str !== 'string') {
      throw new Error("Input must be a string");
    }
  
    return str.toUpperCase();
  }
  
  // Helper function to count the number of vowels in a string
  function countVowels(str) {
    if (typeof str !== 'string') {
      throw new Error("Input must be a string");
    }
  
    const vowels = str.match(/[aeiouAEIOU]/g);
    return vowels ? vowels.length : 0;
  }
  
  // Demo using the helper functions
  try {
    const lowercaseString = "hello, world!";
    
    const uppercaseString = toUpperCase(lowercaseString);
    console.log("Uppercase String:", uppercaseString);
  
    const vowelCount = countVowels(lowercaseString);
    console.log("Number of Vowels:", vowelCount);
  } catch (error) {
    console.error("Error:", error.message);
  }
  