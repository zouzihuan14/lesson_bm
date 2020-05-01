window.onload = function() {
    const tabLinks = document.querySelectorAll('.tabbar a');
    tabLinks.forEach(function(link) {
      // console.log(link);
      link.addEventListener('click', function(event) {
        event.preventDefault();
        // 1. 取消之前的selected
        // 2. 点哪个a 就加selected 
        document.querySelector('.selected')
          .classList.remove('selected');
        this.classList.add('selected')
      }, false);
    })
  }