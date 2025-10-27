# WebTech_FarmerGame

1. To run the game you must run the index.html file, I used the liver server feature on VS code to achive this.

2. (a) Give one example where using an arrow function was required to preserve the
correct this.

if (this.ui.start) this.ui.start.addEventListener("click", () => this.start());

Using an arrow function here makes sure that the `this` stays as a game instance this way we can call on this.start()

(b) Give one example where bind was more appropriate than an arrow function, and
explain why.

this._onKeyDown = this.onKeyDown.bind(this);
this._onKeyUp = this.onKeyUp.bind(this);

3. The feature I implemented was different types of objects that can be gathered and how much they are worth, also a higher spawn rate 
    later on in the time limit of the game.