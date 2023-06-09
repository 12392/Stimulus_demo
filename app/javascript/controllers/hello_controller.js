// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "output" ]
  static values = {number: Number}

  connect() {
    this.numberValueChanged()
  }

  clickedPlus(){
    this.numberValue = this.numberValue + 1
  }

  clickedMinus(){
    this.numberValue = this.numberValue - 1
  }


  numberValueChanged(){
    this.outputTarget.textContent = this.numberValue
  }
}
