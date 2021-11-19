
  $('.owl-carousel').owlCarousel({

    lazyLoad:true,
    margin:5,
    dots: true,
    nav:true,
    
    responsive: {
      0:{
        items: 1,
        
      },
      485:{
        items: 2,
      },
      728:{
        items: 4,
      },
      960:{
        items: 4,
      },
      1200:{
        items: 4,
      },
    }
      });

      window.addEventListener("scroll", function(){
        var header = document.onscroll("header");
        header.classList.toggle("sticky", window.scrollY > 0);
      });

      document.querySelector('#newss').scrollIntoView({ 
        behavior: 'smooth' 
      });


      let ope = document.getElementById('kooo');
      let con = document.getElementById('signin');

      ope.onclick = function(){
        con.classList.toggle('scale');
      }
