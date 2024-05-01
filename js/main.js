const canvas = document.querySelector('.canvas')

const T = [
  "|||||||||||||||||||||||||||||||||||||||||",
  "|||||||||||||||||||||||||||||||||||||||||",
  "||||||||||                     ||||||||||",
  "||||||||||                     ||||||||||",
  "||||||||||                     ||||||||||",
  "||||||||||                     ||||||||||",
  "||||||||||||||||         ||||||||||||||||",
  "||||||||||||||||         ||||||||||||||||",
  "||||||||||||||||         ||||||||||||||||",
  "||||||||||||||||         ||||||||||||||||",
  "||||||||||||||||         ||||||||||||||||",
  "||||||||||||||||         ||||||||||||||||",
  "|||||||||||||||||||||||||||||||||||||||||",
  "|||||||||||||||||||||||||||||||||||||||||",
];


const O = [
  "|||||||||||||||||||||||||||||||||||||||||",
  "|||||||||||||||||||||||||||||||||||||||||",
  "||||||||||                     ||||||||||",
  "||||||||||                     ||||||||||",
  "||||||||||     |||||||||||     ||||||||||",
  "||||||||||     |||||||||||     ||||||||||",
  "||||||||||     |||||||||||     ||||||||||",
  "||||||||||     |||||||||||     ||||||||||",
  "||||||||||     |||||||||||     ||||||||||",
  "||||||||||     |||||||||||     ||||||||||",
  "||||||||||                     ||||||||||",
  "||||||||||                     ||||||||||",
  "|||||||||||||||||||||||||||||||||||||||||",
  "|||||||||||||||||||||||||||||||||||||||||",

];

const P = [
  "|||||||||||||||||||||||||||||||||||||||||",
  "|||||||||||||||||||||||||||||||||||||||||",
  "||||||||||                     ||||||||||",
  "||||||||||                     ||||||||||",
  "||||||||||     |||||||||||     ||||||||||",
  "||||||||||     |||||||||||     ||||||||||",
  "||||||||||     |||||||||||     ||||||||||",
  "||||||||||                     ||||||||||",
  "||||||||||                     ||||||||||",
  "||||||||||     ||||||||||||||||||||||||||",
  "||||||||||     ||||||||||||||||||||||||||",
  "||||||||||     ||||||||||||||||||||||||||",
  "|||||||||||||||||||||||||||||||||||||||||",
  "|||||||||||||||||||||||||||||||||||||||||",
];


// const ass = [
// "⠄⠄⣿⣿⣿⣿⠘⡿⢛⣿⣿⣿⣿⣿⣧⢻⣿⣿⠃⠸⣿⣿⣿⠄⠄⠄⠄⠄",
// "⠄⠄⣿⣿⣿⣿⢀⠼⣛⣛⣭⢭⣟⣛⣛⣛⠿⠿⢆⡠⢿⣿⣿⠄⠄⠄⠄⠄",
// "⠄⠄⠸⣿⣿⢣⢶⣟⣿⣖⣿⣷⣻⣮⡿⣽⣿⣻⣖⣶⣤⣭⡉⠄⠄⠄⠄⠄",
// "⠄⠄⠄⢹⠣⣛⣣⣭⣭⣭⣁⡛⠻⢽⣿⣿⣿⣿⢻⣿⣿⣿⣽⡧⡄⠄⠄⠄",
// "⠄⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣶⣌⡛⢿⣽⢘⣿⣷⣿⡻⠏⣛⣀⠄⠄",
// "⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠙⡅⣿⠚⣡⣴⣿⣿⣿⡆⠄",
// "⠄⠄⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⣱⣾⣿⣿⣿⣿⣿⣿⠄",
// "⠄⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⠄",
// "⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠣⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄",
// "⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠑⣿⣮⣝⣛⠿⠿⣿⣿⣿⣿⠄",
// "⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄"
// ]



const all = [
"⠄⠄⠄⠄⠄⠄⠄⠄⢀⣠⣤⣴⣶⣶⣶⣶⣦⣤⣀⠄⠄⠄⠄⠄⠄⠄⠄⠄",
"⠄⠄⠄⠄⠄⢀⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠄⠄⠄⠄⠄⠄",
"⠄⠄⠄⠄⠄⣿⣿⣟⣡⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⡿⣿⣷⡄⠄⠄⠄⠄",
"⠄⠄⠄⠄⢸⣿⡿⠋⠄⠉⠛⠻⠿⠿⠿⠿⠟⠋⠛⠿⣿⡏⣿⣿⡄⠄⠄⠄",
"⠄⠄⠄⠄⣾⣿⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣾⣿⣾⣿⣧⠄⠄⠄",
"⠄⠄⠄⠄⣿⡇⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⣿⣿⣿⣿⠄⠄⠄",
"⠄⠄⠄⠄⣿⠣⠞⡛⢶⣦⡄⠄⠠⣤⣶⡿⠿⢷⣆⠄⠄⢨⣿⣿⣿⠄⠄⠄",
"⠄⠄⠄⠄⡿⠄⠼⠿⠿⣿⠟⠄⠁⢿⣾⣷⡟⢷⡅⠄⠄⠈⣿⣿⡏⠄⠄⠄",
"⠄⠄⠄⠘⡇⠄⠄⠄⠄⠉⠄⠄⠄⠈⠓⠄⠄⠄⠄⠄⠄⠄⠿⠛⣗⡀⠄⠄",
"⠄⠄⠄⡗⠇⠄⠄⠄⢠⢀⡇⠄⠄⡀⢲⠄⠄⠄⠄⠄⠄⠄⠄⣄⠸⠁⠄⠄",
"⠄⠄⠄⢱⡀⠄⠄⠔⢃⣤⡤⣦⣜⣽⣉⠱⡀⠄⠄⠄⠄⠄⠄⠛⢠⠂⠄⠄",
"⠄⠄⠄⠸⢷⠄⠄⣴⣯⣿⣿⣿⣿⣾⣿⣿⣆⠄⠄⠄⠄⢀⣄⣰⠃⠄⠄⠄",
"⠄⠄⠄⠄⢸⡈⠛⠿⠟⠋⢉⣭⣭⡉⠻⢿⣿⡧⠄⠄⠄⡞⠈⠁⠄⠄⠄⠄",
"⠄⠄⠄⠄⠄⠃⠄⠄⠄⠄⠈⠉⠉⠁⠄⠄⠄⠄⠄⢀⠆⡇⠄⠄⠄⠄⠄⠄",
"⠄⠄⠄⠄⢀⡾⣮⠂⠄⠄⠄⢀⣀⡀⠄⠄⠄⠄⠄⠄⢰⡇⠄⠄⠄⠄⠄⠄",
"⠄⠄⢀⡴⠋⠄⠘⢷⡀⠘⠛⠛⠛⠿⠋⠉⠁⠄⠄⢠⡾⠻⡄⠄⠄⠄⠄⠄",
"⠄⠄⣿⠄⠄⠄⠄⠄⠙⣦⡰⣄⣀⣀⠄⠄⠄⠄⢰⡿⠁⠄⠈⢢⠄⣀⠄⠄",
"⠄⠄⠈⡄⠄⠄⢠⢦⡀⠄⠉⠊⠝⡿⣧⣠⢄⣠⠾⠁⢠⡀⠄⠈⢷⢄⠄⠄",
"⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄",

'',
"",

"⣿⡇⣿⣿⣿⠛⠁⣴⣿⡿⠿⠧⠹⠿⠘⣿⣿⣿⡇⢸⡻⣿⣿⣿⣿⣿⣿⣿",
"⢹⡇⣿⣿⣿⠄⣞⣯⣷⣾⣿⣿⣧⡹⡆⡀⠉⢹⡌⠐⢿⣿⣿⣿⡞⣿⣿⣿",
"⣾⡇⣿⣿⡇⣾⣿⣿⣿⣿⣿⣿⣿⣿⣄⢻⣦⡀⠁⢸⡌⠻⣿⣿⣿⡽⣿⣿",
"⡇⣿⠹⣿⡇⡟⠛⣉⠁⠉⠉⠻⡿⣿⣿⣿⣿⣿⣦⣄⡉⠂⠈⠙⢿⣿⣝⣿",
"⠤⢿⡄⠹⣧⣷⣸⡇⠄⠄⠲⢰⣌⣾⣿⣿⣿⣿⣿⣿⣶⣤⣤⡀⠄⠈⠻⢮",
"⠄⢸⣧⠄⢘⢻⣿⡇⢀⣀⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡀⠄⢀",
"⠄⠈⣿⡆⢸⣿⣿⣿⣬⣭⣴⣿⣿⣿⣿⣿⣿⣿⣯⠝⠛⠛⠙⢿⡿⠃⠄⢸",
"⠄⠄⢿⣿⡀⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⡾⠁⢠⡇⢀",
"⠄⠄⢸⣿⡇⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣫⣻⡟⢀⠄⣿⣷⣾",
"⠄⠄⢸⣿⡇⠄⠈⠙⠿⣿⣿⣿⣮⣿⣿⣿⣿⣿⣿⣿⣿⡿⢠⠊⢀⡇⣿⣿",
"⠒⠤⠄⣿⡇⢀⡲⠄⠄⠈⠙⠻⢿⣿⣿⠿⠿⠟⠛⠋⠁⣰⠇⠄⢸⣿⣿⣿",

'',
"",

"⠄⠄⣿⣿⣿⣿⠘⡿⢛⣿⣿⣿⣿⣿⣧⢻⣿⣿⠃⠸⣿⣿⣿⠄⠄⠄⠄⠄",
"⠄⠄⣿⣿⣿⣿⢀⠼⣛⣛⣭⢭⣟⣛⣛⣛⠿⠿⢆⡠⢿⣿⣿⠄⠄⠄⠄⠄",
"⠄⠄⠸⣿⣿⢣⢶⣟⣿⣖⣿⣷⣻⣮⡿⣽⣿⣻⣖⣶⣤⣭⡉⠄⠄⠄⠄⠄",
"⠄⠄⠄⢹⠣⣛⣣⣭⣭⣭⣁⡛⠻⢽⣿⣿⣿⣿⢻⣿⣿⣿⣽⡧⡄⠄⠄⠄",
"⠄⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣶⣌⡛⢿⣽⢘⣿⣷⣿⡻⠏⣛⣀⠄⠄",
"⠄⠄⠄⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠙⡅⣿⠚⣡⣴⣿⣿⣿⡆⠄",
"⠄⠄⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⣱⣾⣿⣿⣿⣿⣿⣿⠄",
"⠄⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⠄",
"⠄⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠣⣿⣿⣿⣿⣿⣿⣿⣿⣿⠄",
"⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠑⣿⣮⣝⣛⠿⠿⣿⣿⣿⣿⠄",
"⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⠄⠄⠄⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄",

'',
"",

"⠄⠄⢀⡋⣡⣴⣶⣶⡀⠄⠄⠙⢿⣿⣿⣿⣿⣿⣴⣿⣿⣿⢃⣤⣄⣀⣥⣿⣿⠄",
"⠄⠄⢸⣇⠻⣿⣿⣿⣧⣀⢀⣠⡌⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⣿⣿⣿⠄",
"⠄⢀⢸⣿⣷⣤⣤⣤⣬⣙⣛⢿⣿⣿⣿⣿⣿⣿⡿⣿⣿⡍⠄⠄⢀⣤⣄⠉⠋⣰",
"⠄⣼⣖⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⢇⣿⣿⡷⠶⠶⢿⣿⣿⠇⢀⣤",
"⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣷⣶⣥⣴⣿⡗",
"⢀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠄",
"⢸⣿⣦⣌⣛⣻⣿⣿⣧⠙⠛⠛⡭⠅⠒⠦⠭⣭⡻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠄",
"⠘⣿⣿⣿⣿⣿⣿⣿⣿⡆⠄⠄⠄⠄⠄⠄⠄⠄⠹⠈⢋⣽⣿⣿⣿⣿⣵⣾⠃⠄",
"⠄⠘⣿⣿⣿⣿⣿⣿⣿⣿⠄⣴⣿⣶⣄⠄⣴⣶⠄⢀⣾⣿⣿⣿⣿⣿⣿⠃⠄",
"⠄⠄⠈⠻⣿⣿⣿⣿⣿⣿⡄⢻⣿⣿⣿⠄⣿⣿⡀⣾⣿⣿⣿⣿⣛⠛⠁⠄⠄",
"⠄⠄⠄⠄⠈⠛⢿⣿⣿⣿⠁⠞⢿⣿⣿⡄⢿⣿⡇⣸⣿⣿⠿⠛⠁⠄⠄",

'',
"",


"⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀ ⣀⣀⣤⣤⣤⣀⡀",
"⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀",
"⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆",
"⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆",
"⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆",
"⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠸⣼⡿",
"⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉",
"⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇",
"⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇",
"⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇",
"   ⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠇",
"⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇",
"⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃",


]








const arrays = [ all];

let tNum = 0;
let tIndex = 0;
let arrIndex = 0;
let num = 0;
let i = 0;
let arraysIndex = 0

function art() {
  inner = canvas.innerHTML;
  if (arrays.length > arraysIndex) {
    if(arrays[arrIndex].length > num){
    arr2 = (arrays[arrIndex])[tNum].split('');
    c = arr2[tIndex]
    if (arr2.length > i){
      canvas.innerHTML = inner + c
      i++
      tIndex++
      }else{
      canvas.innerHTML = inner + '<br>'
      i = 0;
      tIndex = 0;
      tNum ++
      num++
  }
  }else{
    arraysIndex++
    arrIndex++
    num = 0
    tNum = 0
    i = 0;
    tIndex = 0;
  }
  }else{
    clearInterval(timerId)
  }
  
  

}

let timerId = setInterval(() => art(), 10);