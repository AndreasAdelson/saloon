<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 

document.addEventListener("DOMContentLoaded", function(){
     const imageProposons = document.getElementById("imageProposons");
     const texteProposons = document.getElementById("texteProposons");
	 const imageSectionProposons = document.getElementById("imageSectionProposons");
	 const image2SectionProposons = document.getElementById("image2SectionProposons");
	 var i = 0;
	 const observer = new IntersectionObserver((entries) => {
		if(entries[0].isIntersecting && i ===0 ) {
			imageProposons.className += " animated fadeOut animated-fast"
			texteProposons.className += " animated fadeOut animated-fast"
			setTimeout(() => {
				imageSectionProposons.style.display = 'none';
				image2SectionProposons.style.display = 'contents';
			}, 2500);
			i++;
		}
	});
	if (imageProposons) {
		observer.observe(imageProposons);  	
	}
	  
});
var intervalId = 0;
var changeBackgroundImage = function(elementTabId){
	const forfaitSection = document.getElementById("forfait-section");
	let imagesTab = ["url(http://localhost/saloon/wp-content/uploads/2023/04/400A7001PHOTOS-RETOUCHER-copie-scaled.jpg)", "url(http://localhost/saloon/wp-content/uploads/2023/04/400A7049PHOTOS-RETOUCHER2-scaled.jpg)", "url(http://localhost/saloon/wp-content/uploads/2023/04/400A7093PHOTOS-RETOUCHER-scaled.jpg)"];
		switch (elementTabId) {
		  case 'elementor-tab-title-2081':
			clearInterval(intervalId);
			forfaitSection.style.backgroundImage = "url(http://localhost/saloon/wp-content/uploads/2023/03/black-and-white-2558273_1920.jpg)";
			break;
		  case 'elementor-tab-title-2082':
			forfaitSection.style.backgroundImage = imagesTab[0];
			var i = 1;
			intervalId = setInterval(async() => {
				if (i > 2) {
					i = 0;
				}
				forfaitSection.style.backgroundImage = imagesTab[i];
				i++
			}, 5000);
			break;
		  case 'elementor-tab-title-2083':
			clearInterval(intervalId);
			forfaitSection.style.backgroundImage = "url(http://localhost/saloon/wp-content/uploads/2023/04/400A7136PHOTOS-RETOUCHER22-scaled.jpg)";
			break;
		  default:
			clearInterval(intervalId);
			forfaitSection.style.backgroundImage = "url(http://localhost/saloon/wp-content/uploads/2023/04/400A7001PHOTOS-RETOUCHER-copie-scaled.jpg)";
		}
}

window.onload = function()
{
   jQuery(".elementor-tab-title").on("click", function(){ 
   		var $this = jQuery(this);
	    var elementTabId = $this.attr('id');
		changeBackgroundImage(elementTabId);
	});
}


</script>
<!-- end Simple Custom CSS and JS -->
