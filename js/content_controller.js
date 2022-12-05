import { Controller } from "../node_modules/@hotwired/stimulus/dist/stimulus.js"
import Content from "./content.js"
import Params from "./params.js"

export default class extends Controller {
  static values = {
    library: String,
    all: Boolean
  }

  static targets = ["itemTemplate"]

  connect () {
    this.contentFilter = this.filter(Params.key)
    this.content = this.filteredContent(this.libraryValue, Params.key)

    this.render()
  }

  filter (key) {
    if(key == 'all') {
      return key
    }

    return Content.versions.find(version => version.urlParam == key)
  }

  filteredContent(library, key) {
    if((key || '') == '') {
      return []
    }

    if ( ((this.contentFilter.contentNames || []).length > 0) && !this.allValue ) {
      return Content[library].filter(content => this.contentFilter.contentNames.includes(content.name))
    } else {
      return Content[library]
    }
  }

  render() {
    this.content.forEach(contentItem => {
      let item = this.itemTemplateTarget.content.cloneNode(true)

      item.querySelector('[data-content="title"]').innerHTML = contentItem.title
      if((item.subTitle || '').length > 0) { item.querySelector('[data-content="subTitle"]').innerHTML = contentItem.subTitle }

      item = this.renderDetail(item, contentItem)

      this.itemTemplateTarget.before(item)
    });
  }

  renderDetail(item, contentItem) {
    let itemLi = item.querySelector('[data-content="content-li"]')
    let detailLi

    (contentItem.content || []).forEach(detail => {
      detailLi = itemLi.cloneNode(true)
      detailLi.innerHTML = detail
      itemLi.before(detailLi)
    })

    itemLi.remove()
    return item
  }
}
