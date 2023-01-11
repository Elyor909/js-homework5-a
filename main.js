let users= {}

for(let i = 1; i <= 10; i++) {
    let userName = prompt('Введите имя');
    let userAge = +prompt('Введите возраст'); 
    users[i] = {
        name: userName, 
        age: userAge
    }
}

for(let key in users) {
    console.log(`Пользователь ${key}`);
    console.log(`Ваше имя ${users[key].name}`);
    console.log(`Ваш возраст ${users[key].age}`);
}

console.log(users);