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
      
    `;
    }

  increase(){
    this.number+=1;
  }
  decrease(){
    this.number-=1;
  }
  if(number = 18){
    
  }

  render() {
    var color = "blue";
    if(this.number === 18){

    }




    return html`
      <div class="counter-wrapper">
        <div class="number">${this.number}</div>
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
