(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[3298,7033,7234,757],{31431:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});s(72791);var a=s(97234),n=s(23450),o=s(19036),r=s(70757),c=s(2703),l=s(46535),i=s(80184);const _=l.ZQ?null:200,d=t=>{let{itemData:e,personalization:s,ThemeRule:l,toggleDivs:d}=t;const b=e.rating>0?"tb_bt_rating_content":"tb_bt_content",u=1===e.type&&s.textDecorate?"tb_bt_text_decoration tb_bt_text_post":"",m=s.trimcontent?(0,c.Sv)(e.content,_):e.content,h=e.author.username&&e.author.username.length>0?"@".concat(e.author.username):"",p={color:l.authorColor};return(0,i.jsxs)("div",{id:"tb-bt-post-".concat(e.id),className:"tb_bt_post_in","tb-network":e.network.id,children:[(0,i.jsx)("div",{className:"tb_bt_close_btn",onClick:d,children:(0,i.jsx)("div",{className:"tb_bt_close_ico tb__icon tb-close-circle-line"})}),(0,i.jsx)(a.default,{author:e.author,network:e.network,authorClass:"tb_bt_author_profile"}),(0,i.jsxs)("div",{className:"tb_bt_post_info",children:[(0,i.jsxs)("div",{className:"tb_bt_author_info",children:[(0,i.jsx)("div",{className:"tb_bt_authorname",style:p,children:e.author.name}),(0,i.jsx)("div",{className:"tb_bt_username",style:p,children:h})]}),(0,i.jsx)("div",{className:"tb_bt_contant_wrapper",children:(0,i.jsx)(n.default,{contentClass:"".concat(b," ").concat(u),item:e,content:m,font:l,ThemeRule:l,personalization:s,contentTitle:e.contentTitle})}),(0,i.jsx)("div",{className:"tb_bt_post_media_wrapp",children:(0,i.jsxs)("div",{className:"tb_bt_rating__",children:[(0,i.jsx)(o.Z,{rating:e.rating,network:e.network})," "]})}),(0,i.jsxs)("div",{className:"tb_bt_social_",children:[(0,i.jsx)(r.default,{networkClass:"tb_bt_social_ico",network:e.network,isDefault:1===l.iconType,ThemeRule:l}),(0,i.jsx)("div",{className:"tb_bt_network_name",children:e.network.name})]})]})]})}},97234:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});var a=s(72791),n=s(2703),o=s(14496),r=s(80184);class c extends a.PureComponent{constructor(t){super(t),this.state={isAuthorImagevalid:!0}}render(){const{author:t,authorClass:e,network:s}=this.props;return(0,r.jsx)("div",{className:e,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,r.jsx)("img",{className:"".concat(e,"__"),src:t.picture&&String(t.picture).includes("author.png")?" ":t.picture.replace(/[ ]+/g,""),alt:(0,n.P)(t.picture),width:44,height:44,onError:t=>{this.setState({isAuthorImagevalid:!1})}}):(0,r.jsx)(o.Z,{authorClass:e,username:t.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(t,e,s)=>{"use strict";s.d(e,{Z:()=>n});s(72791);var a=s(80184);const n=t=>{let{username:e,network:s,authorClass:n}=t;return(0,a.jsx)("img",{className:"".concat(n,"__"),src:"https://ui-avatars.com/api/?name=".concat(e.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:e,width:44,height:44})}},70757:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var a=s(72791),n=s(46535),o=s(2703),r=s(80184);const c=a.lazy((()=>s.e(1088).then(s.bind(s,41088))));class l extends a.PureComponent{render(){const{network:t,networkClass:e,ThemeRule:s,isDefault:l}=this.props,i=!!l&&(7!==t.id&&4!==t.id),_=n.ZQ&&36==t.id?"tagembed":t.icon;return i?(0,r.jsx)("div",{className:"".concat(e," tb__icon tb-").concat(_.replace(/fa-/g,"")),style:{color:n.ZQ&&!(0,o.mD)(59)?s.iconColor:null},children:(0,r.jsx)("div",{})}):(0,r.jsxs)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(c,{network:t,networkClass:e})]})}}},23450:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>i});var a=s(72791),n=s(34867),o=s(2703),r=s(46535),c=s(80184);const l=a.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class i extends a.PureComponent{constructor(t){super(t),this.state={expanded:!1},this.toggleExpanded=this.toggleExpanded.bind(this)}toggleExpanded(){this.setState({expanded:!this.state.expanded})}render(){const{contentClass:t,content:e,ThemeRule:s,font:i,personalization:_,item:d,contentTitle:b,readMore:u,maxLength:m}=this.props,{expanded:h}=this.state,p={fontFamily:s.css_font,fontSize:i.fontSize,color:r.ZQ&&!(0,o.mD)(59)?i.fontColor:null,textAlign:s.textAlignment};let x=20==d.network.id?e:(0,o.Fx)(e);12==d.network.id&&(x=(0,n.ZP)(x));const g=u?h?x:x.slice(0,m):x;return(0,c.jsxs)("div",{className:"".concat(t," ").concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""," tb-cTBfont-").concat(s.font_varient),style:p,children:[b?(0,c.jsx)("div",{className:"tb_bold_txt__",children:(0,n.ZP)(b)}):null,(0,c.jsxs)(a.Suspense,{fallback:(0,c.jsx)(c.Fragment,{}),children:[" ",(0,c.jsx)(l,{data:d,content:g,Personalization:_})]}),u&&x.length>m&&(0,c.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:h?"...Read Less...":"...Read More..."})]})}}},19036:(t,e,s)=>{"use strict";s.d(e,{Z:()=>l});var a=s(72791),n=s(46535),o=s(80184);const r=t=>{let{network:e}=t;const s={3:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#1b74e4"},19:{className:"tb_rating_ico__ tb__icon tb-yelp-star",color:"#e00707"},23:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#ff385c"},28:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-star",color:"#F8B90C"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"},29:n.ZQ?{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#000"}:{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#613983"},33:{className:"tb_rating_ico__ tb__icon tb-trustpilot",color:"#000"},35:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}},{className:a,color:r}=s[e.id]||{className:"tb_rating_ico__ tb__icon tb-default-star",color:"#F8B90C"};return(0,o.jsx)("div",{className:a,style:{color:r},"tb-network":e.id})},c=t=>{let{ThemeID:e}=t;const{className:s,color:a}={59:{className:"tb_rating_ico__ tb__icon tb-star-fill",color:"#34E0A1"}}[e]||{className:"tb_rating_ico__ tb__icon tb-star-alt",color:"#F8B90C"};return(0,o.jsx)("div",{className:s,style:{color:a},"tb-network":e})};class l extends a.PureComponent{render(){const{rating:t,network:e,ThemeID:s}=this.props;return(0,o.jsx)("div",{className:"tb__rating__","aria-hidden":!0,children:t?[...Array(t)].map(((t,a)=>s?(0,o.jsx)(c,{ThemeID:s},a):(0,o.jsx)(r,{network:e},a))):null})}}},50247:()=>{}}]);
//# sourceMappingURL=3298.80f796d8.chunk.js.map