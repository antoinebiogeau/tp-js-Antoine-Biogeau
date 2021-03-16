document.addEventListener("DOMContentLoaded", () => {
    console.log("loaded");
    let solde, montant, printOut, target, target_2;
    target_2 = document.querySelector("div");
    target = document.querySelector("div p");
    solde = 1000;
    montant = prompt("Faites votre retrait");
    if (montant >= 20 && montant <= 100) {
        confirmer = confirm("confirmer votre retrait");
        if (confirmer === true) {
            solde = solde - montant;
            target.innerHTML += `vous avez retirer ${montant} <br> Votre solde est de ${solde}`;
            target_2.classList.remove("warning");
            target_2.classList.add("success");
        } else {
            target.innerHTML += `Operation annulée`;
            target_2.classList.add("warning");
            target_2.classList.remove("success");
        }
    } else if (montant == "") {
        alert("veuillez saisir une somme");
        document.location.reload();
    } else if (montant < 20 && montant > 0 || montant > 100 && montant > 0) {
        alert("Votre somme doit etre comprise entre 20 et 100 euros");
        document.location.reload();
    } else {
        alert("veuillez sasir des chiffres");
        document.location.reload();
    }
});