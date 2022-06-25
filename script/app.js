//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные в массив, а затем формировать карточки работников с полученной информацией.

//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода почты. Карточки должны включать отображение фотографии.

//Добавьте к форме поле ввода прогресса. Выведите прогресс в карточку.

const formElem = document.querySelector(".workers_form");
let workerArr =[];
const cardsrender =()=>{
 const  cardscontainer= document.querySelector(".cardscontainer");
 cardscontainer.innerText="";
 workerArr.forEach(({firstname,lastname,age, rate, days, image, email, progress})=>{
  const container = document.createElement("div");
  const firstnameelem = document.createElement("p");
  const lastnameElem = document.createElement("p");
  const ageElem= document.createElement("p");
const salaryElem = document.createElement("P");
const photoElem =document.createElement('img');
const emailElem= document.createElement('a');
const progElem = document.createElement("div");
const progValue= document.createElement("p");

let salary = rate*days;

container.classList.add("cont");
progValue.classList.add("prog");

  firstnameelem.innerText = `first name:  ${firstname}`;
  lastnameElem.innerText = `last  name:   ${lastname}`;
  ageElem.innerText = ` age:  ${age}`;
  salaryElem.innerText =` salary: ${salary}`;
  emailElem.innerText = `email: ${email}`;
  progValue.innerText =progress +"%";
 
  progValue.style.width =progress+"%"

photoElem.setAttribute("src", image);
photoElem.setAttribute('alt', "photo of worker");

progElem.append(progValue);
  container.append(photoElem,  firstnameelem, lastnameElem,ageElem, salaryElem, emailElem, progElem);
  cardscontainer.append(container);
 })
};

formElem.addEventListener("submit" , (event)=>{
event.preventDefault();
const{image, firstname, lastname, age, rate, days, email, progress }= event.target; // this

workerArr.push({
 firstname: firstname.value,
 lastname: lastname.value,
 age: age.value,
 rate: rate.value,
 days: days.value,
 image: image.value,
 email: email.value,
 progress: progress.value,

})
firstname.value ="";
lastname.value ="";
age.value ="";
rate.value ="";
days.value = "";
image.value = "";
email.value ="";
progress.value ="";
cardsrender();
});