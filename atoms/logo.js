
module.exports = function (props) {
  props = props || {}
  return `<svg viewBox="0 0 48 48" preserveAspectRatio="xMinYMin meet" version="1.1" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" class="menu__logo__svg ${props.whiteOnMobile ? 'menu__logo__svg__white' : ''}"> <g transform="matrix(.125,0,0,.125,0,0)"> <path d="M 249.2436,153.11201 91.8029,4.8828125e-5 17.8259,72.501145 100.6866,153.70689 0,258.64225 71.8892,328.00005 249.2436,153.11201"></path> <path d="m 185.3175,236.64673 72.2044,70.76534 73.9757,-72.49933 -72.2062,-70.76475 -73.9739,72.49874"></path> <path d="M 185.9194,70.171973 259.8985,142.67307 331.4976,72.501145 257.5202,4.8828125e-5 185.9194,70.171973"></path> </g> </svg>`
}
