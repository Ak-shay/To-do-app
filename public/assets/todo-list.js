$(document).ready(function(){

    $('form').on('submit', function(){
        var item = $('form input');
        var todo = {item: item.val()};

        // post handler in controller will fire
        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data){
                // do something with data via frontend framework
                location.reload();
            }
        });
	});

	$('li').on('click', function(){
		var item = $(this).text();
		$.ajax({
			type: 'DELETE',
			url: '/todo/' + item,
			data: item,
			success: function(data){
                // do something with data via frontend framework
                location.reload();
            }
		});
	});
});