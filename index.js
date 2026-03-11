
	//Hcaptcha script
	<script src="https://js.hcaptcha.com/1/api.js" async defer></script>

	//java script to reset forms on load
	 window.onload = function () {
            // Reset the form fields when the page loads
            document.getElementById("form").reset();
        };

	//Script to ensure youtube videos run on firefox
	var tag = document.createElement('script');
	tag.src = "//www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var url = window.location.pathname; 


function test() {
    alert('Hello');
}