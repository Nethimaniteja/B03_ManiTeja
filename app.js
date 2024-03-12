let contactsBtn = document.getElementById("contactsBtn");
let groupsBtn = document.getElementById("groupsBtn");

let contacts = document.getElementById("contacts");
let groups = document.getElementById("groups")
console.log("asd")

contactsBtn.addEventListener("click",function(){
    contacts.style.display = "block"
    groups.style.display = "none"
    contactsBtn.style.backgroundColor = 'white';
    groupsBtn.style.backgroundColor = 'transparent';

})

groupsBtn.addEventListener("click",function(){
    contacts.style.display = "none"
    groups.style.display = "block"
    groupsBtn.style.backgroundColor = 'white';
    contactsBtn.style.backgroundColor = 'transparent';
})