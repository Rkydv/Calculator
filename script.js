console.log("hello");
// const btn=document.querySelectorAll(".btn");
// const btn=document.getElementsByClassName("");
// let btn=document.querySelectorAll("button");
let btn=document.getElementsByTagName("button");
let out=document.querySelector(".rslt");
let curinp=' ';
let curopr="";
let result=null;


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
                else if(rr.innertext=="+"||rr.innertext=="-"||rr.innertext=="*"||rr.innertext=="/"){
                    curinp=rr.innertext;
                    curopr=rr.innerText;

                }
                else if(rr.innerHTML=="=")
                {
                    curinp=eval(curinp);
                    
                }
                else{
                curinp+=rr.innerText;


                }
                out.innerText=curinp;

            })
            

                 
        }
}
print();
