import { Controller } from "../node_modules/@hotwired/stimulus/dist/stimulus.js"
import Content from "./content.js"
import Params from "./params.js"

export default class extends Controller {
  connect () {
    this.version = Content.versions.find(version => Params.key() && ((version.urlParam == Params.key()) || (version.path == Params.key())) )

    if ((this.version.show || []).length > 0) {
      this.version.show.forEach(show => {
        document.querySelector(`[data-content="${show}"]`).classList.remove("d-none")
      })
    }
  }
}
