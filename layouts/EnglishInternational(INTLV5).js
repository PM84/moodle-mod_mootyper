/**
 * @fileOverview English International(INTLV5.0) keyboard driver.
 * @author <a href="mailto:drachels@drachels.com">AL Rachels</a>
 * @version 5.0
 * @since 20240516
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
    return false;
}

/**
 * Check for character typed so flags can be set.
 * @param {string} ltr The current letter.
 */
function keyboardElement(ltr) {
    this.chr = ltr.toLowerCase();
    this.alt = false;
    this.shiftleft = false;
    this.shiftright = false;
    // Strict modifier routing based on printed INTLV5 key legends.
    // phpcs:ignore
    if (ltr.match(/[¹£ÄÅÉÞÁ§Æ]/)) {
        this.shiftright = true;
        this.alt = true;
    // Phpcs:ignore
    } else if (ltr.match(/[÷°¨¦ÜÚÍÓÖØ¢ÑÇ]/)) {
        this.shiftleft = true;
        this.alt = true;
    // Phpcs:ignore
    } else if (ltr.match(/[¡²³¤€¼½¾‘’¥×äåé®þüúíóö«»¬áßðø¶´æ©ñµç¿]/)) {
        this.alt = true;
    } else if (isLetter(ltr)) { // Set specified shift key for right or left.
        if (ltr.match(/[QWERTASDFGZXCVB]/)) {
            this.shiftright = true;
        } else if (ltr.match(/[YUIOPHJKLNM]/)) {
            this.shiftleft = true;
        }
    } else {
        // Phpcs:ignore
        if (ltr.match(/[~!@#$%]/i)) {
            this.shiftright = true;
        } else if (ltr.match(/[\^&*()_+{}|:<>?]/)) {
            this.shiftleft = true;
        }
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
            document.getElementById('jkeyaltgr').className = "nextSpace";
        }
    };
    this.turnOff = function() {
        if (isLetter(this.chr)) {
        // Phpcs:ignore
            if (this.chr.match(/[asdfjkl;]/i)) {
                document.getElementById(getKeyID(this.chr)).className = "finger" + thenFinger(this.chr.toLowerCase());
            } else {
                document.getElementById(getKeyID(this.chr)).className = "normal";
            }
        } else {
            document.getElementById(getKeyID(this.chr)).className = "normal";
        }
        if (this.chr === '\n' || this.chr === '\r\n' || this.chr === '\n\r' || this.chr === '\r') {
            document.getElementById('jkeyenter').className = "normal";
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
    } else if (tCrka.match(/[`~1!¡¹qäaázæ0¥’)pö;:¶°/?¿\-_[{«»¬'"´¨=+×÷\]}\\|]/i)) {
        return 4; // Highlight the correct key above in red.
    // phpcs:ignore
    } else if (tCrka.match(/[2@²wåsß§x9(‘oólø.>]/i)) {
        return 3; // Highlight the correct key above in green.
    // phpcs:ignore
    } else if (tCrka.match(/[3#³eédðc©¢8*¾iík,<ç]/i)) {
        return 2; // Highlight the correct key above in yellow.
    // phpcs:ignore
    } else if (tCrka.match(/[4$¤£r®fv5%€tþgb6^¼yühnñ7&½uújmµ]/i)) {
        return 1; // Highlight the correct key above in blue.
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
    } else if (tCrka === ',' || tCrka === '<' || tCrka === 'ç') {
        return "jkeycomma";
    } else if (tCrka === '\n') {
        return "jkeyenter";
    } else if (tCrka === '.' || tCrka === '>') {
        return "jkeyperiod";
    } else if (tCrka === '-' || tCrka === '_' || tCrka === '¥') {
        return "jkeyminus";
    } else if (tCrka === '`' || tCrka === '~') {
        return "jkeybackquote";
    } else if (tCrka === '!' || tCrka === '¡' || tCrka === '¹') {
        return "jkey1";
    } else if (tCrka === '@' || tCrka === '²') {
        return "jkey2";
    } else if (tCrka === '#' || tCrka === '³') {
        return "jkey3";
    } else if (tCrka === '$' || tCrka === '£' || tCrka === '¤') {
        return "jkey4";
    } else if (tCrka === '%' || tCrka === '€') {
        return "jkey5";
    } else if (tCrka === '^' || tCrka === '¼') {
        return "jkey6";
    } else if (tCrka === '&' || tCrka === '½') {
        return "jkey7";
    } else if (tCrka === '*' || tCrka === '¾') {
        return "jkey8";
    } else if (tCrka === '(' || tCrka === '‘') {
        return "jkey9";
    } else if (tCrka === ')' || tCrka === '’') {
        return "jkey0";
    } else if (tCrka === '-' || tCrka === '_' || tCrka === '¥') {
        return "jkeyminus";
    } else if (tCrka === '=' || tCrka === '+' || tCrka === '×' || tCrka === '÷') {
        return "jkeyequal";
    } else if (tCrka === '[' || tCrka === '{' || tCrka === '«') {
        return "jkeybracketl";
    } else if (tCrka === ']' || tCrka === '}' || tCrka === '»') {
        return "jkeybracketr";
    } else if (tCrka === "\\" || tCrka === '|' || tCrka === '¬' || tCrka === '¦') {
        return "jkeybackslash";
    } else if (tCrka === ';' || tCrka === ':' || tCrka === '¶' || tCrka === '°') {
        return "jkeysemicolon";
    } else if (tCrka === "'" || tCrka === '"' || tCrka === '´' || tCrka === '¨') {
        return "jkeycrtica";
    } else if (tCrka === ',' || tCrka === '<' || tCrka === 'ç') {
        return "jkeycomma";
    } else if (tCrka === '.' || tCrka === '>') {
        return "jkeyperiod";
    } else if (tCrka === '=' || tCrka === '+') {
        return "jkeyequal";
    } else if (tCrka === '?' || tCrka === '/' || tCrka === '¿') {
        return "jkeyslash";
     } else if (tCrka === 'ä') {
        return "jkeyq";
    } else if (tCrka === 'å') {
        return "jkeyw";
    } else if (tCrka === 'é') {
        return "jkeye";
    } else if (tCrka === '®') {
        return "jkeyr";
    } else if (tCrka === 'þ') {
        return "jkeyt";
    } else if (tCrka === 'ü') {
        return "jkeyy";
    } else if (tCrka === 'ú') {
        return "jkeyu";
    } else if (tCrka === 'í') {
        return "jkeyi";
    } else if (tCrka === 'ó') {
        return "jkeyo";
    } else if (tCrka === 'ö') {
        return "jkeyp";
    } else if (tCrka === 'á') {
        return "jkeya";
    } else if (tCrka === 'ß' || tCrka === '§') {
        return "jkeys";
    } else if (tCrka === 'ð') {
        return "jkeyd";
    } else if (tCrka === 'ø') {
        return "jkeyl";
    } else if (tCrka === 'æ') {
        return "jkeyz";
    } else if (tCrka === '©' || tCrka === '¢') {
        return "jkeyc";
    } else if (tCrka === 'ñ') {
        return "jkeyn";
    } else if (tCrka === 'µ') {
        return "jkeym";
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

/**
 * Dev-only layout self-check for legend-to-mapping consistency.
 * Enable with ?mtdevlayoutcheck=1 or window.MOOTYPER_DEV_LAYOUT_CHECK = true.
 */
function runIntlv5LayoutSelfCheck() {
    if (typeof document === 'undefined') {
        return;
    }
    var root = document.getElementById('keyboard');
    if (!root) {
        return;
    }

    // Blue spans represent AltGr legends in this layout.
    var bluespans = root.querySelectorAll('span[style*="color:blue"]');
    var altChars = [];
    for (var i = 0; i < bluespans.length; i++) {
        var txt = (bluespans[i].textContent || '').replace(/\s+/g, '');
        for (var j = 0; j < txt.length; j++) {
            var ch = txt[j];
            // Ignore placeholder text artifacts.
            if (/[A-Za-z0-9]/.test(ch) || ch === '&' || ch === ';') {
                continue;
            }
            if (altChars.indexOf(ch) === -1) {
                altChars.push(ch);
            }
        }
    }

    var missingids = [];
    var altmismatch = [];
    var shiftrightmismatch = [];
    var shiftleftmismatch = [];

    // Blue legends that are expected to require Shift+AltGr on a specific side.
    // phpcs:ignore
    var needsRightShift = /[¹£ÄÅÉÞÁ§Æ]/;
    // Phpcs:ignore
    var needsLeftShift = /[÷°¨¦ÜÚÍÓÖØ¢ÑÇ]/;

    for (var k = 0; k < altChars.length; k++) {
        var chr = altChars[k];
        var keyid = getKeyID(chr);
        if (!document.getElementById(keyid)) {
            missingids.push(chr + '->' + keyid);
        }
        var probe = new keyboardElement(chr);
        if (!probe.alt) {
            altmismatch.push(chr);
        }

        if (needsRightShift.test(chr)) {
            if (!probe.shiftright || probe.shiftleft) {
                shiftrightmismatch.push(chr);
            }
        }

        if (needsLeftShift.test(chr)) {
            if (!probe.shiftleft || probe.shiftright) {
                shiftleftmismatch.push(chr);
            }
        }
    }

    if (missingids.length || altmismatch.length || shiftrightmismatch.length || shiftleftmismatch.length) {
        // eslint-disable-next-line no-console
        console.warn('[MooTyper][INTLV5] layout self-check mismatches', {
            missingKeyIds: missingids,
            altExpectedButMissing: altmismatch,
            expectedRightShiftMismatch: shiftrightmismatch,
            expectedLeftShiftMismatch: shiftleftmismatch,
        });
    } else {
        // eslint-disable-next-line no-console
        console.info('[MooTyper][INTLV5] layout self-check passed', {
            altLegendCount: altChars.length,
        });
    }
}

/**
 * Bootstraps the dev-only self-check if explicitly enabled.
 */
function maybeRunIntlv5LayoutSelfCheck() {
    if (typeof window === 'undefined') {
        return;
    }
    var enabled = (window.MOOTYPER_DEV_LAYOUT_CHECK === true) ||
        (typeof window.location !== 'undefined' && /(?:\?|&)mtdevlayoutcheck=1(?:&|$)/.test(window.location.search));
    if (!enabled) {
        return;
    }
    runIntlv5LayoutSelfCheck();
}

if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', maybeRunIntlv5LayoutSelfCheck);
    } else {
        maybeRunIntlv5LayoutSelfCheck();
    }
}
