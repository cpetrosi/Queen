<img src = "logo.jpg" alt = "Queen Logo" width = 200 />
# Queen
### Welcome to Queen
Queen is a JavaScript ES6 language with OCaml's pattern matching and first class functions. Coders everywhere can create and complete projects on their smartphones while enjoying the expressiveness of emojis. Queen is also a great way to excite kids about computer science, once they see how fun and creative it can be! We hope you enjoy seeing your functions come to life as much as we do!

### Try it out
To produce an abstract syntax tree, use the command: 
```
npm install
npm start <path_to_file>
```
Where the file path follows the format below: 
```
C:\Users\mary\Desktop\helloWorld.queen
```

### Features
* Emoji keywords
* First class functions
	* Higher order functions
	* Anonymous functions
* Pattern matching
* No while loops (pattern matching instead)
* No for loops (pattern matching instead)
* Static typing

👑 - start a function <br>
🖨 - print <br>
😡 - error message <br>
🕳 - _ <br>
🚀 - = <br>
🍭 - | <br>
🤔 - if <br>
❗️- not <br>
💁🏼 - || <br>
🍽 - None <br>
🍝 - Some <br>
⚡️ - cons <br>
// - comment <br>

### Example Problems

QUEEN:
```
🖨 "Hello World!"
```

JS:
```
console.log("Hello World!");
```

QUEEN:
```
👑 int myRecursiveFunction (n : int) 🚀
    match n with
    🍭 n 🤔 n > 0   → myRecursiveFunction n - 1
    🍭 🕳           → n
```

JS:
```
myRecursiveFunction = (n) => {
	if (n > 0) {
		return myRecursiveFunction(n-1);
	} else {
		return n;
	}
};  
```

QUEEN:
```
👑 int length (l : string) 🚀
    match l with
    🍭 hd ⚡️ [] → 1
    🍭 hd ⚡️ tl → 1 + length(tl)
```

JS:
```
let l = [1, 2, 3];
let lengthl = l.length;
```

QUEEN:
```
🤔 (a 🚀 0 💁🏼 b 🚀 0) then a
else🤔 (c 🚀 0) then c
```

JS:
```				
if (a  == 0 || b == 0) {
	return a
} else if (c == 0) {
	return c
}
```

QUEEN:
```
👑 string reverse (l : string) 🚀
  match l with
  🍭 []       →  []
  🍭 hd ⚡️ tl →  reverse(tl) @ [hd]
```

JS:
```
let fruits = [‘strawberries’, ‘bananas’, blueberries’, ‘raspberries’];
let reversed = fruits.reverse();
```

QUEEN:
```
👑 int change (n : int) 🚀
(let quarters 🚀 n/25 in
let dimes 🚀 (n mod 25)/10 in
let nickels 🚀 ((n mod 25) mod 10)/5 in
let pennies 🚀 (((n mod 25) mod 10) mod 5) in
[quarters;dimes;nickels;pennies])
```

JS:
```
var change = function (n) {
  var changeAmt = [],
    total = 0;
  [25, 10, 5, 1].forEach(function(coin) {
    while (total + coin <= n) {
      changeAmt.push(coin);
      total += coin;
    }
  });
  return changeAmt;
};
```
