import React, {useState} from 'react';
import './calc.css';
import * as math from 'mathjs';



export default function Calculator() {
 
 const [num , setNum]=useState(0)
 const[oldnum,setOldNum]=useState()
 const[operator, setOperator]=useState()

 
function inputNum (e){
  const input=e.target.value
  if(num=="0"){
    setNum(input)
  }
  else{
    setNum(num + input)
  }
}
function clear (){
  setNum(0)
  setOldNum(0)
  
}
function changeSign (){
  if(parseFloat(num)>0){
    setNum(-num)
  }
  else{
    setNum(Math.abs(num))
  }
}
function porcentagem (){
  setNum(num/100)
}

function operatorHandler(e) {
  let operatorinput = e.target.value
  setOperator(operatorinput)
  setOldNum(num)
  setNum(0)
 
}
function EBOB1(a,b) {
  while (a!==b){
      if(a>b){
        a=a-b
      }
      else{
        b=b-a
      }
      
  }
  return a
  
}
function numToString(a) {
  let nString=a.toString()
  let result = nString.slice(0,nString.length-1)
  return result
}
function backSpace() {
  
  if(isNaN(num)){
    
  setNum(num.slice(0,num.length-1))
  
  }
  else{
    setNum(numToString(num))
  }
}

function sadeVuruq(a) {
 let k=parseFloat(a)
  const b=[]
  let d=2
 while(d <= k) {
  if (k % d===0) {
  b.push(d)
  k=k/d
}
else {
  d=d+1
}
 }
let c=``
for (let index = 0; index < b.length; index++) {
  c+=`${b[index]}*`
  
}
console.log(b)
return c.slice(0,-1)
 
  
}

function calculate (){
    setOldNum(num)
  
  if (operator === "/") {
    setNum(parseFloat(oldnum) / parseFloat(num));
} else if (operator === "X") {
    setNum(parseFloat(oldnum) * parseFloat(num));
} else if (operator === "-") {
    setNum(parseFloat(oldnum) - parseFloat(num));
}else if (operator === "+") {
    setNum(parseFloat(oldnum) + parseFloat(num));
}else if (operator === "EBOB") {
  setNum(EBOB1(parseFloat(oldnum),parseFloat(num)));
}else if (operator === "EKOB") {
  setNum((parseFloat(oldnum)*parseFloat(num))/EBOB1(parseFloat(oldnum),parseFloat(num)));
}else if (operator === "SadeVuruq") {
  setNum(sadeVuruq(oldnum));
 } else if (operator === "pow") {
    setNum(parseFloat(num)*parseFloat(num));
  }else if (operator === "sqrt") {
    setNum(math.pow(parseFloat(num),0.5));
  }else if (operator === "!") {
    setNum(rFact(num));
  }


   
}

function rFact(a)
{
    if (a === 0)
      { return 1; }
    else
      { return a * rFact( a - 1 ); }
}


return (
  <div>
      
      <div maxWidth="xs">
          <div className='wrapper'>
            
              <div className="screen">
              <div className='resultado oldnum' onClick={operatorHandler}>{oldnum}</div>
              <div className='resultado'>{operator}</div>
              <div className='resultado'>{num}</div>
              </div>
              <div className="buttonBox">
              <button className='main' onClick={clear}>AC</button>
              <button className='main' onClick={changeSign}>+/-</button>
              <button className='main'  onClick={backSpace}>C</button>
              <button className='main'  onClick={porcentagem}>%</button>
              <button className='black' onClick={operatorHandler} value={'!'}>!</button>
              <button className='black' onClick={operatorHandler} value={'pow'}>x<sup>2</sup></button>
              <button className='black' onClick={operatorHandler} value={'sqrt'}>sqrt</button>
              <button className='black' onClick={operatorHandler} value={'/'}>/</button>
              <button className='black' onClick={operatorHandler} value={'EBOB'}>əb<br></br>ob</button>
              <button className='black' onClick={operatorHandler} value={'EKOB'}>ək<br></br>ob</button>
              <button className='black' onClick={operatorHandler} value={'SadeVuruq'}>s<br></br>v</button>
              <button className='black' onClick={operatorHandler} value={'X'}>X</button>
              <button className='grey' onClick={inputNum} value={9}>9</button>
              <button className='grey' onClick={inputNum} value={8}>8</button>
             
              <button className='grey' onClick={inputNum} value={7}>7</button>
              <button className='black' onClick={operatorHandler} value={'-'}>-</button>
              <button className='grey' onClick={inputNum} value={6}>6</button>
              <button className='grey' onClick={inputNum} value={5}>5</button>
              
              <button className='grey' onClick={inputNum} value={4}>4</button>
              <button className='black' onClick={operatorHandler} value={'+'}>+</button>
              
              <button className='grey' onClick={inputNum} value={2}>2</button>
              <button className='grey' onClick={inputNum} value={3}>3</button>
              <button className='grey' onClick={inputNum} value={1}>1</button>
              <button className='black exit' onClick={calculate}>=</button>
              <button className='grey zero' onClick={inputNum} value={0}>0</button>
              <button className='grey' onClick={inputNum} value={"."}>,</button>
              </div>
          </div>
      </div>
  </div>
)
}