(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7033],{23450:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var s=n(72791),a=n(34867),o=n(2703),i=n(46535),l=n(80184);const d=s.lazy((()=>Promise.all([n.e(6332),n.e(6476)]).then(n.bind(n,46476))));class c extends s.PureComponent{constructor(e){super(e),this.state={expanded:!1},this.toggleExpanded=this.toggleExpanded.bind(this)}toggleExpanded(){this.setState({expanded:!this.state.expanded})}render(){const{contentClass:e,content:t,ThemeRule:n,font:c,personalization:r,item:h,contentTitle:x,readMore:m,maxLength:p}=this.props,{expanded:g}=this.state,u={fontFamily:n.css_font,fontSize:c.fontSize,color:i.ZQ&&!(0,o.mD)(59)?c.fontColor:null,textAlign:n.textAlignment};let _=20==h.network.id?t:(0,o.Fx)(t);12==h.network.id&&(_=(0,a.ZP)(_));const b=m?g?_:_.slice(0,p):_;return(0,l.jsxs)("div",{className:"".concat(e," ").concat(n.lineTrim?" tb_content_line-".concat(n.lineTrim):""," tb-cTBfont-").concat(n.font_varient),style:u,children:[x?(0,l.jsx)("div",{className:"tb_bold_txt__",children:(0,a.ZP)(x)}):null,(0,l.jsxs)(s.Suspense,{fallback:(0,l.jsx)(l.Fragment,{}),children:[" ",(0,l.jsx)(d,{data:h,content:b,Personalization:r})]}),m&&_.length>p&&(0,l.jsx)("div",{className:"tb_read_more_",onClick:this.toggleExpanded,children:g?"...Read Less...":"...Read More..."})]})}}},50247:()=>{}}]);
//# sourceMappingURL=7033.9e1498b4.chunk.js.map