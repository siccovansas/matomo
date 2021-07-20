/*!
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

matomo.VueMethods['escape'] = function (value) {
    return piwikHelper.escape(piwikHelper.htmlEntities(value));
};