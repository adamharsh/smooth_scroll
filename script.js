$(document).ready(function()
                  {	
  console.log("running jquery");
  $('#welcome').click(function()
  	{
  		
  		scroll('welcome','wel');
  	});
  $('#thimble').click(function()
  	{
  		scroll('thimble','thim');
  	});
  $('#github').click(function()
  	{
  		scroll('github','gith');
  	});
  $('#gitlab').click(function()
  	{
  		scroll('gitlab','gitl');
  	});




  function scroll(from,to)
  {		var from_i=$('#'+from).position().top;
  		var to_i=$('#'+to).position().top;
  		var delta = (from_i-to_i)/100;
  		console.log(to_i);
  		var new_pos = from_i;
  		var number;
  		console.log(delta);
  		if(number!=null){clearInterval(number);}
		number = setInterval(function()
			{
				 
				 console.log(new_pos);
				 if(delta<0){	
				 if(new_pos>=to_i-2){clearInterval(number);}
				 else{
				 window.scrollTo(0,new_pos-delta);
				 new_pos=new_pos-delta;	
				 console.log("reached");}
				}
				else{
					if(new_pos<=to_i-2){clearInterval(number);}
				 else{
				 window.scrollTo(0,new_pos-delta);
				 new_pos=new_pos-delta;	
				 console.log("reached");}
				}
			},10);  		
  }
});
