


const lightSlider = document.getElementById('light-slider');
const medSlider = document.getElementById('med-slider');
const darkSlider = document.getElementById('dark-slider');
const lightButt = document.getElementById('light-butt');
const medButt = document.getElementById('med-butt');
const darkButt = document.getElementById('dark-butt');
const calculator = document.getElementById("calculator")
const r = document.querySelector(':root')
const dot = document.getElementById("dot")



/* START COLOR SETTINGS */
const colors = [
    ['--calc-body',['#e6e6e6', '#3A4663', '#17062A']],
    ['--total-back', ['#eeeeee', '#181F33', '#1E0936']],
    ['--num-color', ['#36362c', '#434A59', '#FFE53D']],
    ['--num-butt', ['#e5e4e1', '#e5e4e1', '#331C4D']],
    ['--num-butt-hov', ['#ffffff', '#ffffff', '#6C34AC']],
    ['--num-shad', ['#a79e91', '#a79e91', '#881C9E']],
    ['--num-back', ['#d2cdcd', '#242D44', '#1E0936']],
    ['--equals-select', ['#c85402', '#c85402', '#00DED0']],
    ['--equals-txt', ['#ffffff', '#ffffff', '#1A2327']],
    ['--equals-hov', ['#ff8a38', '#F96B5B', '#93FFF8']],
    ['--equals-shad', ['#873901', '#873901', '#6CF9F1']],
    ['--resdel', ['#378187', '#647198', '#56077C']],
    ['--resdel-shad', ['#1b6066', '#414E73', '#BE15F4']],
    ['--resdel-hov', ['#62b5bc', '#A2B2E1', '#8631AF']],
    ['--total', ['#36362C', '#FFFFFF', '#FFE53D']]
];

function changeTheme(x) {
  colors.forEach((p) =>  r.style.setProperty(p[0], p[1][x]));
}

function lightMode() {
     changeTheme(0)
    dot.style.left ="5px"
    lightSlider.style.cursor = "default"
    medSlider.style.cursor = "pointer"
    darkSlider.style.cursor = "pointer"
}

function medMode() {
     changeTheme(1)
    dot.style.left ="25px"
    medSlider.style.cursor = "default"
    lightSlider.style.cursor = "pointer"
    darkSlider.style.cursor = "pointer"
}

function darkMode() {
     changeTheme(2)
    dot.style.left ="45px"
    darkSlider.style.cursor = "default"
    medSlider.style.cursor = "pointer"
    lightSlider.style.cursor = "pointer"
}

/* END COLOR SETTINGS */

lightSlider.addEventListener("click" , () => {
   lightMode()
})
medSlider.addEventListener("click" , () => {
    medMode()
})
darkSlider.addEventListener("click" , () => {
   darkMode()
})

lightButt.addEventListener("click" , () => {
   lightMode()
})
medButt.addEventListener("click" , () => {
    medMode()
})
darkButt.addEventListener("click" , () => {
   darkMode()
})



if (window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
     darkMode();
}
window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
          console.log(event.matches)
  if (event.matches) {
      darkMode();
  } else {
      lightMode();
  }
})





/* LOGIC */


const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const zero = document.getElementById("zero")
const period = document.getElementById("period")
const divide = document.getElementById("divide")
const times = document.getElementById("times")
const reset = document.getElementById("reset")
const del = document.getElementById("del")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const equals = document.getElementById("equals")
const result = document.getElementById("result")


let setEqual = false;
let calcInput = []
let holder = ""
function calculate(x) {
    if (setEqual == true && (x == "+" || x == "-" || x == "*" || x == "/")) {
        calcInput.push(result.innerHTML) 
        setEqual = false;
    }
    console.log("CalcInput",calcInput)  
     console.log("holder", holder)  
         
    if (holder.length == 0 && x == "-" || x == "+") { 
        if (x == "-") {
            holder == "-"
        }
        
    }

   if ((x >= 0 && x <=9 )|| x == ".") {
       holder += x
       result.innerHTML = holder;
   } else {
      if (holder.length > 0) {
          calcInput.push(holder);
      } 
      
      holder = ""
   
    if (x == "=") {
        setEqual = true
        result.innerHTML = eval(calcInput.join(""));
        calcInput = [];
    } else if (x == "R"){
        result.innerHTML = "reset"
        calcInput = [];
    } else if (x == "D") {
        calcInput.pop()
        let show = [...calcInput]
        result.innerHTML = show
    
    } else if (x == "-" || x == "+" || x == "/" || x == "*") {
        let compareVal = calcInput[calcInput.length - 1]
        if (compareVal = x) 
        calcInput.push(x)
    }
   }
    console.log("CalcInput",calcInput)  
     console.log("holder", holder) 
};

one.addEventListener("click", (e)=> {
    calculate(1)
});

two.addEventListener("click", (e)=> {
    calculate(2);
});

three.addEventListener("click", (e)=> {
    calculate(3);
});

four.addEventListener("click", (e)=> {
    calculate(4);
});

five.addEventListener("click", (e)=> {
    calculate(5);
});

six.addEventListener("click", (e)=> {
    calculate(6);
});

seven.addEventListener("click", (e)=> {
    calculate(7);
});

eight.addEventListener("click", (e)=> {
    calculate(8);
});

nine.addEventListener("click", (e)=> {
    calculate(9);
});

zero.addEventListener("click", (e)=> {
    calculate(0);
});

reset.addEventListener("click", (e)=> {
    calculate("R");
});

del.addEventListener("click", (e)=> {
    calculate("D");
});

period.addEventListener("click", (e)=> {
    calculate(".");
});

divide.addEventListener("click", (e)=> {
    calculate("/");
});

plus.addEventListener("click", (e)=> {
    calculate("+");
});

minus.addEventListener("click", (e)=> {
    calculate("-");
});

times.addEventListener("click", (e)=> {
    calculate("*");
});

equals.addEventListener("click", (e)=> {
    calculate("=");
});


