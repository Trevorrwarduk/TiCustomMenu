/*
 * TiCustomMenu
 *
 * globalSettings.js
 * =================
 *
 * This commonJS module creates the global settings used by the application.
 *
 * Use this file to set the tab bar and navigation bar settings.
 *
 * It is a stand alone module used specifically for static values only.
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

var settings    = {
    navBar : {
        height :    '44dp',
        width :    '100%',
        backgroundColor :    '#ffffff',
        top :    0
    },
    tabMenu : {
        height :    '51dp',
        width :    '100%',
        backgroundColor :    '#000000',
        bottom :    0,
        options : {
            count :    2,
        }
    },
    windows : {
        one : {
            req :    '/ui/windows/windowOne',
            title :    'Window One',
            back :    false
        },
        two : {
            req :    '/ui/windows/windowTwo',
            title :    'Window Two',
            back :    false
        }
    },
    content : {
        backgroundColor :    'transparent',
        width :    '100%'
    }
}
/*
 * EXPORTS SECTION
 */

exports.settings    =    settings;

/*
 * END OF FILE
 */
