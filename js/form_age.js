document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded")
    let prenom, target, age, date, date_nassance, validé
    validé = '\u2714'
    let target_2 =document.querySelector ("section")
    date = new Date()
    date = date.getFullYear()
    target = document.querySelector("p")
    const User = {
        construct(age, prenom) {
            this.age = age;
            this.prenom = prenom;
        },
        printOut() {
            let valeurs = `${this.age} ${this.prenom}`;
            return valeurs;
        }
    };
    let submit = document.getElementsByTagName("input")[2];
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        let user = Object.create(User);
        user.construct(age = document.getElementById("age").value, prenom = document.getElementById("prenom").value)
        date_nassance = date - user.age
        if (!prenom && !age) {
            target.innerText = "veuillez remplir les champs"
            target_2.classList.add("warning")
        }
        else{
            target.innerText = `${validé} bonjour ${user.prenom}, vous êtes né(e) en ${date_nassance}`
            target_2.classList.remove("warning")
            target_2.classList.add("success")
        }
        
    })
})
