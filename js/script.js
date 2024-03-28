$(document).ready(function() {
    
    $("#add").click(function(e) {
        e.preventDefault()

        let task = $("#input").val()

        if(task !== ""){

            $("ul").append('<li><p>'+ task +'</p><i class="fa-solid fa-trash-can"></i></li><br>').addClass("task")

            $(".task").css('margin', '20px')

            $("#input").val("")

        }

    })

    $("ul").on('click', '.fa-trash-can', function(){

        $(this).parent('li').remove()

    })

})