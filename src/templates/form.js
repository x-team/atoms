const form = require('../styles/form')
const grid = require('../styles/grid')
const button = require('../styles/button')
const cx = require('classnames')

const submitButton = cx(
  form.submit.toString(),
  button.big.toString(),
  button.red.toString()
)

module.exports = function() {
  return `
    <section class="${form.root}">
      <div class="${grid.container}">
        <h2 class="${form.title}">
          Get Started.
        </h2>
        <p class="${form.subtitle}">
          Tell us about your needs and we’ll connect you with your own dedicated account manager.
        </p>
        <div>
          <form onsubmit="return formSubmit(this);" name="hire" method="post" id="subscribe">
            <input class="${form.input}" type="text" placeholder="Full Name" name="name" id="name" required>
            <input class="${form.input}" type="text" placeholder="Company" name="company">
            <input class="${form.input}" type="email" placeholder="E-mail" name="email" id="email" required>
            <select class="${form.select}" placeholder="Platform" name="platform" id="platform" required>
              <option>Web</option>
              <option>Mobile</option>
              <option>Desktop</option>
              <option>Cross-platform</option>
            </select>
            <textarea class="${form.textarea}" name="description" placeholder="What kind of developers do you need to strengthen your company?" required></textarea>
            <input class="${form.input}" type="text" placeholder="We're curious, how did you hear about us?" name="how-did-you-hear">
            <input type="hidden" name="base_url" value="https://hooks.zapier.com/hooks/catch/576991/tr20hj/">
            <input type="hidden" name="redirect" value="/hire-success">
            <input type="hidden" name="source" value="partner-landing-hire">
            <input type="hidden" name="utm_source" id="utm_source" value="">
            <input type="hidden" name="utm_medium" id="utm_medium" value="">
            <input type="hidden" name="utm_campaign" id="utm_campaign" value="">
            <input type="hidden" name="utm_content" id="utm_content" value="">
            <input type="hidden" name="utm_term" id="utm_term" value="">
            <input class="${submitButton}" type="submit" value="Get Started" name="submit_form">
          </form>
        </div>
      </div>
    </section>
  `
}