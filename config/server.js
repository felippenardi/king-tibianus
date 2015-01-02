/* Define custom server-side HTTP routes for lineman's development server
 *   These might be as simple as stubbing a little JSON to
 *   facilitate development of code that interacts with an HTTP service
 *   (presumably, mirroring one that will be reachable in a live environment).
 *
 * It's important to remember that any custom endpoints defined here
 *   will only be available in development, as lineman only builds
 *   static assets, it can't run server-side code.
 *
 * This file can be very useful for rapid prototyping or even organically
 *   defining a spec based on the needs of the client code that emerge.
 *
 */

module.exports = {
  drawRoutes: function(app) {
    app.get('/quests', function (req, res) {
      res.json([
        {description: 'TibiaWiki is giving away The Epic Wisdom',
          link: 'http://tibiawiki.com.br', banner: 'tw.png'},
        {description: 'PortalTibia is giving away an Epaminondas Doll',
          link: 'http://portaltibia.com.br', banner: 'pt.png'},
      ]);
    });
  }
};
