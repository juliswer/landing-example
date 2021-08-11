window.addEventListener('load', () => {
    function alert1() {
        setTimeout(
            function(){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-start',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: '¡Ramón ha vuelto al sitio!'
                  })
            }, 15000);
        setTimeout(
            function(){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-start',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: '¡Martin Rodriguez se ha registrado en Canalizados!'
                  })
            }, 60000);
        setTimeout(
            function(){
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'bottom-start',
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'success',
                    title: '¡Lionel Messi ha creado un Startup!'
                  })
            }, 90000);
    }
    alert1()
})

$("#contact").on('submit', function(evt){
  evt.preventDefault();
  const emailForm = document.getElementById('email').value;
  const messageForm = document.getElementById('message').value;

  if(!(/\S+@\S+\.\S+/.test(emailForm))){
    return false;
  }

  if(messageForm.length >= 140) {
    return false;
  }

});