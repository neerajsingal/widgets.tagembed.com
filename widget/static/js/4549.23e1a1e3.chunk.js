(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[4549,7033,7234,7668],{97234:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(72791),o=s(2703),i=s(14496),n=s(80184);class r extends a.PureComponent{constructor(e){super(e),this.state={isAuthorImagevalid:!0}}render(){const{author:e,authorClass:t,network:s}=this.props;return(0,n.jsx)("div",{className:t,style:{overflow:4==s.id?"visible":""},children:this.state.isAuthorImagevalid?(0,n.jsx)("img",{className:"".concat(t,"__"),src:e.picture&&String(e.picture).includes("author.png")?" ":e.picture.replace(/[ ]+/g,""),alt:(0,o.P)(e.picture),width:44,height:44,onError:e=>{this.setState({isAuthorImagevalid:!1})}}):(0,n.jsx)(i.Z,{authorClass:t,username:e.name,network:s,color:null===s.id?"#000":s.color})},Math.random())}}},14496:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});s(72791);var a=s(80184);const o=e=>{let{username:t,network:s,authorClass:o}=e;return(0,a.jsx)("img",{className:"".concat(o,"__"),src:"https://ui-avatars.com/api/?name=".concat(t.replace(/\s/g,""),"&background=").concat(String(null===s.id?"#000":s.color).replace("#",""),"&color=fff&length=1&rounded=true"),alt:t,width:44,height:44})}},98270:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var a=s(72791),o=s(80413),i=s(96710),n=s.n(i),r=s(80184);const l=(e,t)=>{if(25===t){return String(e).replace("https://w.soundcloud.com/player/?url=","")}return e};class d extends a.PureComponent{constructor(e){super(e),this.onMediaLoad=async e=>{const{data:t}=this.props;if(t&&Object.keys(t).length>0&&[4,5,3].includes(t.type))if(t.mediaHeight&&""!=t.mediaHeight&&t.mediaWidth&&""!=t.mediaWidth)this.setState({paddingBottom:100*t.mediaHeight/t.mediaWidth});else try{const{width:e,height:s}=await(0,o.Ad)(t.postFileNew);this.setState({paddingBottom:100*s/e})}catch(s){this.setState({paddingBottom:100})}},this.setVideoLoaded=e=>{this.setState({videoLoaded:e})},this.state={loadError:!1,paddingBottom:100,videoLoaded:!1,imgUrl:this.props.data.postFileNew}}componentWillMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}componentDidMount(){const{data:e}=this.props;let t=document.querySelector("#video_p_".concat(e.id));t&&(t.play(),t.muted=!0),this.props.size?this.setState({paddingBottom:this.props.size}):this.onMediaLoad()}render(){const{VideoClass:e,data:t,wallID:s,isCover:a,controls:o,autoPlay:i,handleVideoEnded:d,muted:c}=this.props,{paddingBottom:h,videoLoaded:p}=this.state,_={paddingBottom:"".concat(h,"%")};return(0,r.jsx)("div",{className:"".concat(e,"_wrap_ mediaHolder").concat(t.id),style:_,children:(0,r.jsx)(n(),{className:e,url:l(t.mediaUrl,t.network.id),"data-type":"video","data-network":t.networkId,"data-link":t.link,"data-wall-id":s,"data-item-id":t.id,"data-feed-id":t.feedId?t.feedId:"","data-load":0,config:{facebook:{appId:"117029975354072",attributes:{"data-width":"auto"}}},loop:!i,onError:e=>{this.setVideoLoaded(!1)},autoPlay:i,muted:c,volume:i?1:0,playsinline:!0,onReady:e=>{this.setVideoLoaded(!0)},playing:i,height:"100%",width:"100%",controls:o,style:{backgroundImage:p?"":"url(".concat(t.postFileNew,")"),backgroundSize:a?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat"},onEnded:d||null})})}}},23450:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var a=s(72791),o=s(34867),i=s(2703),n=s(46535),r=s(80184);const l=a.lazy((()=>Promise.all([s.e(6332),s.e(6476)]).then(s.bind(s,46476))));class d extends a.PureComponent{constructor(e){super(e),this.state={expanded:!1},this.toggleExpanded=this.toggleExpanded.bind(this)}toggleExpanded(){this.setState({expanded:!this.state.expanded})}render(){const{contentClass:e,content:t,ThemeRule:s,font:d,personalization:c,item:h,contentTitle:p,readMore:_,maxLength:u,textAlign:m}=this.props,{expanded:b}=this.state,g={fontFamily:s.css_font,fontSize:d.fontSize,color:n.ZQ&&!(0,i.mD)(59)?d.fontColor:null,textAlign:m||s.textAlignment};let w=20==h.network.id?t:(0,i.Fx)(t);12==h.network.id&&(w=(0,o.ZP)(w));const x=_?b?w:w.slice(0,u):w;return(0,r.jsxs)("div",{className:"".concat(e," ").concat(s.lineTrim?" tb_content_line-".concat(s.lineTrim):""," tb-cTBfont-").concat(s.font_varient),style:g,children:[p?(0,r.jsx)("div",{className:"tb_bold_txt__",children:(0,o.ZP)(p)}):null,(0,r.jsxs)(a.Suspense,{fallback:(0,r.jsx)(r.Fragment,{}),children:[" ",(0,r.jsx)(l,{data:h,content:x,Personalization:c})]}),_&&w.length>u&&(0,r.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:b?"...Read Less...":"...Read More..."})]})}}},20169:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(72791),o=s(11225),i=s(46535),n=s(80184);class r extends a.PureComponent{constructor(){super(...arguments),this.onClickData=e=>t=>{const{item:s,wallID:a,ownerId:n}=this.props;t.stopPropagation(),i.ZQ||(0,o.S5)({type:2,action:2,wall:a,feed:s.feedId,post:s.referenceId?s.referenceId:s.id,owner:n}),(0,o.Fv)("Tagbox","shareUrl","shareUrl",e),window.open(e,"_blank")}}render(){const{share:e,shareClass:t}=this.props;return(0,n.jsxs)("div",{className:"tb_share_wrapper ".concat(t),children:[(0,n.jsx)("div",{className:"tb_share_button_ tb__icon ".concat(i.ZQ?"tb-share-fill":"tb-share"),children:(0,n.jsx)("div",{})}),(0,n.jsxs)("div",{className:"tb_share_icon_list_wrap",children:[e.facebook?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.facebook),className:"tb_share_ico__ tb__icon tb-facebook",title:"facebook"})}):"",e.twitter?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.twitter),className:"tb_share_ico__  tb__icon tb-twitter",title:"twitter"})}):"",e.linkedin?(0,n.jsx)("div",{className:"tb_share_icon_list",children:(0,n.jsx)("div",{onClick:this.onClickData(e.linkedin),className:"tb_share_ico__ tb__icon tb-linkedin",title:"linkedin"})}):""]})]})}}},27668:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});var a=s(72791),o=s(2703),i=s(80184);const n=e=>{const{postTime:t,timeClass:s,authorColor:n,authorNameStyle:r}=e,l=(0,a.useMemo)((()=>(0,o.Sy)(t)),[]),d={color:n,...r};return(0,i.jsx)("div",{className:s,style:d,children:l})},r=(0,a.memo)(n)},65093:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>k});var a=s(72791),o=s(77581),i=s(48282),n=s(98529),r=s(97234),l=s(27668),d=s(70757),c=s(46535),h=s(80184);const p=e=>{let{author:t,personalization:s,postTime:a,network:o,ThemeRule:i,font:n}=e;const p={color:i.authorColor,fontFamily:i.css_font},_={backgroundColor:i.authorColor},u=!(!s.postAuthor||t.isInstaUser),m=!(!s.postAuthor||!s.postTime||t.isInstaUser);return(0,h.jsxs)("div",{className:"tb_hs_author_wrapper ".concat(c.ZQ?"tb_hs_author_wrapper_top":""),children:[(0,h.jsxs)("div",{className:"tb_hs_author",children:[u?(0,h.jsx)(r.default,{network:o,author:t,authorClass:"tb_hs_author_profile"}):"",(0,h.jsxs)("div",{className:"tb_hs_author_info",children:[u?(0,h.jsx)("div",{className:"tb_hs_authorname",style:p,children:t.name}):"",(0,h.jsxs)("div",{className:"tb_hs_post_info",children:[u?(0,h.jsx)("div",{className:"tb_hs_username",style:p,children:"@".concat(t.username)}):"",m?(0,h.jsx)("div",{className:"tb_hs_seprator",style:_,children:" "}):"",s.postTime?(0,h.jsx)(l.default,{postTime:a,timeClass:"tb_hs_time tb-cTBfont-".concat(i.font_varient),authorColor:i.authorColor,authorNameStyle:p}):""]})]})]}),c.ZQ?null:(0,h.jsx)("div",{className:"tb_hs_social_",children:(0,h.jsx)(d.default,{networkClass:"tb_hs_social__ico",network:o,isDefault:1===i.iconType,ThemeRule:i})})]})};var _=s(40115),u=s(98270);class m extends a.PureComponent{constructor(e){super(e),this.state={imgUrl:e.itemData.postFileNew}}render(){const{itemData:e,wallID:t,ownerId:s,wall:a,ThemeRule:o}=this.props,i=3===e.type||5===e.type,n=7===e.network.id,r=!!(e.imageList&&e.imageList.length>0),l=(e.imageList&&e.imageList.length)>0&&(3===e.type||5===e.type)?"tb_sp_multi_images_ico_bottom":"tb_hs_multi_images_ico",d=1===e.isAudio,p=(3===e.type||5===e.type)&&28!==e.network.id&&1==a.ThemeRule.autoPlay,m=c.ZQ?a.ThemeRule.aspectImageRatio?a.ThemeRule.aspectImageRatio:75:100;return(0,h.jsxs)("div",{className:"tb_hs_media_wrap",children:[r?(0,h.jsx)("div",{className:"".concat(l," tb__icon tb-multiple"),children:" "}):"",i&&!p?n?(0,h.jsxs)("div",{className:"tb_hs_youtube_ico tb__icon tb-youtube-default",children:[(0,h.jsx)("div",{className:"tb_colr_ico tb_ico_path1",children:(0,h.jsx)("div",{})}),(0,h.jsx)("div",{className:"tb_colr_ico tb_ico_path2",children:(0,h.jsx)("div",{})})]}):d?(0,h.jsx)("div",{className:"tb_hs_audio_ico tb__icon tb-audio",children:(0,h.jsx)("div",{})}):(0,h.jsx)("div",{className:"tb__icon ".concat(c.ZQ?"tb_hs_video_ply_ico tb-play":"tb_hs_video_ico tb-video"),children:(0,h.jsx)("div",{})}):"",p?(0,h.jsx)(u.Z,{VideoClass:"tb_hs_video",data:e,wallID:t,themeID:a.Personalization.widgetTheme,ownerId:s,size:m,isCover:!0,muted:!0}):(0,h.jsx)(_.Z,{ImageClass:"tb_hs_image",data:e,wallID:t,themeID:a.Personalization.widgetTheme,ownerId:s,size:m,ThemeRule:o})]})}}var b=s(23450),g=s(2703),w=s(20169);const x=c.ZQ?null:200,v=e=>{let{itemData:t,personalization:s,ThemeRule:a,clickToShowPopUp:o,itemIndex:i,wallID:n,ownerId:r,postSizeInPx:l,wall:_}=e;const u={backgroundColor:c.ZQ?"rgba(0,0,0,.7)":a.cardColor},v=2===t.type||3===t.type||4===t.type||5===t.type,f=s.trimcontent?(0,g.Sv)(t.content,x):t.content,j=l.adjustWidth<250;return(0,h.jsx)("div",{id:"tb-hs-post-".concat(t.id),className:"tb_hs_post_wrapper".concat(j?" tb_hs_post_wrapper2x":""),"tb-network":t.network.id,style:{padding:s.padding/2},children:(0,h.jsx)("div",{className:"tb_hs_post_in",onClick:o(i,t),style:{borderRadius:a.radius},children:(0,h.jsxs)("div",{className:"tb_hs_post_media_wrapp",children:[v?(0,h.jsx)(m,{itemData:t,wallID:n,wall:_,ownerId:r}):"",(0,h.jsxs)("div",{className:"tb_hs_post_details",children:[(0,h.jsx)("div",{className:"tb_hs_contant_wrapper",children:a.hideContent&&1!=t.type?null:(0,h.jsx)(b.default,{contentClass:"tb_hs_content",item:t,content:f,font:a,ThemeRule:a,personalization:s,contentTitle:t.contentTitle})}),(0,h.jsx)(p,{ownerId:r,postTime:t.createdAt,author:t.author,network:t.network,font:a,personalization:s,ThemeRule:a}),t.share.status?(0,h.jsx)(w.Z,{share:t.share,shareClass:"tb_mc_share_container",item:t,wallID:n,ownerId:r}):null]}),(0,h.jsx)("div",{className:"tb_hs_post_overlay",style:u,children:(0,h.jsx)("div",{})}),c.ZQ?(0,h.jsx)("div",{className:"tb_hs_social_bottom_",children:(0,h.jsx)(d.default,{networkClass:"tb_hs_social__ico",network:t.network,isDefault:1===a.iconType,ThemeRule:a})}):null]})})})};var f=s(11225);s(59169);class j extends a.PureComponent{constructor(e){super(e),this.requestData=()=>{const{appendData:e,wall:t,preRender:s,hasMoreData:a}=this.props;a&&(0,f.Sx)(t.Wall.id,Math.floor(Date.now()/1e3),t.ThemeRule.numberOfPosts,e.networkID,e.after,s,e.heightEvent)},this.state={parent_id:""},this.inputRefs={}}componentDidMount(){setTimeout((()=>{document.querySelectorAll(".splide__slide").forEach(((e,t)=>{e.removeAttribute("role")}))}),100)}componentDidUpdate(){const e=Object.values(this.inputRefs)[0],{postData:t,completeDataObject:s,onClickPopUpSlider:a,wall:o,parentID:i}=this.props,n=o.ThemeRule.multiRow;if(e&&Object.values(e)[5].length>0){let o=Object.values(e)[5];if(1==n)o.map(((e,o)=>{if(e.classList){const o=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var n=o[0];String(o[0]).includes("tb_")&&(n=String(o[0]).replace("tb_",""));const r=t.findIndex((e=>e==n));let l=document.querySelectorAll("#".concat(e.id));for(let e=0;e<l.length;e++){let t=l[e],o=t.getAttribute("idd");String(i)===String(o)&&t.addEventListener("click",(e=>{e.preventDefault();const t=s[n];a(r,t)}))}}}));else if(2==n){Object.values(e)[5].map(((e,o)=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{e&&e.childNodes.length>0&&e.childNodes.forEach((e=>{if(e.classList){const n=String(e.classList.value).split(" ").filter((e=>String(e).includes("tb_")));var o=n[0];String(n[0]).includes("tb_")&&(o=String(n[0]).replace("tb_",""));const r=t.findIndex((e=>e==o));let l=document.querySelectorAll(".tb_hs_post_container #".concat(e.id));for(let e=0;e<l.length;e++){let t=l[e],n=t.getAttribute("idd");String(i)===String(n)&&t.addEventListener("click",(e=>{e.preventDefault();const t=s[o];a(r,t)}))}}}))}))}))}}}render(){const{postData:e,completeDataObject:t,wall:s,clickToShowPopUp:a,onClickToCTA:o,postSizeInPx:r,parentID:l}=this.props,d=l,p=s.ThemeRule.numberOfCoumn,_=s.ThemeRule.mobileColumn,u=s.ThemeRule.slidePost,m=s.ThemeRule.slideDuration,b=(s.Personalization.autoScrollStatus,{grid:{rows:s.ThemeRule.multiRow},rewind:!0,speed:1e3,interval:1===u?1e3*parseInt(m):5e3,perPage:p>0?p:c.ZQ?3:6,perMove:1,gap:0,autoplay:1===u,padding:0,pagination:!1,arrows:!0,breakpoints:{560:{perPage:_>0?_:1},767:{perPage:_>0?_:2},991:{perPage:_>0?_:3},1200:{perPage:p>0?p:4},1400:{perPage:p>0?p:5},1600:{perPage:p>0?p:c.ZQ?3:6}}});return(0,h.jsx)(h.Fragment,{children:""!=l?(0,h.jsx)("div",{className:"tb_hs_post_container",children:(0,h.jsxs)(i.tv,{hasTrack:!1,className:"tb_hs_post_slider",options:b,extensions:{Grid:n.r},ref:e=>this.inputRefs[d]=e,children:[(0,h.jsx)(i.Gj,{children:(s.ThemeRule.multiRow>1&&1!==e.length&&e.length%2!==0?e.pop():e)&&e&&e.length>0&&e.map(((e,n)=>{const d=t[e];return(0,h.jsx)(i.jw,{className:"tb_".concat(d.id),idd:l,children:(0,h.jsx)(v,{parentID:l,ownerId:s.Wall.owner,wall:s,itemData:d,itemIndex:n,personalization:s.Personalization,ThemeRule:s.ThemeRule,clickToShowPopUp:a,wallID:s.Wall.id,onClickToCTA:o,postSizeInPx:r})},n)}))}),(0,h.jsxs)("div",{className:"splide__arrows splide__arrows--ltr tb_hs_arrow_wrapper_",children:[(0,h.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--prev tb_hs_arrow tb_hs_arrow_left__ tb__icon tb-arrow-left-alt",children:" "}),(0,h.jsx)("div",{className:"tb_hs_arrow splide__arrow splide__arrow--next  tb_hs_arrow_right__ tb__icon tb-arrow-right-alt",onClick:this.requestData})]})]})}):null})}}const k=(0,o.$j)((e=>({})),(e=>({getDataNextSteps:(t,s,a,o,i,n,r,l)=>e((0,f.Sx)(t,s,a,o,i,n,r,l))})))(j)},50247:()=>{}}]);
//# sourceMappingURL=4549.23e1a1e3.chunk.js.map