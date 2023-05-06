// ==UserScript==
// @name         PTZ Automation
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Let's do this
// @author       oli-tolnai
// @match        http://192.168.1.100/pages/main.asp
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

document.addEventListener('keydown', function(event) {
    if (event.key === '-') {
        let oneKeyEvent = new KeyboardEvent('keydown', { key: '1', code: 'Digit1' });
        document.dispatchEvent(oneKeyEvent);
        setTimeout(function() {
            let element = document.evaluate('/html/body/div/div/main/section[1]/form/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            element.dispatchEvent(new MouseEvent('mousedown'));
            setTimeout(function() {
                element.dispatchEvent(new MouseEvent('mouseup'));
            }, 10000);
        }, 2000);
    }
});


document.addEventListener('keydown', function(event) {
    if (event.key === '.') {
        let oneKeyEvent = new KeyboardEvent('keydown', { key: '2', code: 'Digit2' });
        document.dispatchEvent(oneKeyEvent);
        setTimeout(function() {
            let element = document.evaluate('/html/body/div/div/main/section[1]/form/button', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            element.dispatchEvent(new MouseEvent('mousedown'));
            setTimeout(function() {
                element.dispatchEvent(new MouseEvent('mouseup'));
            }, 10000);
        }, 2000);
    }
});
