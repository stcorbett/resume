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
    this.version = this.filter(Params.key())
    this.content = this.filteredContent(this.libraryValue, Params.key())

    this.render()
  }

  filter (key) {
    if(key == 'all') {
      return key
    }

    return Content.versions.find(version => (version.urlParam == key) || (version.path == key))
  }

  filteredContent(library, key) {
    if((key || '') == '') {
      return []
    }

    if ( ((this.version.contentNames || []).length > 0) && !this.allValue ) {
      return Content[library].filter(content => this.version.contentNames.includes(content.name))
    } else {
      return Content[library]
    }
  }

  render() {
    this.content.forEach(contentItem => {
      let item = this.itemTemplateTarget.content.cloneNode(true)
      let template

      item.querySelector('[data-content="title"]').innerHTML = contentItem.title
      if((contentItem.subTitle || '').length > 0) {
        item.querySelector('[data-content="subTitle"]').innerHTML = contentItem.subTitle
      }
      if((contentItem.addlTitle || '').length > 0) {
        item.querySelector('[data-content="addlTitle"]').innerHTML = contentItem.addlTitle
      }
      if((contentItem.description || '').length > 0) {
        item.querySelector('[data-content="description"]').innerHTML = contentItem.description
      }
      if((contentItem.closer || '').length > 0) {
        item.querySelector('[data-content="closer"]').innerHTML = contentItem.closer
      }
      if((contentItem.skills || '').length > 0) {
        item.querySelector('[data-content="skills"]').innerHTML = contentItem.skills
      }

      if((contentItem.image || '').length > 0) {
        item.querySelector('[data-content="image"]').classList.remove('d-none')
        item.querySelector('[data-content="image-template"]').src = contentItem.image

        if((contentItem.imageLink || '').length > 0) {
          item.querySelector('[data-content="image"]').href = contentItem.imageLink
          item.querySelector('[data-content="image"]').target = "_blank"
        }
      }

      if((contentItem.images || '').length > 0) {
        item.querySelector('[data-content="image"]').classList.remove('d-none')

        template = item.querySelector('[data-content="image-template"]')
        template.src = contentItem.images[0]

        contentItem.images.slice(1).forEach(image => {
          let clone = template.cloneNode(true)
          clone.src = image
          clone.classList.remove("w-100")
          clone.classList.add("w-25", "mr-2")
          template.after(clone);
        })
      }

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
