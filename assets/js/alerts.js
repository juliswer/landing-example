Swal.fire('Any fool can use a computer')

window.addEventListener('load', () => {
    function alert1() {
        setTimeout(
            function(){
                Swal.fire('Any fool can use a computer')
            }, 3000);
    }
    alert1()
})