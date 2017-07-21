// WebTrends JW Player Tag
// Version: 1.0     
// Created: 5/5/2011

//initialise global variables
var jwp_evt,player = null;
var currentPosition,dur,prog25,prog50,prog75,prog = 0;
var playedonce = false;

function playerReady(thePlayer) {
	player = window.document[thePlayer.id];
	addInitialListeners();
	prog=0;
}
function addInitialListeners() {
	if (player) {
	    //add initial listeners 
		player.addModelListener("TIME", "positionListener");
		player.addModelListener("STATE", "playStateListener");
			
	} else {
		setTimeout("addInitialListeners()",100);
	}
}
function positionListener(obj) {
    //get current position
	currentPosition = obj.position;
	//progress greater than 25 percent 
	if (currentPosition>prog25){
	    if(prog==0){
	        webtrendsRequest("25");
	        prog=25;
	    }
	}
	//progress greater than 50 percent
	if (currentPosition>prog50){
	    switch(prog)
        {
        case 0:
            webtrendsRequest("25");
            webtrendsRequest("50");
            prog=50;
            break;
        case 25:
            webtrendsRequest("50");
            prog=50;
            break;
        default:
            break;    
	    }
	}
	//progress greater than 75 percent
	if (currentPosition>prog75){
	    switch(prog)
        {
        case 0:
            webtrendsRequest("25");
            webtrendsRequest("50");
            webtrendsRequest("75");
            prog=75;
            break;
        case 25:
            webtrendsRequest("50");
            webtrendsRequest("75");
            prog=75;
            break;
        case 50:
            webtrendsRequest("75");
            prog=75;
            break;
        default:
            break;    
	    }
	}
}
function playStateListener(obj) {
    //get current state
    currentState = obj.newstate;
    //Playing
    if (currentState == "PLAYING")
    {
        //initialise variables
		dur=player.getPlaylist()[0].duration;
        prog25 = Math.round(dur/100*25);
        prog50 = Math.round(dur/100*50);
        prog75 = Math.round(dur/100*75);
        
        if (playedonce==false) {
            //send data to webtrends
            webtrendsRequest("play");
        }
        else {
            //send data to webtrends
            webtrendsRequest("replay");
        }
	    //remove redundant listener
        player.removeModelListener("STATE", "playStateListener");
        if (player) { 
            //add new listener
		    player.addModelListener("STATE", "otherStateListener");
	    }
	    else {
		    setTimeout("otherStateListener()",100);
        }
    }
}

function otherStateListener(obj) { 
    currentState = obj.newstate;
    if (currentState == "PAUSED")
    {
        //send data to webtrends
        webtrendsRequest("pause"); 
    }    
    if (currentState == "COMPLETED")
    {
        //set played status
        playedonce=true;
        //send data to webtrends
        webtrendsRequest("complete");
        //remove redundant listener
        player.removeModelListener("STATE", "otherStateListener");
        //reset player listeners
	    addInitialListeners();
	    //reset progress
        prog = 0;
	}
}

function webtrendsRequest(jwp_evt){
    switch(jwp_evt)
    {
    case "play":
        dcsMultiTrack('DCS.dcsuri','/video/start/'+videofile,'WT.ti','Video Start:'+videoname,'DCSext.jwp_evt',jwp_evt,'WT.dl',99,'DCSext.jwp_vname',videoname);
        break;
    case "replay":
        dcsMultiTrack('DCS.dcsuri','/video/restart/'+videofile,'WT.ti','Video Re-start:'+videoname,'DCSext.jwp_evt',jwp_evt,'WT.dl',99,'DCSext.jwp_vname',videoname);
        break;
    case "pause":
        dcsMultiTrack('DCS.dcsuri','/video/pause/'+videofile,'WT.ti','Video Pause:'+videoname,'DCSext.jwp_evt',jwp_evt,'WT.dl',99,'DCSext.jwp_vname',videoname);
        break;
    case "25":
        dcsMultiTrack('DCS.dcsuri','/video/progress/'+videofile,'WT.ti','Video Progress 25:'+videoname,'DCSext.jwp_evt',jwp_evt,'WT.dl',99,'DCSext.jwp_vname',videoname);
        break;
    case "50":
        dcsMultiTrack('DCS.dcsuri','/video/progress/'+videofile,'WT.ti','Video Progress 50:'+videoname,'DCSext.jwp_evt',jwp_evt,'WT.dl',99,'DCSext.jwp_vname',videoname);
        break;
    case "75":
        dcsMultiTrack('DCS.dcsuri','/video/progress/'+videofile,'WT.ti','Video Progress 75:'+videoname,'DCSext.jwp_evt',jwp_evt,'WT.dl',99,'DCSext.jwp_vname',videoname);
        break;
    case "complete":
        dcsMultiTrack('DCS.dcsuri','/video/progress/'+videofile,'WT.ti','Video Complete:'+videoname,'DCSext.jwp_evt',jwp_evt,'WT.dl',99,'DCSext.jwp_vname',videoname);
        break;
    default:
        break;
    }    
}