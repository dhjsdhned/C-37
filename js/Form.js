class Form {
  constructor() {
    // made a button to enter the player name and to play
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    // h2 is the size of the greeting
    // h1 is the biggest and h6 is the smallest
    this.greeting = createElement("h2");
  }
  // set the position for all the buttons and writings
  setElementsPosition() {
    this.titleImg.position(120, 100);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

 /* setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  } */
// the play button should hide and the greeting should show
// the greeting should hide when both players are there
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
// => belongs to the object in the class and not the particular value it is helpng
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;
      //player.addPlayer();
    });
  }
// when the screen opens everything should be displayed
  display() {
   this.setElementsPosition();
    //this.setElementsStyle();
    this.handleMousePressed();
  }
}