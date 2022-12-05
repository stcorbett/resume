import { Application } from "./node_modules/@hotwired/stimulus/dist/stimulus.js"

import KeyPickerController from "./js/key_picker_controller.js"
import ContentController from "./js/content_controller.js"

window.Stimulus = Application.start()
Stimulus.register("key-picker", KeyPickerController)
Stimulus.register("content", ContentController)
