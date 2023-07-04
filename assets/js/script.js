$(document).ready(function(){

var randomQuote = "You must be the change you wish to see in the world";
var randomAuthor = "Mahatma Gandhi";
var randomBackgroundImage;
  
  function getQuote(){
    
    var quotes = [
      "If you can dream it, you can buy a refrigerator",
      "Hoes be like: 'hoes be like', but they be the hoes that be like",
      "A fake ass nigga might do some true nigga shit, but a true nigga will never do some fake ass nigga shit",
      "Breakfast is the most important meal of the day", 
      "Nice pants. Can I test the zipper?",
      "Roses are red the grass is green", 
      "Go ahead, touch it",
      "Your face looks better between my legs", 
      "I changed all my passwords to 'incorrect'. So my computer just tells me when I forgot",
      "No I didn't trip, the floor looked like it needed a hug",
      "Whatever you do in life, give 100%.....unless you're giving blood",
      "On a scale of Voldemort to Pinocchio, how Nosy are you?",
      "I wonder if tap dancers walk into a room, look at the floor and think,'I'd so tap that",
      "I feel like getting something done today, so I'm just going to sit here until the feeling passes",
      "I was complimented on my driving. Someone left a note on my windshield that said, 'Parking Fine",
      "I just dropped my laptop off the boat.....It's a Dell, rolling in the deep",
      "I really like ceilings......I guess you could call me a ceiling fan",
      "I was planning to do something today, but I haven't finished doing nothing from yesterday",
      "You remind me of my Chinese friend...Ug Lee",
      "Light travels faster then sound. This is why some people appear bright ,until you hear them talk",
      "The dictionary is the only place where success comes before work",
      "I speak my mind. I never mind what I speak",
      "I haven't seen any statuses about Ninjas lately....well played Ninjas",
      "I am so blue I'm greener than purple",
      "I stepped on a Corn Flake, now I'm a Cereal Killer",
      "Llamas eat sexy paper clips",
      "Im slim shady yes im the real shady all you other slim shadys are just imitating",
      "Go shawty, it’s your birthday We gon party like it’s your birthday",
      "If you're having girl problems I feel bad for you son.",
      "She got a big booty so i call her big booty",
      "Cash Rules Everything Around Me",
      "His palms are sweaty, knees weak, arms are heavy",
      "I ain’t no killer but don’t push me",
      "They see me rollin' they hatin'",
      "I'm not gay, but 20 dollars is 20 dollars",
      "Hitler did nothing wrong",
      "YOLO",
      "Kool Aid and frozen pizza, its a work of art i aint talking mona lisa",
      "When i was in the third grade i thought that i was gay",
      "You say a goon but what’s a goon to a goblin?",
      "That FuFu Lame Shit I Aint With It, I send some shots at your fitted, GRATATA"
       ];
    

    var author= [
    "Jesus",
    "William Shakespeare",
    "Abraham Lincoln",
    "Adolf Hitler",
    "Aristotle",
    "Henry VIII of England",
    "Charles Darwin",
    "Karl Marx",
    "Christopher Columbus",
    "Napoleon", "Muhammad",
    "George Washington",
    "Alexander the Great",
    "Thomas Jefferson",
    "Adolf Hitler",
    "Julius Caesar",
    "Queen Victoria",
    "Martin Luther",
    "Joseph Stalin",
    "Albert Einstein",
    "Isaac Newton",
    "Charlemagne",
    "Theodore Roosevelt",
    "Wolfgang Amadeus Mozart",
    "Plato",
    "Louis XIV of France",
    "Ulysses S. Grant",
    "Leonardo da Vinci",
    "Augustus",
    "Ronald Reagan",
    "Paul the Apostle",
    "Benjamin Franklin",
    "George W. Bush",
    "Winston Churchill",
    "Genghis Khan",
    "Thomas Edison",
    "Sigmund Freud",
    "Woodrow Wilson",
    "Galileo Galilei",
    "Gautama Buddha",
    "Edgar Allan Poe",
    "Andrew Jackson",
    "Elvis Presley",
    "Vincent van Gogh",
    "Vladimir Lenin",
    "Robert E. Lee",
    "King Arthur",
    "Michelangelo"
    ];
    
    var randomNum1 = Math.floor((Math.random()*quotes.length))
    var randomNum2 = Math.floor((Math.random()*author.length))
    
    
    randomQuote = quotes[randomNum1];
    randomAuthor = author[randomNum2];
    
    
    $(".quote").text("'" + randomQuote + "'");
    $(".author").text("- " + randomAuthor);
    
  }
  
  function getBackground(){
    var background = [
                      "space.jpg",
                      "aurora.jpg",
                      "eiffel.jpg",
                      "flowers.jpg",
                      "lava.jpg",
                      "nature.jpg",
                      "nightcity.jpg",
                      "pink.jpg",
                      "purple.jpg",
                      "mountain.jpg",
                      "moon.jpg",
                      "submarine.jpg",
                      "aurorapink.jpg"
                     ]
    
    var randomNum3 = Math.floor((Math.random()*background.length))
    
    randomBackgroundImage = background[randomNum3];
    var bgImage = "url(assets/images/" + randomBackgroundImage + ")";
    $('.container').css({'background-image':bgImage});
  }



  function getFont(){
    var font = [
                "'Quicksand'",
                "'Montserrat'",
                "'Lobster'",
                "Satisfy",
                "Poiret One",
                "Gudea",
                "Pacifico",
                "Pompiere"
               ];

    var randomNum4 = Math.floor((Math.random()*font.length))

    randomFont = font[randomNum4];
    var fontFamily = randomFont;
    $('.quote').css({'font-family':fontFamily});
  }
  
  
  
  
  $("#newQuote").on("click", function(){
    getQuote();
    getBackground();
    getFont();
  });

});