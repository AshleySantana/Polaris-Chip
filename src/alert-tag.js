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
        :hide([opened]) .minimized-alert{
          display: none;
        }

        :show([opened=false]) .maximized-alert{
          display: none;
        }
    `;
    }

toggleAlert(){
  this.opened = !this.opened
}

  render() {
    return html`
      <div class="${this.open ? "hide" : "show"}"> 
        <div class="minimized-alert"> 
          <button class="expand-alert" @click="${this.toggleAlert}">expand alert</button>
          <p class="alert-header">${this.header}</p>
        </div>
        <div class="maximized-alert">
          <p class="date">${this.date}</p>
          <p class="alert-header">${this.header}</p>
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
