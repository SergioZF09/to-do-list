$(document).ready(function() {
    
    $("#add").click(function(e) {
        e.preventDefault()

        let task = $("#input").val()

        if(task !== ""){

            $("ul").append('<li><p>'+ task +'</p><i class="fa-solid fa-trash-can"></i></li>').addClass("task")

            $("#input").val("")

            $(".empty").css("display", "none")

        }

    })

    $("ul").on('click', '.fa-trash-can', function(){

        $(this).parent('li').remove()

        $(".empty").css("display", "block")

    })

})