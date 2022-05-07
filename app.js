let charachters = "abcdefghijklmnopqrstuvwxyz"


function get_char_index(char) {

  for (let i = 0; i < charachters.length; i += 1) {
    if (char === charachters[i]) {
      return i
    }
  }
  console.log("Invalid charchter")
}

function isCharchter(val) {
  return (/[a-zA-Z]/).test(val)
}

function Findletter(char) {
  for (let i = 0; i < charachters.length; i++) {
    if (char === i) {
      return charachters[i]
    }
  }
}
function sum(n1, n2) {
  return n1 + n2
}
function ccc() {
  let key = document.querySelector("#key")
  let plain_text = document.querySelector("input[name='plain']")
  let cipher_text = document.querySelector("input[name='cipherTex']")
  let ctr = 0

  for (let i = 0; i < plain_text.value.length; i++) {

    if (ctr >= key.value.length) {
      ctr = 0
    }

    if (isCharchter(key.value[ctr])) {
      if (isCharchter(plain_text.value[i])) {

        let s = sum(get_char_index(key.value[ctr].toLowerCase()), get_char_index(plain_text.value[i].toLowerCase()))


        if (s >= 26) {
          s -= 26

        }
        cipher_text.value += Findletter(s)
        ctr++;
      }
      else {

        cipher_text.value += plain_text.value[i]
      }


    }


  }


}