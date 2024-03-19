import { LitElement, html, css } from 'lit';

export class Alert extends LitElement {

  static get tag() {
    return 'alert-tag';
  }

  constructor() {
    super();
      this.date = "Jan 1, 2001 12:00AM";
      this.body = "Alert body";
      this.opened = false;
      this.isSticky = false;
      this.issueLevel = "warning";
     }

  static get styles() {
    return css`
        :host([isSticky]){
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .hide{
          display: none;
        }
        .alert{
          background-color: #ffd100;
          margin-top: 0px;
          margin-bottom: 10px;
          padding:0px;
        }
        .sticky{
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .alert-header{
          display: flex;
          justify-content:space-around;
          background-color: #bf8226;
        }
        .alert-date{
          letter-spacing: 0.03rem;
          font-size: 1.2rem;
          font-family:sans-serif;
          font-weight:bold;
        }
        .alert-button{
          background-color:transparent;
          color:white;
          border:none;
          cursor:pointer;
          margin:5px;
        }
        .alert-body{
          padding:2% 5% 2% 5%;
        }
        .alert-message{
          text-align:center;
          color:#000321;
          font-size:1.12rem;
          font-family:sans-serif;
        }
        .notice{
          background-color: lightblue;
        }
        .alert.alert-header{
          background-color:green;
        }
        .notice slot{
          color: #000321;
        }
        .emergency{
          background-color: red;
        }
        .emergency slot{
          color: white;
        }
        
    `;
    }

  firstUpdated(){
    if (localStorage.getItem("alertOpen") == "false"){
      this.opened = false;
      console.log(localStorage.getItem("alertOpen"));
    }else{
      this.opened = true;
      console.log(localStorage.getItem("alertOpen"));
    };
  }

  toggleAlert(){
    this.opened = !this.opened;
    localStorage.setItem("alertOpen", this.opened);
  }

  render() {
    return html`
        <div class="alert ${this.issueLevel == "notice" ? "notice": ""} ${this.issueLevel == "emergency" ? "emergency": ""}">
          <div class="alert-header">
            <p class="alert-date">${this.date}</p>
            <button class="alert-button" @click="${this.toggleAlert}">${this.opened ? "open" : "close"}</button>
          </div>
          <div class="alert-body ${this.opened ? "hide" : "show"}">
            <slot class="alert-message"></slot>
          </div>
        </div>
      `;
    }

  static get properties() {
    return {
      date: {type: String},
      opened: {type: Boolean, reflect: true},
      isSticky: {type: Boolean, reflect: true},
      issueLevel: {type: String},
    };
  }
}

globalThis.customElements.define(Alert.tag, Alert);
