(this.webpackJsonpveganalysis=this.webpackJsonpveganalysis||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/logo.ca519d31.svg"},23:function(e,a,t){e.exports=t(35)},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(20),r=t.n(i),o=t(3),s=t.n(o),c=t(11),m=t(4),d=t(5),u=t(7),h=t(6),p=t(13),y=t(1),b=t(21),g=t.n(b),f=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"header"},l.a.createElement("div",{id:"logo",onClick:this.props.changeStateFn.bind(this,"goHome",!0)},l.a.createElement("img",{src:g.a,id:"logoImg",alt:"logo"}),l.a.createElement("h1",{id:"logoTxt"},"VEGANALYSIS")))}}]),t}(l.a.Component),v=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).submit=function(a){a.preventDefault();var t=document.getElementById("searchBar").value;document.getElementById("searchBar").blur(),document.getElementById("searchBar").value="",e.props.changeStateFn("query",t)},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("form",{autoComplete:"off",className:"searchForm",onSubmit:function(a){return e.submit(a)}},l.a.createElement("input",{required:!0,type:"text",id:"searchBar",name:"searchBar",placeholder:"Search for a recipe..."}),l.a.createElement("input",{id:"submitBtn",type:"submit",value:"Search"}))}}]),t}(l.a.Component);function k(e,a){return"https://api.spoonacular.com/"+e+"?apiKey=4af5d51b86194a149cacc6bb1285f2f0&"+a}function w(e){return 401===e.code?(console.log(e),l.a.createElement("h1",null,"Error - Contact admin. Error code 401")):0===e.code?(console.log(e),l.a.createElement("h1",null,"Error - Contact admin. Error code 0")):402===e.code?(console.log(e),l.a.createElement("h1",null,"Error - Contact admin. Error code 402")):(console.log(e),l.a.createElement("h1",null,e.code," Error - ",e.message))}function E(e){for(var a=e.split(" "),t="",n=0;n<a.length;n++)t+=a[n].substr(0,1).toUpperCase()+a[n].slice(1).toLowerCase()+" ";return t=t.slice(0,-1)}var C=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).componentDidMount=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.apiRecipeSearch();case 2:case"end":return e.stop()}}),e)}))),n.apiRecipeSearch=Object(c.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k("recipes/complexSearch","&number=10&instructionsRequired=true&query='"+n.state.query+"'"),e.next=3,n.setState({loading:!0});case 3:return e.next=5,fetch(a,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n.setState({result:e,loading:!1})}));case 5:case"end":return e.stop()}}),e)}))),n.state={query:n.props.match.params.query,loading:!0,result:{}},n}return Object(d.a)(t,[{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{className:"loader"}):this.state.result.status?w(this.state.result):this.state.result.results.length>0?l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Results for ",this.state.query),this.state.result.results.map((function(e,a){return l.a.createElement("div",{key:a,className:"recipeResult",recipeid:e.id},l.a.createElement(p.b,{to:{pathname:"/Veganalysis/recipe/".concat(e.id)}},l.a.createElement("h2",null,e.title),l.a.createElement("img",{src:e.image,alt:"Image of "+e.title}),l.a.createElement("div",{className:"imageHider"})))}))):l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"No results for ",this.state.query))}}]),t}(l.a.Component),x=Object(y.g)(C),z=["abalone","acetate","acetylated hydrogenated lard glyceride","acetylated lanolin","acetylated lanolin alcohol","acetylated lanolin ricinoleate","acetylated tallow","acid","acidophilus milk","adrenaline","adrenals of cattle","adrenals of hogs","adrenals of sheep","afterbirth","alanine","albumen","albumin","alcloxa","aldioxa","aliphatic alcohol","allantoin","alligator","alligator skin","alpha-hydroxy acids","ambergris","amerachol","amerchol l101","aminiuccinate acid","amino acids","aminosuccinate acid","ammonium caseinate","ammonium hydrolyzed protein","amniotic fluid","ampd isoteric hydrolyzed animal protein","amylase","anchovies","anchovy","angora","animal bones","animal collagen amino acids","animal fat","animal fats and oils","animal hair","animal keratin amino acids","animal oil","animal placenta","animal protein derivative","animal tissue extract","arachidonic acid","arachidyl proprionate","aspartic acid","aspic","astrakhan","back bacon","back fat","bacon","bass","batyl alcohol","batyl isostearate","bear","bee pollen","bee products","beef","beef heart","beef liver","beef tongue","beepollen","beeswax","beeswax honeycomb","belly bacon","benzyltrimonium hydrolyzed animal protein","biotin vitamin h vitamin b factor","bison","blood","blood plasma fractionation","blood tongue","boar bristles","boiled ham","bone ash","bone char","bone char(coal)/boneblack","bone charcoal","bone earth","bone meal","bone phosphate","bone soup","bone/bonemeal","boneblack","bonito","bovine serum albumin","brain extract","bratwurst","brawn","breakfast bacon","bresaola","bristle","bruehwurst","buffalo","buffalo milk","bushmeat","butter","butter fat","butter solids","buttermilk","buttermilk powder","c30-46 piscine oil","calamari","calciferol","calciferool","calcium caseinate","calf liver","calfskin","calfskin extract","camel milk","canadian bacon","cantharides tincture","capiz","capryl betaine","caprylamine oxide","caprylic acid","caprylic triglyceride","carbamide","caribou","carmine","carmine cochineal carminic acid","carmine/carminic acid","carmine: cochineal. carminic acid","carminic","carminic acid","carotene provitamin a beta carotene","carp","casein","casein caseinate sodium caseinate","caseinate","caseinogen","cashmere","castor castoreum","castoreum","catfish","catgut","catharidin","caviar(e)","cera flava","cerebrosides","certain additives","ceteth-02","ceteth-1","ceteth-10","ceteth-2","ceteth-30","ceteth-4","ceteth-6","cetyl alcohol","cetyl lactate","cetyl myristate","cetyl palmitate","chamois","cheese","chicken","chicken breast","chicken liver","chicken loaf","chipped ham","chitin","chitosan","cholecalciferol","cholesterin","cholesterol","choline bitartrate","chondroitin","chopped ham","chorizo","chymotrypsin","civet","clarified butter","clotted cream","cochineal","cod","cod liver oil","cold cuts","coleth-24","collagen","collagen hydrolysate","colors dyes","condensed milk","confectioners glaze","cooked ham","cooked meats","coral","corned beef","cornish game hen","cortico steroid","corticosteroid","cortisone","cortisone corticosteroid","cortisone: see cortico steroid.","cotechino","cottage cheese","crab","crabmeat","crawfish","crayfish","cream","crustacean shellfish","curds","custard","cysteine, l-form","cystine","dark meat","dashi","dea-oleth-10 phosphate","deer","deer meat","delactosed whey","deli meats","demineralized whey","deoxyribonucleic acid","desamido animal collagen","desamidocollagen","devon","dexpanthenol","dicapryloyl cystine","diethylene tricaseinamide","diglycerides","dihydrocholesterol","dihydrocholesterol octyledecanoate","dihydrocholeth-15","dihydrocholeth-30","dihydrogenated tallow benzylmoniumchloride","dihydrogenated tallow methylamine","dihydrogenated tallow phthalate","dihydroxyethyl tallow amine oxide","dimethyl hydrogenated tallowamine","dimethyl stearamine","dimethyl tallowamine","disodium hydrogenatedtallowglutamate","disodium tallamido mea-sulfosuccinate","disodium tallowaminodipropionate","ditallowdimonium chloride","dna","down","dried buttermilk","dried egg yolk","dry milk solids","dry whole milk","duck","duck bacon","duck liver","duodenum substances","dutch loaf","dyes","e120","e441","e542","e904","e913","edible bone phosphate","egg","egg albumen","egg albumen/albumin","egg oil","egg powder","egg protein","egg whites","egg yolk","egg yolk extract","egg yolks","eggs","elastin","elk bacon","embryo extract","emu","emu oil","epiderm oil r","ergisterol","ergocalciferol","ergosterol","estradiol","estradiol benzoate","estrogen","estrogen estradiol","estrogen/estradiol","estrone","ethyl ester of hydrolyzed animal protein","ethyl morrhuatelipineate","ethylarachidonate","ethylene dehydrogenated tallowamide","evaporated milk","ewe milk","fat-free milk","fat-free yogurt","fats","fatty acids","fd and c colors","feathers","felt","fermented camel milk","fermented cream","fermented milk","fish","fish glycerides","fish liver","fish liver oil","fish livers","fish oil","fish sauce","fish scales","fishsauce","fletan oil","fur","gel","gelatin","gelatin gel","gelatin(e)","gelbwurst","ghee","gizzards","glucosamine","glucose tyrosinase","glucuronic acid","glutamic acid","glycerides","glycerin glycerol","glycerol","glyceryl lanolate","glyceryls","glycogen","glycreth-26","goat","goat cheese","goat milk","goose","goose insulating feathers","goose liver","ground beef","grouse","guanine","guanine pearl essence","guanine/pearl essence","guinea hen","gypsy bacon","haddock","hair from hogs","halibut","ham","ham and cheese loaf","head cheese","heavy cream","heptylundecanol","hide","hide glue","homogenized milk","honey","honeycomb","horse","horse hair","horseflesh","horsehair","hot dog","human placental protein","human umbilical extract","hyaluronic acid","hydrlyzed human placental protein","hydrocortisone","hydrogenated animal glyceride","hydrogenated ditallow amine","hydrogenated honey","hydrogenated laneth-20","hydrogenated laneth-25","hydrogenated laneth-5","hydrogenated lanolin","hydrogenated lanolin alcohol","hydrogenated lard glyceride","hydrogenated shark-liver oil","hydrogenated tallow acid","hydrogenated tallow betaine","hydrogenated tallow glyceride","hydrolyzed animal elastin","hydrolyzed animal keratin","hydrolyzed animal protein","hydrolyzed casein","hydrolyzed elastin","hydrolyzed keratin","hydrolyzed milk protein","hydrolyzed silk","hydroxylated lanolin","ice cream","imidazolidinyl urea","insulin","iron caseinate","isinglass","isobutylated lanolin","isopropyl lanolate","isopropyl myristate","isopropyl tallowatelsopropyl lanolate","isopropylpalmitate","isostearic hydrolyzed animal protein","isostearoyl hydrolyzed animal protein","jagdwurst","jowl","kangaroo","katsuobushi (okaka)","keratin","keratinamino acids","l-cysteine","l-form","l-form: see cysteine.","l-lactic acid","lacotse-reduced milk","lactalbumin","lactic yeasts","lacticacid","lactoferrin","lactoglobulin","lactose","lactose-free milk","lactulose","lamb","lamb bacon","laneth","laneth-10","laneth-11","laneth-12","laneth-13","laneth-14","laneth-15","laneth-16","laneth-17","laneth-18","laneth-19","laneth-20","laneth-21","laneth-22","laneth-23","laneth-24","laneth-25","laneth-26","laneth-27","laneth-28","laneth-29","laneth-30","laneth-31","laneth-32","laneth-33","laneth-34","laneth-35","laneth-36","laneth-37","laneth-38","laneth-39","laneth-40","laneth-5","laneth-6","laneth-7","laneth-8","laneth-9","laneth-9 acetate","laneth10 acetate","lanogene","lanoinamidedea","lanolin","lanolin acid","lanolin acid: see lanolin.","lanolin alcohol","lanolin alcohols","lanolin alcohols: see lanolin.","lanolin lanolin acids wool fat wool wax","lanolin linoleate","lanolin oil","lanolin ricinoleate","lanolin wax","lanolin(e)","lanolin: lanolin acid","lanosterol","lanosterol: see lanolin.","lanosterols","lard","lard glyceride","lauroyl hydrolyzed animal protein","leather","leather suede calfskin sheepskinalligator skin other types of skin","lecithin cholinebitartrate","leucine","linoleic acid","lipase","lipids","lipoids lipids","liver","liver extract","liverwurst","lobster","low fat milk","low fat yogurt","lunasponge","luncehon loaf","lunch meats","luncheon meats","lysine","mackerel","magnesium caseinate","malted milk","mammarian extract","marine oil","marrow soup","mayonnaise","mea-hydrolyzed animal protein","meat","meat loaf","meatball","mechanically separated chicken","methionine","mettwurst","milk","milk chocolate","milk derivative","milk of mammals","milk protein","milk skin","milk sugar","milkfat","milkpowder","minced beef","minced meat","mink oil","minkamidopropyl diethylamine","mohair","molluscan shellfish","monkfish","mono and di-glycerides","monoglycerides glycerides","monoglycerides glycerides (see glycerin)","moose","mortadella","mossbunker oil","mozzarella","mullet","muscle extract","musk","musk (oil)","musk ambrette","mussel","mussels","mutton","myristal ether sulfate","myristate acid","myristic acid","myristoyl hydrolyzed animal protein","myristyl","myristyls","natural butter flavor","natural flavorings","natural red 4","natural sources","neck","nonfat milk","note:","nougat","nucleicacids","ocenol","octopus","octyl dodecanol","oils","oleamidopropyl dimethylamine hydrolyzed animal protein","oleic acid","oleoic oil","oleostearin","oleostearine","oleoyl hydrolyzed animal protein","oleths","oleyl arachidate","oleyl betatine","oleyl imidazoline","oleyl lanolate","oleyl myristate","oleyl oleate","oleyl stearate","oleylalcohol ocenol","oleylimidazoline","omega-3 fatty acids","opossum","organ meat","organ meats","organs","ostrich","ovalbumin","ovarian extract","ox bile","oxgall","oyster","palmitamide","palmitamine","palmitate","palmitic acid","palmitoyl hydrolyzed milk protein","palmitoyl hydrolyzedanimal protein","pancetta","panthenol dexpanthenol vitamin b-complex factor provitamin b-5","panthenyl","paracasein","parmesan","partridge","pasteurized milk","pearl","pearl essence","pentahydrosqualene","pepsin","perhydrosqualene","pharmaceutical glaze","pheasant","picnic shoulder","pigskin extract","placenta","placenta placenta polypeptides protein afterbirth","placenta polypeptides protein","placental enzymes","placental extract","placental protein","plaice","pogy oil","pollock","poltethylene cetyl ether","polyglycerol","polyglyceryl-2lanolin alcohol ether","polypeptides","polypeptides protein","polysorbates","polytetylene glycerol/glycol/peg","porcine pancreas","pork","pork fat","pork roll","potassium caseinate","potassium tallowate","potassium undecylenoyl hydrolyzed animal protein","poultry","ppg-12-peg-50 lanolin","ppg-2,-5, -10. -20, -30 lanolinalcohol ethers","ppg-30 lanolin ether","prawn","pregnenolone acetate","pristane","progesterone","propolis","prosciutto","provitamin a","provitamin b-5","provitamin d-2","purcelline oil syn","quail","quaternium 27","rabbit","red meat","reduced fat milk","reduced fat yogurt","rennet","rennet casein","rennet rennin","rennin","resinous glaze","reticulin","retinol","ribonucleic acid","rna ribonucleic acid","roast beef","roast pork","roe","royal jelly","sable","sable brushes","saccharide hydrolysate","saccharide isomerate","salami","salceson","salmon","sardine","sausage","sausages","scallop","scallops","sea sponge","sea turtle oil","seasponge","serum albumin","serum proteins","shark liver oil","shark-liver oil","sheep milk","sheepskin","shellac","shellac resinous glaze","shellac wax","shoulder","shrimp","shrimph","side bacon","silk","silk amino acids","silk powder","silk silk powder","skim milk","slab bacon","sliced meats","smoked ham","snail","snails","snake","snapper","sodium / tea-lauroyl hydrolyzed animal protein","sodium / tea-undecylenoyl hydrolyzed animal protein","sodium caseinate","sodium coco-hydrolyzed animal protein","sodium soya hydrolyzed animal protein","sodium tallow sulfate","sodium tallowate","sodium undecylenate","sodiumsteroyl lactylate","soluble  collagen","sour cream","sour milk","sour milk solids","soured milk","soya hydroxyethyl imidazoline","sperm oil","sperm whale intestines","spermaceti","spermaceticetyl palmitate sperm oil","spleen extract","sponge (luna and sea)","squab","squalane","squalene","squid","squirrel","steak","stearamide","stearamine","stearamine oxide","stearates","stearic acid","stearic hydrazide","stearin","stearone","stearoxytrimethylsilane","stearoyl lactylic acid","stearyl acetate","stearyl alcohol sterols","stearyl betaine","stearyl caprylate","stearyl citrate","stearyl glycyrrhetinate","stearyl heptanoate","stearyl imidazoline","stearyl octanoate","stearyl stearate","stearyldimethyl amine","steroids sterols","sterols","stewing steak","stilton","streaky bacon","suede","sweet dairy whey","sweet whey","sweetbreads","sweetened condensed milk","swordfish","tallow","tallow acid","tallow amide","tallow amine","tallow amine oxide","tallow fatty alcohol","tallow glycerides","tallow hydroxyethal imidazoline","tallow imidazoline","tallow tallow fatty alcohol stearic acid","tallow trimonium chloride - tallow","tallowamidopropylamine oxide","talloweth-6","tallowmide dea and mea","tallowmidopropyl hydroxysultaine","tallowminopropylamine","tallowmphoacete","tea-abietoyl hydrolyzedanimal protein","tea-coco hydrolyzed animal protein","tea-lauroyl animal collagen amino acids","tea-lauroyl animal keratin amino acids","tea-myristol hydrolyzed animal protein","tea-undecylenoyl hydrolyzed animal protein","testicular extract","threonine","thuringian sausage","tilapia","tongue","triethonium hydrolyzed animal protein ethosulfate","trilaneth-4phosphate","tripe","triterpene alcohols","trout","trypsin","tuna","turkey","turkey bacon","turkey breast","turtle","turtle oil","sea turtle oil","tyrosine","un-homogenized milk","urea","urea carbamide","uric acid","uric acid from cows","uricacid","urine","veal","veal loaf","venison","vitamin a","vitamin b-complex factor","vitamin d ergocalciferol vitamin d","vitamin d3","vitamin h","vitaminb","vitaminb factor","volaise","whey","whey powder","whey protein","whipped cream","whipped topping","white meat","whole milk","whole milk yogurt","wild boar","wild meat","wool","wool fat","wool wax","wool wax alcohols","yoghurt","yogurt","zinc caseinate","zinc hydrolyzed animal protein"],N=[{Name:"beef",Carbon:.027,Substitute:{Name:"mushrooms",Carbon:7e-4}},{Name:"pork",Carbon:.0061,Substitute:{Name:"mushrooms",Carbon:7e-4}},{Name:"milk",Carbon:.003,Substitute:{Name:"oat milk",Carbon:.001}},{Name:"lamb",Carbon:.0392,Substitute:{Name:"mushrooms",Carbon:7e-4}},{Name:"cheese",Carbon:.0135,Substitute:{Name:"vegan cheese",Carbon:6e-4}},{Name:"mozarella",Carbon:.0135,Substitute:{Name:"vegan cheese",Carbon:6e-4}},{Name:"mozzarella",Carbon:.0135,Substitute:{Name:"vegan cheese",Carbon:6e-4}},{Name:"parmesan",Carbon:.0135,Substitute:{Name:"nutritional yeast",Carbon:363e-6}},{Name:"smoked salmon",Carbon:.0119,Substitute:{Name:"smoked carrots or tomatoes",Carbon:1e-4}},{Name:"chicken",Carbon:.0069,Substitute:{Name:"seitan",Carbon:.0015}},{Name:"tuna",Carbon:.0061,Substitute:{Name:"chickpeas",Carbon:7e-4}},{Name:"eggs",Carbon:.24,Substitute:{Name:"soya based egg replacer",Carbon:.05}},{Name:"egg",Carbon:.24,Substitute:{Name:"soya based egg replacer",Carbon:.05}},{Name:"broth",Carbon:.0069,Substitute:{Name:"veggie broth",Carbon:1e-4}},{Name:"stock",Carbon:.0069,Substitute:{Name:"veggie broth",Carbon:1e-4}},{Name:"soup",Carbon:.0069,Substitute:{Name:"veggie soup",Carbon:1e-4}},{Name:"butter",Carbon:.0094,Substitute:{Name:"margarine",Carbon:5e-4}},{Name:"sausages",Carbon:.5,Substitute:{Name:"veggie sausages",Carbon:.05}}],S=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;if(Object(m.a)(this,t),(n=a.call(this,e)).findAlternative=function(e){for(var a=function(a){var t=N.findIndex((function(t){return t.Name===e[a]}));if(-1!==t)return n.alternative=N[t].Substitute,n.props.addToInitCarbon(N[t].Carbon*n.props.details.measures.metric.amount),n.props.addToSubCarbon(N[t].Substitute.Carbon*n.props.details.measures.metric.amount),"break"},t=e.length-1;t>=0;t--){if("break"===a(t))break}},n.vegan=!0,n.alternative={},!1===n.props.veganRecipe){var l=n.props.details.name.split(" ");n.findAlternative(l);for(var i=0;i<l.length;i++)if(-1!==z.indexOf(l[i])){n.vegan=!1;break}}return n}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("p",{className:"Name"in this.alternative?"non-vegan":""},E(this.props.details.measures.us.amount+" "+this.props.details.measures.us.unitLong+" "+this.props.details.name)+("Name"in this.alternative?" | Suggested substitution "+this.alternative.Name:""))}}]),t}(l.a.Component),j=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).componentDidMount=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.apiRecipeSearch();case 2:case"end":return e.stop()}}),e)}))),n.apiRecipeSearch=Object(c.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k("recipes/"+n.state.id+"/information",""),e.next=3,n.setState({loading:!0});case 3:return e.next=5,fetch(a,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n.setState({result:e,loading:!1})}));case 5:case"end":return e.stop()}}),e)}))),n.addToInitCarbon=function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.initCarbon,e.next=3,n.setState({initCarbon:t+a});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.addToSubCarbon=function(){var e=Object(c.a)(s.a.mark((function e(a){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.subCarbon,e.next=3,n.setState({subCarbon:t+a});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.state={id:n.props.match.params.id,loading:!0,result:{},initCarbon:0,subCarbon:0},n}return Object(d.a)(t,[{key:"render",value:function(){var e=this;if(this.state.loading)return l.a.createElement("div",{className:"loader"});if(this.state.result.status)return w(this.state.result);if(Object.keys(this.state.result).length>0){var a="";if(!1===this.state.result.vegan&&this.state.initCarbon>0){var t=this.state.initCarbon-this.state.subCarbon;a=(t/this.state.initCarbon*100).toString().slice(0,5)+"% ("+(1e3*t).toString().slice(0,5)+"g) CO2 equivalent greenhouse gas decrease by following the suggested substitutions. This is approximately equivalent to a car driving "+(3.846*t).toString().slice(0,5)+" miles"}return l.a.createElement("div",{className:"recipeCard"},l.a.createElement("h1",{className:"recipeCardTitle"},E(this.state.result.title)),this.state.result.vegan?l.a.createElement("h3",{className:"recipeCardIsVegan"},"This recipe is already vegan!"):"",l.a.createElement("div",{className:"recipeCardCarbonDecrease"},a),l.a.createElement("ul",{className:"recipeCardDetails"},l.a.createElement("li",null,"Cooking Time: ",this.state.result.readyInMinutes," mins"),l.a.createElement("li",null,"Servings : ",this.state.result.servings)),l.a.createElement("h2",{className:"recipeCardIngredient"},"Ingredients"),l.a.createElement("ul",{className:"recipeCardIngredient"},this.state.result.extendedIngredients.map((function(a,t){return l.a.createElement("li",{key:t},l.a.createElement(S,{addToInitCarbon:e.addToInitCarbon,addToSubCarbon:e.addToSubCarbon,veganRecipe:!!e.state.result.vegan,details:a}))}))),l.a.createElement("h2",{className:"recipeCardMethod"},"Method"),l.a.createElement("div",{className:"recipeCardMethod"},this.state.result.analyzedInstructions.length>0?this.state.result.analyzedInstructions[0].steps.map((function(e,a){return l.a.createElement("p",{key:a},e.step)})):this.state.result.instructions.split(". ").map((function(e,a){return l.a.createElement("p",{key:a},e)}))))}return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"There is no recipe with the ID ",this.state.id))}}]),t}(l.a.Component),O=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("h1",null,"404 PAGE NOT FOUND")}}]),t}(l.a.Component),q=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"about"},l.a.createElement("h1",null,"What is Veganalysis?"),l.a.createElement("p",{className:"big"},"A ",l.a.createElement("u",null,l.a.createElement("a",{href:"https://www.ox.ac.uk/news/2019-10-29-plant-based-foods-are-good-both-health-and-environment",target:"_blank",rel:"noopener noreferrer"},"study by Oxford University"))," concluded that the single most impactful action a person can do to help the environment is to go vegan.",l.a.createElement("br",null),l.a.createElement("br",null),"Veganalysis aims to do it's part to help the environment by demonstrating how one simple change can have such a dramatic positive impact.",l.a.createElement("br",null),l.a.createElement("br",null),'Simply search for a recipe, and Veganalysis will suggest simple substitutions to "veganise" the recipe. What\'s more, Veganalysis will calculate how much Carbon Dioxide Equivalent gas is saved by following the substitutions.'),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",null,"How was Veganalysis made?"),l.a.createElement("p",null,"Veganalysis's MVP was launced after it was made for the Lockdoneathon hackathon in August 2020.",l.a.createElement("br",null),"It is built using React, HTML, CSS and a sprinkle of vanilla JS.",l.a.createElement("br",null),l.a.createElement("u",null,l.a.createElement("a",{href:"https://github.com/btharding/Veganalysis",target:"_blank",rel:"noopener noreferrer"},"View the github repo.")),l.a.createElement("br",null),"Veganalysis was built by ",l.a.createElement("u",null,l.a.createElement("a",{href:"https://btharding.github.io",target:"_blank",rel:"noopener noreferrer"},"William Harding.")),l.a.createElement("br",null),l.a.createElement("b",null,"Disclaimer:")," Veganalysis is a work in progress, and the data used to inform substitutions and calculations is incomplete, so you may see some non-vegan ingredients that are not flagged / may not have a substitute, or vegan ingredients that have accidentally been flagged as non-vegan."))}}]),t}(l.a.Component),I=(t(34),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).changeState=function(){var e=Object(c.a)(s.a.mark((function e(a,t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("goHome"!==a){e.next=4;break}return e.next=3,n.setState({goHome:t});case 3:return e.abrupt("return");case 4:if("query"!==a){e.next=8;break}return e.next=7,n.setState({query:t});case 7:return e.abrupt("return");case 8:if("data"!==a){e.next=12;break}return e.next=11,n.setState({data:t});case 11:return e.abrupt("return");case 12:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),n.state={query:"",goHome:!1,data:{}},n}return Object(d.a)(t,[{key:"render",value:function(){return this.state.goHome?(this.changeState("goHome",!1),l.a.createElement(p.a,null,l.a.createElement(y.a,{to:"/Veganalysis/"}))):""!==this.state.query?(this.changeState("query",""),l.a.createElement(p.a,null,l.a.createElement(y.a,{to:"/Veganalysis/search/"+this.state.query}))):l.a.createElement("div",{className:"container"},l.a.createElement(f,{changeStateFn:this.changeState}),l.a.createElement(v,{changeStateFn:this.changeState}),l.a.createElement(p.a,null,l.a.createElement(y.d,null,l.a.createElement(y.b,{exact:!0,path:"/Veganalysis/",component:q}),l.a.createElement(y.b,{exact:!0,path:"/Veganalysis/search/:query",render:function(e){return l.a.createElement(x,e)}}),l.a.createElement(y.b,{exact:!0,path:"/Veganalysis/recipe/:id",render:function(e){return l.a.createElement(j,e)}}),l.a.createElement(y.b,{component:O}))))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.b3e9edd1.chunk.js.map