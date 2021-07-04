//Dan1
//29.6.2021. Uto. 

//Dan2
//30.6.2021. Sre. 

//Dan3
//1.7.2021. Čet. 

//Dan4
//3.7.2021. Sub. 

//Dan5
//4.7.2021. Ned. 
    //Realizovana diskretna kosinusna transformacija

const generisanjeMatrice = () => {

    //ulaznaMatrica = new Array(Number(dimMatr.value**2));
    //ulaznaMatrica = [[], [], [], [], [], [], [], []];
    //ulaznaMatrica.length = Number(dimMatr.value**2);

    ulaznaMatrica = [[1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
];

    //Kod #2

    for(let i = 0; i < ulaznaMatrica.length; i++){
        //ulaznaMatrica[i] = Number((Math.random()*100).toFixed(0));
        for(let j = 0; j < ulaznaMatrica[i].length; j++){
            ulaznaMatrica[i][j] = Number((Math.random()*100).toFixed(0)); 
            //ulaznaMatrica[i][j] = ulaznaMatrica[i][j];
            
        }

        ulaznaMatricaTekst += ulaznaMatrica[i] + '\n';
    }
    
    console.log(ulaznaMatrica[0][0]); 
    console.log(ulaznaMatrica[0][1]); 
    console.log(ulaznaMatrica[1][0]); 
    console.log(ulaznaMatrica[1][1]); 
   
    txtUlaz.value = ulaznaMatricaTekst; 

    infoP1.innerHTML = ` Koeficijenti slike su nasumično generisani. ` ; 

    /*
    console.log(Number(dimMatr.value)); 
    console.log(Number(dimMatr.value**2)); 
    console.log(ulaznaMatrica); 
    */

    inpBrKoef.value = ulaznaMatrica.length**2; 
    //inpMatr.value = `${Math.sqrt(Number(ulaznaMatrica.length)).toFixed(0)} x ${Math.sqrt(Number(ulaznaMatrica.length)).toFixed(0)}`; 
    inpMatr.value = `${ulaznaMatrica.length} x ${ulaznaMatrica.length}`;

}; 

btnMatrica.onclick = generisanjeMatrice;  

const brisanje = () => {
    window.location.reload(true); 
}

btnBrisanje.onclick = brisanje;


const demo = () => {

    txtIzlaz.value = 'Projekat je u fazi izrade'; 

};

btnDCT.onclick = demo; 


const DCT = () => {

    //test
    //txtIzlaz.value = ulaznaMatrica; 
    //j = Number(), x = Number(), y = Number(), u = Number(), v = Number();
    //izlaznaMatrica = new Array(Number(dimMatr.value**2));
    izlaznaMatrica = new Array();  
    F = Number(); 
   
    Cu = Number(); 
    Cv = Number(); 
    //n = dimMatr.value;
    //m = dimMatr.value;
    suma = Number(); 

    //kod #3
    izlaznaMatricaS = []; 

    for(let u = 0; u < ulaznaMatrica.length; u++){

        izlaznaMatrica[u] = [];

        for(let v = 0; v < ulaznaMatrica[u].length; v++){

            suma_ = 0;
            suma = 0;

            for(x = 0; x < ulaznaMatrica.length; x++){

                for(y = 0; y < ulaznaMatrica.length; y++){
                    suma_ += ulaznaMatrica[x][y]*Math.cos(((2*x + 1)*u*Math.PI)/16)*Math.cos(((2*y + 1)*v*Math.PI)/16); 
                    suma = Number(suma_).toFixed(2);
                    console.log('test-cosx'); 
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
            izlaznaMatrica[u][v] = Number((1/4)*Cu*Cv*suma).toFixed(0); 
            console.log(izlaznaMatrica[u][v]); 
        }

        izlaznaMatricaTekst += izlaznaMatrica[u] + '\n'; 

    }

    txtIzlaz.value = izlaznaMatricaTekst; 

    console.log(izlaznaMatrica[0][0]);
    console.log(izlaznaMatrica[0][1]);
    console.log(izlaznaMatrica[1][0]);
    console.log(izlaznaMatrica[1][1]);

    console.log(izlaznaMatrica);

};

btnDCT.onclick = DCT; 