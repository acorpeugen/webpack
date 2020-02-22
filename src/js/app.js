/* Import Styles */
import '../scss/app.scss';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('../img/svg/', true, /\.svg$/));

/* Bootstrap components from node_modules directory */
import 'bootstrap/js/dist/alert'
import 'bootstrap/js/dist/button'
import 'bootstrap/js/dist/carousel'
import 'bootstrap/js/dist/collapse'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/popover'
import 'bootstrap/js/dist/scrollspy'
import 'bootstrap/js/dist/tab'
import 'bootstrap/js/dist/toast'
import 'bootstrap/js/dist/tooltip'
import 'bootstrap/js/dist/util'

