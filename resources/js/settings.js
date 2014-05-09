var reifaxMobile	=	{
	logOut	:	function(){
		$.ajax({
			url: 'http://test.reifax.com/resources/php/properties_releaseSess.php',
			type		:	'post',                   
			async		:	'true',
			dataType	:	'json',
			beforeSend	:	function() {
				$.mobile.loading( "show", {
					text		:	"Wait..!",
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
					$.mobile.changePage( "#loginReifax", { transition: "slideup", changeHash: false });
					$('#check-user')[0].reset();
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
	},
	validSession:	function(){
		$.ajax({
			url: 'http://test.reifax.com/properties_validSess.php',
			type		:	'post',                   
			async		:	'true',
			//dataType	:	'json',
			beforeSend	:	function() {
				$.mobile.loading( "show", {
					text		:	"Verifying session...!",
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
				console.log(result);
				/*var results=result.split('^');
				if(results[0]=='invalid'){
					$("#both p")
						.text('This sesion was closed as another became active.')
						.parent().popup( "open", { y: posY } );
				}else{
					$.mobile.changePage( "#principalMenu", { transition: "slidedown", changeHash: false });
				}*/
			},
			error		:	function (request,error) {
				// This callback function will trigger on unsuccessful action                
				alert('Network error has occurred please try again!');
			}
		});
	}
}