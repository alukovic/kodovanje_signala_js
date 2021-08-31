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
    Rezultati prve kompresije slike (v2 | 12.8.2021.)
    Rezultati druge kompresije slike (v4 | 12.8.2021.)
    Rezultati treće kompresije slike (v5 | 12.8.2021.)
    
//Dan20
Pro 2.3.9 13.8.2021. Pet. 
    Novo | Test | Demo | Kompresija | Nastavak
    Otkrivanje novih mogućnosti... (v6 | 13.8.2021.)

//Dan21
Pro 2.3.9 14.8.2021. Sub. 
    Novo | Test | Demo | Kompresija | Nastavak   
    Početak kreiranja funkcije kompresija25p()

//Dan22
Pro 2.3.9 16.8.2021. Pon. 
    Novo | Test | Demo | Kompresija | Nastavak   
    Nastavak kreiranja funkcije kompresija25p()   
//Dan23
Pro 2.3.9 19.8.2021. Čet. 
    Nove ideje 
    Proširenje programa i uvođenje novih funkcija za obradu slike 
//Dan24 
Pro 2.3.9 20.8.2021. Pet. 
    Nove ideje
    Optimizacija funkcije prikaza slike na kanvasu tj. 
    uvođenje univerzalne funkcije za prikaz slike
    Proširenja programa
    Uvođenje RGB slajdera
    Uvođenje dugmeta za resetovanje slike na početnu vrednost
    tj. bez efekata
//Dan25
Pro 2.3.9 21.8.2021. Sub. 
    Uvođenje opcije za isecanje slike
//Dan26    
Pro 2.3.9 23.8.2021. Pon. 
    Spajanje delova programa [DCT (dct.js | dct.html) i obrada slike (slika.js | slika.html)] 
    u jednu, funkcionalnu celinu
    Optimizacija korisničkog interfejsa programa
    Vizuelizacija piksela ulazne matrice
    Vizuelizacija vrednosti amplituda signala slike nakon DCT
    Prilagođavanje opcija za isecanje slike

//Dan27    
Pro 2.3.9 25.8.2021. Sre. 

//Dan28    
Pro 2.3.9 27.8.2021. Pet.   

//Dan29    
Pro 2.3.9 28.8.2021. Sub. 
    Dodavanje opcije za horizontalno i vertikalno okretanje slike, tj. efekat slike ogledala
    Optimizacija i prilagođavanje prikaza slike
    Ulazna slika sada ne menja svoje dimenzije
    Dodavanje opcije za kompresiju slike 
    Nove ideje za uvećanje piksela slike (DCT)
    + Kreiranje slike pomoću canvas.toDataURL() funkcije 

//Dan30  
Pro 2.3.9 30.8.2021. Pon. 
    Nove opcije i proširenja programa: 
        Rezolucija slike u megapikselima (MP)
        Tip slike
        URL slike
        Početak kreiranja funkcija za peuzimanje slike 
        Podaci komprimovane slike
//Dan31
Pro 2.3.9 31.8.2021. Uto.          
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
        optimizacijaPrikazaDCTsadrzaja();

    }

}

window.addEventListener('load', function(){

    optimizacijaPrikaza();
    optimizacijaPrikazaDCTsadrzaja();

    //DCT sadržaj
    dctSadrzajPodrazumevano();

    txtUcitavanje.style.display = 'none'; 

    meniSlika.style.display = 'none'; 
    obradaSlike.style.display = 'none'; 
    opcioniPodaciSakrivanje.style.display = 'none';
    noviMeni.style.display = 'none'; 
    txtDemoDCTinfo.style.display = 'none';
    sakrivanjeRGBA();
    
    demoDCT.style.display = 'none';
    testCanvas.style.display = 'none';

    //Podaci o kompresiji slike: 
    //kompresijaSlikePodaci.style.display = 'none'; 
    
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

                /* AAAAA #1 */

                /*
                if(slika.width >= 1920){

                    canvasSlike.width = slika.width / 6; 
                    canvasSlike.height = slika.height / 6; 
    
                    } else {
    
                        canvasSlike.width = slika.width / 3; 
                        canvasSlike.height = slika.height / 3; 
    
                    }
                */
               
                if(slika.width >= 1920){

                    canvasSlike.width = slika.width; 
                    canvasSlike.height = slika.height; 
        
                    } else {
        
                        canvasSlike.width = slika.width; 
                        canvasSlike.height = slika.height; 
        
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
                opcijePrikazaSlikeZaRotaciju();
                prikazSlike(slika, canvasProizvoljniEfekat, ctxProizvoljniEfekat); 
                prikazSlike(slika, canvasIsecanjeSlike, ctxIsecanjeSlike); 

                //Efekat ogledala
                prikazSlike(slika, canvasSlikeOgledala, ctxSlikeOgledala); 

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

        
        testA = [1, 2, 3, 4, 5]; 

        podaciSaSlike = ctx.getImageData(0, 0, canvasSlike.width, canvasSlike.height); 
        nizPiksela = podaciSaSlike.data;
        //console.log('Uint8Clamped niz piksela: ', nizPiksela); 

        
        nizPikselaA = Array.prototype.slice.call(nizPiksela);
        console.log('JavaScript niz piksela: ', nizPikselaA); 

        //nizPiksela4String = ''; 
        nizPiksela4elementa = new Array(); 
        console.log('nizPikselaA.length: ' + nizPikselaA.length); 
        console.log('nizPiksela.length: ' + nizPiksela.length); 
        
        
        //Opciono formatiranje prikaza piksela: 

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
    
     rezolucijaSlike = document.querySelector('#inpRezolucijaSlike'); 
     brojPiksela = document.querySelector('#inpBrojPiksela');
     brojMP = document.querySelector('#inpMP');
     brojMPbr = new Number();
     tipSlike = document.querySelector('#inpTipSlike'); 
     urlSlike = document.querySelector('#inpURLslike');
     urlSlikeVrednost = new String(); 
     urlSlikeVrednostF = new String(); 

    btnPodaciSlika.addEventListener('click', async function(){

    
        korak1 = await setTimeout(() => {

            txtRGBA.value = nizPiksela4String;
            //funkcijaUcitavanje(); 

            //Novi kod: 30.8.2021. 
            //txtRGBA.value = `${testA}`;

            setInterval(funkcijaUcitavanje, 500);

        }, 0); 
        
        korak2 = await setTimeout(() => {

            obradaSlike.style.display = 'block'; 
            rezolucijaSlike.value = `${canvasSlike.width} x ${canvasSlike.height} piksela`; 
            brojPiksela.value = Number(canvasSlike.width * canvasSlike.height); 
            brojMPbr = Number((canvasSlike.width * canvasSlike.height) / Math.pow(10, 6)).toFixed(2);
            brojMP.value = `${brojMPbr} MP`;

            urlSlikeVrednost = canvasSlike.toDataURL();
            urlSlike.value = urlSlikeVrednost; 

            urlSlikeVrednostF = urlSlikeVrednost.slice(5, 14);
            tipSlike.value = `${urlSlikeVrednostF}`; 
            console.log(urlSlikeVrednostF); 

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

//Crno-beli efekat slike
function opcijePrikazaNoveSlike() {

    /*AAAAAAA #2
    if(slika.width >= 1920){

        canvasSlikeA.width = slika.width / 6; 
        canvasSlikeA.height = slika.height / 6; 

        } else {

            canvasSlikeA.width = slika.width / 3; 
            canvasSlikeA.height = slika.height / 3; 

        }
        */
        if(slika.width >= 1920){

        canvasSlikeA.width = slika.width; 
        canvasSlikeA.height = slika.height; 
    
        } else {
    
        canvasSlikeA.width = slika.width; 
        canvasSlikeA.height = slika.height; 
    
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

    /* 
    AAAAAAAAAA #3
    if(slika.width >= 1920){

        canvasDemoA.width = slika.width / 6; 
        canvasDemoA.height = slika.height / 6; 

        } else {

            canvasDemoA.width = slika.width / 3; 
            canvasDemoA.height = slika.height / 3; 

        }
    */

    if(slika.width >= 1920){

        canvasDemoA.width = slika.width; 
        canvasDemoA.height = slika.height; 
    
        } else {
    
            canvasDemoA.width = slika.width; 
            canvasDemoA.height = slika.height; 
    
        }

    podaciUlazneSlike = ctx.getImageData(0, 0, canvasDemoA.width, canvasDemoA.height);
    //pikseliUlazneSlike = podaciUlazneSlike.data;

    console.log('Svi podaci ulazne slike: ', podaciUlazneSlike);
    console.log('Vrednosti piksela ulazne slike (1. način prikaza): ', podaciUlazneSlike.data);
    //console.log('Pikseli ulazne slike (2. način prikaza): ', pikseliUlazneSlike);
    //console.log('Broj piksela ulazne slike: ', pikseliUlazneSlike.length);

    srVrPiksela = new Number(); 
    nizSrVrPiksela = new Array();
    nizSrVrPikselaUint8C = new Uint8ClampedArray();

    nizSrVrPikselaF = new Array();
    nizSrVrPikselaFuInt8C = new Uint8ClampedArray();

    nizSrVrPikselaFf = new Array();
    nizSrVrPikselaFfUint8C = new Uint8ClampedArray();

    for(let i = 0; i < podaciUlazneSlike.data.length; i+=3){
        
        //srVrPiksela[i] = Math.round((pikseliUlazneSlike[i] + pikseliUlazneSlike[i + 1] + pikseliUlazneSlike[i + 2] + pikseliUlazneSlike[i + 3]) / 4);
        
        /*
        pikseliUlazneSlike[i] = srVrPiksela;
        pikseliUlazneSlike[i + 1] = srVrPiksela;
        pikseliUlazneSlike[i + 2] = srVrPiksela;
        pikseliUlazneSlike[i + 4] = srVrPiksela;
        */

       //nizSrVrPiksela.push(srVrPiksela[i]);
       //nizSrVrPikselaUint8C = new Uint8ClampedArray(nizSrVrPiksela); 

    //########
    //Novi test A: 

    let parametar = (podaciUlazneSlike.data[i] + podaciUlazneSlike.data[i + 1] + podaciUlazneSlike.data[i + 2]) / 2;

    podaciUlazneSlike.data[i] = parametar;
    podaciUlazneSlike.data[i + 1] = parametar;
    podaciUlazneSlike.data[i + 2] = parametar; 

    //nizSrVrPiksela.push(pikseliUlazneSlike[i]);
    //nizSrVrPikselaUint8C = new Uint8ClampedArray(nizSrVrPiksela);

    }

    ctxDemoA.putImageData(podaciUlazneSlike, 0, 0); 

    //nizSrVrPiksela.push(23);
    //nizSrVrPiksela.push(23);

    console.log('Niz srVr piksela: ');
    console.log(nizSrVrPiksela);
    console.log('Dužina niza nakon primenjene aritmetičke sredine piksela: ', nizSrVrPiksela.length);

    //+++++
    //+++++dugo vreme obrade
    //for(let i = 0; i < nizSrVrPiksela.length; i++){
        nizSrVrPikselaUint8C = new Uint8ClampedArray(nizSrVrPiksela);  
    //}
    console.log('Uint8ClampedArray: ');
    console.log(nizSrVrPikselaUint8C);
    
    //Test deljivosti piksela... 
    ostatakPriDeljenju = nizSrVrPiksela.length % 4;
    noviBroj = new Number();
    console.log('test deljivosti sa 4 - ostatak pri deljenju je: ', ostatakPriDeljenju); 

    if(ostatakPriDeljenju === 1){

        console.log(nizSrVrPiksela.length / 4);
        console.log('Nije deljiv sa četiri, ostatak je: ', ostatakPriDeljenju); 
        noviBroj = nizSrVrPiksela.length + 3; 

        for(let i = 0; i < 3; i++){
            nizSrVrPiksela.push(nizSrVrPiksela[nizSrVrPiksela.length - 1]);
        }

        console.log('Novi broj: ', noviBroj); 
        console.log('Novi test deljivosti: ');
        console.log('Količnik je sada: ', noviBroj / 4);
        console.log('Ostatak pri deljenju je sada: ', noviBroj % 4);

        //Novo
        console.log(nizSrVrPiksela);
        console.log(nizSrVrPiksela.length); 
        console.log(nizSrVrPikselaUint8C.length); 

        console.log('Širina je: ', canvasDemoA.width); 
        console.log('Visina je: ', canvasDemoA.height);
        console.log('Druga formula za širinu je: ', (Math.round(nizSrVrPiksela.length /(canvasDemoA.height))));
        console.log('Druga formula za visinu je: ', (Math.round(nizSrVrPiksela.length /(4 * canvasDemoA.width))));

        nizSrVrPikselaUint8C = new Uint8ClampedArray(nizSrVrPiksela);  

        //Novi test: 
        aaaPodaciUlazneSlike = new ImageData(nizSrVrPikselaUint8C, canvasDemoA.width, canvasDemoA.height);
        //aaaPodaciUlazneSlike = new ImageData(nizSrVrPikselaUint8C, (Math.round((nizSrVrPiksela.length - 3) /(canvasDemoA.height))), (Math.round((nizSrVrPiksela.length - 3) /(4 * canvasDemoA.width))));
        ctxDemoA.putImageData(aaaPodaciUlazneSlike, 30, 20); 

    } else if(ostatakPriDeljenju === 2){

        console.log(nizSrVrPiksela.length / 4);
        console.log('Deljiv je sa četiri, ostatak je: ', ostatakPriDeljenju);
        noviBroj = nizSrVrPiksela.length + 2; 

        for(let i = 0; i < 2; i++){
            nizSrVrPiksela.push(nizSrVrPiksela[nizSrVrPiksela.length - 1]);
        }

        console.log('Novi broj: ', noviBroj); 
        console.log('Novi test deljivosti: ');
        console.log('Količnik je sada: ', noviBroj / 4);
        console.log('Ostatak pri deljenju je sada: ', noviBroj % 4); 

        //Novo
        console.log(nizSrVrPiksela);
        console.log(nizSrVrPiksela.length); 
        console.log(nizSrVrPikselaUint8C.length); 

        nizSrVrPikselaUint8C = new Uint8ClampedArray(nizSrVrPiksela);  

        //Novi test: 
        aaaPodaciUlazneSlike = new ImageData(nizSrVrPikselaUint8C, canvasDemoA.width / 2, canvasDemoA.height / 2);
        ctxDemoA.putImageData(aaaPodaciUlazneSlike, 30, 20); 

    } else if(ostatakPriDeljenju === 3){

        console.log(nizSrVrPiksela.length / 4);
        console.log('Deljiv je sa četiri, ostatak je: ', ostatakPriDeljenju); 
        noviBroj = nizSrVrPiksela.length + 1; 

        for(let i = 0; i < 1; i++){
            nizSrVrPiksela.push(nizSrVrPiksela[nizSrVrPiksela.length - 1]);
        }

        console.log('Novi broj: ', noviBroj); 
        console.log('Novi test deljivosti: ');
        console.log('Količnik je sada: ', noviBroj / 4);
        console.log('Ostatak pri deljenju je sada: ', noviBroj % 4);

        //Novo
        console.log(nizSrVrPiksela);
        console.log(nizSrVrPiksela.length); 
        console.log(nizSrVrPikselaUint8C.length); 
        
        nizSrVrPikselaUint8C = new Uint8ClampedArray(nizSrVrPiksela);  

        //Novi test: 
        aaaPodaciUlazneSlike = new ImageData(nizSrVrPikselaUint8C, canvasDemoA.width / 2, canvasDemoA.height / 2);
        ctxDemoA.putImageData(aaaPodaciUlazneSlike, 30, 20); 

    } else {
        console.log(ostatakPriDeljenju); 

        //Novi test: 
        //aaaPodaciUlazneSlike = new ImageData(nizSrVrPikselaUint8C, canvasDemoA.width / 2, canvasDemoA.height / 2);
        //ctxDemoA.putImageData(aaaPodaciUlazneSlike, 30, 20); 

    }
    
    //Novi test: 
    //aaaPodaciUlazneSlike = new ImageData(nizSrVrPikselaUint8C, canvasDemoA.width / 2, canvasDemoA.height / 2);
    //ctxDemoA.putImageData(aaaPodaciUlazneSlike, 30, 20); 

}

const uklanjanjeElementaNiza = (niz, clan) => {

        for(let i = clan - 1; i < niz.length; i += clan){
            niz.splice(i, 1);
        };

};

const kompresija25p = () => {

    testNizNovo = new Array(); 
    aPodaciUlazneSlikeNizNovo = new Array();

    console.log('Pozdrav svima'); 
    
    aPodaciUlazneSlike = ctx.getImageData(0, 0, canvasSlike.width, canvasSlike.height);
    console.log('Vrednosti svih piksela ulazne slike: ', aPodaciUlazneSlike.data); 
    console.log('Broj piksela ulazne slike: ', aPodaciUlazneSlike.data.length / 4);

    aPodaciUlazneSlikeNiz = Array.prototype.slice.call(aPodaciUlazneSlike.data);
    console.log(aPodaciUlazneSlikeNiz); 

    testNiz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    console.log('Test niz: ', testNiz);
    uklanjanjeElementaNiza(testNiz, 4);
    console.log('Kompresija...'); 
    console.log('Dužina test niza posle kompresije je: ', testNiz.length);

    if(testNiz.length % 4 === 1){

        testNizNovo = testNiz.slice(0, testNiz.length - 1);
        console.log('Broj elemenata novog niza je: ', testNizNovo.length);
        console.log('Elementi novog niza posle kompresije: ', testNizNovo);

    } else if(testNiz.length % 4 === 2){

        testNizNovo = testNiz.slice(0, testNiz.length - 2);
        console.log('Broj elemenata novog niza je: ', testNizNovo.length);
        console.log('Elementi novog niza posle kompresije: ', testNizNovo);

    } else if(testNiz.length % 4 === 3){

        testNizNovo = testNiz.slice(0, testNiz.length - 3);
        console.log('Broj elemenata novog niza je: ', testNizNovo.length);
        console.log('Elementi novog niza posle kompresije: ', testNizNovo);

    } else {

        testNizNovo = testNiz.slice(0, testNiz.length);
        console.log('Broj elemenata novog niza je: ', testNizNovo.length);
        console.log('Elementi novog niza posle kompresije: ', testNizNovo);

    }
  
    console.log('Kompresija piksela ulazne slike...');
    uklanjanjeElementaNiza(aPodaciUlazneSlikeNiz, 4);
    console.log('Pikseli slike nakon kompresije: ', aPodaciUlazneSlikeNiz); 

    if(aPodaciUlazneSlikeNiz.length % 4 === 1){

        aPodaciUlazneSlikeNizNovo = aPodaciUlazneSlikeNiz.slice(0, aPodaciUlazneSlikeNiz.length - 1);
        console.log('Broj elemenata novog niza je: ', aPodaciUlazneSlikeNizNovo.length);
        console.log('Elementi novog niza posle kompresije: ', aPodaciUlazneSlikeNizNovo);

    } else if(aPodaciUlazneSlikeNiz.length % 4 === 2){

        aPodaciUlazneSlikeNizNovo = aPodaciUlazneSlikeNiz.slice(0, aPodaciUlazneSlikeNiz.length - 2);
        console.log('Broj elemenata novog niza je: ', aPodaciUlazneSlikeNizNovo.length);
        console.log('Elementi novog niza posle kompresije: ', aPodaciUlazneSlikeNizNovo);

    } else if(aPodaciUlazneSlikeNiz.length % 4 === 3){

        aPodaciUlazneSlikeNizNovo = aPodaciUlazneSlikeNiz.slice(0, aPodaciUlazneSlikeNiz.length - 3);
        console.log('Broj elemenata novog niza je: ', aPodaciUlazneSlikeNizNovo.length);
        console.log('Elementi novog niza posle kompresije: ', aPodaciUlazneSlikeNizNovo);

    } else {

        aPodaciUlazneSlikeNizNovo = aPodaciUlazneSlikeNiz.slice(0, aPodaciUlazneSlikeNiz.length);
        console.log('Broj elemenata novog niza je: ', aPodaciUlazneSlikeNizNovo.length);
        console.log('Elementi novog niza posle kompresije: ', aPodaciUlazneSlikeNizNovo);

    }

    console.log('Broj piksela slike nakon kompresije: ', aPodaciUlazneSlikeNizNovo.length / 4); 

    aPodaciUlazneSlikeNizUint8C = new Uint8ClampedArray(aPodaciUlazneSlikeNizNovo);
    console.log('Smeštanje piksela nakon kompresije u Uint8Clamped niz: ', aPodaciUlazneSlikeNizUint8C);
    console.log('Broj elemenata Uint8Clamped niza: ', aPodaciUlazneSlikeNizUint8C.length); 
    console.log('Broj piksela je sada: ', aPodaciUlazneSlikeNizUint8C.length / 4);

    //aSlika = new ImageData(aPodaciUlazneSlikeNizUint8C, canvasDemoA.width, canvasDemoA.height);
    //ctxDemoA.putImageData(aSlika, 300, 120); 

    let proizvod = aPodaciUlazneSlikeNizUint8C.length; 
    console.log('4 * sirina * visina je: ', proizvod);

    let sirina = Number(Math.round(canvasSlike.width - canvasSlike.width * (aPodaciUlazneSlikeNizNovo.length / aPodaciUlazneSlike.data.length)));
    let visina = Number(Math.round(canvasSlike.height - canvasSlike.height * (aPodaciUlazneSlikeNizNovo.length / aPodaciUlazneSlike.data.length)));
    
    //sirina = Number(Math.round((proizvod / 4) / (visina)));
    //visina = Number(Math.round((proizvod / 4) / (sirina))); 

    console.log(canvasDemoA.width);
    console.log(canvasDemoA.height / 5); 

    console.log('Broj piksela slike pre kompresije: ', aPodaciUlazneSlike.data.length);
    console.log('Broj piksela slike nakon kompresije: ', aPodaciUlazneSlikeNizNovo.length);
    
    let odnos = (aPodaciUlazneSlikeNizNovo.length / aPodaciUlazneSlike.data.length);

    console.log('U procesu kompresije uklonjeno je: ', odnos, 'tj. ', odnos*100, '% piksela');

    console.log('Dimenzije ulazne slike: ');
    console.log(canvasSlike.width);
    console.log(canvasSlike.height);
    
    console.log('Širina je: ', sirina);
    console.log('Visina je: ', visina);

    console.log(aPodaciUlazneSlikeNizNovo.length === 4 * sirina * visina); 
    console.log(aPodaciUlazneSlikeNizUint8C.length === 4 * sirina * visina); 

    let podaciA = new ImageData(aPodaciUlazneSlikeNizUint8C, sirina, visina);
    console.log(podaciA.data);  

    canvasDemoA.width = sirina;
    canvasDemoA.height = visina; 

    ctxDemoA.putImageData(podaciA, canvasDemoA.width, canvasDemoA.height); 

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
    //kompresija25p();
 
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

//Prikaz efekta crvene boje
btnCrvenaBoja = document.querySelector('#btnCrvenaBoja');
btnBrisanjeCrvenaBoja = document.querySelector('#btnBrisanjeCrvenaBoja');

canvasCrveneSlike = document.querySelector('#canvasCrveneSlike');
ctxCrvenaSlika = canvasCrveneSlike.getContext('2d');

const prikazCrveneSlike = () => {

    /* AAAAAA #4 

    if(slika.width >= 1920){

        canvasCrveneSlike.width = slika.width / 6; 
        canvasCrveneSlike.height = slika.height / 6; 

        } else {

            canvasCrveneSlike.width = slika.width / 3; 
            canvasCrveneSlike.height = slika.height / 3; 

        }
    */

    if(slika.width >= 1920){

        canvasCrveneSlike.width = slika.width; 
        canvasCrveneSlike.height = slika.height; 
    
        } else {
    
            canvasCrveneSlike.width = slika.width; 
            canvasCrveneSlike.height = slika.height; 
    
        }

        ctxCrvenaSlika.drawImage(slika, 0, 0, canvasCrveneSlike.width, canvasCrveneSlike.height);

        pikseliCrveneSlike = ctxCrvenaSlika.getImageData(0, 0, canvasCrveneSlike.width, canvasCrveneSlike.height);
    
        for(let i = 0; i < pikseliCrveneSlike.data.length; i+=4){
    
            let vrednost = pikseliCrveneSlike.data[i] + pikseliCrveneSlike.data[i + 1] +  pikseliCrveneSlike.data[i + 2]; 
            let arSred = vrednost / 3;
            pikseliCrveneSlike.data[i] = arSred * 5;
            pikseliCrveneSlike.data[i + 1] = arSred;
            pikseliCrveneSlike.data[i + 2] = arSred;

        }
    
        ctxCrvenaSlika.putImageData(pikseliCrveneSlike, 0, 0); 

}

btnCrvenaBoja.addEventListener('click', () => {
    prikazCrveneSlike();
});

btnBrisanjeCrvenaBoja.addEventListener('click', () => {
    window.location.reload(true);
});

//Prikaz efekta zelene boje
btnZelenaBoja = document.querySelector('#btnZelenaBoja');
btnBrisanjeZelenaBoja = document.querySelector('#btnBrisanjeZelenaBoja');

canvasZeleneSlike = document.querySelector('#canvasZeleneSlike');
ctxZelenaSlika = canvasZeleneSlike.getContext('2d');

const prikazZeleneSlike = () => {

    /* AAAAAA #5

    if(slika.width >= 1920){

        canvasZeleneSlike.width = slika.width / 6; 
        canvasZeleneSlike.height = slika.height / 6; 

        } else {

            canvasZeleneSlike.width = slika.width / 3; 
            canvasZeleneSlike.height = slika.height / 3; 

        }

    */

    if(slika.width >= 1920){

        canvasZeleneSlike.width = slika.width; 
        canvasZeleneSlike.height = slika.height; 
    
        } else {
    
            canvasZeleneSlike.width = slika.width; 
            canvasZeleneSlike.height = slika.height; 
    
        }

        ctxZelenaSlika.drawImage(slika, 0, 0, canvasZeleneSlike.width, canvasZeleneSlike.height);

        pikseliZeleneSlike = ctxZelenaSlika.getImageData(0, 0, canvasZeleneSlike.width, canvasZeleneSlike.height);
    
        for(let i = 0; i < pikseliZeleneSlike.data.length; i+=4){
    
            let vrednost = pikseliZeleneSlike.data[i] + pikseliZeleneSlike.data[i + 1] +  pikseliZeleneSlike.data[i + 2]; 
            let arSred = vrednost / 3;
            pikseliZeleneSlike.data[i] = arSred;
            pikseliZeleneSlike.data[i + 1] = arSred * 5;
            pikseliZeleneSlike.data[i + 2] = arSred;

        }
    
        ctxZelenaSlika.putImageData(pikseliZeleneSlike, 0, 0); 

}

btnZelenaBoja.addEventListener('click', () => {
    prikazZeleneSlike();
});

btnBrisanjeZelenaBoja.addEventListener('click', () => {
    window.location.reload(true);
});


//Prikaz efekta plave boje
btnPlavaBoja = document.querySelector('#btnPlavaBoja');
btnBrisanjePlavaBoja = document.querySelector('#btnBrisanjePlavaBoja');

canvasPlaveSlike = document.querySelector('#canvasPlaveSlike');
ctxPlavaSlika = canvasPlaveSlike.getContext('2d');

const prikazPlaveSlike = () => {

    /* AAAAAA #6 
    if(slika.width >= 1920){

        canvasPlaveSlike.width = slika.width / 6; 
        canvasPlaveSlike.height = slika.height / 6; 

        } else {

            canvasPlaveSlike.width = slika.width / 3; 
            canvasPlaveSlike.height = slika.height / 3; 

        }

    */
    if(slika.width >= 1920){

        canvasPlaveSlike.width = slika.width; 
        canvasPlaveSlike.height = slika.height; 

        } else {

            canvasPlaveSlike.width = slika.width; 
            canvasPlaveSlike.height = slika.height; 

        }

        ctxPlavaSlika.drawImage(slika, 0, 0, canvasPlaveSlike.width, canvasPlaveSlike.height);

        pikseliPlaveSlike = ctxPlavaSlika.getImageData(0, 0, canvasPlaveSlike.width, canvasPlaveSlike.height);
    
        for(let i = 0; i < pikseliPlaveSlike.data.length; i+=4){
    
            let vrednost = pikseliPlaveSlike.data[i] + pikseliPlaveSlike.data[i + 1] +  pikseliPlaveSlike.data[i + 2]; 
            let arSred = vrednost / 3;
            pikseliPlaveSlike.data[i] = arSred;
            pikseliPlaveSlike.data[i + 1] = arSred;
            pikseliPlaveSlike.data[i + 2] = arSred * 5;

        }
    
        ctxPlavaSlika.putImageData(pikseliPlaveSlike, 0, 0); 

}

btnPlavaBoja.addEventListener('click', () => {
    prikazPlaveSlike();
});

btnBrisanjePlavaBoja.addEventListener('click', () => {
    window.location.reload(true);
});

//Rotacija slike: 
meniRotacijaSlike = document.querySelector('.meniRotacijaSlike'); 
canvasSlikeZaRotaciju = document.querySelector('#canvasSlikeZaRotaciju');
ctxRotacija = canvasSlikeZaRotaciju.getContext('2d');

const opcijePrikazaSlikeZaRotaciju = () => {

    /* AAAAAA #7

    if(slika.width >= 1920){

        canvasSlikeZaRotaciju.width = slika.width / 6; 
        canvasSlikeZaRotaciju.height = slika.height / 6; 

        } else {

            canvasSlikeZaRotaciju.width = slika.width / 3; 
            canvasSlikeZaRotaciju.height = slika.height / 3; 

        }
    */

    if(slika.width >= 1920){

        canvasSlikeZaRotaciju.width = slika.width; 
        canvasSlikeZaRotaciju.height = slika.height; 
    
        } else {
    
            canvasSlikeZaRotaciju.width = slika.width; 
            canvasSlikeZaRotaciju.height = slika.height; 
    
        }

        ctxRotacija.drawImage(slika, 0, 0, canvasSlikeZaRotaciju.width, canvasSlikeZaRotaciju.height);
}

meniRotacijaSlike.addEventListener('load', () => {
    opcijePrikazaSlikeZaRotaciju();
});

btnRotacija = document.querySelector('#btnRotacija'); 
btnRotacijaNovo = document.querySelector('#btnRotacijaNovo');
ugaoRotacije = document.querySelector('#inpUgaoRotacije');

btnRotacija.addEventListener('click', () => {
    rotacijaSlike(slika,  Number(ugaoRotacije.value));
});

btnRotacijaNovo.addEventListener('click', () => {

    ugaoRotacije.value = '';
    opcijePrikazaSlikeZaRotaciju();

});

const rotacijaSlike = (img, ugao) => {

    ctxRotacija.save();
    ctxRotacija.translate(canvasSlikeZaRotaciju.width / 2, canvasSlikeZaRotaciju.height / 2);
    ctxRotacija.rotate(Number(ugaoRotacije.value) * Math.PI / 180);
    ctxRotacija.drawImage(slika, -slika.width / 2, -slika.height / 2);
    ctxRotacija.restore();

    console.log(Number(ugaoRotacije.value));
    
};

//Univerzalna funkcija za prikaz slike
const prikazSlike = (img, canvas, ctx) => {

    /* 
    AAAAAA #8

    if(img.width >= 1920){

        canvas.width = img.width / 6; 
        canvas.height = img.height / 6; 

        } else {

            canvas.width = img.width / 3; 
            canvas.height = img.height / 3; 

        }

    */

    if(img.width >= 1920){

        canvas.width = img.width; 
        canvas.height = img.height; 
    
        } else {
    
            canvas.width = img.width; 
            canvas.height = img.height; 
    
        }

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};


canvasProizvoljniEfekat = document.querySelector('#canvasProizvoljniEfekat'); 
ctxProizvoljniEfekat = canvasProizvoljniEfekat.getContext('2d');

//prikazSlike(slika, canvasProizvoljniEfekat, ctxProizvoljniEfekat); 

//RGBA
slajderR = document.querySelector('#slajderR').value;
slajderG = document.querySelector('#slajderG').value;
slajderB = document.querySelector('#slajderB').value;
slajderA = document.querySelector('#slajderA').value;

const odabirR = () => {

    slajderR = document.querySelector('#slajderR').value;
    //let slajderG = document.querySelector('#slajderG').value;
    //let slajderB = document.querySelector('#slajderB').value;
    //let slajderA = document.querySelector('#slajderA').value;

    pikseliSlikeSaProizvoljnogEfekta = ctxProizvoljniEfekat.getImageData(0, 0, canvasProizvoljniEfekat.width, canvasProizvoljniEfekat.height);
    
    //R
    for(let i = 0; i < pikseliSlikeSaProizvoljnogEfekta.data.length; i+=4){
        pikseliSlikeSaProizvoljnogEfekta.data[i] = slajderR;
    }


    ctxProizvoljniEfekat.putImageData(pikseliSlikeSaProizvoljnogEfekta, 0, 0); 
}

const odabirG= () => {

    //let slajderR = document.querySelector('#slajderR').value;
    slajderG = document.querySelector('#slajderG').value;
    //let slajderB = document.querySelector('#slajderB').value;
    //let slajderA = document.querySelector('#slajderA').value;

    pikseliSlikeSaProizvoljnogEfekta = ctxProizvoljniEfekat.getImageData(0, 0, canvasProizvoljniEfekat.width, canvasProizvoljniEfekat.height);
    
    //G
    for(let i = 0; i < pikseliSlikeSaProizvoljnogEfekta.data.length; i+=4){
        pikseliSlikeSaProizvoljnogEfekta.data[i + 1] = slajderG;
    }

    ctxProizvoljniEfekat.putImageData(pikseliSlikeSaProizvoljnogEfekta, 0, 0); 

}

const odabirB= () => {

    //let slajderR = document.querySelector('#slajderR').value;
    //let slajderG = document.querySelector('#slajderG').value;
    slajderB = document.querySelector('#slajderB').value;
    //let slajderA = document.querySelector('#slajderA').value;

    pikseliSlikeSaProizvoljnogEfekta = ctxProizvoljniEfekat.getImageData(0, 0, canvasProizvoljniEfekat.width, canvasProizvoljniEfekat.height);
    
    //B
    for(let i = 0; i < pikseliSlikeSaProizvoljnogEfekta.data.length; i+=4){
        pikseliSlikeSaProizvoljnogEfekta.data[i + 2] = slajderB;
    }

    ctxProizvoljniEfekat.putImageData(pikseliSlikeSaProizvoljnogEfekta, 0, 0); 

}

const odabirA= () => {

    //let slajderR = document.querySelector('#slajderR').value;
    //let slajderG = document.querySelector('#slajderG').value;
    //let slajderB = document.querySelector('#slajderB').value;
    slajderA = document.querySelector('#slajderA').value;

    pikseliSlikeSaProizvoljnogEfekta = ctxProizvoljniEfekat.getImageData(0, 0, canvasProizvoljniEfekat.width, canvasProizvoljniEfekat.height);
    
    //B
    for(let i = 0; i < pikseliSlikeSaProizvoljnogEfekta.data.length; i+=4){
        pikseliSlikeSaProizvoljnogEfekta.data[i + 3] = slajderA;
    }

    ctxProizvoljniEfekat.putImageData(pikseliSlikeSaProizvoljnogEfekta, 0, 0); 

}

btnResetRGBA = document.querySelector('#btnResetRGBA'); 

btnResetRGBA.addEventListener('click', () => {
    prikazSlike(slika, canvasProizvoljniEfekat, ctxProizvoljniEfekat);  
});

slajderRGBA = document.querySelector('.slajderRGBA');

document.querySelector('input[type="range"]').addEventListener('oninput', () => {
    btnResetRGBA.style.backgroundColor = 'rgba('+ slajderR +','+ slajderG +','+ slajderB +','+ slajderA + ')';
});

//Isecanje slike: 
canvasIsecanjeSlike = document.querySelector('#canvasIsecanjeSlike');
ctxIsecanjeSlike = canvasIsecanjeSlike.getContext('2d');

canvasIsecanjeSlikeA = document.querySelector('#canvasIsecanjeSlikeA');
ctxIsecanjeSlikeA = canvasIsecanjeSlikeA.getContext('2d');

isecanjeXosa = document.querySelector('#isecanjeXosa');
isecanjeYosa = document.querySelector('#isecanjeYosa');
isecanjeSirina = document.querySelector('#isecanjeSirina');
isecanjeVisina = document.querySelector('#isecanjeVisina'); 

btnIsecanje = document.querySelector('#btnIsecanje');
btnIsecanjeNoviUnos = document.querySelector('#btnIsecanjeNoviUnos'); 

btnIsecanje.addEventListener('click', () => {

    /*AAAAAA #9 */
    if(slika.width >= 1920){

        //canvasIsecanjeSlikeA.width = slika.width / 6; 
        //canvasIsecanjeSlikeA.height = slika.height / 6; 

        canvasIsecanjeSlikeA.width = slika.width / 1; 
        canvasIsecanjeSlikeA.height = slika.height / 1; 

        //ctxIsecanjeSlikeA.drawImage(slika, isecanjeXosa.value * 6, isecanjeYosa.value * 6, isecanjeSirina.value * 6, isecanjeVisina.value * 6, 0, 0, canvasIsecanjeSlikeA.width, canvasIsecanjeSlikeA.height);
        ctxIsecanjeSlikeA.drawImage(slika, isecanjeXosa.value * 1, isecanjeYosa.value * 1, isecanjeSirina.value * 1, isecanjeVisina.value * 1, 0, 0, canvasIsecanjeSlikeA.width, canvasIsecanjeSlikeA.height);

        } else {

            //canvasIsecanjeSlikeA.width = slika.width / 3; 
            //canvasIsecanjeSlikeA.height = slika.height / 3; 

            //ctxIsecanjeSlikeA.drawImage(slika, isecanjeXosa.value * 3, isecanjeYosa.value * 3, isecanjeSirina.value * 3, isecanjeVisina.value * 3, 0, 0, canvasIsecanjeSlikeA.width, canvasIsecanjeSlikeA.height);

            canvasIsecanjeSlikeA.width = slika.width / 1; 
            canvasIsecanjeSlikeA.height = slika.height / 1; 

            ctxIsecanjeSlikeA.drawImage(slika, isecanjeXosa.value * 1, isecanjeYosa.value * 1, isecanjeSirina.value * 1, isecanjeVisina.value * 1, 0, 0, canvasIsecanjeSlikeA.width, canvasIsecanjeSlikeA.height);            
        }

    //ctxIsecanjeSlikeA.drawImage(slika, 0, 0, canvasIsecanjeSlikeA.width, canvasIsecanjeSlikeA.height, 0, 0, isecanjeXosa.value, isecanjeYosa.value, isecanjeSirina, isecanjeVisina);
    //ctxIsecanjeSlikeA.drawImage(slika, 0, 0, canvasIsecanjeSlike.width, canvasIsecanjeSlike.height, isecanjeXosa.value, isecanjeYosa.value, isecanjeSirina.value, isecanjeVisina.value);
    //ctxIsecanjeSlikeA.drawImage(slika, isecanjeXosa.value * 3, isecanjeYosa.value * 3, isecanjeSirina.value * 3, isecanjeVisina.value * 3, 0, 0, canvasIsecanjeSlikeA.width, canvasIsecanjeSlikeA.height);

});

btnIsecanjeNoviUnos.addEventListener('click', () => {

    isecanjeXosa.value = null;
    isecanjeYosa.value = null;
    isecanjeSirina.value = null;
    isecanjeVisina.value = null;
    ctxIsecanjeSlikeA.clearRect(0, 0, canvasIsecanjeSlikeA.width, canvasIsecanjeSlikeA.height);

});

//DCT meni
dctPocetniMeni = document.querySelector('.dctPocetniMeni');
dctMeniSakrivanje = document.querySelector('.dctMeniSakrivanje');
dctSadrzaj = document.querySelector('.dctSadrzaj');

const dctSadrzajPodrazumevano = () => {

    dctSadrzaj.style.display = 'none';
    dctPocetniMeni.style.display = 'block';
    dctMeniSakrivanje.style.display = 'none';
    dctSadrzajA.style.display = 'block';
    dctSadrzajB.style.display = 'none';

};

const optimizacijaPrikazaDCTsadrzaja = () => {

    dctSadrzaj.style.display = 'none';
    dctPocetniMeni.style.display = 'none';
    dctMeniSakrivanje.style.display = 'none';

}

const dctPrikazSadrzaja = () => {

    dctSadrzaj.style.display = 'block';
    dctPocetniMeni.style.display = 'none';
    dctMeniSakrivanje.style.display = 'block';

};

const dctSakrivanjeSadrzaja = () => {

    dctSadrzaj.style.display = 'none';
    dctPocetniMeni.style.display = 'none';
    dctMeniSakrivanje.style.display = 'block';

};

prikazDCTsadrzaja = document.querySelector('#prikazDCTsadrzaja');
sakrivanjeDCTsadrzaja = document.querySelector('#sakrivanjeDCTsadrzaja');
sakrivanjeDCTsadrzajaA = document.querySelector('#sakrivanjeDCTsadrzajaA');

prikazDCTsadrzaja.addEventListener('click', () => {
    dctPrikazSadrzaja();
});

sakrivanjeDCTsadrzaja.addEventListener('click', () => {
    dctSadrzajPodrazumevano();
});

sakrivanjeDCTsadrzajaA.addEventListener('click', () => {

    dctSadrzajPodrazumevano();
    dctSadrzajB.style.display = 'block';

});

//DCT kod
dctSadrzajA = document.querySelector('.dctSadrzajA');
dctSadrzajB = document.querySelector('.dctSadrzajB');

//Efekat ogledala slike
horizontalnoOkretanje = document.querySelector('#horizontalnoOkretanje');
vertikalnoOkretanje = document.querySelector('#vertikalnoOkretanje');

const podesavanjeOkretanjaSlike = (img, ctx, horizontalno, vertikalno) => {
    
    /* AAAAAA #10*/

    let hor;
    let ver;
    let x;
    let y;

    if(horizontalno){

        hor = -1;
        //x = (img.width / 6) * -1;
        x = (img.width / 1) * -1;

    } else {

        hor = 1;
        x = 0;

    }

    if(vertikalno){

        ver = -1;
        //y = (img.height / 6) * -1;
        y = (img.height / 1) * -1;

    } else {

        ver = 1;
        y = 0;

    }

    ctx.save();
    ctx.scale(hor, ver);

    /*
    if(img.width >= 1920){

        //canvas.width = slika.width / 6; 
        //canvasSlikeOgledala.height = slika.height / 6; 

        //ctxSlikeOgledala.drawImage(slika, isecanjeXosa.value * 6, isecanjeYosa.value * 6, isecanjeSirina.value * 6, isecanjeVisina.value * 6, 0, 0, canvasIsecanjeSlikeA.width, canvasIsecanjeSlikeA.height);
        ctx.drawImage(img, x * 6, y * 6, img.width / 6, img.height / 6);

        } else {

            //canvasIsecanjeSlikeA.width = slika.width / 3; 
            //canvasIsecanjeSlikeA.height = slika.height / 3; 

            //ctxIsecanjeSlikeA.drawImage(slika, isecanjeXosa.value * 3, isecanjeYosa.value * 3, isecanjeSirina.value * 3, isecanjeVisina.value * 3, 0, 0, canvasIsecanjeSlikeA.width, canvasIsecanjeSlikeA.height);
            ctx.drawImage(img, x * 3, y * 3, img.width / 3, img.height / 3);
        }
        */

    //ctx.drawImage(img, x, y, img.width / 6, img.height / 6);
    ctx.drawImage(img, x, y, img.width / 1, img.height / 1);
    ctx.restore();

};

const okretanjeSlike = () => {

    let horizontalno = document.querySelector('#horizontalnoOkretanje').checked;
    let vertikalno = document.querySelector('#vertikalnoOkretanje').checked; 

    podesavanjeOkretanjaSlike(slika, ctxSlikeOgledala, horizontalno, vertikalno);
    return false;

};

btnEfekatOgledala = document.querySelector('#btnEfekatOgledala');
btnEfekatOgledalaNovo = document.querySelector('#btnEfekatOgledalaNovo');
canvasSlikeOgledala = document.querySelector('#canvasSlikeOgledala'); 
ctxSlikeOgledala = canvasSlikeOgledala.getContext('2d');

btnEfekatOgledala.addEventListener('click', () => { 
    
    //ctxSlikeOgledala.scale(-1, 1);
    console.log('Efekat ogledala: ');
    //ctxSlikeOgledala.translate(90 + slika.width, 0);
    okretanjeSlike();

});

btnEfekatOgledalaNovo.addEventListener('click', () => {
    
    //ctxSlikeOgledala.save();
    //ctxSlikeOgledala.restore();
    //ctxSlikeOgledala.clearRect(0, 0, canvasSlikeOgledala.width, canvasSlikeOgledala.height);
    prikazSlike(slika, canvasSlikeOgledala, ctxSlikeOgledala); 

});

//Kompresija ulazne slike
meniKompresijaUlazneSlike = document.querySelector('#meniKompresijaUlazneSlike'); 
btnKompresijaUlazneSlike = document.querySelector('#btnKompresijaUlazneSlike');
btnKompresijaUlazneSlikeNovo = document.querySelector('#btnKompresijaUlazneSlikeNovo');
canvasKompresijeUlazneSlike = document.querySelector('#canvasKompresijeUlazneSlike');
ctxKompresijaUlazneSlike = canvasKompresijeUlazneSlike.getContext('2d');

const funkcijaKompresijeUlazneSlike = () => {

    sirinaUlazneSlike = canvasSlike.width;
    visinaUlazneSlike = canvasSlike.height;

    razmeraUlazneSlikeA = Number(sirinaUlazneSlike / visinaUlazneSlike).toFixed(1); 
    razmeraUlazneSlikeB = new Number();

    sirinaIzlazneSlike = new Number();
    visinaIzlazneSlike = new Number(); 

    if(razmeraUlazneSlikeA > 1){

        razmeraUlazneSlikeB = Number(visinaUlazneSlike / sirinaUlazneSlike).toFixed(1);

        console.log('Razmera je veća od 1, tj: ', razmeraUlazneSlikeB);

        console.log(sirinaUlazneSlike);
        console.log(visinaUlazneSlike);
        console.log(razmeraUlazneSlikeB); 

        sirinaIzlazneSlike = Number(sirinaUlazneSlike * razmeraUlazneSlikeB).toFixed(0);
        visinaIzlazneSlike = Number(visinaUlazneSlike * razmeraUlazneSlikeB).toFixed(0);
    
        console.log(sirinaIzlazneSlike);
        console.log(visinaIzlazneSlike); 
    
        canvasKompresijeUlazneSlike.width = sirinaIzlazneSlike;
        canvasKompresijeUlazneSlike.height = visinaIzlazneSlike; 

    } else {

        console.log('Razmera je manja od 1, tj: ', razmeraUlazneSlikeA);

        sirinaIzlazneSlike = Number(sirinaUlazneSlike * razmeraUlazneSlikeA).toFixed(0); 
        visinaIzlazneSlike = Number(visinaUlazneSlike * razmeraUlazneSlikeA).toFixed(0);  

        console.log(sirinaIzlazneSlike);
        console.log(visinaIzlazneSlike); 

        canvasKompresijeUlazneSlike.width = sirinaIzlazneSlike;
        canvasKompresijeUlazneSlike.height = visinaIzlazneSlike; 

    }

    //ctxKompresijaUlazneSlike.drawImage(slika, 0, 0, canvasSlike.width, canvasSlike.height, 0, 0, canvasSlike.width / 4, canvasSlike.height / 4);
    ctxKompresijaUlazneSlike.drawImage(slika, 0, 0, sirinaUlazneSlike, visinaUlazneSlike, 0, 0, canvasKompresijeUlazneSlike.width, canvasKompresijeUlazneSlike.height);

};

btnKompresijaUlazneSlike.addEventListener('click', () => {

    funkcijaKompresijeUlazneSlike();
    podaciKompresije();

});

btnKompresijaUlazneSlikeNovo.addEventListener('click', () => {
    window.location.reload(true);
});


//Preuzimanje slike 

/*
btnPreuzimanje = document.querySelector('#btnPreuzimanje');
btnPreuzimanje.addEventListener('click', () => {
    preuzimanjeSlike(canvasSlike, urlSlikeVrednost, "slika.png");
});

const preuzimanjeSlike = (canvas, sadrzaj, img) => {

    sadrzaj = canvas.toDataURL();
    
    let podatak = document.createElement('podatak'); 
    //podatak.href = slURL; 
    podatak.setAttribute('href', 'data:image/png;base64,' + encodeURIComponent(sadrzaj)); 
    podatak.setAttribute('download', img);
    document.body.appendChild(img);
    podatak.click();
    document.body.removeChild(img);
    podatak.remove(); 

};
*/

//Prikaz podataka komprimovane slike: 
prikazPodatakaKomprimovaneSlike = document.querySelector('#prikazPodatakaKomprimovaneSlike'); 
kompresijaSlikePodaci = document.querySelector('#kompresijaSlikePodaci');

inpRezolucijaKompSlike = document.querySelector('#inpRezolucijaKompSlike'); 
inpBrojPikselaKompSlike = document.querySelector('#inpBrojPikselaKompSlike'); 
inpMPKompSlike = document.querySelector('#inpMPKompSlike'); 
inpTipKompSlike = document.querySelector('#inpTipKompSlike'); 
inpURLkompSlike = document.querySelector('#inpURLkompSlike'); 

const podaciKompresije = () => {

    inpRezolucijaKompSlike.value = `${canvasKompresijeUlazneSlike.width} x ${canvasKompresijeUlazneSlike.height} piksela`; 
    inpBrojPikselaKompSlike.value = Number(canvasKompresijeUlazneSlike.width * canvasKompresijeUlazneSlike.height); 
    inpMPKompSlikeVrednost = Number((canvasKompresijeUlazneSlike.width * canvasKompresijeUlazneSlike.height) / Math.pow(10, 6)).toFixed(2);
    inpMPKompSlike.value = `${inpMPKompSlikeVrednost} MP`;   
    
    urlKompSlikeVrednost = new String();
    urlKompSlikeVrednost = canvasKompresijeUlazneSlike.toDataURL(); 
    inpURLkompSlike.value = urlKompSlikeVrednost; 

    urlKompSlikeVrednostF = new String();
    urlKompSlikeVrednostF = urlKompSlikeVrednost.slice(5, 14); 
    inpTipKompSlike.value = urlKompSlikeVrednostF; 
};

prikazPodatakaKomprimovaneSlike.addEventListener('click', () => {
    funkcijaKompresije();
});

