# Queen
### Welcome to Queen
Queen is a JavaScript ES6 language with pattern matching and first class functions, a la OCaml.

### Features
* Emoji keywords
* First class functions
	* higher order functions
	* anonymous functions
* Pattern matching
* no while loops (pattern matching instead)
* no for loops (pattern matching instead)


👑 - start a function <br>
🖨 - print <br>
😡 - error message <br>
🕳 - _ / else <br>
🚀 - = <br>
🍭 - | <br>
🤔 - if <br>
❗️- not <br>
💁🏼 - || <br>
🍽 - None <br>
🍝 - Some <br>
⚡️ - cons <br>

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
👑 myRecursiveFunction n 🚀
    match n with
    🍭 n 🤔 n > 0   → myRecursiveFunction n - 1
    🍭 🕳               → n
```

JS:
```
myRecursiveFunction = (n) => {
	if (n > 0) {
		return myRecursiveFunction(n-1);
} else {
		return n;
}  
```

QUEEN:
```
👑 length l 🚀
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
Return c
}
```

QUEEN:
```
👑 reverse l 🚀
  match l with
  🍭 []     →  []
  🍭 hd ⚡️ tl →  reverse(tl) @ [hd]
```

JS:
```
let fruits = [‘strawberries’, ‘bananas’, blueberries’, ‘raspberries’];
let reversed = fruits.reverse();
```
