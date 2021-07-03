// データ型
let name = "せいじ"
console.log("こんにちは"+ name + "くん");

let number = 1
console.log(number+2);
// 3

let d_number = "1"
console.log(d_number+"2")
// 12

let t = true
// let f = false

let text = ""
number = 0

if(text){
  console.log('true');
}else{
  console.log('false');
}

// 関数>()
const f = function(x){
  return x+10
}
y=f(100)
console.log(y)

// 配列＝入れ物のようなもの>[]
let array = ["せいじ","さっきー","とうや"]
console.log(array[1]);

// オブジェクト>{}
let obj = {
  name:"せいじ",
  age:22,
  mentor:true
}
console.log(obj.name);

const toya = {
  name: 'とうや',
  university: '慶應',
  age: 22,
  hobby: ['サウナ', '料理'],
  familly: {
    papa: '武',
    mama: 'ひとみ',
  },
  isMentor: true,
  sayHello: function () {
    alert(`こんにちは${this.name}です!!`)
  },
}

// DOM => Docment Object Model
const TITLE = document.getElementById("title")
TITLE.onclick = function(){
  alert("タイトルをクリックした！！")
}
console.dir(TITLE)