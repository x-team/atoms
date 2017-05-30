const form = require('atoms/styles/form')
const grid = require('atoms/styles/grid')
const button = require('atoms/styles/button')

module.exports = function () {
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
          <form name="hire" method="post" id="subscribe">
            <input class="${form.input}" type="text" placeholder="Full Name" name="name" id="name" required>
            <input class="${form.input}" type="text" placeholder="Company" name="company">
            <input class="${form.input}" type="email" placeholder="E-mail" name="email" id="email" required>
            <select class="${form.select}" placeholder="Platform" name="platform" id="platform" required>
              <option>Web</option>
              <option>Mobile</option>
              <option>Desktop</option>
              <option>Cross-platform</option>
            </select>
            <textarea class="${form.textarea}" placeholder="Placeholder for a question needing a longer answer." required></textarea>
            <input class="${form.input}" type="text" placeholder="Placeholder for a shorter question">
            <input class="${form.submit}" type="submit" value="Get Started" name="submit_form">
          </form>
        </div>
      </div>
    </section>
  `
}
