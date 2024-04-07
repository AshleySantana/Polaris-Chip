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
    .message-wrapper{
      display: flex;
    }
    `;
  }

    yes() { 
      this.dispatchEvent(new CustomEvent('confirmationYes'), {
        detail: "yes"
      });
    }
  
    no() {
      this.dispatchEvent(new CustomEvent('confirmationNo'), {
        detail: "no"
      });
    }

  render() {
    return html`
      <dialog class="confirmation-message" open>
        <button class="exit-message" @click="${this.no}">x</button>
        <div class="message-wrapper">
          <p>Are you sure you want to delete?</p>
          <button @click="${this.yes}">Yes</button>
          <button @click="${this.no}">No</button>
        </div>
      </dialog>
      `;
    }

  static get properties() {
    return {
     
    };
  }
}

globalThis.customElements.define(ConfirmationMessage.tag, ConfirmationMessage);
