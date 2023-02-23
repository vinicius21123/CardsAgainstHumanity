let card1 = ['What never fails to liven up the party?','High five,bro.','Betcha cant have just one!','im not like the rest of you. im too rich and too busy for ',
'Daddy, why is mommy crying?','the value in exploring taboo subject is','I got 99 problems but _____ aint one'];
let card2 = ['incest.','magnets','dead parents','consent','friction','a big black dick','explaining ejaculation'];


const createNewMessage = (arr1,arr2)=>{
    let random1 = Math.floor(Math.random()* arr2.length)
    console.log(random1);
    let random2 = Math.floor(Math.random() * arr2.length)
    return console.log(`${arr1[random1]} ${arr2[random2]}`)
}
console.log('Welcome to Cards against HUMANITY');
createNewMessage(card1,card2);
console.log('Hello World');