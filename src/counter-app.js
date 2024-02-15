import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
      this.number = 0;
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
      font-size: 20px;
    }
      
    `;
    }

  increase(){
    this.number+=1;
  }
  decrease(){
    this.number-=1;
  }

  render() {
    return html`
      <div class="counter-wrapper">
        <div class="number">${this.number}</div>
        <div class="button-wrapper">
          <button id="plus" @click="${this.increase}">+</button>
          <button id="minus" @click="${this.decrease}">-</button>
        </div>
      </div>
      `;
    }

  static get properties() {
    return {
      number: { type: Number, reflect: true },
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
