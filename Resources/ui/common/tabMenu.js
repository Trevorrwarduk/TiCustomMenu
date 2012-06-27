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

/*
 * Five containers for the menu options so they can be maintained and controlled.
 */

var optionOne    =    null;
var optionTwo    =    null;
var optionThree    =    null;
var optionFour    =    null;
var optionFive    =    null;

function updateRequired() {
    settingsGlobal    =    require('/settings/global');
    uiSettings    =    require('/settings/'  +  settingsGlobal.value.COLORSCHEME);
}

/*
 * menuTouch
 * =========
 */

function menuTouch(inParam) {
    inParam.source.TEXT.color    =    uiSettings.ui.tabMenu.font.touchColor;
}

/*
 * menuChange
 * ==========
 *
 */

function menuChange(inParam) {
    Ti.App.fireEvent('APPCONTROL', {
        OPTION :    inParam.source.OPTION
    });
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
        bottom :    0,
        left :    0,
        width :    '20%',
        backgroundColor :    'transparent'
    });

    /* Put the icon on the button */
    var menuButton    =    Ti.UI.createView({
        top :    uiSettings.ui.tabMenu.button.top,
        height :    uiSettings.ui.tabMenu.button.height,
        width :    uiSettings.ui.tabMenu.button.width,
        backgroundImage :    (inParam.SELECTED)    ?    uiSettings.ui.tabMenu.options.iconSelected    :    uiSettings.ui.tabMenu.options.iconNotSelected
    })
    /* Put the text at the bottom small font and light color */

    var menuText    =    Ti.UI.createLabel({
        text :    inParam.TEXT,
        left :    0,
        right :    0,
        height :    'auto',
        color :    (inParam.SELECTED)    ?    uiSettings.ui.tabMenu.font.selColor    :    uiSettings.ui.tabMenu.font.baseColor,
        textAlign :    uiSettings.ui.tabMenu.font.textAlign,
        font : {
            fontSize :    uiSettings.ui.tabMenu.font.textSize,
            fontWeight :    uiSettings.ui.tabMenu.font.textWeight
        }
    });

    /* Put a view over the top of the main container so it will always be the source
     * for the event listener
     */

    var buttonView    =    Ti.UI.createView({
        top :    0,
        left :    0,
        right :    0,
        bottom :    0,
        backgroundColor :    'transparent',
        OPTION :    inParam.OPTION,
        TEXT :    menuText
    });
    /* Add the event listener to action the controller and set the selected */

    buttonView.addEventListener('touchstart', menuTouch);
    buttonView.addEventListener('touchend', menuChange);

    menuButton.add(menuText);
    menuItem.add(menuButton);
    menuItem.add(buttonView);

    return menuItem;
}

function loadTabMenu(inParam) {
    updateRequired();

    var tabMenuView    =    Ti.UI.createView({
        backgroundColor :    uiSettings.ui.tabMenu.backgroundColor,
        backgroundImage :    uiSettings.ui.tabMenu.backgroundImage,
        height :    uiSettings.ui.tabMenu.height,
        width :    uiSettings.ui.tabMenu.width,
        bottom :    uiSettings.ui.tabMenu.bottom,
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
        OPTION :    settingsGlobal.value.OPTIONS.ONE,
        SELECTED :    (settingsGlobal.value.CURRENTOPTION  ===  settingsGlobal.value.OPTIONS.ONE)    ?    true    :    false
    });
    optionTwo    =    createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemTwo'),
        OPTION :    settingsGlobal.value.OPTIONS.TWO,
        SELECTED :    (settingsGlobal.value.CURRENTOPTION  ===  settingsGlobal.value.OPTIONS.TWO)    ?    true    :    false
    });
    optionThree    =    createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemThree'),
        OPTION :    settingsGlobal.value.OPTIONS.THREE,
        SELECTED :    (settingsGlobal.value.CURRENTOPTION  ===  settingsGlobal.value.OPTIONS.THREE)    ?    true    :    false
    });
    optionFour    =    createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemFour'),
        OPTION :    settingsGlobal.value.OPTIONS.FOUR,
        SELECTED :    (settingsGlobal.value.CURRENTOPTION  ===  settingsGlobal.value.OPTIONS.FOUR)    ?    true    :    false
    });
    optionFive    =    createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemFive'),
        OPTION :    settingsGlobal.value.OPTIONS.FIVE,
        SELECTED :    (settingsGlobal.value.CURRENTOPTION  ===  settingsGlobal.value.OPTIONS.FIVE)    ?    true    :    false
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
