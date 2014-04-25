$(document).on('pageinit', '#loginReifax', function(){  
	$(document).on('click', '#submit', function(e) { // catch the form's submit event
		console.debug(e);
		var posY = e.clientY+e.currentTarget.clientHeight;
		if($('#username').val().length <= 0){
			$("#both p")
				.text("Incorrect UserName")
				.parent().popup( "open", { y: posY } );
			return false;
		}
		if($('#password').val().length <= 0){
			$("#both p")
				.text("Incorrect PassWord")
				.parent().popup( "open", { y: posY } );
			return false;
		}
		
		// Send data to server through the ajax call
		// action is functionality we want to call and outputJSON is our data
		$.ajax({url: 'http://test.reifax.com/resources/php/properties_validacion.php',
			data		:	{
				formData	:	$('#check-user').serialize()
			},
			type		:	'post',                   
			async		:	'true',
			dataType	:	'json',
			beforeSend	:	function() {
				$.mobile.loading( "show", {
					text		:	"Check Login..!",
					textVisible	:	true,
					//theme: theme,
					textonly	:	false
					//html: html
				});
			},
			complete	:	function() {
				$.mobile.loading("hide");
			},
			success		:	function (result){
				if(result.success) {
					$.mobile.changePage("#principalMenu");                         
					$("#renderHtml a").attr("href","#principalMenu");
				} else {
					$("#both p")
						.text(result.msg)
						.parent().popup( "open", { y: posY } );
				}
			},
			error		:	function (request,error) {
				// This callback function will trigger on unsuccessful action                
				alert('Network error has occurred please try again!');
			}
		});
	
		/*var $this = $( this ),
			theme = $this.jqmData( "theme" ) || $.mobile.loader.prototype.options.theme,
			msgText = $this.jqmData( "msgtext" ) || $.mobile.loader.prototype.options.text,
			textVisible = $this.jqmData( "textvisible" ) || $.mobile.loader.prototype.options.textVisible,
			textonly = !!$this.jqmData( "textonly" );
			html = $this.jqmData( "html" ) || "";
		$.mobile.loading( "show", {
			text: msgText,
			textVisible: textVisible,
			theme: theme,
			textonly: textonly,
			html: html
		});*/
		//alert('Please fill all necessary fields');
	}); 
}); 