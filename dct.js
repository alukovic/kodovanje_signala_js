//Dan1
//29.6.2021. Uto. 

//Dan2
//30.6.2021. Sre. 


const generisanjeMatrice = () => {
    
    tabela = new Array(Number(dimMatr.value**2));

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
    console.log(Number(dimMatr.value)); 
    console.log(Number(dimMatr.value**2)); 
    console.log(tabela); 

    inpBrKoef.value = tabela.length; 
    inpMatr.value = `${Math.sqrt(tabela.length)} x ${Math.sqrt(tabela.length)}`; 

}; 

btnMatrica.onclick = generisanjeMatrice;  


infoP1.innerHTML = ` Koeficijenti slike su nasumično generisani. ` ; 





//inpMatr.value = `${Math.sqrt(brEl)} x ${Math.sqrt(brEl)}`;


const brisanje = () => {
    window.location.reload(true); 
}

btnBrisanje.onclick = brisanje;

const demo = () => {
    //txtUlaz.value = 'Projekat je u fazi izrade';
    txtIzlaz.value = 'Projekat je u fazi izrade'; 
};


btnDCT.onclick = demo; 


