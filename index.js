// entry point
const thediv = document.createElement("div")
document.body.appendChild(thediv)

const Vue = require("vue")
const VueCroppie = require("vue-croppie")

Vue.use(VueCroppie)

new Vue({
  el:thediv,
  ... require("./sample.vue")
})