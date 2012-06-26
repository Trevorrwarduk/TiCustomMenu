/*
 * TiCustomMenu
 *
 * contentArea.js
 * =============+
 *
 * This commonJS module creates the main area for displaying content on the screen. 
 * 
 * It is used on every window created for the group.
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

var GS = require('/ui/settings/uiSettings');

function loadContentArea(inParam) {
    var contentAreaView    =    Ti.UI.createView({
        backgroundColor :    GS.settings.contentArea.backgroundColor,
        top :    GS.settings.navBar.height,
        width :    GS.settings.contentArea.width,
        bottom : GS.settings.tabMenu.height
    });
    /*
     * Always return the view object to the calling window
     */
    return contentAreaView;
}

/*
 * EXPORTS SECTION
 */

exports.loadContentArea    =    loadContentArea;

/*
 * END OF FILE
 */
