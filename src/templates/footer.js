const footer = require('../styles/footer')
const grid = require('../styles/grid')
const hideUntil = require('../styles/utils').hideUntil
const deviceWidths = require('../styles/breakpoints')
const cmz = require('cmz')

module.exports = function (props) {
  return `
  <footer class="${footer.root}">
    <section class="${footer.links}">
      <div class="${grid.container}">
        <div class="${grid.row}">
          <div class="${footer.column}">
            <h4 class="${footer.title}">Company</h4>
            <ul class="${footer.list}">
              <li class="${hideUntil(deviceWidths['md'])}"><a class="${footer.link}" href="/">Home</a></li>
              <li class="${hideUntil(deviceWidths['md'])}"><a class="${footer.link}" href="/blog/">Blog</a></li>
              <li><a class="${footer.link}" href="/about/">About Us</a></li>
              <li><a class="${footer.link}" href="/portfolio/">Our Work</a></li>
              <li><a class="${footer.link}" href="/unleash/">Unleash</a></li>
              <li><a class="${footer.link}" href="/our-developers/">Our Developers</a></li>
              <li><a class="${footer.link}" href="/hire-developers/">Hire Developers</a></li>
              <li><a class="${footer.link}" href="/join/">Join as a Developer</a></li>
            </ul>
          </div>
          <div class="${footer.column}">
            <h4 class="${footer.title}">Resources</h4>
            <ul class="${footer.list}">
              <li><a class="${footer.link}" href="/case-studies/">Case Studies</a></li>
              <li><a class="${footer.link}" href="/authors/">Write for us</a></li>
            </ul>
          </div>
          <div class="${footer.column}">
            <h4 class="${footer.title}">Hire Developers</h4>
            <ul class="${footer.list}">
              <li><a class="${footer.link}" href="/hire-react-developers/">React Developers</a></li>
              <li><a class="${footer.link}" href="/hire-angular-developers/">Angular Developers</a></li>
              <li><a class="${footer.link}" href="/hire-javascript-developers/">Javascript Developers</a></li>
              <li><a class="${footer.link}" href="/hire-node-developers/">Node Developers</a></li>
              <li><a class="${footer.link}" href="/hire-php-developers/">PHP Developers</a></li>
              <li><a class="${footer.link}" href="/hire-laravel-developers/">Laravel Developers</a></li>
              <li><a class="${footer.link}" href="/hire-symfony-developers/">Symfony Developers</a></li>
            </ul>
          </div>
          <div class="${footer.column}">
            <h4 class="${footer.title}">Connect</h4>
            <ul class="${footer.list}">
              <li><a class="${footer.link}" href="/blog/">Blog</a></li>
              <li><a class="${footer.link}" href="http://twitter.com/xteam">Twitter</a></li>
              <li><a class="${footer.link}" href="http://facebook.com/x.team">Facebook</a></li>
              <li><a class="${footer.link}" href="http://www.linkedin.com/company/x-team">Linkedin</a></li>
              <li><a class="${footer.link}" href="https://www.youtube.com/channel/UCAo_R1CP6IsA88l41ZpPpoQ">YouTube</a></li>
              <li><a class="${footer.link}" href="mailto:contact@x-team.com">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="${footer.colophon}">
      <div class="wrap">
        <div class="${footer.logo}">
          <svg viewBox="0 0 120 41" preserveAspectRatio="xMinYMin meet" version="1.1" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" class="menu__logo__svg"> <g transform="matrix(.125,0,0,.125,0,0)"> <path style="fill:#d6d6d6;" d="m 932.472,109.99459 0,-8.12996 7.1503,0 c 3.4289,0 5.532,1.47291 5.532,3.94703 0,2.76892 -2.5227,4.18293 -5.8278,4.18293 l -6.8545,0 z m 15.3856,-4.29926 c 0,-3.8307 -3.4255,-6.244154 -8.1098,-6.244154 l -9.8622,0 0,21.558714 2.5864,0 0,-8.65918 6.3713,0 6.9731,8.65918 3.3654,0 -7.3326,-9.07207 c 3.5476,-0.64722 6.0084,-2.70835 6.0084,-6.24249 z m -9.6764,24.79962 c -11.3583,0 -19.8894,-8.77894 -19.8894,-19.61725 0,-10.8383 8.5913,-19.731809 20.0115,-19.731809 11.3582,0 19.8928,8.777176 19.8928,19.615579 0,10.83487 -8.5948,19.73348 -20.0149,19.73348 z m 0.1221,-40.998962 c -12.2026,0 -21.8154,9.717625 -21.8154,21.381712 0,11.66419 9.4959,21.26382 21.6933,21.26382 12.1991,0 21.8188,-9.71763 21.8188,-21.38005 0,-11.662522 -9.4958,-21.265482 -21.6967,-21.265482 z m -327.2965,24.956332 -77.5456,-0.18543 -5.5665,18.86722 28.4825,0.0696 -21.953,74.14786 20.5927,0.051 21.9496,-74.14973 28.4773,0.0696 5.563,-18.86888 z m 16.6084,55.21988 43.4502,0.10261 5.4049,-17.93696 -43.452,-0.10614 5.5699,-19.0004 49.4656,0.11966 5.4117,-18.20657 -69.9242,-0.1668 -27.5108,93.01498 65.0971,-0.17376 5.4134,-18.2049 -44.7812,0.2259 5.8554,-19.66762 z m -137.6902,-49.75104 -14.1424,-13.17415 -38.152,37.22374 -16.6771,-36.55642 -19.0984,10.28556 20.5549,41.12705 -42.0539,40.16994 14.9214,11.99073 35.1203,-35.12045 14.8078,34.46353 19.7759,-8.43524 -19.2308,-40.75071 44.1743,-41.22358 z m -10.4331,49.69371 41.1786,0.0872 5.8451,-17.55768 -41.1804,-0.0892 -5.8433,17.55954 z m 399.0727,-62.28473 -40.1193,71.49469 -33.1806,-70.55934 -29.1669,99.67017 20.677,0 13.5216,-47.26291 27.007,53.08908 31.0018,-52.72558 9.035,46.03168 21.3029,-0.2751 -18.9934,-92.47537 -1.0851,-6.98732 z m -160.6922,66.60927 17.5627,-23.36042 5.4685,23.36042 -23.0312,0 z m 25.5866,-65.48349 0,-0.0304 -73.1485,99.2507 22.204,0 11.783,-15.67354 40.8381,0 3.644,15.55692 20.9315,0 -26.1575,-99.23856 -0.091,0.13476"></path> <path style="fill:#d6d6d6;" d="M 249.2436,153.11201 91.8029,4.8828125e-5 17.8259,72.501145 100.6866,153.70689 0,258.64225 71.8892,328.00005 249.2436,153.11201"></path> <path style="fill:#d6d6d6;" d="m 185.3175,236.64673 72.2044,70.76534 73.9757,-72.49933 -72.2062,-70.76475 -73.9739,72.49874"></path> <path style="fill:#d6d6d6;" d="M 185.9194,70.171973 259.8985,142.67307 331.4976,72.501145 257.5202,4.8828125e-5 185.9194,70.171973"></path> </g> </svg>
        </div>
        <address class="${footer.address}"><script>document.write(new Date().getFullYear())</script> &copy; All rights reserved. X-Company Pty Ltd.</address>
      </div>
    </div>
  </footer>`
}