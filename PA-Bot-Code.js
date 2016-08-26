/*
    Perfect Alliance eSports Custom Discord  Bot
	Version 0.0.6
	Coded with love and memes by: Mike Madden
	
	Please visit www.paesports.com with any errors or problems with this bot.
	
	Todo 
	-Make a command  that allows Admins to see how many times a command has been used.
	
	
	Changelog 
	8-26
	[ADDED] AFK Mode - People type AFK, and are moved to the channel
	[ADDED] Improved Console Logging
	[ADDED] a beta version of a support system.
	
 	
*/

var Discord = require("discord.js");

// Get the email and password
var AuthDetails = require("./auth.json");

var bot = new Discord.Client();

var askHelp = false;

//var adminrole = msg.server.roles.get("name", "Admin");

//when the bot is ready
bot.on("ready", () => {
    console.log(`The PA  Bot  has loaded. Awesome!`);
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
		
    	bot.sendMessage(msg, "What is it that you need help with? \n You can either say 'match report' 'account issue' 'vip' or 'other' " +msg.author);
	
    	// Log it in the console
    	console.log(msg.author.username + " Has said that they need help");
		
    }
	if (msg.content.startsWith("match report") && askHelp == true){

    	bot.sendMessage(msg, "All match reports can be made on our website at www.paesports.com on the tournament page. Or you can submit a support ticket");
    	// Log it in the console
    	console.log(msg.author.username + "  tried to report a match.");
		askHelp=false;
		
    }
	
	if (msg.content.startsWith("account issue") && askHelp == true){

    	bot.sendMessage(msg, "Darn! As of right now, I'm not smart enough to help you. :sob: " +msg.author);
		bot.sendMessage(msg, "However if you submit a support ticket on our website, a real human will be able to help you out better. :wink: ")
    	// Log it in the console
    	console.log(msg.author.username + "  Has an account issue");
		askHelp=false;
		
    }
	if (msg.content.startsWith("vip") && askHelp == true){

    	bot.sendMessage(msg, "Darn! As of right now, I'm not smart enough to help you. " +msg.author);
		bot.sendMessage(msg, "However if you submit a support ticket on our website, a real human will be able to help you out better. :wink: ")
    	// Log it in the console
    	console.log(msg.author.username + "  Has tried to do something with VIP");
		askHelp=false;
    }
	if (msg.content.startsWith("other") && askHelp == true){

    	bot.sendMessage(msg, "Here are some other commands that you can use 'memes' 'csgo' 'events' 'forum' 'twitter' 'facebook 'twitch' 'sponsors' 'murica' " +msg.author);
		
    	// Log it in the console
    	console.log(msg.author.username + "  Has used  the other command");
		askHelp=false;
    }
	if (msg.content.startsWith("memes")){
    	bot.sendMessage(msg, " :warning: Memes too strong for me :warning: :punch: " +msg.author);
    	console.log(msg.author.username + "  Has dank memes");
    }
	if (msg.content.startsWith("murica")){
    	bot.sendMessage(msg, " :flag_us:  :flag_us:  :flag_us:  :flag_us: :flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us: :flag_us: :flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us::flag_us: " +msg.author);
    	console.log(msg.author.username + "  Has used the Murica command");
    }
	if (msg.content.startsWith("canada")){
		bot.sendMessage(msg, "Whoops, looks like I forgot the Canadians, EH?")
		console.log(msg.author.username +" Is a canadaian.")
	}
	if (msg.content.startsWith("csgo")){
    	bot.sendMessage(msg, " :warning: CS:GO events are currently on-hold /n We are however working on something awesome for the CS scene ready around early October /n :sunglasses: " +msg.author);
    	console.log(msg.author.username + "  Has used the CS:GO command");
    }
	if (msg.content.startsWith("events")){
    	bot.sendMessage(msg, "You may find all current, and past events on our website at www.paesports.com" +msg.author);
    	console.log(msg.author.username + "  Has used the event command");
    }
	if (msg.content.startsWith("forum")){
    	bot.sendMessage(msg, "Our forums are located at forum.paesports.com /n Make sure you create an account, join in on the discussion, and even check out our recruitment board." +msg.author);
    	console.log(msg.author.username + "  Has used the forum command");
    }
	if (msg.content.startsWith("twitter")){
    	bot.sendMessage(msg, "Our twitter is www.twitter.com/pa_organization - or @pa_organization" +msg.author);
    	console.log(msg.author.username + " Has used the twitter command. ");
    }
	
	
	// Support Section End
	
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
	
	// Mute the person
	//bot.muteMember(msg.author, "78907822976274432");	
}
});




// Leave this - auth everything with discord
bot.loginWithToken(AuthDetails.token);