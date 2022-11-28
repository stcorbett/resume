import { Controller } from "../node_modules/@hotwired/stimulus/dist/stimulus.js"
import Content from "./content.js"

export default class extends Controller {
  connect () {
    this.key = window.location.search.split("?")[1]
    // console.log("versions: ", this.constructor.versions)
    console.log("content: ", Content.experiences[0])
    console.log("content: ", Content.versions[0])
  }


}
