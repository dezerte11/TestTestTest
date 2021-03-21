	//Our cycle script so we can make the pictures fade between each other.
	$('#background').cycle({ 
			fx: 'fade', // You can change the FX way the pictures changes with, an example scrollDown. Check out http://jquery.malsup.com/cycle/ for more about that matter
			speed: 1000, 
			timeout: 500 
		});
		
		$('.center-piece-image').cycle({ 
			fx: 'fade', // You can change the FX way the pictures changes with, an example scrollDown. Check out http://jquery.malsup.com/cycle/ for more about that matter
			speed: 2000, 
			timeout: 4000 
		});
		
		(function() {

    var quotes = $(".center-piece-top-left-information");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)//How long it will take to fade the message in
            .delay(3000) //For how long the message will show
            .fadeOut(1000, showNextQuote); //How long it will take for the message to fade out and then the next quote showing.
    }
    
    showNextQuote();
    
})();

// Fetch information about the server, do not touch this or modify this as it tends to break otherwise
	function GameDetails( servername, serverurl, mapname, maxplayers, steamid, gamemode ) { 
	document.getElementById("gamemode").innerHTML = gamemode;
	document.getElementById("server").innerHTML = servername;
	document.getElementById("map").innerHTML = mapname;
	}
	

		var filerequierd = 0;
		var totalfilerequierd = 0;
		var downloadingfiles = false;
		
		var math_difference = 0;
		var math_percent = 0;
 
		function SetFilesNeeded( needed, total )
		{
			filerequierd = needed;			
			loadingBOX();
		}
		
		function SetFilesTotal( total )
		{
			totalfilerequierd = total;
			loadingBOX();
		}
		
		function DownloadingFile( filename )
		{
			if ( downloadingfiles )
			{
				filerequierd = filerequierd - 1;
				loadingBOX();
			}
			document.getElementById( "item-status" ).innerHTML = "<p>" + filename + "</p>";
			if_changestatus = false;
			setTimeout( "if_changestatus = true;", 1000 );
			downloadingfiles = true;
			loadingBOX();
		}
		
		function SetStatusChanged( status )
		{
			if ( downloadingfiles )
			{
				filerequierd = filerequierd - 1;
				downloadingfiles = false;
				loadingBOX();
			}
			document.getElementById( "item-status" ).innerHTML = "<p>" + status + "</p>";
			if_changestatus = false;
			setTimeout( "if_changestatus = true;", 1000 );
			loadingBOX();
		}
		
		function loadingBOX()
		{
			math_difference = Math.round(totalfilerequierd - filerequierd);
			math_percent = Math.round(math_difference / totalfilerequierd * 100);
				
			document.getElementById( "percentage-completege" ).innerHTML = "<p>" + math_percent + "%</p>";
			document.getElementById( "load-box" ).innerHTML = "<div id='load-box-width' style='width:" + math_percent + "%;'></div>";
			
			if ( totalfilerequierd > 0 )
				document.getElementById( "percentage-completege" ).style.visibility = 'visible';
			else
				document.getElementById( "percentage-completege" ).style.visibility = 'hidden';
		}
		loadingBOX();