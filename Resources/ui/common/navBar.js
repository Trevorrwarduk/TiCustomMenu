/*
 * TiCustomMenu
 *
 * navBar.js
 * =============
 *
 * This commonJS module creates the navigation bar. It is used on every window created
 * for the group.
 *
 *
 *
 * ===================================================================
 * Date created :                   1st July 2012
 *
 * Developer :                      Trevor Ward
 *
 * Modification Log :
 * ==================
 *
 * Date :                  Developer:              Details:
 *
 * 1st July 2012           Trevor Ward             Initial code
 *
 * ===================================================================
 */

/*
 * Require the module globally required modules.
 *
 * Always require global settings reduced to name GS.
 */

var GS    =    require('/ui/settings/globalSettings');

function loadNavBar(inParam) {
    var navBarView    =    Ti.UI.createView({
        backgroundColor :    GS.settings.navBar.backgroundColor,
        height :    GS.settings.navBar.height,
        width :    GS.settings.navBar.width,
        top :    GS.settings.navBar.top
    });
    /*
     * Always return the view object to the calling window
     */
    return navBarView;
}

/*
 * EXPORTS SECTION
 */

exports.loadNavBar    =    loadNavBar;

/*
 * END OF FILE
 */
