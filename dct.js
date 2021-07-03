//Dan1
//29.6.2021. Uto. 

//Dan2
//30.6.2021. Sre. 

//Dan3
//1.7.2021. Čet. 

//Dan4
//3.7.2021. Čet. 

const generisanjeMatrice = () => {
    
    //ulaznaMatrica = new Array(Number(dimMatr.value**2));
    ulaznaMatrica = [[1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
];
    /*
    Kod #1
    for(let i = 0; i < ulaznaMatrica.length; i++){
        ulaznaMatrica[i] = Number((Math.random()*100).toFixed(0));
        //console.log(tabela[i]);
    }
    
    //inicijalizacija niza
    ulaznaMatricaS = '';
    
    for(let red = 0; red < ulaznaMatrica.length; red++){
        for(let kol = 0; kol < ulaznaMatrica[red].length; kol++){
            ulaznaMatrica[red][kol] = red*kol;
            //tabelaS += tabela[red][kol] + '\n';
            console.log('test: ulaznaMatrica' + ulaznaMatrica[red][kol]); 
    
        }
    }
    */

    //Kod #2
    
    for(let i = 0; i < ulaznaMatrica.length; i++){
        for(let j = 0; j < ulaznaMatrica[i].length; j++){
            ulaznaMatrica[i][j] = Number((Math.random()*100).toFixed(0)); 
        }
    }
    
   
    txtUlaz.value = ulaznaMatrica; 

    infoP1.innerHTML = ` Koeficijenti slike su nasumično generisani. ` ; 

    console.log(Number(dimMatr.value)); 
    console.log(Number(dimMatr.value**2)); 
    console.log(ulaznaMatrica); 

    inpBrKoef.value = ulaznaMatrica.length; 
    inpMatr.value = `${Math.sqrt(Number(ulaznaMatrica.length)).toFixed(0)} x ${Math.sqrt(Number(ulaznaMatrica.length)).toFixed(0)}`; 

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
    //izlaznaMatrica = []; 
    F = Number(); 
   
    Cu = Number(); 
    Cv = Number(); 
    n = dimMatr.value;
    m = dimMatr.value;
    suma = Number(); 

    /*
    Kod #1
    for(u = 0; u < n; u++){

        izlaznaMatrica[u] = ulaznaMatrica[u];

        for(v = 0; v < m; v++){

            suma = 0;

            for(x = 0; x < dimMatr.value; x++){

                for(y = 0; y < dimMatr.value; y++){
                    suma += ulaznaMatrica[x][y]*Math.cos(((2*x + 1)*u*Math.PI)/16)*Math.cos(((2*y + 1)*v*Math.PI)/16); 
                }

            }

            if(u === 0){
                Cu = Number((1/Math.sqrt(2)).toFixed(2));
            } else
            {
                Cu = 1; 
            }

            if(Cv === 0){
                Cv = Number((1/Math.sqrt(2)).toFixed(2));
            } else {
                Cv = 1;
            }

            //izlaznaMatrica[u][v] = ulaznaMatrica[u][v];
            izlaznaMatrica[u][v] = (1/4)*Cu*Cv*suma; 
            console.log(izlaznaMatrica[u][v]); 
        }

    }
    */

    console.log(ulaznaMatrica[0][0]); 
    console.log(ulaznaMatrica[0][1]); 
    console.log(ulaznaMatrica[1][0]); 
    console.log(ulaznaMatrica[1][1]); 
 
    //Kod #2
    for(j = 0; j < izlaznaMatrica.length; j++){
        izlaznaMatrica[j] = Number((ulaznaMatrica[j]));

    } 

    for(u = 0; u < izlaznaMatrica.length; u++){

        console.log('testA'); 


        for(v = 0; v < izlaznaMatrica[u].length; v++){
            //izlaznaMatrica[u][v] = u*v; 
            //tabelaS += tabela[red][kol] + '\n'; 

            suma = 0;
            console.log('testB');

            for(x = 0; x < dimMatr.value; x++){

                for(y = 0; y < dimMatr.value; y++){
                    suma += ulaznaMatrica[x][y]*Math.cos(((2*x + 1)*u*Math.PI)/16)*Math.cos(((2*y + 1)*v*Math.PI)/16); 
                    console.log('test'); 
                    console.log('test: ' + ulaznaMatrica[x][y]); 
                }

            }

            if(u === 0){
                Cu = Number((1/Math.sqrt(2)).toFixed(2));
            } else
            {
                Cu = 1; 
            }

            if(Cv === 0){
                Cv = Number((1/Math.sqrt(2)).toFixed(2));
            } else {
                Cv = 1;
            }

            //izlaznaMatrica[u][v] = ulaznaMatrica[u][v];
            izlaznaMatrica[u][v] = (1/4)*Cu*Cv*suma; 
            console.log(izlaznaMatrica[u][v]); 
        }

    }
    
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