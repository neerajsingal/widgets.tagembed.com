"use strict";(self.webpackChunkembed_widget=self.webpackChunkembed_widget||[]).push([[7970],{25810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>r});var a=s(47313),n=s(35179),i=(s(17739),s(46417));const l=a.lazy((()=>s.e(5867).then(s.bind(s,95867))));class r extends a.PureComponent{render(){const{network:e,networkClass:t,ThemeRule:s,isDefault:r,Personalization:o}=this.props,c=!!r&&(7!==e.id&&4!==e.id&&36!==e.id),d=n.ZQ&&36==e.id?"tagembed":e.icon;return c?(0,i.jsx)("div",{className:"".concat(t," tb__icon tb-").concat(d.replace(/fa-/g,"")),style:{color:""},children:(0,i.jsx)("div",{})}):(0,i.jsxs)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[" ",(0,i.jsx)(l,{network:e,networkClass:t})]})}}},27970:(e,t,s)=>{s.r(t),s.d(t,{default:()=>o});var a=s(47313),n=s(25810),i=s(46417);const l=a.lazy((()=>s.e(4576).then(s.bind(s,24576)))),r=a.lazy((()=>s.e(7018).then(s.bind(s,7018))));class o extends a.PureComponent{constructor(e){super(e),this.totalReviewNetworks=e=>{const{wall:t}=this.props;let s=0,a=0,l=[];return e.map(((e,r)=>{const o=e.Network;s+=o.averageReviews*o.totalReviews,a+=o.totalReviews,l.push(r<5?(0,i.jsx)("div",{className:"tb_rb_social_list",children:(0,i.jsx)(n.default,{networkClass:"tb_rb_avg_social_ico",network:o,isDefault:!0,ThemeRule:t.ThemeRule})},r):null)})),this.setState({avgRate:(s/a).toFixed(1),totalReviews:a}),l},this.state={avgRate:0,totalReviews:0}}render(){const{postData:e,reviewFilters:t,wall:s,languageSetting:n,isFreeAdsStatus:o}=this.props,{avgRate:c,totalReviews:d}=this.state,_={backgroundColor:s.ThemeRule.cardColor,borderRadius:s.ThemeRule.radius};return(0,i.jsx)("div",{className:"tb_rb_post_container tb_rb_size_".concat(s.ThemeRule.cardSize," tb_rb_position_").concat(s.ThemeRule.cardPosition),style:_,children:(0,i.jsxs)("div",{className:"tb_rb_post_wrap",children:[(0,i.jsx)("div",{className:"tb_rb_social_",children:this.totalReviewNetworks(t)}),(0,i.jsxs)("div",{className:"tb_rb_rating_wrap",children:[(0,i.jsx)("div",{className:"tb_rb__title tb-cTBfont-".concat(s.ThemeRule.font_varient),children:"Reviews"}),(0,i.jsx)("div",{className:"tb_rb_avg_rating tb-cTBfont-".concat(s.ThemeRule.font_varient),children:c}),(0,i.jsx)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(l,{size:18,rating:c})}),(0,i.jsxs)("div",{className:"tb_rb_based_on tb-cTBfont-".concat(s.ThemeRule.font_varient),children:["Based on ",(0,i.jsx)("div",{className:"tb_rb_based_on_count",children:d})," reviews"]}),o?(0,i.jsxs)(a.Suspense,{fallback:(0,i.jsx)(i.Fragment,{}),children:[(0,i.jsx)(r,{languageSetting:n,wallId:s.Wall.id,themeID:s.Personalization.widgetTheme,isCenter:!0})," "]}):null]})]})})}}}}]);