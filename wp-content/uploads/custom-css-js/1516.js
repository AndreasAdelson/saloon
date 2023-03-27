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
</script>
<!-- end Simple Custom CSS and JS -->
