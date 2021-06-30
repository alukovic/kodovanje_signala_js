//Dan1
//29.6.2021. Uto. 

btnBrisanje = document.getElementById('btnBrisanje'); 
btnBrisanje.style.backgroundColor = 'rgb(229, 43, 80)'; 

//Dan2
//30.6.2021. Sre. 

txtUlaz = document.getElementById('txtUlaz');
txtIzlaz = document.getElementById('txtIzlaz'); 


const brisanje = () => {
    window.location.reload(true); 
}

btnBrisanje.onclick = brisanje;

const demo = () => {
    txtUlaz.value = 'Projekat je u fazi izrade';
    txtIzlaz.value = 'Projekat je u fazi izrade'; 
};

btnDCT = document.getElementById('btnDCT'); 
btnDCT.onclick = demo; 

