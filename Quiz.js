class Quiz {
  constructor(){
    this.test = createElement('h3');
    this.note = createElement('h4');
    this.result1 = createElement('h4');
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }
  getName1(){
    
  }
getA1(){
  var gp1a = database.ref('contestants/contestant1/answer');
  gp1a.on("value",function(data){
p1a = data.val();
  });
  
}
A(){
  if (p1a === 2){
    pla = "*";
  }
  else{
    pla = "-";
  }
}

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    var gPlayer1 = database.ref('contestants/contestant1/name');
    gPlayer1.on("value",function(data){
  p1 = data.val();
      console.log(p1);
      this.result1.html(p1 + " test");
      this.result1.position(70,300);
    });
    this.test.html("*Just so ya know if yer name has * than you win! (when names appear)");
    
    this.test.position(70,200);
  
    this.note.html("if this has appeared before answering form, than database neds reset. thx, -beni.")
    this.note.position(20, 350);
    //write code to change the background color here

  background("green");
    //write code to show a heading for showing the result of Quiz
    //this.test.html.shapeColor("blue");
    //write condition to check if contestantInfor is not undefined
if (allContestants !== undefined){
  this.result1.html(p1 + " test");
    this.result1.position(70,300);
}
    //write code to add a note here
   
    //write code to highlight contest who answered correctly
    this.test.display();
  
  }

}
