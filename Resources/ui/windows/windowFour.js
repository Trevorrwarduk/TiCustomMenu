/*
 * TiCustomMenu
 *
 * windowFour.js
 * =============
 *
 * This commonJS module loads the fourth window. It sets all the display
 * criteria and uses common tools to put the navigation bar and menu on the screen.
 *
 * The actual opening and closing of the window is done by the controller
 * and so is handling the back button. Although in this case, there is no
 * back functionality as the menu works like a tab bar. So for android it
 * is just set to do nothing.
 *
 * Also the memory management is handled by a close window event listener.
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

function updateRequired() {
    settingsGlobal    =    require('/settings/global');
    uiSettings    =    require('/settings/'  +  settingsGlobal.value.COLORSCHEME);
}

function loadWindowFourDisplay(inParam) {"use strict";

    updateRequired();

    var windowVar    =    Ti.UI.createWindow({
        backgroundColor :    uiSettings.ui.windows.backgroundColor,
        navBarHidden :    true,
        orientationModes :    [Ti.UI.PORTRAIT]
    });
    windowVar.orientationModes    =    [Ti.UI.PORTRAIT];

    // add the window event listeners for close and Android back
    windowVar.addEventListener('android:back', function(e) {
        Ti.App.fireEvent('APPCONTROL', {
            OPTION :    settingsGlobal.value.OPTIONS.BACK
        });
    });
    windowVar.addEventListener('close', function(e) {
        windowVar    =    null;
        return;
    });
    // The screen is split into three ...
    // The top navigation bar
    // The main screen area
    // The tab menu bar

    // Require the nav bar and display on the screen
    var navBar    =    require('/ui/common/navBar').loadNavBar();

    windowVar.add(navBar);

    // Require the tab menu bar and display on the screen
    var tabMenu    =    require('/ui/common/tabMenu').loadTabMenu();

    windowVar.add(tabMenu);

    // Require the base screen area and display on the screen
    var contentArea    =    require('/ui/common/contentArea').loadContentArea();

    // Build you specific window UI section here ... You can even include sub files to require depending on platform type.
    // Add all the content to the contentArea only and nothing on the nav bar or the tab menu will be overwritten.

    var windowText    =    Ti.UI.createLabel({
        top :    20,
        left :    10,
        right :    10,
        height :    40,
        text :    Ti.Locale.getString('fourLabel'),
        textAlign :    uiSettings.ui.windows.textFont.align,
        color :    uiSettings.ui.windows.textFont.color,
        font : {
            fontSize :    uiSettings.ui.windows.textFont.size,
            fontWeight :    uiSettings.ui.windows.textFont.weight
        }
    });

    // Add the components to the contentArea
    contentArea.add(windowText);

    // Require the Select Color Option and display on the screen
    var selColor    =    require('/ui/common/selectColor').loadSelectColor();

    contentArea.add(selColor);

    // Add the contentArea
    windowVar.add(contentArea);

    // Always return the window object to the controller
    return windowVar;
}

/*
 * EXPORTS SECTION
 */

exports.loadWindowFourDisplay    =    loadWindowFourDisplay;

/*
 * END OF FILE
 */
