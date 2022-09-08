
function _iframeDoc(iframe) {
	iframe = _get(iframe);
	return iframe.contentDocument || iframe.contentWindow.document;
}

var html, _direction = '';
if ((html = document.getElementsByTagName('html'))) {
	_direction = html[0].dir;
}

function _getInitHtml(themesPath, bodyClass, cssPath, cssData, documentMode) {
	var dmcls = !!documentMode ? 'class="ke-document-mode"' : '';
	var arr = [
		(_direction === '' ? '<html '+ dmcls +'>' : '<html '+ dmcls +' dir="' + _direction + '">'),
		'<head><meta charset="utf-8" /><title></title>',
		'<style>',
		'html {margin:0;padding:0;}',
		'body {margin:0;padding:5px;caret-color: #32c787;}',
		'body, td {font:12px/1.5 "微软雅黑", "Microsoft Yahei", "sans serif",tahoma,verdana,helvetica;}',
		'body, p, div {word-wrap: break-word;}',
		'p {margin:5px 0;}',
		'table {border-collapse:collapse;}',
		'img {border:0;}',
		'noscript {display:none;}',
		'table.ke-zeroborder td {border:1px dotted #AAA;}',
		'::selection {background-color: #32c787;color: white;}',
		'::-moz-selection {background-color: #32c787;color: white;}',
		
		'img {border: 2px solid transparent;max-width:100%}',
		'img:hover {border: 2px solid #32c787;}',

		'.ke-document-mode {background-color: #eeeeee;}',
		'.ke-content {',
		'	margin: 15px 20px;',
		'}',
		'.ke-document-mode .ke-content {',
		'	margin:30px;',
		'   min-height: 21cm;',
		'   padding: 1cm 2cm 2cm;',
		'   border: 1px #D3D3D3 solid;',
		'   background: white;',
		'   box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);',
		'}',
		'img.ke-upload {',
		'	max-width: 100%;',
		'	display: block;',
		'}',
		'video.ke-video, audio.ke-audio {',
		'	max-width: 100%;',
		'	background: #f1f3f4;',
		'	padding: 2px;',
		'	position:relative;',
		//'	pointer-events: none;',
		'}',
		'video.ke-video:focus, audio.ke-audio:focus,video.ke-video:active, audio.ke-audio:active{',
		'	outline-color: #32c787;',
		'	border-color: #32c787;',
		'}',
		'video.ke-video:active::before{',
		'	content:"";',
		'	position: absolute;',
		'	top: 0;',
		'	left: 0;',
		'	width: 100%;',
		'	height: 100%;',
		'	background: #32c787;',
		'	z-index: 1;',
		'}',
		'blockquote.ke-quote {',
		'	background: #eaeaea;',
		'	margin:8px 0;',
		'	padding: 10px 16px;',
		'	border-left: 5px solid #ddd;',
		'	box-sizing: border-box;',
		'	min-height: 50px;',
		'}',

		'.ke-code{',
			'background: #e6e6e6;',
			'border: 1px solid #dae2e6;',
			'border-top: 30px solid #dae2e6;',
			'position: relative;',
			'display: block;',
			'list-style-type: decimal;',
			'margin-block-start: 0;',
			'margin-block-end: 1em;',
			'margin-inline-start: 0px;',
			'margin-inline-end: 0px;',
			'padding-inline-start: 40px;',
		'}',
		'.ke-code::before{',
			'content: attr(title);',
			'position: absolute;',
			'top: -30px;',
			'left: 0;',
			'width: 100%;',
			'height: 30px;',
			'line-height: 30px;',
			'text-indent: 8px;',
			'font-size: 12px;',
			'color: #1c85b9;',
			'text-transform: uppercase;',
		'}',
		'.ke-code-line{',
			'list-style-type: decimal-leading-zero;',
			'*list-style-type: decimal;',
			'background: #fbfbfb;',
			'padding-left: 8px;',
			'font-family: Microsoft YaiHei;',
			'font-size: 14px;',
			'line-height: 24px;',
			'color: #5a5a5a;',
		'}',


		// 'img.ke-flash {',
		// '	border:1px solid #AAA;',
		// '	background-image:url(' + themesPath + 'common/flash.gif);',
		// '	background-position:center center;',
		// '	background-repeat:no-repeat;',
		// '	width:100px;',
		// '	height:100px;',
		// '}',
		// 'img.ke-rm {',
		// '	border:1px solid #AAA;',
		// '	background-image:url(' + themesPath + 'common/rm.gif);',
		// '	background-position:center center;',
		// '	background-repeat:no-repeat;',
		// '	width:100px;',
		// '	height:100px;',
		// '}',
		// 'img.ke-media {',
		// '	border:1px solid #AAA;',
		// '	background-image:url(' + themesPath + 'common/media.gif);',
		// '	background-position:center center;',
		// '	background-repeat:no-repeat;',
		// '	width:100px;',
		// '	height:100px;',
		// '}',
		'img.ke-anchor {',
		'	border:1px dashed #666;',
		'	width:16px;',
		'	height:16px;',
		'}',
		'.ke-script, .ke-noscript, .ke-display-none {',
		'	display:none;',
		'	font-size:0;',
		'	width:0;',
		'	height:0;',
		'}',
		'.ke-pagebreak {',
		'	border:1px dotted #AAA;',
		'	font-size:0;',
		'	height:2px;',
		'}',
		'pre{',
		'	white-space: pre-wrap;',
		'	white-space: -moz-pre-wrap;',
		'	white-space: -pre-wrap;',
		'	white-space: -o-pre-wrap;',
		'	overflow: auto;',
		'	word-break: break-all;',
		'	word-wrap: break-word;',
		'}',
		'</style>'
	];
	if (!_isArray(cssPath)) {
		cssPath = [cssPath];
	}
	_each(cssPath, function(i, path) {
		if (path) {
			arr.push('<link href="' + path + '" rel="stylesheet" />');
		}
	});
	if (cssData) {
		arr.push('<style>' + cssData + '</style>');
	}
	arr.push('</head><body ' + (bodyClass ? 'class="' + bodyClass + '"' : '') + ' author="MHalo"></body></html>');
	return arr.join('\n');
}

function _elementVal(knode, val) {
	if (knode.hasVal()) {
		if (val === undefined) {
			var html = knode.val();
			// 去除内容为空的p标签
			// https://github.com/kindsoft/kindeditor/pull/52
			html = html.replace(/(<(?:p|p\s[^>]*)>) *(<\/p>)/ig, '');
			return html;
		}
		return knode.val(val);
	}
	return knode.html(val);
}

// create KEdit class
function KEdit(options) {
	this.init(options);
}
_extend(KEdit, KWidget, {
	init : function(options) {
		var self = this;
		KEdit.parent.init.call(self, options);

		self.srcElement = K(options.srcElement);
		self.div.addClass('ke-edit');
		self.designMode = _undef(options.designMode, true);
		self.beforeGetHtml = options.beforeGetHtml;
		self.beforeSetHtml = options.beforeSetHtml;
		self.afterSetHtml = options.afterSetHtml;

		var themesPath = _undef(options.themesPath, ''),
			bodyClass = options.bodyClass,
			cssPath = options.cssPath,
			cssData = options.cssData,
			documentMode = _undef(options.documentMode, false);
			isDocumentDomain = location.protocol != 'res:' && location.host.replace(/:\d+/, '') !== document.domain,
			srcScript = ('document.open();' +
				(isDocumentDomain ? 'document.domain="' + document.domain + '";' : '') +
				'document.close();'),
			iframeSrc = _IE ? ' src="javascript:void(function(){' + encodeURIComponent(srcScript) + '}())"' : '';
		self.iframe = K('<iframe class="ke-edit-iframe" hidefocus="true" frameborder="0"' + iframeSrc + '></iframe>').css('width', '100%');
		self.textarea = K('<textarea class="ke-edit-textarea" hidefocus="true"></textarea>').css('width', '100%');
		self.tabIndex = isNaN(parseInt(options.tabIndex, 10)) ? self.srcElement.attr('tabindex') : parseInt(options.tabIndex, 10);
		self.iframe.attr('tabindex', self.tabIndex);
		self.textarea.attr('tabindex', self.tabIndex);

		if (self.width) {
			self.setWidth(self.width);
		}
		if (self.height) {
			self.setHeight(self.height);
		}
		if (self.designMode) {
			self.textarea.hide();
		} else {
			self.iframe.hide();
		}
		function ready() {
			var doc = _iframeDoc(self.iframe);
			doc.open();
			if (isDocumentDomain) {
				doc.domain = document.domain;
			}
			doc.write(_getInitHtml(themesPath, bodyClass, cssPath, cssData, documentMode));
			doc.close();
			self.win = self.iframe[0].contentWindow;
			self.doc = doc;
			var cmd = _cmd(doc);
			// add events
			self.afterChange(function(e) {
				cmd.selection();
			});
			// [WEBKIT] select an image after click the image
			if (_WEBKIT) {
				K(doc).click(function(e) {
					if (K(e.target).name === 'img') {
						cmd.selection(true);
						cmd.range.selectNode(e.target);
						cmd.select();
					}
				});
			}
			if (_IE) {
				// Fix bug: https://github.com/kindsoft/kindeditor/issues/53
				self._mousedownHandler = function() {
					var newRange = cmd.range.cloneRange();
					newRange.shrink();
					if (newRange.isControl()) {
						self.blur();
					}
				};
				K(document).mousedown(self._mousedownHandler);
				// [IE] bug: clear iframe when press backspase key
				K(doc).keydown(function(e) {
					if (e.which == 8) {
						cmd.selection();
						var rng = cmd.range;
						if (rng.isControl()) {
							rng.collapse(true);
							K(rng.startContainer.childNodes[rng.startOffset]).remove();
							e.preventDefault();
						}
					}
				});
			}
			self.cmd = cmd;
			var src_element = _elementVal(self.srcElement);
			self.html(_elementVal(self.srcElement));
			if (_IE) {
				doc.body.disabled = true;
				doc.body.contentEditable = true;
				doc.body.removeAttribute('disabled');
			} else {
				doc.designMode = 'on';
			}
			if (options.afterCreate) {
				options.afterCreate.call(self);
			}
			// MHalo
			// K(self.win).scroll(function(){
			// 	if(self.win.scrollY <= 0){
			// 		console.info('i`m scroll at top');
			// 		self.win.parent.window.focus();
			// 	}
			// 	if(self.win.scrollY + self.win.document.body.clientHeight >= self.win.document.body.scrollHeight){
			// 		console.info('i`m scroll at bottom');
			// 		self.win.parent.window.focus();
			// 	}
			// });
		}
		if (isDocumentDomain) {
			self.iframe.bind('load', function(e) {
				self.iframe.unbind('load');
				if (_IE) {
					ready();
				} else {
					setTimeout(ready, 0);
				}
			});
		}
		self.div.append(self.iframe);
		self.div.append(self.textarea);
		self.srcElement.hide();
		!isDocumentDomain && ready();
	},
	setWidth : function(val) {
		var self = this;
		val = _addUnit(val);
		self.width = val;
		self.div.css('width', val);
		return self;
	},
	setHeight : function(val) {
		var self = this;
		val = _addUnit(val);
		self.height = val;
		self.div.css('height', val);
		self.iframe.css('height', val);
		// 校正IE6和IE7的textarea高度
		if ((_IE && _V < 8) || _QUIRKS) {
			val = _addUnit(_removeUnit(val) - 2);
		}
		self.textarea.css('height', val);
		return self;
	},
	remove : function() {
		var self = this, doc = self.doc;
		// remove events
		K(doc.body).unbind();
		K(doc).unbind();
		K(self.win).unbind();
		if (self._mousedownHandler) {
			K(document).unbind('mousedown', self._mousedownHandler);
		}
		// remove elements
		_elementVal(self.srcElement, self.html());
		self.srcElement.show();
		// doc.write('');
		self.iframe.unbind();
		self.textarea.unbind();
		KEdit.parent.remove.call(self);
	},
	html : function(val, isFull) {
		var self = this, doc = self.doc;
		// design mode
		if (self.designMode) {
			var body = doc.body;
			// get
			if (val === undefined) {
				if (isFull) {
					val = '<!doctype html><html>' + body.parentNode.innerHTML + '</html>';
				} else {
					val = body.innerHTML;
				}
				if (self.beforeGetHtml) {
					val = self.beforeGetHtml(val);
				}
				// bugfix: Firefox自动生成一个br标签
				if (_GECKO && val == '<br />') {
					val = '';
				}
				return val;
			}
			// set
			if (self.beforeSetHtml) {
				val = self.beforeSetHtml(val);
			}
			// IE9 Bugfix: https://github.com/kindsoft/kindeditor/issues/62
			if (_IE && _V >= 9) {
				val = val.replace(/(<.*?checked=")checked(".*>)/ig, '$1$2');
			}
			K(body).html(val);
			if (self.afterSetHtml) {
				self.afterSetHtml();
			}
			return self;
		}
		// source mode
		if (val === undefined) {
			return self.textarea.val();
		}
		self.textarea.val(val);
		return self;
	},
	design : function(bool) {
		var self = this, val;
		if (bool === undefined ? !self.designMode : bool) {
			if (!self.designMode) {
				val = self.html();

				self.designMode = true;
				self.textarea.hide();

				self.html(val);

				// cache
				var iframe = self.iframe;
				var height = _removeUnit(self.height);

				iframe.height(height - 2);
				iframe.show();

				// safari iframe scrollbar hack
				setTimeout(function() {
					iframe.height(height);
				}, 0);
			}
		} else {
			if (self.designMode) {
				val = self.html();
				self.designMode = false;
				self.html(val);
				self.iframe.hide();
				self.textarea.show();
			}
		}
		return self.focus();
	},
	focus : function() {
		var self = this;
		self.designMode ? self.win.focus() : self.textarea[0].focus();
		return self;
	},
	blur : function() {
		var self = this;
		if (_IE) {
			var input = K('<input type="text" style="float:left;width:0;height:0;padding:0;margin:0;border:0;" value="" />', self.div);
			self.div.append(input);
			input[0].focus();
			input.remove();
		} else {
			self.designMode ? self.win.blur() : self.textarea[0].blur();
		}
		return self;
	},
	afterChange : function(fn) {
		var self = this, doc = self.doc, body = doc.body;
		K(doc).keyup(function(e) {
			if (!e.ctrlKey && !e.altKey && _CHANGE_KEY_MAP[e.which]) {
				fn(e);
			}
		});
		K(doc).mouseup(fn).contextmenu(fn);
		K(self.win).blur(fn);
		function timeoutHandler(e) {
			setTimeout(function() {
				fn(e);
			}, 1);
		}
		K(body).bind('paste', timeoutHandler);
		K(body).bind('cut', timeoutHandler);
		return self;
	}
});

function _edit(options) {
	return new KEdit(options);
}

K.EditClass = KEdit;
K.edit = _edit;
K.iframeDoc = _iframeDoc;