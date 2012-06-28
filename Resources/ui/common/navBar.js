/*
 * TiCustomMenu
 *
 * navBar.js
 * =========
 *
 * This commonJS module creates the navigation bar. It is used on every window created
 * for the group.
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

/*
 * Require the module globally required modules.
 *
 * Always require global settings reduced to name GS.
 */

var settingsGlobal    =    require('/settings/global');
var uiSettings    =    require('/settings/'  +  settingsGlobal.value.COLORSCHEME);

function updateRequired() {
    settingsGlobal    =    require('/settings/global');
    uiSettings    =    require('/settings/'  +  settingsGlobal.value.COLORSCHEME);
}

function navBarTouch(inParam) {
    inParam.source.IMAGE.backgroundImage    =    uiSettings.ui.navBar.back.backButtonOn;
    inParam.source.TEXT.color    =    uiSettings.ui.navBar.font.touchColor;

}

function navBarChange(inParam) {
    inParam.source.IMAGE.backgroundImage    =    uiSettings.ui.navBar.back.backButtonOff;
    inParam.source.TEXT.color    =    uiSettings.ui.navBar.font.buttonColor;

    Ti.App.fireEvent('APPCONTROL', {
        OPTION :    inParam.source.OPTION
    });
}

function loadNavBar(inParam) {
    updateRequired();

    var navBarView    =    Ti.UI.createView({
        backgroundImage :    uiSettings.ui.navBar.backgroundImage,
        backgroundColor :    uiSettings.ui.navBar.backgroundColor,
        height :    uiSettings.ui.navBar.height,
        width :    uiSettings.ui.navBar.width,
        top :    uiSettings.ui.navBar.top
    });

    // The title
    var navBarTitle    =    Ti.UI.createLabel({
        left :    10,
        right :    10,
        height :    'auto',
        textAlign :    uiSettings.ui.navBar.font.titleAlign,
        color :    uiSettings.ui.navBar.font.titleColor,
        font : {
            fontSize :    uiSettings.ui.navBar.font.titleSize,
            fontWeight :    uiSettings.ui.navBar.font.titleWeight
        },
        text :    Ti.Locale.getString('appName')
    });
    navBarView.add(navBarTitle);

    if (settingsGlobal.value.BACKARRAY.length  >  1) {
        // The back button
        var navBarBack    =    Ti.UI.createView({
            left :    uiSettings.ui.navBar.back.left,
            height :    uiSettings.ui.navBar.back.height,
            width :    uiSettings.ui.navBar.back.width,
            backgroundImage :    uiSettings.ui.navBar.back.backButtonOff
        });
        var navBarBackText    =    Ti.UI.createLabel({
            top :    0,
            left :    10,
            right :    0,
            bottom :    0,
            text :    Ti.Locale.getString('buttonBack'),
            textAlign :    uiSettings.ui.navBar.font.buttonAlign,
            color :    uiSettings.ui.navBar.font.buttonColor,
            font : {
                fontSize :    uiSettings.ui.navBar.font.buttonSize,
                fontWeight :    uiSettings.ui.navBar.font.buttonWeight
            }
        });

        // Same trick as the menu to identify the area with a plain view over the top

        var navBarButtonView    =    Ti.UI.createView({
            top :    0,
            left :    0,
            right :    0,
            bottom :    0,
            backgroundColor :    'transparent',
            OPTION :    settingsGlobal.value.OPTIONS.BACK,
            TEXT :    navBarBackText,
            IMAGE :    navBarBack
        });
        // The back button event listener
        navBarButtonView.addEventListener('touchstart', navBarTouch);
        navBarButtonView.addEventListener('touchend', navBarChange);

        navBarBack.add(navBarBackText);
        navBarView.add(navBarBack);
        navBarView.add(navBarButtonView);
    }
    // Always return the view object to the calling window
    return navBarView;
}

/*
 * EXPORTS SECTION
 */

exports.loadNavBar    =    loadNavBar;

/*
 * END OF FILE
 */
