var encryption = document.querySelector(".encryptionRate");
var encryptionRate;
encryption.addEventListener("change", function(event) {
    if (this.value > 25 || this.value < 1) {
        this.value = 3;
    }
    encryptionRate = this.value;
});

var encrypt = document.getElementById("btnEncrypt");
encrypt.addEventListener("click", function(event){
    event.preventDefault();

    const str = document.getElementById("textEncrypt").value;

    if (str.length == 0) {
        return;
    }

    var action = new Action(str, encryptionRate);
    mount("encrypt", ".tbodyEncrypt", action);
});

var decrypt = document.getElementById("btnDecrypt");
decrypt.addEventListener("click", function(event) {
    event.preventDefault();

    const str = document.getElementById("textDecrypt").value;

    if (str.length == 0) {
        return;
    }

    var action = new Action(str, encryptionRate);
    mount("decrypt", ".tbodyDecrypt", action);
});

function mount(action, query, object) {
    var tbody = document.querySelector(query);
    var td = document.createElement("td");
    td.textContent = object.magic(action);
    var tr = document.createElement("tr");
    tr.appendChild(td);
    tbody.appendChild(tr);
}
