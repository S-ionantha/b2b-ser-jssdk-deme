"use strict";(self["webpackChunkb2b_ser_jssdk_deme"]=self["webpackChunkb2b_ser_jssdk_deme"]||[]).push([[7099],{77099:function(e,n,t){t.r(n),t.d(n,{conf:function(){return l},language:function(){return m}});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.33.0(4b1abad427e58dbedc1215d99a0902ffc885fcd4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var o=e=>`\\b${e}\\b`,r="[_a-zA-Z]",i="[_a-zA-Z0-9]",s=o(`${r}${i}*`),c=["targetScope","resource","module","param","var","output","for","in","if","existing"],a=["true","false","null"],k="[ \\t\\r\\n]",g="[0-9]+",l={comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"'",close:"'"},{open:"'''",close:"'''"}],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:"'",close:"'",notIn:["string","comment"]},{open:"'''",close:"'''",notIn:["string","comment"]}],autoCloseBefore:":.,=}])' \n\t",indentationRules:{increaseIndentPattern:new RegExp("^((?!\\/\\/).)*(\\{[^}\"'`]*|\\([^)\"'`]*|\\[[^\\]\"'`]*)$"),decreaseIndentPattern:new RegExp("^((?!.*?\\/\\*).*\\*/)?\\s*[\\}\\]].*$")}},m={defaultToken:"",tokenPostfix:".bicep",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.square"},{open:"(",close:")",token:"delimiter.parenthesis"}],symbols:/[=><!~?:&|+\-*/^%]+/,keywords:c,namedLiterals:a,escapes:"\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\${)",tokenizer:{root:[{include:"@expression"},{include:"@whitespace"}],stringVerbatim:[{regex:"(|'|'')[^']",action:{token:"string"}},{regex:"'''",action:{token:"string.quote",next:"@pop"}}],stringLiteral:[{regex:"\\${",action:{token:"delimiter.bracket",next:"@bracketCounting"}},{regex:"[^\\\\'$]+",action:{token:"string"}},{regex:"@escapes",action:{token:"string.escape"}},{regex:"\\\\.",action:{token:"string.escape.invalid"}},{regex:"'",action:{token:"string",next:"@pop"}}],bracketCounting:[{regex:"{",action:{token:"delimiter.bracket",next:"@bracketCounting"}},{regex:"}",action:{token:"delimiter.bracket",next:"@pop"}},{include:"expression"}],comment:[{regex:"[^\\*]+",action:{token:"comment"}},{regex:"\\*\\/",action:{token:"comment",next:"@pop"}},{regex:"[\\/*]",action:{token:"comment"}}],whitespace:[{regex:k},{regex:"\\/\\*",action:{token:"comment",next:"@comment"}},{regex:"\\/\\/.*$",action:{token:"comment"}}],expression:[{regex:"'''",action:{token:"string.quote",next:"@stringVerbatim"}},{regex:"'",action:{token:"string.quote",next:"@stringLiteral"}},{regex:g,action:{token:"number"}},{regex:s,action:{cases:{"@keywords":{token:"keyword"},"@namedLiterals":{token:"keyword"},"@default":{token:"identifier"}}}}]}}}}]);
//# sourceMappingURL=7099.ec01bc57.js.map