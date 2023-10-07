import{a$ as Dt,c as _t,aL as I,l as ct,s as zt,g as Et,x as It,y as vt,a as Bt,b as Vt,m as wt,A as Rt,h as yt,i as Wt,d as Nt}from"./mermaid.core-5bec59d2.js";import{l as St}from"./linear-ed829164.js";import"./app-362320a1.js";import"./commonjsHelpers-de833af9.js";import"./init-77b53fdd.js";var qt=function(){var e=function(K,n,r,d){for(r=r||{},d=K.length;d--;r[K[d]]=n);return r},a=[1,3],c=[1,5],f=[1,6],g=[1,7],x=[1,8],h=[1,10],p=[1,5,14,16,18,20,21,26,28,29,30,31,32,38,39,40,41,47,48,50,51,52,53,54,55,56,57,58,59,60],s=[1,5,7,14,16,18,20,21,26,28,29,30,31,32,38,39,40,41,47,48,50,51,52,53,54,55,56,57,58,59,60],l=[38,39,40],y=[2,8],B=[1,19],W=[1,23],L=[1,24],C=[1,25],N=[1,26],M=[1,27],X=[1,29],D=[1,30],it=[1,31],at=[1,32],nt=[1,33],rt=[1,34],Q=[1,37],U=[1,38],T=[1,39],_=[1,40],t=[1,41],m=[1,42],b=[1,43],A=[1,44],S=[1,45],v=[1,46],k=[1,47],F=[1,48],P=[1,49],Tt=[1,52],O=[1,67],Y=[1,68],z=[5,23,27,38,39,40,50,51,52,53,54,55,56,57,58,59,60,61],ht=[5,7,38,39,40,41],dt={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,SPACE:5,directive:6,QUADRANT:7,document:8,line:9,statement:10,axisDetails:11,quadrantDetails:12,points:13,title:14,title_value:15,acc_title:16,acc_title_value:17,acc_descr:18,acc_descr_value:19,acc_descr_multiline_value:20,section:21,text:22,point_start:23,point_x:24,point_y:25,"X-AXIS":26,"AXIS-TEXT-DELIMITER":27,"Y-AXIS":28,QUADRANT_1:29,QUADRANT_2:30,QUADRANT_3:31,QUADRANT_4:32,openDirective:33,typeDirective:34,closeDirective:35,":":36,argDirective:37,NEWLINE:38,SEMI:39,EOF:40,open_directive:41,type_directive:42,arg_directive:43,close_directive:44,alphaNumToken:45,textNoTagsToken:46,STR:47,MD_STR:48,alphaNum:49,PUNCTUATION:50,AMP:51,NUM:52,ALPHA:53,COMMA:54,PLUS:55,EQUALS:56,MULT:57,DOT:58,BRKT:59,UNDERSCORE:60,MINUS:61,$accept:0,$end:1},terminals_:{2:"error",5:"SPACE",7:"QUADRANT",14:"title",15:"title_value",16:"acc_title",17:"acc_title_value",18:"acc_descr",19:"acc_descr_value",20:"acc_descr_multiline_value",21:"section",23:"point_start",24:"point_x",25:"point_y",26:"X-AXIS",27:"AXIS-TEXT-DELIMITER",28:"Y-AXIS",29:"QUADRANT_1",30:"QUADRANT_2",31:"QUADRANT_3",32:"QUADRANT_4",36:":",38:"NEWLINE",39:"SEMI",40:"EOF",41:"open_directive",42:"type_directive",43:"arg_directive",44:"close_directive",47:"STR",48:"MD_STR",50:"PUNCTUATION",51:"AMP",52:"NUM",53:"ALPHA",54:"COMMA",55:"PLUS",56:"EQUALS",57:"MULT",58:"DOT",59:"BRKT",60:"UNDERSCORE",61:"MINUS"},productions_:[0,[3,2],[3,2],[3,2],[3,2],[8,0],[8,2],[9,2],[10,0],[10,2],[10,1],[10,1],[10,1],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[13,4],[11,4],[11,3],[11,2],[11,4],[11,3],[11,2],[12,2],[12,2],[12,2],[12,2],[6,3],[6,5],[4,1],[4,1],[4,1],[33,1],[34,1],[37,1],[35,1],[22,1],[22,2],[22,1],[22,1],[49,1],[49,2],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[46,1],[46,1],[46,1]],performAction:function(n,r,d,o,q,i,et){var u=i.length-1;switch(q){case 13:this.$=i[u].trim(),o.setDiagramTitle(this.$);break;case 14:this.$=i[u].trim(),o.setAccTitle(this.$);break;case 15:case 16:this.$=i[u].trim(),o.setAccDescription(this.$);break;case 17:o.addSection(i[u].substr(8)),this.$=i[u].substr(8);break;case 19:o.addPoint(i[u-3],i[u-1],i[u]);break;case 20:o.setXAxisLeftText(i[u-2]),o.setXAxisRightText(i[u]);break;case 21:i[u-1].text+=" ⟶ ",o.setXAxisLeftText(i[u-1]);break;case 22:o.setXAxisLeftText(i[u]);break;case 23:o.setYAxisBottomText(i[u-2]),o.setYAxisTopText(i[u]);break;case 24:i[u-1].text+=" ⟶ ",o.setYAxisBottomText(i[u-1]);break;case 25:o.setYAxisBottomText(i[u]);break;case 26:o.setQuadrant1Text(i[u]);break;case 27:o.setQuadrant2Text(i[u]);break;case 28:o.setQuadrant3Text(i[u]);break;case 29:o.setQuadrant4Text(i[u]);break;case 35:o.parseDirective("%%{","open_directive");break;case 36:o.parseDirective(i[u],"type_directive");break;case 37:i[u]=i[u].trim().replace(/'/g,'"'),o.parseDirective(i[u],"arg_directive");break;case 38:o.parseDirective("}%%","close_directive","quadrantChart");break;case 39:this.$={text:i[u],type:"text"};break;case 40:this.$={text:i[u-1].text+""+i[u],type:i[u-1].type};break;case 41:this.$={text:i[u],type:"text"};break;case 42:this.$={text:i[u],type:"markdown"};break;case 43:this.$=i[u];break;case 44:this.$=i[u-1]+""+i[u];break}},table:[{3:1,4:2,5:a,6:4,7:c,33:9,38:f,39:g,40:x,41:h},{1:[3]},{3:11,4:2,5:a,6:4,7:c,33:9,38:f,39:g,40:x,41:h},{3:12,4:2,5:a,6:4,7:c,33:9,38:f,39:g,40:x,41:h},{3:13,4:2,5:a,6:4,7:c,33:9,38:f,39:g,40:x,41:h},e(p,[2,5],{8:14}),e(s,[2,32]),e(s,[2,33]),e(s,[2,34]),{34:15,42:[1,16]},{42:[2,35]},{1:[2,1]},{1:[2,2]},{1:[2,3]},e(l,y,{33:9,9:17,10:18,11:20,12:21,13:22,6:28,22:35,45:36,1:[2,4],5:B,14:W,16:L,18:C,20:N,21:M,26:X,28:D,29:it,30:at,31:nt,32:rt,41:h,47:Q,48:U,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P}),{35:50,36:[1,51],44:Tt},e([36,44],[2,36]),e(p,[2,6]),{4:53,38:f,39:g,40:x},e(l,y,{33:9,11:20,12:21,13:22,6:28,22:35,45:36,10:54,5:B,14:W,16:L,18:C,20:N,21:M,26:X,28:D,29:it,30:at,31:nt,32:rt,41:h,47:Q,48:U,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P}),e(l,[2,10]),e(l,[2,11]),e(l,[2,12]),{15:[1,55]},{17:[1,56]},{19:[1,57]},e(l,[2,16]),e(l,[2,17]),e(l,[2,18]),{22:58,45:36,47:Q,48:U,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P},{22:59,45:36,47:Q,48:U,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P},{22:60,45:36,47:Q,48:U,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P},{22:61,45:36,47:Q,48:U,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P},{22:62,45:36,47:Q,48:U,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P},{22:63,45:36,47:Q,48:U,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P},{5:O,23:[1,64],45:66,46:65,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P,61:Y},e(z,[2,39]),e(z,[2,41]),e(z,[2,42]),e(z,[2,45]),e(z,[2,46]),e(z,[2,47]),e(z,[2,48]),e(z,[2,49]),e(z,[2,50]),e(z,[2,51]),e(z,[2,52]),e(z,[2,53]),e(z,[2,54]),e(z,[2,55]),e(ht,[2,30]),{37:69,43:[1,70]},e(ht,[2,38]),e(p,[2,7]),e(l,[2,9]),e(l,[2,13]),e(l,[2,14]),e(l,[2,15]),e(l,[2,22],{46:65,45:66,5:O,27:[1,71],50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P,61:Y}),e(l,[2,25],{46:65,45:66,5:O,27:[1,72],50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P,61:Y}),e(l,[2,26],{46:65,45:66,5:O,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P,61:Y}),e(l,[2,27],{46:65,45:66,5:O,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P,61:Y}),e(l,[2,28],{46:65,45:66,5:O,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P,61:Y}),e(l,[2,29],{46:65,45:66,5:O,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P,61:Y}),{24:[1,73]},e(z,[2,40]),e(z,[2,56]),e(z,[2,57]),e(z,[2,58]),{35:74,44:Tt},{44:[2,37]},e(l,[2,21],{45:36,22:75,47:Q,48:U,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P}),e(l,[2,24],{45:36,22:76,47:Q,48:U,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P}),{25:[1,77]},e(ht,[2,31]),e(l,[2,20],{46:65,45:66,5:O,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P,61:Y}),e(l,[2,23],{46:65,45:66,5:O,50:T,51:_,52:t,53:m,54:b,55:A,56:S,57:v,58:k,59:F,60:P,61:Y}),e(l,[2,19])],defaultActions:{10:[2,35],11:[2,1],12:[2,2],13:[2,3],70:[2,37]},parseError:function(n,r){if(r.recoverable)this.trace(n);else{var d=new Error(n);throw d.hash=r,d}},parse:function(n){var r=this,d=[0],o=[],q=[null],i=[],et=this.table,u="",st=0,mt=0,Ft=2,bt=1,Pt=i.slice.call(arguments,1),E=Object.create(this.lexer),Z={yy:{}};for(var xt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,xt)&&(Z.yy[xt]=this.yy[xt]);E.setInput(n,Z.yy),Z.yy.lexer=E,Z.yy.parser=this,typeof E.yylloc>"u"&&(E.yylloc={});var ft=E.yylloc;i.push(ft);var Lt=E.options&&E.options.ranges;typeof Z.yy.parseError=="function"?this.parseError=Z.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Ct(){var $;return $=o.pop()||E.lex()||bt,typeof $!="number"&&($ instanceof Array&&(o=$,$=o.pop()),$=r.symbols_[$]||$),$}for(var R,J,H,gt,tt={},lt,j,At,ot;;){if(J=d[d.length-1],this.defaultActions[J]?H=this.defaultActions[J]:((R===null||typeof R>"u")&&(R=Ct()),H=et[J]&&et[J][R]),typeof H>"u"||!H.length||!H[0]){var pt="";ot=[];for(lt in et[J])this.terminals_[lt]&&lt>Ft&&ot.push("'"+this.terminals_[lt]+"'");E.showPosition?pt="Parse error on line "+(st+1)+`:
`+E.showPosition()+`
Expecting `+ot.join(", ")+", got '"+(this.terminals_[R]||R)+"'":pt="Parse error on line "+(st+1)+": Unexpected "+(R==bt?"end of input":"'"+(this.terminals_[R]||R)+"'"),this.parseError(pt,{text:E.match,token:this.terminals_[R]||R,line:E.yylineno,loc:ft,expected:ot})}if(H[0]instanceof Array&&H.length>1)throw new Error("Parse Error: multiple actions possible at state: "+J+", token: "+R);switch(H[0]){case 1:d.push(R),q.push(E.yytext),i.push(E.yylloc),d.push(H[1]),R=null,mt=E.yyleng,u=E.yytext,st=E.yylineno,ft=E.yylloc;break;case 2:if(j=this.productions_[H[1]][1],tt.$=q[q.length-j],tt._$={first_line:i[i.length-(j||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(j||1)].first_column,last_column:i[i.length-1].last_column},Lt&&(tt._$.range=[i[i.length-(j||1)].range[0],i[i.length-1].range[1]]),gt=this.performAction.apply(tt,[u,mt,st,Z.yy,H[1],q,i].concat(Pt)),typeof gt<"u")return gt;j&&(d=d.slice(0,-1*j*2),q=q.slice(0,-1*j),i=i.slice(0,-1*j)),d.push(this.productions_[H[1]][0]),q.push(tt.$),i.push(tt._$),At=et[d[d.length-2]][d[d.length-1]],d.push(At);break;case 3:return!0}}return!0}},kt=function(){var K={EOF:1,parseError:function(r,d){if(this.yy.parser)this.yy.parser.parseError(r,d);else throw new Error(r)},setInput:function(n,r){return this.yy=r||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var n=this._input[0];this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;var r=n.match(/(?:\r\n?|\n).*/g);return r?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},unput:function(n){var r=n.length,d=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-r),this.offset-=r;var o=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var q=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===o.length?this.yylloc.first_column:0)+o[o.length-d.length].length-d[0].length:this.yylloc.first_column-r},this.options.ranges&&(this.yylloc.range=[q[0],q[0]+this.yyleng-r]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(n){this.unput(this.match.slice(n))},pastInput:function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var n=this.pastInput(),r=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+r+"^"},test_match:function(n,r){var d,o,q;if(this.options.backtrack_lexer&&(q={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(q.yylloc.range=this.yylloc.range.slice(0))),o=n[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],d=this.performAction.call(this,this.yy,this,r,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),d)return d;if(this._backtrack){for(var i in q)this[i]=q[i];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var n,r,d,o;this._more||(this.yytext="",this.match="");for(var q=this._currentRules(),i=0;i<q.length;i++)if(d=this._input.match(this.rules[q[i]]),d&&(!r||d[0].length>r[0].length)){if(r=d,o=i,this.options.backtrack_lexer){if(n=this.test_match(d,q[i]),n!==!1)return n;if(this._backtrack){r=!1;continue}else return!1}else if(!this.options.flex)break}return r?(n=this.test_match(r,q[o]),n!==!1?n:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var r=this.next();return r||this.lex()},begin:function(r){this.conditionStack.push(r)},popState:function(){var r=this.conditionStack.length-1;return r>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(r){return r=this.conditionStack.length-1-Math.abs(r||0),r>=0?this.conditionStack[r]:"INITIAL"},pushState:function(r){this.begin(r)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(r,d,o,q){switch(o){case 0:return this.begin("open_directive"),41;case 1:return this.begin("type_directive"),42;case 2:return this.popState(),this.begin("arg_directive"),36;case 3:return this.popState(),this.popState(),44;case 4:return 43;case 5:break;case 6:break;case 7:return 38;case 8:break;case 9:return this.begin("title"),14;case 10:return this.popState(),"title_value";case 11:return this.begin("acc_title"),16;case 12:return this.popState(),"acc_title_value";case 13:return this.begin("acc_descr"),18;case 14:return this.popState(),"acc_descr_value";case 15:this.begin("acc_descr_multiline");break;case 16:this.popState();break;case 17:return"acc_descr_multiline_value";case 18:return 26;case 19:return 28;case 20:return 27;case 21:return 29;case 22:return 30;case 23:return 31;case 24:return 32;case 25:this.begin("md_string");break;case 26:return"MD_STR";case 27:this.popState();break;case 28:this.begin("string");break;case 29:this.popState();break;case 30:return"STR";case 31:return this.begin("point_start"),23;case 32:return this.begin("point_x"),24;case 33:this.popState();break;case 34:this.popState(),this.begin("point_y");break;case 35:return this.popState(),25;case 36:return 7;case 37:return 53;case 38:return"COLON";case 39:return 55;case 40:return 54;case 41:return 56;case 42:return 56;case 43:return 57;case 44:return 59;case 45:return 60;case 46:return 58;case 47:return 51;case 48:return 61;case 49:return 52;case 50:return 5;case 51:return 39;case 52:return 50;case 53:return 40}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?: *x-axis *)/i,/^(?: *y-axis *)/i,/^(?: *--+> *)/i,/^(?: *quadrant-1 *)/i,/^(?: *quadrant-2 *)/i,/^(?: *quadrant-3 *)/i,/^(?: *quadrant-4 *)/i,/^(?:["][`])/i,/^(?:[^`"]+)/i,/^(?:[`]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\s*:\s*\[\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?:\s*\] *)/i,/^(?:\s*,\s*)/i,/^(?:(1)|(0(.\d+)?))/i,/^(?: *quadrantChart *)/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s)/i,/^(?:;)/i,/^(?:[!"#$%&'*+,-.`?\\_/])/i,/^(?:$)/i],conditions:{point_y:{rules:[35],inclusive:!1},point_x:{rules:[34],inclusive:!1},point_start:{rules:[32,33],inclusive:!1},acc_descr_multiline:{rules:[16,17],inclusive:!1},acc_descr:{rules:[14],inclusive:!1},acc_title:{rules:[12],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},title:{rules:[10],inclusive:!1},md_string:{rules:[26,27],inclusive:!1},string:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,11,13,15,18,19,20,21,22,23,24,25,28,31,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],inclusive:!0}}};return K}();dt.lexer=kt;function ut(){this.yy={}}return ut.prototype=dt,dt.Parser=ut,new ut}();qt.parser=qt;const Ut=qt,w=Dt();class Qt{constructor(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData()}getDefaultData(){return{titleText:"",quadrant1Text:"",quadrant2Text:"",quadrant3Text:"",quadrant4Text:"",xAxisLeftText:"",xAxisRightText:"",yAxisBottomText:"",yAxisTopText:"",points:[]}}getDefaultConfig(){var a,c,f,g,x,h,p,s,l,y,B,W,L,C,N,M,X,D;return{showXAxis:!0,showYAxis:!0,showTitle:!0,chartHeight:((a=I.quadrantChart)==null?void 0:a.chartWidth)||500,chartWidth:((c=I.quadrantChart)==null?void 0:c.chartHeight)||500,titlePadding:((f=I.quadrantChart)==null?void 0:f.titlePadding)||10,titleFontSize:((g=I.quadrantChart)==null?void 0:g.titleFontSize)||20,quadrantPadding:((x=I.quadrantChart)==null?void 0:x.quadrantPadding)||5,xAxisLabelPadding:((h=I.quadrantChart)==null?void 0:h.xAxisLabelPadding)||5,yAxisLabelPadding:((p=I.quadrantChart)==null?void 0:p.yAxisLabelPadding)||5,xAxisLabelFontSize:((s=I.quadrantChart)==null?void 0:s.xAxisLabelFontSize)||16,yAxisLabelFontSize:((l=I.quadrantChart)==null?void 0:l.yAxisLabelFontSize)||16,quadrantLabelFontSize:((y=I.quadrantChart)==null?void 0:y.quadrantLabelFontSize)||16,quadrantTextTopPadding:((B=I.quadrantChart)==null?void 0:B.quadrantTextTopPadding)||5,pointTextPadding:((W=I.quadrantChart)==null?void 0:W.pointTextPadding)||5,pointLabelFontSize:((L=I.quadrantChart)==null?void 0:L.pointLabelFontSize)||12,pointRadius:((C=I.quadrantChart)==null?void 0:C.pointRadius)||5,xAxisPosition:((N=I.quadrantChart)==null?void 0:N.xAxisPosition)||"top",yAxisPosition:((M=I.quadrantChart)==null?void 0:M.yAxisPosition)||"left",quadrantInternalBorderStrokeWidth:((X=I.quadrantChart)==null?void 0:X.quadrantInternalBorderStrokeWidth)||1,quadrantExternalBorderStrokeWidth:((D=I.quadrantChart)==null?void 0:D.quadrantExternalBorderStrokeWidth)||2}}getDefaultThemeConfig(){return{quadrant1Fill:w.quadrant1Fill,quadrant2Fill:w.quadrant2Fill,quadrant3Fill:w.quadrant3Fill,quadrant4Fill:w.quadrant4Fill,quadrant1TextFill:w.quadrant1TextFill,quadrant2TextFill:w.quadrant2TextFill,quadrant3TextFill:w.quadrant3TextFill,quadrant4TextFill:w.quadrant4TextFill,quadrantPointFill:w.quadrantPointFill,quadrantPointTextFill:w.quadrantPointTextFill,quadrantXAxisTextFill:w.quadrantXAxisTextFill,quadrantYAxisTextFill:w.quadrantYAxisTextFill,quadrantTitleFill:w.quadrantTitleFill,quadrantInternalBorderStrokeFill:w.quadrantInternalBorderStrokeFill,quadrantExternalBorderStrokeFill:w.quadrantExternalBorderStrokeFill}}clear(){this.config=this.getDefaultConfig(),this.themeConfig=this.getDefaultThemeConfig(),this.data=this.getDefaultData(),ct.info("clear called")}setData(a){this.data={...this.data,...a}}addPoints(a){this.data.points=[...a,...this.data.points]}setConfig(a){ct.trace("setConfig called with: ",a),this.config={...this.config,...a}}setThemeConfig(a){ct.trace("setThemeConfig called with: ",a),this.themeConfig={...this.themeConfig,...a}}calculateSpace(a,c,f,g){const x=this.config.xAxisLabelPadding*2+this.config.xAxisLabelFontSize,h={top:a==="top"&&c?x:0,bottom:a==="bottom"&&c?x:0},p=this.config.yAxisLabelPadding*2+this.config.yAxisLabelFontSize,s={left:this.config.yAxisPosition==="left"&&f?p:0,right:this.config.yAxisPosition==="right"&&f?p:0},l=this.config.titleFontSize+this.config.titlePadding*2,y={top:g?l:0},B=this.config.quadrantPadding+s.left,W=this.config.quadrantPadding+h.top+y.top,L=this.config.chartWidth-this.config.quadrantPadding*2-s.left-s.right,C=this.config.chartHeight-this.config.quadrantPadding*2-h.top-h.bottom-y.top,N=L/2,M=C/2;return{xAxisSpace:h,yAxisSpace:s,titleSpace:y,quadrantSpace:{quadrantLeft:B,quadrantTop:W,quadrantWidth:L,quadrantHalfWidth:N,quadrantHeight:C,quadrantHalfHeight:M}}}getAxisLabels(a,c,f,g){const{quadrantSpace:x,titleSpace:h}=g,{quadrantHalfHeight:p,quadrantHeight:s,quadrantLeft:l,quadrantHalfWidth:y,quadrantTop:B,quadrantWidth:W}=x,L=this.data.points.length===0,C=[];return this.data.xAxisLeftText&&c&&C.push({text:this.data.xAxisLeftText,fill:this.themeConfig.quadrantXAxisTextFill,x:l+(L?y/2:0),y:a==="top"?this.config.xAxisLabelPadding+h.top:this.config.xAxisLabelPadding+B+s+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:L?"center":"left",horizontalPos:"top",rotation:0}),this.data.xAxisRightText&&c&&C.push({text:this.data.xAxisRightText,fill:this.themeConfig.quadrantXAxisTextFill,x:l+y+(L?y/2:0),y:a==="top"?this.config.xAxisLabelPadding+h.top:this.config.xAxisLabelPadding+B+s+this.config.quadrantPadding,fontSize:this.config.xAxisLabelFontSize,verticalPos:L?"center":"left",horizontalPos:"top",rotation:0}),this.data.yAxisBottomText&&f&&C.push({text:this.data.yAxisBottomText,fill:this.themeConfig.quadrantYAxisTextFill,x:this.config.yAxisPosition==="left"?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+l+W+this.config.quadrantPadding,y:B+s-(L?p/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:L?"center":"left",horizontalPos:"top",rotation:-90}),this.data.yAxisTopText&&f&&C.push({text:this.data.yAxisTopText,fill:this.themeConfig.quadrantYAxisTextFill,x:this.config.yAxisPosition==="left"?this.config.yAxisLabelPadding:this.config.yAxisLabelPadding+l+W+this.config.quadrantPadding,y:B+p-(L?p/2:0),fontSize:this.config.yAxisLabelFontSize,verticalPos:L?"center":"left",horizontalPos:"top",rotation:-90}),C}getQuadrants(a){const{quadrantSpace:c}=a,{quadrantHalfHeight:f,quadrantLeft:g,quadrantHalfWidth:x,quadrantTop:h}=c,p=[{text:{text:this.data.quadrant1Text,fill:this.themeConfig.quadrant1TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:g+x,y:h,width:x,height:f,fill:this.themeConfig.quadrant1Fill},{text:{text:this.data.quadrant2Text,fill:this.themeConfig.quadrant2TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:g,y:h,width:x,height:f,fill:this.themeConfig.quadrant2Fill},{text:{text:this.data.quadrant3Text,fill:this.themeConfig.quadrant3TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:g,y:h+f,width:x,height:f,fill:this.themeConfig.quadrant3Fill},{text:{text:this.data.quadrant4Text,fill:this.themeConfig.quadrant4TextFill,x:0,y:0,fontSize:this.config.quadrantLabelFontSize,verticalPos:"center",horizontalPos:"middle",rotation:0},x:g+x,y:h+f,width:x,height:f,fill:this.themeConfig.quadrant4Fill}];for(const s of p)s.text.x=s.x+s.width/2,this.data.points.length===0?(s.text.y=s.y+s.height/2,s.text.horizontalPos="middle"):(s.text.y=s.y+this.config.quadrantTextTopPadding,s.text.horizontalPos="top");return p}getQuadrantPoints(a){const{quadrantSpace:c}=a,{quadrantHeight:f,quadrantLeft:g,quadrantTop:x,quadrantWidth:h}=c,p=St().domain([0,1]).range([g,h+g]),s=St().domain([0,1]).range([f+x,x]);return this.data.points.map(y=>({x:p(y.x),y:s(y.y),fill:this.themeConfig.quadrantPointFill,radius:this.config.pointRadius,text:{text:y.text,fill:this.themeConfig.quadrantPointTextFill,x:p(y.x),y:s(y.y)+this.config.pointTextPadding,verticalPos:"center",horizontalPos:"top",fontSize:this.config.pointLabelFontSize,rotation:0}}))}getBorders(a){const c=this.config.quadrantExternalBorderStrokeWidth/2,{quadrantSpace:f}=a,{quadrantHalfHeight:g,quadrantHeight:x,quadrantLeft:h,quadrantHalfWidth:p,quadrantTop:s,quadrantWidth:l}=f;return[{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:h-c,y1:s,x2:h+l+c,y2:s},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:h+l,y1:s+c,x2:h+l,y2:s+x-c},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:h-c,y1:s+x,x2:h+l+c,y2:s+x},{strokeFill:this.themeConfig.quadrantExternalBorderStrokeFill,strokeWidth:this.config.quadrantExternalBorderStrokeWidth,x1:h,y1:s+c,x2:h,y2:s+x-c},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:h+p,y1:s+c,x2:h+p,y2:s+x-c},{strokeFill:this.themeConfig.quadrantInternalBorderStrokeFill,strokeWidth:this.config.quadrantInternalBorderStrokeWidth,x1:h+c,y1:s+g,x2:h+l-c,y2:s+g}]}getTitle(a){if(a)return{text:this.data.titleText,fill:this.themeConfig.quadrantTitleFill,fontSize:this.config.titleFontSize,horizontalPos:"top",verticalPos:"center",rotation:0,y:this.config.titlePadding,x:this.config.chartWidth/2}}build(){const a=this.config.showXAxis&&!!(this.data.xAxisLeftText||this.data.xAxisRightText),c=this.config.showYAxis&&!!(this.data.yAxisTopText||this.data.yAxisBottomText),f=this.config.showTitle&&!!this.data.titleText,g=this.data.points.length>0?"bottom":this.config.xAxisPosition,x=this.calculateSpace(g,a,c,f);return{points:this.getQuadrantPoints(x),quadrants:this.getQuadrants(x),axisLabels:this.getAxisLabels(g,a,c,x),borderLines:this.getBorders(x),title:this.getTitle(f)}}}const Ht=_t();function G(e){return Nt(e.trim(),Ht)}const V=new Qt;function Mt(e){V.setData({quadrant1Text:G(e.text)})}function Xt(e){V.setData({quadrant2Text:G(e.text)})}function Ot(e){V.setData({quadrant3Text:G(e.text)})}function Yt(e){V.setData({quadrant4Text:G(e.text)})}function jt(e){V.setData({xAxisLeftText:G(e.text)})}function $t(e){V.setData({xAxisRightText:G(e.text)})}function Gt(e){V.setData({yAxisTopText:G(e.text)})}function Kt(e){V.setData({yAxisBottomText:G(e.text)})}function Zt(e,a,c){V.addPoints([{x:a,y:c,text:G(e.text)}])}function Jt(e){V.setConfig({chartWidth:e})}function te(e){V.setConfig({chartHeight:e})}function ee(){const e=_t(),{themeVariables:a,quadrantChart:c}=e;return c&&V.setConfig(c),V.setThemeConfig({quadrant1Fill:a.quadrant1Fill,quadrant2Fill:a.quadrant2Fill,quadrant3Fill:a.quadrant3Fill,quadrant4Fill:a.quadrant4Fill,quadrant1TextFill:a.quadrant1TextFill,quadrant2TextFill:a.quadrant2TextFill,quadrant3TextFill:a.quadrant3TextFill,quadrant4TextFill:a.quadrant4TextFill,quadrantPointFill:a.quadrantPointFill,quadrantPointTextFill:a.quadrantPointTextFill,quadrantXAxisTextFill:a.quadrantXAxisTextFill,quadrantYAxisTextFill:a.quadrantYAxisTextFill,quadrantExternalBorderStrokeFill:a.quadrantExternalBorderStrokeFill,quadrantInternalBorderStrokeFill:a.quadrantInternalBorderStrokeFill,quadrantTitleFill:a.quadrantTitleFill}),V.setData({titleText:vt()}),V.build()}const ie=function(e,a,c){wt.parseDirective(this,e,a,c)},ae=function(){V.clear(),Rt()},ne={setWidth:Jt,setHeight:te,setQuadrant1Text:Mt,setQuadrant2Text:Xt,setQuadrant3Text:Ot,setQuadrant4Text:Yt,setXAxisLeftText:jt,setXAxisRightText:$t,setYAxisTopText:Gt,setYAxisBottomText:Kt,addPoint:Zt,getQuadrantData:ee,parseDirective:ie,clear:ae,setAccTitle:zt,getAccTitle:Et,setDiagramTitle:It,getDiagramTitle:vt,getAccDescription:Bt,setAccDescription:Vt},re=(e,a,c,f)=>{var g,x,h;function p(t){return t==="top"?"hanging":"middle"}function s(t){return t==="left"?"start":"middle"}function l(t){return`translate(${t.x}, ${t.y}) rotate(${t.rotation||0})`}const y=_t();ct.debug(`Rendering quadrant chart
`+e);const B=y.securityLevel;let W;B==="sandbox"&&(W=yt("#i"+a));const C=(B==="sandbox"?yt(W.nodes()[0].contentDocument.body):yt("body")).select(`[id="${a}"]`),N=C.append("g").attr("class","main"),M=((g=y.quadrantChart)==null?void 0:g.chartWidth)||500,X=((x=y.quadrantChart)==null?void 0:x.chartHeight)||500;Wt(C,X,M,((h=y.quadrantChart)==null?void 0:h.useMaxWidth)||!0),C.attr("viewBox","0 0 "+M+" "+X),f.db.setHeight(X),f.db.setWidth(M);const D=f.db.getQuadrantData(),it=N.append("g").attr("class","quadrants"),at=N.append("g").attr("class","border"),nt=N.append("g").attr("class","data-points"),rt=N.append("g").attr("class","labels"),Q=N.append("g").attr("class","title");D.title&&Q.append("text").attr("x",0).attr("y",0).attr("fill",D.title.fill).attr("font-size",D.title.fontSize).attr("dominant-baseline",p(D.title.horizontalPos)).attr("text-anchor",s(D.title.verticalPos)).attr("transform",l(D.title)).text(D.title.text),D.borderLines&&at.selectAll("line").data(D.borderLines).enter().append("line").attr("x1",t=>t.x1).attr("y1",t=>t.y1).attr("x2",t=>t.x2).attr("y2",t=>t.y2).style("stroke",t=>t.strokeFill).style("stroke-width",t=>t.strokeWidth);const U=it.selectAll("g.quadrant").data(D.quadrants).enter().append("g").attr("class","quadrant");U.append("rect").attr("x",t=>t.x).attr("y",t=>t.y).attr("width",t=>t.width).attr("height",t=>t.height).attr("fill",t=>t.fill),U.append("text").attr("x",0).attr("y",0).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>p(t.text.horizontalPos)).attr("text-anchor",t=>s(t.text.verticalPos)).attr("transform",t=>l(t.text)).text(t=>t.text.text),rt.selectAll("g.label").data(D.axisLabels).enter().append("g").attr("class","label").append("text").attr("x",0).attr("y",0).text(t=>t.text).attr("fill",t=>t.fill).attr("font-size",t=>t.fontSize).attr("dominant-baseline",t=>p(t.horizontalPos)).attr("text-anchor",t=>s(t.verticalPos)).attr("transform",t=>l(t));const _=nt.selectAll("g.data-point").data(D.points).enter().append("g").attr("class","data-point");_.append("circle").attr("cx",t=>t.x).attr("cy",t=>t.y).attr("r",t=>t.radius).attr("fill",t=>t.fill),_.append("text").attr("x",0).attr("y",0).text(t=>t.text.text).attr("fill",t=>t.text.fill).attr("font-size",t=>t.text.fontSize).attr("dominant-baseline",t=>p(t.text.horizontalPos)).attr("text-anchor",t=>s(t.text.verticalPos)).attr("transform",t=>l(t.text))},se={draw:re},ue={parser:Ut,db:ne,renderer:se,styles:()=>""};export{ue as diagram};
