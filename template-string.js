const priya = 'Asif Akbar';
const meye =  "Meye tumi ki dukkho chino";
const kobita = `kobita tumi  sopno charini`;
const muliLine = 'This is my first line \n'+ 
'this is my second line \n'+
'third line text here\n'+
'fourth line text here';

const multiLineNew = `this is the multiline 
this is second line 
this is third line 
fourth line `;

const friend = ['abul', 'babul', 'kabul', 'sabul']
// old sistem
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>';
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const new1 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new2 = `<h3 class="friend-name">Friend-${friend.length}</h3>`;

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = first + ' '+ last;
const fullNew = `This person name is${first} ${last}.Has money ${(friend.length+10)*500}. He lives in Dhaka. `;
console.log(fullNew);