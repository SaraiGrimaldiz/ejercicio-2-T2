
function solution(number){
    // Completar la función
    for (let i = 1; i <= numero; i++) {
        let output = '';
        if (i % 3 === 0) {
          output += 'Fi';
        }
        if (i % 5 === 0) {
          output += 'bus';
        }
        if (output === '') {
          output = i;
        }
        console.log(output);
      }


}

function eventHandler(event){
    event.preventDefault();
    let number = document.getElementById("number").value;
    solution(number);
}

// tests