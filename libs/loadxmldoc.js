//declare your default xml file in case the specified xml is not found
//include this js file in all main html files
/*
 * add this in main html file window.onload=function() {
		loadXML("nameOfXML.XML",passtheFunctionYouWantToCallAfterLoadingXMLFile);
	};
 * 
 */

var defaultXml='sampleXMl.XML';
//var defaultFunc=function() {
	//				start(); //we should function start in all html files from where we have to proceed in that.
		//		};

var quesArr=new Array();
var promptArr=new Array;
var instArr=new Array;
var miscArr=new Array;
var imagesArr = new Array;
var soundArr = new Array;
var xmlDoc;
var params = {};

var languageNames = {	//Used to get language names from their ISO Language Codes 
	hi:"hindi",
	en_in:"english",	//India
	en_us:"english",	//US
	en_gb:"english",	//Great Britain
	te:"telugu",
	mr:"marathi",
	gu:"gujarati",
	pa:"punjabi",
	ta:"tamil",
	kn:"kannada",
	ur:"urdu",
	or:"oriya",	// Adding Oriya on 25/4/2022 - Kishore
};


function loadXML(xmlFileName,defaultFunc)
{
	console.log("Inside loadXML function -  old folder structure");
	parseXMLFile(xmlFileName,defaultFunc,1);
}

function loadXMLNEW(xmlFileName,defaultFunc)
{
	console.log("Inside loadXMLNEW function -  new folder structure");
	parseXMLFile(xmlFileName,defaultFunc,2);
}

function parseXMLFile(xmlFileName,defaultFunc,fileno)
{
		var query = window.location.search.substring(1);//window.location.search gives the the string from ? in the address bar.
		var vars = query.split("&");  //if multiple parameters passed
		for (var i=0;i<vars.length;i++)
		{
			var pair = vars[i].split("=");
			params[pair[0]] = pair[1];
		}

		//for existing/old folder structure
		if(fileno==1)
		{
			if(params.language == "hi")
				params.language = "hindi";
			else if(params.language == "en_in" || params.language == "" || params.language == null)
				params.language = "english";
			else if(params.language == "te")
				params.language = "telugu";
			else if(params.language == "mr")
				params.language = "marathi";
			else if(params.language == "gu")
				params.language = "gujarati";
			else if(params.language == "pa")
				params.language = "punjabi";
			else if(params.language == "ta")
				params.language = "tamil";
			else if(params.language == "kn")
				params.language = "kannada";
			else if(params.language == "ur")
				params.language = "urdu";
			else if(params.language == "or")	// Added Oriya on 25/4/2022 - Kishore
				params.language = "oriya";

			if(params.language)
				parse(params.language,xmlFileName,defaultFunc);
			else
		 		parse('english',xmlFileName,defaultFunc); 
		}
		else //for new folder structure
		{
			//Condition Check for Interface
			if(params.language == "hindi")
				params.language = "hi";
			else if(params.language == "english" || params.language == "" || params.language == null)
				params.language = "en_in";
			else if(params.language == "telugu")
				params.language = "te";
			else if(params.language == "marathi")
				params.language = "mr";
			else if(params.language == "gujarati")
				params.language = "gu";
			else if(params.language == "punjabi")
				params.language = "pa";
			else if(params.language == "tamil")
				params.language = "ta";
			else if(params.language == "kannada")
				params.language = "kn";
			else if(params.language == "urdu")
				params.language = "ur";
			else if(params.language == "oriya") // Added Oriya on 25/4/2022 - Kishore
				params.language = "or";

			xmlFileName = "en_in.xml";
			//check if xml file exists or not
			fetch(xmlFileName, { method: 'HEAD' })
		    .then(response => {
		        if (!response.ok) {
		            console.log(params.language + " XML file doesn't exist - Setting default to English");
		            xmlFileName = "xml/en_in.xml";
		        }
		        return fetch(xmlFileName);
		    })
		    .then(response => response.text())
		    .then(data => {
		        let parser = new DOMParser();
		        xmlDoc = parser.parseFromString(data, "text/xml");
		        parse('general', xmlFileName, defaultFunc);
		    })
		    .catch(error => console.error("Error loading XML:", error));

		}//else close
}

function loadXMLDoc(dname) {
    return fetch(dname)
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            return parser.parseFromString(data, "text/xml");
        })
        .catch(error => {
            console.error("Error loading XML:", error);
            return null;
        });
}


function parse(lang,fname,defaultFunc)
{
	quesArr=[];
	promptArr=[];
	instArr=[];
	miscArr=[];
	imagesArr=[];
	soundArr=[];
	loadXMLDoc(fname).then(data => {
	    xmlDoc = data;
	    if (xmlDoc == null) return;
	    let x = xmlDoc.getElementsByTagName(lang)[0] || xmlDoc.getElementsByTagName("english")[0];
	    if (!x) return;
	    
	    let x1 = x.getElementsByTagName("que");
	    for (let i = 0; i < x1.length; i++) {
	        quesArr[x1[i].getAttribute("name")] = x1[i].getAttribute("text");
	    }
	    
	    let x2 = x.getElementsByTagName("prompt");
	    for (let j = 0; j < x2.length; j++) {
	        promptArr[x2[j].getAttribute("name")] = x2[j].getAttribute("text");
	    }
	    
	    let x3 = x.getElementsByTagName("instruction");
	    for (let k = 0; k < x3.length; k++) {
	        instArr[x3[k].getAttribute("name")] = x3[k].getAttribute("text");
	    }
	    
	    let x4 = x.getElementsByTagName("misc");
	    for (let l = 0; l < x4.length; l++) {
	        miscArr[x4[l].getAttribute("name")] = x4[l].getAttribute("text");
	    }
	    
	    let x5 = x.getElementsByTagName("img");
	    for (let m = 0; m < x5.length; m++) {
	        imagesArr[x5[m].getAttribute("name")] = x5[m].getAttribute("text");
	    }
	    
	    let x6 = x.getElementsByTagName("sound");
	    for (let n = 0; n < x6.length; n++) {
	        soundArr[x6[n].getAttribute("name")] = x6[n].getAttribute("voice");
	    }

	    defaultFunc();
	});

	
	if(xmlDoc==null)
		return;
		//xmlDoc=loadXMLDoc(defaultXml);
	
	x=xmlDoc.getElementsByTagName(lang);
	if(x.length==0)
	{
		x=xmlDoc.getElementsByTagName('english')[0];
	}
	else
	{
		x=x[0];
	}
	
	x1=x.getElementsByTagName("que");
	for(i=0;i<x1.length;i++)
	{
		quesArr[x1[i].getAttribute('name')] = x1[i].getAttribute('text');
	}
	
	x2=x.getElementsByTagName("prompt");
	for(j=0;j<x2.length;j++)
	{
		promptArr[x2[j].getAttribute('name')]=x2[j].getAttribute('text');
	}
	
	x3=x.getElementsByTagName("instruction");
	for(k=0;k<x3.length;k++)
	{
		instArr[x3[k].getAttribute('name')]=x3[k].getAttribute('text');
	}
	
	x4=x.getElementsByTagName("misc");
	for(l=0;l<x4.length;l++)
	{
		miscArr[x4[l].getAttribute('name')]=x4[l].getAttribute('text');
	}

	x5=x.getElementsByTagName("img");
	for(m=0;m<x5.length;m++)
	{
		imagesArr[x5[m].getAttribute('name')]=x5[m].getAttribute('text');
	}

	x6=x.getElementsByTagName("sound");
	for(n=0;n<x6.length;n++)
	{
		soundArr[x6[n].getAttribute('name')]=x6[n].getAttribute('voice');
	}
	
	defaultFunc();
}