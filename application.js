import { Application } from "./node_modules/@hotwired/stimulus/dist/stimulus.js"

import ExperienceController from "./js/experience_controller.js"

window.Stimulus = Application.start()
Stimulus.register("experience", ExperienceController)
