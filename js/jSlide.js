//jSlider 

//Settings (Adjust for speeds, delays and direction)
//****************************************************

var transitionSpeed = 500;
var transitionDelay = 2000;
var transitionDirection = 'left';

//****************************************************

var counter = 1;
//start counter at one while using Jquery

$(document).ready(function(){

	$('.jslide').each(function() //for each jslide selector, run this function (it will find one)
	{	
		if ( $(this).css('position') == 'static') //if the current position is static
		{
			$(this).css('position', 'relative'); //refers to current object (jslide)

		}

		$(this).css('overflow','hidden');
		
		

		$(this).find('img').each(function(counter) //this jslide. counter counts the # of images
		{ 
			//setting multiple css properties
			//changes position to absolute for each image
			$(this).css({
				'position': 'absolute',
				'width' : $(this).parent().css('width'),
				'height': $(this).parent().css('height'),
				'top': '0%'

			}); //this image

			if(counter == 0)
			{
				$(this).css({
				
				'left': '0%'

				});
			}
			else
			{
				$(this).css({
					'left':'100%'
				});
			}
		}); 
	
		//jSlide div -

			window.setTimeout("nextSlide();", transitionDelay);
	});

});


function nextSlide()
{

	//nth = first image, changing its left to -100%. 
	$('.jslide img:nth-child('+counter+')').animate({'left':'-100%'}, transitionSpeed, function(){
		$(this).css('left', '100%');
		});

	counter ++;

	if (counter > $('.jslide img').length) counter = 1;

	$('.jslide img:nth-child('+counter+')').animate({'left':'0%'}, transitionSpeed);

	window.setTimeout("nextSlide();", transitionDelay);
}