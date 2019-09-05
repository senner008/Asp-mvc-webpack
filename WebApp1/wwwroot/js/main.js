if (module.hot) {
  module.hot.accept();
}

import Func from "./Func.js"

Func();
$('h1').css('color', 'green')