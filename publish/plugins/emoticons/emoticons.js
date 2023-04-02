/*******************************************************************************
* KindEditor - WYSIWYG HTML Editor for Internet
* Copyright (C) 2006-2022 kindeditor.net
*
* @author Roddy <luolonghao@gmail.com>
* @site http://kindeditor.net/
* @licence http://kindeditor.net/license.php
*******************************************************************************/

KindEditor.plugin('emoticons', function (K) {
    var self = this, name = 'emoticons',
        emojis = {
            faces: ['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '🥰', '😗', '😙', '😚', '🙂', '🤗', '🤩', '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮', '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤', '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '😞', '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬', '😰', '😱', '🥵', '🥶', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒', '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡', '🥳', '🥴', '🥺', '🤥', '🤫', '🤭', '🧐', '🤓'],
            hands: ['🤲', '👐', '🙌', '👏', '🤝', '👍', '👎', '👊', '✊', '🤛', '🤜', '🤞', '✌️', '🤟', '🤘', '👌', '👈', '👉', '👆', '👇', '☝️', '✋', '🤚', '🖐', '🖖', '👋', '🤙', '💪', '🦵', '🦶', '🖕', '✍️', '🙏', '👐🏻', '🙌🏻', '👏🏻', '🙏🏻', '👍🏻', '👎🏻', '👊🏻', '✊🏻', '🤛🏻', '🤜🏻', '🤞🏻', '✌🏻', '🤟🏻', '🤘🏻', '👌🏻', '👈🏻', '👉🏻', '👆🏻', '👇🏻', '☝🏻', '✋🏻', '🤚🏻', '🖐🏻', '🖖🏻', '👋🏻', '🤙🏻', '💪🏻', '🖕🏻', '✍🏻', '🤲🏾', '👐🏾', '🙌🏾', '👏🏾', '🙏🏾', '👍🏾', '👎🏾', '👊🏾', '✊🏾', '🤛🏾', '🤜🏾', '🤞🏾', '✌🏾', '🤟🏾', '🤘🏾', '👌🏾', '👈🏾', '👉🏾', '👆🏾', '👇🏾', '☝🏾', '✋🏾', '🤚🏾', '🖐🏾', '🖖🏾', '👋🏾', '🤙🏾', '💪🏾', '🖕🏾', '✍🏾'],
            avatar: ['👶🏻', '👦🏻', '👧🏻', '👨🏻', '👩🏻', '👱🏻‍♀️', '👱🏻', '👴🏻', '👵🏻', '👲🏻', '👳🏻‍♀️', '👳🏻', '👮🏻‍♀️', '👮🏻', '👷🏻‍♀️', '👷🏻', '💂🏻‍♀️', '💂🏻', '🕵🏻‍♀️', '🕵🏻', '👩🏻‍⚕️', '👨🏻‍⚕️', '👩🏻‍🌾', '👨🏻‍🌾', '👩🏻‍🍳', '👨🏻‍🍳', '👩🏻‍🎓', '👨🏻‍🎓', '👩🏻‍🎤', '👨🏻‍🎤', '👩🏻‍🏫', '👨🏻‍🏫', '👩🏻‍🏭', '👨🏻‍🏭', '👩🏻‍💻', '👨🏻‍💻', '👩🏻‍💼', '👨🏻‍💼', '👩🏻‍🔧', '👨🏻‍🔧', '👩🏻‍🔬', '👨🏻‍🔬', '👩🏻‍🎨', '👨🏻‍🎨', '👩🏻‍🚒', '👨🏻‍🚒', '👩🏻‍✈️', '👨🏻‍✈️', '👩🏻‍🚀', '👨🏻‍🚀', '👩🏻‍⚖️', '👨🏻‍⚖️', '🤶🏻', '🎅🏻', '👸🏻', '🤴🏻', '👰🏻', '🤵🏻', '👼🏻', '🤰🏻', '🙇🏻‍♀️', '🙇🏻', '💁🏻', '💁🏻‍♂️', '🙅🏻', '🙅🏻‍♂️', '🙆🏻', '🙆🏻‍♂️', '🙋🏻', '🙋🏻‍♂️', '🤦🏻‍♀️', '🤦🏻‍♂️', '🤷🏻‍♀️', '🤷🏻‍♂️', '🙎🏻', '🙎🏻‍♂️', '🙍🏻', '🙍🏻‍♂️', '💇🏻', '💇🏻‍♂️', '💆🏻', '💆🏻‍♂️', '🕴🏻', '💃🏻', '🕺🏻', '🚶🏻‍♀️', '🚶🏻', '🏃🏻‍♀️', '🏃🏻'],
            foods: ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🥭', '🥥', '🥝', '🍅', '🍆', '🥑', '🥦', '🥒', '🥬', '🌶', '🌽', '🥕', '🥔', '🍠', '🥐', '🍞', '🥖', '🥨', '🥯', '🧀', '🥚', '🍳', '🥞', '🥓', '🥩', '🍗', '🍖', '🌭', '🍔', '🍟', '🍕', '🥪', '🥙', '🌮', '🌯', '🥗', '🥘', '🥫', '🍝', '🍜', '🍲', '🍛', '🍣', '🍱', '🥟', '🍤', '🍙', '🍚', '🍘', '🍥', '🥮', '🥠', '🍢', '🍡', '🍧', '🍨', '🍦', '🥧', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🧂', '🍩', '🍪', '🌰', '🥜', '🍯', '🥛', '🍼', '☕️', '🍵', '🥤', '🍶', '🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🍾', '🥄', '🍴', '🍽', '🥣', '🥡', '🥢'],
            animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🦝', '🐻', '🐼', '🦘', '🦡', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦢', '🦅', '🦉', '🦚', '🦜', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐚', '🐞', '🐜', '🦗', '🕷', '🕸', '🦂', '🦟', '🦠', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🐘', '🦏', '🦛', '🐪', '🐫', '🦙', '🦒', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🐐', '🦌', '🐕', '🐩', '🐈', '🐓', '🦃', '🕊', '🐇', '🐁', '🐀', '🐿', '🦔', '🐾', '🐉', '🐲'],
            nature: ['🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄', '🌾', '💐', '🌷', '🌹', '🥀', '🌺', '🌸', '🌼', '🌻', '🌞', '🌝', '🌛', '🌜', '🌚', '🌕', '🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔', '🌙', '🌎', '🌍', '🌏', '💫', '⭐️', '🌟', '✨', '⚡️', '☄️', '💥', '🔥', '🌪', '🌈', '☀️', '🌤', '⛅️', '🌥', '☁️', '🌦', '🌧', '⛈', '🌩', '🌨', '❄️', '☃️', '⛄️', '🌬', '💨', '💧', '💦', '☔️', '☂️'],
            tags: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️', '♑️', '♒️', '♓️', '🆔', '🚻', '🚮', '🎦', '📶', '🈁', '🔣', 'ℹ️', '🔤', '🔡', '🔠', '🆖', '🆗', '🆙', '🆒', '🆕', '🆓', '0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '🔢', '#️⃣', '*️⃣', '⏏️', '▶️', '⏸', '⏯', '⏹', '⏺', '⏭', '⏮', '⏩', '⏪', '⏫', '⏬', '◀️', '🔼', '🔽', '➡️', '⬅️', '⬆️', '⬇️', '↗️', '↘️', '↙️', '↖️', '↕️', '↔️', '↪️', '↩️', '⤴️', '⤵️', '🔀', '🔁', '🔂', '🔄', '🔃'],
        },
        page = {
            cols: 10,
            total: Object.keys(emojis),
            current: 'faces',
            tags: {
                faces: '表情',
                hands: '手势',
                avatar: '头像',
                foods: '食物',
                animals: '动物',
                nature: '自然',
                tags: '符号'
            }
        };
	if(self.emojiConfig && self.emojiConfig instanceof Function){
		self.emojiConfig.call(null, emojis, page);
	}
    self.clickToolbar(name, function () {
        var elements = [];
        var wrapperDiv = K('<div class="ke-plugin-emoji"></div>'),
            menu = self.createMenu({
                name: name,
                beforeRemove: function () {
                    removeEvent();
                }
            });
		var iconLeft = K(".ke-toolbar .ke-icon-emoticons").pos().x;
		var iconWidth = K(".ke-toolbar .ke-icon-emoticons").width();
		var winWidth = K(document.body).width();
        menu.div.append(wrapperDiv);

        function bindCellEvent(cell, emoji) {
            cell.mouseover(function () {
                K(this).addClass('ke-on');
            });
            cell.mouseout(function () {
                K(this).removeClass('ke-on');
            });
            cell.click(function (e) {
                self.insertHtml(emoji).hideMenu();
                setTimeout(function(){
                    self.focus(); 
                    self.cmd.select();
                    self.cmd.selection(true);
                }, 1e2);
                e.stop();
            });
        }
        function emojiTable(key, parent) {
            var tableDom = document.createElement('ul');
            parent.append(tableDom);
            tableDom.className = 'ke-ul';
            //tableDom.cellPadding = 0;
            //tableDom.cellSpacing = 0;
            //tableDom.border = 0;
            var rows = Math.ceil(emojis[key].length / page.cols);
            var emoji;
            for (var i = 0; i < rows; i++) {
                var row = document.createElement('li');
                K(row).addClass('ke-li');
                K(tableDom).append(row)
                for (var j = 0; j < page.cols; j++) {
                    // var cell = K(row.insertCell(j));
                    // cell.addClass('ke-cell');
                    emoji = emojis[key][(page.cols * i) + j];
                    if (emoji === undefined) {
                        continue;
                    }
                    var span = K('<span class="ke-emoji">' + emoji + '</span>');
                    bindCellEvent(span, emoji);
                    K(row).append(span);
                    elements.push(span);
                }
            }
            return tableDom;
        }
        var table = emojiTable(page.current, wrapperDiv), pageDiv;
		var tableWidth = K(wrapperDiv).width();
		if((iconLeft + tableWidth) > winWidth){
			K(menu.div).css({
				left: iconLeft - (tableWidth - iconWidth) + 'px'
			})
		}
        function removeEvent() {
            K.each(elements, function () {
                this.unbind();
            });
        }
        function bindPageEvent(el, key) {
            el.click(function (e) {
                removeEvent();
                table.parentNode.removeChild(table);
                pageDiv.remove();
                table = emojiTable(key, wrapperDiv);
                createPageTable(key);
                page.current = key;
                e.stop();
            });
        }
        function createPageTable(tagname) {
            pageDiv = K('<div class="ke-page"></div>');
            wrapperDiv.append(pageDiv);
            for (var key in page.tags) {
                var keyname = page.tags[key];
                if (key !== tagname) {
                    var tag = K('<span class="ke-page-item"><a href="javascript:;">[' + keyname + ']</a></span>');
                    bindPageEvent(tag, key);
                    pageDiv.append(tag);
                    elements.push(tag);
                } else {
                    pageDiv.append(K('<span class="ke-page-item">[' + keyname + ']</span>'));
                }
                // pageDiv.append(K('@&nbsp;'));
            }
        }
        createPageTable(page.current);
		// console.info(K,menu.div)
    });
});