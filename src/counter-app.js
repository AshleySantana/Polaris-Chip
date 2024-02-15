import { LitElement, html, css } from 'lit';

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();

     }

  static get styles() {
    return css`
      
    `;
    }

  render() {
    return html`
      
      `;
    }

  static get properties() {
    return {
   
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);
