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

var GS    =    require('/ui/settings/uiSettings');
var toolsGlobal    =    require('/settings/global');

function navBarTouch(inParam) {
    inParam.source.IMAGE.backgroundImage    =    GS.settings.navBar.back.backButtonOn;
    inParam.source.TEXT.color    =    "#000000";

}

function navBarChange(inParam) {
    inParam.source.IMAGE.backgroundImage    =    GS.settings.navBar.back.backButtonOff;
    inParam.source.TEXT.color    =    "#ffffff";

    Ti.App.fireEvent('APPCONTROL', {
        OPTION :    inParam.source.OPTION
    });
}

function loadNavBar(inParam) {
    var navBarView    =    Ti.UI.createView({
        backgroundImage :    GS.settings.navBar.backgroundImage,
        backgroundColor :    GS.settings.navBar.backgroundColor,
        height :    GS.settings.navBar.height,
        width :    GS.settings.navBar.width,
        top :    GS.settings.navBar.top
    });

    /* The title */
    var navBarTitle    =    Ti.UI.createLabel({
        left :    10,
        right :    10,
        height :    'auto',
        textAlign :    'center',
        color :    '#ffffff',
        font : {
            fontSize :    22,
            fontWeight :    'bold'
        },
        text :    Ti.Locale.getString('appName')
    });
    navBarView.add(navBarTitle);

    if (toolsGlobal.value.BACKARRAY.length  >  1) {
        /* The back button */
        var navBarBack    =    Ti.UI.createView({
            left :    10,
            height :    28,
            width :    57,
            backgroundImage :    GS.settings.navBar.back.backButtonOff
        });
        var navBarBackText    =    Ti.UI.createLabel({
            top :    0,
            left :    10,
            right :    0,
            bottom :    0,
            text :    Ti.Locale.getString('buttonBack'),
            textAlign :    'center',
            color :    '#ffffff',
            font : {
                fontSize :    11,
                fontWeight :    'bold'
            }
        });

        /* Same trick as the menu to identify the area with a plain view over the top */

        var navBarButtonView    =    Ti.UI.createView({
            top :    0,
            left :    0,
            right :    0,
            bottom :    0,
            backgroundColor :    'transparent',
            OPTION :    toolsGlobal.value.OPTIONS.BACK,
            TEXT :    navBarBackText,
            IMAGE :    navBarBack
        });
        /* The back button event listener */
        navBarButtonView.addEventListener('touchstart', navBarTouch);
        navBarButtonView.addEventListener('touchend', navBarChange);

        navBarBack.add(navBarBackText);
        navBarView.add(navBarBack);
        navBarView.add(navBarButtonView);
    }

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
