"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6140],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},65779:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",keywords:["crowdloans","parachains","lending","auction"],slug:"../learn-crowdloans"},s=void 0,c={unversionedId:"learn/learn-crowdloans",id:"learn/learn-crowdloans",title:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",source:"@site/../docs/learn/learn-crowdloans.md",sourceDirName:"learn",slug:"/learn-crowdloans",permalink:"/docs/learn-crowdloans",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-crowdloans.md",tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1657811891,formattedLastUpdatedAt:"Jul 14, 2022",frontMatter:{id:"learn-crowdloans",title:"Parachain Crowdloans",sidebar_label:"Parachain Crowdloans",description:"Learn about crowdloans and how to interact with one.",keywords:["crowdloans","parachains","lending","auction"],slug:"../learn-crowdloans"},sidebar:"docs",previous:{title:"Parachain Slots Auction",permalink:"/docs/learn-auction"},next:{title:"Teleporting Assets",permalink:"/docs/learn-teleport"}},d={},p=[{value:"Starting a Crowdloan Campaign",id:"starting-a-crowdloan-campaign",level:2},{value:"Supporting a Crowdloan Campaign",id:"supporting-a-crowdloan-campaign",level:2},{value:"Contributing to Crowdloans",id:"contributing-to-crowdloans",level:3},{value:"Withdraw Crowdloaned Tokens",id:"withdraw-crowdloaned-tokens",level:3}],u={toc:p};function h(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Polkadot allows parachains to source tokens\nfor their parachain bids in a decentralised crowdloan. "),(0,r.kt)("admonition",{title:"Contributing to a crowdloan",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you are here for guidance on how to\ncontribute for a crowdloan, watch the video below or read this ",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000177341-how-to-participate-in-crowdloans-on-polkadot-or-kusama"},"support article on crowdloans"),".")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/AA9mPANmzmU"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/AA9mPANmzmU/0.jpg",alt:"Crowdloans on Polkadot JS"}))),(0,r.kt)("admonition",{title:"Testing on Rococo",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For information on how to participate in the crowdloan and parachain auction testing on\nRococo, please see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"Rococo content"),"",".")),(0,r.kt)("h2",{id:"starting-a-crowdloan-campaign"},"Starting a Crowdloan Campaign"),(0,r.kt)("p",null,"Anyone who has registered a parachain can create a new crowdloan campaign for a slot\nby depositing a specified number of tokens. A campaign is configured as a\nrange of slots (i.e. the duration of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachain"),"\n"," will bid for), a cap, and a duration.\nThe duration can last over several auctions, meaning that the team will not need to restart the\ncampaign just because they do not secure a slot on their first attempt."),(0,r.kt)("admonition",{title:"Crowdloan Submission Deposit Required",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In order to create a new crowdloan campaign, your account must have\n500 DOT transferrable which will be reserved for\nthe duration of the crowdloan")),(0,r.kt)("p",null,"When setting the parameters of a crowdloan campaign, consider the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A crowdloan campaign can start well before the auction slot is opened. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The campaign creation form requires setting a crowdloan cap ","\u2014"," the maximum amount a campaign\ncan collect. A team can still win an ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"auction")," if the cap is not reached.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Set the desired end of the crowdloan in the "Ending block" field. This helps to ensure that the\ncrowdloan is live during the entire duration of the auction. For example, if an auction starts in\nthree days and will last for five days, you may want to set your crowdloan to end in 10 days, or a\nsimilar timescale. ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One way of calculating the ending block number is adding:  ",(0,r.kt)("inlineCode",{parentName:"p"},"(10 * 60 * 24 * 7) * (x * 6) + y")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"x")," is the number of auction periods you want the crowdloan to continue for ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"y")," is the current block number")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"(Blocks/Min * Min/Hour * Hour/Day * Day/Week) * (x[Period] * Week/Period) + y[BlockNumber]"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"First period" field refers to the first period you want to bid for. If the current auction\nencompasses periods ',(0,r.kt)("inlineCode",{parentName:"p"},"(3, 4, 5, 6)"),", your first period can be at least ",(0,r.kt)("inlineCode",{parentName:"p"},"3"),". The last slot must also\nbe within that range.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You can only cancel an ongoing crowdloan if no contributions have been made. Your deposit will be\nreturned to you."))))),(0,r.kt)("p",null,"Prior to the start of the crowdloan campaign, the owner will upload the parachain data. Once\nthe crowdloan is live, ",(0,r.kt)("strong",{parentName:"p"},"the parachain configuration will be locked")," and will be deployed as\nthe parachain's runtime.  Of course, once the parachain is running it can always change via\nruntime upgrades (as determined through its own local governance)."),(0,r.kt)("h2",{id:"supporting-a-crowdloan-campaign"},"Supporting a Crowdloan Campaign"),(0,r.kt)("h3",{id:"contributing-to-crowdloans"},"Contributing to Crowdloans"),(0,r.kt)("admonition",{title:"Minimum Crowdloan Contribution",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The minimum balance for contributions for a crowdloan campaign is\ncurrently set to 5.000 DOT.\nThis is in an attempt to make crowdloans as accessible as possible while maintaining a\nbalance to justify the use of the network's resources. ")),(0,r.kt)("p",null,"Each created campaign will have an index. Once a crowdloan campaign is open, anyone can participate\nby sending a special transaction that references the campaign's index. Tokens used to participate\nmust be transferable ","\u2014"," that is, not locked for any reason, including staking, vesting, and\ngovernance ","\u2014"," because they will be moved into a module-controlled account that was generated\nuniquely for this campaign."),(0,r.kt)("admonition",{title:"Do not send Crowdloan contributions directly to the Parachain address",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"All crowdloan contributions are handled by the Crowdloan module\u2019s logic where a\ncampaign is identified by an index, not by address. **Never transfer tokens to an address in\nsupport of a campaign. ")),(0,r.kt)("p",null,"It is up to individual parachain teams to decide if and how they want to reward participants who\nforgo staking and choose to lock their tokens in support of the parachain\u2019s campaign. As one can\nimagine, rewards will take many forms and may vary widely among projects."),(0,r.kt)("p",null,"If a crowdloan campaign is successful, that parachain will be on-boarded to the Relay Chain. The\ncollective tokens will be locked in that parachain's account for the entire duration that it is\nactive."),(0,r.kt)("h3",{id:"withdraw-crowdloaned-tokens"},"Withdraw Crowdloaned Tokens"),(0,r.kt)("p",null,"Participants will be able to reclaim their tokens in one of two ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the campaign was successful, then the parachain will enter a retirement phase at the end of its\nlease. During this phase, participants can withdraw the tokens with which they participated."),(0,r.kt)("li",{parentName:"ul"},"If the campaign was unsuccessful, then this retirement phase will begin at the campaign's\nconfigured end, and participants can likewise withdraw their tokens.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"crowdloan.contribute")," extrinsic is trustless"),(0,r.kt)("p",{parentName:"admonition"},"Contributing to a crowdloan through Polkadot JS Apps (which uses ",(0,r.kt)("inlineCode",{parentName:"p"},"crowdloan.contribute")," extrinsic)\nguarantees that you receive your tokens after the campaign ends. If you intend to make contributions\nthrough other websites and custodial service providers like central exchanges, review their terms and\nconditions thoroughly and assess the risks associated. ")),(0,r.kt)("p",null,"Note: When the lease periods won by the crowdloan have finished, or the crowdloan has ended without\nwinning a slot, anyone can trigger the refund of crowdloan contributions back to their original\nowners. This can be done through the permissionless ",(0,r.kt)("inlineCode",{parentName:"p"},"crowdloan.refund")," extrinsic available on Polkadot\nJS Apps > Developer > Extrinsics page, by specifying the parachain ID. This extrinsic may need to be\nissued multiple times, if the list of contributors is too long. All contributions must be returned before\nthe crowdloan is entirely deleted from the system."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Crowdloan refund",src:a(72239).Z,width:"1440",height:"552"})),(0,r.kt)("p",null,"Many projects will have dashboards available that allow users to participate in their crowdloans.\nPolkadotJS apps also offers a breakdown of ongoing crowdloans on the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"},"Apps page"),"."),(0,r.kt)("p",null,"Here is an example of the crowdloans in play during the very first Kusama auction."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"crowdloan dashboard",src:a(30931).Z,width:"2328",height:"1540"})),(0,r.kt)("p",null,"Furthermore, check out this video on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YrTxDufrcQM"},"How to Participate in Crowdloans")," for steps on how to\naccess available crowdloans on PolkadotJS apps."))}h.isMDXComponent=!0},72239:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/crowdloan-refund-a452b6b303e27c25b3e87c42577a9265.png"},30931:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/kusama-crowdloans-0237f5d573dee5e221b51678b2ed25f1.png"}}]);