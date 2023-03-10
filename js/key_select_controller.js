import { Controller } from "../node_modules/@hotwired/stimulus/dist/stimulus.js"
import Content from "./content.js"
import Params from "./params.js"

export default class extends Controller {
  static targets = ["select"]

  connect () {
    this.version = Content.versions.find(version => Params.key() && ((version.urlParam == Params.key()) || (version.path == Params.key())) )

    if (this.version) {
      this.renderSelect()
    }
  }

  change(event) {
    let el = event.currentTarget
    window.location.search = `?${el.value}`
  }

  renderSelect() {
    this.element.classList.remove('d-none')

    this.selectTarget.value = this.version.urlParam
  }
}
