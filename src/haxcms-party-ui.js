import { LitElement, html, css } from 'lit';
import { ConfirmationMessage } from './confirmation-message';
import "@lrnwebcomponents/rpg-character/rpg-character.js";
//import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class HaxcmsPartyUi extends LitElement {
  static get tag() {
    return 'haxcms-party-ui';
  }

  constructor() {
    super();
      this.delete = false;
      this.userArray = [];
      this.selectedUser = "";
    }

  static get styles() {
    return css`
      .delete{
        display: none;
      }
      .page-header{
        color: white;
      }
      h3{
        color: white;
      }
      .add-button{
        font-family: "Press Start 2P", system-ui;
        font-size: 30px;
        padding: 15px;
        background-color: lime;
        color: grey;
      }
      .submit-button{
        font-family: "Press Start 2P", system-ui;
        font-size: 30px;
        padding: 15px;
        background-color: lime;
        color: grey;
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
    const id = e.target.id;
    this.selectedUser = id;
    this.delete = true;
  }

  confirmation(e){
    const position = this.userArray.indexOf(this.selectedUser);
    if(e.type === "confirmationYes"){
      this.userArray.splice(position, 1);
      this.userToDelete = '';
      this.deleteUserPending = false;
      this.requestUpdate();
    }else{
      this.userToDelete = '';
      this.deleteUserPending = false;
      this.requestUpdate();
    }
  }

makeItRain() {
  import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
    (module) => {
      setTimeout(() => {
        this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
      }, 0);
    }
  );
}

  render() {
    return html`
    <confetti-container id="confetti">
    <h1 class="page-header">CREATE YOUR PARTY</h1>
    <h3>Type in a username and add them to your party.</h3>
        <div class="user-list">
          <div class="user">
              ${this.userArray.map((name) => html`
                  <rpg-character seed="${name}" ></rpg-character>
                  <button class="delete-button" id="${name}" @click = ${this.deleteUser}>delete</button>
                  ${this.delete && name === this.selectedUser ?
                      html`
                      <confirmation-message class="confirmation-message" 
                        @confirmationYes="${this.confirmation}" 
                        @confirmationNo="${this.confirmation}"></confirmation-message>`
                      : ''}
                  `)}
        </div>
      </div>
      <div class="user-actions">
            <input type="text" id="input-user" placeholder="Search party member...">
            <button class="add-button" @click = ${this.addUser}>add</button>
      </div>
      <button class="submit-button">submit</button>
      <confirmation-message class="confirmation-message ${this.delete == true ? "delete": ""}"></confirmation-message>
      </confetti-container>
    `;
    }

  static get properties() {
    return {
      delete: {type: Boolean, reflect: true},
      userArray: {type: Array},
      selectedUser: {type: String},
    };
  }
}

globalThis.customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);
