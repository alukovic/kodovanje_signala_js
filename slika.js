//Dan6
//14.7.2021. Pon. 

window.addEventListener('load', function(){

    document.querySelector('input[type="file"]').addEventListener('change', function(){

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

btnBrisanjeSlike = document.getElementById('btnBrisanjeSlike');
btnBrisanjeSlike.style.backgroundColor = 'rgb(229, 43, 80)'; 

btnBrisanjeSlike.addEventListener('click', function(){
    window.location.reload(true);
});