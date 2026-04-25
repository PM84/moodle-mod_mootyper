<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * This file defines the Cherokee(CWYV5.0) keyboard layout.
 *
 * @package    mod_mootyper
 * @copyright  2011 Jaka Luthar (jaka.luthar@gmail.com)
 * @copyright  2016 onwards AL Rachels (drachels@drachels.com)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

 require_once(dirname(dirname(dirname(dirname(__FILE__)))) . '/config.php');
 require_login($course, true, $cm);
?>
<div id="innerKeyboard" style="margin: 0px auto;display: inline-block;
<?php // phpcs:ignore
echo (isset($displaynone) && ($displaynone == true)) ? 'display:none;' : '';
?>
">
<div id="keyboard" class="keyboardback">Cherokee(CWYV5) Keyboard Layout<br>
    <section>
        <div class="mtrow" style='float: left; margin-left:5px; font-size: 15px !important; line-height: 15px'>
            <div id="jkeybackquote" class="normal" style='text-align:left;'>Ꮚ<br>`</b></div>
            <div id="jkey1" class="normal" style='text-align:left;'><b>Ꮁ<br>ᏣᎳᎩ</b></div>
            <div id="jkey2" class="normal" style='text-align:left;'><b>Ꮗ<br>ᎣᏏᏲ</b></div>
            <div id="jkey3" class="normal" style='text-align:left;'><b>Ꮷ<br>ᏩᏙ</b></div>
            <div id="jkey4" class="normal" style='text-align:left;'><b>Ꮀ<br>Ꮩ</b></div>
            <div id="jkey5" class="normal" style='text-align:left;'><b>Ꮉ<br>Ꮶ</b></div>
            <div id="jkey6" class="normal" style='text-align:left;'><b>Ꮭ<br>Ꮬ</b></div>
            <div id="jkey7" class="normal" style='text-align:left;'><b>Ꮱ<br>Ꮛ</b></div>
            <div id="jkey8" class="normal" style='text-align:left;'><b>Ꮊ<br>Ꮦ</b></div>
            <div id="jkey9" class="normal" style='text-align:left;'><b>(<br>Ꮢ</b></div>
            <div id="jkey0" class="normal" style='text-align:left;'><b>)<br>Ꮔ</b></div>
            <div id="jkeyminus" class="normal" style='text-align:left;'><b>Ꮌ<br>Ꮏ</b></div>
            <div id="jkeyequals" class="normal" style='text-align:left;'><b>Ꮍ<br>Ᏻ</b></div>
            <div id="jkeybackspace" class="normal" style="width: 95px;">Backspace</div>
        </div>
        <div style="float: left;">
            <div class="mtrow" style='float: left; margin-left:5px; font-size: 15px !important; line-height: 15px'>
                <div id="jkeytab" class="normal" style="width: 60px;">Tab</div>
                <div id="jkeyq" class="normal" style='text-align:left;'>Ꮖ<br>Ꭺ</div>
                <div id="jkeyw" class="normal" style='text-align:left;'>Ꮻ<br>Ꮃ</div>
                <div id="jkeye" class="normal" style='text-align:left;'>Ꮳ<br>Ꭱ</div>
                <div id="jkeyr" class="normal" style='text-align:left;'>Ꮟ<br>Ꮫ</div>
                <div id="jkeyt" class="normal" style='text-align:left;'>Ꮨ<br>Ꮤ</div>
                <div id="jkeyy" class="normal" style='text-align:left;'>Ᏺ<br>Ꮿ</div>
                <div id="jkeyu" class="normal" style='text-align:left;'>Ꭽ<br>Ꭴ</div>
                <div id="jkeyi" class="normal" style='text-align:left;'>Ᏹ<br>Ꭲ</div>
                <div id="jkeyo" class="normal" style='text-align:left;'>Ꮼ<br>Ꭳ</div>
                <div id="jkeyp" class="normal" style='text-align:left;'>Ꮺ<br>Ꮑ</div>
                <div id="jkeybracketl" class="normal" style='text-align:left;'>Ꮡ<br>Ꮥ</div>
                <div id="jkeybracketr" class="normal" style='text-align:left;'>Ꮴ<br>Ꮆ</div>
            </div>
            <span id="jkeyenter" class="normal" style="width: 50px; margin-right:5px; float: right; height: 85px;">Enter</span>
            <div class="mtrow" style='float: left; margin-left:5px; font-size: 15px !important; line-height: 15px'>
                <div id="jkeycaps" class="normal" style="width: 80px;  font-size: 12px !important;">Caps Lock</div>
                <div id="jkeya" class="finger4" style='text-align:left;'>Ꮜ<br>Ꭰ</div>
                <div id="jkeys" class="finger3" style='text-align:left;'>Ꮞ<br>Ꮝ</div>
                <div id="jkeyd" class="finger2" style='text-align:left;'>Ꮠ<br>Ꮧ</div>
                <div id="jkeyf" class="finger1" style='text-align:left;'>Ꮘ<br>Ꭹ</div>
                <div id="jkeyg" class="normal" style='text-align:left;'>Ꮵ<br>Ꭶ</div>
                <div id="jkeyh" class="normal" style='text-align:left;'>Ꮂ<br>Ꭿ</div>
                <div id="jkeyj" class="finger1" style='text-align:left;'>Ꭻ<br>Ꮪ</div>
                <div id="jkeyk" class="finger2" style='text-align:left;'>Ꭷ<br>Ꮈ</div>
                <div id="jkeyl" class="finger3" style='text-align:left;'>Ꭾ<br>Ꮅ</div>
                <div id="jkeysemicolon" class="finger4" style='text-align:left;'><b>Ꮰ<br>Ꮸ</b></div>
                <div id="jkeycrtica" class="normal" style='text-align:left;'><b>"<br>'</b></div>
                <div id="jkeybackslash" class="normal" style='text-align:left;'>Ꮾ<br>Ꮹ</div>
            </div>
        </div>
        <div class="mtrow" style='float: left; margin-left:5px; font-size: 15px !important; line-height: 15px'>
            <div id="jkeyshiftl" class="normal" style="width: 60px;">Shift</div>
                <div id="jkey#" class="normal" style='text-align:left;'>&nbsp;<br>&nbsp;</div>
            <div id="jkeyz" class="normal" style='text-align:left;'>Ꮓ<br>Ꭼ</div>
            <div id="jkeyx" class="normal" style='text-align:left;'>Ꮽ<br>Ᏼ</div>
            <div id="jkeyc" class="normal" style='text-align:left;'>Ꮯ<br>Ꮣ</div>
            <div id="jkeyv" class="normal" style='text-align:left;'>Ꮮ<br>Ꭵ</div>
            <div id="jkeyb" class="normal" style='text-align:left;'>Ᏸ<br>Ꭸ</div>
            <div id="jkeyn" class="normal" style='text-align:left;'>Ꮋ<br>Ꮎ</div>
            <div id="jkeym" class="normal" style='text-align:left;'>Ꮇ<br>Ꮕ</div>
            <div id="jkeycomma" class="normal" style='text-align:left;'>Ꮲ<br>,</div>
            <div id="jkeyperiod" class="normal" style='text-align:left;'>Ꮄ<br>.</div>
            <div id="jkeyslash" class="normal" style='text-align:left;'>Ꮙ<br>Ꮒ</div>
            <div id="jkeyshiftr" class="normal" style="width: 115px;">Shift</div>
        </div>
        <div class="mtrow" style='float: left; margin-left:5px;'>
            <div id="jkeyctrll" class="normal" style="width: 60px;">Ctrl</div>
            <div id="jkeyfn" class="normal" style="width: 50px;">Fn</div>
            <div id="jkeyalt" class="normal" style="width: 50px;">Alt</div>
            <div id="jkeyspace" class="normal" style="width: 295px;">Space</div>
            <div id="jkeyaltgr" class="normal" style="width: 50px;">Alt</div>
            <div id="jkeyfn" class="normal" style="width: 50px;">Fn</div>
            <div id="jkeyctrlr" class="normal" style="width: 60px;">Ctrl</div>
        </div>
</section>
</div>
</div>
