import { LitElement, html, css } from 'lit';

export class Alert extends LitElement {

  static get tag() {
    return 'alert-tag';
  }

  constructor() {
    super();
      this.header = "Alert";
      this.date = "1/1/2001";
      this.body = "Alert body";

     }

  static get styles() {
    return css`

    `;
    }


  render() {
    return html`
      <div class="alert-wrapper"> 
        <div class="minimized-alert"> 
          <button class="expand-alert">expland alert</button>
          <p class="alert-header">${this.header}</p>
        </div>
        <div class="maximized-alert">
          <p class="date">${this.date}</p>
          <p class="alert-header">${this.header}</p>
          <div class="alert-message">
            <slot></slot>
          </div>
          <button class="minimize-alert">minimize alert</button>
        </div>
      </div>
      `;
    }

  static get properties() {
    return {
      header: {type: String},
      date: {type: String},
      


    };
  }
}

globalThis.customElements.define(Alert.tag, Alert);
