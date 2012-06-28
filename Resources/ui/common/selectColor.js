/*
 * TiCustomMenu
 *
 * selectColor.js
 * ==============
 *
 * This commonJS module loads a view onto the screen to allow for the
 * selection of the applications theme.
 *
 * It then fires an event back up to the controller to reload the window
 * with the new theme.
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

function buildOption(inParam) {
    var option    =    Ti.UI.createLabel({
        top :    10,
        left :    0,
        right :    0,
        height :    '25dp',
        text :    inParam.TEXT,
        color :    uiSettings.ui.selColor.font.color,
        textAlign :    uiSettings.ui.selColor.font.align,
        font : {
            size :    uiSettings.ui.selColor.font.size,
            weight :    uiSettings.ui.selColor.font.weight
        }
    });
    option.addEventListener('touchstart', function(e) {
        option.color    =    '#ff0000'
    });
    option.addEventListener('touchend', function(e) {
        settingsGlobal.value.COLORSCHEME    =    inParam.SCHEME;
        Ti.App.fireEvent('APPCONTROL', {
            OPTION :    settingsGlobal.value.CURRENTOPTION
        });
    });
    return option;
}

function loadSelectColor(inParam) {"use strict";

    updateRequired();

    var selColorView    =    Ti.UI.createView({
        top :    70,
        left :    75,
        right :    75,
        bottom :    20,
        backgroundColor :    uiSettings.ui.selColor.backgroundColor,
        borderColor :    uiSettings.ui.selColor.borderColor,
        borderRadius :    4,
        borderWidth :    2,
        layout :    'vertical'
    });
    // Add the options
    var option1    =    buildOption({
        TEXT :    'BLACK',
        SCHEME :    settingsGlobal.value.COLORSCHEMES.BLACK
    });
    var option2    =    buildOption({
        TEXT :    'BLUE',
        SCHEME :    settingsGlobal.value.COLORSCHEMES.BLUE
    });
    var option3    =    buildOption({
        TEXT :    'GREEN',
        SCHEME :    settingsGlobal.value.COLORSCHEMES.GREEN
    });
    var option4    =    buildOption({
        TEXT :    'GREY',
        SCHEME :    settingsGlobal.value.COLORSCHEMES.GREY
    });
    var option5    =    buildOption({
        TEXT :    'ORANGE',
        SCHEME :    settingsGlobal.value.COLORSCHEMES.ORANGE
    });
    var option6    =    buildOption({
        TEXT :    'RED',
        SCHEME :    settingsGlobal.value.COLORSCHEMES.RED
    });
    var option7    =    buildOption({
        TEXT :    'YELLOW',
        SCHEME :    settingsGlobal.value.COLORSCHEMES.YELLOW
    });

    selColorView.add(option1);
    selColorView.add(option2);
    selColorView.add(option3);
    selColorView.add(option4);
    selColorView.add(option5);
    selColorView.add(option6);
    selColorView.add(option7);

    // Always return the object to the controller
    return selColorView;
}

/*
 * EXPORTS SECTION
 */

exports.loadSelectColor    =    loadSelectColor;

/*
 * END OF FILE
 */
