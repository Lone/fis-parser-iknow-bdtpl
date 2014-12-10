[function(_template_object) {
var baiduTemplate=reuire('common:widget/js/util/template/template.js');var _template_fun_array=[];
var fn=(function(data){
var _template_varName='';
for(name in data){
_template_varName+=('var '+name+'=data["'+name+'"];');
};
eval(_template_varName);
_template_fun_array.push('');for(var i=0, l=data.list.length; i<l; i++){var item=data.list[i]; _template_fun_array.push('<dl class="list-item line"><dt><i class="i-face',typeof(item.face) === 'undefined'?'':baiduTemplate._encodeHTML(item.face),'"></i></dt><dd><span class="grid-r f-aid">',typeof(item.createTime) === 'undefined'?'':baiduTemplate._encodeHTML(item.createTime),'</span><span class="f-skyblue">',typeof(item.userName) === 'undefined'?'':baiduTemplate._encodeHTML(item.userName),'</span>对{%$expertInfo.realName%}医生的评价：<span class="f-orange">',typeof(item.starStr) === 'undefined'?'':baiduTemplate._encodeHTML(item.starStr),'</span></dd><dd class="more"><span style="display: none">',typeof((item.content||'')) === 'undefined'?'':baiduTemplate._encodeHTML((item.content||'')),'</span></dd></dl>');}_template_fun_array.push('');if(data.total > data.pn+data.rn){_template_fun_array.push('<div class="next-page"><a href="#">更多评价</a></div>');}_template_fun_array.push('');
_template_varName=null;
})(_template_object);
fn = null;
return _template_fun_array.join('');

}][0]