const button = document.querySelector('button');
// 型キャストでnull値にはならない前提であると宣言
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

// 関数の引数として与える変数の型を明示
function add(num1:number,num2:number) {
    return num1 + num2
}

button.addEventListener('click', function(){
    console.log(add(+input1.value, +input2.value));
});