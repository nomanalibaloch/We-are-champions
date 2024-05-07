import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
const appSettings={
    databaseURL:"https://champion-8344b-default-rtdb.firebaseio.com/"
}
const app=initializeApp(appSettings)
const database=getDatabase(app)
const messagesInDB=ref(database,"messages")

const input=document.getElementById("input-el");
const btn=document.getElementById("btn-el");
const listEL=document.getElementById("list");
btn.addEventListener("click",function(){
    let value=input.value;
    push(messagesInDB,value)
})
function addToHTMl(itemvalue){
    listEL.innerHTML+=`<li>${itemvalue}</li>`;
}
onValue(messagesInDB,function(snapshot){
    let messages=Object.values(snapshot.val());
    input.textContent="";
    for(let i=0;i<messages.length;i++){
        addToHTMl(messages[i]);
    }
}
    
)
