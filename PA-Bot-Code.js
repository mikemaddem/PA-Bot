/*
    Perfect Alliance eSports Custom Discord  Bot
	Version 0.1.0
	Coded with love and memes by: Mike Madden
	
	Please visit www.paesports.com with any errors or problems with this bot.
	
	Todo 
	-Make the command-count only available to certain ranks.
	
	
	Changelog 
	8-26
	[ADDED] AFK Mode - People type AFK, and are moved to the channel
	[ADDED] Improved Console Logging for  everything
	[ADDED] a beta version of a support system.
	[ADDED] command-count Will count all the commands used.
	[ADDED] If you use a specific support command before you ask for help, a message will prompt you with further instructions. 
	[ADDED]  An easter that will scare you, only if you find it.
	[ADDED] Going AFK, will now send a server message, and will send you a DM confirming.
	[ADDED] 'lobby' Will move you to the lobby.
	
 	
*/

var Discord = require("discord.js");

// Get the email and password
var AuthDetails = require("./auth.json");

var bot = new Discord.Client();

var totalCommands;

totalCommands=0;

var tenCommands;

var mmLine;

mmLine=0;

var match1Ready;

match1Ready=false;

tenCommands=false;

var askHelp = false;

var players = ["person1", "person2", "person3", "person4"];

//var adminrole = msg.server.roles.get("name", "Admin");

//when the bot is ready
bot.on("ready", () => {
    console.log(`The PA  Bot  has loaded. Awesome sauce m8!`);
	console.log(`Ready to begin! Serving in ${bot.channels.length} servers`);
	bot.setStatus("online", "www.paesports.com");
	});




//when the bot disconnects
bot.on("disconnected", () => {
    //alert the console
    console.log("Disconnected! Aw Snap");

    //exit node.js with an error
    process.exit(1);
});
 



//when the bot receives a message
bot.on("message", msg => {
    //if message begins with "ping"
    if (msg.content.startsWith("ping")) 
	{
        //send a message to the channel the ping message was sent in.
        bot.sendMessage(msg, "pong!");
        //alert the console
        console.log("pong-ed " + msg.author);
    }
	
	//  Messing with admin only  commands stuff
	
	/*if (bot.memberHasRole("Admin") && ){
		
		
		
	}
	*/
	
	/*   CURRENTLY NOT WORKING
	// Messing with Admin stuff  --  Steve's code
	if (msg.content.startsWith("!reset")){
        var adminrole = msg.server.roles.get("name", "admin");
        if (msg.author.hasRole(adminrole)){
            bot.reply(msg, "Queue reset")
        }
        else{
            bot.reply(msg, "You do not have access to this command")
        }
    }
	
	if (msg.content.startsWith("!admin")){
        var adminrole = msg.server.roles.get("name", "Admin");
        if (msg.author.hasRole(Adminrole)){
            
            bot.reply(msg, "Queue reset")
        }
        else{
            bot.reply(msg, "You do not have access to this command")
        }
    } 
	*/
	
	// Support Section Start   ---- \n is used to  make a second line in the same message
	

    if (msg.content.startsWith("help")){

	
		// Update the boolean so the system knows that it was asked for help
		askHelp = true;
		
    	bot.sendMessage(msg, "What is it that you need help with? \n You can either say 'match report' 'account issue' 'vip' or 'other' \n I've also moved you to our support channel.  " +msg.author);
		bot.moveMember(msg.author, "153991121960173570");
	
    	// Log it in the console
    	console.log(msg.author.username + " Has said that they need help");
		totalCommands++;
    }
	if (msg.content.startsWith("match report") && askHelp == true){

    	bot.sendMessage(msg, "All match reports can be made on our website at www.paesports.com on the tournament page. Or you can submit a support ticket");
    	// Log it in the console
    	console.log(msg.author.username + "  tried to report a match.");
		askHelp=false;
		totalCommands++;
    }
	else if (msg.content.startsWith("match report") && askHelp == false){
		bot.sendMessage(msg, "Please type the help command first to ensure you are recieving the help you requested.")
		console.log(msg.author + "  Has tried to use a support command without typing help first. - match report command")
	}
	if (msg.content.startsWith("account issue") && askHelp == true){

    	bot.sendMessage(msg, "Darn! As of right now, I'm not smart enough to help you. :sob: " +msg.author);
		bot.sendMessage(msg, "However if you submit a support ticket on our website, a real human will be able to help you out better. :wink: ")
    	// Log it in the console
    	console.log(msg.author.username + "  Has an account issue");
		askHelp=false;
		totalCommands++;
    }
	else if (msg.content.startsWith("account issue") && askHelp == false){
		bot.sendMessage(msg, "Please type the help command first to ensure you are recieving the help you requested.")
		console.log(msg.author + "  Has tried to use a support command without typing help first. - account issue command")
	}
	if (msg.content.startsWith("vip") && askHelp == true){

    	bot.sendMessage(msg, "Darn! As of right now, I'm not smart enough to help you. " +msg.author);
		bot.sendMessage(msg, "However if you submit a support ticket on our website, a real human will be able to help you out better. :wink: ")
    	// Log it in the console
    	console.log(msg.author.username + "  Has tried to do something with VIP");
		askHelp=false;
		totalCommands++;
    }
	else if (msg.content.startsWith("vip") && askHelp == false){
		bot.sendMessage(msg, "Please type the help command first to ensure you are recieving the help you requested.")
		console.log(msg.author + "  Has tried to use a support command without typing help first.")
	}
	if (msg.content.startsWith("other") && askHelp == true){

    	bot.sendMessage(msg, "Here are some other commands that you can use 'memes' 'csgo' 'events' 'forum' 'twitter' 'facebook 'twitch' 'sponsors' 'murica' " +msg.author);
		
    	// Log it in the console
    	console.log(msg.author.username + "  Has used  the other command");
		askHelp=false;
		totalCommands++;
    }
	if (msg.content.startsWith("memes")){
    	bot.sendMessage(msg, " :warning: Memes too strong for me :warning: :punch: " +msg.author);
    	console.log(msg.author.username + "  Has dank memes");
		totalCommands++;
	}
	if (msg.content.startsWith("murica")){
    	bot.sendMessage(msg, " :flag_us:  :flag_us:  :flag_us:  :flag_us: :flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us: :flag_us: :flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us: " +msg.author);
    	console.log(msg.author.username + "  Has used the Murica command");
		totalCommands++;
	}
	if (msg.content.startsWith("canada")){
		bot.sendMessage(msg, "Whoops, looks like I forgot the Canadians, EH?")
		console.log(msg.author.username +" Is a canadaian.")
		totalCommands++;
		}
	if (msg.content.startsWith("csgo")){
    	bot.sendMessage(msg, " :warning: CS:GO events are currently on-hold /n We are however working on something awesome for the CS scene ready around early October \n :sunglasses: " +msg.author);
    	console.log(msg.author.username + "  Has used the CS:GO command");
		totalCommands++;
		}
	if (msg.content.startsWith("events")){
    	bot.sendMessage(msg, "You may find all current, and past events on our website at www.paesports.com" +msg.author);
    	console.log(msg.author.username + "  Has used the event command");
		totalCommands++;
		}
	if (msg.content.startsWith("forum")){
    	bot.sendMessage(msg, "Our forums are located at forum.paesports.com /n Make sure you create an account, join in on the discussion, and even check out our recruitment board." +msg.author);
    	console.log(msg.author.username + "  Has used the forum command");
		totalCommands++;
		}
	if (msg.content.startsWith("twitter")){
    	bot.sendMessage(msg, "Our twitter is www.twitter.com/pa_organization - or @pa_organization" +msg.author);
    	console.log(msg.author.username + " Has used the twitter command. ");
		totalCommands++;
		}
	if (msg.content.startsWith("facebook")){
    	bot.sendMessage(msg, "There is nothing here right now " +msg.author);
    	console.log(msg.author.username + " Has used the facebook command. ");
		totalCommands++;
		}
		if (msg.content.startsWith("twitch")){
    	bot.sendMessage(msg, "Our twitter is www.twitch.tv/pa_organization " +msg.author);
    	console.log(msg.author.username + " Has used the twitch command. ");
		totalCommands++;
		}
		if (msg.content.startsWith("sponsors")){
    	bot.sendMessage(msg, "Thanks to all our sponsors, I have no idea who you are." +msg.author);
    	console.log(msg.author.username + " Has used the sponsors command. ");
		totalCommands++;
		}
	if (msg.content.startsWith("command-count")){
		bot.sendMessage(msg, "The total amount of commands used is..." +totalCommands);
		
	}
	// Support Section End
	
	
	// Easter egg section
	if (msg.content.startsWith("ghost"))
	{
		bot.replyTTS(msg, "Ghosts are fake, never believe in them. Never Believe in ghosts. Never Believe in ghosts. Never Believe in ghosts.", {tts:true});
		console.log(msg.author + "  has just shit there pants from a prank performed by me, the best bot ever.");
		totalCommands++;
	}
	
	// End of easter egg section

	if (totalCommands == 10 && tenCommands==false){
		tenCommands=true
		bot.sendMessage(msg, "Hey, stop it.:expressionless:  \n STOP IT NOW! :rage:  \n You are making me work too hard! :tired_face: ")
		console.log("I have answered 10 commands -  give me a raise b0ss")
	}


	// !Quit command that makes the bot leave
if (msg.content.startsWith("!quit")){
	bot.sendMessage(msg, "I guess nobody wants me here anymore");
	console.log("Leaving to go make friends in some better place...");
	process.exit(0);
}
// AFK addon
// If someone types afk  they are moved to the AFK channel automatically.

if (msg.content.startsWith("afk")){
	
	// Actually move the person
	bot.moveMember(msg.author, "140187524428464129");
	console.log(msg.author.username + " Is now AFK, and has been moved to the AFK Channel.");
	bot.sendMessage(msg, msg.author + " Is now AFK.");
	bot.sendMessage(msg.author, "You are now AFK, I've also moved you to the AFK Channel.");
}
if (msg.content.startsWith("lobby")){
	// Actually move the person
	bot.moveMember(msg.author, "78907875346354176");		
	console.log(msg.author.username + " Was moved to the lobby");
	bot.sendMessage(msg.author, "I've moved you to the lobby. :wink:");
}

// Matchmaking 0.1

if (msg.content.startsWith("join-q")){
	// Actually move the person
	bot.moveMember(msg.author, "218896743671005184");		
	console.log(msg.author.username + " Was moved to the Matchmaking queue");		// Direct Message
	mmLine++;
	bot.sendMessage(msg, msg.author + "You've been moved into the Matchmaking queue. Please note this is a alpha version, there will be bugs, and glitches. ");		// Server wide message
	bot.sendMessage(msg, msg.author + " has joined the matchmaking queue. \n There are a total of " +mmLine + " in line");		// Server wide message
	if (mmLine==4){
		bot.sendMessage(msg, msg.author + "There are 4 people that are ready to play a match. Server info will be sent soon.");

		console.log("4 People have been choosen for this upcoming match.");
	}
	/*while (mmLine<4){
		match1Ready=false
	}
	for
		*/
}
	if (msg.content.startsWith("leave-q")){
		bot.sendMessage(msg, msg.author + " has left the matchmaking queue. Current number of people in queue = "+mmLine);
		bot.sendMessage(msg.author, "You've left the matchmaking queue, please type 'join-q' when you are ready to join again.")
		console.log(msg.author.username + " Has left the matchmaking queue. Current people in queue = " +mmLine);
		mmLine--;
	}
	if (msg.content.startsWith("q-status")){
		bot.sendMessage(msg, "There are " +mmLine, "people in queue")		// Simple command that prints the current value of the var storing the people in q.
	}

});


// Mute the person
	//bot.muteMember(msg.author, "78907822976274432");	

// Leave this - auth everything with discord
bot.loginWithToken(AuthDetails.token);