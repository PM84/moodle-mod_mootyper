/**
 * @fileOverview German(V5.1) keyboard driver (20231028).
 * @author <a href="mailto:drachels@drachels.com">AL Rachels</a>
 * @version 5.0
 * @since 07/09/2018
 */

/**
 * Check for combined character.
 * @param {string} chr The combined character.
 * @returns {string} The character.
 */
function isCombined(chr) {
    return false;
}

/**
 * Process keyup for combined character.
 * @param {string} e The combined character.
 * @returns {bolean} The result.
 */
function keyupCombined(e) {
    return false;
}

/**
 * Process keyupFirst.
 * @param {string} event Type of event.
 * @returns {bolean} The event.
 */
function keyupFirst(event) {
    $("#form1").off("keyup", "#tb1", keyupFirst);
    $("#form1").on("keyup", "#tb1", keyupCombined);
    return false;
}

/**
 * Check for character typed so flags can be set.
 * @param {string} ltr The current letter.
 */
function keyboardElement(ltr) {
    this.chr = ltr.toLowerCase();
    this.alt = false;
    this.accent = false;
    this.pow = false;
    this.umlaut = false;
    if (isLetter(ltr)) { // Set specified shift key for right or left.
        if (ltr.match(/[°!"§$%QWEÊÉÈRTAÂSDFG>YXCVB]/)) {
            this.shiftright = true;
            // Phpcs:ignore
        } else if (ltr.match(/[&/()=?`*';:_ZUIOÔPÜ*'HJKLÖÄNM;:_]/)) {
            this.shiftleft = true;
        }
    }
    // Phpcs:ignore
    if (ltr.match(/[|²³ã¦@¬|¢~€\[\]{}\\µ]/i)) {
        this.alt = true;
    }
    if (ltr.match(/[ÄÖÜ]/)) {
        this.shiftleft = true;
    }
    if (ltr.match(/[âêîôû]/)) {
        this.pow = true;
    }
    if (ltr.match(/[ÂÊ]/)) {
        this.shiftright = true;
        this.pow = true;
    }
    if (ltr.match(/[ÎÔÛ]/)) {
        this.shiftleft = true;
        this.pow = true;
    }
    if (ltr.match(/[áéó]/)) {
        this.accent = true;
    }
    if (ltr === 'è') {
        this.accent = true;
        this.shiftleft = true;
    }
    if (ltr.match(/[ñã]/)) {
        this.alt = true;
        this.tilde = true;
    }
    this.turnOn = function() {
        if (isLetter(this.chr)) {
            document.getElementById(getKeyID(this.chr)).className = "next" + thenFinger(this.chr.toLowerCase());
        } else if (this.chr === ' ') {
            document.getElementById(getKeyID(this.chr)).className = "nextSpace";
        } else {
            document.getElementById(getKeyID(this.chr)).className = "next" + thenFinger(this.chr.toLowerCase());
        }

        if (this.chr === '\n' || this.chr === '\r\n' || this.chr === '\n\r' || this.chr === '\r') {
            document.getElementById('jkeyenter').className = "next4";
        }
        if (this.shiftleft) {
            document.getElementById('jkeyshiftl').className = "next4";
        }
        if (this.shiftright) {
            document.getElementById('jkeyshiftr').className = "next4";
        }
        if (this.alt) {
            document.getElementById('jkeyaltgr').className = "next2";
        }
        if (this.accent) {
            document.getElementById('jkeyaccent').className = "next4";
            if (this.shift) {
                document.getElementById('jkeyshiftl').className = "next2";
            }
        }
        if (this.pow) {
            document.getElementById('jkeypow').className = "next4";
        }
        if (this.tilde) {
            document.getElementById('jkeyplus').className = "next4";
        }
    };
    this.turnOff = function() {
        if (isLetter(this.chr)) {
            // Phpcs:ignore
            if (this.chr.match(/[asdfjklö]/i)) {
                document.getElementById(getKeyID(this.chr)).className = "finger" + thenFinger(this.chr.toLowerCase());
            } else {
                document.getElementById(getKeyID(this.chr)).className = "normal";
            }
        } else {
            document.getElementById(getKeyID(this.chr)).className = "normal";
        }

        if (this.chr === '\n' || this.chr === '\r\n' || this.chr === '\n\r' || this.chr === '\r') {
            document.getElementById('jkeyenter').classname = "normal";
        }
        if (this.shiftleft) {
            document.getElementById('jkeyshiftl').className = "normal";
        }
        if (this.shiftright) {
            document.getElementById('jkeyshiftr').className = "normal";
        }
        if (this.alt) {
            document.getElementById('jkeyaltgr').className = "normal";
        }
        if (this.accent) {
            document.getElementById('jkeyaccent').className = "normal";
        }
        if (this.pow) {
            document.getElementById('jkeypow').className = "normal";
        }
        if (this.tilde) {
            document.getElementById('jkeyplus').className = "normal";
        }
    };
}

/**
 * Set color flag based on current character.
 * @param {string} tCrka The current character.
 * @returns {number}.
 */
function thenFinger(tCrka) {
    if (tCrka === ' ') {
        return 5; // Highlight the spacebar.
    // phpcs:ignore
    } else if (tCrka.match(/[\n^°<>|1!q@aáây0=}pö\-_ß?\\üä´`+*~#']/i)) {
        return 4; // Highlight the correct key above in red.
    // phpcs:ignore
    } else if (tCrka.match(/[2"²wsx9)\]oôl.:]/i)) {
        return 3; // Highlight the correct key above in green.
    // phpcs:ignore
    } else if (tCrka.match(/[3§³eëêéè€dc8(\[ik,;iî]/i)) {
        return 2; // Highlight the correct key above in yellow.
    // phpcs:ignore
    } else if (tCrka.match(/[4$rfv5%tgb6&zhn7/{ujmµû]/i)) {
        return 1; // Highlight the correct key above in blue.
    // phpcs:ignore
    } else {
        return 6; // Do not change any highlight.
    }
}

/**
 * Get ID of key to highlight based on current character.
 * @param {string} tCrka The current character.
 * @returns {string}.
 */
function getKeyID(tCrka) {
    if (tCrka === ' ') {
        return "jkeyspace";
    } else if (tCrka === '\n') {
        return "jkeyenter";
    } else if (tCrka === '^' || tCrka === '°') {
        return "jkeypow";
    } else if (tCrka === '!') {
        return "jkey1";
    } else if (tCrka === '"' || tCrka === '²') {
        return "jkey2";
    } else if (tCrka === '§' || tCrka === '³') {
        return "jkey3";
    } else if (tCrka === '$') {
        return "jkey4";
    } else if (tCrka === '%') {
        return "jkey5";
    } else if (tCrka === '&') {
        return "jkey6";
    } else if (tCrka === '/' || tCrka === '{') {
        return "jkey7";
    } else if (tCrka === '(' || tCrka === '[') {
        return "jkey8";
    } else if (tCrka === ')' || tCrka === ']') {
        return "jkey9";
    } else if (tCrka === '=' || tCrka === '}') {
        return "jkey0";
    } else if (tCrka === '?' || tCrka === 'ß' || tCrka === '\\') {
        return "jkeyß";
    } else if (tCrka === '`' || tCrka === '´') {
        return "jkeyaccent";
    } else if (tCrka === '@') {
        return "jkeyq";
    } else if (tCrka.match(/[€êéè]/)) {
        return "jkeye";
    } else if (tCrka.match(/[uû]/)) {
        return "jkeyu";
    } else if (tCrka === 'i' || tCrka === 'î' || tCrka === 'í' || tCrka === 'ï') {
        return "jkeyi";
    } else if (tCrka.match(/[oôó]/)) {
        return "jkeyo";
    } else if (tCrka === 'ü' || tCrka === 'Ü') {
        return "jkeyü";
    } else if (tCrka === '*' || tCrka === '+' || tCrka === '~') {
        return "jkeyplus";
    } else if (tCrka === 'ö' || tCrka === 'Ö') {
        return "jkeyö";
    } else if (tCrka.match(/[áâã]/)) {
        return "jkeya";
    } else if (tCrka.match(/[äÄ]/)) {
        return "jkeyä";
    } else if (tCrka === '\'' || tCrka === '#') {
        return "jkey#";
    } else if (tCrka === ',' || tCrka === ';') {
        return "jkeycomma";
    } else if (tCrka === '.' || tCrka === ':') {
        return "jkeyperiod";
    } else if (tCrka === '-' || tCrka === '_') {
        return "jkeyminus";
    } else if (tCrka === '<' || tCrka === '>' || tCrka === '|') {
        return "jkeyckck";
    } else if (tCrka === 'µ') {
        return "jkeym";
    } else if (tCrka === 'ñ') {
        return "jkeyn";
    } else {
        return "jkey" + tCrka;
    }
}

/**
 * Is the typed letter part of the current alphabet.
 * @param {string} str The current letter.
 * @returns {(number|Array)}.
 */
function isLetter(str) {
    return str.length === 1 && str.match(/[!-ﻼ]/i);
}
