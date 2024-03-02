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
        .hide{
          display: none;
        }
        .show{
          background-color:blue;
        }
    `;
    }

toggleAlert(){
  this.opened = !this.opened;
}

  render() {
    return html`
      <div class="alert-wrapper"> 
        <div class="${this.opened ? "hide" : "show"}"> 
          <p class="alert-header">${this.header}</p>
          <button class="expand-alert" @click="${this.toggleAlert}">expand alert</button>
        </div>
        <div class="${this.opened ? "hide" : "show"}">
          <p class="alert-header">${this.header}</p>
          <p class="date">${this.date}</p>
          <div class="alert-message">
            <slot></slot>
          </div>
          <button class="minimize-alert" @click="${this.toggleAlert}">minimize alert</button>
        </div>
      </div>
      `;
    }

  static get properties() {
    return {
      header: {type: String},
      date: {type: String},
      opened: {type: Boolean, reflect: true}

    };
  }
}

globalThis.customElements.define(Alert.tag, Alert);
