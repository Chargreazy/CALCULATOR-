let outputscreen = document.getElementById('output-screen')

function display (num) {
  outputscreen.value += num
}

function calculate (params) {
  try {
    outputscreen.value = this.eval(outputscreen.value)
  } catch (error) {
    alert('INVALID')
  }
}
function clr () {
  outputscreen.value = "";
}
function del (params) {
  outputscreen.value = outputscreen.value.slice(0, -1)
}
