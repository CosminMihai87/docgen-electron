(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(22),c=a.n(l),i=(a(96),a(97),a(31)),o=a(12),d=a(9),s=a(8),u=n.a.createContext({step:0,persoana_creditor:"",persoana_debitor:"",nume_creditor:"",nume_debitor:"",domiciliul_creditor:"",domiciliul_debitor:"",sediul_creditor:"",sediul_debitor:"",judetul_creditor:"",judetul_debitor:"",titlu_executoriu:"",CUI_debitor:"",CNP_debitor:"",debit:"",mijloace_de_executie:[],nr_folders:0,updateStep:function(){},updateDetails:function(){},updateMijloaceDeExecutie:function(){},reset:function(){}}),m=function(e){var t=Object(r.useState)({step:0,persoana_creditor:"",persoana_debitor:"",nume_creditor:"",nume_debitor:"",domiciliul_creditor:"",domiciliul_debitor:"",sediul_creditor:"",sediul_debitor:"",judetul_creditor:"",judetul_debitor:"",titlu_executoriu:"",CUI_debitor:"",CNP_debitor:"",debit:"",mijloace_de_executie:[],nr_folders:0}),a=Object(s.a)(t,2),l=a[0],c=a[1];return n.a.createElement(u.Provider,{value:{data:l,updateStep:function(e){c(Object(d.a)({},l,{step:e}))},updateDetails:function(e){c(Object(d.a)({},l,e))},updateMijloaceDeExecutie:function(e){c(Object(d.a)({},l,{mijloace_de_executie:[].concat(Object(o.a)(l.mijloace_de_executie),[e])}))},reset:function(){c(Object(d.a)({},l,{step:0,persoana_creditor:"",persoana_debitor:"",nume_creditor:"",nume_debitor:"",domiciliul_creditor:"",domiciliul_debitor:"",sediul_creditor:"",sediul_debitor:"",judetul_creditor:"",judetul_debitor:"",titlu_executoriu:"",CUI_debitor:"",CNP_debitor:"",debit:"",mijloace_de_executie:[]}))}}},e.children)},x=a(16),b=a(86),p=a.n(b),E=a(87),f=a.n(E),g=a(88),h=a.n(g),v=function(){return n.a.createElement(x.Header,{"aria-label":"Executor App"},n.a.createElement(x.SkipToContent,null),n.a.createElement(x.HeaderName,{element:i.b,to:"/",prefix:"Umbral Studios - "},"Executor App"),n.a.createElement(x.HeaderNavigation,{"aria-label":"About Us"},n.a.createElement(x.HeaderMenuItem,{element:i.b,to:"/"},"About Us")),n.a.createElement(x.HeaderGlobalBar,null,n.a.createElement(x.HeaderGlobalAction,{"aria-label":"Notifications"},n.a.createElement(p.a,null)),n.a.createElement(x.HeaderGlobalAction,{"aria-label":"User Avatar"},n.a.createElement(f.a,null)),n.a.createElement(x.HeaderGlobalAction,{"aria-label":"App Switcher"},n.a.createElement(h.a,null))))},_=a(206),T=a(203),N=(a(131),a(132),a(197)),j=(a(133),function(){var e=Object(r.useContext)(u).data.step;return Object(r.useEffect)(function(){document.getElementsByClassName("bx--progress-step-button")[0].childNodes[0].setAttribute("viewBox","0 0 16 16"),document.getElementsByClassName("bx--progress-step-button")[1].childNodes[0].setAttribute("viewBox","0 0 16 16"),document.getElementsByClassName("bx--progress-step-button")[2].childNodes[0].setAttribute("viewBox","0 0 16 16")}),n.a.createElement("div",{className:"bx--row progress-indicator"},n.a.createElement(N.a,{currentIndex:e},n.a.createElement(N.b,{description:"Creditor",label:"Creditor"}),n.a.createElement(N.b,{description:"Debitor",label:"Debitor"}),n.a.createElement(N.b,{description:"Machete",label:"Machete"})))}),O=(a(134),a(204)),S=a(198),C=a(199),y=a(200),k=a(205),w=function(){var e=Object(r.useContext)(u),t=Object(r.useState)(!0),a=Object(s.a)(t,2),l=a[0],c=a[1],i=function(e){return n.a.createElement(O.a,e)};i.defaultProps={className:"className",disabled:!1,helperText:"",id:"id",invalid:!1,invalidText:"",labelText:"labelText",light:!1,placeholder:"Placeholder text",type:"text"};return n.a.createElement("div",{className:"bx--row"},n.a.createElement(S.a,{className:"bx-col-lg-16 bx--col-sm-4 creditor-form",onSubmit:function(t){return function(t){var a=new FormData(t.target);"Fizica"===a.get("select1")?e.updateDetails({step:1,persoana_creditor:a.get("select1"),nume_creditor:a.get("textinput1"),domiciliul_creditor:a.get("textinput2"),judetul_creditor:a.get("textinput3"),titlu_executoriu:a.get("textinput4"),debit:a.get("textinput5")}):"Juridica"===a.get("select1")&&e.updateDetails({step:1,persoana_creditor:a.get("select1"),nume_creditor:a.get("textinput1"),sediul_creditor:a.get("textinput2"),judetul_creditor:a.get("textinput3"),titlu_executoriu:a.get("textinput4"),debit:a.get("textinput5")})}(t)}},n.a.createElement("div",{className:"bx--row"},n.a.createElement("div",{className:"bx--col-lg-2 bx--col-sm-2"},n.a.createElement(C.a,{className:"generare-dosar-form-1",defaultValue:e.data.persoana_creditor,disabled:!1,helperText:"",iconDescription:"open list of options",id:"select1",inline:!1,invalid:!1,invalidText:"",labelText:"Persoana:",light:!1,name:"select1",onChange:function(){c(!l)},required:!0},n.a.createElement(y.a,{disabled:!1,hidden:!1,text:"Fizica",value:"Fizica"}),n.a.createElement(y.a,{disabled:!1,hidden:!1,text:"Juridica",value:"Juridica"}))),n.a.createElement("div",{className:"bx--col-lg-4 bx--col-sm-4"},l?n.a.createElement(i,{className:"generare-dosar-form-2",defaultValue:e.data.nume_creditor,id:"textinput1",labelText:"Nume/Prenume:",name:"textinput1",placeholder:"Ex: Andreca Niculache",required:!0}):n.a.createElement(i,{className:"generare-dosar-form-2",defaultValue:e.data.nume_creditor,id:"textinput1",labelText:"Denumire Societate:",name:"textinput1",placeholder:"Ex: S.C. POLARISAN M HOLDING S.R.L.",required:!0})),n.a.createElement("div",{className:"bx--col-lg-6 bx--col-sm-4"},l?n.a.createElement(i,{className:"generare-dosar-form-3",defaultValue:e.data.domiciliul_creditor,id:"textinput2",labelText:"cu domiciliul in:",name:"textinput2",placeholder:"Ex: com. Gruia, sat Izvoarele",required:!0}):n.a.createElement(i,{className:"generare-dosar-form-3",defaultValue:e.data.sediul_creditor,id:"textinput2",labelText:"cu sediul:",name:"textinput2",placeholder:"Ex: Alexandria, str. Libertatii, nr.230A, et. 2",required:!0})),n.a.createElement("div",{className:"bx--col-lg-4 bx--col-sm-2"},n.a.createElement(i,{className:"generare-dosar-form-4",defaultValue:e.data.judetul_creditor,id:"textinput3",labelText:"judetul:",name:"textinput3",placeholder:"Ex: Teleorman",required:!0}))),n.a.createElement("div",{className:"bx--row"},n.a.createElement("div",{className:"bx--col-lg-8 bx--col-sm-4"},n.a.createElement(i,{className:"generare-dosar-form-5",defaultValue:e.data.titlu_executoriu,id:"textinput4",labelText:"Titlu Executoriu:",name:"textinput4",placeholder:"Ex: Sentinta Civila nr. 321/01.09.2018, pronuntata de Judecatoria Zimnicea",required:!0})),n.a.createElement("div",{className:"bx--col-lg-8 bx--col-sm-4"},n.a.createElement(i,{className:"generare-dosar-form-5",defaultValue:e.data.debit,id:"textinput5",labelText:"Debit:",name:"textinput5",placeholder:"Ex: 12345",required:!0}))),n.a.createElement("div",{className:"bx--row submit-row-creditor"},n.a.createElement("div",{className:"bx--col-lg-16 bx--col-sm-4"},n.a.createElement(k.a,{className:"generare-dosar-form-6",disabled:!1,kind:"primary",tabIndex:0,type:"submit"},"Pasul Urmator")))))},A=(a(135),function(){var e=Object(r.useContext)(u),t=Object(r.useState)(!0),a=Object(s.a)(t,2),l=a[0],c=a[1],i=function(e){return n.a.createElement(O.a,e)};i.defaultProps={className:"className",disabled:!1,helperText:"",id:"id",invalid:!1,invalidText:"Completarea campului este necesara pentru a trece mai departe.",labelText:"labelText",light:!1,placeholder:"Placeholder text",type:"text"};return n.a.createElement("div",{className:"bx--row"},n.a.createElement(S.a,{className:"bx-col-lg-16 bx--col-sm-4 debitor-form",onSubmit:function(t){return function(t){var a=new FormData(t.target);"Fizica"===a.get("select1")?e.updateDetails({step:2,persoana_debitor:a.get("select1"),nume_debitor:a.get("textinput1"),CNP_debitor:a.get("textinput2"),domiciliul_debitor:a.get("textinput3"),judetul_debitor:a.get("textinput4"),titlu_executoriu:a.get("textinput5")}):"Juridica"===a.get("select1")&&e.updateDetails({step:2,persoana_debitor:a.get("select1"),nume_debitor:a.get("textinput1"),CUI_debitor:a.get("textinput2"),sediul_debitor:a.get("textinput3"),judetul_debitor:a.get("textinput4"),titlu_executoriu:a.get("textinput5")})}(t)}},n.a.createElement("div",{className:"bx--row"},n.a.createElement("div",{className:"bx--col-lg-2 bx--col-sm-4"},n.a.createElement(C.a,{className:"generare-dosar-form-1",defaultValue:e.data.persoana_debitor,disabled:!1,helperText:"",iconDescription:"open list of options",id:"select-1",inline:!1,invalid:!1,invalidText:"",labelText:"Persoana:",light:!1,name:"select1",onChange:function(){c(!l)},required:!0},n.a.createElement(y.a,{disabled:!1,hidden:!1,text:"Fizica",value:"Fizica"}),n.a.createElement(y.a,{disabled:!1,hidden:!1,text:"Juridica",value:"Juridica"}))),n.a.createElement("div",{className:"bx--col-lg-4 bx--col-sm-2"},l?n.a.createElement(i,{className:"generare-dosar-form-2",defaultValue:e.data.nume_debitor,id:"textinput1",labelText:"Nume/Prenume:",name:"textinput1",placeholder:"Ex: Andrei Neculce",required:!0}):n.a.createElement(i,{className:"generare-dosar-form-2",defaultValue:e.data.nume_debitor,id:"textinput1",labelText:"Denumire Societate:",name:"textinput1",placeholder:"Ex: S.C. POLARIS M HOLDING S.R.L.",required:!0})),n.a.createElement("div",{className:"bx--col-lg-2 bx--col-sm-2"},l?n.a.createElement(i,{className:"generare-dosar-form-3",defaultValue:e.data.CNP_debitor,id:"textinput2",labelText:"CNP:",name:"textinput2",placeholder:"Ex: 1871123474321",required:!0}):n.a.createElement(i,{className:"generare-dosar-form-3",defaultValue:e.data.CUI_debitor,id:"textinput2",labelText:"CUI:",name:"textinput2",placeholder:"Ex: 6859662",required:!0})),n.a.createElement("div",{className:"bx--col-lg-6 bx--col-sm-4"},l?n.a.createElement(i,{className:"generare-dosar-form-4",defaultValue:e.data.domiciliul_debitor,id:"textinput3",labelText:"cu domiciliul in:",name:"textinput3",placeholder:"Ex: com. Gruia, sat Izvoarele",required:!0}):n.a.createElement(i,{className:"generare-dosar-form-4",defaultValue:e.data.sediul_debitor,id:"textinput3",labelText:"cu sediul procesual ales in:",name:"textinput3",placeholder:"Ex: Alexandria, str. Libertatii, nr.244A, et. 1",required:!0})),n.a.createElement("div",{className:"bx--col-lg-2 bx--col-sm-2"},n.a.createElement(i,{className:"generare-dosar-form-5",defaultValue:e.data.judetul_debitor,id:"textinput4",labelText:"judetul:",name:"textinput4",placeholder:"Ex: Teleorman",required:!0}))),n.a.createElement("div",{className:"bx--row"},n.a.createElement("div",{className:"bx--col-lg-8 bx--col-sm-4"},n.a.createElement(i,{className:"generare-dosar-form-6",defaultValue:e.data.titlu_executoriu,id:"textinput5",labelText:"Titlu Executoriu:",name:"textinput5",placeholder:"Ex: Sentinta Civila nr. 421/01.09.2018, pronuntata de Judecatoria Zimnicea",required:!0})),n.a.createElement("div",{className:"bx--col-lg-8 bx--col-sm-4"},n.a.createElement(i,{className:"generare-dosar-form-5",defaultValue:e.data.debit,id:"textinput6",labelText:"Debit:",name:"textinput6",placeholder:"Ex: 12345",required:!0}))),n.a.createElement("div",{className:"bx--row submit-row-debitor"},n.a.createElement("div",{className:"bx--col-lg-8 bx--col-sm-2"},n.a.createElement(k.a,{className:"generare-dosar-form-7",disabled:!1,kind:"primary",onClick:function(){e.updateDetails({step:0})},tabIndex:0,type:"submit"},"Pasul Precedent")),n.a.createElement("div",{className:"bx--col-lg-8 bx--col-sm-2"},n.a.createElement(k.a,{className:"generare-dosar-form-8",disabled:!1,kind:"primary",tabIndex:0,type:"submit"},"Pasul Urmator")))))}),D=(a(136),a(53),a(201)),F=a(202),P=a(30),I=a.n(P),V=a(28),L=a(4),R=window.require("electron").remote,M=R.require("fs"),G=R.require("path"),q=a(141),z=a(160),U=a(73).remote.app.getAppPath(),J=G.resolve(U+"//output//"),H=G.resolve(U+"//src//assets//templates//"),B=function(e,t,a){var r=e[0].children.filter(function(e){return"file"===e.type}).map(function(e){return G.join(H,e.label+".docx")}),n=e[0].children.filter(function(e){return"file"===e.type}).map(function(e){return G.join(e.label+".docx")}),l=e[0].children.filter(function(e){return"folder"===e.type}).map(function(e){return e.label}),c=J;"defaultPath"!==a&&(c=a),process.nextTick(function(){var e=t.nr_folders+1,a="Ds. ".concat(e," din 2019 (").concat(t.nume_creditor," vs ").concat(t.nume_debitor,")");if(!M.existsSync(c))try{M.mkdir(c,function(e){if(e)throw e})}catch(i){return void console.log("Error when executing mkdir on the main folder: ".concat(i))}M.existsSync(G.resolve(c+"//"+a))&&function e(t,a){try{if(M.existsSync(t)){void 0===a&&(a=!0);try{var r=M.readdirSync(t)}catch(c){return}if(r.length>0)for(var n=0;n<r.length;n++){var l=G.join(t,r[n]);M.statSync(l).isFile()?M.unlinkSync(l):e(l)}a&&M.rmdirSync(t)}}catch(i){var c={message:i.message,name:i.name};throw console.log(JSON.stringify({error:c})),i}}(G.resolve(c+"//"+a),!0);try{M.mkdir(G.join(c,a),{recursive:!1},function(){for(var e=0;e<=l.length-1;e++)try{M.mkdirSync(G.join(c,a,l[e]))}catch(i){console.log("Error when executing mkdirSync in a loop on 'folders' array: ".concat(i))}for(var o=0;o<=r.length-1;o++){var d=null;try{if(M.existsSync(r[o]))try{d=M.readFileSync(r[o],"binary");var s=new q(d),u=new z;u.loadZip(s),u.setData({nume_creditor:t.nume_creditor,nume_debitor:t.nume_debitor,titlu_executoriu:t.titlu_executoriu});try{u.render()}catch(i){var m={message:i.message,name:i.name,stack:i.stack,properties:i.properties};throw console.log(JSON.stringify({error:m})),i}var x=u.getZip().generate({type:"nodebuffer"}),b=n[o];try{M.writeFileSync(G.join(c,a,b),x)}catch(i){console.log("Error when executing writeFileSync in a loop on ".concat(G.join(c,a,b)[o],": ").concat(i))}}catch(i){console.log("Error when executing readFileSync in a loop on ".concat(r[o],": ").concat(i))}}catch(i){console.log("Error when executing existsSync in a loop on ".concat(r[o],": ").concat(i))}}})}catch(i){console.log("Error when executing mkdir on the main folder: ".concat(i))}})},K=a(89),Z=a.n(K).a.create({baseURL:"https://docgen-electron.firebaseio.com/"}),Q=function(e,t){return Object(d.a)({},e,t)},W={loading:!1,error:"",status:"",statusText:"",id:""},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POST_FOLDER_START":return function(e){return Q(e,{loading:!0})}(e);case"POST_FOLDER_SUCCESS":return function(e,t){return Q(e,{loading:!1,status:t.status,statusText:t.statusText,id:t.id})}(e,t);case"POST_FOLDER_FAIL":return function(e,t){return Q(e,{loading:!1,error:t.error})}(e,t);default:return e}},X={loading:!1,error:"",status:"",statusText:"",id:"",data:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_MACHETE_START":return function(e){return Q(e,{loading:!0})}(e);case"GET_MACHETE_SUCCESS":return function(e,t){return Q(e,{loading:!1,status:t.status,statusText:t.statusText,id:t.id,data:t.data})}(e,t);case"GET_MACHETE_FAIL":return function(e,t){return Q(e,{loading:!1,error:t.error})}(e,t);default:return e}},ee={loading:!1,error:"",status:"",statusText:"",id:"",data:[],nr_folders:0},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_FOLDERS_START":return function(e){return Q(e,{loading:!0})}(e);case"GET_FOLDERS_SUCCESS":return function(e,t){return Q(e,{loading:!1,status:t.status,statusText:t.statusText,id:t.id,data:t.data,nr_folders:t.nr_folders})}(e,t);case"GET_FOLDERS_FAIL":return function(e,t){return Q(e,{loading:!1,error:t.error})}(e,t);default:return e}},ae=function(){var e=Object(r.useReducer)($,{loading:!1,error:"",status:"",statusText:"",id:""}),t=Object(s.a)(e,2),a=t[0],n=t[1],l=Object(r.useReducer)(Y,{loading:!1,error:"",status:"",statusText:"",id:"",data:[]}),c=Object(s.a)(l,2),i=c[0],o=c[1],d=Object(r.useReducer)(te,{loading:!1,error:"",status:"",statusText:"",id:"",data:[],nr_folders:0}),u=Object(s.a)(d,2),m=u[0],x=u[1];return{postFolder:Object(r.useCallback)(function(e){n({type:"POST_FOLDER_START"}),Z.post("https://docgen-electron.firebaseio.com/FolderStructure/2019.json",JSON.stringify(e),{headers:{Auth:"AIzaSyDAlC_hhvEQArrmVeJGMhVTzKbt7V4rjao","content-type":"application/x-www-form-urlencoded"}}).then(function(e){n({type:"POST_FOLDER_SUCCESS",status:e.status,statusText:e.statusText,id:e.data.name})}).catch(function(e){n({type:"POST_FOLDER_FAIL",error:e})})},[]),postFolderState:a,getMachete:Object(r.useCallback)(function(){o({type:"GET_MACHETE_START"}),Z.get("https://docgen-electron.firebaseio.com/Machete.json",{headers:{Auth:"AIzaSyDAlC_hhvEQArrmVeJGMhVTzKbt7V4rjao","content-type":"application/x-www-form-urlencoded"}}).then(function(e){o({type:"GET_MACHETE_SUCCESS",status:e.status,statusText:e.statusText,id:Object.keys(e.data)[0],data:e.data[Object.keys(e.data)[0]]})}).catch(function(e){o({type:"GET_MACHETE_FAIL",error:e})})},[]),getMacheteState:i,getFolders:function(){x({type:"GET_FOLDERS_START"}),Z.get("https://docgen-electron.firebaseio.com/FolderStructure/2019.json",{headers:{Auth:"AIzaSyDAlC_hhvEQArrmVeJGMhVTzKbt7V4rjao","content-type":"application/x-www-form-urlencoded"}}).then(function(e){x({type:"GET_FOLDERS_SUCCESS",status:e.status,statusText:e.statusText,id:Object.keys(e.data),data:Object.keys(e.data).map(function(t){return e.data[t][0]}),nr_folders:Object.keys(e.data).map(function(t){return e.data[t][0]}).length})}).catch(function(e){x({type:"GET_FOLDERS_FAIL",error:e})})},getFoldersState:m}},re=function(){var e=ae(),t=e.postFolder,l=e.postFolderState,c=e.getMachete,i=e.getMacheteState,m=Object(V.useToasts)().addToast,x=Object(r.useContext)(u),b=Object(r.useState)(x.data.nr_folders+1),p=Object(s.a)(b,2),E=p[0],f=p[1],g=Object(r.useState)([]),h=Object(s.a)(g,2),v=h[0],_=(h[1],Object(r.useState)([{value:"".concat(E,"parent"),type:"folder",label:"Ds. ".concat(E," din 2019 (").concat(x.data.nume_creditor," vs. ").concat(x.data.nume_debitor,")"),children:[]}])),T=Object(s.a)(_,2),N=T[0],j=T[1];Object(r.useEffect)(function(){c()},[]);var S=Object(r.useState)({checked:[],expanded:[]}),C=Object(s.a)(S,2),y=C[0],w=C[1],A=Object(r.useState)({checked:[],expanded:["".concat(E,"parent")]}),P=Object(s.a)(A,2),R=P[0],M=P[1];Object(r.useEffect)(function(){i.data.length>0&&w(Object(d.a)({},y,{checked:[].concat(Object(o.a)(i.data[0].children),Object(o.a)(i.data[1].children)).filter(function(e){return!0===e.checked}).map(function(e){return e.label}),expanded:i.data.map(function(e){return!0===e.expanded?e.value:""})}))},[i]),Object(r.useEffect)(function(){i.data.length>0&&j([Object(d.a)({},Object(o.a)(N)[0],{children:Object(o.a)(y.checked.map(function(e){return{value:E+e,type:[].concat(Object(o.a)(i.data[0].children),Object(o.a)(i.data[1].children)).find(function(t){return t.value===e}).type,label:[].concat(Object(o.a)(i.data[0].children),Object(o.a)(i.data[1].children)).find(function(t){return t.value===e}).label}}))})])},[y]);var G=function(e){};return Object(r.useEffect)(function(){if(!1===l.loading&&200===l.status&&"OK"===l.statusText){var e=a(73).remote.dialog.showOpenDialog({properties:["openDirectory"]});void 0!==e?(B(N,x.data,void 0===e?"defaultPath":e[0]),m("Structura a fost salvata in baza si exportata cu success!",{appearance:"success"})):(m("Structura a fost salvata in baza!",{appearance:"success"}),m("Alege te rog o cale valida pentru a exporta structura.",{appearance:"warning"})),f(E+1)}l.error.length>0&&m(l.error,{appearance:"error"})},[l]),Object(r.useEffect)(function(){j(N)},[f]),n.a.createElement("div",{className:"bx--row machete"},n.a.createElement("div",{className:"bx--col-lg-7 bx--col-sm-4"},n.a.createElement("div",{className:"bx--row-lg-16 bx--row-sm-4"},n.a.createElement("div",{className:"bx--col-lg-16 bx--col-sm-4 titlu-executoriu"},n.a.createElement(O.a,{className:"",defaultValue:x.data.titlu_executoriu,disabled:!1,helperText:"",id:"textinput1",invalid:!1,invalidText:"",labelText:"Titlu Executoriu:",light:!1,name:"textinput1",placeholder:"Ex: Sentinta Civila nr. 321/01.09.2018, pronuntata de Judecatoria Zimnicea",type:"text"})),n.a.createElement("div",{className:"bx--col-lg-16 bx--col-sm-4 debit"},n.a.createElement(O.a,{className:"",defaultValue:x.data.debit,disabled:!1,helperText:"",id:"textinput2",invalid:!1,invalidText:"",labelText:"Debit:",light:!1,name:"textinput2",placeholder:"Ex: 12345",type:"text"})),n.a.createElement("div",{className:"bx--col-lg-16 bx--col-sm-4 check-box-tree-machete"},n.a.createElement("h4",null," Machetele disponibile: "),n.a.createElement(I.a,{nodes:i.data,checked:y.checked,expanded:y.expanded,onCheck:function(e){return t=e,void w(Object(d.a)({},y,{checked:t}));var t},onExpand:function(e){return t=e,void w(Object(d.a)({},y,{expanded:t}));var t},icons:{check:n.a.createElement(L.d,null),uncheck:n.a.createElement(L.b,null),halfCheck:n.a.createElement(L.c,null),expandClose:n.a.createElement(L.f,null),expandOpen:n.a.createElement(L.e,null),expandAll:n.a.createElement(L.a,null),collapseAll:n.a.createElement(L.j,null),parentClose:n.a.createElement(L.h,null),parentOpen:n.a.createElement(L.i,null),leaf:n.a.createElement(L.g,null)}})))),n.a.createElement("div",{className:"bx--col-lg-9 bx--col-sm-4"},n.a.createElement("div",{className:"bx--row-lg-16 bx--row-sm-4"},n.a.createElement("div",{className:"bx--col-lg-16 bx--col-sm-4 mijloace-de-executie"},n.a.createElement("div",{className:"bx--col-lg-5 bx--col-sm-1"},n.a.createElement(D.a,{className:"executare-indirecta",invalid:!1,legendText:"Executare indirect\u0103",message:!1,messageText:""},n.a.createElement(F.a,{className:"executare-indirecta-ckbox",name:"Poprire",id:"checkbox-0",indeterminate:!1,labelText:"Poprire",checked:v["Mobiliar\u0103"],onChange:G}),n.a.createElement(F.a,{className:"executare-indirecta-ckbox",id:"checkbox-1",indeterminate:!1,labelText:"Mobiliar\u0103",checked:v["Mobiliar\u0103"],onChange:G}),n.a.createElement(F.a,{className:"executare-indirecta-ckbox",id:"checkbox-2",indeterminate:!1,labelText:"Imobiliar\u0103",checked:v["Imobiliar\u0103"],onChange:G}))),n.a.createElement("div",{className:"bx--col-lg-5 bx--col-sm-1"},n.a.createElement(D.a,{className:"executare-directa",invalid:!1,legendText:"Executare direct\u0103",message:!1,messageText:""},n.a.createElement(F.a,{className:"executare-directa-ckbox",id:"checkbox-3",indeterminate:!1,labelText:"Predare mobiliar\u0103",checked:v["Predare mobiliar\u0103"],onChange:G}),n.a.createElement(F.a,{className:"executare-directa-ckbox",id:"checkbox-4",indeterminate:!1,labelText:"Predare imobiliar\u0103",checked:v["Predare imobiliar\u0103"],onChange:G}),n.a.createElement(F.a,{className:"executare-directa-ckbox",id:"checkbox-5",indeterminate:!1,labelText:"Obliga\u021bia de a face",checked:v["Obliga\u021bia de a face"],onChange:G}))),n.a.createElement("div",{className:"bx--col-lg-6 bx--col-sm-2"},n.a.createElement(D.a,{className:"alte-tipuri-de-executare",invalid:!1,legendText:"Alte tipuri de executare",message:!1,messageText:""},n.a.createElement(F.a,{className:"some-class",id:"checkbox-6",indeterminate:!1,labelText:"Recuperare pe cale amiabil\u0103",checked:v["Recuperare pe cale amiabil\u0103"],onChange:G}),n.a.createElement(F.a,{className:"some-class",id:"checkbox-7",indeterminate:!1,labelText:"Ofert\u0103 real\u0103 de plat\u0103",checked:v["Ofert\u0103 real\u0103 de plat\u0103"],onChange:G}),n.a.createElement(F.a,{className:"some-class",id:"checkbox-8",indeterminate:!1,labelText:"Constatarea unei st\u0103ri de fapt",checked:v["Constatarea unei st\u0103ri de fapt"],onChange:G})))),n.a.createElement("div",{className:"bx--col-lg-16 bx--col-sm-4 check-box-tree-result"},n.a.createElement("h4",null," Structura de fisiere si directoare generata in functie de machetele alese: "),n.a.createElement(I.a,{nodes:N,checked:R.checked,expanded:R.expanded,onCheck:function(e){return t=e,void M(Object(d.a)({},R,{checked:t}));var t},onExpand:function(e){return t=e,void M(Object(d.a)({},R,{expanded:t}));var t},icons:{check:n.a.createElement(L.d,null),uncheck:n.a.createElement(L.b,null),halfCheck:n.a.createElement(L.c,null),expandClose:n.a.createElement(L.f,null),expandOpen:n.a.createElement(L.e,null),expandAll:n.a.createElement(L.a,null),collapseAll:n.a.createElement(L.j,null),parentClose:n.a.createElement(L.h,null),parentOpen:n.a.createElement(L.i,null),leaf:n.a.createElement(L.g,null)}})))),n.a.createElement("div",{className:"bx--row btn-row"},n.a.createElement("div",{className:"bx--col-lg-8 bx--col-sm-2"},n.a.createElement(k.a,{className:"btn-back",disabled:!1,kind:"primary",onClick:function(){x.updateDetails({step:1})},tabIndex:0,type:"submit"},"Pasul Precedent")),n.a.createElement("div",{className:"bx--col-lg-8 bx--col-sm-2"},n.a.createElement(k.a,{className:"btn-next",disabled:!1,kind:"primary",onClick:function(){t(N)},tabIndex:0,type:"submit"},"Salveaza si Creaza structura Local"))))},ne=function(e){var t=Object(r.useContext)(u);return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,null),n.a.createElement("hr",null),0===t.data.step?n.a.createElement(w,null):1===t.data.step?n.a.createElement(A,null):2===t.data.step?n.a.createElement(re,null):n.a.createElement(n.a.Fragment,null))},le=(a(194),function(){var e=Object(r.useContext)(u),t=ae(),a=t.getFolders,l=t.getFoldersState;Object(r.useEffect)(function(){a()},[]);var c=Object(r.useState)({checked:[],expanded:[]}),i=Object(s.a)(c,2),o=i[0],m=i[1];return Object(r.useEffect)(function(){!1===l.loading&&200===l.status&&"OK"===l.statusText&&e.updateDetails({nr_folders:l.nr_folders})},[l]),n.a.createElement("div",{className:"bx--row dosare"},n.a.createElement("div",{className:"bx--col-lg-7 bx--col-sm-4"},n.a.createElement("div",{className:"bx--col-lg-16 bx--col-sm-4 check-box-tree"},n.a.createElement("h4",null," Structura de fisiere si directoare din 2019: "),n.a.createElement(I.a,{nodes:l.data,checked:o.checked,expanded:o.expanded,onCheck:function(e){return t=e,void m(Object(d.a)({},o,{checked:t}));var t},onExpand:function(e){return t=e,void m(Object(d.a)({},o,{expanded:t}));var t},icons:{check:n.a.createElement(L.d,null),uncheck:n.a.createElement(L.b,null),halfCheck:n.a.createElement(L.c,null),expandClose:n.a.createElement(L.f,null),expandOpen:n.a.createElement(L.e,null),expandAll:n.a.createElement(L.a,null),collapseAll:n.a.createElement(L.j,null),parentClose:n.a.createElement(L.h,null),parentOpen:n.a.createElement(L.i,null),leaf:n.a.createElement(L.g,null)}}))),n.a.createElement("div",{className:"bx--col-lg-9 bx--col-sm-4"}))}),ce=(a(195),function(){return n.a.createElement(n.a.Fragment,null,"Documentatie - Faza 1")}),ie=function(){var e=Object(r.useState)([{id:"first",display:!1,progressBarCurrentIndex:0},{id:"second",display:!0},{id:"third",display:!1}]),t=Object(s.a)(e,2),a=t[0],l=t[1];return n.a.createElement("div",{className:"bx--grid bx--grid--full-width appContent"},n.a.createElement("div",{className:"bx--row"},n.a.createElement(_.a,{onChange:function(e){return function(e){var t=Object(o.a)(a);t.find(function(t){return t.id===e.name}).display=!0,t.filter(function(t){return t.id!==e.name}).forEach(function(e){return e.display=!1}),l(t)}(e)},selectedIndex:1},n.a.createElement(T.a,{name:"first",className:"generare-dosar",text:"Generare Dosar"}),n.a.createElement(T.a,{name:"second",className:"dosare",text:"Dosare"}),n.a.createElement(T.a,{name:"third",className:"documentatie",text:"Documentatie"}))),a[0].display?n.a.createElement(ne,{progressBarCurrentIndex:a[0].progressBarCurrentIndex}):a[1].display?n.a.createElement(le,null):a[2].display?n.a.createElement(ce,null):n.a.createElement(n.a.Fragment,null))},oe=function(){return n.a.createElement(i.a,null,n.a.createElement(m,null,n.a.createElement(v,null),n.a.createElement(V.ToastProvider,{autoDismiss:"true",autoDismissTimeout:"3000",placement:"bottom-center"},n.a.createElement(ie,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},73:function(e,t){e.exports=require("electron")},91:function(e,t,a){e.exports=a(196)},96:function(e,t,a){},97:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.3fedf7b6.chunk.js.map