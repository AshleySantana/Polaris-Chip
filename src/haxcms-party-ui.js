import { LitElement, html, css } from 'lit';
import { ConfirmationMessage } from './confirmation-message';
import "@lrnwebcomponents/rpg-character/rpg-character.js";

export class HaxcmsPartyUi extends LitElement {

  static get tag() {
    return 'haxcms-party-ui';
  }

  constructor() {
    super();
      this.delete = false;
      this.userArray = [];

    }

  static get styles() {
    return css`
      .delete{
        display: none;
      }
      
      
    `;
    }

  addUser(){
    const user = this.shadowRoot.querySelector("#input-user").value;
    this.userArray.push(user);
    this.requestUpdate();
    console.log(this.userArray);
  }  
  deleteUser(e){
    
    var id = e.target.id;
    
  }

  render() {
    return html`
      <div class="user">
        <div class="user-list">
            ${this.userArray.map((name) => html`
                <rpg-character seed="${name}" ></rpg-character>
                <button id="${name}" @click = ${this.deleteUser}>delete</button>
            `)}
        </div>
        <div class="add-user">
            <input type="text" id="input-user">
            <button @click = ${this.addUser}>+</button>
        </div class="user-actions">
            <!-- <button class="button">delete</button> -->
            <button class="button">submit</button>
        </div>
        <confirmation-message class="confirmation-message ${this.delete == true ? "delete": ""}"></confirmation-message>
      </div>
    `;
    }

  static get properties() {
    return {
      delete: {type: Boolean, reflect: true},
      userArray: {type: Array},
    };
  }
}

globalThis.customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
