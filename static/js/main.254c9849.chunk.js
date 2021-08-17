(this["webpackJsonpcursor-react-router"]=this["webpackJsonpcursor-react-router"]||[]).push([[0],{28:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r,c,a,o,s,i,l,m,b,d,j,u,p=n(0),g=n.n(p),O=n(20),f=n.n(O),h=n(5),x=n(6),S=(n(28),n(2)),v=n(3),y=n(10),I={firstName:/^.{3,}$/,lastName:/^.{3,}$/,email:/^\S{3,}@\S{2,}\.\D{2,}/,password:/^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/},w=x.b.div(r||(r=Object(h.a)(["\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),N=x.b.form(c||(c=Object(h.a)(["\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n\n    .form-header, .form-body, .form-footer{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        margin-bottom: 25px;\n    }\n\n    .form-check{\n        align-self: flex-start;\n        display: flex;\n        align-items: center;\n    }\n\n    .form-redirect{\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .form-redirect .redirect-link{\n        color: #90CAF9;\n        font-size: 0.7rem;\n        text-decoration: none;\n        cursor: pointer;\n    }\n\n    &.sign-up .form-redirect{\n        justify-content: flex-end;\n    }\n\n    .input-group{\n        width: 100%;\n        display: flex;\n        justify-content: space-between;\n    }\n"]))),k=x.b.div(a||(a=Object(h.a)(["\n    background: #F48FB2;\n    border-radius: 50%;\n    width: 3rem;\n    height: 3rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n    align-self: center;\n\n    .icon-image{\n        width: 1.5rem;\n        height: 1.5rem;\n    }\n"]))),F=x.b.h2(o||(o=Object(h.a)(["\n    color: #fff;\n    font-size: 1.5rem;\n    font-weight: 400;\n    line-height: 1.5;\n    text-align: center;\n    margin-top: 10px;\n"]))),z=x.b.input(s||(s=Object(h.a)(["\n    width: 100%;\n    color: #fff;\n    border: 1px solid rgba(255,255,255, 0.3);\n    border-radius: 4px;\n    padding: 15px 10px;\n    font-size: 0.8rem;\n    margin-bottom: 15px;\n    background: transparent;\n    border-color: ",";\n\n    &:hover,\n\t&:focus {\n\t\toutline: none;\n\t}\n\n    &::placeholder{\n        color: rgba(255,255,255, 0.6);\n    }\n\n    .input-group &{\n        flex: 0 1 50%;\n    }\n\n    .input-group &:first-child{\n        margin-right: 10px;\n    }\n"])),(function(e){var t=e.valid;return"correct"===t?"#53F96F":""===t?"rgba(255, 255, 255, 0.3)":"#F95359"})),C=x.b.label(i||(i=Object(h.a)(["\n    font-size: 0.8rem;\n    color: rgba(255,255,255, 0.8);\n"]))),A=x.b.input(l||(l=Object(h.a)(["\n   border: 2px solid #fff;\n   background: #000;\n\n   .form-check &{\n       margin-right: 10px;\n   }\n"]))),E=x.b.button(m||(m=Object(h.a)(["\n    width: 100%;\n    color: #000;\n    text-align: center;\n    text-transform: uppercase;\n    border-radius: 4px;\n    padding: 10px;\n    font-size: 0.8rem;\n    margin-bottom: 15px;\n    background: #90CAF9;\n    font-weight: 500;\n    cursor: pointer;\n"]))),M=x.b.div(b||(b=Object(h.a)(["\n    max-width: 600px;\n    display: flex;\n    flex-direction: column;\n"]))),J=x.b.h1(d||(d=Object(h.a)(["\n    color: #fff;\n    font-size: 2rem;\n    font-size: 600;\n    line-height: 1.5;\n    margin-bottom: 20px;\n"]))),$=Object(x.b)(F)(j||(j=Object(h.a)(["\n    color: #F95359;\n    font-size: 0.9rem;\n    display: ",";\n"])),(function(e){return e.show?"block":"none"})),B=n.p+"static/media/padlock.9fc8846a.svg",D=n(1);function L(){var e=Object(p.useState)(""),t=Object(S.a)(e,2),n=t[0],r=t[1],c=Object(p.useState)(""),a=Object(S.a)(c,2),o=a[0],s=a[1],i=Object(p.useState)(""),l=Object(S.a)(i,2),m=l[0],b=l[1],d=Object(p.useState)(""),j=Object(S.a)(d,2),u=j[0],g=j[1],O=Object(p.useState)(""),f=Object(S.a)(O,2),h=f[0],x=f[1],M=Object(p.useState)(""),J=Object(S.a)(M,2),$=J[0],L=J[1],P=Object(p.useState)(""),R=Object(S.a)(P,2),T=R[0],W=R[1],Z=Object(p.useState)(""),q=Object(S.a)(Z,2),G=q[0],H=q[1],K=Object(p.useState)(!1),Q=Object(S.a)(K,2),U=Q[0],V=Q[1],X=Object(p.useState)(!1),Y=Object(S.a)(X,2),_=Y[0],ee=Y[1],te=Object(p.useState)(!1),ne=Object(S.a)(te,2),re=ne[0],ce=ne[1],ae=function(e){var t=e.target.name,n=e.target.value,c=null;switch(t){case"email":r(n),c=I.email.test(n),x(c?"correct":"error");break;case"password":s(n),c=I.password.test(n),L(c?"correct":"error");break;case"firstName":b(n),c=I.firstName.test(n),W(c?"correct":"error");break;case"lastName":g(n),c=I.lastName.test(n),H(c?"correct":"error")}};Object(p.useEffect)((function(){V("correct"===h&&"correct"===$&&"correct"===T&&"correct"===G)}),[h,$,T,G]);return _?(localStorage.setItem("registered",_),localStorage.setItem("signedIn",re),Object(D.jsx)(v.a,{to:"/cursor-react-styled-components/home"})):Object(D.jsx)(w,{children:Object(D.jsxs)(N,{className:"sign-up",children:[Object(D.jsxs)("div",{className:"form-header",children:[Object(D.jsx)(k,{children:Object(D.jsx)("img",{className:"icon-image",src:B,alt:""})}),Object(D.jsx)(F,{children:"Sign up"})]}),Object(D.jsxs)("div",{className:"form-body",children:[Object(D.jsxs)("div",{className:"input-group",children:[Object(D.jsx)(z,{value:m,onInput:ae,placeholder:"First name *",type:"text",name:"firstName",valid:T}),Object(D.jsx)(z,{value:u,onInput:ae,placeholder:"Last name *",type:"text",name:"lastName",valid:G})]}),Object(D.jsx)(z,{value:n,onInput:ae,placeholder:"Email Address *",type:"email",name:"email",valid:h}),Object(D.jsx)(z,{value:o,onInput:ae,placeholder:"Password *",type:"password",name:"password",valid:$}),Object(D.jsxs)("div",{className:"form-check",children:[Object(D.jsx)(A,{type:"checkbox",id:"remember-me"}),Object(D.jsx)(C,{htmlFor:"remember-me",children:"I want to receive inspiration, marketing promotions and updates via email"})]})]}),Object(D.jsxs)("div",{className:"form-footer",children:[Object(D.jsx)(E,{onClick:function(e){localStorage.setItem("email",n),localStorage.setItem("password",o),localStorage.setItem("firstName",m),localStorage.setItem("lastName",u),U&&(ee(!_),ce(!re))},type:"submit",children:"Sign up"}),Object(D.jsx)("div",{className:"form-redirect",children:Object(D.jsx)(y.b,{className:"redirect-link",to:"/cursor-react-styled-components/sign-in",children:"Already have an account? Sign in"})})]})]})})}function P(){var e=Object(p.useState)(""),t=Object(S.a)(e,2),n=t[0],r=t[1],c=Object(p.useState)(""),a=Object(S.a)(c,2),o=a[0],s=a[1],i=Object(p.useState)(!1),l=Object(S.a)(i,2),m=l[0],b=l[1],d=Object(p.useState)(""),j=Object(S.a)(d,2),u=j[0],g=j[1],O=Object(p.useState)(""),f=Object(S.a)(O,2),h=f[0],x=f[1],M=Object(p.useState)(!1),J=Object(S.a)(M,2),L=J[0],P=J[1],R=Object(p.useState)(!1),T=Object(S.a)(R,2),W=T[0],Z=T[1],q=Object(p.useState)(!1),G=Object(S.a)(q,2),H=G[0],K=G[1],Q=function(e){var t=e.target.name,n=e.target.value,c=e.target.checked,a=null;switch(t){case"email":r(n),a=I.email.test(n),g(a?"correct":"error");break;case"password":s(n),a=I.password.test(n),x(a?"correct":"error");break;case"rememberMe":b(c)}};return Object(p.useEffect)((function(){var e=localStorage.getItem("email"),t=localStorage.getItem("password");P(e!==n||t!==o)}),[n,o]),Object(p.useEffect)((function(){var e=JSON.parse(localStorage.getItem("rememberMe"));!0===e&&(b(e),r(localStorage.getItem("email")),s(localStorage.getItem("password")))}),[]),JSON.parse(localStorage.getItem("signedIn"))?Object(D.jsx)(v.a,{to:"/cursor-react-styled-components/home"}):H?(localStorage.setItem("signedIn",H),Object(D.jsx)(v.a,{to:"/cursor-react-styled-components/home"})):Object(D.jsx)(w,{children:Object(D.jsxs)(N,{className:"sign-in",children:[Object(D.jsxs)("div",{className:"form-header",children:[Object(D.jsx)(k,{children:Object(D.jsx)("img",{className:"icon-image",src:B,alt:""})}),Object(D.jsx)(F,{children:"Sign in"})]}),Object(D.jsxs)("div",{className:"form-body",children:[Object(D.jsx)($,{show:W,children:"Incorrect password or email. Try again"}),Object(D.jsx)(z,{onInput:Q,value:n,placeholder:"Email Address *",type:"email",name:"email",valid:u}),Object(D.jsx)(z,{onInput:Q,value:o,placeholder:"Password *",type:"password",name:"password",valid:h}),Object(D.jsxs)("div",{className:"form-check",children:[Object(D.jsx)(A,{checked:m,onChange:Q,name:"rememberMe",type:"checkbox",id:"remember-me"}),Object(D.jsx)(C,{htmlFor:"remember-me",children:"Remember me"})]})]}),Object(D.jsxs)("div",{className:"form-footer",children:[Object(D.jsx)(E,{onClick:function(e){L?(Z(!0),r(""),s(""),b(!1),g(""),x("")):(localStorage.setItem("rememberMe",m),K(!0))},type:"submit",children:"Sign in"}),Object(D.jsxs)("div",{className:"form-redirect",children:[Object(D.jsx)(y.b,{className:"redirect-link",to:"",children:"Forgot password?"}),Object(D.jsx)(y.b,{onClick:function(e){localStorage.removeItem("firstName"),localStorage.removeItem("lastName"),localStorage.removeItem("email"),localStorage.removeItem("password"),localStorage.removeItem("registered"),localStorage.removeItem("signedIn"),localStorage.removeItem("rememberMe")},className:"redirect-link",to:"/cursor-react-styled-components/sign-up",children:"Don't have an account? Sign up"})]})]})]})})}function R(){var e=localStorage.getItem("signedIn"),t=Object(p.useState)(e),n=Object(S.a)(t,2),r=n[0],c=n[1],a=localStorage.getItem("firstName"),o=localStorage.getItem("lastName");return r?Object(D.jsx)(w,{children:Object(D.jsxs)(M,{children:[Object(D.jsxs)(J,{children:["Welcome, ",a," ",o]}),Object(D.jsx)(E,{onClick:function(e){return c(!1)},children:"Log out"})]})}):(localStorage.setItem("signedIn",r),Object(D.jsx)(v.a,{to:"/cursor-react-styled-components/sign-in"}))}var T=Object(x.a)(u||(u=Object(h.a)(["\n  *, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    border: 0;\n    box-sizing: border-box;\n    font-family: 'Roboto', sans-serif;\n  }\n\n  body{\n    background: #121212;\n    min-height: 100vh;\n  }\n"])));var W=function(){var e=localStorage.getItem("registered");return Object(D.jsxs)(y.a,{children:[Object(D.jsx)(T,{}),Object(D.jsxs)(v.d,{children:[Object(D.jsx)(v.b,{exact:!0,path:"/cursor-react-styled-components",children:e?Object(D.jsx)(v.a,{to:"/cursor-react-styled-components/sign-in"}):Object(D.jsx)(v.a,{to:"/cursor-react-styled-components/sign-up"})}),Object(D.jsx)(v.b,{path:"/cursor-react-styled-components/home",component:R}),Object(D.jsx)(v.b,{path:"/cursor-react-styled-components/sign-in",component:P}),Object(D.jsx)(v.b,{path:"/cursor-react-styled-components/sign-up",component:L})]})]})};f.a.render(Object(D.jsx)(g.a.StrictMode,{children:Object(D.jsx)(W,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.254c9849.chunk.js.map