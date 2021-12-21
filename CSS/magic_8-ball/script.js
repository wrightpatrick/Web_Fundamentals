var answer = document.getElementById("answer");
var conch = document.getElementById("conch");

function roll8ball(){
    if(InputEvent. value==!""){
    conch.src = "img/conchgif.gif";
    answer.innerText = "hmmmmm...";
    setTimeout(finishAnswer, 3500);}
    else answer.innerText = "you must ask to receive"
}

function finishAnswer(){
    conch.src = "img/conchpic.png"
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    var roll = Math.floor(Math.random() * lifesAnswers.length);
    
    answer.innerText = lifesAnswers[roll];
}
// setTimeout(magic8ball, 2000)


//animate the gif
//change answer to say "calculating"
//wait 2 seconds
//change img back to still
//post answer
//