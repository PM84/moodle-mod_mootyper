/**
 * @fileOverview Amharic(ETV7) keyboard driver.
 * @author <a href="mailto:drachels@drachels.com">AL Rachels</a>
 * @version 7.0
 * @since 20240930
 */

/* exported isCombined, keyupCombined, keyupFirst, keyboardElement */

/**
 * Check for combined character.
 * @param {string} chr The combined character.
 * @returns {string} The character.
 */
function isCombined(chr) {
    return (chr === '´' || chr === '`' || chr === '~');
}

/**
 * Process keyup for combined character.
 * @returns {bolean} The result.
 */
function keyupCombined() {
    return false;
}

/**
 * Check for character requiring a sequence of keys.
 * @param {string} chr The character being checked
 * @returns {boolean} True if the character requires a sequence of keys to be entered
 */
function isCharSequence(chr) {
    const sequences = defineSequences();
    return (Object.keys(sequences).indexOf(chr) >= 0);
}

/**
 * Returns an array of characters that will be output when entering
 * the keystrokes for the given character.
 * @param {string} chr The target character.
 * @returns {Array} The interim characters.
 */
function getSequence(chr) {
    const sequences = defineSequences();
    return sequences[chr];
}

function defineSequences() {
    const sequences = {
    "ሀ": ["ህ", "ሀ"], // Key sequence: he
    "ሁ": ["ህ", "ሁ"], // Key sequence: hu
    "ሂ": ["ህ", "ሂ"], // Key sequence: hi
    "ሃ": ["ህ", "ሃ"], // Key sequence: ha
    "ሄ": ["ህ", "ሂ", "ሄ"], // Key sequence: hie
    "ሆ": ["ህ", "ሆ"], // Key sequence: ho
    "ለ": ["ል", "ለ"], // Key sequence: le
    "ሉ": ["ል", "ሉ"], // Key sequence: lu
    "ሊ": ["ል", "ሊ"], // Key sequence: li
    "ላ": ["ል", "ላ"], // Key sequence: la
    "ሌ": ["ል", "ሊ", "ሌ"], // Key sequence: lie
    "ሎ": ["ል", "ሎ"], // Key sequence: lo
    "ሐ": ["ህ", "ሕ", "ሐ"], // Key sequence: hhe
    "ሑ": ["ህ", "ሕ", "ሑ"], // Key sequence: hhu
    "ሒ": ["ህ", "ሕ", "ሒ"], // Key sequence: hhi
    "ሓ": ["ህ", "ሕ", "ሓ"], // Key sequence: hha
    "ሔ": ["ህ", "ሕ", "ሒ", "ሔ"], // Key sequence: hhie
    "ሕ": ["ህ", "ሕ"], // Key sequence: hh
    "ሖ": ["ህ", "ሕ", "ሖ"], // Key sequence: hho
    "መ": ["ም", "መ"], // Key sequence: me
    "ሙ": ["ም", "ሙ"], // Key sequence: mu
    "ሚ": ["ም", "ሚ"], // Key sequence: mi
    "ማ": ["ም", "ማ"], // Key sequence: ma
    "ሜ": ["ም", "ሚ", "ሜ"], // Key sequence: mie
    "ሞ": ["ም", "ሞ"], // Key sequence: mo
    "ሠ": ["ስ", "ሥ", "ሠ"], // Key sequence: sse
    "ሡ": ["ስ", "ሥ", "ሡ"], // Key sequence: ssu
    "ሢ": ["ስ", "ሥ", "ሢ"], // Key sequence: ssi
    "ሣ": ["ስ", "ሥ", "ሣ"], // Key sequence: ssa
    "ሤ": ["ስ", "ሥ", "ሢ", "ሤ"], // Key sequence: ssie
    "ሥ": ["ስ", "ሥ"], // Key sequence: ss
    "ሦ": ["ስ", "ሥ", "ሦ"], // Key sequence: sso
    "ረ": ["ር", "ረ"], // Key sequence: re
    "ሩ": ["ር", "ሩ"], // Key sequence: ru
    "ሪ": ["ር", "ሪ"], // Key sequence: ri
    "ራ": ["ር", "ራ"], // Key sequence: ra
    "ሬ": ["ር", "ሪ", "ሬ"], // Key sequence: rie
    "ሮ": ["ር", "ሮ"], // Key sequence: ro
    "ሰ": ["ስ", "ሰ"], // Key sequence: se
    "ሱ": ["ስ", "ሱ"], // Key sequence: su
    "ሲ": ["ስ", "ሲ"], // Key sequence: si
    "ሳ": ["ስ", "ሳ"], // Key sequence: sa
    "ሴ": ["ስ", "ሲ", "ሴ"], // Key sequence: sie
    "ሶ": ["ስ", "ሶ"], // Key sequence: so
    "ሸ": ["ሽ", "ሸ"], // Key sequence: xe
    "ሹ": ["ሽ", "ሹ"], // Key sequence: xu
    "ሺ": ["ሽ", "ሺ"], // Key sequence: xi
    "ሻ": ["ሽ", "ሻ"], // Key sequence: xa
    "ሼ": ["ሽ", "ሺ", "ሼ"], // Key sequence: xie
    "ሾ": ["ሽ", "ሾ"], // Key sequence: xo
    "ቀ": ["ቅ", "ቀ"], // Key sequence: qe
    "ቁ": ["ቅ", "ቁ"], // Key sequence: qu
    "ቂ": ["ቅ", "ቂ"], // Key sequence: qi
    "ቃ": ["ቅ", "ቃ"], // Key sequence: qa
    "ቄ": ["ቅ", "ቂ", "ቄ"], // Key sequence: qie
    "ቆ": ["ቅ", "ቆ"], // Key sequence: qo
    "በ": ["ብ", "በ"], // Key sequence: be
    "ቡ": ["ብ", "ቡ"], // Key sequence: bu
    "ቢ": ["ብ", "ቢ"], // Key sequence: bi
    "ባ": ["ብ", "ባ"], // Key sequence: ba
    "ቤ": ["ብ", "ቢ", "ቤ"], // Key sequence: bie
    "ቦ": ["ብ", "ቦ"], // Key sequence: bo
    "ተ": ["ት", "ተ"], // Key sequence: te
    "ቱ": ["ት", "ቱ"], // Key sequence: tu
    "ቲ": ["ት", "ቲ"], // Key sequence: ti
    "ታ": ["ት", "ታ"], // Key sequence: ta
    "ቴ": ["ት", "ቲ", "ቴ"], // Key sequence: tie
    "ቶ": ["ት", "ቶ"], // Key sequence: to
    "ቸ": ["ች", "ቸ"], // Key sequence: ce
    "ቹ": ["ች", "ቹ"], // Key sequence: cu
    "ቺ": ["ች", "ቺ"], // Key sequence: ci
    "ቻ": ["ች", "ቻ"], // Key sequence: ca
    "ቼ": ["ች", "ቺ", "ቼ"], // Key sequence: cie
    "ቾ": ["ች", "ቾ"], // Key sequence: co
    "ኀ": ["ህ", "ሕ", "ኅ", "ኀ"], // Key sequence: hhhe
    "ኁ": ["ህ", "ሕ", "ኅ", "ኁ"], // Key sequence: hhhu
    "ኂ": ["ህ", "ሕ", "ኅ", "ኂ"], // Key sequence: hhhi
    "ኃ": ["ህ", "ሕ", "ኅ", "ኃ"], // Key sequence: hhha
    "ኄ": ["ህ", "ሕ", "ኅ", "ኂ", "ኄ"], // Key sequence: hhhie
    "ኅ": ["ህ", "ሕ", "ኅ"], // Key sequence: hhh
    "ኆ": ["ህ", "ሕ", "ኅ", "ኆ"], // Key sequence: hhho
    "ነ": ["ን", "ነ"], // Key sequence: ne
    "ኑ": ["ን", "ኑ"], // Key sequence: nu
    "ኒ": ["ን", "ኒ"], // Key sequence: ni
    "ና": ["ን", "ና"], // Key sequence: na
    "ኔ": ["ን", "ኒ", "ኔ"], // Key sequence: nie
    "ኖ": ["ን", "ኖ"], // Key sequence: no
    "ኘ": ["ኝ", "ኘ"], // Key sequence: Ne
    "ኙ": ["ኝ", "ኙ"], // Key sequence: Nu
    "ኚ": ["ኝ", "ኚ"], // Key sequence: Ni
    "ኛ": ["ኝ", "ኛ"], // Key sequence: Na
    "ኜ": ["ኝ", "ኚ", "ኜ"], // Key sequence: Nie
    "ኞ": ["ኝ", "ኞ"], // Key sequence: No
    "ኣ": ["አ", "ኣ"], // Key sequence: aa
    "ኤ": ["ኢ", "ኤ"], // Key sequence: ie
    "ከ": ["ክ", "ከ"], // Key sequence: ke
    "ኩ": ["ክ", "ኩ"], // Key sequence: ku
    "ኪ": ["ክ", "ኪ"], // Key sequence: ki
    "ካ": ["ክ", "ካ"], // Key sequence: ka
    "ኬ": ["ክ", "ኪ", "ኬ"], // Key sequence: kie
    "ኮ": ["ክ", "ኮ"], // Key sequence: ko
    "ኸ": ["ኽ", "ኸ"], // Key sequence: Ke
    "ኹ": ["ኽ", "ኹ"], // Key sequence: Ku
    "ኺ": ["ኽ", "ኺ"], // Key sequence: Ki
    "ኻ": ["ኽ", "ኻ"], // Key sequence: Ka
    "ኼ": ["ኽ", "ኺ", "ኼ"], // Key sequence: Kie
    "ኾ": ["ኽ", "ኾ"], // Key sequence: Ko
    "ወ": ["ው", "ወ"], // Key sequence: we
    "ዉ": ["ው", "ዉ"], // Key sequence: wu
    "ዊ": ["ው", "ዊ"], // Key sequence: wi
    "ዋ": ["ው", "ዋ"], // Key sequence: wa
    "ዌ": ["ው", "ዊ", "ዌ"], // Key sequence: wie
    "ዎ": ["ው", "ዎ"], // Key sequence: wo
    "ዐ": ["አ", "ኣ", "ዐ"], // Key sequence: aaa
    "ዓ": ["አ", "ኣ", "ዐ", "ዓ"], // Key sequence: aaaa
    "ዔ": ["ዒ", "ዔ"], // Key sequence: Ie
    "ዕ": ["እ", "ኧ", "ዕ"], // Key sequence: eee
    "ዘ": ["ዝ", "ዘ"], // Key sequence: ze
    "ዙ": ["ዝ", "ዙ"], // Key sequence: zu
    "ዚ": ["ዝ", "ዚ"], // Key sequence: zi
    "ዛ": ["ዝ", "ዛ"], // Key sequence: za
    "ዜ": ["ዝ", "ዚ", "ዜ"], // Key sequence: zie
    "ዞ": ["ዝ", "ዞ"], // Key sequence: zo
    "ዠ": ["ዥ", "ዠ"], // Key sequence: Ze
    "ዡ": ["ዥ", "ዡ"], // Key sequence: Zu
    "ዢ": ["ዥ", "ዢ"], // Key sequence: Zi
    "ዣ": ["ዥ", "ዣ"], // Key sequence: Za
    "ዤ": ["ዥ", "ዢ", "ዤ"], // Key sequence: Zie
    "ዦ": ["ዥ", "ዦ"], // Key sequence: Zo
    "የ": ["ይ", "የ"], // Key sequence: ye
    "ዩ": ["ይ", "ዩ"], // Key sequence: yu
    "ዪ": ["ይ", "ዪ"], // Key sequence: yi
    "ያ": ["ይ", "ያ"], // Key sequence: ya
    "ዬ": ["ይ", "ዪ", "ዬ"], // Key sequence: yie
    "ዮ": ["ይ", "ዮ"], // Key sequence: yo
    "ደ": ["ድ", "ደ"], // Key sequence: de
    "ዱ": ["ድ", "ዱ"], // Key sequence: du
    "ዲ": ["ድ", "ዲ"], // Key sequence: di
    "ዳ": ["ድ", "ዳ"], // Key sequence: da
    "ዴ": ["ድ", "ዲ", "ዴ"], // Key sequence: die
    "ዶ": ["ድ", "ዶ"], // Key sequence: do
    "ጀ": ["ጅ", "ጀ"], // Key sequence: je
    "ጁ": ["ጅ", "ጁ"], // Key sequence: ju
    "ጂ": ["ጅ", "ጂ"], // Key sequence: ji
    "ጃ": ["ጅ", "ጃ"], // Key sequence: ja
    "ጄ": ["ጅ", "ጂ", "ጄ"], // Key sequence: jie
    "ጆ": ["ጅ", "ጆ"], // Key sequence: jo
    "ገ": ["ግ", "ገ"], // Key sequence: ge
    "ጉ": ["ግ", "ጉ"], // Key sequence: gu
    "ጊ": ["ግ", "ጊ"], // Key sequence: gi
    "ጋ": ["ግ", "ጋ"], // Key sequence: ga
    "ጌ": ["ግ", "ጊ", "ጌ"], // Key sequence: gie
    "ጎ": ["ግ", "ጎ"], // Key sequence: go
    "ጠ": ["ጥ", "ጠ"], // Key sequence: Te
    "ጡ": ["ጥ", "ጡ"], // Key sequence: Tu
    "ጢ": ["ጥ", "ጢ"], // Key sequence: Ti
    "ጣ": ["ጥ", "ጣ"], // Key sequence: Ta
    "ጤ": ["ጥ", "ጢ", "ጤ"], // Key sequence: Tie
    "ጦ": ["ጥ", "ጦ"], // Key sequence: To
    "ጨ": ["ጭ", "ጨ"], // Key sequence: Ce
    "ጩ": ["ጭ", "ጩ"], // Key sequence: Cu
    "ጪ": ["ጭ", "ጪ"], // Key sequence: Ci
    "ጫ": ["ጭ", "ጫ"], // Key sequence: Ca
    "ጬ": ["ጭ", "ጪ", "ጬ"], // Key sequence: Cie
    "ጮ": ["ጭ", "ጮ"], // Key sequence: Co
    "ጰ": ["ጵ", "ጰ"], // Key sequence: Pe
    "ጱ": ["ጵ", "ጱ"], // Key sequence: Pu
    "ጲ": ["ጵ", "ጲ"], // Key sequence: Pi
    "ጳ": ["ጵ", "ጳ"], // Key sequence: Pa
    "ጴ": ["ጵ", "ጲ", "ጴ"], // Key sequence: Pie
    "ጶ": ["ጵ", "ጶ"], // Key sequence: Po
    "ጸ": ["ት", "ጽ", "ጸ"], // Key sequence: tse
    "ጹ": ["ት", "ጽ", "ጹ"], // Key sequence: tsu
    "ጺ": ["ት", "ጽ", "ጺ"], // Key sequence: tsi
    "ጻ": ["ት", "ጽ", "ጻ"], // Key sequence: tsa
    "ጼ": ["ት", "ጽ", "ጺ", "ጼ"], // Key sequence: tsie
    "ጽ": ["ት", "ጽ"], // Key sequence: ts
    "ጾ": ["ት", "ጽ", "ጾ"], // Key sequence: tso
    "ፀ": ["ት", "ጽ", "ፅ", "ፀ"], // Key sequence: tsse
    "ፁ": ["ት", "ጽ", "ፅ", "ፁ"], // Key sequence: tssu
    "ፂ": ["ት", "ጽ", "ፅ", "ፂ"], // Key sequence: tssi
    "ፃ": ["ት", "ጽ", "ፅ", "ፃ"], // Key sequence: tssa
    "ፄ": ["ት", "ጽ", "ፅ", "ፂ", "ፄ"], // Key sequence: tssie
    "ፅ": ["ት", "ጽ", "ፅ"], // Key sequence: tss
    "ፆ": ["ት", "ጽ", "ፅ", "ፆ"], // Key sequence: tsso
    "ፈ": ["ፍ", "ፈ"], // Key sequence: fe
    "ፉ": ["ፍ", "ፉ"], // Key sequence: fu
    "ፊ": ["ፍ", "ፊ"], // Key sequence: fi
    "ፋ": ["ፍ", "ፋ"], // Key sequence: fa
    "ፌ": ["ፍ", "ፊ", "ፌ"], // Key sequence: fie
    "ፎ": ["ፍ", "ፎ"], // Key sequence: fo
    "ፐ": ["ፕ", "ፐ"], // Key sequence: pe
    "ፑ": ["ፕ", "ፑ"], // Key sequence: pu
    "ፒ": ["ፕ", "ፒ"], // Key sequence: pi
    "ፓ": ["ፕ", "ፓ"], // Key sequence: pa
    "ፔ": ["ፕ", "ፒ", "ፔ"], // Key sequence: pie
    "ፖ": ["ፕ", "ፖ"], // Key sequence: po
    "ቨ": ["ቭ", "ቨ"], // Key sequence: ve
    "ቩ": ["ቭ", "ቩ"], // Key sequence: vu
    "ቪ": ["ቭ", "ቪ"], // Key sequence: vi
    "ቫ": ["ቭ", "ቫ"], // Key sequence: va
    "ቬ": ["ቭ", "ቪ", "ቬ"], // Key sequence: vie
    "ቮ": ["ቭ", "ቮ"], // Key sequence: vo
    "ሏ": ["ል", "ሉ", "ሏ"], // Key sequence: lua
    "ሗ": ["ህ", "ሕ", "ሑ", "ሗ"], // Key sequence: hhua
    "ሟ": ["ም", "ሙ", "ሟ"], // Key sequence: mua
    "ሧ": ["ስ", "ሥ", "ሡ", "ሧ"], // Key sequence: ssua
    "ሯ": ["ር", "ሩ", "ሯ"], // Key sequence: rua
    "ሷ": ["ስ", "ሱ", "ሷ"], // Key sequence: sua
    "ሿ": ["ሽ", "ሹ", "ሿ"], // Key sequence: xua
    "ቈ": ["ቅ", "ቁ", "ቈ"], // Key sequence: que
    "ቍ": ["ቅ", "ቁ", "ቍ"], // Key sequence: qu'
    "ቊ": ["ቅ", "ቁ", "ቊ"], // Key sequence: qui
    "ቋ": ["ቅ", "ቁ", "ቋ"], // Key sequence: qua
    "ቌ": ["ቅ", "ቁ", "ቊ", "ቌ"], // Key sequence: quie
    "ቧ": ["ብ", "ቡ", "ቧ"], // Key sequence: bua
    "ቷ": ["ት", "ቱ", "ቷ"], // Key sequence: tua
    "ቿ": ["ች", "ቹ", "ቿ"], // Key sequence: cua
    "ኈ": ["ህ", "ሕ", "ኅ", "ኁ", "ኈ"], // Key sequence: hhhue
    "ኍ": ["ህ", "ሕ", "ኅ", "ኁ", "ኍ"], // Key sequence: hhhu'
    "ኊ": ["ህ", "ሕ", "ኅ", "ኁ", "ኊ"], // Key sequence: hhhui
    "ኋ": ["ህ", "ሕ", "ኅ", "ኁ", "ኋ"], // Key sequence: hhhua
    "ኌ": ["ህ", "ሕ", "ኅ", "ኁ", "ኊ", "ኌ"], // Key sequence: hhhuie
    "ኗ": ["ን", "ኑ", "ኗ"], // Key sequence: nua
    "ኟ": ["ኝ", "ኙ", "ኟ"], // Key sequence: Nua
    "ኰ": ["ክ", "ኩ", "ኰ"], // Key sequence: kue
    "ኵ": ["ክ", "ኩ", "ኵ"], // Key sequence: ku'
    "ኲ": ["ክ", "ኩ", "ኲ"], // Key sequence: kui
    "ኳ": ["ክ", "ኩ", "ኳ"], // Key sequence: kua
    "ኴ": ["ክ", "ኩ", "ኲ", "ኴ"], // Key sequence: kuie
    "ዟ": ["ዝ", "ዙ", "ዟ"], // Key sequence: zua
    "ዧ": ["ዥ", "ዡ", "ዧ"], // Key sequence: Zua
    "ጇ": ["ጅ", "ጁ", "ጇ"], // Key sequence: jua
    "ጐ": ["ግ", "ጉ", "ጐ"], // Key sequence: gue
    "ጕ": ["ግ", "ጉ", "ጕ"], // Key sequence: gu'
    "ጒ": ["ግ", "ጉ", "ጒ"], // Key sequence: gui
    "ጓ": ["ግ", "ጉ", "ጓ"], // Key sequence: gua
    "ጔ": ["ግ", "ጉ", "ጒ", "ጔ"], // Key sequence: guie
    "ጧ": ["ጥ", "ጡ", "ጧ"], // Key sequence: Tua
    "ጯ": ["ጭ", "ጩ", "ጯ"], // Key sequence: Cua
    "ጷ": ["ጵ", "ጱ", "ጷ"], // Key sequence: Pua
    "ጿ": ["ት", "ጽ", "ጹ", "ጿ"], // Key sequence: tsua
    "ፏ": ["ፍ", "ፉ", "ፏ"], // Key sequence: fua
    "ፗ": ["ፕ", "ፑ", "ፗ"], // Key sequence: pua
    "ቯ": ["ቭ", "ቩ", "ቯ"], // Key sequence: vua
    };
    return sequences;
}

/**
 * Process keyupFirst.
 * @returns {bolean} The event.
 */
function keyupFirst() {
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

    if (isLetter(ltr)) { // Set specified shift key for right or left.
        // phpcs:ignore
        // AZERTQSDFGWXCVB~!@#$%>
        if (ltr.match(/[~ዠዡዢዣዤዥዦዧጠጡጢጣጤጥጦጧጨጩጪጫጬጭጮጯ!@#$%]/)) {
            this.shiftright = true;
        // Phpcs:ignore
        // YUIOPHJKLMN67890_+
        } else if (ltr.match(/[ዑጰጱጲጳጴጵጶጷኸኹኺኻኼኽኾኘኙኚኛኜኝኞኟዒዔዖ^&*()_+]/)) {
            this.shiftleft = true;
        }
    }

    // Phpcs:ignore
    if (ltr.match(/[\\|@#€{}[\]~´`ñ]/i)) {
        this.alt = true;
    }
    // Phpcs:ignore
    if (ltr.match(/[ëïöü]/i)) {
        this.shiftleft = true;
        this.caret = true;
    }
    if (ltr === 'ê') {
        this.caret = true;
    }
    if (ltr === 'ó' || ltr === 'á') {
        this.alt = true;
        this.accent = true;
    }
    if (ltr === 'ñ') {
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
            document.getElementById('jkeyù').className = "next4";
        }
        if (this.caret) {
            document.getElementById('jkeycaret').className = "next4";
        }
        if (this.tilde) {
            document.getElementById('jkeyequal').className = "next4";
        }
    };
    this.turnOn = function(currSeqIndex) {
        var nextChar = this.chr;
        if (isCharSequence(nextChar)) {
            const seq = getSequence(nextChar);
            nextChar = seq[currSeqIndex];
        }
        if (isLetter(nextChar)) {
            document.getElementById(getKeyID(nextChar)).className = "next" + thenFinger(nextChar);
        } else if (nextChar === ' ') {
            document.getElementById(getKeyID(nextChar)).className = "nextSpace";
        } else {
            document.getElementById(getKeyID(nextChar)).className = "next" + thenFinger(nextChar);
        }

        if (nextChar === '\n' || nextChar === '\r\n' || nextChar === '\n\r' || nextChar === '\r') {
            document.getElementById('jkeyenter').className = "next4";
        }
        if (this.shiftleft && currSeqIndex === 0) {
            document.getElementById('jkeyshiftl').className = "next4";
        }
        if (this.shiftright && currSeqIndex === 0) {
            document.getElementById('jkeyshiftr').className = "next4";
        }
        if (this.alt) {
            document.getElementById('jkeyaltgr').className = "next2";
        }
        if (this.accent) {
            document.getElementById('jkeyù').className = "next4";
        }
        if (this.caret) {
            document.getElementById('jkeycaret').className = "next4";
        }
        if (this.tilde) {
            document.getElementById('jkeyequal').className = "next4";
        }
    };
    this.turnOff = function() {
    var seq;
    if (isCharSequence(this.chr)) {
            seq = getSequence(this.chr);
    } else {
        seq = [this.chr];
    }

    for (const char of seq) {
            if (isLetter(char)) {
                // Phpcs:ignore
                const endsWithA = (char === "ሃ" || char === "ላ" ||
                    char === "ሓ" || char === "ማ" || char === "ሣ" || char === "ራ" ||
                    char === "ሳ" || char === "ሻ" || char === "ቃ" || char === "ባ" ||
                    char === "ቫ" || char === "ታ" || char === "ቻ" || char === "ኃ" ||
                    char === "ና" || char === "ኛ" || char === "ኣ" || char === "ካ" ||
                    char === "ኻ" || char === "ዋ" || char === "ዓ" || char === "ዛ" ||
                    char === "ዣ" || char === "ያ" || char === "ዳ" || char === "ጃ" ||
                    char === "ጋ" || char === "ጣ" || char === "ጫ" || char === "ጳ" ||
                    char === "ጻ" || char === "ፃ" || char === "ፋ" || char === "ፓ" ||
                    char === "ሏ" || char === "ሗ" || char === "ሟ" || char === "ሧ" ||
                    char === "ሯ" || char === "ሷ" || char === "ሿ" || char === "ቋ" ||
                    char === "ቧ" || char === "ቯ" || char === "ቷ" || char === "ቿ" ||
                    char === "ኋ" || char === "ኗ" || char === "ኟ" || char === "ኳ" ||
                    char === "ዓ" || char === "ዟ" || char === "ዧ" || char === "ኣ" ||
                    char === "ዐ" || char === "ጇ" || char === "ጓ" || char === "ጧ" ||
                    char === "ጯ" || char === "ጷ" || char === "ጿ" || char === "አ" ||
                    char === "ፏ" || char === "ፗ" || char === "አ" || char === "ኣ");

                if (char.match(/[አስድፍጅክል፤;ኽ]/i)) {
                    document.getElementById(getKeyID(char)).className = "finger" + thenFinger(char.toLowerCase());
                } else if (endsWithA) {
            document.getElementById(getKeyID("አ")).className = "finger" + thenFinger("አ");
        } else if (char.match(/[ሥጽፅ]/i)) {
            document.getElementById(getKeyID("ስ")).className = "finger" + thenFinger("ስ");
        } else {
                    document.getElementById(getKeyID(char)).className = "normal";
                }
            } else {
                document.getElementById(getKeyID(char)).className = "normal";
            }
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
            document.getElementById('jkeyù').className = "normal";
        }
        if (this.caret) {
            document.getElementById('jkeycaret').className = "normal";
        }
        if (this.tilde) {
            document.getElementById('jkeyequal').className = "normal";
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
    // } else if (tCrka.match(/[²³&1|aáqw<>\\à0}pm)°^¨[ù%´=+~\-_$*\]µ£`]/i)) {
    // eslint-disable-next-line no-misleading-character-class
    } else if (tCrka.match(/[`~1!ቅአዝ0)ፕ፤፡/?'"[{}\]|\\ ፟_ሃላሓማሣራሳሻቃባቫታቻኃናኛኣካኻዋዓዛዣያዳጃጋጣጫጳጻፃፋፓሏሗሟሧሯሷሿቋቧቯቷቿኋኗኟኳዟዧጇጓጧጯጷጿፏፗቍኍኵጕዥጵኣዐዓ]/i)) {
        return 2; // Highlight the correct key above in red.
        // phpcs:ignore
    // } else if (tCrka.match(/[é2@zsxç9{oóöl:/]/i)) { Ends with
    } else if (tCrka.match(/[2@ውስሽ9(ኦል።>ሥሆሎሖሞሦሮሶሾቆቦቮቶቾኆኖኞኦኮኾዎዖዞዦዮዶጆጎጦጮጶጾፆፎፖጽፅዖ]/i)) {
        return 1; // Highlight the correct key above in green.
        // phpcs:ignore
    // } else if (tCrka.match(/["3#eéë€êdc!8iíïk;.]/i)) {
    // eslint-disable-next-line max-len
    } else if (tCrka.match(/[.3#እድች8*ኢክ፣<ሀለሐመሠረሰሸቀበቨተቸኀነኘአከኸወኧዘዠየደጀገጠጨጰጸፀፈፐሂሊሒሚሢሪሲሺቂቢቪቲቺኂኒኚኽኪኺዊዒዚዢዪዲጂጊጢጪጲጺፂፊፒሄሌሔሜሤሬሴሼቄቤቬቴቼኄኔኜኤኬኼዌዔዜዤዬዴጄጌጤጬጴጼፄፌፔቈኈኰጐቌኌኴጔቊኊኲጒጭኤዒዔዕ]/i)) {
        return 4; // Highlight the correct key above in yellow.
        // phpcs:ignore
    // } else if (tCrka.match(/[\'4rf(5tgbv§6yhnñè7uúüj,?]/i)) {
    } else if (tCrka.match(/[4$ርፍቭ5%ትግብ6^ይህን7&ኡጅምሁሉሑሙሡሩሱሹቁቡቩቱቹኁኑኙኡኩኹዉዑዙዡዩዱጁጉጡጩጱጹፁፉፑሕኅኝጥዑ]/i)) {
        return 3; // Highlight the correct key above in blue.
    } else {
        return 6;
    }
}

/**
 * Get ID of key to highlight based on current character.
 * @param {string} tCrka The current character.
 * @returns {string}.
 */
function getKeyID(tCrka) {
    const endsWithE = (tCrka === "ሀ" || tCrka === "ለ" ||
    tCrka === "ሐ" || tCrka === "መ" || tCrka === "ሠ" || tCrka === "ረ" ||
    tCrka === "ሰ" || tCrka === "ሸ" || tCrka === "ቀ" || tCrka === "በ" ||
    tCrka === "ቨ" || tCrka === "ተ" || tCrka === "ቸ" || tCrka === "ኀ" ||
    tCrka === "ነ" || tCrka === "ኘ" || tCrka === "እ" || tCrka === "ከ" ||
    tCrka === "ኸ" || tCrka === "ወ" || tCrka === "ዘ" ||
    tCrka === "ዠ" || tCrka === "የ" || tCrka === "ደ" || tCrka === "ጀ" ||
    tCrka === "ገ" || tCrka === "ጠ" || tCrka === "ጨ" || tCrka === "ጰ" ||
    tCrka === "ጸ" || tCrka === "ፀ" || tCrka === "ፈ" || tCrka === "ፐ" ||
    tCrka === "ሄ" || tCrka === "ሌ" || tCrka === "ሔ" || tCrka === "ሜ" ||
    tCrka === "ሤ" || tCrka === "ሬ" || tCrka === "ሴ" || tCrka === "ሼ" ||
    tCrka === "ቄ" || tCrka === "ቤ" || tCrka === "ቬ" || tCrka === "ቴ" ||
    tCrka === "ቼ" || tCrka === "ኄ" || tCrka === "ኔ" || tCrka === "ኜ" ||
    tCrka === "ኤ" || tCrka === "ኬ" || tCrka === "ኼ" || tCrka === "ዌ" ||
    tCrka === "ዔ" || tCrka === "ዜ" || tCrka === "ዤ" || tCrka === "ዬ" ||
    tCrka === "ዴ" || tCrka === "ጄ" || tCrka === "ጌ" || tCrka === "ጤ" ||
    tCrka === "ጬ" || tCrka === "ጴ" || tCrka === "ጼ" || tCrka === "ፄ" ||
    tCrka === "ፌ" || tCrka === "ፔ" || tCrka === "ቈ" || tCrka === "ኈ" ||
    tCrka === "ኰ" || tCrka === "ጐ" || tCrka === "ቌ" || tCrka === "ኌ" ||
    tCrka === "ኴ" || tCrka === "ጔ" || tCrka === "ዕ" || tCrka === "ኧ");

    const endsWithA = (tCrka === "ሃ" || tCrka === "ላ" ||
    tCrka === "ሓ" || tCrka === "ማ" || tCrka === "ሣ" || tCrka === "ራ" ||
    tCrka === "ሳ" || tCrka === "ሻ" || tCrka === "ቃ" || tCrka === "ባ" ||
    tCrka === "ቫ" || tCrka === "ታ" || tCrka === "ቻ" || tCrka === "ኃ" ||
    tCrka === "ና" || tCrka === "ኛ" || tCrka === "ኣ" || tCrka === "ካ" ||
    tCrka === "ኻ" || tCrka === "ዋ" || tCrka === "ዓ" || tCrka === "ዛ" ||
    tCrka === "ዣ" || tCrka === "ያ" || tCrka === "ዳ" || tCrka === "ጃ" ||
    tCrka === "ጋ" || tCrka === "ጣ" || tCrka === "ጫ" || tCrka === "ጳ" ||
    tCrka === "ጻ" || tCrka === "ፃ" || tCrka === "ፋ" || tCrka === "ፓ" ||
    tCrka === "ሏ" || tCrka === "ሗ" || tCrka === "ሟ" || tCrka === "ሧ" ||
    tCrka === "ሯ" || tCrka === "ሷ" || tCrka === "ሿ" || tCrka === "ቋ" ||
    tCrka === "ቧ" || tCrka === "ቯ" || tCrka === "ቷ" || tCrka === "ቿ" ||
    tCrka === "ኋ" || tCrka === "ኗ" || tCrka === "ኟ" || tCrka === "ኳ" ||
    tCrka === "ዓ" || tCrka === "ዟ" || tCrka === "ዧ" || tCrka === "ኣ" ||
    tCrka === "ዐ" || tCrka === "ጇ" || tCrka === "ጓ" || tCrka === "ጧ" ||
    tCrka === "ጯ" || tCrka === "ጷ" || tCrka === "ጿ" || tCrka === "አ" ||
    tCrka === "ፏ" || tCrka === "ፗ");

    const endsWithU = (tCrka === "ኡ" || tCrka === "ዑ" ||
    tCrka === "ሁ" || tCrka === "ሉ" || tCrka === "ሑ" || tCrka === "ሙ" ||
    tCrka === "ሡ" || tCrka === "ሩ" || tCrka === "ሱ" || tCrka === "ሹ" ||
    tCrka === "ቁ" || tCrka === "ቡ" || tCrka === "ቩ" || tCrka === "ቱ" ||
    tCrka === "ቹ" || tCrka === "ኁ" || tCrka === "ኑ" || tCrka === "ኙ" ||
    tCrka === "ኡ" || tCrka === "ኩ" || tCrka === "ኹ" || tCrka === "ዉ" ||
    tCrka === "ዑ" || tCrka === "ዙ" || tCrka === "ዡ" || tCrka === "ዩ" ||
    tCrka === "ዱ" || tCrka === "ጁ" || tCrka === "ጉ" || tCrka === "ጡ" ||
    tCrka === "ጩ" || tCrka === "ጱ" || tCrka === "ጹ" || tCrka === "ፁ" ||
    tCrka === "ፉ" || tCrka === "ፑ");

    const endsWithI = (tCrka === "ሂ" || tCrka === "ሊ" ||
    tCrka === "ሒ" || tCrka === "ሚ" || tCrka === "ሢ" || tCrka === "ሪ" ||
    tCrka === "ሲ" || tCrka === "ሺ" || tCrka === "ቂ" || tCrka === "ቢ" ||
    tCrka === "ቪ" || tCrka === "ቲ" || tCrka === "ቺ" || tCrka === "ኂ" ||
    tCrka === "ኒ" || tCrka === "ኚ" || tCrka === "ኢ" || tCrka === "ኪ" ||
    tCrka === "ኺ" || tCrka === "ዊ" || tCrka === "ዒ" || tCrka === "ዚ" ||
    tCrka === "ዢ" || tCrka === "ዪ" || tCrka === "ዲ" || tCrka === "ጂ" ||
    tCrka === "ጊ" || tCrka === "ጢ" || tCrka === "ጪ" || tCrka === "ጲ" ||
    tCrka === "ጺ" || tCrka === "ፂ" || tCrka === "ፊ" || tCrka === "ፒ" ||
    tCrka === "ቊ" || tCrka === "ኊ" || tCrka === "ኲ" || tCrka === "ጒ");

    const endsWithO = (tCrka === "ሆ" || tCrka === "ሎ" ||
    tCrka === "ሖ" || tCrka === "ሞ" || tCrka === "ሦ" || tCrka === "ሮ" ||
    tCrka === "ሶ" || tCrka === "ሾ" || tCrka === "ቆ" || tCrka === "ቦ" ||
    tCrka === "ቮ" || tCrka === "ቶ" || tCrka === "ቾ" || tCrka === "ኆ" ||
    tCrka === "ኖ" || tCrka === "ኞ" || tCrka === "ኦ" || tCrka === "ኮ" ||
    tCrka === "ኾ" || tCrka === "ዎ" || tCrka === "ዖ" || tCrka === "ዞ" ||
    tCrka === "ዦ" || tCrka === "ዮ" || tCrka === "ዶ" || tCrka === "ጆ" ||
    tCrka === "ጎ" || tCrka === "ጦ" || tCrka === "ጮ" || tCrka === "ጶ" ||
    tCrka === "ጾ" || tCrka === "ፆ" || tCrka === "ፎ" || tCrka === "ፖ");

    if (tCrka === ' ') {
        return "jkeyspace";
    } else if (tCrka === '\n') {
        return "jkeyenter";
    } else if (tCrka === '`' || tCrka === '~') {
        return "jkeycaret`";// `~
    } else if (tCrka === '1' || tCrka === '!') {
        return "jkey1";// !1
    } else if (tCrka === '2' || tCrka === '@') {
        return "jkey2";// @2
    } else if (tCrka === '3' || tCrka === '#') {
        return "jkey3";// #3
    } else if (tCrka === '4' || tCrka === '$') {
        return "jkey4";// $4
    } else if (tCrka === '5' || tCrka === '%') {
        return "jkey5";// %5
    } else if (tCrka === '6' || tCrka === '^') {
        return "jkey6";// ^6
    } else if (tCrka === '7' || tCrka === '&') {
        return "jkey7";// &7
    } else if (tCrka === '8' || tCrka === '*') {
        return "jkey8";//* 8
    } else if (tCrka === '9' || tCrka === '(') {
        return "jkey9";// (9
    } else if (tCrka === '0' || tCrka === ')') {
        return "jkey0";// )0
    } else if (tCrka === '፟' || tCrka === '_') {
        return "jkeyminus";// _-
    } else if (tCrka === '=' || tCrka === '+') {
        return "jkey=";// +=
    } else if (tCrka === 'ቅ' || tCrka === 'q') {
        return "jkeyq";// Qቅ
    } else if (tCrka === 'ው' || tCrka === 'w') {
        return "jkeyw";// Wው
    } else if (tCrka === 'እ' || tCrka === 'ዕ' || tCrka === 'e' || endsWithE) {
        return "jkeye";// Eእ
    } else if (tCrka === 'ር' || tCrka === 'r') {
        return "jkeyr";// Rር
    } else if (tCrka === 'ት' || tCrka === 'ጥ' || tCrka === 't') {
        return "jkeyt";// Tት
    } else if (tCrka === 'ይ' || tCrka === 'y') {
        return "jkeyy";// Yይ
    } else if (tCrka === 'ኡ' || tCrka === 'ዑ' || endsWithU || tCrka === 'u') {
        return "jkeyu";// Uኡ
    } else if (tCrka === 'ኢ' || tCrka === 'ዒ' || endsWithI || tCrka === 'i') {
        return "jkeyi";// Iኢ
    } else if (tCrka === 'ኦ' || tCrka === 'ዖ' || endsWithO || tCrka === 'o') {
        return "jkeyo";// Oኦ
    } else if (tCrka === 'ፕ' || tCrka === 'ጵ' || tCrka === 'p') {
        return "jkeyp";// Pፕ
    } else if (tCrka === '[' || tCrka === '{') {
        return "jkey["; // {[
    } else if (tCrka === ']' || tCrka === '}') {
        return "jkey]";// }]
    } else if (tCrka === 'አ' || tCrka === 'ኣ' || endsWithA || tCrka === 'a') {
        return "jkeya";// Aአ
    } else if (tCrka === 'ስ' || tCrka === 'ጽ' || tCrka === 'ፅ' || tCrka === 'ሥ' || tCrka === 's') {
        return "jkeys";// Sስ
    } else if (tCrka === 'ድ' || tCrka === 'd') {
        return "jkeyd";// Dድ
    } else if (tCrka === 'ፍ' || tCrka === 'f') {
        return "jkeyf";// Fፍ
    } else if (tCrka === 'ግ' || tCrka === 'g') {
        return "jkeyg";// Gግ
    } else if (tCrka === 'ህ' || tCrka === 'ሕ' || tCrka === 'ኅ' || tCrka === 'h') {
        return "jkeyh";// Hህ
    } else if (tCrka === 'ጅ' || tCrka === 'j') {
        return "jkeyj";// Jጅ
    } else if (tCrka === 'ክ' || tCrka === 'ኽ' || tCrka === 'k') {
        return "jkeyk";// Kክ
    } else if (tCrka === 'ል' || tCrka === 'l') {
        return "jkeyl";// Lል
    } else if (tCrka === '፤' || tCrka === '፡' || tCrka === ';') {
        return "jkey፤";// ፡፤
    } else if (tCrka === '\'' || tCrka === '"' || tCrka === "ቍ" || tCrka === "ኍ" || tCrka === "ኵ" || tCrka === "ጕ") {
        return "jkey'";// "'
    } else if (tCrka === '\\' || tCrka === '|') {
        return "jkey\\";// |\
    } else if (tCrka === 'ዝ' || tCrka === 'ዥ' || tCrka === 'z') {
        return "jkeyz";// Zዝ
    } else if (tCrka === 'ሽ' || tCrka === 'x') {
        return "jkeyx";// Xሽ
    } else if (tCrka === 'ች' || tCrka === 'ጭ' || tCrka === 'c') {
        return "jkeyc";// Cች
    } else if (tCrka === 'ቭ' || tCrka === 'v') {
        return "jkeyv";// Vቭ
    } else if (tCrka === 'ብ' || tCrka === 'b') {
        return "jkeyb";// Bብ
    } else if (tCrka === 'ኝ' || tCrka === 'ን' || tCrka === 'n') {
        return "jkeyn";// Nን
    } else if (tCrka === 'ም' || tCrka === 'm') {
        return "jkeym";// Mም
    } else if (tCrka === '፣' || tCrka === '<' || tCrka === ',') {
        return "jkeycomma";// ፣
    } else if (tCrka === '።' || tCrka === '>' || tCrka === '.') {
        return "jkeyperiod";// ።
    } else if (tCrka === '/' || tCrka === '?') {
        return "jkey/";// ?/
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
    return str.length === 1 && str.match(/[!-ﻼ]/);
}

