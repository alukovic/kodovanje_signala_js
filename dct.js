/*
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

//Dan6
Pro 2.3.9 23.8.2021. Pon. 
    Ažuriranja, proširenja funkcija i integracija programa u jednu celinu 

//Dan7
Pro 2.3.9 25.8.2021. Sre.     
*/

ulaznaMatrica = new Array();
//izlaznaMatrica = new Array();

ulaznaMatricaTekst = new String();
izlaznaMatricaTekst = new String(); 

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

//btnMatrica.onclick = generisanjeMatrice;  


btnMatrica.addEventListener('click', () => {

    generisanjeMatrice();
    dctSadrzajB.style.display = 'block';
    
});

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
            //izlaznaMatrica[u][v] = Number((1/4)*Cu*Cv*suma).toFixed(0); 
            izlaznaMatrica[u][v] = parseInt(Number((1/4)*Cu*Cv*suma).toFixed(0));
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
    console.log(ulaznaMatrica);

};

btnDCT.onclick = DCT; 

//Nastavak 

//Vizuelizacija piksela ulazne matrice
btnVizuelizacijaPiksela = document.querySelector('#btnVizuelizacijaPiksela');
canvasPrikazPikselaMatrice = document.querySelector('#canvasPrikazPikselaMatrice');
ctxPrikazPikselaMatrice = canvasPrikazPikselaMatrice.getContext('2d');

ulazniNiz = new Array();
sortiraniUlazniNiz = new Array();
sortiraniUlazniNizF = new Array();
izlazniNiz = new Array();
sortiraniIzlazniNiz = new Array();
sortiraniIzlazniNizF = new Array();

ulazniNizUint8C = new Uint8ClampedArray();

sirina = new Number();
visina = new Number();

btnVizuelizacijaPiksela.addEventListener('click', () => {

    for(let i = 1; i < ulaznaMatrica.length * ulaznaMatrica.length; i++){
        //ulazniNiz = ulazniNiz.concat(ulaznaMatrica[i]);
        ulazniNiz[i] = i;
    }

    for(let i = 0; i < izlaznaMatrica.length; i++){
        izlazniNiz = izlazniNiz.concat(izlaznaMatrica[i]);
    }

    sortiraniUlazniNiz = ulazniNiz.sort((a, b) => a - b);
    //sortiraniIzlazniNiz = izlazniNiz.sort((a, b) => b - a);

    sortiraniUlazniNizF = [...new Set(sortiraniUlazniNiz)];
    //sortiraniIzlazniNizF = [...new Set(sortiraniIzlazniNiz)]; 

    console.log('ulazni niz', ulazniNiz);
    console.log('sortirani ulazni niz', sortiraniUlazniNiz);
    console.log('sortirani ulazni niz f', sortiraniUlazniNizF);

    console.log('izlazni niz', izlazniNiz);
    //console.log('sortirani izlazni niz', sortiraniIzlazniNiz);
    //console.log('sortirani izlazni niz f', sortiraniIzlazniNizF);

    sirina = 4;
    visina = 4;

    ulazniNizUint8C = new Uint8ClampedArray(ulazniNiz);
    console.log(ulazniNizUint8C);

    podaciVizuelizacijePikselaMatrice = new ImageData(ulazniNizUint8C, sirina, visina);
    ctxPrikazPikselaMatrice.putImageData(podaciVizuelizacijePikselaMatrice, sirina, visina);

});

//Vizuelizacija vrednosti amplituda piksela nakon DCT
btnVizuelizacijaDCT = document.querySelector('#btnVizuelizacijaDCT');
canvasPrikazDCT = document.querySelector('#canvasPrikazDCT'); 
ctxCanvasPrikazDCT = canvasPrikazDCT.getContext('2d');

const funkcijaVizuelizacijeDCT = () => {

    let  canvasPrikazDCT = new Chart(ctxCanvasPrikazDCT, {
        type: 'bar',
        data: {
            labels: sortiraniUlazniNizF,
            datasets: [{
                label: 'Amplituda signala slike nakon DCT',
                data: izlazniNiz,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    

};


btnVizuelizacijaDCT.addEventListener('click', () => {
    funkcijaVizuelizacijeDCT();
});


//Funkcija za uvecanje piksela na kanvasu
btnUvecanjePiksela = document.querySelector('#btnUvecanjePiksela');
canvasPrikazUvecanihPikselaMatrice = document.querySelector('#canvasPrikazUvecanihPikselaMatrice');
ctxPrikazUvecanihPikselaMatrice = canvasPrikazUvecanihPikselaMatrice.getContext('2d');

btnUvecanjePiksela.addEventListener('click', () => {
      uvecanjePiksela(ctxPrikazPikselaMatrice, 0, 0, sirina, visina);
});

const uvecanjePiksela = (ctx, ax, ay, sirina, visina) => {

    let podaci = ctx.getImageData(ax, ay, sirina, visina);
    console.log('Izvršavanje funkcije za uvećanje piksela: '); 
    console.log(podaci);
    console.log(podaci.data);

};