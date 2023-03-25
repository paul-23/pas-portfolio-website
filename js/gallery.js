$(document).ready(function () {
    var coll = document.getElementsByClassName("boton-collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    loadGallery(true, 'a.thumbnail');

    function loadGallery(setIDs, setClickAttr) {
        let counter = 0;

        function updateGallery(selector) {
            let $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
        }

        if (setIDs == true) {
            $('[data-image-id]').each(function () {
                counter++;
                $(this).attr('data-image-id', counter);
            });
        }

        $(setClickAttr).on('click', function () {
            updateGallery($(this));
        });
    }

    

    $(".boton-collapsible").click(function () {        
        if (this.classList.contains("active")) {
            this.innerHTML = "Ocultar m&#225;s fotograf&#237;as";
        } else {
            this.innerHTML = "Mostrar m&#225;s fotograf&#237;as";
        }
    });

});