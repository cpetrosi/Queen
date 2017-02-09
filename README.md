
# Queen
### Welcome to Queen
Queen is a JavaScript ES6 language with pattern matching and first class functions, a la OCaml. Queen is designed for the programming of the future. Coders everywhere can create and complete projects on their mobile smartphones while enjoying the expressiveness of emojis. Queen is also a great way to excite kids about computer science, once they see how fun and creative it can be! We hope you enjoy seeing your functions come to life as much as we do!

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

### Syntax
```
QUEEN {
    Program = (FunDecl)+
    FunDecl = "👑" id+ "🚀" Body
    Body = Exp                          --exp
           | Closure                    --closure
    Exp = "🖨" string                   --print
          | Binop                       --binop
          | Conditional                 --conditional
          | Match                       --match
          | "(" Exp ")"                 --parens
          | id "⚡️" id                  --cons
          | "🕳"                        --wild
          | id                          --id
          | string                      --string
          | numlit                      --numlit
    Match = "match" id "with" ("🍭" Exp "->" Exp)+
    Closure = "let" id "🚀" Exp "in" Closure --closure
              | Exp                    --exp
    Binop = Exp1 addop Binop           --add
            | Exp1                     --exp
    Exp1 = Exp2 mulop Exp1             --mult
           | Exp2                      --exp
    Exp2 = "-"? Exp3
    Exp3 = numlit("!")?
    Conditional = "🤔" Exp "then" Exp ("else🤔" Exp "then" Exp)* ("else" Exp)?
    id = ~keyword letter idrest*
    idrest = letter                    --letter
             | digit                   --digit
             | "_"                     --underscore
             | "@"                     --at
             | "$"                     --dollar
    keyword = ("👑" | "🚀" | "🖨" | "⚡️" | "🕳" | "match" | "with" | "🍭" | "->" | "let" | "in" | "🤔" | "else🤔" | "then" | "else")
    char =  escape
            |  ~"\\" ~"\"" ~"\'" ~"\\n" any
    escape =  "\\\\" | "\\\"" | "\\'" | "\\n" | "\\t"
              |  "\\u{" hexDigit+ "}"   -- codepoint
    charlit =  "'" (char | "\"") "'"
    string =  "\"" (char | "\'")* "\""
    numlit = digit+ ("."digit+)? ("^"digit+)?
    addop = "+"                        --add
            | "-"                      --sub
    mulop = "*"                        --mult
            | "/"                      --div
    comment = "//" (~"\n" any)* "\n"
}
```

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
	return c
}
```

QUEEN:
```
👑 reverse l 🚀
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
👑 change n 🚀
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
