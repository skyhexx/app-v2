(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-70cb"],{"+kG1":function(t,e,s){"use strict";s.r(e);var i=s("hKhY"),n=s("ys1c");for(var r in n)"default"!==r&&function(t){s.d(e,t,(function(){return n[t]}))}(r);s("8EEx");var a=s("KHd+"),o=Object(a.a)(n.default,i.a,i.b,!1,null,"45275a22",null);o.options.__file="domain_detail.vue",e.default=o.exports},42:function(t,e){},43:function(t,e){},"8EEx":function(t,e,s){"use strict";var i=s("VhMY");s.n(i).a},Ddmz:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=e.supportTld=["cfx","bnb","defi","ht"];e.default={supportTld:i}},EIFw:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=p(s("EJiy")),n=p(s("14Xm")),r=p(s("D3Ub")),a=p(s("Kw5r")),o=p(s("0dc3")),c=s("Ddmz"),u=p(s("YgiN")),l=p(s("JpVX")),d=s("Iawr");function p(t){return t&&t.__esModule?t:{default:t}}var h=s("gBkH"),f=s("LAvi"),v=s("lOTI"),w=s("G3SR");s("vDqi");a.default.directive("Alphabet",{inserted:function(t){var e=t.querySelector(".el-input__inner");e.onkeyup=function(t){e.value=e.value.replace(/[^a-z0-9]/g,"")},e.onblur=function(t){e.value=e.value.replace(/[^a-z0-9]/g,"")}}});var b,m,$,_,g,y,x,k,S,I,C,D,N,A,R,F,T,E,H,P,O,U,W,B={path:"",service:"ipfs",host:"ipfs.oceanprotocol.com",port:443,protocol:"https",timeout:2e4,verbose:!0};e.default={components:{FileUpload:h},data:function(){return{activeName:"first",walletAddressInput:[{name:"BTC",address:""},{name:"ETH",address:""},{name:"CFX",address:""},{name:"ZEC",address:""}],parserDomain:"",isSubDomain:!1,owner:"",resolver:"",newResolver:"",ipfsHash:"",newResolverInputShow:!1,newOwner:"",newOwnerInputShow:!1,newIPFSHash:"",newIPFSInputShow:!1,subLabel:"",parent:"",detail:"",domainsData:[],isInvalidDomain:!1,isInvalidTld:!1,isExist:!1,isNotExit:!1,isSaveAddress:!1,isSaveResolver:!1,isSaveOwner:!1,isSaveIPFSCID:!1,isAddSubDomain:!1,deleteingUri:"",tld:"",files:[],fileList:[],buffer:"",ipfs:null,pinata:null,fileDatas:[],isUploaing:!1,cidHash:"",cns:null,tns:null,node:null,ipfsMini:null}},mounted:(W=(0,r.default)(n.default.mark((function t(){var e;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.$route.path,this.parserDomain=e.split("/")[2],console.log(this.parserDomain.split(".")),3==this.parserDomain.split(".").length&&(this.isSubDomain=!0),this.checkDomainIsSupport(this.parserDomain),console.log(this.parserDomain),this.init();case 8:case"end":return t.stop()}}),t,this)}))),function(){return W.apply(this,arguments)}),computed:{chainID:function(){return parseInt(this.$store.state.wallet.chainId)},web3Account:function(){return this.$store.state.web3.account},isConflux:function(){return this.$store.state.web3.walletType==o.default.CONFLUXPORTAL},chainType:function(){return this.$store.state.web3.chainType},chainId:function(){return this.$store.state.web3.chainId},chainChanged:function(){return this.$store.state.web3.chainType}},watch:{chainChanged:function(){console.log("chain changed"),this.$nextTick((function(){this.init()}))}},methods:{init:function(){var t=this;this.$nextTick((0,r.default)(n.default.mark((function e(){return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.isConflux?(t.cns=new u.default(t.chainType,t.chainId),t.getConfluxDomainInfo(t.parserDomain)):(t.tns=new l.default(t.web3Account,t.chainType,t.chainId),t.getWeb3DomainInfo(t.parserDomain)),t.ipfs=v(B);case 2:case"end":return e.stop()}}),e,this)}))))},openWebsite:function(){window.open("https://ipfs.oceanprotocol.com/ipfs/"+this.cidHash,"_blank")},clearUpload:(U=(0,r.default)(n.default.mark((function t(){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.files=[],this.cidHash="";case 2:case"end":return t.stop()}}),t,this)}))),function(){return U.apply(this,arguments)}),uploadWebsite:(O=(0,r.default)(n.default.mark((function t(){var e,s,i=this;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.cidHash="",0!=this.files.length){t.next=4;break}return d.Notification.error(this,this.$t("app.error"),this.$t("notify.selectFiles"),6e3),t.abrupt("return");case 4:for(this.isUploaing=!0,e=function(){var t=i.files[s].file,e=i.files[s].name,n=new window.FileReader;n.readAsArrayBuffer(t),n.onloadend=function(){return i.convertToBuffer(e,n)}},s=0;s<this.files.length;s++)e();case 8:case"end":return t.stop()}}),t,this)}))),function(){return O.apply(this,arguments)}),convertToBuffer:(P=(0,r.default)(n.default.mark((function e(s,i){var r,a;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.from(i.result);case 2:if(r=e.sent,this.buffer=r,a={path:s,content:r},this.fileDatas.push(a),this.fileDatas.length!=this.files.length){e.next=9;break}return e.next=9,this.addFile(this.fileDatas);case 9:case"end":return e.stop()}}),e,this)}))),function(t,e){return P.apply(this,arguments)}),addFile:(H=(0,r.default)(n.default.mark((function t(e){var s,i,r=this;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s={pin:!0,wrapWithDirectory:!1,progress:function(t){return console.log("received: "+t)}},i=this,this.ipfs.add(e,s).then((function(t){console.log(t.cid.string),i.cidHash=t.cid.string,i.isUploaing=!1,d.Notification.success(i,i.$t("notify.success"),i.$t("notify.uploadSuccess"),3e3),r.fileDatas=[]})).catch((function(t){r.isUploaing=!1,d.Notification.error(r,r.$t("app.error"),r.$t("app.errorUploading"),6e3),r.fileDatas=[]}));case 3:case"end":return t.stop()}}),t,this)}))),function(t){return H.apply(this,arguments)}),checkDomainIsSupport:function(t){var e=t.split(".").reverse();if(!(e.length>3))return 3==e.length?(this.parent=e[1]+"."+e[0],this.isSubDomain=!0):2==e.length?this.parent=e[0]:1==e.length&&(this.isConflux?(this.parent="cfx",this.parserDomain=e[0]+".cfx"):("BNB"==this.chainType&&(this.parent="bnb",this.parserDomain=e[0]+".bnb"),"ETH"==this.chainType&&(this.parent="defi",this.parserDomain=e[0]+".defi"))),e.length>1&&-1==c.supportTld.indexOf(e[0])?(this.isInvalidTld=!0,void(this.tld=e[0].toUpperCase())):void 0;this.isInvalidDomain=!0},getWeb3DomainInfo:(E=(0,r.default)(n.default.mark((function t(e){var s;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.hash(e),t.next=3,this.tns.exists(e);case 3:if(s=t.sent,this.isExist=s,this.isNotExit=!s,!s){t.next=16;break}return t.next=9,this.tns.owner(e);case 9:return this.owner=t.sent,t.next=12,this.tns.resolver(e);case 12:this.resolver=t.sent,""==this.resolver||this.getWeb3IPFSHash(e),this.getWeb3Address(e),this.getWeb3SubTokenURI(e);case 16:case"end":return t.stop()}}),t,this)}))),function(t){return E.apply(this,arguments)}),getConfluxDomainInfo:(T=(0,r.default)(n.default.mark((function t(e){var s;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.hash(e),t.next=3,this.cns.exists(e);case 3:if(s=t.sent,this.isExist=s,this.isNotExit=!s,!s){t.next=23;break}return t.next=9,this.cns.owner(e);case 9:return this.owner=t.sent,t.next=12,this.cns.resolver(e);case 12:if(this.resolver=t.sent,(0,i.default)(this.resolver)==(0,i.default)("string")){t.next=17;break}this.resolver="",t.next=19;break;case 17:return t.next=19,this.getConfluxIPFSHash(e);case 19:console.log(this.owner),console.log(this.resolver),this.getAddresses(e),this.getSubTokenURI(e);case 23:case"end":return t.stop()}}),t,this)}))),function(t){return T.apply(this,arguments)}),getWeb3Resolver:(F=(0,r.default)(n.default.mark((function t(e){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.hash(e),t.next=3,this.tns.resolver(e);case 3:this.resolver=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return F.apply(this,arguments)}),getResolver:(R=(0,r.default)(n.default.mark((function t(e){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.hash(e),t.next=3,this.cns.resolver(e);case 3:this.resolver=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return R.apply(this,arguments)}),getWeb3Owner:(A=(0,r.default)(n.default.mark((function t(e){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.tns.owner(e);case 2:this.owner=t.sent;case 3:case"end":return t.stop()}}),t,this)}))),function(t){return A.apply(this,arguments)}),getOwner:(N=(0,r.default)(n.default.mark((function t(e){return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f.hash(e),t.next=3,this.cns.owner(e);case 3:this.owner=t.sent;case 4:case"end":return t.stop()}}),t,this)}))),function(t){return N.apply(this,arguments)}),getWeb3SubTokenURI:(D=(0,r.default)(n.default.mark((function t(e){var s,i,r,a,o;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.tns.getSubTokenURI(this.parserDomain);case 2:for(s=t.sent,i=[],r=0;r<s.length;r++)a=f.hash(s[r]),(o={}).uri=s[r],o.tokenId=a,i.push(o);this.domainsData=i;case 6:case"end":return t.stop()}}),t,this)}))),function(t){return D.apply(this,arguments)}),getSubTokenURI:(C=(0,r.default)(n.default.mark((function t(e){var s,i,r,a,o;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.cns.getSubTokenURI(this.parserDomain);case 2:for(s=t.sent,i=[],r=0;r<s.length;r++)a=f.hash(s[r]),(o={}).uri=s[r],o.tokenId=a,i.push(o);this.domainsData=i,console.log(s);case 7:case"end":return t.stop()}}),t,this)}))),function(t){return C.apply(this,arguments)}),getWeb3IPFSHash:(I=(0,r.default)(n.default.mark((function t(e){var s;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.tns.get(e,"ipfs.value");case 4:""!=(s=t.sent)&&(this.ipfsHash=s);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return I.apply(this,arguments)}),getConfluxIPFSHash:(S=(0,r.default)(n.default.mark((function t(e){var s;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.cns.get(e,"ipfs.value");case 4:(s=t.sent).data||"object"!=(void 0===s?"undefined":(0,i.default)(s))&&(this.ipfsHash=s);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return S.apply(this,arguments)}),getWeb3Address:(k=(0,r.default)(n.default.mark((function t(e){var s,i,r,a;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.tns.get(e,"wallet.ZEC.address");case 4:return""!=(s=t.sent)&&(this.walletAddressInput[3].address=s),t.next=8,this.tns.get(e,"wallet.BTC.address");case 8:return""!=(i=t.sent)&&(this.walletAddressInput[0].address=i),t.next=12,this.tns.get(e,"wallet.ETH.address");case 12:return""!=(r=t.sent)&&(this.walletAddressInput[1].address=r),t.next=16,this.tns.get(e,"wallet.CFX.address");case 16:return""!=(a=t.sent)&&(this.walletAddressInput[2].address=a),t.next=20,this.tns.get(e,"wallet.ZEC.address");case 20:""!=(s=t.sent)&&(this.walletAddressInput[3].address=s);case 22:case"end":return t.stop()}}),t,this)}))),function(t){return k.apply(this,arguments)}),getAddresses:(x=(0,r.default)(n.default.mark((function t(e){var s,r,a,o;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.cns.get(e,"wallet.BTC.address");case 4:return s=t.sent,console.log("------------------"),console.log(s),s.data||("object"!=(void 0===s?"undefined":(0,i.default)(s))&&(this.walletAddressInput[0].address=s),console.log(void 0===s?"undefined":(0,i.default)(s))),t.next=10,this.cns.get(e,"wallet.ETH.address");case 10:return(r=t.sent).data||"object"!=(void 0===r?"undefined":(0,i.default)(r))&&(this.walletAddressInput[1].address=r),t.next=14,this.cns.get(e,"wallet.CFX.address");case 14:return(a=t.sent).data||"object"!=(void 0===a?"undefined":(0,i.default)(a))&&(this.walletAddressInput[2].address=a),t.next=18,this.cns.get(e,"wallet.ZEC.address");case 18:(o=t.sent).data||"object"!=(void 0===o?"undefined":(0,i.default)(o))&&(this.walletAddressInput[3].address=o);case 20:case"end":return t.stop()}}),t,this)}))),function(t){return x.apply(this,arguments)}),echo:function(){var t=this.$route.path;console.log(t);var e=t.split("/");console.log(e),console.log(this.parserDomain),console.log(this.isSubDomain);this.parserDomain.split(".")[1];console.log(c.supportTld)},changeNewResolver:(y=(0,r.default)(n.default.mark((function t(){var e,s,i=this;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.newResolver){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.inputRightResolver"),6e3),t.abrupt("return");case 3:if(console.log(this.newResolver),e=w.validate(this.newResolver,"ETH"),!this.isConflux){t.next=12;break}if("0x8"==this.newResolver.substr(0,3)&&e){t.next=10;break}return d.Notification.error(this,this.$t("app.resolverAddressError"),this.$t("app.checkResolverAddress"),3e3),t.abrupt("return");case 10:t.next=15;break;case 12:if(e){t.next=15;break}return d.Notification.error(this,this.$t("app.resolverAddressError"),this.$t("app.checkResolverAddress"),3e3),t.abrupt("return");case 15:if(this.isSaveResolver=!0,d.Notification.info(this,this.$t("notify.setResolver"),this.$t("notify.sureWallet"),5e3),!this.isConflux){t.next=31;break}return t.prev=18,t.next=21,this.cns.setResolver(this.parserDomain,this.newResolver);case 21:this.getResolver(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.setResolverSuccess"),6e3),t.next=28;break;case 25:t.prev=25,t.t0=t.catch(18),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.setReolverError"),5e3);case 28:this.isSaveResolver=!1,t.next=33;break;case 31:s=this,this.tns.setResolver(this.parserDomain,this.newResolver,(function(t,e){})).then((function(t){d.Notification.success(s,s.$t("notify.success"),s.$t("notify.setResolverSuccess"),6e3),s.getWeb3Resolver(s.parserDomain),s.isSaveResolver=!1})).catch((function(t){4001==t.code?d.Notification.error(i,i.$t("app.error"),i.$t("notify.userDenied"),5e3):d.Notification.error(i,i.$t("app.error"),i.$t("notify.setReolverError"),5e3),i.isSaveResolver=!1}));case 33:case"end":return t.stop()}}),t,this,[[18,25]])}))),function(){return y.apply(this,arguments)}),saveChange:(g=(0,r.default)(n.default.mark((function t(){var e,s,i,r,a,o,c,u,l=this;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.walletAddressInput.length,s=0;case 2:if(!(s<e)){t.next=12;break}if(""==this.walletAddressInput[s].address){t.next=9;break}if(i=null,"CFX"==this.walletAddressInput[s].name?(r="0x1"==this.walletAddressInput[s].address.substr(0,3),i=w.validate(this.walletAddressInput[s].address,"ETH")&&r):i=w.validate(this.walletAddressInput[s].address,this.walletAddressInput[s].name),i){t.next=9;break}return"CFX"==this.walletAddressInput[s].name?d.Notification.error(this,"CFX"+this.$t("app.addressError"),this.$t("app.checkAddress"),3e3):d.Notification.error(this,this.walletAddressInput[s].name+this.$t("app.addressError"),this.$t("app.checkAddress"),3e3),t.abrupt("return");case 9:s++,t.next=2;break;case 12:if(this.resolver){t.next=15;break}return d.Notification.error(this,this.$t("app.error"),this.$t("notify.setResolverFirst"),6e3),t.abrupt("return");case 15:for(a=[],o=[],c=!1,s=0;s<this.walletAddressInput.length;s++)"BTC"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(a.push("wallet.BTC.address"),o.push(this.walletAddressInput[s].address)),"ETH"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(a.push("wallet.ETH.address"),o.push(this.walletAddressInput[s].address)),"CFX"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(a.push("wallet.CFX.address"),o.push(this.walletAddressInput[s].address)),"ZEC"==this.walletAddressInput[s].name&&this.walletAddressInput[s].address&&(a.push("wallet.ZEC.address"),o.push(this.walletAddressInput[s].address)),c=c||""!=this.walletAddressInput[s].address;if(c){t.next=22;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.inputRightAddress"),6e3),t.abrupt("return");case 22:if(this.isSaveAddress=!0,d.Notification.info(this,this.$t("notify.addWalletAddress"),this.$t("notify.sureWallet"),5e3),u=this,!this.isConflux){t.next=39;break}return t.prev=26,t.next=29,this.cns.setMulti(this.parserDomain,a,o);case 29:this.getAddresses(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.addWalletAddressSuccess"),5e3),t.next=36;break;case 33:t.prev=33,t.t0=t.catch(26),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.setAddressError"),5e3);case 36:this.isSaveAddress=!1,t.next=40;break;case 39:this.tns.setMulti(this.parserDomain,a,o,(function(t,e){console.log(e)})).then((function(t){d.Notification.success(u,u.$t("notify.success"),u.$t("notify.addWalletAddressSuccess"),6e3),u.isSaveAddress=!1})).catch((function(t){4001==t.code?d.Notification.error(l,l.$t("app.error"),l.$t("notify.userDenied"),5e3):d.Notification.error(l,l.$t("app.error"),l.$t("notify.setAddressError"),5e3),l.isSaveAddress=!1}));case 40:case"end":return t.stop()}}),t,this,[[26,33]])}))),function(){return g.apply(this,arguments)}),changeNewOwner:(_=(0,r.default)(n.default.mark((function t(){var e,s,i=this;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.newOwner){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.inputRightOwner"),6e3),t.abrupt("return");case 3:if(console.log(this.newOwner),e=w.validate(this.newOwner,"ETH"),!this.isConflux){t.next=12;break}if("0x1"==this.newOwner.substr(0,3)&&e){t.next=10;break}return d.Notification.error(this,this.$t("app.addressError"),this.$t("app.checkAddress"),3e3),t.abrupt("return");case 10:t.next=15;break;case 12:if(e){t.next=15;break}return d.Notification.error(this,this.$t("app.addressError"),this.$t("app.checkAddress"),3e3),t.abrupt("return");case 15:if(this.isSaveOwner=!0,d.Notification.info(this,this.$t("notify.setOwner"),this.$t("notify.sureWallet"),5e3),!this.isConflux){t.next=32;break}return t.prev=18,t.next=21,this.cns.setOwner(this.newOwner,this.parserDomain);case 21:this.getOwner(this.parserDomain),this.$store.dispatch("updateCFXDomainPage",0),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.setOwnerSuccess"),6e3),t.next=29;break;case 26:t.prev=26,t.t0=t.catch(18),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.setOwnerError"),5e3);case 29:this.isSaveOwner=!1,t.next=34;break;case 32:s=this,this.tns.setOwner(this.newOwner,this.parserDomain,(function(t,e){console.log(e)})).then((function(t){d.Notification.success(s,s.$t("notify.success"),s.$t("notify.setOwnerSuccess"),6e3),i.$store.dispatch("updateBNBDomainPage",0),s.getWeb3Owner(s.parserDomain),s.isSaveOwner=!1})).catch((function(t){4001==t.code?d.Notification.error(i,i.$t("app.error"),i.$t("notify.userDenied"),5e3):d.Notification.error(i,i.$t("app.error"),i.$t("notify.setOwnerError"),5e3),i.isSaveOwner=!1}));case 34:case"end":return t.stop()}}),t,this,[[18,26]])}))),function(){return _.apply(this,arguments)}),changeNewIPFS:($=(0,r.default)(n.default.mark((function t(){var e,s=this;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.resolver){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("notify.setResolverFirst"),6e3),t.abrupt("return");case 3:if(""!=this.newIPFSHash){t.next=6;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.typeNewIpfsHash"),6e3),t.abrupt("return");case 6:if(46===this.newIPFSHash.length&&this.newIPFSHash.startsWith("Qm")){t.next=9;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.ipfsHashInvalid"),6e3),t.abrupt("return");case 9:if(console.log(this.newIPFSHash),this.isSaveIPFSCID=!0,d.Notification.info(this,this.$t("notify.setIPFSHash"),this.$t("notify.sureWallet"),5e3),!this.isConflux){t.next=26;break}return t.prev=13,t.next=16,this.cns.set(this.parserDomain,"ipfs.value",this.newIPFSHash);case 16:this.getConfluxIPFSHash(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.setIPFSHashSuccess"),6e3),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(13),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.setIPFSError"),5e3);case 23:this.isSaveIPFSCID=!1,t.next=28;break;case 26:e=this,this.tns.set(this.parserDomain,"ipfs.value",this.newIPFSHash,(function(t,e){console.log(e)})).then((function(t){d.Notification.success(e,e.$t("notify.success"),e.$t("notify.setIPFSHashSuccess"),6e3),e.isSaveIPFSCID=!1,e.getWeb3IPFSHash(e.parserDomain)})).catch((function(t){4001==t.code?d.Notification.error(s,s.$t("app.error"),s.$t("notify.userDenied"),5e3):d.Notification.error(s,s.$t("app.error"),s.$t("notify.setIPFSError"),5e3),s.isSaveIPFSCID=!1}));case 28:case"end":return t.stop()}}),t,this,[[13,20]])}))),function(){return $.apply(this,arguments)}),addSubDomain:(m=(0,r.default)(n.default.mark((function t(){var e,s,i,r,a=this;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=this.subLabel){t.next=3;break}return d.Notification.error(this,this.$t("app.error"),this.$t("app.typeANewName"),6e3),t.abrupt("return");case 3:if(e=/[^0-9a-z]/gi,s=(s=this.subLabel.toLowerCase()).replace(e,""),console.log(s),i=s+"."+this.parserDomain,console.log(i),this.isAddSubDomain=!0,!this.isConflux){t.next=20;break}return t.next=13,this.cns.exists(i);case 13:if(!t.sent){t.next=18;break}return d.Notification.info(this,this.$t("app.error"),this.$t("app.domainExist"),5e3),this.isAddSubDomain=!1,t.abrupt("return");case 18:t.next=20;break;case 20:if(d.Notification.info(this,this.$t("notify.addSubDomain"),this.$t("notify.sureWallet"),5e3),!this.isConflux){t.next=36;break}return t.prev=22,t.next=25,this.cns.mintSubURI(this.owner,this.parserDomain,s);case 25:this.getSubTokenURI(this.parserDomain),this.$store.dispatch("updateCFXDomainPage",0),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.addSubDomainSuccess"),6e3),t.next=33;break;case 30:t.prev=30,t.t0=t.catch(22),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.setSubdomainError"),5e3);case 33:this.isAddSubDomain=!1,t.next=38;break;case 36:r=this,this.tns.mintSubURI(this.owner,this.parserDomain,s,(function(t,e){console.log(e)})).then((function(t){d.Notification.success(r,r.$t("notify.success"),r.$t("notify.addSubDomainSuccess"),6e3),r.$store.dispatch("updateBNBDomainPage",0),r.isAddSubDomain=!1,r.getWeb3SubTokenURI(r.parserDomain)})).catch((function(t){4001==t.code?d.Notification.error(a,a.$t("app.error"),a.$t("notify.userDenied"),5e3):d.Notification.error(a,a.$t("app.error"),a.$t("notify.setSubdomainError"),5e3),a.isAddSubDomain=!1}));case 38:case"end":return t.stop()}}),t,this,[[22,30]])}))),function(){return m.apply(this,arguments)}),manageDomain:function(t){console.log(t);var e=this.$router.resolve({path:"/domain/"+t});window.open(e.href,"_blank")},deleteDomain:(b=(0,r.default)(n.default.mark((function t(e){var s,i,r,a,o,c=this;return n.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(d.Notification.info(this,this.$t("notify.deleteSubdomain"),this.$t("notify.sureWallet"),5e3),this.deleteingUri=e,s=e.split("."),i=s[0],r=s[1]+"."+s[2],a=f.hash(r),!this.isConflux){t.next=22;break}return t.prev=7,t.next=10,this.cns.burnSubToken(a,i);case 10:this.$store.dispatch("updateCFXDomainPage",0),this.getSubTokenURI(this.parserDomain),d.Notification.success(this,this.$t("notify.success"),this.$t("notify.deleteSubDomainSuccess"),6e3),this.deleteingUri="",t.next=20;break;case 16:t.prev=16,t.t0=t.catch(7),4001==t.t0.code?d.Notification.error(this,this.$t("app.error"),this.$t("notify.userDenied"),5e3):d.Notification.error(this,this.$t("app.error"),this.$t("notify.deleteSubdomainError"),5e3),this.deleteingUri="";case 20:t.next=24;break;case 22:o=this,this.tns.burnSubToken(a,i,(function(t,e){o.$store.dispatch("updateBNBDomainPage",0),o.getSubTokenURI(o.parserDomain)})).then((function(t){d.Notification.success(o,o.$t("notify.success"),o.$t("notify.addSubDomainSuccess"),6e3),o.deleteingUri="",o.getWeb3SubTokenURI(o.parserDomain)})).catch((function(t){4001==t.code?d.Notification.error(c,c.$t("app.error"),c.$t("notify.userDenied"),5e3):d.Notification.error(c,c.$t("app.error"),c.$t("notify.deleteSubdomainError"),5e3),c.deleteingUri=""}));case 24:case"end":return t.stop()}}),t,this,[[7,16]])}))),function(t){return b.apply(this,arguments)}),subTokenUri:function(t){return t.slice(0,10)+"..."+t.slice(-6)},doCopy:function(t){this.$copyText(t).then((function(t){this.$message({message:"复制成功",type:"success"})}),(function(t){console.log(t)}))},onCopy:function(){this.$message({message:"复制成功",type:"success"})},onSubmit:function(){this.$message("submit!")},onCancel:function(){this.$message({message:"cancel!",type:"warning"})}}}}).call(this,s("tjlA").Buffer)},Iawr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Notification=void 0;var i=r(s("iCc5")),n=r(s("V7oC"));function r(t){return t&&t.__esModule?t:{default:t}}var a=e.Notification=function(){function t(){(0,i.default)(this,t)}return(0,n.default)(t,null,[{key:"notify",value:function(t,e,s,i,n){t.$notify({title:e,message:s,type:i,duration:n})}},{key:"info",value:function(t,e,s,i){t.$notify.info({title:e,message:s,duration:i})}},{key:"success",value:function(t,e,s,i){t.$notify({title:e,message:s,type:"success",duration:i})}},{key:"error",value:function(t,e,s,i){t.$notify.error({title:e,message:s,duration:i})}}]),t}();e.default=a},VhMY:function(t,e,s){},hKhY:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[t.isExist?s("div",{staticClass:"my-domains"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title",on:{click:function(e){t.echo()}}},[t._v(t._s(t.parserDomain))]),t._v(" "),s("div",{staticClass:"total"})]),t._v(" "),s("div",{staticClass:"right"})]):t._e(),t._v(" "),t.isExist?s("div",[s("div",{staticClass:"domains-tabbar"},[s("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[s("el-tab-pane",{attrs:{label:t.$t("app.resolver"),name:"first"}},[s("div",{staticClass:"resolver"},[s("div",{staticClass:"title"},[t._v("Resolver")]),t._v(" "),s("div",{staticClass:"address",on:{click:function(e){t.newResolverInputShow=!t.newResolverInputShow}}},[t.resolver?t._e():s("span",[t._v(t._s(t.$t("app.resolverIsNotSet")))]),t._v(" "),t.resolver?s("span",[t._v(t._s(t.resolver))]):t._e()]),t._v(" "),t.newResolverInputShow?s("div",{staticStyle:{"margin-top":"20px"}},[s("el-input",{attrs:{placeholder:t.$t("app.inputNewResolerAddress")},model:{value:t.newResolver,callback:function(e){t.newResolver=e},expression:"newResolver"}},[s("el-button",{attrs:{slot:"append",loading:t.isSaveResolver,disabled:t.isSaveResolver,type:"primary"},on:{click:function(e){t.changeNewResolver()}},slot:"append"},[t._v(t._s(t.$t("button.sure")))])],1)],1):t._e()]),t._v(" "),s("div",{staticClass:"add-address"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("app.addCryptoAddress")))]),t._v(" "),s("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("app.addYourCryptoAddressToDomain")))]),t._v(" "),s("div",{staticClass:"input-address"},[s("div",{staticClass:"row"},[s("div",{staticClass:"left"},[t._v(t._s(t.$t("app.currency")))]),t._v(" "),s("div",{staticClass:"right"},[t._v(t._s(t.$t("app.address")))])]),t._v(" "),t._l(t.walletAddressInput,(function(e){return s("div",{staticClass:"row"},[s("div",{staticClass:"left"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"right"},[s("el-input",{attrs:{placeholder:t.$t("app.enterYourWalletAddress")},model:{value:e.address,callback:function(s){t.$set(e,"address",s)},expression:"item.address"}})],1)])})),t._v(" "),s("div",{staticClass:"center"},[s("el-button",{attrs:{type:"primary",loading:t.isSaveAddress,disabled:t.isSaveAddress},on:{click:function(e){t.saveChange()}}},[t._v(t._s(t.$t("app.saveChange")))])],1)],2)])]),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("app.manage"),name:"second"}},[s("div",{staticClass:"resolver"},[s("div",{staticClass:"title"},[t._v("Owner")]),t._v(" "),s("div",{staticClass:"address",on:{click:function(e){t.newOwnerInputShow=!t.newOwnerInputShow}}},[t._v(t._s(t.owner)+" ")]),t._v(" "),t.newOwnerInputShow?s("div",{staticStyle:{"margin-top":"20px"}},[s("el-input",{attrs:{placeholder:t.$t("app.inputRightOwner")},model:{value:t.newOwner,callback:function(e){t.newOwner=e},expression:"newOwner"}},[s("el-button",{attrs:{slot:"append",loading:t.isSaveOwner,disabled:t.isSaveOwner,type:"primary"},on:{click:function(e){t.changeNewOwner()}},slot:"append"},[t._v(t._s(t.$t("button.sure")))])],1),t._v(" "),s("div",{staticClass:"warning"},[t._v(t._s(t.$t("app.warnChangeOwner")))])],1):t._e()]),t._v(" "),s("div",{staticClass:"mint-subdomain"},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("app.addSubDomain")))]),t._v(" "),s("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("app.addSubDomainInfo")))]),t._v(" "),s("div",{staticClass:"subtitle"},[s("div",{staticClass:"row"},[s("div",{staticClass:"tips"},[t._v(t._s(t.$t("app.subLabelTips")))])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"left"},[t._v(t._s(t.$t("app.subdomainName")))]),t._v(" "),s("div",{staticClass:"right"},[s("el-input",{attrs:{disabled:t.isSubDomain,placeholder:t.$t("app.typeANewName"),onkeyup:"this.value = this.value.replace(/[^a-z0-9]/g,'')"},model:{value:t.subLabel,callback:function(e){t.subLabel=e},expression:"subLabel"}})],1)]),t._v(" "),s("div",{staticClass:"center"},[s("el-button",{attrs:{disabled:t.isSubDomain||t.isAddSubDomain,loading:t.isAddSubDomain,type:"primary"},on:{click:function(e){t.addSubDomain()}}},[t._v(t._s(t.$t("app.addSubDomain")))])],1)]),t._v(" "),t.domainsData.length>0?s("div",{staticClass:"subdomain-list"},[s("div",{staticClass:"title-row"},[s("div",{staticClass:"left"},[s("div",{staticClass:"token-uri"},[t._v(t._s(t.$t("app.subDomain")))]),t._v(" "),s("div",{staticClass:"token-id"},[t._v(t._s(t.$t("app.subTokenId")))])])]),t._v(" "),t._l(t.domainsData,(function(e,i){return s("div",{staticClass:"domains-row"},[s("div",{staticClass:"left"},[s("div",{staticClass:"token-uri"},[t._v(t._s(e.uri))]),t._v(" "),s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:e.tokenId,placement:"top"}},[s("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.tokenId,expression:"domain.tokenId",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"token-id"},[t._v(t._s(t.subTokenUri(e.tokenId))+" ")])])],1),t._v(" "),s("div",{staticClass:"right"},[s("el-button",{attrs:{type:"danger",loading:t.deleteingUri==e.uri,plain:""},on:{click:function(s){t.deleteDomain(e.uri)}}},[t._v(t._s(t.$t("app.deleteDomain")))]),t._v(" "),s("el-button",{attrs:{type:"primary",plain:""},on:{click:function(s){t.manageDomain(e.uri)}}},[t._v(t._s(t.$t("app.managerDomain")))])],1)])}))],2):t._e()])]),t._v(" "),s("el-tab-pane",{attrs:{label:t.$t("app.website"),name:"third"}},[s("div",{staticClass:"resolver"},[s("div",{staticClass:"title"},[t._v("IPFS CID")]),t._v(" "),s("div",{staticClass:"address",on:{click:function(e){t.newIPFSInputShow=!t.newIPFSInputShow}}},[t.ipfsHash?t._e():s("span",[t._v(t._s(t.$t("app.ipfsHashIsNotSet")))]),t._v(" "),t.ipfsHash?s("span",[t._v(t._s(t.ipfsHash))]):t._e()]),t._v(" "),t.newIPFSInputShow?s("div",{staticStyle:{"margin-top":"20px"}},[s("el-input",{attrs:{placeholder:t.$t("app.typeNewIpfsHash")},model:{value:t.newIPFSHash,callback:function(e){t.newIPFSHash=e},expression:"newIPFSHash"}},[s("el-button",{attrs:{slot:"append",loading:t.isSaveIPFSCID,disabled:t.isSaveIPFSCID,type:"primary"},on:{click:function(e){t.changeNewIPFS()}},slot:"append"},[t._v(t._s(t.$t("button.sure")))])],1)],1):t._e()]),t._v(" "),s("div",{staticClass:"upload",attrs:{id:"select_frame"}},[s("div",{staticClass:"title"},[t._v(t._s(t.$t("app.uploadFileToIPFS")))]),t._v(" "),s("div",{staticClass:"ipfs-upload-drag select-container"},[s("div",{staticClass:"upload"},[t.files.length?s("ul",t._l(t.files,(function(e,i){return s("li",{key:e.id},[s("span",[t._v(t._s(e.name))]),t._v(" -\n                      "),s("span",[t._v(t._s(e.size)+" bytes")]),t._v(" -\n                      "),e.error?s("span",[t._v(t._s(e.error))]):e.success?s("span",[t._v("success")]):e.active?s("span",[t._v("active")]):s("span")])}))):s("div",[s("div",[s("div",{staticClass:"text-center"},[s("h4",[t._v(t._s(t.$t("app.dragFileHere"))),s("br"),s("br"),t._v(t._s(t.$t("app.or")))]),t._v(" "),s("label",{staticClass:"btn btn-lg btn-primary",staticStyle:{cursor:"pointer"},attrs:{for:"file"}},[t._v(t._s(t.$t("app.selectFile")))])])])]),t._v(" "),s("div",{staticClass:"ipfs-upload-btn"},[s("file-upload",{ref:"upload",staticClass:"btn btn-primary",attrs:{"post-action":"/upload/post",multiple:!0,drop:!0,"drop-directory":!0,multiple:"",webkitdirectory:"",mozdirectory:"true",directory:""},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}},[s("i",{staticClass:"fa fa-plus"})])],1)])]),t._v(" "),s("div",{staticClass:"center"},[s("br"),t._v(" "),s("el-button",{attrs:{type:"primary",plain:"",disabled:t.isUploaing},on:{click:function(e){t.clearUpload()}}},[t._v(t._s(t.$t("app.clearUpload")))]),t._v(" "),s("el-button",{staticStyle:{"margin-left":"70px"},attrs:{type:"primary",loading:t.isUploaing},on:{click:function(e){t.uploadWebsite()}}},[t._v(t._s(t.$t("app.confirmUpload")))]),t._v(" "),s("br"),s("br")],1),t._v(" "),""!=t.cidHash?s("div",{staticClass:"center"},[s("br"),t._v(" "),s("div",{staticClass:"cid-hash"},[t._v(t._s(t.$t("app.yourIPFSCid"))+": "),s("span",{staticStyle:{color:"#2CD370"}},[t._v(t._s(t.cidHash))])]),t._v(" "),s("a",{on:{click:function(e){t.openWebsite()}}},[s("div",{staticClass:"cid-preview"},[t._v(t._s(t.$t("app.clickAndView")))])]),t._v(" "),s("br"),s("br")]):t._e()])])],1)],1)]):t._e(),t._v(" "),t.isInvalidDomain?s("div",{staticClass:"error-domains-row"},[s("span",[s("svg-icon",{attrs:{"icon-class":"error"}})],1),t._v(" "),s("span",[t._v(t._s(t.$t("app.formatError")))])]):t._e(),t._v(" "),t.isInvalidTld?s("div",{staticClass:"error-domains-row"},[s("span",[s("svg-icon",{attrs:{"icon-class":"error"}})],1),t._v(" "),s("span",[t._v(t._s(t.tld)+" "+t._s(t.$t("app.isNotSupportTLD"))+" ")])]):t._e(),t._v(" "),!t.isNotExit||t.isInvalidTld||t.isInvalidDomain?t._e():s("div",{staticClass:"error-domains-row"},[s("span",[s("svg-icon",{attrs:{"icon-class":"error"}})],1),t._v(" "),s("span",[t._v(t._s(t.$t("app.theDomainIsNotRegistor")))])])])},n=[];s.d(e,"a",(function(){return i})),s.d(e,"b",(function(){return n}))},ys1c:function(t,e,s){"use strict";s.r(e);var i=s("EIFw"),n=s.n(i);for(var r in i)"default"!==r&&function(t){s.d(e,t,(function(){return i[t]}))}(r);e.default=n.a}}]);