/*
 * TiCustomMenu
 *
 * controller.js
 * =============
 *
 * This commonJS module controls the whole application. All windows are opened and closed here,
 * all background setting and application level event listeners are also controlled here.
 *
 * It uses a custom back navigation which is coded to for both Android and IOS and as you will
 * seen in the screens the android hard back button is handled.
 *
 * It also uses a custom open and close function which only closes the previous window after
 * the new window has opened.
 *
 * There is only one window open at a time in this application and each time the window memory
 * is cleaned up.
 *
 * As you will see through the modules I have tried to use best practices and conform to a coding
 * standard of layout, comments and sections in each module. This again is only a suggested
 * way of doing this but it works and works well for me.
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

/* Set the default application color */

Titanium.UI.setBackgroundColor('#C3C3C3');

/*
 * A couple of parameters to keep the details of the current opened and previous
 * windows for opening and closing
 */
var currWindow    =    null;
var lastWindow    =    null;
var backArray    =    [];

/*
 * The required tools
 */
var toolsGlobal    =    require('/settings/global');

function setValues(inParam) {
    toolsGlobal.value.CURRENTOPTION    =    inParam.OPTION;
    toolsGlobal.value.BACKARRAY.push(inParam.OPTION);

}

/*
 * loadPreviousWindow
 * ==================
 *
 * This function handles the processing of the back button either the hard button on android
 * or the soft button on the window navigation bar.
 *
 */
function loadPreviousWindow(inParam) {"use strict";
    var backLength    =    toolsGlobal.value.BACKARRAY.length;

    /* The only platform specific coding to handle closing the app if its android */
    if (Ti.Platform.Android  &&  toolsGlobal.value.BACKARRAY.length  ===  1) {
        var tmpWin    =    Ti.UI.createWindow({
            navBarHidden :    true,
            exitOnClose :    true
        });
        tmpWin.addEventListener('open', function(e) {
            tmpWin.close();
        })
        currWindow.close();
        tmpWin.open();
    }
    /* We have a screen to go back to */
    else if (backLength  >  1) {
        var backOption    =    toolsGlobal.value.BACKARRAY[backLength  -  2];
        // We want the previous element to the currently loaded screen.

        toolsGlobal.value.BACKARRAY.length    =    backLength  -  2;
        // clear the back screens no longer needed.

        Ti.App.fireEvent('APPCONTROL', {
            OPTION :    backOption
        });
    }
}

/*
 * windowHandler
 * =============
 *
 * This function opens the new window and closes the previous one
 */

function windowHandler(inParam) {"use strict";
    lastWindow    =    currWindow;

    currWindow    =    inParam.newWindow;

    currWindow.open();

    if (lastWindow) {
        lastWindow.close();
        lastWindow    =    null;
    }
    return;
}

/*
 * loadWindowOne
 * =============
 *
 * This function will load the first screen of the menu
 */

function loadWindowOne(inParam) {"use strict";
    var windowOneReq    =    require('/ui/windows/windowOne');

    setValues({
        OPTION :    toolsGlobal.value.OPTIONS.ONE
    });

    windowHandler({
        newWindow :    windowOneReq.loadWindowOneDisplay()
    });

    return;
}

/*
 * loadWindowTwo
 * =============
 *
 * This function will load the second screen of the menu
 */

function loadWindowTwo(inParam) {"use strict";
    var windowTwoReq    =    require('/ui/windows/windowTwo');

    setValues({
        OPTION :    toolsGlobal.value.OPTIONS.TWO
    });

    windowHandler({
        newWindow :    windowTwoReq.loadWindowTwoDisplay()
    });

    return;
}

/*
 * loadWindowThree
 * ===============
 *
 * This function will load the third screen of the menu
 */

function loadWindowThree(inParam) {"use strict";
    var windowThreeReq    =    require('/ui/windows/windowThree');

    setValues({
        OPTION :    toolsGlobal.value.OPTIONS.THREE
    });

    windowHandler({
        newWindow :    windowThreeReq.loadWindowThreeDisplay()
    });

    return;
}

/*
 * loadWindowFour
 * =============+
 *
 * This function will load the fourth screen of the menu
 */

function loadWindowFour(inParam) {"use strict";
    var windowFourReq    =    require('/ui/windows/windowFour');

    setValues({
        OPTION :    toolsGlobal.value.OPTIONS.FOUR
    });

    windowHandler({
        newWindow :    windowFourReq.loadWindowFourDisplay()
    });

    return;
}

/*
 * loadWindowFive
 * ==============
 *
 * This function will load the fifth screen of the menu
 */

function loadWindowFive(inParam) {"use strict";
    var windowFiveReq    =    require('/ui/windows/windowFive');

    setValues({
        OPTION :    toolsGlobal.value.OPTIONS.FIVE
    });

    windowHandler({
        newWindow :    windowFiveReq.loadWindowFiveDisplay()
    });

    return;
}

/*
 * startApp
 * ========
 *
 * This function is called from the app.js bootstrap file initially. It is the only function
 * called from there, and it is the only function exported from the control file.
 *
 * This keeps the global scope managed cleanly through out the app.
 */
function startApp(inParam) {"use strict";
    loadWindowOne();

    return;
}

/*
 * Application control section.
 *
 * This section handles the application event listener which receives fire
 * events from the application itself (In this case the menu), and processes
 * the application flow.
 */

function applicationHandler(inParam) {
    switch(inParam.OPTION) {
        case toolsGlobal.value.OPTIONS.ONE:
            loadWindowOne(inParam.PARAMS);
            break;
        case toolsGlobal.value.OPTIONS.TWO:
            loadWindowTwo(inParam.PARAMS);
            break;
        case toolsGlobal.value.OPTIONS.THREE:
            loadWindowThree(inParam.PARAMS);
            break;
        case toolsGlobal.value.OPTIONS.FOUR:
            loadWindowFour(inParam.PARAMS);
            break;
        case toolsGlobal.value.OPTIONS.FIVE:
            loadWindowFive(inParam.PARAMS);
            break;
        case toolsGlobal.value.OPTIONS.BACK:
            loadPreviousWindow(inParam.PARAMS);
            break;
        default:
            loadWindowOne(inParam.PARAMS);
            break;
    }
}

Ti.App.addEventListener('APPCONTROL', applicationHandler);

/*
 * EXPORTS SECTION
 */

exports.startApp    =    startApp;

/*
 * END OF FILE
 */
