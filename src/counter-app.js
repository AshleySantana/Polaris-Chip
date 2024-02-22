import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
      this.number = 0;
      this.min = -10;
      this.max = 50;
     }

  static get styles() {
    return css`

    :host([number="16"]).button-wrapper{
      color: green;
    }
    .counter-wrapper{
      background-color: pink;
      margin: 40px;
      width: 50px;
    }
    .number{
      font-size: 40px;
    }
    button:hover {
      background-color: blue;
      border: 1px solid black;
    }
    `;
    }

  increase(){
    this.number+=1;
  }
  decrease(){
    this.number-=1;
  }

  updated(changedProperties) {
    if (changedProperties.has("number") && (this.number === 21)) {
      return this.makeItRain();
      // do your testing of the value and make it rain by calling makeItRain
    }
  }
  
  makeItRain() {
    // this is called a dynamic import. It means it won't import the code for confetti until this method is called
    // the .then() syntax after is because dynamic imports return a Promise object. Meaning the then() code
    // will only run AFTER the code is imported and available to us
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        // This is a minor timing 'hack'. We know the code library above will import prior to this running
        // The "set timeout 0" means "wait 1 microtask and run it on the next cycle.
        // this "hack" ensures the element has had time to process in the DOM so that when we set popped
        // it's listening for changes so it can react
        setTimeout(() => {
          // forcibly set the poppped attribute on something with id confetti
          // while I've said in general NOT to do this, the confetti container element will reset this
          // after the animation runs so it's a simple way to generate the effect over and over again
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }

  render() {
    var color = "black";
    if(this.number ===  18) {color = "green"};
    if(this.number ===  21) {color = "yellow"};
    if(this.number ===  this.min) {color = "red"};
    if(this.number ===  this.max) {color = "blue"};

    return html`
      <div class="counter-wrapper">
        <confetti-container id="confetti"><h2 class="number" style="color:${color}">${this.number}</h2></confetti-container>
        <div class="button-wrapper">
          <button id="plus" @click="${this.increase}" ?disabled="${this.max === this.number}">+</button>
          <button id="minus" @click="${this.decrease}" ?disabled="${this.min === this.number}">-</button>
        </div>
      </div>
      `;
    }

  static get properties() {
    return {
      number: {type: Number, reflect: true },
      min: {type: Number},
      max: {type: Number}
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
