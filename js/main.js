(function ($) {
    "use strict";
    
    // Botón para que se baje la información al pasar el mouse
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Botón para ir al inicio
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Carrusel de testimonios, aquí van las fotos de mis amix
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


        //<script>                                                          El código que creo utilizaremos para despegar la información de los semestres
    const semesterSelect = document.getElementById('semesterSelect');       // Utilizado para seleccionar el semestre
    const subjectDropdown = document.getElementById('subjectDropdown');     //Utilizado para enseñar las materias del semestre seleccionado

    semesterSelect.addEventListener('change', function() {
        if (semesterSelect.value !== 'Select Semester') {
            subjectDropdown.style.display = 'block';
            // Here you can dynamically populate the subject dropdown based on the selected semester using JavaScript
            // For simplicity, let's add a couple of options
            subjectDropdown.innerHTML = `
                <select class="custom-select px-4" style="height: 47px;">
                    <option selected>Select Subject</option>
                    <option>Subject 1</option>
                    <option>Subject 2</option>
                </select>
            `;
        } else {
            subjectDropdown.style.display = 'none';
            subjectDropdown.innerHTML = ''; // Clear the contents
        }
    });
//</script>


// -----------------------------------------------------------------------------------------------------------------------

$('#checkboxForm input[type="checkbox"]').change(function() {
  var checkedBoxes = $('#checkboxForm input[type="checkbox"]:checked');
  
  // Limitar a un máximo de 3 checkboxes seleccionados
  if (checkedBoxes.length > 3) {
    this.checked = false;
    return;
  }
  
  var semesters = checkedBoxes.map(function() {
    return this.value;
  }).get();

  // Verificar las restricciones de selección
  var validCombination = checkValidCombination(semesters);
  if (!validCombination) {
    this.checked = false;
    return;
  }
  
  updateDropdownText(semesters);
});

function checkValidCombination(semesters) {
  // Objeto con las combinaciones válidas
  var validCombinations = {
    '2do': ['3ro'],
    '3ro': ['2do', '4to'],
    '4to': ['3ro', '5to'],
    '5to': ['4to', '6to'],
    '6to': ['5to', '7mo'],
    '7mo': ['6to']
  };
  
  // Verificar si la combinación es válida
  for (var i = 0; i < semesters.length; i++) {
    var currentSemester = semesters[i];
    var allowedNext = validCombinations[currentSemester];
    var nextSemester = semesters[i + 1];
    
    if (nextSemester && allowedNext.indexOf(nextSemester) === -1) {
      return false;
    }
  }
  
  return true;
}

function updateDropdownText(selectedSemesters) {
  $('#dropdownMenuButton').text('Semestres seleccionados: ' + selectedSemesters.join(', '));
}

// -----------------------------------------------------------------------------------------------------------------------



