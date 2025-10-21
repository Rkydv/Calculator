console.log("hello");
// const btn=document.querySelectorAll(".btn");
// const btn=document.getElementsByClassName("");
// let btn=document.querySelectorAll("button");
let btn=document.getElementsByTagName("button");
let out=document.querySelector(".rslt");
let curinp=' ';


function print(){
    out.innerHTML=" ";
    for(const rr of btn)
        {
            rr.addEventListener("click",()=>
            {
                console.dir(rr.innerText);
                if(rr.innerText=="AC")
                {
                    curinp=' ';
                }
                else if(rr.innerText=="DEL")
                {
                    curinp=curinp.slice(0,-1);
                }
                else{
                curinp+=rr.innerText;


                }
                out.innerText=curinp;

            })
            

                 
        }
}
print();

// btn.addEventListener("click",()=>{
//     print();
// })


// console.log(btn);
// btn.addEventListener("click",()=>
// {
//         for(let bt of btn)
//     {
//         console.log(bt.innertext);
//     }
// })



// btn.addEventListner("click",()=>{
//     for(let bt of btn)
//     {
//         console.log(bt.innertext);
//     }
// })


// btn.forEach(()=> {
//     btn.addEventListener('click', function() {
//         // Your event handling logic
//     }
//     );
// })