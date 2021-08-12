/* 
//Dan6
//Pro 2.3.8 14.7.2021. Sre. 

Proširenja programa: 
    HTML5 Canvas
    Korisnik sada može uneti ulaznu sliku
    Slika je prikazana u kanvasu
    Electron.js desktop aplikacija 
    Napravljen je veliki pomak u izradi projekta

Zadaci koje je potrebno uraditi: 
    Prilagoditi dimenzije slike, izvršiti njeno skaliranje sa dimenzijama kanvasa... 
    
//Dan7
//Pro 2.3.8 15.7.2021. Čet.

    Nova proširenja programa...
    Slika zadržava svoje dimenzije... Ispravljen zadatak od juče... :O 
    Veliki učinak: Postignut prikaz RGBA vrednosti pojedinačnog piksela slike 

//Dan8
//Pro 2.3.8 16.7.2021. Pet.

    Nova proširenja i ažuriranja programa...
    Novi veliki učinak: učitavanje i izvršavanje naredbi po redosledu => async/await

//Dan9
//Pro 2.3.8 19.7.2021. Pon.
 
    Nova ažuriranja programa...  
    Izmena određenih delova koda...
    Smanjenje dimenzija ulazne slike (prilagođavanje i skaliranje) i učitavanje svih njenih piksela...
    Početak kreiranja efekta Učitavanje... 

//Dan10
//Pro 2.3.8 21.7.2021. Sre.
 
    Nova ažuriranja i proširenja programa... 
    Početak kreiranja funkcija za obradu i izmenu ulazne slike...   

//Dan11
Pro 2.3.8 22.7.2021. Čet. 
    Nova ažuriranja programa... 

//Dan12
Pro 2.3.8 3.8.2021. Uto. 
    Nova ažuriranja i izmena funkcija programa... 
    Početak uvođenja opcionog prikaza svih RGBA vrednosti piksela. (v1 | 3.8.2021.)

//Dan13
Pro 2.3.8 4.8.2021. Sre. 
    Nastavak sa izmenama programa... 
    Završetak uvođenja opcionog prikaza svih RGBA vrednosti piksela. (v4 | 4.8.2021.) 
    Kreiranje efekta crno-bele slike od date ulazne slike u boji... (v6 | 4.8.2021.) 

//Dan14 && Dan15
Pro 2.3.8. 6.8.2021. Pet. && Pro 2.3.8. 7.8.2021. Sub. 
    Nastavak sa dodavanjem novih funkcionalnosti programa... 
    Novo | Test | Demo | DCT | Početak 

//Dan16
Pro 2.3.8 9.8.2021. Pon.  
    Novo | Test | Demo | DCT | Nastavak  

//Dan17
Pro 2.3.8 10.8.2021. Uto.
    Novo | Test | Demo | DCT | Nastavak  
    Početak kreiranja funkcije za obradu ulazne slike... (v4 | 10.8.2021.)

//Dan18
Pro 2.3.8 11.8.2021. Sre.
    Novo | Test | Demo | Kompresija | Početak  
    Nastavak kreiranja funkcija za obradu ulazne slike i izmene korisničkog interfejsa programa...  
    (v3 | 11.8.2021. % v10 | 11.8.2021. )     

//Dan19
Pro 2.3.9 12.8.2021. Čet. 
    Novo | Test | Demo | Kompresija
    */

canvasSlike = document.querySelector('#canvasSlike');
ctx = canvasSlike.getContext('2d');

btnNovaSlika = document.getElementById('btnNovaSlika'); 
btnNovaSlika.style.backgroundColor = 'yellowgreen'; 
btnNovaSlika.style.margin = '1em'; 

btnNovaSlika.addEventListener('click', function(){
    window.location.reload(true);
});

obradaSlike = document.querySelector('.obradaSlike'); 
meniSlika = document.querySelector('.meniSlika'); 

btnPodaciSlika = document.querySelector('#btnPodaciSlika');

infoS = document.querySelector('#infoS'); 

ucitavanje = document.querySelector('.ucitavanje'); 
txtUcitavanje = document.querySelector('#txtUcitavanje'); 

nizPiksela4String = '';

//slika = new Image(); 

const optimizacijaPrikaza = () => {

    txtUcitavanje.style.display = 'none'; 
    meniSlika.style.display = 'none'; 
    obradaSlike.style.display = 'none'; 
    //dodatna optimizacija prikaza
    noviMeni.style.display = 'none';
    opcioniPodaci.style.display = 'none';
    opcioniPodaciInfo.style.display = 'none';
    opcioniPodaciSakrivanje.style.display = 'none';
    txtDemoDCTinfo.style.display = 'none';

    //Novo
    demoDCT.style.display = 'none';
    testCanvas.style.display = 'none';

};

document.onreadystatechange = function(){

    if(document.readyState !== 'complete'){
        optimizacijaPrikaza();
    }

}

window.addEventListener('load', function(){

    txtUcitavanje.style.display = 'none'; 

    meniSlika.style.display = 'none'; 
    obradaSlike.style.display = 'none'; 
    opcioniPodaciSakrivanje.style.display = 'none';
    noviMeni.style.display = 'none'; 
    txtDemoDCTinfo.style.display = 'none';
    sakrivanjeRGBA();

    //Novo
    demoDCT.style.display = 'none';
    testCanvas.style.display = 'none';

    document.querySelector('input[type="file"]').addEventListener('change', function(){

        meniSlika.style.display = 'block'; 
        noviMeni.style.display = 'block'; 
        //obradaSlike.style.visibility = 'visible'; 

        //Novo
        testCanvas.style.display = 'block';

        if(this.files && this.files[0]){

            
            //slika = document.querySelector('img');
            slika = new Image(); 
            slika.src = URL.createObjectURL(this.files[0]);
            //slika.onload = imageIsLoaded;

            function opcijePrikazaSlike() {

                if(slika.width >= 1920){

                    canvasSlike.width = slika.width / 6; 
                    canvasSlike.height = slika.height / 6; 
    
                    } else {
    
                        canvasSlike.width = slika.width / 3; 
                        canvasSlike.height = slika.height / 3; 
    
                    }
    
                    ctx.drawImage(slika, 0, 0, canvasSlike.width, canvasSlike.height); 
    
                    canvasSlike.style.border = '2px';
                    canvasSlike.style.borderStyle = 'solid'; 
                    canvasSlike.style.borderRadius = '16px'; 
                    canvasSlike.style.borderColor = 'rgb(24, 138, 231)'; 
    
                    infoS.style.fontSize = '80%';
            };

            slika.addEventListener('load', () => {
                opcijePrikazaSlike();
            }); 

        }

    });

});

     funkcijaProracun = () => {

        podaciSaSlike = new Uint8ClampedArray();
        //test #1
        //podaciSaSlike = ctx.getImageData(0, 0, 180, 180); 
        
        //Cela slika - svi pikseli
        //test #2

        podaciSaSlike = ctx.getImageData(0, 0, canvasSlike.width, canvasSlike.height); 
    
        nizPiksela = podaciSaSlike.data;
        console.log(nizPiksela); 
    
        nizPikselaA = Array.prototype.slice.call(nizPiksela);
    
        //nizPiksela4String = ''; 
        nizPiksela4elementa = new Array(); 
        console.log('nizPikselaA.length: ' + nizPikselaA.length); 
        console.log('nizPiksela.length: ' + nizPiksela.length); 
    
        //for(i = 0; i < nizPikselaA.length; i++){
        i = 0;
    
        while(nizPikselaA.length > 1){
    
            i++;
            nizPiksela4elementa = nizPikselaA.splice(0, 4);
            nizPiksela4String += i + '. piksel sa RGBA komponentama je: ' + nizPiksela4elementa + '\n';
        }
    
    };

    let iA = 0; 
    let tekst = 'Učitavanje...';
    txtUcitavanje.innerHTML += 'Učitavanje'; 

    funkcijaUcitavanje = () => {

        if(iA < tekst.length){

            txtUcitavanje.innerHTML += tekst.charAt(iA + 10);
            iA++;
            setInterval(funkcijaUcitavanje, 1000);
        }

        txtUcitavanje.style.display = 'block'; 
        //txtUcitavanje.innerHTML = 'Učitavanje...'; 
    };
    
    sviRGBA = document.querySelector('#txtRGBA'); 
    
    spanNovo = document.getElementById('spanNovo'); 
    
    dimenzijeSlike = document.querySelector('#inpDimenzijeSlike'); 
    brojPiksela = document.querySelector('#inpBrojPiksela');

    btnPodaciSlika.addEventListener('click', async function(){

    
        korak1 = await setTimeout(() => {

            txtRGBA.value = nizPiksela4String;
            //funkcijaUcitavanje();
            setInterval(funkcijaUcitavanje, 500);

        }, 0); 
        
        korak2 = await setTimeout(() => {

            obradaSlike.style.display = 'block'; 
            dimenzijeSlike.value = `${canvasSlike.width} x ${canvasSlike.height}`; 
            brojPiksela.value = Number(canvasSlike.width * canvasSlike.height); 

        }, 1000);

        /*
        korak3 = await setTimeout(() => {
            funkcijaProracun();
        }, 3500);

        korak4 = await setTimeout(() => {
            sviRGBA.value = nizPiksela4String; 
        }, 3600);
        */

        korak3 = await setTimeout(() => prikazRGBA(), 1500);

        korak4 = await setTimeout(() => {

            ucitavanje.style.display = 'none';
            txtUcitavanje.style.display = 'none'; 

        }, 2000);

        //funkcijaProracun();

    });                

//btnPodaciSlika.addEventListener('loadstart', funkcijaProracun());
noviMeni = document.querySelector('.noviMeni');

btnNovaSlikaA = document.querySelector('#btnNovaSlikaA');
btnNovaSlikaA.style.backgroundColor = '#5D8AA8';  

btnBrisanjeA = document.querySelector('#btnBrisanjeA');
btnBrisanjeA.style.backgroundColor = '#D3212D'; 

txtPrikazInfo = document.querySelector('#txtPrikazInfo');

canvasSlikeA = document.querySelector('#canvasSlikeA');
ctxA = canvasSlikeA.getContext('2d'); 
noviNiz = new Uint8ClampedArray(10000);


function opcijePrikazaNoveSlike() {

    if(slika.width >= 1920){

        canvasSlikeA.width = slika.width / 6; 
        canvasSlikeA.height = slika.height / 6; 

        } else {

            canvasSlikeA.width = slika.width / 3; 
            canvasSlikeA.height = slika.height / 3; 

        }

        ctxA.drawImage(slika, 0, 0, canvasSlike.width, canvasSlike.height);

        pikseliSlikaA = ctxA.getImageData(0, 0, canvasSlike.width, canvasSlike.height);
    
        for(let i = 0; i < pikseliSlikaA.data.length; i+=4){
    
            let vrednost = 0.5 * pikseliSlikaA.data[i] + 0.5 * pikseliSlikaA.data[i + 1] + 0.5 * pikseliSlikaA.data[i + 2]; 
    
            pikseliSlikaA.data[i] = vrednost;
            pikseliSlikaA.data[i + 1] = vrednost;
            pikseliSlikaA.data[i + 2] = vrednost;

        }
    
        ctxA.putImageData(pikseliSlikaA, 0, 0); 

}

btnNovaSlikaA.addEventListener('click', function(){
    
    /*
    txtPrikazInfo.innerHTML = 'Funkcija je još uvek u fazi izrade...'; 

    for(let i = 0; i < noviNiz.length; i+=4){
        noviNiz[i] = 20;
        noviNiz[i + 1] = 0;
        noviNiz[i + 2] = 0;
        noviNiz[i + 3] = 255; 
    }

    //podaciSaSlikeA = new ImageData(noviNiz, 100);
    //ctxA.putImageData(podaciSaSlikeA, 10, 10); 
    */

    //Prikaz ulazne slike

    opcijePrikazaNoveSlike();
});

btnBrisanjeA.addEventListener('click', function(){
    window.location.reload(true);
});

opcioniTekst = document.querySelector('#opcioniTekst');
opcioniTekstInfo = document.querySelector('#opcioniTekstInfo'); 
opcioniPodaciInfo = document.querySelector('.opcioniPodaciInfo');
opcioniPodaciSlika = document.querySelector('.opcioniPodaciSlika');
opcioniPodaci = document.querySelector('.opcioniPodaci');
btnPrikazRGBA = document.querySelector('#btnPrikazRGBA'); 

const prikazRGBA = () => {

    opcioniPodaciInfo.style.display = 'block';
    //opcioniPodaci.style.display = 'none';
    opcioniTekst.innerHTML = 'Opcioni prikaz svih RGBA vrednosti date slike: '; 
};

const sakrivanjeRGBA = () => {

    opcioniPodaciInfo.style.display = 'none';
    opcioniPodaci.style.display = 'none';

};

opcioniPodaciSlika.addEventListener('click', () => {

    opcioniPodaciInfo.style.display = 'none'; 
    opcioniPodaci.style.display = 'block'; 
    OpcioniMeniSakrivanje();

});

btnPrikazRGBA.addEventListener('click', () => {

    funkcijaProracun(); 
    txtRGBA.value = nizPiksela4String;

});


opcioniPodaciSakrivanje = document.querySelector('.opcioniPodaciSakrivanje');
opcioniTekstSakrivanje = document.querySelector('#opcioniTekstSakrivanje');
opcioniPodaciSlikaSakrivanje = document.querySelector('.opcioniPodaciSlikaSakrivanje'); 

const OpcioniMeniSakrivanje = () => {

    opcioniPodaciSakrivanje.style.display = 'block';
    opcioniTekstInfo.innerHTML = 'Proces može da potraje malo duže...'; 
    opcioniTekstSakrivanje.innerHTML = 'Sakrijte opcioni prikaz piksela: ';

};

opcioniPodaciSlikaSakrivanje.addEventListener('click', () => {

    opcioniPodaciInfo.style.display = 'block';
    opcioniPodaciSakrivanje.style.display = 'none';
    opcioniPodaci.style.display = 'none';
    //window.location.reload(true);

});

opcioniPodaciUcitavanje = document.querySelector('.opcioniPodaciUcitavanje');

opcioniPodaciUcitavanjeInfo = document.querySelector('#opcioniPodaciUcitavanje'); 

// Novo | Test | Demo | DCT 

btnGenerisanjeDemo = document.querySelector('#btnGenerisanjeDemo');
btnNoviUnosDemo = document.querySelector('#btnNoviUnosDemo'); 

canvasDemoA = document.querySelector('#canvasDemoA');

btnDemoDCT = document.querySelector('#btnDemoDCT'); 
canvasDemoDCT = document.querySelector('#canvasDemoDCT'); 

ctxDemoA = canvasDemoA.getContext('2d'); 
ctxDemoDCT = canvasDemoDCT.getContext('2d'); 

noviNizPikselaDemo = new Array();
noviNizPikselaDemoPiksel = new Array();
noviNizPikselaDemoPikselF = new Array();

const nasumicnaVrednostPiksela = (min, max) => {
 return  Math.round(Math.random() * (max - min) + min);
};


const generisanjeDemoCanvasaA = () => {
    //Test: demo slika

    nizPikselaDemo = new Uint8ClampedArray(4 * 10000);
    piksel = new Uint8ClampedArray(10000);

    for(let i = 0; i < nizPikselaDemo.length; i+=4){

        nizPikselaDemo[i + 0] = nasumicnaVrednostPiksela(0, 250);
        nizPikselaDemo[i + 1] = nasumicnaVrednostPiksela(0, 250);
        nizPikselaDemo[i + 2] = nasumicnaVrednostPiksela(0, 250);
        nizPikselaDemo[i + 3] = nasumicnaVrednostPiksela(0, 250); 

        //piksel[i] = (nizPikselaDemo[i + 0] + nizPikselaDemo[i + 1] + nizPikselaDemo[i + 2] + nizPikselaDemo[i + 3]) / 4;
    }

    for(let i = 0; i < nizPikselaDemo.length; i++){

        noviNizPikselaDemo.push(nizPikselaDemo[i]); 
        piksel[i] = (nizPikselaDemo[i + 0] + nizPikselaDemo[i + 1] + nizPikselaDemo[i + 2] + nizPikselaDemo[i + 3]) / 4; 

    }

    for(let i = 0; i < piksel.length; i++){

        noviNizPikselaDemoPiksel.push(piksel[i]);
        noviNizPikselaDemoPikselF = noviNizPikselaDemoPiksel.filter(x => x > 0);
        
    }

    podaciDemoSlike = new ImageData(nizPikselaDemo, 100);
    podaciDemoSlikePiksel = new ImageData(piksel, 50);

    //Nove vrednosti piksela
    //ctxDemoA.putImageData(podaciDemoSlike, 0, 0); 

    ctxDemoA.putImageData(podaciDemoSlikePiksel, 120, 50);
    console.log(noviNizPikselaDemo);
    console.log(noviNizPikselaDemo.length); 
    console.log(noviNizPikselaDemoPiksel);
    //console.log(noviNizPikselaDemoPikselF);
    //console.log(noviNizPikselaDemoPikselF.length);

};

nizObradaUlazneSlike = new Array();
nizObradaUlazneSlikeF = new Array();
nizObradaUlazneSlikeUint8C = new Uint8ClampedArray();

const obradaUlazneSlike = () => {

    //Početak kreiranja funkcije za obradu ulazne slike

    //novaSlika = new Image();
    //novaSlika = slika;

    if(slika.width >= 1920){

        canvasDemoA.width = slika.width / 6; 
        canvasDemoA.height = slika.height / 6; 

        } else {

            canvasDemoA.width = slika.width / 3; 
            canvasDemoA.height = slika.height / 3; 

        }

        //podaciUlazneSlike = ctx.getImageData(0, 0, canvasSlike.width, canvasSlike.height); 
    
    /*


    pikseliUlazneSlike = podaciUlazneSlike.data; 

    pikselA = new Array(); 

    
    for(let i = 0; i < 40000; i+=4){
        pikselA[i] = Math.round((pikseliUlazneSlike[i] + pikseliUlazneSlike[i + 1] + pikseliUlazneSlike[i + 2] + pikseliUlazneSlike[i + 3]) / 4);
    }
    
    for(let i = 0; i < 40000; i++){

        nizObradaUlazneSlike.push(pikselA[i]);
        nizObradaUlazneSlikeF = nizObradaUlazneSlike.filter(x => x > 0);

    }
    
    nizObradaUlazneSlikeUint8C = new Uint8ClampedArray(nizObradaUlazneSlikeF);

    */
    
    /*
    console.log(pikselA); 
    console.log(pikseliUlazneSlike);
    console.log(nizObradaUlazneSlike);
    console.log(nizObradaUlazneSlikeF);
    console.log(nizObradaUlazneSlike.length);
    console.log(nizObradaUlazneSlikeF.length);
    console.log(nizObradaUlazneSlikeUint8C);
    console.log(podaciUlazneSlikePiksel);
    */

    //podaciUlazneSlikePiksel = new ImageData(nizObradaUlazneSlikeUint8C, 50, 50);

    //ctxDemoA.putImageData(podaciUlazneSlike, 0, 0);
    //ctxDemoA.putImageData(podaciUlazneSlikePiksel, 120, 50);

    ctxDemoA.drawImage(slika, 0, 0, canvasDemoA.width, canvasDemoA.height);

    podaciUlazneSlike = ctxDemoA.getImageData(0, 0, canvasDemoA.width, canvasDemoA.height);
    pikseliUlazneSlike = podaciUlazneSlike.data;

    console.log(podaciUlazneSlike);
    console.log(podaciUlazneSlike.data);
    console.log(pikseliUlazneSlike);
    console.log(pikseliUlazneSlike.length);

    srVrPiksela = new Number(); 
    nizSrVrPiksela = new Array();
    nizSrVrPikselaUint8C = new Uint8ClampedArray();

    nizSrVrPikselaF = new Array();
    nizSrVrPikselaFuInt8C = new Uint8ClampedArray();

    nizSrVrPikselaFf = new Array();
    nizSrVrPikselaFfUint8C = new Uint8ClampedArray();

    for(let i = 0; i < pikseliUlazneSlike.length; i+=4){
        
        srVrPiksela[i] = Math.round((pikseliUlazneSlike[i] + pikseliUlazneSlike[i + 1] + pikseliUlazneSlike[i + 2] + pikseliUlazneSlike[i + 3]) / 4);
        
        /*
        pikseliUlazneSlike[i] = srVrPiksela;
        pikseliUlazneSlike[i + 1] = srVrPiksela;
        pikseliUlazneSlike[i + 2] = srVrPiksela;
        pikseliUlazneSlike[i + 4] = srVrPiksela;
        */

       nizSrVrPiksela.push(srVrPiksela[i]);
       nizSrVrPikselaUint8C = new Uint8ClampedArray(nizSrVrPiksela);
    }

    //ctxDemoA.putImageData(srVrPiksela, 0, 0); 

    for(let i = 0; i < nizSrVrPiksela.length; i++){

        nizSrVrPikselaF.push(srVrPiksela[i]);
        nizSrVrPikselaFuInt8C = new Uint8ClampedArray(nizSrVrPikselaF); 

        //Filtrirani niz piksela
        nizSrVrPikselaFf = nizSrVrPikselaF.filter(x => x > 0);
        //nizSrVrPikselaFfUint8C = new Uint8ClampedArray(nizSrVrPikselaFf);
    }

    nizSrVrPikselaFf.push(23);
    nizSrVrPikselaFf.push(23);

    /*
    console.log(nizSrVrPiksela); 
    console.log(nizSrVrPikselaUint8C);
    console.log(nizSrVrPikselaF);
    console.log(nizSrVrPikselaFuInt8C); 
    */

    console.log(nizSrVrPikselaFf);
    console.log(nizSrVrPikselaFf.length);

    for(let i = 0; i < nizSrVrPikselaFf.length; i++){
        nizSrVrPikselaFfUint8C = new Uint8ClampedArray(nizSrVrPikselaFf);
    }

    console.log(nizSrVrPikselaFfUint8C); 
    console.log(nizSrVrPikselaFfUint8C.length); 

    //aaaPodaciUlazneSlike = new ImageData(nizSrVrPikselaUint8C, canvasDemoA.width, canvasDemoA.height);
    //ctxDemoA.putImageData(aaaPodaciUlazneSlike, 0, 0); 
    
    //aaaPodaciUlazneSlike = new ImageData(nizSrVrPikselaFuInt8C, canvasDemoA.width / 2, canvasDemoA.height / 2);
    //ctxDemoA.putImageData(aaaPodaciUlazneSlike, 0, 0); 

    //Dimenzije komprimovane slike:
    sirinaKomprimovaneSlike = Number(Math.round(1 * (nizSrVrPikselaFfUint8C.length / canvasDemoA.height)));
    visinaKomprimovaneSlike = Number(Math.round(nizSrVrPikselaFfUint8C.length / canvasDemoA.width));
    
    console.log('Funkcija je uspešno izvršena...'); 
    console.log(Number(nizSrVrPikselaFfUint8C.length));
    console.log('Dimenzije komprimovane slike su: ')
    console.log(sirinaKomprimovaneSlike);
    console.log(visinaKomprimovaneSlike);

    //Filtrirani niz piksela
    aaaPodaciUlazneSlike = new ImageData(nizSrVrPikselaFfUint8C, sirinaKomprimovaneSlike, visinaKomprimovaneSlike);
    ctxDemoA.putImageData(aaaPodaciUlazneSlike, 0, 0); 

}

const generisanjeDemoCanvasa = () => {

    //generisanjeDemoCanvasaA();
    obradaUlazneSlike();
    
};

//Novi test

noviDCTpNiz = new Array();

const noviDCTpikseli = () => {

    noviDCTp = new Number(); 
    //noviDCTpUint8Niz = new Uint8ClampedArray(256);
    noviDCTpUint8Niz = new Uint8ClampedArray(4 * 10000);

    for(let i = 0; i < noviDCTpUint8Niz.length; i++){
        
        noviDCTpUint8Niz[i] = piksel[i] * 0.5; 
        noviDCTpNiz.push(noviDCTpUint8Niz[i]);
        
    }

    //noviPodaciDCTslike = new ImageData(noviDCTpUint8Niz, 16);
    noviPodaciDCTslike = new ImageData(noviDCTpUint8Niz, 50);

    ctxDemoDCT.putImageData(noviPodaciDCTslike, 120, 50);
    console.log(noviDCTpNiz);
    console.log(noviDCTpNiz.length);
};

btnGenerisanjeDemo.addEventListener('click', () => {

    generisanjeDemoCanvasa();
    /*
    console.log(noviNizPikselaDemo);
    console.log(nasumicnaVrednostPiksela(0, 255));
    console.log(nasumicnaVrednostPiksela(0, 255));
    */

});

btnNoviUnosDemo.addEventListener('click', () => {
    window.location.reload(true);
});

txtDemoDCTinfo = document.querySelector('#txtDemoDCTinfo');
btnNoviUnosDemoDCT = document.querySelector('#btnNoviUnosDemoDCT');

const funkcijaDCT = () => {

    txtDemoDCTinfo.style.display = 'block';
    txtDemoDCTinfo.value = 'Funkcija je još uvek u fazi izrade...'; 

};

btnDemoDCT.addEventListener('click', () => {

    funkcijaDCT();
    noviDCTpikseli();

});

btnNoviUnosDemoDCT.addEventListener('click', () => {
    window.location.reload(true);
});

demoDCT = document.querySelector('.demoDCT');
testCanvas = document.querySelector('.testCanvas');