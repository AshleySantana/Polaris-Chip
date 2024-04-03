import { LitElement, html, css } from 'lit';

export class ConfirmationMessage extends LitElement {

  static get tag() {
    return 'confirmation-message';
  }

  constructor() {
    super();
     
     }

  static get styles() {
    return css`
    .confirmation-message {
        display: flex;
        background-color: #8abfd9;
        width: 300px;
      }
    `;
    }

    yes() { 
      this.dispatchEvent(new CustomEvent('confirmationYes'));
    }
  
    no() {
      this.dispatchEvent(new CustomEvent('confirmationNo'));
    }

  render() {
    return html`
        <div class="confirmation-message">
                <button class="exit-message" @click="${this.no}">x</button>
            <div class="message-wrapper">
                <p>Are you sure you want to delete?</p>
                <button @click="${this.yes}">Yes</button>
                <button @click="${this.no}">No</button>
            </div>
        </div>
      `;
    }

  static get properties() {
    return {
     
    };
  }
}

globalThis.customElements.define(ConfirmationMessage.tag, ConfirmationMessage);
