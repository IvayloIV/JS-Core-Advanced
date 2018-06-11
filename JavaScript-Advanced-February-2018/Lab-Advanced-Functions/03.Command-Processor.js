function solve(commands) {
    let process = (function() {
       let text = "";
       
       return function totalProc(command) {
           let commandTokens = command.split(' ');

           if (commandTokens[0] == 'append'){
               text += commandTokens[1];
           } else if (commandTokens[0] == 'removeStart'){
               text = text.slice(Number(commandTokens[1]));
           } else if (commandTokens[0] == "removeEnd"){
               text = text.slice(0, text.length - Number(commandTokens[1]));
           } else if (commandTokens[0] == "print"){
               console.log(text);
           }
       }
    })();

    for(let element of commands){
        process(element);
    }
}
solve(['append hello',
'append again',
'removeStart 3',
'removeEnd 4',
'print']
);