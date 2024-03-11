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
      this.opened = false;
      this.sticky = false;
     }


  static get styles() {
    return css`
        ::backdrop{
          scroll-snap-type:none;
        }
        .hide{
          display: none;
        }
        .alert-wrapper{
          display: flex;
          background-color: blue;
          position: sticky;
          margin-top: 0px;
        }
        .alert-wrapper.sticky{
          position: sticky;
        }
    `;
    }

toggleAlert(){
  this.opened = !this.opened;
}

  render() {
    return html`
      <div class="alert-wrapper">
        <div class="alert ${(this.sticky) ? "sticky" : ""}">
        <p class="alert-header">${this.header}</p>
        <div class="alert-body ${this.opened ? "hide" : "show"}">
            <p class="date">${this.date}</p>
            <div class="alert-message">
              <slot></slot>
            </div>
        </div>
        <button class="expand-alert" @click="${this.toggleAlert}">expand alert</button>
        </div>
      </div>
      `;
    }

  static get properties() {
    return {
      header: {type: String},
      date: {type: String},
      opened: {type: Boolean, reflect: true},
      sticky: {type: Boolean},
      
    };
  }
}

globalThis.customElements.define(Alert.tag, Alert);
