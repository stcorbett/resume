import { Controller } from "../node_modules/@hotwired/stimulus/dist/stimulus.js"
import Content from "./content.js"
import Params from "./params.js"

export default class extends Controller {
  static targets = ["versionItemTemplate"]

  connect () {
    this.version = Content.versions.find(version => Params.key() && ((version.urlParam == Params.key()) || (version.path == Params.key())) )

    if (!this.version) {
      this.renderPicker()
    }
  }

  renderPicker() {
    this.element.classList.remove('d-none')

    Content.versions.forEach(version => {
      let item = this.versionItemTemplateTarget.content.cloneNode(true)
      let anchor = item.querySelector("a")

      anchor.href = Params.pathname +  `?${version.urlParam}`
      anchor.textContent = version.title

      this.versionItemTemplateTarget.before(item)
    })
  }
}
