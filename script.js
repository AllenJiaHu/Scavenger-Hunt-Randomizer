$(document).ready(function(){

var ourArray = [
'<br>Make or buy cookies and pass them out to people in the school/on campus.',

'<br><br>Write personal Christmas/Holiday cards and give them to strangers',

'<br><br>Find your favorite or most outlandish Christmas storefront window display and photograph it.',

'<br><br>Find a piece of art in a gallery or museum and caption it with a funny subtitle that is unrelated to the piece’s subject.',

'<br><br>Each group member hand writes a note of appreciation or encouragement to someone in their life. Hand deliver if possible, mail otherwise. Some suggestions for recipients include: friends, family members, coworkers, classmates, teachers, mentors, public figures.',

'<br><br>Fix something/solve a problem for someone on campus. (Can be a problem or personal situation).',

'<br><br>Go to a library or bookstore and find a book with an author who has the same first or last name of one of your group members. (No cheating by using the library database![honor system])',

'<br><br>Ride a subway line/bus line (preferably one you haven’t been on before) and get off at a random stop. Briefly explore the neighborhood, take photos.',

'<br><br>Go into a grocery store and try a food that you or no one in your group has ever tried before. Write a review of your thoughts.',

'<br><br>Go to Union Sq and protest something silly, bonus points for making a poster/sign, bonus points for being silly and holiday related.. Ex: Protest Pizza Rats stealing all our Pizza. (This is not meant to get political, just silly).',

'<br><br>Provide food for someone who needs it. (This could be a coffee for a friend, lunch for a homeless person, etc)',

'<br><br>Write encouraging notes on sticky notes and post them on as many lockers as you can. Maybe take pictures of your favorite notes.',

'<br><br>Go to a pet store and buy some dog biscuits. Pass them out to cute doggies in the city.',

'<br><br>Go to a thrift store and create a really zany outfit. Try on the outfit and document it. Bonus points if you buy the outfit and wear it to class!',

'<br><br>Buy a pack of fake mustaches and wear them around for at least 30 minutes. Act like everything is completely normal.',

'<br><br>Treat yourself to a break for 30 minutes. (Do what you consider ‘relaxing’). Take comfort in the fact that it’s technically homework. (Practice self care!)',

'<br><br>Call (or talk to) your parents/family members for 20 minutes. Tell them about your life and that you love them.',

'<br><br>Call your local representative or senator (find their office’s number on the internet) and ask questions or show support for an issue that you care about. (If you are not from America, call a NY rep).',

'<br><br>Everyone in the group: Write a letter to your future self. Hide it at the bottom of one of your drawers. (Hopefully forget about it)',

'<br><br>Everyone in the group: Write a haiku. (Bonus points if it is related to your group’s name and makes sense)',

'<br><br>Photograph someone in one of your classes, and ask how they found art & design',

'<br><br>Buy a bouquet of flowers and pass them out to people who need a pick me up!',

'<br><br>Put vanilla pudding in a mayo jar and eat it in public. Alternatively, blue gatorade in a CLEAN windex bottle. ',

'<br><br>Change something about your appearance. (Part your hair differently, wear different clothes, do makeup differently. Bonus points for wearing it to class!)',

'<br><br>Photograph places around campus that tells a funny story',

'<br><br>Take a group picture with your group. Make it silly, not serious. (creativity encouraged).',
];

  console.log(ourArray);

  $('body').append('<h1> Our list: <br>' + ourArray + '</h1>')

console.log(Math.random());

var rand = ourArray[Math.floor(Math.random() * ourArray.length)];
console.log('rand' + rand);

// shuffle our array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(ourArray);
console.log('shuffle: ' + ourArray);

var myList = ourArray.slice(0,26);
console.log('myList' + myList);

$('body').append(myList);











});
