
  

  function send() {

    function sent(){
      let count = 0;

      send.addEventListener('click', function() {
        count++;
        
        if (count === 1) {
          message.textContent = 'You clicked the button once.';
        } else if (count === 2) {
          message.textContent = 'You clicked the button twice.';
        } else {
          window.location.href='https://w3docs.com';
        }
        
        message.style.display = 'block';
      });
    }
   

}















