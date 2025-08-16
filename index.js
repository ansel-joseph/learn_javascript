
let game_num = 23;

for(i=0; i=10; i++){
    user=prompt("Guess the number");
    if(user==game_num){
        console.log("You're guess is correct");
        break;
    }else{
        console.log("You're guess is wrong");
    }
}
    