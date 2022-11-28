import { Controller } from "../node_modules/@hotwired/stimulus/dist/stimulus.js"
import Content from "./content.js"

export default class extends Controller {
  static targets = ["itemTemplate"]

  connect () {
    this.key = window.location.search.split("?")[1]

    this.render()
  }

  filter() {
    if(this.key == 'all') {
      return this.key
    }

    return Content.versions.find(version => version.urlParam == this.key)
  }

  content() {
    if(this.filter() == 'all') {
      return Content.experiences
    }

    return Content.experiences.filter(content => this.filter().content.includes(content.name))
  }

  render() {
    if(this.content().length) this.renderExperiences()
    else this.renderExperiencesPicker()
  }

  renderExperiences() {
    this.content().forEach(experience => {
      let item = document.createElement("div")
      item.innerHTML = this.itemTemplateTarget.innerHTML

      item.querySelector('[data-content="title"]').innerHTML = experience.title
      item.querySelector('[data-content="role"]').innerHTML = experience.role
      item.querySelector('[data-content="content-li"]').innerHTML = experience.content[0]

      this.itemTemplateTarget.after(item)
    });
  }

  renderExperiencesPicker() {
    console.log("rendering picker")
  }
}
