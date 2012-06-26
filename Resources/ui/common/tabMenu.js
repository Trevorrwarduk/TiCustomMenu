/*
 * TiCustomMenu
 *
 * tabMenu.js
 * =============
 *
 * This commonJS module creates the tab menu bar. It is used on every window created
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

/*
 * Five containers for the menu options so they can be maintained and controlled.
 */

var optionOne    =    null;
var optionTwo    =    null;
var optionThree    =    null;
var optionFour    =    null;
var optionFive    =    null;

/*
 * menuTouch
 * =========
 */

function menuTouch(inParam) {
    inParam.source.TEXT.color = "#ffffff";
}

/*
 * menuChange
 * ==========
 *
 */

function menuChange(inParam) {
    /* Fire the controller event */
   
    // Set the selected Window
    toolsGlobal.value.CURRENTOPTION = inParam.source.OPTION;

    Ti.App.fireEvent('APPCONTROL', {OPTION : inParam.source.OPTION});
}

/*
 * createMenuItem
 * ==============
 *
 * This function create each menu item with the parameters sent in.
 */

function createMenuItem(inParam) {"use strict";
    var menuItem    =    Ti.UI.createView({
        top :    0,
        bottom :   0,
        left :    0,
        width :    '20%',
        backgroundColor : 'transparent'
    });

    /* Put the icon on the button */
    var menuButton = Ti.UI.createView({
        top : 10,
        height : 30,
        width : 60,
        backgroundImage : (inParam.SELECTED) ? GS.settings.tabMenu.options.iconSelected : GS.settings.tabMenu.options.iconNotSelected
    })
    /* Put the text at the bottom small font and light color */

    var menuText    =    Ti.UI.createLabel({
        text :    inParam.TEXT,
        left :    0,
        right :    0,
        height :    'auto',
        color :    (inParam.SELECTED) ? "#f3f3f3" : "#919191",
        textAlign :    'center',
        font : {
            fontSize :    12,
            fontWeight :    'bold'
        }
    });
    
    /* Put a view over the top of the main container so it will always be the source
     * for the event listener
     */
     
    var buttonView = Ti.UI.createView({
       top : 0,
       left : 0,
       right : 0,
       bottom : 0,
       backgroundColor : 'transparent',
       OPTION :    inParam.OPTION,
       TEXT : menuText 
    });
    /* Add the event listener to action the controller and set the selected */

    menuItem.addEventListener('touchstart', menuTouch);
    menuItem.addEventListener('touchend', menuChange);

    menuButton.add(menuText);
    menuItem.add(menuButton);
    menuItem.add(buttonView);

    return menuItem;

}

function loadTabMenu(inParam) {
    var tabMenuView    =    Ti.UI.createView({
        backgroundColor :    GS.settings.tabMenu.backgroundColor,
        backgroundImage :    GS.settings.tabMenu.backgroundImage,
        height :    GS.settings.tabMenu.height,
        width :    GS.settings.tabMenu.width,
        bottom :    GS.settings.tabMenu.bottom,
        layout :    'horizontal'
    });

    /*
     * Build each menu option
     *
     * In this example wee build 5. You can see how to modify this down if needed.
     * Really do not go over 5 as that is the ideal size for phone menus.
     *
     */

    /* Create the menu options */
    optionOne    =    createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemOne'),
        OPTION :    toolsGlobal.value.OPTIONS.ONE,
        SELECTED : (toolsGlobal.value.CURRENTOPTION === toolsGlobal.value.OPTIONS.ONE) ? true : false
    });
    optionTwo    =    createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemTwo'),
        OPTION :    toolsGlobal.value.OPTIONS.TWO,
        SELECTED : (toolsGlobal.value.CURRENTOPTION === toolsGlobal.value.OPTIONS.TWO) ? true : false
    });
    optionThree    =    createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemThree'),
        OPTION :    toolsGlobal.value.OPTIONS.THREE,
        SELECTED : (toolsGlobal.value.CURRENTOPTION === toolsGlobal.value.OPTIONS.THREE) ? true : false
    });
    optionFour    =    createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemFour'),
        OPTION :    toolsGlobal.value.OPTIONS.FOUR,
        SELECTED : (toolsGlobal.value.CURRENTOPTION === toolsGlobal.value.OPTIONS.FOUR) ? true : false
    });
    optionFive    =    createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemFive'),
        OPTION :    toolsGlobal.value.OPTIONS.FIVE,
        SELECTED : (toolsGlobal.value.CURRENTOPTION === toolsGlobal.value.OPTIONS.FIVE) ? true : false
    });

    /* Add the menu options */
    tabMenuView.add(optionOne);
    tabMenuView.add(optionTwo);
    tabMenuView.add(optionThree);
    tabMenuView.add(optionFour);
    tabMenuView.add(optionFive);

    /*
     * Always return the view object to the calling window
     */
    return tabMenuView;
}

/*
 * EXPORTS SECTION
 */

exports.loadTabMenu    =    loadTabMenu;

/*
 * END OF FILE
 */
