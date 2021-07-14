/* 
//Dan6
//Pro 2.3.8 14.7.2021. Pon. 

Proširenja programa: 
    HTML5 Canvas
    Korisnik sada može uneti ulaznu sliku
    Slika je prikazana u kanvasu
    Electron.js desktop aplikacija 
    Napravljen je veliki pomak u izradi projekta

Zadaci koje je potrebno uraditi: 
    Prilagoditi dimenzije slike, izvršiti njeno skaliranje sa dimenzijama kanvasa...     
*/

canvasSlike = document.querySelector('#canvasSlike');
ctx = canvasSlike.getContext('2d');

canvasSlike.width = window.innerWidth;
canvasSlike.height = window.innerHeight;

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

window.addEventListener('load', function(){

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

            //canvasSlike.width = slika.width;
            //canvasSlike.height = slika.height;

            slika.addEventListener('load', function(){

                sirina = slika.naturalWidth;
                visina = slika.naturalHeight;

                ctx.drawImage(slika, 0, 0, canvasSlike.width, canvasSlike.height); 
                canvasSlike.style.border = '2px';
                canvasSlike.style.borderStyle = 'solid'; 
                canvasSlike.style.borderRadius = '16px'; 
                canvasSlike.style.borderColor = 'rgb(24, 138, 231)'; 

                infoS.style.fontSize = '80%';
                infoS.innerHTML = 'Slika još uvek nije skalirana sa dimenzijama kanvasa';

                podaciSaSlike = ctx.getImageData(0, 0, canvasSlike.width, canvasSlike.height); 
                console.log(podaciSaSlike);
            });
        }

    });

});

/*

ulaznaSlika = document.getElementById('ulaznaSlika');

ulaznaSlika.addEventListener('load', function(){

    document.getElementById('ulaznaSlika').style.border = '1px';
    document.getElementById('ulaznaSlika').style.borderStyle = 'solid';  
    document.getElementById('ulaznaSlika').style.borderColor = 'rgb(24, 138, 231)';  

});

*/

spanNovo = document.getElementById('spanNovo'); 


dimenzijeSlike = document.querySelector('#inpDimenzijeSlike'); 
brojPiksela = document.querySelector('#inpBrojPiksela');

btnPodaciSlika.addEventListener('click', function(){

    obradaSlike.style.visibility = 'visible'; 
    dimenzijeSlike.value = `${canvasSlike.width} x ${canvasSlike.height}`; 
    brojPiksela.value = Number(canvasSlike.width * canvasSlike.height);

});