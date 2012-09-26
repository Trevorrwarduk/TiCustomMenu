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
        backgroundImage :    '/assets/navBar/backgroundGrey.png',
        back : {
            backButtonOff :    '/assets/buttons/backButtonGreyOff.png',
            backButtonOn :    '/assets/buttons/backButtonGreyOn.png',
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
        backgroundImage :    '/assets/menuBar/backgroundGrey.png',
        bottom :    0,
        options : {
            iconSelected :    '/assets/menuBar/menuIconOnGrey.png',
            iconNotSelected :    '/assets/menuBar/menuIconOffGrey.png'
        },
        font : {
            touchColor :    '#ffffff',
            textSize :    '12dp',
            textWeight :    'bold',
            textAlign :    'center',
            baseColor :    '#c4c4c4',
            selColor :    '#f3f3f3'
        },
        button : {
            height :    '30dp',
            width :    '60dp',
            top :    '10dp'
        }
    },
    contentArea : {
        backgroundColor :    '#979797',
        width :    '100%'
    },
    windows : {
        backgroundColor :    '#979797',
        textFont : {
            color :    '#ffffff',
            size :    '22dp',
            weight :    'bold',
            align :    'center'
        }
    },
    selColor : {
        backgroundColor :    '#979797',
        borderColor :    '#ffffff',
        font : {
            color :    '#ffffff',
            size :    '11dp',
            weight :    'bold',
            align :    'center'
        }
    }
};
/*
 * EXPORTS SECTION
 */

exports.ui    =    ui;

/*
 * END OF FILE
 */
