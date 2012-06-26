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

var GS    =    require('/ui/settings/globalSettings');

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
        borderColor :    '#515151',
        borderWidth :    2,
        borderRadius :    2
    });

    /* Put the text at the bottom small font and light color */

    var menuText    =    Ti.UI.createLabel({
        text :    inParam.TEXT,
        left :    0,
        right :    0,
        bottom :    0,
        height :    25,
        color :    "#D4D4D4",
        textAlign :    'center',
        font : {
            fontSize :    12,
            fontWeight :    'normal'
        }
    })
    menuItem.add(menuText);

    return menuItem;

}

function loadTabMenu(inParam) {
    var tabMenuView    =    Ti.UI.createView({
        backgroundColor :    GS.settings.tabMenu.backgroundColor,
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

    /* Add the menu options */
    tabMenuView.add(createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemOne')
    }));
    tabMenuView.add(createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemTwo')
    }));
    tabMenuView.add(createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemThree')
    }));
    tabMenuView.add(createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemFour')
    }));
    tabMenuView.add(createMenuItem({
        TEXT :    Ti.Locale.getString('menuItemFive')
    }));

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
