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
    //txtUlaz.value = 'Projekat je u fazi izrade';
    txtIzlaz.value = 'Projekat je u fazi izrade'; 
};

btnDCT = document.getElementById('btnDCT'); 
btnDCT.onclick = demo; 

//Hover efekat - JavaScript

btnDCT.addEventListener('mouseover', function(){
    btnDCT.style.opacity = 0.8;
});

btnDCT.addEventListener('mouseout', function(){
    btnDCT.style.opacity = 1;
});

btnBrisanje.addEventListener('mouseover', function(){
    btnBrisanje.style.opacity = 0.8;
});

btnBrisanje.addEventListener('mouseout', function(){
    btnBrisanje.style.opacity = 1;
});


let tabela = new Array(16);

for(let i = 0; i < tabela.length; i++){
    tabela[i] = Number((Math.random()).toFixed(2));
    //console.log(tabela[i]);
}

//inicijalizacija niza
tabelaS = '';

for(let red = 0; red < tabela.length; red++){
    for(let kol = 0; kol < tabela[red].length; kol++){
        tabela[red][kol] = red*kol;
        //tabelaS += tabela[red][kol] + '\n';

    }
}

txtUlaz.value = tabela;
console.log(tabela); 
