// Shorthand for $( document ).ready()
$(function() {
    $('#askme').click(event => {
        let message = prompt('what can i help you');
        alert(`you said ${message}`)
    })
    
    $('[name="selectAll"]').change(function(){ 
        //this variable is defined
        let isChecked = $(this).is(':checked');
        $('[name="answer1"]').prop('checked', isChecked);
    })

    $('[name="showresult"]').click( event => {
        //this variable not defined
        let DOMs = $('[name="answer1"]:checked');
        let message = '';
        if (DOMs.length){
            $.each(DOMs, function(index, DOM){
                message += `${DOM.value} ,`;
            });
            alert(`i choose ${message}`);
        }else {
            alert('not yet choose')
        }     
    })
});