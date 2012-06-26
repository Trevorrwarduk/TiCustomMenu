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
        backgroundImage :    '/assets/navBar/blackBackground.png',
        back : {
            backButtonOff :    '/assets/buttons/backButtonBlackOff.png',
            backButtonOn :    '/assets/buttons/backButtonBlackOn.png'
        },
        font : {
          titleColor : '#ffffff',
          titleSize : 22,
          titleWeight : 'bold',
          titleAlign : 'center',  
          buttonColor : '#ffffff',
          buttonSize : 11,
          buttonWeight : 'bold'  ,
          buttonAlign : 'center',
          touchColor : '#000000'  
        }
    },
    tabMenu : {
        height :    '51dp',
        width :    '100%',
        backgroundColor :    '#000000',
        backgroundImage :    '/assets/menuBar/blackBackground.png',
        bottom :    0,
        options : {
            iconSelected :    '/assets/menuBar/menuIconOn.png',
            iconNotSelected :    '/assets/menuBar/menuIconOff.png',
        },
        font : {
          touchColor : '#ffffff'  
        }
    },
    contentArea : {
        backgroundColor :    '#C3C3C3',
        width :    '100%'
    }
}
/*
 * EXPORTS SECTION
 */

exports.ui    =    ui;

/*
 * END OF FILE
 */
