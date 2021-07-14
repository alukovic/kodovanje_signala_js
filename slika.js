//Dan6
//14.7.2021. Pon. 

window.addEventListener('load', function(){

    document.querySelector('input[type="file"]').addEventListener('change', function(){

        if(this.files && this.files[0]){

            let slika = document.querySelector('img');
            slika.src = URL.createObjectURL(this.files[0]);
            slika.onload = imageIsLoaded;
            
        }

    });

});

btnBrisanjeSlike = document.getElementById('btnBrisanjeSlike');
btnBrisanjeSlike.style.backgroundColor = 'rgb(229, 43, 80)'; 

btnBrisanjeSlike.addEventListener('click', function(){
    window.location.reload(true);
});