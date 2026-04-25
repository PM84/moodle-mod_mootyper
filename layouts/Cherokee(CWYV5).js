/**
 * @fileOverview Cherokee(CWYV5) keyboard driver.
 * @author <a href="mailto:drachels@drachels.com">AL Rachels</a>
 * @version 5.0
 * @since 04/14/2026
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
 * @param {number} [pos] Optional text index for token lookahead.
 */
function cherokeeDisplayToken(ltr, pos) {
    var basePos = (typeof pos === 'number') ? pos : currentPos;

    if (!ltr || typeof fullText === 'undefined' || typeof basePos === 'undefined') {
        return ltr;
    }

    // Cherokee(CWYV5) number-row multi-character outputs.
    if (fullText.substring(basePos, basePos + 3) === 'ᏣᎳᎩ' ||
            fullText.substring(basePos, basePos + 3) === 'CWY' ||
            fullText.substring(basePos, basePos + 3) === 'KWY') {
        return fullText.substring(basePos, basePos + 3);
    }
    if (fullText.substring(basePos, basePos + 3) === 'ᎣᏏᏲ' || fullText.substring(basePos, basePos + 3) === 'OSY') {
        return fullText.substring(basePos, basePos + 3);
    }
    if (fullText.substring(basePos, basePos + 2) === 'ᏩᏙ') {
        return fullText.substring(basePos, basePos + 2);
    }
    if (fullText.substring(basePos, basePos + 3) === 'WDO') {
        return fullText.substring(basePos, basePos + 3);
    }

    if (fullText.substring(basePos, basePos + 3) === 'cwy') {
        return 'cwy';
    }
    if (fullText.substring(basePos, basePos + 3) === 'kwy') {
        return 'kwy';
    }
    if (fullText.substring(basePos, basePos + 3) === 'osy') {
        return 'osy';
    }
    if (fullText.substring(basePos, basePos + 3) === 'wdo') {
        return 'wdo';
    }

    return ltr;
}

function keyboardElement(ltr, pos) {
    var keytoken = cherokeeDisplayToken(ltr, pos);
    var shiftRightTokens = [
        // Row 1 shifted keys on the left-hand side.
        'Ꮚ', 'Ꮁ', 'Ꮗ', 'Ꮷ', 'Ꮀ', 'Ꮉ',
        // Row 2 shifted keys on the left-hand side (Q..T).
        'Ꮖ', 'Ꮻ', 'Ꮳ', 'Ꮟ', 'Ꮨ',
        // Row 3 shifted keys on the left-hand side (A..G).
        'Ꮜ', 'Ꮞ', 'Ꮠ', 'Ꮘ', 'Ꮵ',
        // Row 4 shifted keys on the left-hand side (Z..B).
        'Ꮓ', 'Ꮽ', 'Ꮯ', 'Ꮮ', 'Ᏸ'
    ];
    var shiftLeftTokens = [
        // Row 1 shifted keys on the right-hand side.
        'Ꮭ', 'Ꮱ', 'Ꮊ', '(', ')', 'Ꮌ', 'Ꮍ',
        // Row 2 shifted keys on the right-hand side (Y..]).
        'Ᏺ', 'Ꭽ', 'Ᏹ', 'Ꮼ', 'Ꮺ', 'Ꮡ', 'Ꮴ',
        // Row 3 shifted keys on the right-hand side (H..').
        'Ꮂ', 'Ꭻ', 'Ꭷ', 'Ꭾ', 'Ꮰ', '"', 'Ꮾ',
        // Row 4 shifted keys on the right-hand side (N../).
        'Ꮋ', 'Ꮇ', 'Ꮲ', 'Ꮄ', 'Ꮙ'
    ];
    this.chr = keytoken.toLowerCase();
    this.alt = false;
    if (isLetter(keytoken)) { // Set specified shift key for right or left.
        if (keytoken.match(/[QWERTASDFGZXCVB]/)) {
            this.shiftright = true;
        } else if (keytoken.match(/[YUIOPHJKLNM]/)) {
            this.shiftleft = true;
        }
    } else {
        // @codingStandardsIgnoreLine
        if (keytoken.match(/[¬!"£$%|]/i)) {
            this.shiftright = true;
        } else if (keytoken.match(/[\^&*()_+{}:@~<>?]/)) {
            this.shiftleft = true;
        }
    }
    // Set flags for characters needing Alt Gr key.
    // @codingStandardsIgnoreLine
    if (keytoken.match(/[¦€áéúíó]/)) {
        this.alt = true;
    } else if (keytoken.match(/[ÉÁ]/)) {
        this.shiftright = true;
        this.alt = true;
    } else if (keytoken.match(/[ÚÍÓ]/)) {
        this.shiftleft = true;
        this.alt = true;
    }

    // Cherokee(CWYV5) shifted syllabics are not caught by Latin/symbol regex checks.
    if (shiftRightTokens.indexOf(keytoken) !== -1) {
        this.shiftright = true;
    } else if (shiftLeftTokens.indexOf(keytoken) !== -1) {
        this.shiftleft = true;
    }
    this.turnOn = function() {
        if (isLetter(this.chr)) {
            setKeyClassByChar(this.chr, "next" + thenFinger(this.chr.toLowerCase()));
        } else if (this.chr === ' ') {
            setKeyClassByChar(this.chr, "nextSpace");
        } else {
            setKeyClassByChar(this.chr, "next" + thenFinger(this.chr.toLowerCase()));
        }
        if (this.chr === '\n' || this.chr === '\r\n' || this.chr === '\n\r' || this.chr === '\r') {
            setKeyClassById('jkeyenter', "next4");
        }
        if (this.shiftleft) {
            setKeyClassById('jkeyshiftl', "next4");
        }
        if (this.shiftright) {
            setKeyClassById('jkeyshiftr', "next4");
        }
        if (this.alt) {
            setKeyClassById('jkeyaltgr', "nextSpace");
        }
    };
    this.turnOff = function() {
        if (isLetter(this.chr)) {
        // @codingStandardsIgnoreLine
            if (this.chr.match(/[asdfjkl;]/i)) {
                setKeyClassByChar(this.chr, "finger" + thenFinger(this.chr.toLowerCase()));
            } else {
                setKeyClassByChar(this.chr, "normal");
            }
        } else {
            setKeyClassByChar(this.chr, "normal");
        }
        if (this.chr === '\n' || this.chr === '\r\n' || this.chr === '\n\r' || this.chr === '\r') {
            setKeyClassById('jkeyenter', "normal");
        }
        if (this.shiftleft) {
            setKeyClassById('jkeyshiftl', "normal");
        }
        if (this.shiftright) {
            setKeyClassById('jkeyshiftr', "normal");
        }
        if (this.alt) {
            setKeyClassById('jkeyaltgr', "normal");
        }
    };
}

/**
 * Safely set key class by key id.
 * @param {string} keyid The key id.
 * @param {string} className Class to apply.
 */
function setKeyClassById(keyid, className) {
    var el = document.getElementById(keyid);
    if (el) {
        el.className = className;
    }
}

/**
 * Safely set key class by input character/token.
 * @param {string} chr The input char/token.
 * @param {string} className Class to apply.
 */
function setKeyClassByChar(chr, className) {
    var keyid = getKeyID(chr);
    setKeyClassById(keyid, className);
}

/**
 * Set color flag based on current character.
 * @param {string} tCrka The current character.
 * @returns {number}.
 */
function thenFinger(tCrka) {
    if (tCrka === ' ') {
        return 5; // Highlight the spacebar.
    }

    var keyid = getKeyID(tCrka);

    // Pinky keys (left and right), red.
    if (keyid === 'jkeybackquote' || keyid === 'jkey1' || keyid === 'jkeyq' || keyid === 'jkeya' ||
            keyid === 'jkeyz' || keyid === 'jkey0' || keyid === 'jkeyp' || keyid === 'jkeybracketl' ||
            keyid === 'jkeybracketr' || keyid === 'jkeybackslash' || keyid === 'jkeyminus' ||
            keyid === 'jkeyequals' || keyid === 'jkeysemicolon' || keyid === 'jkeycrtica' ||
            keyid === 'jkeyslash') {
        return 4;
    }

    // Ring finger keys, green.
    if (keyid === 'jkey2' || keyid === 'jkeyw' || keyid === 'jkeys' || keyid === 'jkeyx' ||
            keyid === 'jkey9' || keyid === 'jkeyo' || keyid === 'jkeyl' || keyid === 'jkeyperiod') {
        return 3;
    }

    // Middle finger keys, yellow.
    if (keyid === 'jkey3' || keyid === 'jkeye' || keyid === 'jkeyd' || keyid === 'jkeyc' ||
            keyid === 'jkey8' || keyid === 'jkeyi' || keyid === 'jkeyk' || keyid === 'jkeycomma') {
        return 2;
    }

    // Index finger keys, blue.
    if (keyid === 'jkey4' || keyid === 'jkey5' || keyid === 'jkey6' || keyid === 'jkey7' ||
            keyid === 'jkeyr' || keyid === 'jkeyt' || keyid === 'jkeyf' || keyid === 'jkeyg' ||
            keyid === 'jkeyv' || keyid === 'jkeyb' || keyid === 'jkeyy' || keyid === 'jkeyu' ||
            keyid === 'jkeyh' || keyid === 'jkeyj' || keyid === 'jkeyn' || keyid === 'jkeym') {
        return 1;
    }

    return 4; // Safe fallback.
}

/**
 * Get ID of key to highlight based on current character.
 * @param {string} tCrka The current character.
 * @returns {string}.
 */
function getKeyID(tCrka) {
    var map = {
        ' ': 'jkeyspace',
        '\n': 'jkeyenter',
        ',': 'jkeycomma',
        '.': 'jkeyperiod',
        '-': 'jkeyminus',
        '_': 'jkeyminus',
        '`': 'jkeybackquote',
        '¬': 'jkeybackquote',
        '¦': 'jkeybackquote',
        '"': 'jkeycrtica',
        "'": 'jkeycrtica',
        '(': 'jkey9',
        ')': 'jkey0',

        'Ꮚ': 'jkeybackquote',
        'ᏣᎳᎩ': 'jkey1', 'CWY': 'jkey1', 'cwy': 'jkey1', 'KWY': 'jkey1', 'kwy': 'jkey1', 'Ꮁ': 'jkey1',
        'ᎣᏏᏲ': 'jkey2', 'OSY': 'jkey2', 'osy': 'jkey2', 'Ꮗ': 'jkey2',
        'ᏩᏙ': 'jkey3', 'WDO': 'jkey3', 'wdo': 'jkey3', 'Ꮷ': 'jkey3',
        'Ꮩ': 'jkey4', 'Ꮀ': 'jkey4',
        'Ꮶ': 'jkey5', 'Ꮉ': 'jkey5',
        'Ꮬ': 'jkey6', 'Ꮭ': 'jkey6',
        'Ꮛ': 'jkey7', 'Ꮱ': 'jkey7',
        'Ꮦ': 'jkey8', 'Ꮊ': 'jkey8',
        'Ꮢ': 'jkey9',
        'Ꮔ': 'jkey0',
        'Ꮏ': 'jkeyminus', 'Ꮌ': 'jkeyminus',
        'Ᏻ': 'jkeyequals', 'Ꮍ': 'jkeyequals',

        'Ꮖ': 'jkeyq', 'Ꭺ': 'jkeyq',
        'Ꮻ': 'jkeyw', 'Ꮃ': 'jkeyw',
        'Ꮳ': 'jkeye', 'Ꭱ': 'jkeye',
        'Ꮟ': 'jkeyr', 'Ꮫ': 'jkeyr',
        'Ꮨ': 'jkeyt', 'Ꮤ': 'jkeyt',
        'Ᏺ': 'jkeyy', 'Ꮿ': 'jkeyy',
        'Ꭽ': 'jkeyu', 'Ꭴ': 'jkeyu',
        'Ᏹ': 'jkeyi', 'Ꭲ': 'jkeyi',
        'Ꮼ': 'jkeyo', 'Ꭳ': 'jkeyo',
        'Ꮺ': 'jkeyp', 'Ꮑ': 'jkeyp',
        'Ꮡ': 'jkeybracketl', 'Ꮥ': 'jkeybracketl',
        'Ꮴ': 'jkeybracketr', 'Ꮆ': 'jkeybracketr',

        'Ꮜ': 'jkeya', 'Ꭰ': 'jkeya',
        'Ꮞ': 'jkeys', 'Ꮝ': 'jkeys',
        'Ꮠ': 'jkeyd', 'Ꮧ': 'jkeyd',
        'Ꮘ': 'jkeyf', 'Ꭹ': 'jkeyf',
        'Ꮵ': 'jkeyg', 'Ꭶ': 'jkeyg',
        'Ꮂ': 'jkeyh', 'Ꭿ': 'jkeyh',
        'Ꭻ': 'jkeyj', 'Ꮪ': 'jkeyj',
        'Ꭷ': 'jkeyk', 'Ꮈ': 'jkeyk',
        'Ꭾ': 'jkeyl', 'Ꮅ': 'jkeyl',
        'Ꮰ': 'jkeysemicolon', 'Ꮸ': 'jkeysemicolon',

        'Ꮾ': 'jkeybackslash', 'Ꮹ': 'jkeybackslash',
        'Ꮓ': 'jkeyz', 'Ꭼ': 'jkeyz',
        'Ꮽ': 'jkeyx', 'Ᏼ': 'jkeyx',
        'Ꮯ': 'jkeyc', 'Ꮣ': 'jkeyc',
        'Ꮮ': 'jkeyv', 'Ꭵ': 'jkeyv',
        'Ᏸ': 'jkeyb', 'Ꭸ': 'jkeyb',
        'Ꮋ': 'jkeyn', 'Ꮎ': 'jkeyn',
        'Ꮇ': 'jkeym', 'Ꮕ': 'jkeym',
        'Ꮲ': 'jkeycomma',
        'Ꮄ': 'jkeyperiod',
        'Ꮙ': 'jkeyslash', 'Ꮒ': 'jkeyslash'
    };

    if (Object.prototype.hasOwnProperty.call(map, tCrka)) {
        return map[tCrka];
    }

    // Cherokee syllabics may arrive as lowercase (ꭰ..ꮿ) after JS toLowerCase().
    // Normalize by retrying both upper/lower variants before falling back to space.
    if (typeof tCrka === 'string' && tCrka.length > 0) {
        var upper = tCrka.toUpperCase();
        if (Object.prototype.hasOwnProperty.call(map, upper)) {
            return map[upper];
        }
        var lower = tCrka.toLowerCase();
        if (Object.prototype.hasOwnProperty.call(map, lower)) {
            return map[lower];
        }
    }

    if (typeof tCrka === 'string' && tCrka.length === 1 && tCrka >= '0' && tCrka <= '9') {
        return 'jkey' + tCrka;
    }

    return 'jkeyspace';
}

/**
 * Is the typed letter part of the current alphabet.
 * @param {string} str The current letter.
 * @returns {(number|Array)}.
 */
function isLetter(str) {
    return str.length === 1 && str.match(/[!-ﻼ]/i);
}
