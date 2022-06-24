//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные в массив, а затем формировать карточки работников с полученной информацией.

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода почты. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода прогресса. Выведите прогресс в карточку.

const formElem = document.querySelector(".workers_form");
let workerArr =[];

formElem.addEventListener("submit" , (event)=>{
event.preventDefault();
const{ firstname, lastname, age}= event.target; // this

workerArr.push({
 firstname:firstname.value,
 lastname: lastname.value,
 age: age.value,

})
firstname.value ="";
lastname.value ="";
age.value ="";
console.log(workerArr);
})