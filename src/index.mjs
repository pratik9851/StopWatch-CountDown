import "./styles.css";

let startBtn= document.getElementById('start')
let pauseBtn= document.getElementById('pause')
let resetBtn= document.getElementById('reset')
let countDownBtn= document.getElementById('countdown')

let hour=0;
let minute=0;
let second=0;
let count= 0;

let timer=false;
let reverseCount=false;


startBtn.addEventListener('click',()=>{
 timer=true
 stopWatch()
})

pauseBtn.addEventListener('click',()=>{
  timer=false
 })

 resetBtn.addEventListener('click',()=>{
  timer=false
   hour=0;
 minute=0;
 second=0;
 count= 0;

 document.getElementById('hr').innerHTML='00'
 document.getElementById('min').innerHTML='00'
 document.getElementById('sec').innerHTML='00'


 })

 countDownBtn.addEventListener('click',function(){

 
  timer=false;
  
  reverseCount=true;
  reverseStopWatch()
 })


 


 function stopWatch(){
   
    if(timer){
      count++
      if(count>= 100){
        second++;
        count=0;
      }
      if(second>=60){
        minute++;
        second=0;
        count=0;
      }
      if(minute>=60){
        hour++;
        minute=0;
        second=0;
        count=0;
      }

      let hr=hour
      let mint=minute
      let scnd= second
      if(hour<10){
        hr='0'+hr
      }
      if(minute<10){
        mint='0'+mint
      }
      if(second<10){
        scnd='0'+second
      }


      document.getElementById('hr').innerHTML=hr
      document.getElementById('min').innerHTML=mint
      document.getElementById('sec').innerHTML=scnd
      setTimeout(stopWatch,10)

    }



 }


 function reverseStopWatch(){
   let timeoutId

  if(reverseCount){
  count--
      if(count === 0){
        if(second!==0){
        second--;
        count=100;
        }
      }
      if(second===0){
        if(minute!==0){
        minute--;
        second=60;
        count=100;
        }
        
      }
      if(minute===0){
        if(hour!==0){
        hour--;
        minute=60;
        second=60;
        count=100;
        }
      }
      let hr=hour
      let mint=minute
      let scnd= second
      if(hour<10){
        hr='0'+hr
      }
      if(minute<10){
        mint='0'+mint
      }
      if(second<10){
        scnd='0'+second
      }
      if(hour===0&& minute===0&& second===0){
        reverseCount=false
        timer=false
        clearTimeout(timeoutId)
      }
      document.getElementById('hr').innerHTML=hr
      document.getElementById('min').innerHTML=mint
      document.getElementById('sec').innerHTML=scnd
     timeoutId= setTimeout(reverseStopWatch,10)


}




 }