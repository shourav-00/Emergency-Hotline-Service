// const { createElement } = require("react");

function spendmoney(ServiceName,CallNum){
    let CoinCount=parseInt(document.getElementById("coin-count").innerText);
    if(CoinCount<20){
            alert("No sufficient Balanace!Please Recharge.")
            return false;
        }
    else{
        let result = confirm(`Are you sure you want to call ${ServiceName} on ${CallNum} ?`);
        if(result) {
        console.log("User confirmed!");
        CoinCount-=20;
        document.getElementById("coin-count").innerText=CoinCount;
           if(CoinCount<20){
            alert("Balance is too low! You need to Recharge.");
        } 
        return true;
       } 
       else{
        return false;
       }
    } 
    
    
}
function copycount(){
    let Ccount=parseInt(document.getElementById("copy-count").innerText);
    Ccount++;
    document.getElementById("copy-count").innerText=Ccount;


}



const Calling=document.getElementsByClassName("call-btn");
for(const click of Calling){
    click.addEventListener("click",function(e){
        e.preventDefault();
        
        const img=click.parentNode.parentNode.children[0].children[0].src;
        
        const ServiceName=click.parentNode.parentNode.children[1].innerText;

        const CallNum=click.parentNode.parentNode.children[3].innerText;
        if(!spendmoney(ServiceName,CallNum)) return;
        
        const DivBox=document.getElementById("history");
        const newDiv=document.createElement("div");
        newDiv.innerHTML=`<div class="rounded-2xl bg-[#FAFAFA] p-2">
            <div>
                <img class="m-1" src="${img}" alt="">
                <h2 class="font-bold m-1">${ServiceName}</h2>
                <p class="m-1 font-bold">${CallNum}</p>
            </div>
            <div>
                ${new Date().toLocaleString()}

            </div>
    </div>`

     DivBox.append(newDiv);
            
    })
}

const Copy=document.getElementsByClassName("copy-btn");
for(const click of Copy){
    click.addEventListener("click",function(e){
    e.preventDefault();
    copycount();
})
}

//Copy-Paste Section
const CopyBtns=document.getElementsByClassName("copy-btn");

for (const btn of CopyBtns) {
    btn.addEventListener("click",function(e) {
        e.preventDefault();

      
        const cardDiv = this.closest("div.border-2");
        if (!cardDiv) return;

       
        const hotNumElem = cardDiv.getElementsByClassName("hot-num")[0];
        if (!hotNumElem) return;

        const hotNum = hotNumElem.innerText;

        // Copy to clipboard
        navigator.clipboard.writeText(hotNum).then(function() {
            alert("Number copied: " + hotNum);
        }).catch(function(err) {
            console.error("Failed to copy: ", err);
        });
    });
}


const hearts=document.getElementsByClassName("heart-count");

for (const heart of hearts) {
    heart.addEventListener("click", function(e){
        e.preventDefault();

        const h2=document.getElementById("heart-count");
        let currentNum=parseInt(h2.innerText)||0;
        currentNum++;
        h2.innerText=currentNum;
    });
}

const clearBtn=document.getElementById("clear-btn");
const historyDiv=document.getElementById("history");

clearBtn.addEventListener("click", function() {
    historyDiv.innerHTML=""; 
});

