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
    console.log(changedProperties);

    if (changedProperties.has("number") && (this.number === 21)) {
      this.makeItRain();
      // do your testing of the value and make it rain by calling makeItRain
    }
  }
  
  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
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
