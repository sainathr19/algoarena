const someJSCodeExample = `function processData(input) {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */ 
  } 
  
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  _input = "";
  process.stdin.on("data", function (input) {
      _input += input;
  });
  
  process.stdin.on("end", function () {
     processData(_input);
  });`;
  
  const someJavaCodeExample = `import java.io.*;
  import java.util.*;
  
  public class Main {
  
      public static void main(String[] args) {
          /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Main. */
      }
  }`;
  
  const somePythonCodeExample = `# Enter your code here. Read input from STDIN. Print output to STDOUT`;
  
  const languages = {
    js: {
      lang: "javascript",
      path: "main.js",
      value: someJSCodeExample,
      language_id: 63,
    },
    python: {
      lang: "python",
      path: "main.py",
      value: somePythonCodeExample,
      language_id: 71,
    },
    java: {
      lang: "java",
      path: "Main.java",
      value: someJavaCodeExample,
      language_id: 91,
    },
  };
  
  export default languages;
  