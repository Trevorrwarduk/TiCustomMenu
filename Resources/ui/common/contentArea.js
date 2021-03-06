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
 * Date created :                   27th June 2012
 *
 * Developer :                      Trevor Ward
 *
 * Modification Log :
 * ==================
 *
 * Date :                  Developer:              Details:
 *
 * 27th June 2012          Trevor Ward             Initial code
 *
 * ===================================================================
 */

var settingsGlobal    =    require('/settings/global');
var uiSettings    =    require('/settings/'  +  settingsGlobal.value.COLORSCHEME);

function updateRequired() {'use strict';
    settingsGlobal    =    require('/settings/global');
    uiSettings    =    require('/settings/'  +  settingsGlobal.value.COLORSCHEME);
}

function loadContentArea(inParam) {'use strict';

    updateRequired();

    var contentAreaView    =    Ti.UI.createView({
        backgroundColor :    uiSettings.ui.contentArea.backgroundColor,
        top :    uiSettings.ui.navBar.height,
        width :    uiSettings.ui.contentArea.width,
        bottom :    uiSettings.ui.tabMenu.height
    });
    // Always return the view object to the calling window

    return contentAreaView;
}

/*
 * EXPORTS SECTION
 */

exports.loadContentArea    =    loadContentArea;

/*
 * END OF FILE
 */
