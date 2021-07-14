//Dan6
//14.7.2021. Pon. 

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

btnPodaciSlika.addEventListener('click', function(){
    obradaSlike.style.visibility = 'visible'; 
});

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

                ctx.drawImage(slika, 0, 0); 
                canvasSlike.style.border = '2px';
                canvasSlike.style.borderStyle = 'solid'; 
                canvasSlike.style.borderRadius = '16px'; 
                canvasSlike.style.borderColor = 'rgb(24, 138, 231)'; 

                infoS.style.fontSize = '80%';
                infoS.innerHTML = 'Slika još uvek nije skalirana sa dimenzijama kanvasa';

            });
        }

    });

});

ulaznaSlika = document.getElementById('ulaznaSlika');

ulaznaSlika.addEventListener('load', function(){

    document.getElementById('ulaznaSlika').style.border = '1px';
    document.getElementById('ulaznaSlika').style.borderStyle = 'solid';  
    document.getElementById('ulaznaSlika').style.borderColor = 'rgb(24, 138, 231)';  

});

spanNovo = document.getElementById('spanNovo'); 
