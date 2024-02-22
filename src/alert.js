import { LitElement, html, css } from 'lit';

export class Alert extends LitElement {

  static get tag() {
    return 'alert';
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

globalThis.customElements.define(Alert.tag, Alert);
