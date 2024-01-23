/**************************************MENUs****************************************************** */
$(document).ready(function(){
    
    var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
       removeItemButton: true,
       maxItemCount:5,
       searchResultLimit:5,
       renderChoiceLimit:5
     }); 
});


document.addEventListener('DOMContentLoaded', function () {
   var menu1Choices = new Choices('#choices-menu-1', {
       shouldSort: false,
       removeItemButton: true,
       maxItemCount: 3,
       addItemText: function (value) {
           return 'Selecciona tu semestre.';
       },
   });

   var menu2Choices = new Choices('#choices-menu-2', {
       shouldSort: false,
       removeItemButton: true,
       maxItemCount: 8,
       addItemText: function (value) {
           return 'Selecciona tus materias [Carga mínima (mínimo 3) - Carga máxima (máximo 8)].';
       },
   });

   // Relaciones entre opciones del menú 1 y menú 2
   var relationships = {
       '2': ['Electricidad Y Magnetismo', 'Humanidades II', 'Ecuaciones Diferenciales', 'Cálculo Vectorial', 'Química Aplicada'],
       '3': ['Campos y Ondas', 'Electromagnéticas', 'Circuitos de C.A. y C.D', 'Estructuras y Base de Datos', 'Ondas Mecánicas', 'Transformadas de Funciones', 'Variable Completa'],
       '4': ['Análisis Numérico', 'Economía', 'Mecánica Cuántica y Mecánica Estadística', 'Mediciones', 'Ondas Electromagnéticas Guiadas', 'Probabilidad y Estadística', 'Teorema de Circuitos Eléctricos'],
       '5': ['Administración', 'Análisis de Transitorios', 'Circuitos Digitales', 'Dispositivos', 'Fundamentos de Máquinas Eléctricas', 'Comunicaciones Analógicas', 'Teoría de Radiadores Electromagnéticos'],
       '6': ['Electrónica Digital', 'Electrónica Lineal', 'Microprocesadores', 'Comunicaciones Digitales', 'Señales y Sistemas de Control Clásico', 'Señales y Vibraciones.'],
       '7': ['Electroacústica y Transductores', 'Espacio de Estados', 'Creación y Evaluación de Proyectos', 'Humanidades III: Desarrollo Humano', 'Microcontroladores', 'Procesamiento Digital de Señales', 'Redes Básicas'],
   };

   // Manejar cambios en el menú 1
   var selectMenu1 = document.getElementById('choices-menu-1');
   var selectMenu2 = document.getElementById('choices-menu-2');

   selectMenu1.addEventListener('change', function () {
       var selectedValues = Array.from(selectMenu1.selectedOptions, option => option.value);
       var allowedValues = [];

       // Obtener las materias permitidas según el menú 1
       selectedValues.forEach(function (value) {
           if (relationships[value]) {
               allowedValues = allowedValues.concat(relationships[value]);
           }
       });

       // Actualizar las opciones del menú 2
       menu2Choices.setChoices(allowedValues.map(function (value) {
           return { value: value, label: value };
       }), 'value', 'label', true);
   });

   /***************************************************************************************************************************/

var menu3Choices = new Choices('#choices-menu-3', {
    shouldSort: false,
    removeItemButton: true,
    maxItemCount: 1,
    addItemText: function (value) {
        return 'Entrada o Salida';
    },
});

var menu4Choices = new Choices('#choices-menu-4', {
    shouldSort: false,
    removeItemButton: true,
    maxItemCount: 1,
    addItemText: function (value) {
        return 'Valores de Salida (horas)';
    },
});


// Manejar cambios en el menú 3
var selectMenu3 = document.getElementById('choices-menu-3');

selectMenu3.addEventListener('change', function () {
    var selectedValue = selectMenu3.value;

    // Llenar dinámicamente las opciones del menú 4 según la selección en el menú 3
    var options = [];

    if (selectedValue === 'salida') {
        options = [
            { value: '20', label: ' 11:30' },
            { value: '21', label: ' 13:00' },
            { value: '22', label: ' 16:00' },
            { value: '23', label: ' 17:30' },
            { value: '24', label: ' 19:00' },
            { value: '25', label: ' 20:30' },
            { value: '26', label: ' 22:00' },
            // Agrega más opciones según tus necesidades
        ];
    } else if (selectedValue === 'entrada') {
        options = [
            { value: '30', label: ' 07:00' },
            { value: '31', label: ' 08:30' },
            { value: '32', label: ' 10:00' },
            { value: '33', label: ' 11:30' },
            { value: '34', label: ' 13:00' },
            { value: '35', label: ' 16:00' },
            { value: '36', label: ' 17:30' },
            { value: '37', label: ' 19:00' },
            // Agrega más opciones según tus necesidades
        ];
    }

    menu4Choices.setChoices(options, 'value', 'label', true);
});

});
/******************************************************************************* */



/****************************************************************************** */
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
    
})(jQuery);

/******************************************************************************* */
