//Dan6
//14.7.2021. Pon. 

btnNovaSlika = document.getElementById('btnNovaSlika'); 
btnNovaSlika.style.backgroundColor = 'yellowgreen'; 
btnNovaSlika.style.margin = '1em'; 

btnNovaSlika.addEventListener('click', function(){
    window.location.reload(true);
});

window.addEventListener('load', function(){

    btnNovaSlika.style.visibility = 'hidden';

    document.querySelector('input[type="file"]').addEventListener('change', function(){

        btnNovaSlika.style.visibility = 'visible'; 
        
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
