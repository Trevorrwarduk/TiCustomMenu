/*
 * TiCustomMenu
 *
 * uiSettings.js
 * =============
 *
 * This commonJS module creates the ui settings used by the application.
 *
 * Use this file to set the tab bar and navigation bar settings.
 *
 * It is a stand alone module used specifically for static values only.
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

var ui    = {
    navBar : {
        height :    '44dp',
        width :    '100%',
        backgroundColor :    '#ffffff',
        top :    0,
        backgroundImage :    '/assets/navBar/backgroundOrange.png',
        back : {
            backButtonOff :    '/assets/buttons/backButtonOrangeOff.png',
            backButtonOn :    '/assets/buttons/backButtonOrangeOn.png',
            left :    '10dp',
            height :    '28dp',
            width :    '57dp'
        },
        font : {
            titleColor :    '#ffffff',
            titleSize :    '22dp',
            titleWeight :    'bold',
            titleAlign :    'center',
            buttonColor :    '#ffffff',
            buttonSize :    '11dp',
            buttonWeight :    'bold',
            buttonAlign :    'center',
            touchColor :    '#000000'
        }
    },
    tabMenu : {
        height :    '51dp',
        width :    '100%',
        backgroundColor :    '#000000',
        backgroundImage :    '/assets/menuBar/backgroundOrange.png',
        bottom :    0,
        options : {
            iconSelected :    '/assets/menuBar/menuIconOnOrange.png',
            iconNotSelected :    '/assets/menuBar/menuIconOffOrange.png',
        },
        font : {
            touchColor :    '#ffffff',
            textSize :    '12dp',
            textWeight :    'bold',
            textAlign :    'center',
            baseColor :    '#d2d2d2',
            selColor :    '#f3f3f3'
        },
        button : {
            height :    '30dp',
            width :    '60dp',
            top :    '10dp'
        }
    },
    contentArea : {
        backgroundColor :    '#f8a544',
        width :    '100%'
    },
    windows : {
        backgroundColor :    '#f8a544',
        textFont : {
            color :    '#ffffff',
            size :    '22dp',
            weight :    'bold',
            align :    'center'
        },
    },
    selColor : {
        backgroundColor :    '#f8a544',
        borderColor :    '#ffffff',
        font : {
            color :    '#ffffff',
            size :    '11dp',
            weight :    'bold',
            align :    'center'
        }
    }
}
/*
 * EXPORTS SECTION
 */

exports.ui    =    ui;

/*
 * END OF FILE
 */
