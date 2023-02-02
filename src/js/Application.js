import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    document.getElementById('emojis').innerHTML=this.emojis;
  }

  addBananas() {
    document.getElementById('emojis').innerHTML = "";
    let newEmojis= this.emojis.map(monkey=>monkey+=this.banana);
    let monkeys=document.createElement('p');
    monkeys.innerHTML=newEmojis;
    document.getElementById('emojis').appendChild(monkeys);
  }
}
