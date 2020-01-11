
var data = {
    one: "Team Up Creates Opportunity",
    two: "Team Up is a platform for finding and building local sports communities. People use Team Up to meet new people, exercise and to explore thier community (all without paying for an expensive sports league).",
    three: "How it Works!",
    four: "First, Sign up. Then pick a sport and a day of the week that works best for you. Team Up will then matches you with members of your community in a chat room, YOUR NEW TEAM. In the chat room you can sort out the details like what time works best, who is bringing the ball,and where you will meet.",
    five: "Don’t like your Team? Day no longer works for your schedule?",
    six: "Remove yourself from the chat and select a new sport and time. A new team is just a few clicks away",
    
};  
 
var html = ''
            + '<h1>' + data.one + '</h1>'
            + '<p>' + data.two + '</p>'
            + '<br>'
            + '<h2>' + data.three + '</h2>'
            + '<p>' + data.four + '</p>'
            + '<br>'
            + '<h5>' + data.five + '</h5>'
            + '<p>' + data.six + '</p>';

$('.indexTextBox').append(Mustache.render(html, data));


{/* 
<h1>Team Up Creates Oportunity</h1>
 <p>Team Up is a platform for finding and building local sports communities. People use Team Up to meet new
   people, exercise and to explore thier community (all without paying for an expensive sports league).</p>
 <br>
 <h2>How it Works!</h2>
 <p> First, Sign up. Then pick a sport and a day of the week that works best for you. Team Up will then matches
   you with members of your community in a chat room, YOUR NEW TEAM. In the chat room you can sort out the
   details like what time works best, who is bringing the ball,and where you will meet.</p>
 <br>
 <h5>Don’t like your Team? Day no longer works for your schedule?</h5>
 <p>Remove yourself from the chat and select a new sport and time. A new team is just a few clicks away</p>
 <a class="btn btn-danger" href="/signup">Join Now</a> */}
