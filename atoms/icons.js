const cmz = require('cmz')

const assetRoot = 'https://x-team.com'
module.exports = {
  team: cmz(`
&:before {
  content: url(${assetRoot}/images/icons/dedicated-team.svg);
  margin-left: -20px;
}
 `),
  dailyUpdates: cmz(`
&:before {
  content: url(${assetRoot}/images/icons/daily-updates.svg);
  margin-left: -19px;
}
 `)
}
