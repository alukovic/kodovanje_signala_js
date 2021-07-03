//Dan1
//29.6.2021. Uto. 

//Dan2
//30.6.2021. Sre. 

//Dan3
//1.7.2021. Čet. 

//Dan4
//3.7.2021. Čet. 

const generisanjeMatrice = () => {
    
    ulaznaMatrica = new Array(Number(dimMatr.value**2));

    for(let i = 0; i < ulaznaMatrica.length; i++){
        ulaznaMatrica[i] = Number((Math.random()).toFixed(2));
        //console.log(tabela[i]);
    }
    
    //inicijalizacija niza
    ulaznaMatricaS = '';
    
    for(let red = 0; red < ulaznaMatrica.length; red++){
        for(let kol = 0; kol < ulaznaMatrica[red].length; kol++){
            ulaznaMatrica[red][kol] = red*kol;
            //tabelaS += tabela[red][kol] + '\n';
    
        }
    }
    
    txtUlaz.value = ulaznaMatrica; 

    infoP1.innerHTML = ` Koeficijenti slike su nasumično generisani. ` ; 

    console.log(Number(dimMatr.value)); 
    console.log(Number(dimMatr.value**2)); 
    console.log(ulaznaMatrica); 

    inpBrKoef.value = ulaznaMatrica.length; 
    inpMatr.value = `${Math.sqrt(ulaznaMatrica.length)} x ${Math.sqrt(ulaznaMatrica.length)}`; 

}; 

btnMatrica.onclick = generisanjeMatrice;  

const brisanje = () => {
    window.location.reload(true); 
}

btnBrisanje.onclick = brisanje;

/*
const demo = () => {

    txtIzlaz.value = 'Projekat je u fazi izrade'; 

};

btnDCT.onclick = demo; 
*/

const DCT = () => {
    //test
    //txtIzlaz.value = ulaznaMatrica; 
    j = Number(), x = Number(), y = Number(), u = Number(), v = Number();
    izlaznaMatrica = new Array(Number(dimMatr.value**2));

    F = Number(); 
   

    Cu = 0;
    Cv = 0; 

    for(u = 0; u < dimMatr.value; u++){

        izlaznaMatrica[u] = ulaznaMatrica[u];

        for(v = 0; v < dimMatr.value; v++){
            izlaznaMatrica[u][v] = ulaznaMatrica[u][v];
        }

    }
    
    /*
    for(j = 0; j < izlaznaMatrica.length; j++){
        izlaznaMatrica[j] = Number((ulaznaMatrica[j]).toFixed(0));

    } 

    for(u = 0; u < izlaznaMatrica.length; u++){
        for(v = 0; v < izlaznaMatrica[u].length; v++){
            izlaznaMatrica[u][v] = u*v; 
            //tabelaS += tabela[red][kol] + '\n';
    
        }
    }
    */

    //za matricu 2x2
    //[0][0] [0][1] [1][0] [1][1]

    txtIzlaz.value = izlaznaMatrica; 

    //console.log(izlaznaMatrica[0][0]);
    //console.log(izlaznaMatrica[0][1]);
    //console.log(izlaznaMatrica[1][0]);
    //console.log(izlaznaMatrica[1][1]);

    console.log(izlaznaMatrica);

};

btnDCT.onclick = DCT; 