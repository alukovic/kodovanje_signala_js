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
    Učitavanje => async/await

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

document.onreadystatechange = function(){

    if(document.readyState !== 'complete'){

        txtUcitavanje.style.visibility = 'hidden'; 
        meniSlika.style.visibility = 'hidden'; 
        obradaSlike.style.visibility = 'hidden'; 

    }

}

window.addEventListener('load', function(){

    txtUcitavanje.style.visibility = 'hidden'; 

    meniSlika.style.visibility = 'hidden'; 
    obradaSlike.style.visibility = 'hidden'; 

    document.querySelector('input[type="file"]').addEventListener('change', function(){

        meniSlika.style.visibility = 'visible'; 
        //obradaSlike.style.visibility = 'visible'; 

        if(this.files && this.files[0]){

            
            //slika = document.querySelector('img');
            slika = new Image(); 
            slika.src = URL.createObjectURL(this.files[0]);
            //slika.onload = imageIsLoaded;

            slika.addEventListener('load', function(){

                canvasSlike.width = slika.width; 
                canvasSlike.height = slika.height; 

                ctx.drawImage(slika, 0, 0, canvasSlike.width, canvasSlike.height); 
                canvasSlike.style.border = '2px';
                canvasSlike.style.borderStyle = 'solid'; 
                canvasSlike.style.borderRadius = '16px'; 
                canvasSlike.style.borderColor = 'rgb(24, 138, 231)'; 

                infoS.style.fontSize = '80%';

                //infoS.innerHTML = 'Slika još uvek nije skalirana sa dimenzijama kanvasa';

                //podaciSaSlike = ctx.getImageData(0, 0, canvasSlike.width, canvasSlike.height); 
                
                /*
                //A
                podaciSaSlike = new Uint8ClampedArray();
                //test #1
                podaciSaSlike = ctx.getImageData(0, 0, 180, 180); 

                //Cela slika - svi pikseli
                //podaciSaSlike = ctx.getImageData(0, 0, canvasSlike.width, canvasSlike.height); 

                nizPiksela = podaciSaSlike.data;
                console.log(nizPiksela); 

                nizPikselaA = Array.prototype.slice.call(nizPiksela);

                nizPiksela4String = ''; 
                nizPiksela4elementa = new Array(); 
                console.log('nizPikselaA.length: ' + nizPikselaA.length); 
                console.log('nizPiksela.length: ' + nizPiksela.length); 



                //for(i = 0; i < nizPikselaA.length; i++){
                    i = 0;
                    while(nizPikselaA.length > 1) 
                    {
                    i++;
                    nizPiksela4elementa = nizPikselaA.splice(0, 4);
                    nizPiksela4String += i + '. piksel sa RGBA komponentama je: ' + nizPiksela4elementa + '\n';

                }
                //}

                //B
                */

            }); 

        }

    });

});

     funkcijaProracun = () => {

        podaciSaSlike = new Uint8ClampedArray();
        //test #1
        //podaciSaSlike = ctx.getImageData(0, 0, 180, 180); 
        
        //Cela slika - svi pikseli
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

    funkcijaUcitavanje = () => {
        txtUcitavanje.style.visibility = 'visible'; 
        txtUcitavanje.innerHTML = 'Učitavanje...'; 
    };

    /*
    btnPodaciSlika.addEventListener('click', function(){
        txtUcitavanje.style.visibility = 'hidden';
        funkcijaProracun(); 
    });
    */

    //funkcijaProracun(); 
    
    sviRGBA = document.querySelector('#txtRGBA'); 
    
    spanNovo = document.getElementById('spanNovo'); 
    
    dimenzijeSlike = document.querySelector('#inpDimenzijeSlike'); 
    brojPiksela = document.querySelector('#inpBrojPiksela');
    
    
    btnPodaciSlika.addEventListener('click', async function(){

        korak1 = await setTimeout(() => {
            funkcijaUcitavanje();
        }, 0); ; 

        korak2 = await setTimeout(() => {
            obradaSlike.style.visibility = 'visible'; 
            dimenzijeSlike.value = `${canvasSlike.width} x ${canvasSlike.height}`; 
            brojPiksela.value = Number(canvasSlike.width * canvasSlike.height); 
        }, 3000);

        korak3 = await setTimeout(() => {
            funkcijaProracun();
        }, 3500);

        korak4 = await setTimeout(() => {
            sviRGBA.value = nizPiksela4String; 
        }, 3600);

        korak5 = await setTimeout(() => {
            txtUcitavanje.style.display = 'none'; 
        }, 3700);

        //funkcijaProracun();

    });                

//btnPodaciSlika.addEventListener('loadstart', funkcijaProracun());




