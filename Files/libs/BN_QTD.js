
////////////////////////////////////// Random Number Generation ////////////////////////////////
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}



////////////////////////////////////// Qtype Generator /////////////////////////////////////////////////
questionInteractive.prototype.Qtype_number_generator = function(Qtype)
{
	let a0 = getRandomInteger(2,8);	
	let b0 = a0;
	[a1, b1, a2, b2, a3, b3, a4, b4] = [1, 1, 1, 1, 1, 1, 1, 1];

	///// Options for number of place values that have to be used (m,n)
	var lengths = [
	{"1":[1,3], "2":[3,1], "3":[2,3], "4":[3,2], "5":[2,2], "9":[2,3], "10A":[2,1]}, 
	{"1":[2,4], "2":[4,2], "3":[2,3], "4":[4,2], "5":[2,2], "9":[2,3], "10A":[2,1]}
	];

	var chooseLength = getRandomInteger(0,1); //Decide the array index for lengths array 
	
	console.log("qcode ",Qtype," lengths ",lengths[chooseLength][Qtype]);

	// console.log("length ",lengths[chooseLength][Qtype]);

	//	7 Qtypes
	switch(Qtype){
		case "1":
		{
			console.log("Type 1");
			a1 = getRandomInteger(3, 8);
			b1 = getRandomInteger(2,a1-1);
			if (a1 == b1+1)
		        b2 = getRandomInteger(1,4);
		    else 
		        b2 = getRandomInteger(2,8);
		    a2 = getRandomInteger(2,8);
		    b3 = getRandomInteger(2,8);
		    b4 = getRandomInteger(2,8);

			break;
		}

		case "2":
		{
			console.log("Type 2");			
			a1 = getRandomInteger(3, 8);
			b1 = getRandomInteger(2,a1-1);
			if (a1 == b1+1)
		        b2 = getRandomInteger(1,4);
		    else 
		        b2 = getRandomInteger(2,8);
		    a2 = getRandomInteger(2,8);
		    a3 = getRandomInteger(2,8); //change mentioned by Maulik from b to a
		    a4 = getRandomInteger(2,8); //change mentioned by Maulik from b to a

			break;
		}

		case "3":
		{
			console.log("Type 3");
			a1 = getRandomInteger(2, 8); 
			b1 = 0;
			a2 = getRandomInteger(2, 8); //change mentioned by Maulik added a2
			
			if(getRandomInteger(0, 1))
				b2 = a1;
			else
				b2 = a1+1;
			b3 = getRandomInteger(2, 8);
			
			break;
		}

		case "4":
		{
			console.log("Type 4");
			a1 = getRandomInteger(2,8);
	        b1 = a1;
	        a2 = getRandomInteger(2,8);
	        b2 = a2;
	        a3 = getRandomInteger(2,4); //change mentioned by Maulik, 5 to 4
	        a4 = getRandomInteger(2,8);	//change mentioned by Maulik, 5 to 8 

			break;
		}

		case "5":
		{
			console.log("Type 5");
			a1 = getRandomInteger(3,8);
	        b1 = getRandomInteger(2,a1-1);
	        a2 = getRandomInteger(2,8);
	        b2 = getRandomInteger(2,8);

			break;
		}

		case "9":
		{
			console.log("Type 9");
			a1 = getRandomInteger(1,5); 
	        b1 = 0;
	        a2 = getRandomInteger(1,5);
	        while(a2 == a1)
	        {
	        	a2 = getRandomInteger(1,5);
	        }
	        b2 = a1;
	        b3 = a2;

			break;
		}	

		case "10A":
		{
			console.log("Type 10A");
			a1 = getRandomInteger(1,5);
	        b1 = a1;
	        a2 = 0;

			break;
		}	
	}

	let a = a0 + a1/10 + a2/100 +a3/1000 + a4/10000;
	let b = b0 + b1/10 + b2/100 +b3/1000 + b4/10000;

	a = a.toString().substring(0, lengths[chooseLength][Qtype][0] + 2);	//convert to string to use the substring function, +2 beacuse ones digit and the decimal must be present
	b = b.toString().substring(0, lengths[chooseLength][Qtype][1] + 2);	//convert to string to use the substring function, +2 beacuse ones digit and the decimal must be present

	let values = [a,b];
	return values;
}



////////////////////////////////////// Multiply Arrays ///////////////////////////////////////////

questionInteractive.prototype.multiplyArrays = function(arr1, arr2)
{
	var denominator = 0;
	var product = [];	

	for (var i=0; i < arr1.length; i++) {
	  denominator += (arr1[i] * arr2[i]);
	}

	for (var i=0; i < arr1.length; i++) {
	  product[i] = (arr1[i] * arr2[i])/denominator;
	}

	// console.log("product: ",product);
	return product;
}



/////////////////////////////////////// Find Sum Product ///////////////////////////////////////////

questionInteractive.prototype.findSumProduct = function(arr1, arr2)
{
	var sumProduct = 0;

	for (var i=0; i < arr1.length; i++) 
	{
	  sumProduct += (arr1[i] * arr2[i]);
	}

	return sumProduct;
}



//////////////////////////////////////// Is Verdicgt Clear //////////////////////////////////////////
questionInteractive.prototype.Is_verdict_clear = function(p_list)
{	
	var sorted_p_list = [...p_list];

	if(p_list.length > 1)
	{
		// console.log("p_list order refer: ",p_list);
		sorted_p_list.sort(function(a, b){return a - b});
		sorted_p_list.reverse();

		if( Math.abs(sorted_p_list[0] - sorted_p_list[1]) < 0.501)
			return 0;
		else
			return 1;
	}
	else
	{
		return 1;
	}
}



////////////////////////////////////////return index of number closest to half /////////////////
questionInteractive.prototype.return_index_of_number_closest_to_half = function(p_list1)
{
	var abs_x_minus_half = [...p_list1];
	var i;
	for(i in p_list1)
	{
		abs_x_minus_half[i] = Math.abs(p_list1[i]-0.5);
	}

	return abs_x_minus_half.indexOf(Math.min(...abs_x_minus_half)); //syntax includes ... for array comparison
}



///////////////////////////////// Evaluate Student Answer//////////////////////////////////
questionInteractive.prototype.evaluateAnswer = function(pStudentAnswer)
{
	$(".answerButtons").css({"pointer-events":"none"}); //disable answer click

	interactiveObj.endTime = new Date().getTime(); //Calculate end time for answering

	timeTaken = interactiveObj.endTime - interactiveObj.startTime ;	//Calculate totalTimeTaken for answering

	//////////////// Get student answer start/////////////////
	if(pStudentAnswer == choose_row_for_number_a)
	{
		studentResponse = 'number_a';
		userResponse = numbersToBeCompared[pStudentAnswer];
	}
	else if(pStudentAnswer == 2)
	{
		studentResponse = 'equal';
		userResponse = 'equal'; //for extraparams
	}
	else
	{
		studentResponse = 'number_b';
		userResponse = numbersToBeCompared[pStudentAnswer];
	}

	console.log("studentResponse: ",studentResponse);
	//////////////// Get student answer end/////////////////


	//////// Assign IsCorrect value based on answer////////
	if(pStudentAnswer == correctAnswerRow)
	{
		IsCorrect = 1;
		questionResult = IsCorrect;

		levelWiseScore += 1;	// total correct answers

		console.log("Correct Answer!");
	
		interactiveObj.showCoinAnimation(IsCorrect); //coin animation

		setTimeout(function(){ 
			interactiveObj.updateFineClassProbabilities();  // run to get normal version
		}, 1500);
	}
	else
	{
		IsCorrect = 0;
		questionResult = IsCorrect;

		console.log("Incorrect",IsCorrect);	
	
		interactiveObj.showCoinAnimation(IsCorrect); //coin animation

		setTimeout(function(){ 
			$("#mainDiv").css({"visibility":"hidden"});//added new
			interactiveObj.showRemedialQuestion(numbersToBeCompared[0], numbersToBeCompared[1]);
		}, 1500);

	}

}




/////////////////// update Fine class after answering////////////
questionInteractive.prototype.updateFineClassProbabilities = function()
{
	///The section below is BN-MPC (BN-Misconception Probability Calculator). It will calculate the updated probability of misconceptions based on student answer
	if(currentQtype != '4' && currentQtype != '9' && currentQtype!= '10A')
	{
		// console.log("QTypes_1to5_prbblty: ",QTypes_1to5_prbblty[currentQtype][IsCorrect]);		

		updated_FineClass_prbblty = interactiveObj.multiplyArrays(FineClass_prbblty, QTypes_1to5_prbblty[currentQtype][IsCorrect]);
	}
	else if(currentQtype == '4' && IsCorrect == 1)
	{
		// console.log("QTypes_1to5_prbblty: ",QTypes_1to5_prbblty[currentQtype][IsCorrect][studentResponse]);

		updated_FineClass_prbblty = interactiveObj.multiplyArrays(FineClass_prbblty, QTypes_1to5_prbblty[currentQtype][IsCorrect]);
	}
	else if(currentQtype == '4' && IsCorrect == 0)
	{
		// console.log("QTypes_1to5_prbblty: ",QTypes_1to5_prbblty[currentQtype][IsCorrect][studentResponse]);

		updated_FineClass_prbblty = interactiveObj.multiplyArrays(FineClass_prbblty, QTypes_1to5_prbblty[currentQtype][IsCorrect][studentResponse]);
	}
	else if(currentQtype == '9')
	{
		// console.log("QTypes_9_prbblty: ",QTypes_9_prbblty[IsCorrect][studentResponse]);

		updated_Zero_FineClass_1_prbblty = interactiveObj.multiplyArrays(Zero_FineClass_1_prbblty, QTypes_9_prbblty[IsCorrect][studentResponse]);
	}
	else if(currentQtype == '10A')
	{
		// console.log("QTypes_10A_prbblty: ",QTypes_10A_prbblty[IsCorrect][studentResponse]);

		updated_Zero_FineClass_2_prbblty = interactiveObj.multiplyArrays(Zero_FineClass_2_prbblty, QTypes_10A_prbblty[IsCorrect][studentResponse]);
	}

	////////////////Update HN_nod //////////////////////
	if (['1','2','3','5','9','10A'].includes(currentQtype))
        HN_nod = ['F','F','F','F','R','R','M','M','M','M'][number_of_doors];
    else if (currentQtype == '4')
        HN_nod = ['F','F','F','F','F','F','R','R','M'][number_of_doors];

    // console.log('HN_nod = ', HN_nod ,'and HN_gos = ', HN_gos, ' and number_of_doors = ',number_of_doors);


	//////////This section updates the BN based on the input of HN_nod and HN_gos		
	// console.log("HN_nod ",HN_nod);
	updated_FineClass_prbblty = interactiveObj.multiplyArrays(updated_FineClass_prbblty, HN_nod_to_FineClass_CPT[currentQtype][HN_nod]);

	updated_HN_eff_prbblty = interactiveObj.multiplyArrays(HN_eff_prbblty, HN_nod_to_HN_eff_CPT[HN_nod]);

	updated_HN_eff_prbblty = interactiveObj.multiplyArrays(updated_HN_eff_prbblty, HN_gos_to_HN_eff_CPT[HN_gos]);



	interactiveObj.generateNextQuestionForQueue();
}




//////////////////////////////////////// Question Array //////////////////////////////////////////////////

questionInteractive.prototype.generateNextQuestionForQueue = function()
{
	actualQcounter = [...Q_counter];

	var question_1_to_5 = ['1','2','3','4','5'];
	var i;
	var comma = ',';

	for(i in question_1_to_5)
	{
		Q_1to5_getting_correct[i] = interactiveObj.findSumProduct(updated_FineClass_prbblty, QTypes_1to5_prbblty[question_1_to_5[i]][1]);
	}

	

	console.log("Difference < 0.5 for fineclass: ",!interactiveObj.Is_verdict_clear(updated_FineClass_prbblty));	
	if (!interactiveObj.Is_verdict_clear(updated_FineClass_prbblty))
    {
    	console.log("Q_1to5_getting_correct test ",Q_1to5_getting_correct);

    	var Qtype_closest_to_half = ["1","2","3","4","5"][interactiveObj.return_index_of_number_closest_to_half(Q_1to5_getting_correct)];
    	
    	console.log("Qtype_closest_to_half ",Qtype_closest_to_half);
    	console.log("nextQ_in_diagnosis includes Qtype_closest_to_half",nextQ_in_diagnosis.includes(Qtype_closest_to_half));

    	if(!nextQ_in_diagnosis.includes(Qtype_closest_to_half))
    	{
    		nextQ_in_diagnosis.push(Qtype_closest_to_half); 
    	}
    }    

	console.log("Difference < 0.5 for fineclass_1: ",!interactiveObj.Is_verdict_clear(updated_Zero_FineClass_1_prbblty));
    if (!interactiveObj.Is_verdict_clear(updated_Zero_FineClass_1_prbblty))
    {
    	if(!nextQ_in_diagnosis.includes("9"))
    	{
    		nextQ_in_diagnosis.push("9");
    	}
    }


    console.log("Difference < 0.5 for fineclass_2: ",!interactiveObj.Is_verdict_clear(updated_Zero_FineClass_2_prbblty));
    if (!interactiveObj.Is_verdict_clear(updated_Zero_FineClass_2_prbblty))
    {
    	if(!nextQ_in_diagnosis.includes("10A"))
    	{
    		nextQ_in_diagnosis.push("10A");
    	}
    }    


    //////////////////////////////////////   Diagnostic Mode   /////////////////////////////////
    if (nextQ_in_diagnosis.length != 0)	 
    {
    	console.log("nextQ_in_diagnosis ",nextQ_in_diagnosis);
    	nextQ_in_diagnosis.reverse();// change order

        currentQtype = nextQ_in_diagnosis.pop(); ///this is next Q        
        console.log("nextQ ",currentQtype);

        console.log("nextQ_in_diagnosis ",nextQ_in_diagnosis); // value after pop and reverse
    }
    ///////////////////////////////////////    Normal Mode    /////////////////////////////////////
    else
    {    	
    	console.log("NORMAL MODE");
    	All_Q_getting_correct = [...Q_1to5_getting_correct];
    	// All_Q_getting_correct = Q_1to5_getting_correct;

    	All_Q_getting_correct.push(interactiveObj.findSumProduct(updated_Zero_FineClass_1_prbblty, QTypes_9_prbblty[1]["number_a"])); 
    	All_Q_getting_correct.push(interactiveObj.findSumProduct(updated_Zero_FineClass_2_prbblty, QTypes_10A_prbblty[1]["equal"])); 

    	Is_any_Q_left = 0;

    	for(var i=0; i<7; i++)
    	{
    		if(Q_counter[i] < 2)
    		{
    			Is_any_Q_left += 1;

    			if (Is_any_Q_left == 1)
    			{
    				Qtype_position = i;
    			}
    			else
    			{
    				if (last_Q_was_EorD == 'E')
    				{    
                    	if (All_Q_getting_correct[Qtype_position]>All_Q_getting_correct[i])
                            Qtype_position = i;
                    }       
                    else
                    {    
                    	if (All_Q_getting_correct[Qtype_position]<All_Q_getting_correct[i])
                            Qtype_position = i;
                    }
    			}
    		}    		
    	}

    	if (Is_any_Q_left != 0)
        {
        	console.log("The next Q will be in Normal mode");
            last_Q_was_EorD = (last_Q_was_EorD == 'E')?'D' : 'E';
            currentQtype = ["1","2","3","4","5","9","10A"][Qtype_position]; //this is next Q
        }        
        else
        {    
        	console.log("No further Q is possible in both diagnosis and remediation mode. Hence, end the game");
            End_Game = 1;
        }

    }

    console.log("Q_counter:",Q_counter);
    
    ////////////////// Update values of fine class variables ///////////////////////////
    FineClass_prbblty = updated_FineClass_prbblty;
    Zero_FineClass_1_prbblty = updated_Zero_FineClass_1_prbblty;
    Zero_FineClass_2_prbblty = updated_Zero_FineClass_2_prbblty;
    HN_eff_prbblty = updated_HN_eff_prbblty;
    Q_counter[["1","2","3","4","5","9","10A"].indexOf(currentQtype)] +=1;


    ////////////////////// Add Levels ////////////////////////////////
    var qcodesAsked = [...Q_counter];
    totalQuestionsAsked = ( qcodesAsked.reduce((a, b) => a + b, 0) ) - 1;
    console.log("totalQuestionsAsked: ",totalQuestionsAsked);

    if(totalQuestionsAsked == 2)
    {
    	currentLevel = 2;
    	interactiveObj.showLevel();
    }
    else if(totalQuestionsAsked == 4)
    {
    	currentLevel = 3;
    	interactiveObj.showLevel();
    }
    else if(totalQuestionsAsked == 6)
    {
    	currentLevel = 4;
    	interactiveObj.showLevel();
    }

    ///////////////////////////////////////// Data to be passed //////////////////////////////////////////

    Qtype_counter = '{"type1":'+actualQcounter[0]+',"type2":'+actualQcounter[1]+',"type3":'+actualQcounter[2]+',"type4":'+actualQcounter[3]+',"type5":'+actualQcounter[4]+',"qtype9A":'+actualQcounter[5]+',"qtype10":'+actualQcounter[6]+'}';

    misconception_data = '{'+
    '"AE":'+FineClass_prbblty[0]+','+
    '"AMO":'+FineClass_prbblty[1]+','+
    '"AU":'+FineClass_prbblty[2]+','+ 
    '"L1-LWH":'+FineClass_prbblty[3]+','+
    '"L2-LZE":'+FineClass_prbblty[4]+','+
    '"LU":'+FineClass_prbblty[5]+','+
    '"S1-SDF":'+FineClass_prbblty[6]+','+
    '"S3-SRN":'+FineClass_prbblty[7]+','+
    '"SU":'+FineClass_prbblty[8]+','+
    '"U-MIS":'+FineClass_prbblty[9]+','+
    '"UN":'+FineClass_prbblty[10]+','+
    '"Ignore_0":'+Zero_FineClass_2_prbblty[0]+','+
    '"DPI_0":'+Zero_FineClass_1_prbblty[1]+','+
    '"AE_0_Qt9":'+Zero_FineClass_1_prbblty[2]+','+
    '"UN_0_Qt9":'+Zero_FineClass_1_prbblty[3]+','+
    '"L_0":'+Zero_FineClass_2_prbblty[0]+','+
    '"S_0":'+Zero_FineClass_2_prbblty[1]+','+
    '"AE_0_Qt10A":'+Zero_FineClass_2_prbblty[2]+','+
    '"UN_0_Qt10A":'+Zero_FineClass_2_prbblty[3]+','+
    '"NEG":NULL,'+ 	//Same as received from DCT-pretest game. Null otherwise. 
    '"Disjoint":NULL'+	//Same as received from DCT-pretest game. Null otherwise.
    '}';

    if(attemptedQtype == "9A")
    {
    	most_probable_misconception = Zero_FineClass_1[updated_Zero_FineClass_1_prbblty.indexOf(Math.max(...updated_Zero_FineClass_1_prbblty))];
    	most_probable_misconception_probability = Math.max(...updated_Zero_FineClass_1_prbblty).toFixed(2);
    }
    else if(attemptedQtype == "10")
    {
    	most_probable_misconception = Zero_FineClass_2[updated_Zero_FineClass_2_prbblty.indexOf(Math.max(...updated_Zero_FineClass_2_prbblty))];
    	most_probable_misconception_probability = Math.max(...updated_Zero_FineClass_2_prbblty).toFixed(2);
    }
    else
    {
    	most_probable_misconception = FineClass[updated_FineClass_prbblty.indexOf(Math.max(...updated_FineClass_prbblty))];
    	most_probable_misconception_probability = Math.max(...updated_FineClass_prbblty).toFixed(2);
    }

    number1 = numbersToBeCompared[0];
    number2 = numbersToBeCompared[1];

    if(totalQuestionsAsked == 1)
    {
		comma = '';   
    }
    else
    {
    	comma = ',';
    }

    attempted_data += comma+'{\n'+
    '"qno":'+totalQuestionsAsked+',\n'+
    '"qtype":'+attemptedQtype+',\n'+
    '"result":'+questionResult+',\n'+
    '"user response":'+userResponse+',\n'+	//update done
    '"time taken":'+timeTaken+',\n'+	//update done
    '"number1":'+number1+',\n'+	//update done
    '"number2":'+number2+',\n'+	//update done
    '"help on":'+(!questionResult)+',\n'+
    '"no of doors":'+number_of_doors+',\n'+
    '"order of doors":'+orderOfDoors+',\n'+ 	//update done
    '"HN_nod":'+HN_nod+',\n'+
    '"HN_gos":'+HN_gos+',\n'+	//update done
    '"HN_effectiveness":'+HN_eff_prbblty+',\n'+
    '"Qtype_counter":'+Qtype_counter+',\n'+
    '"misconceptions":'+misconception_data+',\n'+
    '"most probable misconception fine class":'+most_probable_misconception+',\n'+
    '"most probable misconception probability":'+most_probable_misconception_probability+'}\n';

    extraParameters = '{"attempted":['+attempted_data+']}';

    console.log("extraParameters= "+extraParameters);
    ////////////////////// Display fine class probabilities in console ///////////////////////// 
    {
    	console.log("FineClass_prbblty: ",FineClass_prbblty,'\n');
        console.log("Zero_FineClass_1_prbblty: ",Zero_FineClass_1_prbblty,'\n');
        console.log("Zero_FineClass_2_prbblty: ",Zero_FineClass_2_prbblty,'\n');
        console.log("HN_eff_prbblty: ",HN_eff_prbblty,'\n');
    }

    if(End_Game != 1)  // Game NOT over
    {
    	interactiveObj.showNextQuestion(currentQtype);
    }
    else  // Game over
    {
    	completed = 1;
    	console.log("GAME OVER");
    	console.log("Most probable state in fineClass is ", FineClass[updated_FineClass_prbblty.indexOf(Math.max(...updated_FineClass_prbblty))], " with probability of ",Math.max(...updated_FineClass_prbblty).toFixed(2));
        console.log("Most probable state in Zero_FineClass_1 is ", Zero_FineClass_1[updated_Zero_FineClass_1_prbblty.indexOf(Math.max(...updated_Zero_FineClass_1_prbblty))], " with probability of ",Math.max(...updated_Zero_FineClass_1_prbblty).toFixed(2));
        console.log("Most probable state in Zero_FineClass_2 is ", Zero_FineClass_2[updated_Zero_FineClass_2_prbblty.indexOf(Math.max(...updated_Zero_FineClass_2_prbblty))], " with probability of ",Math.max(...updated_Zero_FineClass_2_prbblty).toFixed(2));
    
        interactiveObj.gameOver();
    }


}