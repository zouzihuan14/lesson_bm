// 从面向对象聊继承
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(null);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
//   me.printIntroduction();
  console.log(me.__proto__)  // undefined
  console.log(me.__proto__===Object.prototype.prototype)
  
  // expected output: "My name is Matthew. Am I human? true"