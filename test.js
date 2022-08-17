// let str='123';
// alert( typeof str);
// let num=Number("здесь что-то");
// alert(num);

// let quiz = prompt('Самое большое млекопитающее?', '');
// if(quiz=='кит') {
//     alert('Вы правы!');
// } else if(quiz=='Кит'){
//     alert('верный ответ!')
// }
// else{alert('Попробуй еще раз')};

// let age = prompt('Сколько вам лет?','');
// let message = (age<=18)? 'Привет, малыш':
// (age<60)? 'Здравствуйте':
// (age<100)?'Мое почтение':
// 'Какой интересный возраст'
// alert(message);

// let logo = prompt('Какое «официальное» название JavaScript?', '');
// if(logo=='ECMAScript') {alert('Верно!')
// } else{alert('Не знаете? ECMAScript!')};

// let login = prompt('Логин?', '');
// let message=(login == 'Сотрудник')? 'Привет':
// (login == 'Директор')? 'Здравствуйте':'Нет логина';

// alert(message);

// let login = prompt('Логин?', '');
// if(login=='Админ'){ let password=prompt('Пароль?', '')
//     let message=(password=='Я Главный')? 'Здравствуйте!':
//     (password===''|| password===null)? 'Отменено': 'Неверный пароль';
//     alert(message);
// } 
// else if(login===''|| password===null){alert('Отменено');
// }
// else{alert('Я вас не знаю');};//Не работает часть где вводится неверный пароль!!!

// for(let i; i<=100||i==null; i = + prompt('Введите число больше 100', '')){};

// let n=13
// nextPrime:
// for(let i=2; i<=n; i++){
//     for(let j=2; j<i; j++){
//         if (i % j == 0) continue nextPrime};
// console.log(i)
// }

// let browser = prompt('Choose your browser','Chrome')
// if (browser=='Edge'){alert("You've got the Edge!")}
// else if(browser=='Chrome'||browser=='Firefox'||browser=="Safari"){alert('Okay we support these browsers too');}
// else {alert("We hope that this page looks ok!")};

// function pow(x,n){
//     return x**n;
// };

// let x = +prompt('x?','');
// let n = +prompt('n?', '');

// if(n<1){alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// }else{
//     alert( pow(x,n));
// }

// let x = + prompt('x?','');
// let y = + prompt('y?','');

// function sum(){
//     return x+y
// };
// alert(sum());

// function readNumber(){
//     let x
//     do{
//         x=prompt('Число?', '0');
//     } while (!isFinite(x));
//     if(x===null||x==='') return null;
//     return +x;
// }
// alert(`Число ${readNumber()}`);

// function checkSpam(str){
//     let lowerStr=str.toLowerCase();
//     return lowerStr.includes('viagra')||lowerStr.includes('xxx');
// }
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// function ucFirst(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
//   }
//   alert( ucFirst("вася") );

// function truncate(str, maxlength){
//     if(str.length<maxlength) return str;
//     return str.slice(0,20) + '…';
// }
// alert( truncate("Всем привет!", 20) );

// function extractCurrencyValue(str){
//     return str.slice(1)
// }
// alert( +extractCurrencyValue('$120') === 120)

// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// alert( styles.shift() );
// styles.unshift("Рэп", "Регги");

// function sumInput(){
//     let numbers=[];

//     while(true){
//         let value = prompt('Введите число', '0');
//         if(value===''|| value===null|| !isFinite(value)) break;
//         numbers.push(+value);
//     }

//     let sum=0;
//     for(let number of numbers){
//         sum = sum + number;
//     } return sum;
// }
// alert( sumInput() );


// function camelize(str){
//     return str
//     .split('-')
//     .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slise(1)
//     )
//     .join('');
// }
// alert(camelize('background-color'));

// let obj = {
//     name: "John",
//     surname: "Smith",
// }
// let obj.name = "Pete";
// delete obj.name


// function isEmpty(obj){
//     for(let key in obj){ return false // если тело цикла начнет выполняться - значит в объекте есть свойства
//     } 
//     return true;
// } 

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
// for(let key in salaries){
//     sum=sum+salaries[key]
// };
// alert(sum);


// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
// function multiplyNumeric(menu) {
//     for (let key in menu) {
//       if (typeof menu[key] == 'number') {
//         menu[key] *= 2;
//       }
//     } return key;
//   };
  
// alert(menu[key])

// function unique(arr) {
//     return Array.from(new Set(arr))
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   alert( unique(values) );

// function aclean(arr){
//     let map = new Map();
//     for(let word of arr){
//         let sorted = word.toLowerCase().split('').sort().join("");
//         map.set(sorted, word)
//     } return Array.from(map.values())
// }
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert(aclean(arr));

// let user = {
//     name: "John",
//     years: 30
//   };
// let{name, years:age, isAdmin = false} = user;


// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin );

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
function topSalary(salaries){
    let max = 0;
    let maxName = null;

    for(const[name,salary] of Object.entries(salaries)){
        if(max<salary){
            max=salary;
            maxName=name
        }
    } return (maxName)
}