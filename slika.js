//Dan6
//14.7.2021. Pon. 

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

window.addEventListener('load', function(){

    meniSlika.style.visibility = 'hidden'; 
    obradaSlike.style.visibility = 'hidden'; 

    document.querySelector('input[type="file"]').addEventListener('change', function(){
        
        meniSlika.style.visibility = 'visible'; 
        //obradaSlike.style.visibility = 'visible'; 

        if(this.files && this.files[0]){

            slika = document.querySelector('img');
            slika.src = URL.createObjectURL(this.files[0]);
            slika.onload = imageIsLoaded;
            
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
