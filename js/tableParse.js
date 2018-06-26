"option strict"
var users = [
    { id:1, username:"sa", password:"sa", lastname:"admin", isAdmin:true, active: true },
    { id:2, username:"aa", password:"aa", lastname:"Amos", isAdmin:false, active: true },
    { id:3, username:"bb", password:"bb", lastname:"Badin", isAdmin:true, active: false },
    { id:4, username:"cc", password:"cc", lastname:"Cory", isAdmin:false, active: false },
    { id:5, username:"dd", password:"dd", lastname:"Dugan", isAdmin:true, active: true }
    ];


function loaded() {
    var tbody = document.getElementById("tbody")
    var key
    for(var idx = 0 ; idx<users.length; idx++) {
        var newTr = document.createElement("tr");
        var user = users[idx];
        for(key in user) {
            var newTd = document.createElement("td");
            newTd.textContent = user[key];
            newTr.appendChild(newTd);
        }
        tbody.appendChild(newTr);
    }

}