//////////////////////////////////////// Common variables ///////////////////////////////////
var extraParameters = '';	///proprietary

var levelWiseScore = 0;	//total correct answers given by student
// var levelsAttempted='';
// var levelWiseStatus=0;
var completed = 0;
// var levelWiseTimeTaken=0;
// var previousLevelLock='1';

///////////////////////////////////////////////////////////////////////////////////////////////


var correctAnswerRow = 0;
var RemedialCorrectAnswerRow = 0; 

var currentQtype = '1'; //first question
var End_Game = 0;

var balanceCoins = 3000;

var choose_row_for_number_a = 0;
var choose_row_for_number_b = 1;


var count_A_doors = 0;
var count_B_doors = 0;
var number_of_doors = 0;

var Hn_gos_A = 0;	//tracks if the tenth door was opened on the first or the 2nd instance in the 1st number
var Hn_gos_B = 0;	//tracks if the tenth door was opened on the first or the 2nd instance in the 2nd number
var HN_gos = 0;

var HN_nod = 1;

var Q_counter = [1,0,0,0,0,0,0];

var Q_1to5_getting_correct = [0, 0, 0, 0, 0];

var nextQ_in_diagnosis = [];

var All_Q_getting_correct = [];

var Is_any_Q_left = 0;

var last_Q_was_EorD = 'E';

var Qtype_position = 0;

var IsCorrect = 2; // start with neutral
var studentResponse = 'number_a';


var numbersToBeCompared = [];

var currentLevel = 1;

///////////////////////////// Variables for storage of data /////////////////////////////////////
var attempted_data = '';
var totalQuestionsAsked = 0;
var attemptedQtype = '';
var userResponse = 0;	
var timeTaken = 0;	//time in seconds
var number1 = 0;
var number2 = 0;
var helpOn = 0;
var questionResult = 0;
// var noOfDoors = 0;
var orderOfDoors = '';
var Qtype_counter = '';
var misconception_data = '';
var actualQcounter = Q_counter;
var most_probable_misconception = '';
var most_probable_misconception_probability = 0;

////////////////////// Time variables /////////////////////////////////
coinAnimtionTime = 400;
doorOpenTime = 400;

//////////////// Priors for FineClass (Qtype 1 to 5)////////////////////
const FineClass = ['AE', 'AMO','AU','L1-LWH', 'L2-LZE', 'LU', 'S1-SDF', 'S3-SRN', 'SU', 'U-MIS', 'UN'];

var FineClass_prbblty = [0.3103712534059946, 0.3138198228882834, 0.17434434604904636, 0.0038743188010899187, 0.03486886920980927, 0.019371594005449595, 0.03486886920980927, 0.03486886920980927, 0.019371594005449595, 0.0004304798667877688, 0.0538099833484711];

const QTypes_1to5_prbblty = {
    "1":{
        1: [0.9, 0.9, 0.9, 0.1, 0.1, 0.1, 0.9, 0.9, 0.9, 0.1, 0.5],
        0: [0.1, 0.1, 0.1, 0.9, 0.9, 0.9, 0.1, 0.1, 0.1, 0.9, 0.5] },
    "2":{
        1: [0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.1, 0.1, 0.1, 0.1, 0.5],
        0: [0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.9, 0.9, 0.9, 0.9, 0.5] },
    "3":{
        1: [0.9, 0.9, 0.5, 0.1, 0.9, 0.5, 0.9, 0.9, 0.5, 0.1, 0.5],
        0: [0.1, 0.1, 0.5, 0.9, 0.1, 0.5, 0.1, 0.1, 0.5, 0.9, 0.5] },
    "4":{
        1: [0.86, 0.07, 0.46, 0.86, 0.86, 0.46, 0.1, 0.1, 0.46, 0.1, 0.46],
        0: {"equal": [0.04, 0.86, 0.08, 0.04, 0.04, 0.08, 0.04, 0.04, 0.08, 0.2, 0.08],
            "number_b": [0.1, 0.07, 0.46, 0.1, 0.1, 0.46, 0.86, 0.86, 0.46, 0.7, 0.46]
           } 
        },
    "5":{
        1: [0.9, 0.9, 0.5, 0.9, 0.9, 0.5, 0.9, 0.1, 0.5, 0.1, 0.5],
        0: [0.1, 0.1, 0.5, 0.1, 0.1, 0.5, 0.1, 0.9, 0.5, 0.9, 0.5] }
    };

    
var updated_FineClass_prbblty = FineClass_prbblty;



//////Section 3A: This section is feeding constants for Fineclass and HN_eff in the doamin of HN_gos and HN_nod
const HN_eff = [1,0];
var HN_eff_prbblty = [0.5, 0.5]	//HN_effectiveness
const HN_nod_to_FineClass_CPT = {  
    "1":{
        'F': [0.25,0.25,0.25,0.5,0.5,0.5,0.5,0.5,0.5,0.33,0.33],
        'R': [0.5,0.5,0.5,0.25,0.25,0.25,0.25,0.25,0.25,0.34,0.34],
        'M': [0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.33,0.33] },
    "2":{
        'F': [0.25,0.25,0.25,0.5,0.5,0.5,0.5,0.5,0.5,0.33,0.33],
        'R': [0.5,0.5,0.5,0.25,0.25,0.25,0.25,0.25,0.25,0.34,0.34],
        'M': [0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.33,0.33] },
    "3":{
        'F': [0.25,0.25,0.25,0.5,0.5,0.5,0.5,0.5,0.5,0.33,0.33],
        'R': [0.5,0.5,0.5,0.25,0.25,0.25,0.25,0.25,0.25,0.34,0.34],
        'M': [0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.33,0.33] },
    "4":{
        'F': [0.33,0.33,0.33,0.66,0.66,0.66,0.66,0.66,0.66,0.45,0.45],
        'R': [0.66,0.66,0.66,0.33,0.33,0.33,0.33,0.33,0.33,0.44,0.44],
        'M': [0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01] },
    "5":{
        'F': [0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.33,0.33],
        'R': [0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.34,0.34],
        'M': [0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.33,0.33] },
    "9":{
        'F': [0.25,0.25,0.25,0.5,0.5,0.5,0.5,0.5,0.5,0.33,0.33],
        'R': [0.5,0.5,0.5,0.25,0.25,0.25,0.25,0.25,0.25,0.34,0.34],
        'M': [0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.25,0.33,0.33] },
    "10A":{
        'F': [0.33,0.33,0.33,0.66,0.66,0.66,0.66,0.66,0.66,0.45,0.45],
        'R': [0.66,0.66,0.66,0.33,0.33,0.33,0.33,0.33,0.33,0.44,0.44],
        'M': [0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01,0.01] }}

var HN_nod_to_HN_eff_CPT = {
    'F' : [0.2, 0.4],
    'R' : [0.6, 0.2],
    'M' : [0.2, 0.4] }

var HN_gos_to_HN_eff_CPT = {
    1: [0.7,0.3],
    0: [0.3, 0.7]}

var updated_HN_eff_prbblty = HN_eff_prbblty;



//////////////// Priors for 0_related FineClass1 (Qtype 9)////////////////////

const Zero_FineClass_1 = ['Ignore_0', 'DPI_0', 'AE_0_Qt9', 'UN_0_Qt9'];

var Zero_FineClass_1_prbblty = [0.25, 0.29, 0.25, 0.21];

const QTypes_9_prbblty = {
	1:{"number_a":[0.1, 0.1, 0.8, 0.34]},
    0:{ "equal":[0.8, 0.1, 0.1, 0.32],
    	"number_b":[0.1, 0.8, 0.1, 0.34]
      }
    };

var updated_Zero_FineClass_1_prbblty = Zero_FineClass_1_prbblty;





//////////////// Priors for 0_related FineClass2 (Qtype 10A)////////////////////

const Zero_FineClass_2 = ['L_0', 'S_0', 'AE_0_Qt10A', 'UN_0_Qt10A'];

var Zero_FineClass_2_prbblty = [0.27, 0.27, 0.27, 0.19];

const QTypes_10A_prbblty = {
    1:{"equal":[0.1, 0.1, 0.8, 0.32]},
    0:{
    	"number_a":[0.8, 0.1, 0.1, 0.34], 
     	"number_b":[0.1, 0.8, 0.1, 0.34]
      }
    };


var updated_Zero_FineClass_2_prbblty = Zero_FineClass_2_prbblty;


function questionInteractive() 
{	
	if(typeof getParameters['numberLanguage']=="undefined") 
	    this.numberLanguage = 'english'; 
		else this.numberLanguage = getParameters['numberLanguage'];

	if(typeof getParameters['language']=="undefined") 
		this.language = 'english'; 
	else this.language = getParameters['language'];


	if(typeof getParameters['lastLevelCleared']=="undefined") 
		this.lastLevelCleared = 0; 
	else this.lastLevelCleared = getParameters['lastLevelCleared'];


	if(typeof getParameters['misconception_array']=="undefined") 
	{	
		this.misconception_array = '{"misconception_data":'+
										'{"AE": 0.3103712534059946, "AMO": 0.3138198228882834, "AU": 0.17434434604904636, "L1-LWH": 0.0038743188010899187, "L2-LZE": 0.03486886920980927, "LU": 0.019371594005449595, "S1-SDF": 0.03486886920980927, "S3-SRN": 0.03486886920980927, "SU": 0.019371594005449595, "U-MIS": 0.0004304798667877688, "UN": 0.0538099833484711, "Ignore_0": 0.25, "DPI_0": 0.29, "AE_0_Qt9": 0.25, "UN_0_Qt9": 0.21, "L_0": 0.27, "S_0": 0.27, "AE_0_Qt10A": 0.27, "UN_0_Qt10A": 0.19, "NEG": 0.001, "Disjoint": 0.001}'+
									'}'; 
	}
	else this.misconception_array = getParameters['misconception_array'];

	this.startTime = 0;
	this.endTime = 0;
}


questionInteractive.prototype.init = function() 
{
	// interactiveObj.start();
	interactiveObj.startScreen();
}


questionInteractive.prototype.startScreen = function()
{
	var htmlContent = '';

	htmlContent = '<div id="mainScreenStart">';
	htmlContent += '<div id="GameTitle"></div>';
	htmlContent += '<div id="GamePlayButton" class="highlight" onclick="interactiveObj.start()">'+'PLAY'+'</div>';
	htmlContent += '</div>';

	$("#container").html(htmlContent); ///work
}

questionInteractive.prototype.start = function() 
{	

	this.misconception_array = JSON.parse(this.misconception_array);	//parsing JSON
	this.exitOnOwn = null;

	if(Object.keys(this.misconception_array["misconception_data"]).length == 21)	//update probability values based on parameter 
	{
		FineClass_prbblty = [this.misconception_array["misconception_data"]["AE"], this.misconception_array["misconception_data"]["AMO"], this.misconception_array["misconception_data"]["AU"], this.misconception_array["misconception_data"]["L1-LWH"], this.misconception_array["misconception_data"]["L2-LZE"], this.misconception_array["misconception_data"]["LU"], this.misconception_array["misconception_data"]["S1-SDF"], this.misconception_array["misconception_data"]["S3-SRN"], this.misconception_array["misconception_data"]["SU"], this.misconception_array["misconception_data"]["U-MIS"], this.misconception_array["misconception_data"]["UN"]];

		Zero_FineClass_1_prbblty = [this.misconception_array["misconception_data"]["Ignore_0"], this.misconception_array["misconception_data"]["DPI_0"], this.misconception_array["misconception_data"]["AE_0_Qt9"], this.misconception_array["misconception_data"]["UN_0_Qt9"]];
	
		Zero_FineClass_2_prbblty = [this.misconception_array["misconception_data"]["L_0"], this.misconception_array["misconception_data"]["S_0"], this.misconception_array["misconception_data"]["AE_0_Qt10A"], this.misconception_array["misconception_data"]["UN_0_Qt10A"]];
	}



	interactiveObj.createBaseDivs(); //Create question screen

	interactiveObj.createRemedial(); //Create inactive remedial screen

	interactiveObj.createHelp(); //Create Help (new)

	interactiveObj.showNextQuestion(currentQtype); //start with questions

	interactiveObj.createLevels(); //Create levels
}


questionInteractive.prototype.createBaseDivs = function()
{
	var htmlContent = '';
	var id = '';

	/////////////////////////////// NEW UI ///////////////////////////////////////////////////
	htmlContent += '<div id="mainDiv">';

	htmlContent += '<div id="askQuestion">'; //show question
	htmlContent += '<div id="helpButton">'+'HELP'+'</div>';
	htmlContent += '<div id="questionArea">'+'Which is greater?'+'</div>';
	htmlContent += '<div id="moneyArea">';
	htmlContent += '<div id="coinImage"></div>';
	htmlContent += '<div id="showBalance">'+balanceCoins+'</div>';
	htmlContent += '</div>';
	htmlContent += '</div>';// show question

	htmlContent += '<div id="questionDiv">'; //question div
	
	htmlContent += '<div id="optionA" class="optionRows">'; //option A div
	htmlContent += '<div id="optionALabel" class="optionRowsLabels"><div id="optionALabelText" class="optionRowsLabelText">'+'OPTION A'+'</div></div>'; 
	htmlContent += '<div id="row0" class="numberRows">';
	for(var i=0;i<7;i++)
	{
		id = 'row_0_door_'+i;
		htmlContent += '<div id="'+id+'" class="doors"></div>';
	}
	htmlContent += '</div>';
	htmlContent += '<div id="optionAscaffolding" class="optionRowScaffolding"></div>'; 
	htmlContent += '</div>'; //option A div end


	htmlContent += '<div id="optionB" class="optionRows">'; //option B div
	htmlContent += '<div id="optionBLabel" class="optionRowsLabels"><div id="optionBLabelText" class="optionRowsLabelText">'+'OPTION B'+'</div></div>'; 
	htmlContent += '<div id="row1" class="numberRows">';
	for(var i=0;i<7;i++)
	{
		id = 'row_1_door_'+i;
		htmlContent += '<div id="'+id+'" class="doors"></div>';
	}
	htmlContent += '</div>';
	htmlContent += '<div id="optionBscaffolding" class="optionRowScaffolding"></div>'; 
	htmlContent += '</div>'; //option B div end
	
	htmlContent += '</div>'; //question div end



	htmlContent += '<div id="answerDiv">';
	htmlContent += '<div id="topNumber" class="answerButtons" onclick="interactiveObj.evaluateAnswer(0)">'+'OPTION A'+'</div>';
	htmlContent += '<div id="equalNumber" class="answerButtons" onclick="interactiveObj.evaluateAnswer(2)">'+'BOTH ARE EQUAL'+'</div>';
	htmlContent += '<div id="bottomNumber" class="answerButtons" onclick="interactiveObj.evaluateAnswer(1)">'+'OPTION B'+'</div>';
	htmlContent += '</div>';

	htmlContent += '</div>';

	//////////////////////////////////////////////////////////////////////////////////////////////////////

	htmlContent += '<div id="coinToAnimate"></div>';

	htmlContent += '<div id="credits">'+'Developed by Mindspark team based on the research by Dr. Kaye Stacey and collaborators, The University of Melbourne, Australia.'+'</div>';

	$("#container").html(htmlContent);

}


questionInteractive.prototype.showNextQuestion = function(pQtype)
{
	console.log("\n----------------------\n");

	totalQuestionsAsked += 1;
	attemptedQtype = pQtype;

	if(pQtype=='4' || pQtype=='9' || pQtype=='10A')
	{
		$("#equalNumber").css({"visibility":"visible"});
	}
	else
	{
		$("#equalNumber").css({"visibility":"hidden"});
	}

	/////////////////////////////////////// Reinitialize after every question //////////////////////////////////////////
	count_A_doors = 0;
	count_B_doors = 0;
	number_of_doors = 0;
	orderOfDoors = '';
	Hn_gos_A = 0;
	Hn_gos_B = 0;
	HN_gos = 0;
	HN_nod = 1;
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	$("#mainDiv").css({"visibility":"visible"}); //added new

	// $(".doors").css({"background":"#99EAF3", "font-size":"0px", "cursor":"auto"}); // fresh screen
	$(".doors").css({"background":"#99EAF3", "cursor":"auto"}); // fresh screen
	$(".doors").prop("onclick", null).off("click"); //remove onclick

	
	$("#row_0_door_1").css({"background":"black", "font-size":"0px"}); // decimal 
	$("#row_1_door_1").css({"background":"black", "font-size":"0px"}); // decimal 

	var values = interactiveObj.Qtype_number_generator(pQtype);

	console.log("Values: [a,b] = ",values);

	var a = values[0];//greater for all Qtypes except 10A(equal)
	var b = values[1];

	var numbers_to_be_compared = []; //Array to store a,b in random order
	
	// Randomise the position of a(correct) and b
	choose_row_for_number_a = getRandomInteger(0,1);
	choose_row_for_number_b = 1 - choose_row_for_number_a;

	//Mark the position of correct answer as the answer buttons have independent onclick functions
	if(currentQtype != '10A')
		correctAnswerRow = choose_row_for_number_a; // To evaluate the student response
	else
		correctAnswerRow = 2; //Both the numbers are equal

	//Fill the array based on random position
	numbers_to_be_compared[choose_row_for_number_a] = a;
	numbers_to_be_compared[choose_row_for_number_b] = b;

	numbersToBeCompared = numbers_to_be_compared;

	console.log("numbers_to_be_compared ",numbers_to_be_compared);

	$(".doors").html(""); //clear divs from previous question

	//fill rows(divs) with numbers 
	for(var i=0; i<numbers_to_be_compared.length; i++)
	{
		for(var j=0; j<numbers_to_be_compared[i].length; j++)
		{
			let id = "row_"+i+"_door_"+j;

			var doorHtml = '<div id="'+id+'_doorImage" class="doorImage"></div>';

			if(j != 1)
			{			
				// $("#"+id).css({"background":"url(\"../assets/door.png\")", "background-repeat":"no-repeat", "cursor":"pointer"});
				$("#"+id).css({"background":"white", "background-repeat":"no-repeat", "cursor":"pointer"});
				$("#"+id).click(function(){ interactiveObj.openDoor(id); }); 
			
				$("#"+id).html(numbers_to_be_compared[i][j]); //Place Numbers
				$("#"+id).append(doorHtml); //Place Numbers
			}
			// $("#"+id).html(numbers_to_be_compared[i][j]); //Place Numbers
			// $("#"+id).append(doorHtml); //Place Numbers
		}
	}

	$(".answerButtons").css({"pointer-events":"auto"}); //enable answer click

	interactiveObj.startTime = new Date().getTime(); //Start timer to find time taken to attempt the question
}



questionInteractive.prototype.openDoor = function(pId)
{
	var idealDoorOrder = [0,0,2,2,3,3,4,4,5,5,6,6]; //Sequence of door numbers that should be opened ideally 

	if(parseInt(pId[11]) != idealDoorOrder[number_of_doors-1])
	{
		HN_nod = 0;	//Doors opened randomly
	}

	$('#'+pId).prop("onclick", null).off("click"); //remove onclick

	
	//////////////////////////////// QTD(Question Type Decider) logic ///////////////////////////////////////////////////////
	
	if(pId[4]==choose_row_for_number_a)
	{
		// console.log("Door A");	
		count_A_doors += 1;	
		// console.log("count_A_doors ",count_A_doors);

		if(parseInt(pId[11]) == '0') ///For extraparams (order of doors opened)
		{
			orderOfDoors += 'a'+pId[11];
		}
		else
		{
			orderOfDoors += 'a'+(parseInt(pId[11]) - 1); //door1 is decimal
		}

		if((count_A_doors == 1 || count_A_doors == 2) && pId[11] == '2')
		{
			// console.log("Door A1");
			Hn_gos_A = 1; 
		}
	}
	else
	{
		// console.log("Door B");
		count_B_doors += 1;
		// console.log("count_B_doors ",count_B_doors);

		if(parseInt(pId[11]) == '0') ///For extraparams (order of doors opened)
		{
			orderOfDoors += 'b'+pId[11];
		}
		else
		{
			orderOfDoors += 'b'+(parseInt(pId[11]) - 1); //door1 is decimal
		}

		if((count_B_doors == 1 || count_B_doors == 2) && pId[11] == '2')
		{
			// console.log("Door B1");
			Hn_gos_B = 1;  
		}
	}

	number_of_doors = count_A_doors + count_B_doors;
	HN_gos = Hn_gos_A*Hn_gos_B;

	//////////////////////////////// QTD logic end///////////////////////////////////////////////////////


	// $("#"+pId).animate({backgroundPositionY:"-=100px"}, 200);
	// $("#"+pId).css({"font-size":"60px"}); // Make Numbers Appear

	// setTimeout(function(){ 
	// 	$("#"+pId).css({"background":"white"}); // Make Numbers Appear
	// }, 200);

	setTimeout(function(){ 
		$("#"+pId+"_doorImage").animate({backgroundPositionY:"-=100px"}, doorOpenTime);
		// $("#"+pId).css({"font-size":"60px"}); // Make Numbers Appear

		// setTimeout(function(){ 
		// 	$("#"+pId).css({"background":"white"}); // Make Numbers Appear
		// }, 200);
	}, coinAnimtionTime+100);


	var coinStartLeftPos = $("#coinImage").offset().left;
	var coinStarteTopPos = $("#coinImage").offset().top;

	$("#coinToAnimate").css({"left":coinStartLeftPos+"px", "top":coinStarteTopPos+"px", "visibility":"visible"});

	var coinEndLeftPos = $("#"+pId).offset().left;
	var coinEndTopPos = $("#"+pId).offset().top;
	$("#coinToAnimate").animate({left:coinEndLeftPos+"px", top:coinEndTopPos+"px"}, coinAnimtionTime);	

	setTimeout(function(){ 
		$("#coinToAnimate").css({"visibility":"hidden"}); // Make Numbers Appear
	}, coinAnimtionTime);


	balanceCoins -= 50;
	$("#showBalance").html(balanceCoins);

}


questionInteractive.prototype.showCoinAnimation = function(pIsCorrect)
{	
	var correctRow = ["topNumber", "bottomNumber", "equalNumber"];
	var animationTime = 1300;


	if(pIsCorrect == 1)
	{
		$("#moneyArea").css({"background":"#34f230"});
		$("#"+correctRow[correctAnswerRow]).css({"background":"#34f230", "border-color":"transparent transparent #008000 transparent"}); //Correct answer green


		var coinStartLeftPos = $("#"+correctRow[correctAnswerRow]).offset().left;
		var coinStarteTopPos = $("#"+correctRow[correctAnswerRow]).offset().top;

		$("#coinToAnimate").css({"left":coinStartLeftPos+"px", "top":coinStarteTopPos+"px", "visibility":"visible"});

		var coinEndLeftPos = $("#coinImage").offset().left;
		var coinEndTopPos = $("#coinImage").offset().top;
		$("#coinToAnimate").animate({left:coinEndLeftPos+"px", top:coinEndTopPos+"px"}, animationTime);	

		setTimeout(function(){ 
			$("#coinToAnimate").css({"visibility":"hidden"});
		}, animationTime);


		balanceCoins += 500;
	}
	else
	{
		$("#moneyArea").css({"background":"red"});
		$(".answerButtons").css({"background":"red", "border-color":"transparent transparent #8B0000 transparent"}); //Incorrect answers
		$("#"+correctRow[correctAnswerRow]).css({"background":"#34f230", "border-color":"transparent transparent #008000 transparent"}); // Correct answer green


		var coinStartLeftPos = $("#coinImage").offset().left;
		var coinStarteTopPos = $("#coinImage").offset().top;

		$("#coinToAnimate").css({"left":coinStartLeftPos+"px", "top":coinStarteTopPos+"px", "visibility":"visible"});

		var coinEndLeftPos = $("#"+correctRow[correctAnswerRow]).offset().left;
		var coinEndTopPos = $("#"+correctRow[correctAnswerRow]).offset().top;

		$("#coinToAnimate").animate({left:coinEndLeftPos+"px", top:coinEndTopPos+"px"}, animationTime);	

		setTimeout(function(){ 
			$("#coinToAnimate").css({"visibility":"hidden"}); 
		}, animationTime);

		balanceCoins -= 100;
	}
	
	setTimeout(function(){ 
			$("#moneyArea").css({"background":"lightblue"});
			$("#showBalance").html(balanceCoins);

			$(".answerButtons").css({"background":"#D373F2", "border-color":"transparent transparent #A84FC5 transparent"}); //Normal answer button color
	}, animationTime);
}


//////////////////////////////////////////// Create Levels //////////////////////////////////////////////////////
questionInteractive.prototype.createLevels = function()
{
	var htmlContent = '';

	htmlContent += '<div id="mainDivLevels" style="visibility:hidden;"></div>';

	$("#container").append(htmlContent);
}


questionInteractive.prototype.showLevel = function()
{
	var levelScreenTime = 3000; 
	var levelText = replaceDynamicText('LEVEL #currentLevel#', interactiveObj.language, "");

	$("#mainDivLevels").css({"visibility":"visible"});
	$("#mainDivLevels").html(levelText);

	setTimeout(function(){ 
			$("#mainDivLevels").css({"visibility":"hidden"});
	}, levelScreenTime);
}

//////////////////////////////////////////// Create Remedial  /////////////////////////////////////////////////////////////////////////



questionInteractive.prototype.createRemedial = function()
{
	var htmlContent = '';
	htmlContent += '<div id="remedialDiv" style="visibility:hidden;">';

	htmlContent += '<div id="askQuestionRemedial">'; //show question
	htmlContent += '<div id="questionAreaRemedial">'+'Which is greater?'+'</div>';
	htmlContent += '</div>';// show question

	htmlContent += '<div id="questionDivRemedial">'; //question div
	
	htmlContent += '<div id="optionARemedial" class="optionRowsRemedial">'; //option A div
	htmlContent += '<div id="optionALabelRemedial" class="optionRowsLabelsRemedial"><div id="optionALabelTextRemedial" class="optionRowsLabelTextRemedial">'+'OPTION A'+'</div></div>'; 
	htmlContent += '<div id="row0Remedial" class="numberRows">';
	for(var i=0;i<7;i++)
	{
		id = 'row_0_door_'+i+'Remedial';
		htmlContent += '<div id="'+id+'" class="doorsRemedial"></div>';
	}
	htmlContent += '</div>';
	htmlContent += '<div id="option0scaffoldingRemedial" class="optionRowScaffoldingRemedial"></div>'; 
	htmlContent += '</div>'; //option A div end


	htmlContent += '<div id="optionBRemedial" class="optionRowsRemedial">'; //option B div
	htmlContent += '<div id="optionBLabelRemedial" class="optionRowsLabelsRemedial"><div id="optionBLabelTextRemedial" class="optionRowsLabelTextRemedial">'+'OPTION B'+'</div></div>'; 
	htmlContent += '<div id="row1Remedial" class="numberRowsRemedial">';
	for(var i=0;i<7;i++)
	{
		id = 'row_1_door_'+i+'Remedial';
		htmlContent += '<div id="'+id+'" class="doorsRemedial"></div>';
	}
	htmlContent += '</div>';
	htmlContent += '<div id="option1scaffoldingRemedial" class="optionRowScaffoldingRemedial"></div>'; 
	htmlContent += '</div>'; //option B div end
	
	htmlContent += '</div>'; //question div end



	htmlContent += '<div id="answerDivRemedial">';
	htmlContent += '<div id="topNumberRemedial" class="answerButtonsRemedial" onclick="interactiveObj.evaluateRemedialAnswer(0)">'+'OPTION A'+'</div>';
	htmlContent += '<div id="equalNumberRemedial" class="answerButtonsRemedial" onclick="interactiveObj.evaluateRemedialAnswer(2)">'+'BOTH ARE EQUAL'+'</div>';
	htmlContent += '<div id="bottomNumberRemedial" class="answerButtonsRemedial" onclick="interactiveObj.evaluateRemedialAnswer(1)">'+'OPTION B'+'</div>';
	htmlContent += '</div>';

	htmlContent += '<div id="displayRemedialAnswer" style="visibility:hidden">';
	htmlContent += '<div id="displayRemedialAnswerBox">';
	htmlContent += '<div id="displayRemedialAnswerText"></div>';
	htmlContent += '<div id="okButtonRemedialAnswer" onclick="interactiveObj.getOutOfRemedial();">'+'OK'+'</div>';
	htmlContent += '</div>';
	htmlContent += '</div>';

	htmlContent += '</div>';

	$("#container").append(htmlContent);
}	



questionInteractive.prototype.showRemedialQuestion = function(pValueA, pValueB)
{
	$("#remedialDiv").css({"visibility":"visible"});

	// $(".doorsRemedial").css({"background":"#99EAF3", "font-size":"0px", "cursor":"auto"}); // fresh screen
	$(".doorsRemedial").css({"background":"#99EAF3", "cursor":"auto"}); // fresh screen
	$(".doorsRemedial").prop("onclick", null).off("click"); //remove onclick

	$("#row_0_door_1Remedial").css({"background":"black", "font-size":"0px"}); // decimal place
	$("#row_1_door_1Remedial").css({"background":"black", "font-size":"0px"}); // decimal place

	pValueA = pValueA.replace(pValueA[0], 0); //Integer part needs to br zero
	pValueB = pValueB.replace(pValueB[0], 0); //Integer part needs to br zero

	var compareNumbers = [pValueA, pValueB];//greater for all Qtypes except 10A(equal)
	
	RemedialCorrectAnswerRow = correctAnswerRow; // To evaluate the student response
	

	$(".doorsRemedial").html(""); //clear divs from previous question

	//fill rows(divs) with numbers 
	for(var i=0; i<compareNumbers.length; i++)
	{
		for(var j=0; j<compareNumbers[i].length; j++)
		{
			let id = "row_"+i+"_door_"+j+"Remedial";

			var doorHtmlRemedial = '<div id="'+id+'_doorImage" class="doorImageRemedial"></div>';
			
			if(j != 1)
			{			
				// $("#"+id).css({"background":"url(\"../assets/door.png\")", "background-repeat":"no-repeat", "cursor":"pointer"});
				// $("#"+id).click(function(){ interactiveObj.openDoorRemedial(id); }); 
				$("#"+id).css({"background":"white", "background-repeat":"no-repeat", "cursor":"pointer"});
				$("#"+id).click(function(){ interactiveObj.openDoorRemedial(id); }); 
			
				$("#"+id).html(compareNumbers[i][j]); //Place Numbers
				$("#"+id).append(doorHtmlRemedial); //Place Numbers
			}
			// $("#"+id).html(compareNumbers[i][j]); //Place Numbers

		}
	}
}




questionInteractive.prototype.openDoorRemedial = function(pId)
{
	var htmlContent = '';

	$('#'+pId).prop("onclick", null).off("click"); //remove onclick

	// $("#"+pId).animate({backgroundPositionY:"-=100px"}, 200);
	// $("#"+pId).css({"font-size":"60px"}); // Make Numbers Appear

	// setTimeout(function(){ 
	// 	$("#"+pId).css({"background":"white"}); // Make Numbers Appear
	// }, 200);

	setTimeout(function(){ 
		$("#"+pId+"_doorImage").animate({backgroundPositionY:"-=100px"}, doorOpenTime);
		// $("#"+pId).css({"font-size":"60px"}); // Make Numbers Appear

		// setTimeout(function(){ 
		// 	$("#"+pId).css({"background":"white"}); // Make Numbers Appear
		// }, 200);
	}, 10);

	// var val = $('#'+pId).html(); //resolve issue

	// var val = parseInt(document.getElementById(pId).firstChild); //resolve issue
	var val = document.getElementById(pId).innerHTML;
	val = parseInt(val[0]); //resolve issue
	// console.log("pId: ",pId);
 // 	console.log("Value in div: ",val);

	if(parseInt(pId[11]) > 1)
	{
		for(var i=0; i<val ; i++)
		{
			htmlContent += '<div id="door_'+pId[11]+'_ScaffoldingBlock_'+i+'" class="ScaffoldingDoor_'+pId[11]+'"></div>';
		}

		setTimeout(function(){ 
			$("#option"+pId[4]+"scaffoldingRemedial").append(htmlContent);
		}, doorOpenTime-100);
		
	}
}



questionInteractive.prototype.evaluateRemedialAnswer = function(pStudentAnswerRemedial)
{
	var answerText = '';
	var divColor = '';
	var remedialExitTime = 3000;
	//////// Assign IsCorrect value based on answer////////
	if(pStudentAnswerRemedial == correctAnswerRow)
	{
		console.log("Correct Answer!");
		answerText = 'Correct!';
		divColor = '#31f018';
	}
	else
	{
		console.log("Incorrect");	
		answerText = 'Oops! That is incorrect!';
		divColor = 'red';
	}	

	$("#displayRemedialAnswer").css({"visibility":"visible"});
	$("#displayRemedialAnswerBox").css({"background":divColor});
	$("#displayRemedialAnswerText").html(answerText);

	interactiveObj.exitOnOwn = setTimeout(function(){ 
		document.getElementById("okButtonRemedialAnswer").click();
	}, remedialExitTime);

	$(document).on('keypress',function(e) { // On pressing Enter move to next instruction
	    if(e.which == 13) {
	    	// console.log("Enter pressed");
	        // interactiveObj.helpAnimation2();
	        document.getElementById("okButtonRemedialAnswer").click();
	    }
	});	
}


questionInteractive.prototype.getOutOfRemedial = function()
{
	clearTimeout(interactiveObj.exitOnOwn); //Do not call again if clicked on ok button

	$(document).unbind("keypress");

	$("#displayRemedialAnswer").css({"visibility":"hidden"});
	$("#remedialDiv").css({"visibility":"hidden"});
	$(".optionRowScaffoldingRemedial").html('');

	interactiveObj.updateFineClassProbabilities(); // Display next qcode
}


////////////////////////////////////// Create Help //////////////////////////////////////////////////////////////

questionInteractive.prototype.createHelp = function()
{
	var htmlContent = '';

	htmlContent += '<div id="mainDivHelp">';

	htmlContent += '<div id="askQuestionHelp">'; //show question
	htmlContent += '<div id="closeButtonHelp" onclick="interactiveObj.exitHelp();">X</div>';
	htmlContent += '<div id="questionAreaHelp">'+'Which is greater?'+'</div>';
	htmlContent += '<div id="moneyAreaHelp">';
	htmlContent += '<div id="coinImageHelp"></div>';
	htmlContent += '<div id="showBalanceHelp">'+balanceCoins+'</div>';
	htmlContent += '</div>';
	htmlContent += '</div>';// show question

	htmlContent += '<div id="questionDivHelp">'; //question div
	
	htmlContent += '<div id="optionAHelp" class="optionRowsHelp">'; //option A div
	htmlContent += '<div id="optionALabelHelp" class="optionRowsLabelsHelp"><div id="optionALabelTextHelp" class="optionRowsLabelTextHelp">'+'OPTION A'+'</div></div>'; 
	htmlContent += '<div id="row0Help" class="numberRowsHelp">';
	for(var i=0;i<7;i++)
	{
		id = 'row_0_door_'+i+'Help';
		htmlContent += '<div id="'+id+'" class="doorsHelp"></div>';
	}
	htmlContent += '</div>';
	htmlContent += '<div id="optionAscaffoldingHelp" class="optionRowScaffoldingHelp"></div>'; 
	htmlContent += '</div>'; //option A div end


	htmlContent += '<div id="optionBHelp" class="optionRowsHelp">'; //option B div
	htmlContent += '<div id="optionBLabelHelp" class="optionRowsLabelsHelp"><div id="optionBLabelTextHelp" class="optionRowsLabelTextHelp">'+'OPTION B'+'</div></div>'; 
	htmlContent += '<div id="row1Help" class="numberRowsHelp">';
	for(var i=0;i<7;i++)
	{
		id = 'row_1_door_'+i+'Help';
		htmlContent += '<div id="'+id+'" class="doorsHelp"></div>';
	}
	htmlContent += '</div>';
	htmlContent += '<div id="optionBscaffoldingHelp" class="optionRowScaffoldingHelp"></div>'; 
	htmlContent += '</div>'; //option B div end
	
	htmlContent += '</div>'; //question div end



	htmlContent += '<div id="answerDivHelp">';
	htmlContent += '<div id="topNumberHelp" class="answerButtonsHelp">'+'OPTION A'+'</div>';
	htmlContent += '<div id="equalNumberHelp" class="answerButtonsHelp">'+'BOTH ARE EQUAL'+'</div>';
	htmlContent += '<div id="bottomNumberHelp" class="answerButtonsHelp">'+'OPTION B'+'</div>';
	htmlContent += '</div>';

	htmlContent += '<div id="textDivHelp">';
	htmlContent += '<div id="textDivHelpText"></div>';
	htmlContent += '<div id="okButtonTextDivHelp">'+'OK'+'</div>';
	htmlContent += '</div>';

	htmlContent += '</div>';


	$("#container").append(htmlContent);

	$("#helpButton").click(function(){
  		interactiveObj.helpAnimation1();
	});
}


questionInteractive.prototype.helpAnimation1 = function()
{
	let time  = 1000;

	//Reset
	$("#mainDivHelp").css({"visibility":"visible"});


	$("#questionDivHelp, #answerDivHelp, #questionAreaHelp").css({"opacity":"1"});
	$("#moneyAreaHelp, .doorsHelp, .optionRowScaffoldingHelp, .optionRowsLabelTextHelp").css({"opacity":"1"});



	//////////////////////////////////////// Updated /////////////////////////////////
	var helpDivLeftPos = $("#row_0_door_0Help").offset().left + $("#row_0_door_0Help").width() + 20;
	var helpDivTopPos = $("#row_0_door_0Help").offset().top - $("#row_0_door_0Help").height()/2;

	$("#row_0_door_0Help").removeClass("doorsHelp"); // fade all doors except first
	$("#row_0_door_0Help").addClass("doorsHelp1");	// retain css properties

	$("#answerDivHelp, #questionAreaHelp, #moneyAreaHelp, .doorsHelp, .optionRowScaffoldingHelp, .optionRowsLabelTextHelp").animate({opacity:"0.1"}, time);

	setTimeout(function() {
		$("#textDivHelp").css({"visibility":"visible", "left":helpDivLeftPos+"px", "top":helpDivTopPos+"px"});
		// $("#textDivHelpText").html(promptArr["helpCoinInstruction"]);
		$("#textDivHelpText").html('Digits of two decimal numbers are hidden behind doors. Click on a door to see the digit behind it. Find the bigger number by opening the least number of doors possible.');

		$("#okButtonTextDivHelp").click(interactiveObj.helpAnimation2);
		$("#row_0_door_0Help").addClass("doorsHelp");
	
		$(document).on('keypress',function(e) { // On pressing Enter move to next instruction
		    if(e.which == 13) {
		    	// console.log("Enter pressed");
		        // interactiveObj.helpAnimation2();
		        document.getElementById("okButtonTextDivHelp").click();
		    }
		});


	}, time);
	//////////////////////////////////////////////////////////////////

	/////////////////////// Original  /////////////////////////////////////////
	// var helpDivLeftPos = 800 - $("#textDivHelp").width();
	// var helpDivTopPos = $("#moneyAreaHelp").offset().top + $("#moneyAreaHelp").height();

	// $("#questionDivHelp, #answerDivHelp, #questionAreaHelp").animate({opacity:"0.1"}, time);
	// $("#moneyAreaHelp").css({"opacity":"1"});

	// setTimeout(function() {
	// 	$("#textDivHelp").css({"visibility":"visible", "left":helpDivLeftPos+"px", "top":helpDivTopPos+"px"});
	// 	$("#textDivHelpText").html(promptArr["helpCoinInstruction"]);
	// 	$("#okButtonTextDivHelp").click(interactiveObj.helpAnimation2);
	// }, time);
}

questionInteractive.prototype.helpAnimation2 = function()
{
	$(document).unbind("keypress"); 

	////////////////////////// Updated /////////////////////////////////////
	$("#okButtonTextDivHelp").prop("onclick", null).off("click");

	var helpDivLeftPos = 800 - $("#textDivHelp").width();
	var helpDivTopPos = $("#moneyAreaHelp").offset().top + $("#moneyAreaHelp").height();


	$("#textDivHelp").css({"visibility":"visible", "left":helpDivLeftPos+"px", "top":helpDivTopPos+"px"});
	$("#moneyAreaHelp, .doorsHelp, .optionRowScaffoldingHelp, .optionRowsLabelTextHelp").css({"opacity":"0.1"});
	$("#moneyAreaHelp").css({"opacity":"1"});

	$("#textDivHelpText").html('This is your coin balance. You lose 100 coins on answering wrongly. You win 500 coins on answering correctly. You lose 50 coins on opening each door.&lt;b&gt; So, try to open least number of doors possible and identify the greater of the two decimal numbers. &lt;/b&gt;');

	$("#okButtonTextDivHelp").click(interactiveObj.helpAnimation3);

	$(document).on('keypress',function(e) { // On pressing Enter move to next instruction
	    if(e.which == 13) {
	    	// console.log("Enter pressed");
	        // interactiveObj.helpAnimation3();
	        document.getElementById("okButtonTextDivHelp").click();
	    }
	});	
	/////////////////////////////////////////////////////////////////////////////////////////////////////

	/////////////// Original ////////////////////////////
	// $("#okButtonTextDivHelp").prop("onclick", null).off("click");

	// var helpDivLeftPos = $("#row_0_door_0Help").offset().left + $("#row_0_door_0Help").width() + 20;
	// var helpDivTopPos = $("#row_0_door_0Help").offset().top - $("#row_0_door_0Help").height()/2;


	// $("#textDivHelp").css({"visibility":"visible", "left":helpDivLeftPos+"px", "top":helpDivTopPos+"px"});
	// $("#moneyAreaHelp, .doorsHelp, .optionRowScaffoldingHelp, .optionRowsLabelTextHelp").css({"opacity":"0.1"});
	// $("#questionDivHelp, #row_0_door_0Help").css({"opacity":"1"});

	// $("#textDivHelpText").html(promptArr["doorClickInstruction"]);

	// $("#okButtonTextDivHelp").click(interactiveObj.helpAnimation3);

}


questionInteractive.prototype.helpAnimation3 = function()
{
	$(document).unbind("keypress"); 

	$("#okButtonTextDivHelp").prop("onclick", null).off("click");

	var helpDivLeftPos = $("#equalNumberHelp").offset().left - $("#equalNumberHelp").width()/2;
	var helpDivTopPos = $("#mainDivHelp").height() - ($("#answerDivHelp").height() + $("#textDivHelp").height());


	$("#textDivHelp").css({"visibility":"visible", "left":helpDivLeftPos+"px", "top":helpDivTopPos+"px"});
	$("#questionDivHelp").css({"opacity":"0.1"});
	$("#answerDivHelp").css({"opacity":"1"});

	$("#textDivHelpText").html('Compare the two decimals and select the correct answer.');

	$("#okButtonTextDivHelp").click(interactiveObj.exitHelp);

	$(document).on('keypress',function(e) { // On pressing Enter move to next instruction
	    if(e.which == 13) {
	    	// console.log("Enter pressed");
	        // interactiveObj.exitHelp();
	        document.getElementById("okButtonTextDivHelp").click();
	    }
	});		
}


questionInteractive.prototype.exitHelp = function()
{
	$(document).unbind("keypress"); 

	$("#mainDivHelp").css({"visibility":"hidden"});
	$("#textDivHelp").css({"visibility":"hidden"});
	$("#okButtonTextDivHelp").prop("onclick", null).off("click");
}




questionInteractive.prototype.gameOver = function()
{
    $(".doors").prop("onclick", null).off("click"); //remove onclick
    $(".answerButtons").prop("onclick", null).off("click"); //remove onclick
    $("#mainDiv").css({"font-size":"75px", "font-weight":"bold", "color":"white"});
    $("#mainDiv").html('GAME OVER');	
}