class App {
  constructor() {
    this.keyboard = {};
    this.p = { x: 50, y: 50 };

    setInterval(this.run.bind(this), 17);
  }

  run() {
    if (this.keyboard.d) {
      this.p.x++;
      postMessage(this.p);
    }
  }
}

let app = new App();

onmessage = function(e) {
  console.log("RECIEVED IN WORKER!!", e)
  app.keyboard = e.data;
}