					function printFunction() {
					    window.print();

					}




					var date = new Date();
					var currentyear = date.getFullYear();
					var currentYear = prompt("Whats your starting year", currentyear);
					var two = 2;
					var three = 3;
					var four = 4;
					var five = 5;




					var freshmanYear = currentYear - 1 + two;
					var sophomoreYear = currentYear - 1 + three;
					var juniorYear = currentYear - 1 + four;
					var seniorYear = currentYear - 1 + five;


					function myFunction() {
					    init();



					    if (freshmanYear != null) {


					        document.getElementById("fall1").innerHTML =
					            "Fall " + currentYear + "-" + freshmanYear;
					        document.getElementById("spring1").innerHTML =
					            "Spring " + currentYear + "-" + freshmanYear;
					        document.getElementById("summer1").innerHTML =
					            "Summer " + currentYear + "-" + freshmanYear;


					        document.getElementById("fall2").innerHTML =
					            "Fall " + freshmanYear + "-" + sophomoreYear;
					        document.getElementById("spring2").innerHTML =
					            "Spring " + freshmanYear + "-" + sophomoreYear;
					        document.getElementById("summer2").innerHTML =
					            "Summer " + freshmanYear + "-" + sophomoreYear;

					        document.getElementById("fall3").innerHTML =
					            "Fall " + sophomoreYear + "-" + juniorYear;
					        document.getElementById("spring3").innerHTML =
					            "Spring " + sophomoreYear + "-" + juniorYear;
					        document.getElementById("summer3").innerHTML =
					            "Summer " + sophomoreYear + "-" + juniorYear;

					        document.getElementById("fall4").innerHTML =
					            "Fall " + juniorYear + "-" + seniorYear;
					        document.getElementById("spring4").innerHTML =
					            "Spring " + juniorYear + "-" + seniorYear;
					        document.getElementById("summer4").innerHTML =
					            "Summer " + juniorYear + "-" + seniorYear;



					    }



					}




					// Javascript for the course year specified in the database ( for comparison with the year specified by the user)

					var CS100year = document.getElementById("CS100year").innerHTML;
					var CS102year = document.getElementById("CS102year").innerHTML;
					var CS110year = document.getElementById("CS110year").innerHTML;
					var CS120year = document.getElementById("CS120year").innerHTML;
					var CS200year = document.getElementById("CS200year").innerHTML;
					var CS210year = document.getElementById("CS210year").innerHTML;
					var CS212year = document.getElementById("CS212year").innerHTML;
					var CS220year = document.getElementById("CS220year").innerHTML;
					var CS222year = document.getElementById("CS222year").innerHTML;
					var CS230year = document.getElementById("CS230year").innerHTML;
					var CS232year = document.getElementById("CS232year").innerHTML;
					var CS279year = document.getElementById("CS279year").innerHTML;
					var CS300year = document.getElementById("CS300year").innerHTML;
					var CS309year = document.getElementById("CS309year").innerHTML;
					var CS310year = document.getElementById("CS310year").innerHTML;
					var CS320year = document.getElementById("CS320year").innerHTML;
					var CS330year = document.getElementById("CS330year").innerHTML;
					var CS400year = document.getElementById("CS400year").innerHTML;
					var CS451year = document.getElementById("CS451year").innerHTML;
					var CS452year = document.getElementById("CS452year").innerHTML;

					// Drag and drop code and the rules/ the Rule base


					function allowDrop(ev) {
					    ev.preventDefault();

					    ev.target.style.background = "232323";

					}


					function drag(ev) {
					    ev.dataTransfer.setData("Text", event.target.id);

					    sem1closefunction();
					    sem2closefunction();
					    sem3closefunction();
					    sem4closefunction();
					    sem5closefunction();
					    sem6closefunction();
					    sem7closefunction();
					    sem8closefunction();
					    sem9closefunction();
					    sem10closefunction();
					    sem11closefunction();
					    sem12closefunction();


					}



					function Taken(id) {

					    //removed for privacy (contact me for implementation) 

					}



					//Getting required courses by id
					function requirement(id) {
					    //removed for privacy (contact me for implementation)

					}


					function drop(ev) {




					    sem1closefunction();
					    sem2closefunction();
					    sem3closefunction();
					    sem4closefunction();
					    sem5closefunction();
					    sem6closefunction();
					    sem7closefunction();
					    sem8closefunction();
					    sem9closefunction();
					    sem10closefunction();
					    sem11closefunction();
					    sem12closefunction();




					    var course = ev.dataTransfer.getData("Text");
					    var box = event.target.id;




					    // SEMESTER BLOCKS
					    // blocking all spring CS courses from the fall

					    if (box == "sem1" || box == "sem4" || box == "sem7" || box == "sem10") {
					        if ((course == "CS200") || (course == "CS230") || (course == "CS232") || (course == "CS310") || (course == "CS330") || (course == "CS452") || (course == "Math108") || (course == "AMRE")) {
					            return alert("This is not offered in the fall");
					        }
					    }

					    // blocking all spring Math courses from the fall

					    if (box == "sem1" || box == "sem4" || box == "sem7" || box == "sem10") {
					        if ((course == "Math102") || (course == "Math104") || (course == "Math108") || (course == "Math212") || (course == "Math329") || (course == "Math332")) {
					            return alert("This course is not offered in the fall");
					        }
					    }

					    // blocking all fall CS courses from the spring

					    if (box == "sem2" || box == "sem5" || box == "sem8" || box == "sem11") {
					        if ((course == "CS102") || (course == "CS210") || (course == "CS212") || (course == "CS220") || (course == "CS222") || (course == "CS279") || (course == "CS300") || (course == "CS320") || (course == "CS451") || (course == "Math107") || (course == "Math211") || (course == "AMRE")) {
					            return alert("This course is not offered in the spring");
					        }
					    }

					    // blocking all fall Math courses from the spring

					    if (box == "sem2" || box == "sem5" || box == "sem8" || box == "sem11") {
					        if ((course == "Math107") || (course == "Math211") || (course == "Math229") || (course == "Math330") || (course == "Math334")) {
					            return alert("This course is not offered in the spring");
					        }
					    }


					    // blocking from the summer
					    // blocking all fall Math courses from the spring

					    if (box == "sem3" || box == "sem6" || box == "sem9" || box == "sem12") {
					        if ((course == "SMAAC") || (course == "WCF") || (course == "Jenny Investment Club")) {
					            return alert("This course is not offered in the summer");
					        }
					    }

					    /////---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					    ///////////////CS corequisites 
					    /////---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

					    // CS 100 /102 and 110
					    if (box == "sem1") {
					        if (course == "CS110") {
					            if ((requirement("CS100") == "sem1") || (requirement("CS102") == "sem1"))
					                return alert("Cant take this course together with CS100 or 102");
					        }
					    }

					    if (box == "sem2") {
					        if (course == "CS110") {
					            if ((requirement("CS100") == "sem2") || (requirement("CS102") == "sem2"))
					                return alert("Cant take this course together with CS100 or 102");
					        }
					    }

					    if (box == "sem3") {
					        if (course == "CS110") {
					            if ((requirement("CS100") == "sem3") || (requirement("CS102") == "sem3"))
					                return alert("Cant take this course together with CS100 or 102");
					        }
					    }

					    if (box == "sem4") {
					        if (course == "CS110") {
					            if ((requirement("CS100") == "sem4") || (requirement("CS102") == "sem4"))
					                return alert("Cant take this course together with CS100 or 102");
					        }
					    }


					    if (box == "sem5") {
					        if (course == "CS110") {
					            if ((requirement("CS100") == "sem5") || (requirement("CS102") == "sem5"))
					                return alert("Cant take this course together with CS100 or 102");
					        }
					    }

					    if (box == "sem6") {
					        if (course == "CS110") {
					            if ((requirement("CS100") == "sem6") || (requirement("CS102") == "sem6"))
					                return alert("Cant take this course together with CS100 or 102");
					        }
					    }

					    if (box == "sem7") {
					        if (course == "CS110") {
					            if ((requirement("CS100") == "sem7") || (requirement("CS102") == "sem7"))
					                return alert("Cant take this course together with CS100 or 102");
					        }
					    }

					    if (box == "sem8") {
					        if (course == "CS110") {
					            if ((requirement("CS100") == "sem8") || (requirement("CS102") == "sem8"))
					                return alert("Cant take this course together with CS100 or 102");
					        }
					    }

					    if (box == "sem9") {
					        if (course == "CS110") {
					            if ((requirement("CS100") == "sem9") || (requirement("CS102") == "sem9"))
					                return alert("Cant take this course together with CS100 or 102");
					        }
					    }

					    if (box == "sem10") {
					        if (course == "CS110") {
					            if ((requirement("CS100") == "sem10") || (requirement("CS102") == "sem10"))
					                return alert("Cant take this course together with CS100 or 102");
					        }
					    }

					    if (box == "sem11") {
					        if (course == "CS110") {
					            if ((requirement("CS100") == "sem11") || (requirement("CS102") == "sem11"))
					                return alert("Cant take this course together with CS100 or 102");
					        }
					    }



					    // 110, and 120/279 

					    if (box == "sem1") {
					        if ((course == "CS120") || (course == "CS279")) {
					            if ((requirement("CS110") == "sem1"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem2") {
					        if ((course == "CS120") || (course == "CS279")) {
					            if ((requirement("CS110") == "sem2"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem3") {
					        if ((course == "CS120") || (course == "CS279")) {
					            if ((requirement("CS110") == "sem3"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem4") {
					        if ((course == "CS120") || (course == "CS279")) {
					            if ((requirement("CS110") == "sem4"))
					                return alert("Cant take this course together with CS110");
					        }
					    }


					    if (box == "sem5") {
					        if ((course == "CS120") || (course == "CS279")) {
					            if ((requirement("CS110") == "sem5"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem6") {
					        if ((course == "CS120") || (course == "CS279")) {
					            if ((requirement("CS110") == "sem6"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem7") {
					        if ((course == "CS120") || (course == "CS279")) {
					            if ((requirement("CS110") == "sem7"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem8") {
					        if ((course == "CS120") || (course == "CS279")) {
					            if ((requirement("CS110") == "sem8"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem9") {
					        if ((course == "CS120") || (course == "CS279")) {
					            if ((requirement("CS110") == "sem9"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem10") {
					        if ((course == "CS120") || (course == "CS279")) {
					            if ((requirement("CS110") == "sem10"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem11") {
					        if ((course == "CS120") || (course == "CS279")) {
					            if ((requirement("CS110") == "sem11"))
					                return alert("Cant take this course together with CS110");
					        }
					    }




					    // 120 adn upper level courses
					    if (box == "sem3") {
					        if (
					            (course == "CS200") || (course == "CS210") || (course == "CS212") || (course == "CS220") || (course == "CS222") || (course == "CS230") || (course == "CS232") || (course == "CS300") || (course == "CS310") || (course == "CS320") || (course == "CS330") || (course == "CS451") || (course == "CS452")
					        ) {
					            if ((requirement("CS120") == "sem3"))
					                return alert("Cant take this course together with CS120");
					        }
					    }


					    if (box == "sem4") {
					        if (
					            (course == "CS200") || (course == "CS210") || (course == "CS212") || (course == "CS220") || (course == "CS222") || (course == "CS230") || (course == "CS232") || (course == "CS300") || (course == "CS310") || (course == "CS320") || (course == "CS330") || (course == "CS451") || (course == "CS452")
					        ) {
					            if ((requirement("CS120") == "sem4"))
					                return alert("Cant take this course together with CS120");
					        }
					    }

					    if (box == "sem5") {
					        if (
					            (course == "CS200") || (course == "CS210") || (course == "CS212") || (course == "CS220") || (course == "CS222") || (course == "CS230") || (course == "CS232") || (course == "CS300") || (course == "CS310") || (course == "CS320") || (course == "CS330") || (course == "CS451") || (course == "CS452")
					        ) {
					            if ((requirement("CS120") == "sem5"))
					                return alert("Cant take this course together with CS120");
					        }
					    }

					    if (box == "sem6") {
					        if (
					            (course == "CS200") || (course == "CS210") || (course == "CS212") || (course == "CS220") || (course == "CS222") || (course == "CS230") || (course == "CS232") || (course == "CS300") || (course == "CS310") || (course == "CS320") || (course == "CS330") || (course == "CS451") || (course == "CS452")
					        ) {
					            if ((requirement("CS120") == "sem6"))
					                return alert("Cant take this course together with CS120");
					        }
					    }

					    if (box == "sem7") {
					        if (
					            (course == "CS200") || (course == "CS210") || (course == "CS212") || (course == "CS220") || (course == "CS222") || (course == "CS230") || (course == "CS232") || (course == "CS300") || (course == "CS310") || (course == "CS320") || (course == "CS330") || (course == "CS451") || (course == "CS452")
					        ) {
					            if ((requirement("CS120") == "sem7"))
					                return alert("Cant take this course together with CS120");
					        }
					    }


					    if (box == "sem8") {
					        if (
					            (course == "CS200") || (course == "CS210") || (course == "CS212") || (course == "CS220") || (course == "CS222") || (course == "CS230") || (course == "CS232") || (course == "CS300") || (course == "CS310") || (course == "CS320") || (course == "CS330") || (course == "CS451") || (course == "CS452")
					        ) {
					            if ((requirement("CS120") == "sem8"))
					                return alert("Cant take this course together with CS120");
					        }
					    }


					    if (box == "sem9") {
					        if (
					            (course == "CS200") || (course == "CS210") || (course == "CS212") || (course == "CS220") || (course == "CS222") || (course == "CS230") || (course == "CS232") || (course == "CS300") || (course == "CS310") || (course == "CS320") || (course == "CS330") || (course == "CS451") || (course == "CS452")
					        ) {
					            if ((requirement("CS120") == "sem9"))
					                return alert("Cant take this course together with CS120");
					        }
					    }

					    if (box == "sem10") {
					        if (
					            (course == "CS200") || (course == "CS210") || (course == "CS212") || (course == "CS220") || (course == "CS222") || (course == "CS230") || (course == "CS232") || (course == "CS300") || (course == "CS310") || (course == "CS320") || (course == "CS330") || (course == "CS451") || (course == "CS452")
					        ) {
					            if ((requirement("CS120") == "sem10"))
					                return alert("Cant take this course together with CS120");
					        }
					    }


					    if (box == "sem11") {
					        if (
					            (course == "CS200") || (course == "CS210") || (course == "CS212") || (course == "CS220") || (course == "CS222") || (course == "CS230") || (course == "CS232") || (course == "CS300") || (course == "CS310") || (course == "CS320") || (course == "CS330") || (course == "CS451") || (course == "CS452")
					        ) {
					            if ((requirement("CS120") == "sem11"))
					                return alert("Cant take this course together with CS120");
					        }
					    }

					    // 200 and 451 

					    if (box == "sem6") {
					        if (course == "CS200") {
					            if ((requirement("CS451") == "sem6"))
					                return alert("Cant take this course together with CS451");
					        }
					    }

					    if (box == "sem7") {
					        if (course == "CS200") {
					            if ((requirement("CS451") == "sem7"))
					                return alert("Cant take this course together with CS451");
					        }
					    }

					    if (box == "sem8") {
					        if (course == "CS200") {
					            if ((requirement("CS451") == "sem8"))
					                return alert("Cant take this course together with CS451");
					        }
					    }

					    if (box == "sem9") {
					        if (course == "CS200") {
					            if ((requirement("CS451") == "sem9"))
					                return alert("Cant take this course together with CS451");
					        }
					    }

					    if (box == "sem10") {
					        if (course == "CS200") {
					            if ((requirement("CS451") == "sem10"))
					                return alert("Cant take this course together with CS451");
					        }
					    }

					    if (box == "sem11") {
					        if (course == "CS200") {
					            if ((requirement("CS451") == "sem11"))
					                return alert("Cant take this course together with CS451");
					        }
					    }


					    //----------------------------------------------------------------------
					    // CS 100 /102 and 110
					    if (box == "sem2") {
					        if ((course == "CS100") || (course == "CS102")) {
					            if ((requirement("CS110") == "sem2"))
					                return alert("Cant take this course together with CS110");
					        }
					    }


					    if (box == "sem3") {
					        if ((course == "CS100") || (course == "CS102")) {
					            if ((requirement("CS110") == "sem3"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem4") {
					        if ((course == "CS100") || (course == "CS102")) {
					            if ((requirement("CS110") == "sem4"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem5") {
					        if ((course == "CS100") || (course == "CS102")) {
					            if ((requirement("CS110") == "sem5"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem6") {
					        if ((course == "CS100") || (course == "CS102")) {
					            if ((requirement("CS110") == "sem6"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem7") {
					        if ((course == "CS100") || (course == "CS102")) {
					            if ((requirement("CS110") == "sem7"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem8") {
					        if ((course == "CS100") || (course == "CS102")) {
					            if ((requirement("CS110") == "sem8"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem9") {
					        if ((course == "CS100") || (course == "CS102")) {
					            if ((requirement("CS110") == "sem9"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem10") {
					        if ((course == "CS100") || (course == "CS102")) {
					            if ((requirement("CS110") == "sem10"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    if (box == "sem11") {
					        if ((course == "CS100") || (course == "CS102")) {
					            if ((requirement("CS110") == "sem11"))
					                return alert("Cant take this course together with CS110");
					        }
					    }

					    //----------------------------------------------------------------------
					    // CS 110 and 120
					    if (box == "sem3") {
					        if ((course == "CS110")) {
					            if ((requirement("CS120") == "sem3") || (requirement("CS279") == "sem3"))
					                return alert("Cant take this course together with CS120 or CS279");
					        }
					    }

					    if (box == "sem4") {
					        if ((course == "CS110")) {
					            if ((requirement("CS120") == "sem4") || (requirement("CS279") == "sem4"))
					                return alert("Cant take this course together with CS120 or CS279");
					        }
					    }

					    if (box == "sem5") {
					        if ((course == "CS110")) {
					            if ((requirement("CS120") == "sem5") || (requirement("CS279") == "sem5"))
					                return alert("Cant take this course together with CS120 or CS279");
					        }
					    }

					    if (box == "sem6") {
					        if ((course == "CS110")) {
					            if ((requirement("CS120") == "sem6") || (requirement("CS279") == "sem6"))
					                return alert("Cant take this course together with CS120 or CS279");
					        }
					    }

					    if (box == "sem7") {
					        if ((course == "CS110")) {
					            if ((requirement("CS120") == "sem7") || (requirement("CS279") == "sem7"))
					                return alert("Cant take this course together with CS120 or CS279");
					        }
					    }

					    if (box == "sem8") {
					        if ((course == "CS110")) {
					            if ((requirement("CS120") == "sem8") || (requirement("CS279") == "sem8"))
					                return alert("Cant take this course together with CS120 or CS279");
					        }
					    }

					    if (box == "sem9") {
					        if ((course == "CS110")) {
					            if ((requirement("CS120") == "sem9") || (requirement("CS279") == "sem9"))
					                return alert("Cant take this course together with CS120 or CS279");
					        }
					    }

					    if (box == "sem10") {
					        if ((course == "CS110")) {
					            if ((requirement("CS120") == "sem10") || (requirement("CS279") == "sem10"))
					                return alert("Cant take this course together with CS120 or CS279");
					        }
					    }

					    if (box == "sem11") {
					        if ((course == "CS110")) {
					            if ((requirement("CS120") == "sem11") || (requirement("CS279") == "sem11"))
					                return alert("Cant take this course together with CS120 or CS279");
					        }
					    }


					    //----------------------------------------------------------------------
					    // CS 120 and UPPER LEVEL COURSES

					    if (box == "sem4") {
					        if (course == "CS120") {
					            if ((requirement("CS200") == "sem4") || (requirement("CS210") == "sem4") || (requirement("CS212") == "sem4") || (requirement("CS220") == "sem4") || (requirement("CS222") == "sem4") || (requirement("CS230") == "sem4") || (requirement("CS232") == "sem4") || (requirement("CS300") == "sem4") || (requirement("CS310") == "sem4") || (requirement("CS320") == "sem4") || (requirement("CS330") == "sem4") || (requirement("CS451") == "sem4") || (requirement("CS452") == "sem4"))
					                return alert("Upper level CS courses cannot be together with CS120");
					        }
					    }

					    if (box == "sem5") {
					        if (course == "CS120") {
					            if ((requirement("CS200") == "sem5") || (requirement("CS210") == "sem5") || (requirement("CS212") == "sem5") || (requirement("CS220") == "sem5") || (requirement("CS222") == "sem5") || (requirement("CS230") == "sem5") || (requirement("CS232") == "sem5") || (requirement("CS300") == "sem5") || (requirement("CS310") == "sem5") || (requirement("CS320") == "sem5") || (requirement("CS330") == "sem5") || (requirement("CS451") == "sem5") || (requirement("CS452") == "sem5"))
					                return alert("Upper level CS courses cannot be together with CS120");
					        }
					    }

					    if (box == "sem6") {
					        if (course == "CS120") {
					            if ((requirement("CS200") == "sem6") || (requirement("CS210") == "sem6") || (requirement("CS212") == "sem6") || (requirement("CS220") == "sem6") || (requirement("CS222") == "sem6") || (requirement("CS230") == "sem6") || (requirement("CS232") == "sem6") || (requirement("CS300") == "sem6") || (requirement("CS310") == "sem6") || (requirement("CS320") == "sem6") || (requirement("CS330") == "sem6") || (requirement("CS451") == "sem6") || (requirement("CS452") == "sem6"))
					                return alert("Upper level CS courses cannot be together with CS120");
					        }
					    }


					    if (box == "sem7") {
					        if (course == "CS120") {
					            if ((requirement("CS200") == "sem7") || (requirement("CS210") == "sem7") || (requirement("CS212") == "sem7") || (requirement("CS220") == "sem7") || (requirement("CS222") == "sem7") || (requirement("CS230") == "sem7") || (requirement("CS232") == "sem7") || (requirement("CS300") == "sem7") || (requirement("CS310") == "sem7") || (requirement("CS320") == "sem7") || (requirement("CS330") == "sem7") || (requirement("CS451") == "sem7") || (requirement("CS452") == "sem7"))
					                return alert("Upper level CS courses cannot be together with CS120");
					        }
					    }

					    if (box == "sem8") {
					        if (course == "CS120") {
					            if ((requirement("CS200") == "sem8") || (requirement("CS210") == "sem8") || (requirement("CS212") == "sem8") || (requirement("CS220") == "sem8") || (requirement("CS222") == "sem8") || (requirement("CS230") == "sem8") || (requirement("CS232") == "sem8") || (requirement("CS300") == "sem8") || (requirement("CS310") == "sem8") || (requirement("CS320") == "sem8") || (requirement("CS330") == "sem8") || (requirement("CS451") == "sem8") || (requirement("CS452") == "sem8"))
					                return alert("Upper level CS courses cannot be together with CS120");
					        }
					    }

					    if (box == "sem9") {
					        if (course == "CS120") {
					            if ((requirement("CS200") == "sem9") || (requirement("CS210") == "sem9") || (requirement("CS212") == "sem9") || (requirement("CS220") == "sem9") || (requirement("CS222") == "sem9") || (requirement("CS230") == "sem9") || (requirement("CS232") == "sem9") || (requirement("CS300") == "sem9") || (requirement("CS310") == "sem9") || (requirement("CS320") == "sem9") || (requirement("CS330") == "sem9") || (requirement("CS451") == "sem9") || (requirement("CS452") == "sem9"))
					                return alert("Upper level CS courses cannot be together with CS120");
					        }
					    }

					    if (box == "sem10") {
					        if (course == "CS120") {
					            if ((requirement("CS200") == "sem10") || (requirement("CS210") == "sem10") || (requirement("CS212") == "sem10") || (requirement("CS220") == "sem10") || (requirement("CS222") == "sem10") || (requirement("CS230") == "sem10") || (requirement("CS232") == "sem10") || (requirement("CS300") == "sem10") || (requirement("CS310") == "sem10") || (requirement("CS320") == "sem10") || (requirement("CS330") == "sem10") || (requirement("CS451") == "sem10") || (requirement("CS452") == "sem10"))
					                return alert("Upper level CS courses cannot be together with CS120");
					        }
					    }

					    if (box == "sem11") {
					        if (course == "CS120") {
					            if ((requirement("CS200") == "sem11") || (requirement("CS210") == "sem11") || (requirement("CS212") == "sem11") || (requirement("CS220") == "sem11") || (requirement("CS222") == "sem11") || (requirement("CS230") == "sem11") || (requirement("CS232") == "sem11") || (requirement("CS300") == "sem11") || (requirement("CS310") == "sem11") || (requirement("CS320") == "sem11") || (requirement("CS330") == "sem11") || (requirement("CS451") == "sem11") || (requirement("CS452") == "sem11"))
					                return alert("Upper level CS courses cannot be together with CS120");
					        }
					    }


					    // 451 and 200
					    if (box == "sem6") {
					        if (course == "CS451") {
					            if (requirement("CS200") == "sem6")
					                return alert("Cant take this course together with CS200");
					        }
					    }

					    if (box == "sem9") {
					        if (course == "CS451") {
					            if (requirement("CS200") == "sem9")
					                return alert("Cant take this course together with CS200");
					        }
					    }


					    // 452 and 451
					    if (box == "sem6") {
					        if (course == "CS452") {
					            if (requirement("CS451") == "sem6")
					                return alert("Cant take this course together with CS451");
					        }
					    }

					    if (box == "sem9") {
					        if (course == "CS452") {
					            if (requirement("CS451") == "sem9")
					                return alert("Cant take this course together with CS451");
					        }
					    }
					    /////---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					    ///////////////BLOCKING UPPER LEVEL CS CLASSES FROM BEING REPOSITIONED SOMEWHERE BEFORE LOWERLEVEL CLASSES
					    /////---------------------------------------------------------------------------------------------------------------------------------------------------------------------------



					    /*---------------------------------------------------------------------------- BLOCKING 110 FROM B4 100 OR 102---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS110")) {

					            if (
					                ((requirement("CS100") == "sem2") || (requirement("CS100") == "sem3") || (requirement("CS100") == "sem4") || (requirement("CS100") == "sem5") || (requirement("CS100") == "sem6") || (requirement("CS100") == "sem7") || (requirement("CS100") == "sem8") || (requirement("CS100") == "sem9") || (requirement("CS100") == "sem10") || (requirement("CS100") == "sem11") || (requirement("CS100") == "sem12"))

					                || ((requirement("CS102") == "sem2") || (requirement("CS102") == "sem3") || (requirement("CS102") == "sem4") || (requirement("CS102") == "sem5") || (requirement("CS102") == "sem6") || (requirement("CS102") == "sem7") || (requirement("CS102") == "sem8") || (requirement("CS102") == "sem9") || (requirement("CS102") == "sem10") || (requirement("CS102") == "sem11") || (requirement("CS102") == "sem12"))
					            )

					                return alert("cant take 110 b4 100 or 102");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS110")) {

					            if (
					                ((requirement("CS100") == "sem3") || (requirement("CS100") == "sem4") || (requirement("CS100") == "sem5") || (requirement("CS100") == "sem6") || (requirement("CS100") == "sem7") || (requirement("CS100") == "sem8") || (requirement("CS100") == "sem9") || (requirement("CS100") == "sem10") || (requirement("CS100") == "sem11") || (requirement("CS100") == "sem12"))

					                || ((requirement("CS102") == "sem3") || (requirement("CS102") == "sem4") || (requirement("CS102") == "sem5") || (requirement("CS102") == "sem6") || (requirement("CS102") == "sem7") || (requirement("CS102") == "sem8") || (requirement("CS102") == "sem9") || (requirement("CS102") == "sem10") || (requirement("CS102") == "sem11") || (requirement("CS102") == "sem12"))
					            )

					                return alert("cant take 110 b4 100 or 102");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS110")) {

					            if (
					                ((requirement("CS100") == "sem4") || (requirement("CS100") == "sem5") || (requirement("CS100") == "sem6") || (requirement("CS100") == "sem7") || (requirement("CS100") == "sem8") || (requirement("CS100") == "sem9") || (requirement("CS100") == "sem10") || (requirement("CS100") == "sem11") || (requirement("CS100") == "sem12"))

					                || ((requirement("CS102") == "sem4") || (requirement("CS102") == "sem5") || (requirement("CS102") == "sem6") || (requirement("CS102") == "sem7") || (requirement("CS102") == "sem8") || (requirement("CS102") == "sem9") || (requirement("CS102") == "sem10") || (requirement("CS102") == "sem11") || (requirement("CS102") == "sem12"))
					            )

					                return alert("cant take 110 b4 100 or 102");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS110")) {

					            if (
					                ((requirement("CS100") == "sem5") || (requirement("CS100") == "sem6") || (requirement("CS100") == "sem7") || (requirement("CS100") == "sem8") || (requirement("CS100") == "sem9") || (requirement("CS100") == "sem10") || (requirement("CS100") == "sem11") || (requirement("CS100") == "sem12"))

					                || ((requirement("CS102") == "sem5") || (requirement("CS102") == "sem6") || (requirement("CS102") == "sem7") || (requirement("CS102") == "sem8") || (requirement("CS102") == "sem9") || (requirement("CS102") == "sem10") || (requirement("CS102") == "sem11") || (requirement("CS102") == "sem12"))
					            )

					                return alert("cant take 110 b4 100 or 102");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS110")) {

					            if (
					                ((requirement("CS100") == "sem6") || (requirement("CS100") == "sem7") || (requirement("CS100") == "sem8") || (requirement("CS100") == "sem9") || (requirement("CS100") == "sem10") || (requirement("CS100") == "sem11") || (requirement("CS100") == "sem12"))

					                || ((requirement("CS102") == "sem6") || (requirement("CS102") == "sem7") || (requirement("CS102") == "sem8") || (requirement("CS102") == "sem9") || (requirement("CS102") == "sem10") || (requirement("CS102") == "sem11") || (requirement("CS102") == "sem12"))
					            )

					                return alert("cant take 110 b4 100 or 102");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS110")) {

					            if (
					                ((requirement("CS100") == "sem7") || (requirement("CS100") == "sem8") || (requirement("CS100") == "sem9") || (requirement("CS100") == "sem10") || (requirement("CS100") == "sem11") || (requirement("CS100") == "sem12"))

					                || ((requirement("CS102") == "sem7") || (requirement("CS102") == "sem8") || (requirement("CS102") == "sem9") || (requirement("CS102") == "sem10") || (requirement("CS102") == "sem11") || (requirement("CS102") == "sem12"))
					            )

					                return alert("cant take 110 b4 100 or 102");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS110")) {

					            if (
					                ((requirement("CS100") == "sem8") || (requirement("CS100") == "sem9") || (requirement("CS100") == "sem10") || (requirement("CS100") == "sem11") || (requirement("CS100") == "sem12"))

					                || ((requirement("CS102") == "sem8") || (requirement("CS102") == "sem9") || (requirement("CS102") == "sem10") || (requirement("CS102") == "sem11") || (requirement("CS102") == "sem12"))
					            )

					                return alert("cant take 110 b4 100 or 102");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS110")) {

					            if (
					                ((requirement("CS100") == "sem9") || (requirement("CS100") == "sem10") || (requirement("CS100") == "sem11") || (requirement("CS100") == "sem12"))

					                || ((requirement("CS102") == "sem9") || (requirement("CS102") == "sem10") || (requirement("CS102") == "sem11") || (requirement("CS102") == "sem12"))
					            )

					                return alert("cant take 110 b4 100 or 102");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS110")) {

					            if (
					                ((requirement("CS100") == "sem10") || (requirement("CS100") == "sem11") || (requirement("CS100") == "sem12"))

					                || ((requirement("CS102") == "sem10") || (requirement("CS102") == "sem11") || (requirement("CS102") == "sem12"))
					            )

					                return alert("cant take 110 b4 100 or 102");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS110")) {

					            if (
					                ((requirement("CS100") == "sem11") || (requirement("CS100") == "sem12"))

					                || ((requirement("CS102") == "sem11") || (requirement("CS102") == "sem12"))
					            )

					                return alert("cant take 110 b4 100 or 102");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS110")) {

					            if (
					                ((requirement("CS100") == "sem12"))

					                || ((requirement("CS102") == "sem12"))
					            )

					                return alert("cant take 110 b4 100 or 102");
					        }
					    }


					    /*---------------------------------------------------------------------------- BLOCKING 120 FROM B4 110---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS279")) {

					            if (
					                ((requirement("CS110") == "sem2") || (requirement("CS110") == "sem3") || (requirement("CS110") == "sem4") || (requirement("CS110") == "sem5") || (requirement("CS110") == "sem6") || (requirement("CS110") == "sem7") || (requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))

					            )

					                return alert("cant take 279 b4 110");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS279")) {

					            if (
					                ((requirement("CS110") == "sem3") || (requirement("CS110") == "sem4") || (requirement("CS110") == "sem5") || (requirement("CS110") == "sem6") || (requirement("CS110") == "sem7") || (requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))

					            )

					                return alert("cant take 279 b4 110");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS279")) {

					            if (
					                ((requirement("CS110") == "sem4") || (requirement("CS110") == "sem5") || (requirement("CS110") == "sem6") || (requirement("CS110") == "sem7") || (requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))

					            )

					                return alert("cant take 279 b4 110");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS279")) {

					            if (
					                ((requirement("CS110") == "sem5") || (requirement("CS110") == "sem6") || (requirement("CS110") == "sem7") || (requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))

					            )

					                return alert("cant take 279 b4 110");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS279")) {

					            if (
					                ((requirement("CS110") == "sem6") || (requirement("CS110") == "sem7") || (requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))


					            )

					                return alert("cant take 279 b4 110");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS279")) {

					            if (
					                ((requirement("CS110") == "sem7") || (requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))


					            )

					                return alert("cant take 279 b4 110");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS279")) {

					            if (
					                ((requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))

					            )

					                return alert("cant take 279 b4 110");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS279")) {

					            if (
					                ((requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))


					            )

					                return alert("cant take 279 b4 110");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS279")) {

					            if (
					                ((requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))


					            )

					                return alert("cant take 279 b4 110");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS279")) {

					            if (
					                ((requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))


					            )

					                return alert("cant take 279 b4 110");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS279")) {

					            if (
					                ((requirement("CS110") == "sem12"))


					            )

					                return alert("cant take 279 b4 110");
					        }
					    }



					    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
					    /*---------------------------------------------------------------------------- BLOCKING 120 FROM B4 110---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS120")) {

					            if (
					                ((requirement("CS110") == "sem2") || (requirement("CS110") == "sem3") || (requirement("CS110") == "sem4") || (requirement("CS110") == "sem5") || (requirement("CS110") == "sem6") || (requirement("CS110") == "sem7") || (requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))

					            )

					                return alert("cant take 120 b4 110");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS120")) {

					            if (
					                ((requirement("CS110") == "sem3") || (requirement("CS110") == "sem4") || (requirement("CS110") == "sem5") || (requirement("CS110") == "sem6") || (requirement("CS110") == "sem7") || (requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))

					            )

					                return alert("cant take 120 b4 110");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS120")) {

					            if (
					                ((requirement("CS110") == "sem4") || (requirement("CS110") == "sem5") || (requirement("CS110") == "sem6") || (requirement("CS110") == "sem7") || (requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))

					            )

					                return alert("cant take 120 b4 110");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS120")) {

					            if (
					                ((requirement("CS110") == "sem5") || (requirement("CS110") == "sem6") || (requirement("CS110") == "sem7") || (requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))

					            )

					                return alert("cant take 120 b4 110");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS120")) {

					            if (
					                ((requirement("CS110") == "sem6") || (requirement("CS110") == "sem7") || (requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))


					            )

					                return alert("cant take 120 b4 110");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS120")) {

					            if (
					                ((requirement("CS110") == "sem7") || (requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))


					            )

					                return alert("cant take 120 b4 110");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS120")) {

					            if (
					                ((requirement("CS110") == "sem8") || (requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))

					            )

					                return alert("cant take 120 b4 110");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS120")) {

					            if (
					                ((requirement("CS110") == "sem9") || (requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))


					            )

					                return alert("cant take 120 b4 110");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS120")) {

					            if (
					                ((requirement("CS110") == "sem10") || (requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))


					            )

					                return alert("cant take 120 b4 110");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS120")) {

					            if (
					                ((requirement("CS110") == "sem11") || (requirement("CS110") == "sem12"))


					            )

					                return alert("cant take 120 b4 110");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS120")) {

					            if (
					                ((requirement("CS110") == "sem12"))


					            )

					                return alert("cant take 120 b4 110");
					        }
					    }



					    /*---------------------------------------------------------------------------- BLOCKING 200 FROM B4 CS120,MATH 211, 215 OR 223---------------------------------------------------------------------*/

					    //SEM2
					    if (box == "sem2") {
					        if ((course == "CS200")) {
					            if (
					                (
					                    (requirement("CS120") == "sem3" || requirement("CS120") == "sem4" || requirement("CS120") == "sem5" || requirement("CS120") == "sem6" || requirement("CS120") == "sem7" || requirement("CS120") == "sem8" || requirement("CS120") == "sem9" || requirement("CS120") == "sem10" || requirement("CS120") == "sem11" || requirement("CS120") == "sem12")

					                    || ((requirement("Math211") == "sem3") || (requirement("Math215") == "sem3") || (requirement("Math223") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math215") == "sem4") || (requirement("Math223") == "sem4") || (requirement("Math211") == "sem5") || (requirement("Math215") == "sem5") || (requirement("Math223") == "sem5") || (requirement("Math211") == "sem6") || (requirement("Math215") == "sem6") || (requirement("Math223") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math215") == "sem7") || (requirement("Math223") == "sem7") || (requirement("Math211") == "sem8") || (requirement("Math215") == "sem8") || (requirement("Math223") == "sem8") || (requirement("Math211") == "sem9") || (requirement("Math215") == "sem9") || (requirement("Math223") == "sem9") || (requirement("Math211") == "sem10") || (requirement("Math215") == "sem10") || (requirement("Math223") == "sem10") || (requirement("Math211") == "sem11") || (requirement("Math215") == "sem11") || (requirement("Math223") == "sem11") || (requirement("Math211") == "sem12") || (requirement("Math215") == "sem12") || (requirement("Math223") == "sem12"))

					                )

					            )
					                return alert("cant take CS200 b4 120, and Math211 or 215 or 223");
					        }
					    }


					    //SEM3
					    if (box == "sem3") {
					        if ((course == "CS200")) {
					            if (
					                (
					                    (requirement("CS120") == "sem4" || requirement("CS120") == "sem5" || requirement("CS120") == "sem6" || requirement("CS120") == "sem7" || requirement("CS120") == "sem8" || requirement("CS120") == "sem9" || requirement("CS120") == "sem10" || requirement("CS120") == "sem11" || requirement("CS120") == "sem12")

					                    || ((requirement("Math211") == "sem4") || (requirement("Math215") == "sem4") || (requirement("Math223") == "sem4") || (requirement("Math211") == "sem5") || (requirement("Math215") == "sem5") || (requirement("Math223") == "sem5") || (requirement("Math211") == "sem6") || (requirement("Math215") == "sem6") || (requirement("Math223") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math215") == "sem7") || (requirement("Math223") == "sem7") || (requirement("Math211") == "sem8") || (requirement("Math215") == "sem8") || (requirement("Math223") == "sem8") || (requirement("Math211") == "sem9") || (requirement("Math215") == "sem9") || (requirement("Math223") == "sem9") || (requirement("Math211") == "sem10") || (requirement("Math215") == "sem10") || (requirement("Math223") == "sem10") || (requirement("Math211") == "sem11") || (requirement("Math215") == "sem11") || (requirement("Math223") == "sem11") || (requirement("Math211") == "sem12") || (requirement("Math215") == "sem12") || (requirement("Math223") == "sem12"))

					                )

					            )
					                return alert("cant take CS200 b4 120, and Math211 or 215 or 223");
					        }
					    }


					    //SEM4
					    if (box == "sem4") {
					        if ((course == "CS200")) {
					            if (
					                (
					                    (requirement("CS120") == "sem5" || requirement("CS120") == "sem6" || requirement("CS120") == "sem7" || requirement("CS120") == "sem8" || requirement("CS120") == "sem9" || requirement("CS120") == "sem10" || requirement("CS120") == "sem11" || requirement("CS120") == "sem12")

					                    || ((requirement("Math211") == "sem5") || (requirement("Math215") == "sem5") || (requirement("Math223") == "sem5") || (requirement("Math211") == "sem6") || (requirement("Math215") == "sem6") || (requirement("Math223") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math215") == "sem7") || (requirement("Math223") == "sem7") || (requirement("Math211") == "sem8") || (requirement("Math215") == "sem8") || (requirement("Math223") == "sem8") || (requirement("Math211") == "sem9") || (requirement("Math215") == "sem9") || (requirement("Math223") == "sem9") || (requirement("Math211") == "sem10") || (requirement("Math215") == "sem10") || (requirement("Math223") == "sem10") || (requirement("Math211") == "sem11") || (requirement("Math215") == "sem11") || (requirement("Math223") == "sem11") || (requirement("Math211") == "sem12") || (requirement("Math215") == "sem12") || (requirement("Math223") == "sem12"))

					                )

					            )
					                return alert("cant take CS200 b4 120, and Math211 or 215 or 223");
					        }
					    }




					    /*SEM5*/
					    if (box == "sem5") {
					        if ((course == "CS200")) {
					            if (
					                (
					                    (requirement("CS120") == "sem6" || requirement("CS120") == "sem7" || requirement("CS120") == "sem8" || requirement("CS120") == "sem9" || requirement("CS120") == "sem10" || requirement("CS120") == "sem11" || requirement("CS120") == "sem12")

					                    || ((requirement("Math211") == "sem6") || (requirement("Math215") == "sem6") || (requirement("Math223") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math215") == "sem7") || (requirement("Math223") == "sem7") || (requirement("Math211") == "sem8") || (requirement("Math215") == "sem8") || (requirement("Math223") == "sem8") || (requirement("Math211") == "sem9") || (requirement("Math215") == "sem9") || (requirement("Math223") == "sem9") || (requirement("Math211") == "sem10") || (requirement("Math215") == "sem10") || (requirement("Math223") == "sem10") || (requirement("Math211") == "sem11") || (requirement("Math215") == "sem11") || (requirement("Math223") == "sem11") || (requirement("Math211") == "sem12") || (requirement("Math215") == "sem12") || (requirement("Math223") == "sem12"))

					                )

					            )
					                return alert("cant take CS200 b4 120, and Math211 or 215 or 223");
					        }
					    }

					    /*/SEM6 */
					    if (box == "sem6") {
					        if ((course == "CS200")) {
					            if (
					                (
					                    (requirement("CS120") == "sem7" || requirement("CS120") == "sem6" || requirement("CS120") == "sem7" || requirement("CS120") == "sem8" || requirement("CS120") == "sem9" || requirement("CS120") == "sem10" || requirement("CS120") == "sem11" || requirement("CS120") == "sem12")

					                    || ((requirement("Math211") == "sem7") || (requirement("Math215") == "sem7") || (requirement("Math223") == "sem7") || (requirement("Math211") == "sem8") || (requirement("Math215") == "sem8") || (requirement("Math223") == "sem8") || (requirement("Math211") == "sem9") || (requirement("Math215") == "sem9") || (requirement("Math223") == "sem9") || (requirement("Math211") == "sem10") || (requirement("Math215") == "sem10") || (requirement("Math223") == "sem10") || (requirement("Math211") == "sem11") || (requirement("Math215") == "sem11") || (requirement("Math223") == "sem11") || (requirement("Math211") == "sem12") || (requirement("Math215") == "sem12") || (requirement("Math223") == "sem12"))

					                )

					            )
					                return alert("cant take CS200 b4 120, and Math211 or 215 or 223");
					        }
					    }


					    //SEM7
					    if (box == "sem7") {
					        if ((course == "CS200")) {
					            if (
					                (
					                    (requirement("CS120") == "sem8" || requirement("CS120") == "sem9" || requirement("CS120") == "sem10" || requirement("CS120") == "sem11" || requirement("CS120") == "sem12")

					                    || ((requirement("Math211") == "sem8") || (requirement("Math215") == "sem8") || (requirement("Math223") == "sem8") || (requirement("Math211") == "sem9") || (requirement("Math215") == "sem9") || (requirement("Math223") == "sem9") || (requirement("Math211") == "sem10") || (requirement("Math215") == "sem10") || (requirement("Math223") == "sem10") || (requirement("Math211") == "sem11") || (requirement("Math215") == "sem11") || (requirement("Math223") == "sem11") || (requirement("Math211") == "sem12") || (requirement("Math215") == "sem12") || (requirement("Math223") == "sem12"))

					                )

					            )
					                return alert("cant take CS200 b4 120, and Math211 or 215 or 223");
					        }
					    }

					    //SEM8
					    if (box == "sem8") {
					        if ((course == "CS200")) {
					            if (
					                (
					                    (requirement("CS120") == "sem9" || requirement("CS120") == "sem10" || requirement("CS120") == "sem11" || requirement("CS120") == "sem12")

					                    || ((requirement("Math211") == "sem9") || (requirement("Math215") == "sem9") || (requirement("Math223") == "sem9") || (requirement("Math211") == "sem10") || (requirement("Math215") == "sem10") || (requirement("Math223") == "sem10") || (requirement("Math211") == "sem11") || (requirement("Math215") == "sem11") || (requirement("Math223") == "sem11") || (requirement("Math211") == "sem12") || (requirement("Math215") == "sem12") || (requirement("Math223") == "sem12"))

					                )

					            )
					                return alert("cant take CS200 b4 120, and Math211 or 215 or 223");
					        }
					    }


					    //SEM9
					    if (box == "sem9") {
					        if ((course == "CS200")) {
					            if (
					                (
					                    (requirement("CS120") == "sem10" || requirement("CS120") == "sem11" || requirement("CS120") == "sem12")

					                    || ((requirement("Math211") == "sem10") || (requirement("Math215") == "sem10") || (requirement("Math223") == "sem10") || (requirement("Math211") == "sem11") || (requirement("Math215") == "sem11") || (requirement("Math223") == "sem11") || (requirement("Math211") == "sem12") || (requirement("Math215") == "sem12") || (requirement("Math223") == "sem12"))

					                )

					            )
					                return alert("cant take CS200 b4 120, and Math211 or 215 or 223");
					        }
					    }



					    //SEM10
					    if (box == "sem10") {
					        if ((course == "CS200")) {
					            if (
					                (
					                    (requirement("CS120") == "sem11" || requirement("CS120") == "sem12")

					                    || ((requirement("Math211") == "sem11") || (requirement("Math215") == "sem11") || (requirement("Math223") == "sem11") || (requirement("Math211") == "sem12") || (requirement("Math215") == "sem12") || (requirement("Math223") == "sem12"))

					                )

					            )
					                return alert("cant take CS200 b4 120, and Math211 or 215 or 223");
					        }
					    }



					    //SEM11
					    if (box == "sem11") {
					        if ((course == "CS200")) {
					            if (
					                (
					                    (requirement("CS120") == "sem12")

					                    || ((requirement("Math211") == "sem12") || (requirement("Math215") == "sem12") || (requirement("Math223") == "sem12"))

					                )

					            )
					                return alert("cant take CS200 b4 120, and Math211 or 215 or 223");
					        }
					    }


					    /*---------------------------------------------------------------------------- BLOCKING 210 FROM B4 120---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS210")) {

					            if (
					                ((requirement("CS120") == "sem2") || (requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 210 b4 120");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS210")) {

					            if (
					                ((requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 210 b4 120");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS210")) {

					            if (
					                ((requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 210 b4 120");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS210")) {

					            if (
					                ((requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 210 b4 120");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS210")) {

					            if (
					                ((requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 210 b4 120");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS210")) {

					            if (
					                ((requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 210 b4 120");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS210")) {

					            if (
					                ((requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 210 b4 120");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS210")) {

					            if (
					                ((requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 210 b4 120");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS210")) {

					            if (
					                ((requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 210 b4 120");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS210")) {

					            if (
					                ((requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 210 b4 120");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS210")) {

					            if (
					                ((requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 210 b4 120");
					        }
					    }




					    /*---------------------------------------------------------------------------- BLOCKING 212 FROM B4 120---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS212")) {

					            if (
					                ((requirement("CS120") == "sem2") || (requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 212 b4 120");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS212")) {

					            if (
					                ((requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 212 b4 120");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS212")) {

					            if (
					                ((requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 212 b4 120");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS212")) {

					            if (
					                ((requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 212 b4 120");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS212")) {

					            if (
					                ((requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 212 b4 120");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS212")) {

					            if (
					                ((requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 212 b4 120");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS212")) {

					            if (
					                ((requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 212 b4 120");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS212")) {

					            if (
					                ((requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 212 b4 120");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS212")) {

					            if (
					                ((requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 212 b4 120");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS212")) {

					            if (
					                ((requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 212 b4 120");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS212")) {

					            if (
					                ((requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 212 b4 120");
					        }
					    }




					    /*---------------------------------------------------------------------------- BLOCKING 222 FROM B4 120---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS222")) {

					            if (
					                ((requirement("CS120") == "sem2") || (requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 222 b4 120");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS222")) {

					            if (
					                ((requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 222 b4 120");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS222")) {

					            if (
					                ((requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 222 b4 120");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS222")) {

					            if (
					                ((requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 222 b4 120");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS222")) {

					            if (
					                ((requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 222 b4 120");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS222")) {

					            if (
					                ((requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 222 b4 120");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS222")) {

					            if (
					                ((requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 222 b4 120");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS222")) {

					            if (
					                ((requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 222 b4 120");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS222")) {

					            if (
					                ((requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 222 b4 120");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS222")) {

					            if (
					                ((requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 222 b4 120");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS222")) {

					            if (
					                ((requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 222 b4 120");
					        }
					    }




					    /*---------------------------------------------------------------------------- BLOCKING 230 FROM B4 120---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS230")) {

					            if (
					                ((requirement("CS120") == "sem2") || (requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 230 b4 120");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS230")) {

					            if (
					                ((requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 230 b4 120");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS230")) {

					            if (
					                ((requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 230 b4 120");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS230")) {

					            if (
					                ((requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 230 b4 120");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS230")) {

					            if (
					                ((requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 230 b4 120");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS230")) {

					            if (
					                ((requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 230 b4 120");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS230")) {

					            if (
					                ((requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 230 b4 120");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS230")) {

					            if (
					                ((requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 230 b4 120");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS230")) {

					            if (
					                ((requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 230 b4 120");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS230")) {

					            if (
					                ((requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 230 b4 120");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS230")) {

					            if (
					                ((requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 230 b4 120");
					        }
					    }




					    /*---------------------------------------------------------------------------- BLOCKING 232 FROM B4 120---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS232")) {

					            if (
					                ((requirement("CS120") == "sem2") || (requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 232 b4 120");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS232")) {

					            if (
					                ((requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 232 b4 120");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS232")) {

					            if (
					                ((requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 232 b4 120");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS232")) {

					            if (
					                ((requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 232 b4 120");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS232")) {

					            if (
					                ((requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 232 b4 120");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS232")) {

					            if (
					                ((requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 232 b4 120");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS232")) {

					            if (
					                ((requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 232 b4 120");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS232")) {

					            if (
					                ((requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 232 b4 120");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS232")) {

					            if (
					                ((requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 232 b4 120");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS232")) {

					            if (
					                ((requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 232 b4 120");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS232")) {

					            if (
					                ((requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 232 b4 120");
					        }
					    }


					    /*---------------------------------------------------------------------------- BLOCKING 300 FROM B4 120---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS300")) {

					            if (
					                ((requirement("CS120") == "sem2") || (requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 300 b4 120");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS300")) {

					            if (
					                ((requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 300 b4 120");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS300")) {

					            if (
					                ((requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 300 b4 120");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS300")) {

					            if (
					                ((requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 300 b4 120");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS300")) {

					            if (
					                ((requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 300 b4 120");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS300")) {

					            if (
					                ((requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 300 b4 120");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS300")) {

					            if (
					                ((requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 300 b4 120");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS300")) {

					            if (
					                ((requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 300 b4 120");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS300")) {

					            if (
					                ((requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 300 b4 120");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS300")) {

					            if (
					                ((requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 300 b4 120");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS300")) {

					            if (
					                ((requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 300 b4 120");
					        }
					    }


					    /*---------------------------------------------------------------------------- BLOCKING 310 FROM B4 120---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS310")) {

					            if (
					                ((requirement("CS120") == "sem2") || (requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 310 b4 120");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS310")) {

					            if (
					                ((requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 310 b4 120");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS310")) {

					            if (
					                ((requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 310 b4 120");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS310")) {

					            if (
					                ((requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 310 b4 120");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS310")) {

					            if (
					                ((requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 310 b4 120");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS310")) {

					            if (
					                ((requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 310 b4 120");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS310")) {

					            if (
					                ((requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 310 b4 120");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS310")) {

					            if (
					                ((requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 310 b4 120");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS310")) {

					            if (
					                ((requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 310 b4 120");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS310")) {

					            if (
					                ((requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 310 b4 120");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS310")) {

					            if (
					                ((requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 310 b4 120");
					        }
					    }




					    /*---------------------------------------------------------------------------- BLOCKING 320 FROM B4 120---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS320")) {

					            if (
					                ((requirement("CS120") == "sem2") || (requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 320 b4 120");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS320")) {

					            if (
					                ((requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 320 b4 120");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS320")) {

					            if (
					                ((requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 320 b4 120");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS320")) {

					            if (
					                ((requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 320 b4 120");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS320")) {

					            if (
					                ((requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 320 b4 120");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS320")) {

					            if (
					                ((requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 320 b4 120");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS320")) {

					            if (
					                ((requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 320 b4 120");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS320")) {

					            if (
					                ((requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 320 b4 120");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS320")) {

					            if (
					                ((requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 320 b4 120");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS320")) {

					            if (
					                ((requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 320 b4 120");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS320")) {

					            if (
					                ((requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 320 b4 120");
					        }
					    }




					    /*---------------------------------------------------------------------------- BLOCKING 330 FROM B4 120---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS330")) {

					            if (
					                ((requirement("CS120") == "sem2") || (requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 330 b4 120");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS330")) {

					            if (
					                ((requirement("CS120") == "sem3") || (requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 330 b4 120");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS330")) {

					            if (
					                ((requirement("CS120") == "sem4") || (requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 330 b4 120");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS330")) {

					            if (
					                ((requirement("CS120") == "sem5") || (requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 330 b4 120");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS330")) {

					            if (
					                ((requirement("CS120") == "sem6") || (requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 330 b4 120");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS330")) {

					            if (
					                ((requirement("CS120") == "sem7") || (requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 330 b4 120");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS330")) {

					            if (
					                ((requirement("CS120") == "sem8") || (requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))

					            )

					                return alert("cant take 330 b4 120");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS330")) {

					            if (
					                ((requirement("CS120") == "sem9") || (requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 330 b4 120");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS330")) {

					            if (
					                ((requirement("CS120") == "sem10") || (requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 330 b4 120");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS330")) {

					            if (
					                ((requirement("CS120") == "sem11") || (requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 330 b4 120");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS330")) {

					            if (
					                ((requirement("CS120") == "sem12"))


					            )

					                return alert("cant take 330 b4 120");
					        }
					    }




					    /*---------------------------------------------------------------------------- BLOCKING 300 FROM B4 200 OR 230 OR 232 and math 211---------------------------------------------------------------------*/




					    /*---------------------------------------------------------------------------- BLOCKING 451 FROM B4 200---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS451")) {

					            if (
					                ((requirement("CS200") == "sem2") || (requirement("CS200") == "sem3") || (requirement("CS200") == "sem4") || (requirement("CS200") == "sem5") || (requirement("CS200") == "sem6") || (requirement("CS200") == "sem7") || (requirement("CS200") == "sem8") || (requirement("CS200") == "sem9") || (requirement("CS200") == "sem10") || (requirement("CS200") == "sem11") || (requirement("CS200") == "sem12"))

					            )

					                return alert("cant take 451 b4 200");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS451")) {

					            if (
					                ((requirement("CS200") == "sem3") || (requirement("CS200") == "sem4") || (requirement("CS200") == "sem5") || (requirement("CS200") == "sem6") || (requirement("CS200") == "sem7") || (requirement("CS200") == "sem8") || (requirement("CS200") == "sem9") || (requirement("CS200") == "sem10") || (requirement("CS200") == "sem11") || (requirement("CS200") == "sem12"))

					            )

					                return alert("cant take 451 b4 200");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS451")) {

					            if (
					                ((requirement("CS200") == "sem4") || (requirement("CS200") == "sem5") || (requirement("CS200") == "sem6") || (requirement("CS200") == "sem7") || (requirement("CS200") == "sem8") || (requirement("CS200") == "sem9") || (requirement("CS200") == "sem10") || (requirement("CS200") == "sem11") || (requirement("CS200") == "sem12"))

					            )

					                return alert("cant take 451 b4 200");
					        }
					    }

					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS451")) {

					            if (
					                ((requirement("CS200") == "sem5") || (requirement("CS200") == "sem6") || (requirement("CS200") == "sem7") || (requirement("CS200") == "sem8") || (requirement("CS200") == "sem9") || (requirement("CS200") == "sem10") || (requirement("CS200") == "sem11") || (requirement("CS200") == "sem12"))

					            )

					                return alert("cant take 451 b4 200");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS451")) {

					            if (
					                ((requirement("CS200") == "sem6") || (requirement("CS200") == "sem7") || (requirement("CS200") == "sem8") || (requirement("CS200") == "sem9") || (requirement("CS200") == "sem10") || (requirement("CS200") == "sem11") || (requirement("CS200") == "sem12"))


					            )

					                return alert("cant take 451 b4 200");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS451")) {

					            if (
					                ((requirement("CS200") == "sem7") || (requirement("CS200") == "sem8") || (requirement("CS200") == "sem9") || (requirement("CS200") == "sem10") || (requirement("CS200") == "sem11") || (requirement("CS200") == "sem12"))


					            )

					                return alert("cant take 451 b4 200");
					        }
					    }


					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS451")) {

					            if (
					                ((requirement("CS200") == "sem8") || (requirement("CS200") == "sem9") || (requirement("CS200") == "sem10") || (requirement("CS200") == "sem11") || (requirement("CS200") == "sem12"))

					            )

					                return alert("cant take 451 b4 200");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS451")) {

					            if (
					                ((requirement("CS200") == "sem9") || (requirement("CS200") == "sem10") || (requirement("CS200") == "sem11") || (requirement("CS200") == "sem12"))


					            )

					                return alert("cant take 451 b4 200");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS451")) {

					            if (
					                ((requirement("CS200") == "sem10") || (requirement("CS200") == "sem11") || (requirement("CS200") == "sem12"))


					            )

					                return alert("cant take 451 b4 200");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS451")) {

					            if (
					                ((requirement("CS200") == "sem11") || (requirement("CS200") == "sem12"))


					            )

					                return alert("cant take 451 b4 200");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS451")) {

					            if (
					                ((requirement("CS200") == "sem12"))


					            )

					                return alert("cant take 451 b4 200");
					        }
					    }




					    /*---------------------------------------------------------------------------- BLOCKING 452 FROM B4 451---------------------------------------------------------------------*/
					    //SEM1
					    if (box == "sem1")

					    {
					        if ((course == "CS452")) {

					            if (
					                ((requirement("CS451") == "sem2") || (requirement("CS451") == "sem3") || (requirement("CS451") == "sem4") || (requirement("CS451") == "sem5") || (requirement("CS451") == "sem6") || (requirement("CS451") == "sem7") || (requirement("CS451") == "sem8") || (requirement("CS451") == "sem9") || (requirement("CS451") == "sem10") || (requirement("CS451") == "sem11") || (requirement("CS451") == "sem12"))

					            )

					                return alert("cant take 452 b4 451");
					        }
					    }

					    //SEM2
					    if (box == "sem2")

					    {
					        if ((course == "CS452")) {

					            if (
					                ((requirement("CS451") == "sem3") || (requirement("CS451") == "sem4") || (requirement("CS451") == "sem5") || (requirement("CS451") == "sem6") || (requirement("CS451") == "sem7") || (requirement("CS451") == "sem8") || (requirement("CS451") == "sem9") || (requirement("CS451") == "sem10") || (requirement("CS451") == "sem11") || (requirement("CS451") == "sem12"))

					            )

					                return alert("cant take 452 b4 451");
					        }
					    }

					    //SEM3

					    if (box == "sem3")

					    {
					        if ((course == "CS452")) {

					            if (
					                ((requirement("CS451") == "sem4") || (requirement("CS451") == "sem5") || (requirement("CS451") == "sem6") || (requirement("CS451") == "sem7") || (requirement("CS451") == "sem8") || (requirement("CS451") == "sem9") || (requirement("CS451") == "sem10") || (requirement("CS451") == "sem11") || (requirement("CS451") == "sem12"))

					            )

					                return alert("cant take 452 b4 451");
					        }
					    }
					    //SEM4
					    if (box == "sem4")

					    {
					        if ((course == "CS452")) {

					            if (
					                ((requirement("CS451") == "sem5") || (requirement("CS451") == "sem6") || (requirement("CS451") == "sem7") || (requirement("CS451") == "sem8") || (requirement("CS451") == "sem9") || (requirement("CS451") == "sem10") || (requirement("CS451") == "sem11") || (requirement("CS451") == "sem12"))

					            )

					                return alert("cant take 452 b4 451");
					        }
					    }

					    //SEM5
					    if (box == "sem5")

					    {
					        if ((course == "CS452")) {

					            if (
					                ((requirement("CS451") == "sem6") || (requirement("CS451") == "sem7") || (requirement("CS451") == "sem8") || (requirement("CS451") == "sem9") || (requirement("CS451") == "sem10") || (requirement("CS451") == "sem11") || (requirement("CS451") == "sem12"))


					            )

					                return alert("cant take 452 b4 451");
					        }
					    }


					    //SEM6
					    if (box == "sem6")

					    {
					        if ((course == "CS452")) {

					            if (
					                ((requirement("CS451") == "sem7") || (requirement("CS451") == "sem8") || (requirement("CS451") == "sem9") || (requirement("CS451") == "sem10") || (requirement("CS451") == "sem11") || (requirement("CS451") == "sem12"))


					            )

					                return alert("cant take 452 b4 451");
					        }
					    }
					    //SEM7
					    if (box == "sem7")

					    {
					        if ((course == "CS452")) {

					            if (
					                ((requirement("CS451") == "sem8") || (requirement("CS451") == "sem9") || (requirement("CS451") == "sem10") || (requirement("CS451") == "sem11") || (requirement("CS451") == "sem12"))

					            )

					                return alert("cant take 452 b4 451");
					        }
					    }

					    //SEM8
					    if (box == "sem8")

					    {
					        if ((course == "CS452")) {

					            if (
					                ((requirement("CS451") == "sem9") || (requirement("CS451") == "sem10") || (requirement("CS451") == "sem11") || (requirement("CS451") == "sem12"))


					            )

					                return alert("cant take 452 b4 451");
					        }
					    }

					    //SEM9
					    if (box == "sem9")

					    {
					        if ((course == "CS452")) {

					            if (
					                ((requirement("CS451") == "sem10") || (requirement("CS451") == "sem11") || (requirement("CS451") == "sem12"))


					            )

					                return alert("cant take 452 b4 451");
					        }
					    }

					    //SEM10
					    if (box == "sem10")

					    {
					        if ((course == "CS452")) {

					            if (
					                ((requirement("CS451") == "sem11") || (requirement("CS451") == "sem12"))


					            )

					                return alert("cant take 452 b4 451");
					        }
					    }


					    //SEM11
					    if (box == "sem11")

					    {
					        if ((course == "CS452")) {

					            if (
					                ((requirement("CS451") == "sem12"))


					            )

					                return alert("cant take 452 b4 451");
					        }
					    }



					    /////---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					    ///////////////CHECKING IF PREREQUISITES ARE TAKEN ANYWHERE BEFORE ALLOWING A CLASS TO BE TAKEN 
					    /////---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					    // TAKEN
					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {


					        /* CS100 (done)
   You can take 100 only if 102 is not taken before
   
    Prerequisite: Departmental approval, as determined by performance on mathematics placement exam. Annually. Fall and Spring. [MNS]
  */
					        if (course == "CS100") {
					            if (Taken("CS102")) {
					                return alert("you can either take CS102 or CS100 but not both. CS102 has already been taken");


					            }
					        }

					        /* CS102 (done)
					         You can take 102 only if 100 is not taken before
					         
					         Prerequisite: Departmental approval, as determined by performance on mathematics placement exam. Annually. Fall. [MNS]
					        */
					        else if (course == "CS102") {
					            if (Taken("CS100")) {
					                return alert("You cannot take CS102. You can either take CS100 or CS102 but not both. CS100 has already been taken");

					            }
					        }

					        /*CS110 
  You can only take 110 if you previously took 100 or 102
  
  Prerequisite: CSCI 10000 or CSCI 10200. Annually. Fall and Spring. [MNS]
  */
					        else if (course == "CS110") {
					            if (Taken("CS100") && Taken("CS102")) {

					                return;
					            } else if (!Taken("CS100") && !Taken("CS102")) {
					                return alert("Please take either CS100 or CS102 before taking CS110.");

					            }
					        }

					        /*CS120 
					         You can only take 120 if you previously took 100 or 102 and 110
					         
					         Prerequisite: CSCI 11000. Annually. Fall and Spring. [MNS]
					           */
					        else if (course == "CS120") {
					            if (Taken("CS110") && (Taken("CS100") && Taken("CS102"))) {
					                return;
					            } else if (!Taken("CS110")) {
					                return alert("You need to first take CS110 before you can take CS120");

					            }
					        }


					        /*CS200 
  You can only take 200 if you previously took 120 and math 211 or math 215 or math 223
  
  Prerequisite: CSCI 12000 and MATH 21500 or 22300 or 21100. Annually. Spring.
 
   */
					        else if (course == "CS200") {
					            if (Taken("CS120") && Taken("Math211") && Taken("Math215") && Taken("Math223"))

					            {
					                return;
					            } else if (Taken("CS120") && !Taken("Math211") && !Taken("Math215") && !Taken("Math223")) {
					                return alert("CS200 needs CS120, and Math 211 or Math 215 or Math 223. You have taken CS120 but you have not taken any math. Please take Math 211 or Math 215 or Math 223");

					            } else if (Taken("Math211") && Taken("Math215") && !Taken("Math223") && !Taken("CS120")) {
					                return alert("CS200 needs Math 211 or Math 215 or Math 223, and CS120. You have taken Math 211 and Math 215 but you are remaining with CS120 before you can be allowed to take CS 200. Please take CS120");

					            } else if (Taken("Math211") && !Taken("Math215") && Taken("Math223") && !Taken("CS120")) {
					                return alert("CS200 needs Math 211 or Math 215 or Math 223, and CS120. You have taken Math 211 and Math 223 but you are remaining with CS120 before you can be allowed to take CS 200. Please take CS120");

					            } else if (!Taken("Math211") && Taken("Math215") && Taken("Math223") && !Taken("CS120")) {
					                return alert("CS200 needs Math 211 or Math 215 or Math 223, and CS120. You have taken Math 215 and Math 223 but you are remaining with CS120 before you can be allowed to take CS 200. Please take CS120");

					            } else if (Taken("Math211") && Taken("Math215") && Taken("Math223") && !Taken("CS120")) {
					                return alert("CS200 needs Math 211 or Math 215 or Math 223, and CS120. You have taken Math 211, Math 215 and Math 223 but you are remaining with CS120 before you can be allowed to take CS 200. Please take CS120");

					            } else if (Taken("Math211") && !Taken("CS120")) {
					                return alert("CS200 needs Math 211 or Math 215 or Math 223, and CS120. You have taken Math 211 but you are remaining with CS120 before you can be allowed to take CS 200. Please take CS120");

					            } else if (Taken("Math215") && !Taken("CS120")) {
					                return alert("CS200 needs Math 211 or Math 215 or Math 223, and CS120. You have taken Math 215 but you are remaining with CS120 before you can be allowed to take CS 200. Please take CS120");

					            } else if (Taken("Math223") && !Taken("CS120")) {
					                return alert("CS200 needs Math 211 or Math 215 or Math 223, and CS120. You have taken Math 223 but you are remaining with CS120 before you can be allowed to take CS 200. Please take CS120");

					            } else if ((!Taken("CS120") || !Taken("Math211")) && (!Taken("CS120") || !Taken("Math215")) && (!Taken("CS120") || !Taken("Math223"))) {
					                return alert("You have not met any prerequisites for CS200. You need to first take CS120 ,and Math 211 or Math 215 or Math 223 before you can take CS200");

					            }

					        }


					        /*CS210 
					        You can only take 210 if you previously took 120
  
					        Prerequisite: CSCI 12000. Alternate years.
					        */
					        else if (course == "CS210") {
					            if (Taken("CS120") && !Taken("CS212") && !Taken("CS100") && !Taken("CS102") && !Taken("CS110")) {

					                return;
					            } else if (Taken("CS212")) {
					                return alert("You cannot take CS210. You can either take CS210 or CS212 but not both. CS212 has already been taken");

					            } else if ((!Taken("CS100") || !Taken("CS102")) && (!Taken("CS110") || !Taken("CS120"))) {
					                return alert("Please take cs 120 before taking cs 210");

					            }
					        }


					        /*CS212 
 You can only take 212 if you previously took 120
 Prerequisite: CSCI 12000. Alternate years
  
  
  */
					        else if (course == "CS212") {
					            if (Taken("CS120") && !Taken("CS212") && !Taken("CS100") && !Taken("CS102") && !Taken("CS110")) {

					                return;
					            } else if (Taken("CS210")) {
					                return alert("You cannot take CS212. You can either take CS210 or CS212 but not both. CS210 has already been taken");

					            } else if ((!Taken("CS100") || !Taken("CS102")) && (!Taken("CS110") || !Taken("CS120"))) {
					                return alert("Please take cs 100 or 102 then cs110 then cs120 before taking cs 212");

					            }
					        }

					        /*CS220
  You can only take 220 if you previously took 120, and Math 215 or 223
  
  Prerequisite: CSCI 12000 and MATH 21500 or 22300. Alternate years. Fall 2013.
   */
					        else if (course == "CS220") {
					            if (Taken("CS120") && (Taken("CS100") && Taken("CS102") && Taken("CS110") && Taken("Math215") && Taken("Math223")))

					            {
					                return;
					            } else if (Taken("CS222")) {
					                return alert("You cannot take CS220. You can either take CS220 or CS222 but not both. CS222 has already been taken");

					            } else if (Taken("Math223") && Taken("Math215") && !Taken("CS120")) {
					                return alert("<br><hr><b>Explanation</b><br>CS200 needs Math 215 or Math 223, and CS120<br><br></br> <b>Note</b><br>You have taken Math 223 and Math 215 but you are remaining with CS120 before you can be allowed to take CS 200.<br></br> <b>Suggestion</b><br>Please take CS120");

					            } else if (Taken("Math215") && !Taken("CS120")) {
					                return alert("CS220 needs Math 215 or Math 223, and CS120. You have taken Math 215 but you are remaining with CS120 before you can be allowed to take CS 200. Please take CS120");

					            } else if (Taken("Math223") && !Taken("CS120")) {
					                return alert("CS200 needs Math 215 or Math 223, and CS120. You have taken Math 223 (therefore you do not need to take Math 215) but you are remaining with CS120 before you can be allowed to take CS 200. Please take CS120");

					            } else if ((!Taken("CS120") || !Taken("Math215")) && (!Taken("CS120") || !Taken("Math223"))) {
					                return alert("You cannot take CS220 right now. You need to first take CS120 and Math 215 or Math 223 before you can take CS220.");

					            }
					        }

					        /*CS222
  You can only take 222 if you previously took 120
  
  Prerequisite: CSCI 12000. Alternate years.
  */
					        else if (course == "CS222") {
					            if (Taken("CS120") && !Taken("CS220") && Taken("CS100") && Taken("CS102") && Taken("CS110")) {

					                return;
					            } else if (Taken("CS220")) {
					                return alert("You cannot take CS222. You can either take CS220 or CS222 but not both. CS220 has already been taken");

					            } else if ((!Taken("CS100") || !Taken("CS102")) && (!Taken("CS110") || !Taken("CS120"))) {
					                return alert("Please take cs 100 or 102 then cs110 then cs120 before taking cs 222");

					            }
					        }



					        /*CS230
  You can only take 230 if you previously took 120
  Prerequisite: CSCI 12000. Alternate years.
   */
					        else if (course == "CS230") {
					            if (Taken("CS120") && !Taken("CS232") && Taken("CS100") && Taken("CS102") && Taken("CS110")) {

					                return;
					            } else if (Taken("CS232")) {
					                return alert("You cannot take CS230. You can either take CS230 or CS232 but not both. CS232 has already been taken");

					            } else if ((!Taken("CS100") || !Taken("CS102")) && (!Taken("CS110") || !Taken("CS120"))) {
					                return alert("Please take cs120 before taking cs 230");

					            }
					        }

					        /*CS232
  You can only take 232 if you previously took 120
  Prerequisite: CSCI 12000. Alternate years.
      */
					        else if (course == "CS232") {
					            if (Taken("CS120") && !Taken("CS230") && Taken("CS100") && Taken("CS102") && Taken("CS110")) {

					                return;
					            } else if (Taken("CS230")) {
					                return alert("You cannot take CS232. You can either take CS230 or CS232 but not both. CS230 has already been taken");

					            } else if ((!Taken("CS100") || !Taken("CS102")) && (!Taken("CS110") || !Taken("CS120"))) {
					                return alert("Please take cs120 before taking cs 232");

					            }
					        }


					        /*CS279
  You can only take 279 if you previously took 110
  Prerequisite: CSCI 11000. Annually.
  */
					        else if (course == "CS279") {
					            if (Taken("CS110") && (Taken("CS100") && Taken("CS102"))) {
					                return;
					            } else if (!Taken("CS110")) {

					                return alert("You need to first take CS110 before you can take CS279");


					            }
					        }



					        /*CS300
  You can only take 300 if you previously took 200 or 230 or 232, and Math 211
  
  Prerequisite: CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. Alternate years.
   */
					        else if (course == "CS300") {
					            if (Taken("CS200") && Taken("Math211") && Taken("CS230") && Taken("CS232")) {
					                return;
					            } else if (!Taken("CS200") && Taken("Math211") && !Taken("CS230") && !Taken("CS232")) {
					                return alert("CS300 needs  CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. You have taken Math211 but you are remianing with CS200 or CS230 or CS232 before you can be allowed to take CS 300. Please take CS200 or CS230 or CS232");

					            } else if (Taken("CS200") && !Taken("Math211") && !Taken("CS230") && !Taken("CS232")) {
					                return alert("CS300 needs  CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. You have taken CS200 but you are remaining with Math211 before you can be allowed to take CS 300. Please take Math211");

					            } else if (Taken("CS230") && !Taken("Math211") && !Taken("CS200") && !Taken("CS232")) {
					                return alert("CS300 needs  CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. You have taken CS230 but you are remaining with Math211 before you can be allowed to take CS 300. Please take Math211");

					            } else if (Taken("CS232") && !Taken("Math211") && !Taken("CS200") && !Taken("CS230")) {
					                return alert("CS300 needs  CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. You have taken CS232 but you are remaining with Math211 before you can be allowed to take CS 300. Please take Math211");

					            } else if (Taken("CS232") && !Taken("Math211") && Taken("CS200") && !Taken("CS230")) {
					                return alert("CS300 needs  CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. You have taken CS232 and CS200 but you are remaining with Math211 before you can be allowed to take CS 300. Please take Math211");

					            } else if (!Taken("CS232") && !Taken("Math211") && Taken("CS200") && Taken("CS230")) {
					                return alert("CS300 needs  CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. You have taken CS230 and CS200 but you are remaining with Math211 before you can be allowed to take CS 300. Please take Math211");

					            } else if ((!Taken("CS200") || !Taken("Math211")) && (!Taken("CS230") || !Taken("Math211")) && (!Taken("CS232") || !Taken("Math211"))) {
					                return alert("You cannot take CS300. You need math211 and cs200 or cs232 or cs230 before you can take this course");

					            }
					        }


					        /*CS309
  You can only take 309 if you have permission of the instructor
  Prerequisite: Permission of the instructor.
  */
					        else if (course == "CS309") {
					            if (!confirm("You are about to take CS309 which requires permission of the instructor. Click ok to take if you have permission of the instructor, otherwise click cancel"))
					                return;
					        }


					        /*CS310 
  You can only take 310 if you previously took 200 or 230 or 232
  Prerequisites: CSCI 20000 or CSCI 23000 or CSCI 23200. Alternate years.
     */
					        else if (course == "CS310") {
					            if (!Taken("CS200") && !Taken("CS230") && !Taken("CS232")) {
					                return alert("You cannot take CS310. You need cs200 or cs232 or cs230 before you can take this course");

					            }
					        }


					        /*CS320
  You can only take 320 if you previously took 200 or 230 or 232, and Math 211
  Prerequisite: CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. Alternate years.
   */
					        else if (course == "CS320") {
					            if (Taken("CS200") && Taken("Math211") && Taken("CS230") && Taken("CS232")) {
					                return;
					            } else if (!Taken("CS200") && Taken("Math211") && !Taken("CS230") && !Taken("CS232")) {
					                return alert("CS320 needs  CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. You have taken Math211 but you are remianing with CS200 or CS230 or CS232 before you can be allowed to take CS 320. Please take CS200 or CS230 or CS232");

					            } else if (Taken("CS200") && !Taken("Math211") && !Taken("CS230") && !Taken("CS232")) {
					                return alert("CS320 needs  CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. You have taken CS200 but you are remaining with Math211 before you can be allowed to take CS 320. Please take Math211");

					            } else if (Taken("CS230") && !Taken("Math211") && !Taken("CS200") && !Taken("CS232")) {
					                return alert("CS300 needs  CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. You have taken CS230 but you are remaining with Math211 before you can be allowed to take CS 320. Please take Math211");

					            } else if (Taken("CS232") && !Taken("Math211") && !Taken("CS200") && !Taken("CS230")) {
					                return alert("CS320 needs  CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. You have taken CS232 but you are remaining with Math211 before you can be allowed to take CS 320. Please take Math211");

					            } else if (Taken("CS232") && !Taken("Math211") && Taken("CS200") && !Taken("CS230")) {
					                return alert("CS320 needs  CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. You have taken CS232 and CS200 but you are remaining with Math211 before you can be allowed to take CS 320. Please take Math211");

					            } else if (!Taken("CS232") && !Taken("Math211") && Taken("CS200") && Taken("CS230")) {
					                return alert("CS320 needs  CSCI 20000 or CSCI 23000 or CSCI 23200 and MATH 21100. You have taken CS230 and CS200 but you are remaining with Math211 before you can be allowed to take CS 320. Please take Math211");

					            } else if ((!Taken("CS200") || !Taken("Math211")) && (!Taken("CS230") || !Taken("Math211")) && (!Taken("CS232") || !Taken("Math211"))) {
					                return alert("You cannot take CS320. You need math211 and cs200 or cs232 or cs230 before you can take this course");

					            }
					        }



					        /*CS330 
  You can only take 330 if you previously took 200 or 230 or 232
  Prerequisites: CSCI 20000 or CSCI 23000 or CSCI 23200. Alternate years.
    */
					        else if (course == "CS330") {
					            if (!Taken("CS200") && !Taken("CS230") && !Taken("CS232")) {
					                return alert("You cannot take CS330. You need cs200 or cs232 or cs230 before you can take this course");

					            }
					        }




					        /*CS400
  You can only take 309 if you have permission of the instructor
  Prerequisite: the approval of both the supervising faculty member and the chairperson is required prior to registration.
  */
					        else if (course == "CS400") {
					            if (confirm("You are about to take CS400 which requires permission of the instructor.Click ok to take if you have permission of the instructor, otherwise click cancel"))
					                return;
					        }


					        /*CS451
  You can only take 451 if you previously took 200
  Prerequisite: CSCI 20000.
  */
					        else if (course == "CS451") {
					            if (Taken("CS200") && (Taken("CS100") && Taken("CS102"))) {
					                return;
					            } else if (!Taken("CS200")) {
					                return alert("You need to first take CS200 before you can take CS451");

					            }
					        }

					        /*CS452
  You can only take 452 if you previously took 451
  Prerequisite: CSCI 45100.
  */
					        else if (course == "CS452") {
					            if (Taken("CS200") && Taken("CS451") && (Taken("CS100") && Taken("CS102"))) {
					                return;
					            } else if (!Taken("CS451")) {
					                return alert("You need to first take CS451 before you can take CS452");

					            }
					        }


					        /*
					          
					                /*Math 107
					        You can take 107 if you have been placed in 107 or did not previously take 108, 111 or 112
					        	  
					        Prerequisite: Departmental approval, as determined by performance on placement exam.
					        Annually. Fall. 
					          */
					        else if (course == "Math107") {
					            if (Taken("Math111") || Taken("Math112")) {
					                return alert("You placed out of 107");

					            }


					        }


					        /*Math 108
  You can only take 108 if you previously took 107
  Prerequisite: MATH 10700 with a C- or better. Annually. Spring. [Q, MNS]
  */
					        else if (course == "Math108") {

					            if (Taken("Math111") || Taken("Math112") && !Taken("Math107")) {
					                return alert("You placed out of Math 108");

					            } else if (!Taken("Math107") && !Taken("Math111") && !Taken("Math112")) {
					                return alert("You need Math 107 before taking Math 108. Please take Math 107!");

					            } else if ((Taken("Math111") && !Taken("Math107") && !Taken("Math108"))) {
					                return alert("You cannot take Math 108. You already took Math 111. You can either take Math 111 or Math 108 but not both");

					            }



					        }



					        /*Math 111
  You can take 111 if you have been placed in 111 or did not previously take 107 and 108, or 112
  Prerequisite: Departmental approval, as determined by performance on placement
exam. Annually. Fall and Spring. [Q, MNS]
  */
					        else if (course == "Math111") {
					            if (Taken("Math108")) {
					                return alert("You do not need to take math 111. You took Math 108. You can take either one but not both");

					            } else if (Taken("Math112")) {
					                return alert("You do not need to take math 111. You took 112 therefore placing out of Math 111");

					            } else if (Taken("Math107")) {
					                return alert("You do not need to take math 111. You took 107 therefore you must take Math 108");

					            }
					        }
					        /*Math 112
 You can take 112 if you have been placed in 112 or previously took 107 and 108, or 111 
 Prerequisite: MATH 11100 or 10800 with a C- or better, or AP/equivalent credit. Annually. Fall and Spring. [Q, MNS]
  */
					        else if (course == "Math112") {
					            if (Taken("Math108") && Taken("Math111")) {

					                return;
					            }

					        }
					        /*Math 211
  You can only take 211 if you previously took 112
  Prerequisite: MATH 11200 with a C- or better,
AP/equivalent credit, or permission of the instructor. Annually. Fall. [Q, MNS]
 
   */
					        else if (course == "Math211") {
					            if (Taken("Math112") && Taken("Math111") && Taken("Math108")) {

					                return;
					            } else if (!Taken("Math112") && !Taken("Math111") && !Taken("Math108")) {
					                alert("Math 211 requires Math 112. Please take Math 112");
					                return;
					            }
					        }

					        /*Math 212
  You can only take 211 if you previously took 112
  Prerequisite: MATH 11200 with a C- or better,
AP/equivalent credit, or permission of the instructor. Annually. Fall. [Q, MNS]
 
   */
					        else if (course == "Math212") {
					            if (!Taken("Math112")) {
					                alert("Math 212 requires Math 112. Please take Math 112");
					                return;
					            }
					        }

					        /*Math 215
  You can only take 215 if you previously took 112
  Prerequisite: MATH 11200 with a C- or better or AP/equivalent credit. Annually. Fall and Spring. [W,
MNS]
  */
					        else if (course == "Math215") {
					            if (Taken("Math112") && Taken("Math111") && Taken("Math108")) {

					                return;
					            } else if (!Taken("Math112") && !Taken("Math111") && !Taken("Math108")) {
					                return alert("Math 215 requires Math 112. Please take Math 112");

					            }
					        }


					        /*Math 219
  You can only take 215 if you previously took 112
  Prerequisite: MATH 11200 with a C- or better or AP/equivalent credit. Annually. Fall and Spring. [W,
MNS]
  */
					        else if (course == "Math219") {
					            if (Taken("Math112") && Taken("Math111") && Taken("Math108")) {

					                return;
					            } else if (!Taken("Math112") && !Taken("Math111") && !Taken("Math108")) {
					                return alert("Math 219 requires Math 112. Please take Math 112");

					            }
					        }

					        /*Math 221
  You can only take 215 if you previously took 112
  Prerequisite: MATH 11200 with a C- or better or AP/equivalent credit. Annually. Fall and Spring. [W,
MNS]
  */
					        else if (course == "Math221") {
					            if (Taken("Math112") && Taken("Math111") && Taken("Math108")) {

					                return;
					            } else if (!Taken("Math112") && !Taken("Math111") && !Taken("Math108")) {
					                return alert("Math 221 requires Math 112. Please take Math 112");

					            }
					        }

					        /*Math 223
  You can only take 223 if you previously took 215 or 211
  Prerequisite: MATH 12300 or 21100. Alternate years. [Q, MNS]
  */
					        else if (course == "Math223") {
					            if (!Taken("Math215") && !Taken("Math211")) {
					                return alert("Math 223 requires Math 215 or math 211");

					            }
					        }

					        /*Math 225
  You can only take 223 if you previously took 215 or 211
  Prerequisite: MATH 12300 or 21100. Alternate years. [Q, MNS]
  */
					        else if (course == "Math225") {
					            if (!Taken("Math112") || !Taken("CS100")) {
					                return alert("Math 225 requires Math 112 and CS100");

					            }
					        }


					        /*Math 227
  You can only take 223 if you previously took 215 or 211
  Prerequisite: MATH 12300 or 21100. Alternate years. [Q, MNS]
  */
					        else if (course == "Math227") {
					            if (!Taken("Math211") || !Taken("Math212")) {
					                return alert("Math 227 requires Math 211 and Math 212");

					            }
					        }


					        /*Math 229
  You can only take 215 if you previously took 112
  Prerequisite: MATH 11200 with a C- or better or AP/equivalent credit. Annually. Fall and Spring. [W,
MNS]
  */
					        else if (course == "Math229") {
					            if (Taken("Math112") && Taken("Math111") && Taken("Math108")) {

					                return;
					            } else if (!Taken("Math112") && !Taken("Math111") && !Taken("Math108")) {
					                return alert("Math 229 requires Math 112. Please take Math 112");

					            }
					        }

					        /*Math 319
  You can only take 215 if you previously took 112
  Prerequisite: MATH 11200 with a C- or better or AP/equivalent credit. Annually. Fall and Spring. [W,
MNS]
  */
					        else if (course == "Math319") {
					            if (Taken("Math112") && Taken("Math111") && Taken("Math108")) {

					                return;
					            } else if (!Taken("Math112") && !Taken("Math111") && !Taken("Math108")) {
					                return alert("Math 319 requires Math 112. Please take Math 112");

					            }
					        }

					        /*Math 327
  You can only take 223 if you previously took 215 or 211
  Prerequisite: MATH 12300 or 21100. Alternate years. [Q, MNS]
  */
					        else if (course == "Math327") {
					            if (!Taken("Math112") || !Taken("Math211") || !Taken("CS100")) {
					                return alert("Math 327 requires Math CS100, Math 112 and Math 211");

					            }
					        }

					        /*Math 329
  You can only take 223 if you previously took 215 or 211
  Prerequisite: MATH 12300 or 21100. Alternate years. [Q, MNS]
  */
					        else if (course == "Math329") {
					            if (!Taken("Math211") || !Taken("Math229")) {
					                return alert("Math 329 requires  Math 221 and and Math 229");

					            }
					        }

					        /*Math 330
  You can only take 223 if you previously took 215 or 211
  Prerequisite: MATH 12300 or 21100. Alternate years. [Q, MNS]
  */
					        else if (course == "Math330") {
					            if (!Taken("Math211") || !Taken("Math212")) {
					                return alert("Math 330 requires  Math 211 and and Math 212");

					            }
					        }

					        /*Math 332
  You can only take 223 if you previously took 215 or 211
  Prerequisite: MATH 12300 or 21100. Alternate years. [Q, MNS]
  */
					        else if (course == "Math332") {
					            if (!Taken("Math211")) {
					                return alert("Math 332 requires  Math 211");

					            }
					        }


					        /*Math 333
  You can only take 223 if you previously took 215 or 211
  Prerequisite: MATH 12300 or 21100. Alternate years. [Q, MNS]
  */
					        else if (course == "Math333") {
					            if (!Taken("Math332")) {
					                return alert("Math 333 requires  Math 332");

					            }
					        }

					        /*Math 334
  You can only take 223 if you previously took 215 or 211
  Prerequisite: MATH 12300 or 21100. Alternate years. [Q, MNS]
  */
					        else if (course == "Math334") {
					            if (!Taken("Math211")) {
					                return alert("Math 334 requires  Math 211");

					            }
					        }


					        /*Math 335
  You can only take 223 if you previously took 215 or 211
  Prerequisite: MATH 12300 or 21100. Alternate years. [Q, MNS]
  */
					        else if (course == "Math335") {
					            if (!Taken("Math334")) {
					                return alert("Math 335 requires  Math 334");

					            }
					        }

					        /*Math 336
  You can only take 223 if you previously took 215 or 211
  Prerequisite: MATH 12300 or 21100. Alternate years. [Q, MNS]
  */
					        else if (course == "Math336") {
					            if (!Taken("Math211") || !Taken("Math212")) {
					                return alert("Math 336 requires Math 211 and Math 212");

					            }
					        }

					        /*Math 400
  You can only take 215 if you previously took 112
  Prerequisite: MATH 11200 with a C- or better or AP/equivalent credit. Annually. Fall and Spring. [W,
MNS]
  */
					        else if (course == "Math400") {
					            if (Taken("Math112") && Taken("Math111") && Taken("Math108")) {

					                return;
					            } else if (!Taken("Math112") && !Taken("Math111") && !Taken("Math108")) {
					                return alert("Math 400 requires Math 112 and permission of the instructor. Please take Math 112");

					            }
					        }



					        /*Math 451
   You can only take 451 if you took 211,212,215, and one other course above 215
   */
					        else if (course == "Math451") {
					            if (
					                (!Taken("Math211") || !Taken("Math212") || !Taken("Math215")) || (!Taken("Math219") && !Taken("Math221") && !Taken("Math223") && !Taken("Math225") && !Taken("Math227") && !Taken("Math229") && !Taken("Math319") && !Taken("Math327") && !Taken("Math329") && !Taken("Math330") && !Taken("Math332") && !Taken("Math333") && !Taken("Math334") && !Taken("Math335") && !Taken("Math336") && !Taken("Math400"))
					            ) {
					                return alert("Math 451 requires Math 211,212,215, and one other course above 215");

					            }
					        }


					        /*Math 452
					        You can only take 452 if you took 451
					        */
					        else if (course == "Math452") {
					            if (!Taken("Math451")) {
					                return alert("Math 452 requires Math 451");

					            }
					        }



					    }
					    //------------------------------------------------------------
					    // MATH before
					    //------------------------------------------------------------

					    // 108
					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math108")) {
					            if (requirement("Math107") == "sem3")
					                return alert("107 is a prereq for 108");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math108")) {
					            if (requirement("Math107") == "sem4")
					                return alert("107 is a prereq for 108");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math108")) {
					            if (requirement("Math107") == "sem5")
					                return alert("107 is a prereq for 108");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math108")) {
					            if (requirement("Math107") == "sem6")
					                return alert("107 is a prereq for 108");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math108")) {
					            if (requirement("Math107") == "sem7")
					                return alert("107 is a prereq for 108");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math108")) {
					            if (requirement("Math107") == "sem8")
					                return alert("107 is a prereq for 108");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math108")) {
					            if (requirement("Math107") == "sem9")
					                return alert("107 is a prereq for 108");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math108")) {
					            if (requirement("Math107") == "sem10")
					                return alert("107 is a prereq for 108");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math108")) {
					            if (requirement("Math107") == "sem11")
					                return alert("107 is a prereq for 108");
					        }
					    }

					    // 108
					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math211")) {
					            if (requirement("Math108") == "sem2")
					                return alert("108 is a prereq for 211");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math211")) {
					            if (requirement("Math108") == "sem3")
					                return alert("108 is a prereq for 211");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math211")) {
					            if (requirement("Math108") == "sem4")
					                return alert("108 is a prereq for 211");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math211")) {
					            if (requirement("Math108") == "sem5")
					                return alert("108 is a prereq for 211");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math211")) {
					            if (requirement("Math108") == "sem6")
					                return alert("108 is a prereq for 211");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math211")) {
					            if (requirement("Math108") == "sem7")
					                return alert("108 is a prereq for 211");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math211")) {
					            if (requirement("Math108") == "sem8")
					                return alert("108 is a prereq for 211");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math211")) {
					            if (requirement("Math108") == "sem9")
					                return alert("108 is a prereq for 211");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math211")) {
					            if (requirement("Math108") == "sem10")
					                return alert("108 is a prereq for 211");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if (requirement("Math108") == "sem11")
					                return alert("108 is a prereq for 211");
					        }
					    }

					    //112
					    if (box == "sem1")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math108") == "sem2") || (requirement("Math111") == "sem2"))
					                return alert("108 and 111 prereq for 112");
					        }
					    }

					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math108") == "sem3") || (requirement("Math111") == "sem3"))
					                return alert("108 and 111 prereq for 112");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math108") == "sem4") || (requirement("Math111") == "sem4"))
					                return alert("108 and 111 prereq for 112");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math108") == "sem5") || (requirement("Math111") == "sem5"))
					                return alert("108 and 111 prereq for 112");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math108") == "sem6") || (requirement("Math111") == "sem6"))
					                return alert("108 and 111 prereq for 112");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math108") == "sem7") || (requirement("Math111") == "sem7"))
					                return alert("108 and 111 prereq for 112");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math108") == "sem8") || (requirement("Math111") == "sem8"))
					                return alert("108 and 111 prereq for 112");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math108") == "sem9") || (requirement("Math111") == "sem9"))
					                return alert("108 and 111 prereq for 112");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math108") == "sem10") || (requirement("Math111") == "sem10"))
					                return alert("108 and 111 prereq for 112");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math108") == "sem11") || (requirement("Math111") == "sem11"))
					                return alert("108 and 111 prereq for 112");
					        }
					    }



					    // 211

					    if (box == "sem1")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math112") == "sem2"))
					                return alert("112 prereq for 211");
					        }
					    }


					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math112") == "sem3"))
					                return alert("112 prereq for 211");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math112") == "sem4"))
					                return alert("112 prereq for 211");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math112") == "sem5"))
					                return alert("112 prereq for 211");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math112") == "sem6"))
					                return alert("112 prereq for 211");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math112") == "sem7"))
					                return alert("112 prereq for 211");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math112") == "sem8"))
					                return alert("112 prereq for 211");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math112") == "sem9"))
					                return alert("112 prereq for 211");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7 " || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math112") == "sem10"))
					                return alert("112 prereq for 211");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math112") == "sem11"))
					                return alert("112 prereq for 211");
					        }
					    }

					    // 212

					    if (box == "sem1")

					    {
					        if ((course == "Math212")) {
					            if ((requirement("Math112") == "sem2"))
					                return alert("112 prereq for 212");
					        }
					    }


					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math212")) {
					            if ((requirement("Math112") == "sem3"))
					                return alert("112 prereq for 212");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math212")) {
					            if ((requirement("Math112") == "sem4"))
					                return alert("112 prereq for 212");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math212")) {
					            if ((requirement("Math112") == "sem5"))
					                return alert("112 prereq for 212");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math212")) {
					            if ((requirement("Math112") == "sem6"))
					                return alert("112 prereq for 212");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math212")) {
					            if ((requirement("Math112") == "sem7"))
					                return alert("112 prereq for 212");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math212")) {
					            if ((requirement("Math112") == "sem8"))
					                return alert("112 prereq for 212");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math212")) {
					            if ((requirement("Math112") == "sem9"))
					                return alert("112 prereq for 212");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math212")) {
					            if ((requirement("Math112") == "sem10"))
					                return alert("112 prereq for 212");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math212")) {
					            if ((requirement("Math112") == "sem11"))
					                return alert("112 prereq for 212");
					        }
					    }

					    // 215

					    if (box == "sem1")

					    {
					        if ((course == "Math215")) {
					            if ((requirement("Math112") == "sem2"))
					                return alert("112 or 108 prereq for 215");
					        }
					    }



					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math215")) {
					            if ((requirement("Math112") == "sem3") || (requirement("Math108") == "sem3"))
					                return alert("112 or 108 prereq for 215");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math215")) {
					            if ((requirement("Math112") == "sem4") || (requirement("Math108") == "sem4"))
					                return alert("112 or 108 prereq for 215");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math215")) {
					            if ((requirement("Math112") == "sem5") || (requirement("Math108") == "sem5"))
					                return alert("112 or 108 prereq for 215");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math215")) {
					            if ((requirement("Math112") == "sem6") || (requirement("Math108") == "sem6"))
					                return alert("112 or 108 prereq for 215");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math215")) {
					            if ((requirement("Math112") == "sem7") || (requirement("Math108") == "sem7"))
					                return alert("112 or 108 prereq for 215");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math215")) {
					            if ((requirement("Math112") == "sem8") || (requirement("Math108") == "sem8"))
					                return alert("112 or 108 prereq for 215");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math215")) {
					            if ((requirement("Math112") == "sem9") || (requirement("Math108") == "sem9"))
					                return alert("112 or 108 prereq for 215");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math215")) {
					            if ((requirement("Math112") == "sem10") || (requirement("Math108") == "sem10"))
					                return alert("112 or 108 prereq for 215");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math215")) {
					            if ((requirement("Math112") == "sem11") || (requirement("Math108") == "sem11"))
					                return alert("112 or 108 prereq for 215");
					        }
					    }

					    // 221

					    if (box == "sem1")

					    {
					        if ((course == "Math221")) {
					            if ((requirement("Math112") == "sem2"))
					                return alert("112 prereq for 221");
					        }
					    }


					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math221")) {
					            if ((requirement("Math112") == "sem3"))
					                return alert("112 prereq for 221");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math221")) {
					            if ((requirement("Math112") == "sem4"))
					                return alert("112 prereq for 221");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math221")) {
					            if ((requirement("Math112") == "sem5"))
					                return alert("112 prereq for 221");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math221")) {
					            if ((requirement("Math112") == "sem6"))
					                return alert("112 prereq for 221");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math221")) {
					            if ((requirement("Math112") == "sem7"))
					                return alert("112 prereq for 221");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math221")) {
					            if ((requirement("Math112") == "sem8"))
					                return alert("112 prereq for 221");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math221")) {
					            if ((requirement("Math112") == "sem9"))
					                return alert("112 prereq for 221");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math221")) {
					            if ((requirement("Math112") == "sem10"))
					                return alert("112 prereq for 221");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math221")) {
					            if ((requirement("Math112") == "sem11"))
					                return alert("112 prereq for 221");
					        }
					    }

					    // 223

					    if (box == "sem1")

					    {
					        if ((course == "Math223")) {
					            if ((requirement("Math211") == "sem2") || (requirement("Math215") == "sem2"))
					                return alert("211 or 215 prereq for 223");
					        }
					    }



					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math223")) {
					            if ((requirement("Math211") == "sem3") || (requirement("Math215") == "sem3"))
					                return alert("211 or 215 prereq for 223");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math223")) {
					            if ((requirement("Math211") == "sem4") || (requirement("Math215") == "sem4"))
					                return alert("211 or 215 prereq for 223");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math223")) {
					            if ((requirement("Math211") == "sem5") || (requirement("Math215") == "sem5"))
					                return alert("211 or 215 prereq for 223");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math223")) {
					            if ((requirement("Math211") == "sem6") || (requirement("Math215") == "sem6"))
					                return alert("211 or 215 prereq for 223");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math223")) {
					            if ((requirement("Math211") == "sem7") || (requirement("Math215") == "sem7"))
					                return alert("211 or 215 prereq for 223");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math223")) {
					            if ((requirement("Math211") == "sem8") || (requirement("Math215") == "sem8"))
					                return alert("211 or 215 prereq for 223");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math223")) {
					            if ((requirement("Math211") == "sem9") || (requirement("Math215") == "sem9"))
					                return alert("211 or 215 prereq for 223");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math223")) {
					            if ((requirement("Math211") == "sem10") || (requirement("Math215") == "sem10"))
					                return alert("211 or 215 prereq for 223");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math223")) {
					            if ((requirement("Math211") == "sem11") || (requirement("Math215") == "sem11"))
					                return alert("211 or 215 prereq for 223");
					        }
					    }

					    // 225

					    if (box == "sem1")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem2") || (requirement("CS100") == "sem2"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }



					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem3") || (requirement("CS100") == "sem3"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem4") || (requirement("CS100") == "sem4"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem5") || (requirement("CS100") == "sem5"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem6") || (requirement("CS100") == "sem6"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem7") || (requirement("CS100") == "sem7"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem8") || (requirement("CS100") == "sem8"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem9") || (requirement("CS100") == "sem9"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem10") || (requirement("CS100") == "sem10"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem11") || (requirement("CS100") == "sem11"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }

					    // 227

					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math227")) {
					            if ((requirement("Math211") == "sem3") || (requirement("Math212") == "sem3"))
					                return alert("211 and 212 prereq for 227");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem4") || (requirement("CS100") == "sem4"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem5") || (requirement("CS100") == "sem5"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem6") || (requirement("CS100") == "sem6"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem7") || (requirement("CS100") == "sem7"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem8") || (requirement("CS100") == "sem8"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem9") || (requirement("CS100") == "sem9"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem10") || (requirement("CS100") == "sem10"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math225")) {
					            if ((requirement("Math112") == "sem11") || (requirement("CS100") == "sem11"))
					                return alert("112 and CS100 prereq for 225");
					        }
					    }
					    // 229

					    if (box == "sem1")

					    {
					        if ((course == "Math229")) {
					            if ((requirement("Math112") == "sem2"))
					                return alert("112 prereq for 229");
					        }
					    }


					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math229")) {
					            if ((requirement("Math112") == "sem3"))
					                return alert("112 prereq for 229");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math229")) {
					            if ((requirement("Math112") == "sem4"))
					                return alert("112 prereq for 229");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math229")) {
					            if ((requirement("Math112") == "sem5"))
					                return alert("112 prereq for 229");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math229")) {
					            if ((requirement("Math112") == "sem6"))
					                return alert("112 prereq for 229");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math229")) {
					            if ((requirement("Math112") == "sem7"))
					                return alert("112 prereq for 229");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math229")) {
					            if ((requirement("Math112") == "sem8"))
					                return alert("112 prereq for 229");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math229")) {
					            if ((requirement("Math112") == "sem9"))
					                return alert("112 prereq for 229");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math229")) {
					            if ((requirement("Math112") == "sem10"))
					                return alert("112 prereq for 229");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math229")) {
					            if ((requirement("Math112") == "sem11"))
					                return alert("112 prereq for 229");
					        }
					    }

					    // 327

					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math327")) {
					            if ((requirement("CS100") == "sem3") || (requirement("Math112") == "sem3") || (requirement("Math211") == "sem3"))
					                return alert("CS100, 112 and 211 prereq for 327");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math327")) {
					            if ((requirement("CS100") == "sem4") || (requirement("Math112") == "sem4") || (requirement("Math211") == "sem4"))
					                return alert("CS100, 112 and 211 prereq for 327");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math327")) {
					            if ((requirement("CS100") == "sem5") || (requirement("Math112") == "sem5") || (requirement("Math211") == "sem5"))
					                return alert("CS100, 112 and 211 prereq for 327");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math327")) {
					            if ((requirement("CS100") == "sem6") || (requirement("Math112") == "sem6") || (requirement("Math211") == "sem6"))
					                return alert("CS100, 112 and 211 prereq for 327");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math327")) {
					            if ((requirement("CS100") == "sem7") || (requirement("Math112") == "sem7") || (requirement("Math211") == "sem7"))
					                return alert("CS100, 112 and 211 prereq for 327");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math327")) {
					            if ((requirement("CS100") == "sem8") || (requirement("Math112") == "sem8") || (requirement("Math211") == "sem8"))
					                return alert("CS100, 112 and 211 prereq for 327");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math327")) {
					            if ((requirement("CS100") == "sem9") || (requirement("Math112") == "sem9") || (requirement("Math211") == "sem9"))
					                return alert("CS100, 112 and 211 prereq for 327");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math327")) {
					            if ((requirement("CS100") == "sem10") || (requirement("Math112") == "sem10") || (requirement("Math211") == "sem10"))
					                return alert("CS100, 112 and 211 prereq for 327");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math327")) {
					            if ((requirement("CS100") == "sem11") || (requirement("Math112") == "sem11") || (requirement("Math211") == "sem11"))
					                return alert("CS100, 112 and 211 prereq for 327");
					        }
					    }

					    // 329

					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math329")) {
					            if ((requirement("Math211") == "sem3") || (requirement("Math229") == "sem3"))
					                return alert("211 and 229 prereq for 329");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math329")) {
					            if ((requirement("Math211") == "sem4") || (requirement("Math229") == "sem4"))
					                return alert("211 and 229 prereq for 329");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math329")) {
					            if ((requirement("Math211") == "sem5") || (requirement("Math229") == "sem5"))
					                return alert("211 and 229 prereq for 329");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math329")) {
					            if ((requirement("Math211") == "sem6") || (requirement("Math229") == "sem6"))
					                return alert("211 and 229 prereq for 329");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math329")) {
					            if ((requirement("Math211") == "sem7") || (requirement("Math229") == "sem7"))
					                return alert("211 and 229 prereq for 329");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math329")) {
					            if ((requirement("Math211") == "sem8") || (requirement("Math229") == "sem8"))
					                return alert("211 and 229 prereq for 329");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math329")) {
					            if ((requirement("Math211") == "sem9") || (requirement("Math229") == "sem9"))
					                return alert("211 and 229 prereq for 329");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math329")) {
					            if ((requirement("Math211") == "sem10") || (requirement("Math229") == "sem10"))
					                return alert("211 and 229 prereq for 329");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math329")) {
					            if ((requirement("Math211") == "sem11") || (requirement("Math229") == "sem11"))
					                return alert("211 and 229 prereq for 329");
					        }
					    }

					    // 330

					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math330")) {
					            if ((requirement("Math211") == "sem3") || (requirement("Math212") == "sem3"))
					                return alert("211 and 212 prereq for 330");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math330")) {
					            if ((requirement("Math112") == "sem4") || (requirement("Math212") == "sem4"))
					                return alert("211 and 212 prereq for 330");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math330")) {
					            if ((requirement("Math112") == "sem5") || (requirement("Math212") == "sem5"))
					                return alert("211 and 212 prereq for 330");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math330")) {
					            if ((requirement("Math112") == "sem6") || (requirement("Math212") == "sem6"))
					                return alert("211 and 212 prereq for 330");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math330")) {
					            if ((requirement("Math112") == "sem7") || (requirement("Math212") == "sem7"))
					                return alert("211 and 212 prereq for 330");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math330")) {
					            if ((requirement("Math112") == "sem8") || (requirement("Math212") == "sem8"))
					                return alert("211 and 212 prereq for 330");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math330")) {
					            if ((requirement("Math112") == "sem9") || (requirement("Math212") == "sem9"))
					                return alert("211 and 212 prereq for 330");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math330")) {
					            if ((requirement("Math112") == "sem10") || (requirement("Math212") == "sem10"))
					                return alert("211 and 212 prereq for 330");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math330")) {
					            if ((requirement("Math112") == "sem11") || (requirement("Math212") == "sem11"))
					                return alert("211 and 212 prereq for 330");
					        }
					    }
					    // 332

					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math211") == "sem3"))
					                return alert("211 prereq for 332");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math211") == "sem4"))
					                return alert("211 prereq for 332");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math211") == "sem5"))
					                return alert("211 prereq for 332");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math211") == "sem6"))
					                return alert("211 prereq for 332");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math211") == "sem7"))
					                return alert("211 prereq for 332");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math211") == "sem8"))
					                return alert("211 prereq for 332");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math211") == "sem9"))
					                return alert("211 prereq for 332");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math211") == "sem10"))
					                return alert("211 prereq for 332");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math211") == "sem11"))
					                return alert("211 prereq for 332");
					        }
					    }
					    // 333

					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math333")) {
					            if ((requirement("Math332") == "sem3"))
					                return alert("Math332 prereq for 333");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math333")) {
					            if ((requirement("Math332") == "sem4"))
					                return alert("Math332 prereq for 333");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math333")) {
					            if ((requirement("Math332") == "sem5"))
					                return alert("Math332 prereq for 333");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math333")) {
					            if ((requirement("Math332") == "sem6"))
					                return alert("Math332 prereq for 333");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math333")) {
					            if ((requirement("Math332") == "sem7"))
					                return alert("Math332 prereq for 333");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math333")) {
					            if ((requirement("Math332") == "sem8"))
					                return alert("Math332 prereq for 333");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math333")) {
					            if ((requirement("Math332") == "sem9"))
					                return alert("Math332 prereq for 333");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math333")) {
					            if ((requirement("Math332") == "sem10"))
					                return alert("Math332 prereq for 333");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math333")) {
					            if ((requirement("Math332") == "sem11"))
					                return alert("Math332 prereq for 333");
					        }
					    }
					    // 334

					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math211") == "sem3"))
					                return alert("211 prereq for 334");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math211") == "sem4"))
					                return alert("211 prereq for 334");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math211") == "sem5"))
					                return alert("211 prereq for 334");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math211") == "sem6"))
					                return alert("211 prereq for 334");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math211") == "sem7"))
					                return alert("211 prereq for 334");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math211") == "sem8"))
					                return alert("211 prereq for 334");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math211") == "sem9"))
					                return alert("211 prereq for 334");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math211") == "sem10"))
					                return alert("211 prereq for 334");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math211") == "sem11"))
					                return alert("211 prereq for 334");
					        }
					    }
					    // 335

					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math335")) {
					            if ((requirement("Math334") == "sem3"))
					                return alert("334 prereq for 335");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math335")) {
					            if ((requirement("Math334") == "sem4"))
					                return alert("334 prereq for 335");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math335")) {
					            if ((requirement("Math334") == "sem5"))
					                return alert("334 prereq for 335");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math335")) {
					            if ((requirement("Math334") == "sem6"))
					                return alert("334 prereq for 335");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math335")) {
					            if ((requirement("Math334") == "sem7"))
					                return alert("334 prereq for 335");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math335")) {
					            if ((requirement("Math334") == "sem8"))
					                return alert("334 prereq for 335");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math335")) {
					            if ((requirement("Math334") == "sem9"))
					                return alert("334 prereq for 335");
					        }
					    }

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math335")) {
					            if ((requirement("Math334") == "sem10"))
					                return alert("334 prereq for 335");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math335")) {
					            if ((requirement("Math334") == "sem11"))
					                return alert("334 prereq for 335");
					        }
					    }
					    // 336

					    if (box == "sem1" || box == "sem2")

					    {
					        if ((course == "Math336")) {
					            if ((requirement("Math211") == "sem3") || (requirement("Math212") == "sem3"))
					                return alert("211 and 212 prereq for 336");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math336")) {
					            if ((requirement("Math112") == "sem4") || (requirement("Math212") == "sem4"))
					                return alert("211 and 212 prereq for 336");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math336")) {
					            if ((requirement("Math112") == "sem5") || (requirement("Math212") == "sem5"))
					                return alert("211 and 212 prereq for 336");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math336")) {
					            if ((requirement("Math112") == "sem6") || (requirement("Math212") == "sem6"))
					                return alert("211 and 212 prereq for 336");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math336")) {
					            if ((requirement("Math112") == "sem7") || (requirement("Math212") == "sem7"))
					                return alert("211 and 212 prereq for 336");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math336")) {
					            if ((requirement("Math112") == "sem8") || (requirement("Math212") == "sem8"))
					                return alert("211 and 212 prereq for 336");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math336")) {
					            if ((requirement("Math112") == "sem9") || (requirement("Math212") == "sem9"))
					                return alert("211 and 212 prereq for 336");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math336")) {
					            if ((requirement("Math112") == "sem10") || (requirement("Math212") == "sem10"))
					                return alert("211 and 212 prereq for 336");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math336")) {
					            if ((requirement("Math112") == "sem11") || (requirement("Math212") == "sem11"))
					                return alert("211 and 212 prereq for 336");
					        }
					    }
					    // 451

					    if (box == "sem1" || box == "sem2" || box == "sem3")

					    {
					        if ((course == "Math451")) {
					            if ((requirement("Math211") == "sem4") || (requirement("Math212") == "sem4") || (requirement("Math215") == "sem4") ||
					                (requirement("Math219") == "sem4") && (requirement("Math221") == "sem4") && (requirement("Math223") == "sem4") && (requirement("Math225") == "sem4") && (requirement("Math227") == "sem4") && (requirement("Math229") == "sem4") && (requirement("Math319") == "sem4") && (requirement("Math327") == "sem4") && (requirement("Math329") == "sem4") && (requirement("Math330") == "sem4") && (requirement("Math332") == "sem4") && (requirement("Math333") == "sem4") && (requirement("Math334") == "sem4") && (requirement("Math335") == "sem4") && (requirement("Math336") == "sem4") && (requirement("Math400") == "sem4")
					            )
					                return alert("211,212, 215 and one above 215 prereq for 451");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4")

					    {
					        if ((course == "Math451")) {
					            if ((requirement("Math211") == "sem5") || (requirement("Math212") == "sem5") || (requirement("Math215") == "sem5") ||
					                (requirement("Math219") == "sem5") && (requirement("Math221") == "sem5") && (requirement("Math223") == "sem5") && (requirement("Math225") == "sem5") && (requirement("Math227") == "sem5") && (requirement("Math229") == "sem5") && (requirement("Math319") == "sem5") && (requirement("Math327") == "sem5") && (requirement("Math329") == "sem5") && (requirement("Math330") == "sem5") && (requirement("Math332") == "sem5") && (requirement("Math333") == "sem5") && (requirement("Math334") == "sem5") && (requirement("Math335") == "sem5") && (requirement("Math336") == "sem5") && (requirement("Math400") == "sem5")
					            )
					                return alert("211,212, 215 and one above 215 prereq for 451");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math451")) {
					            if ((requirement("Math211") == "sem6") || (requirement("Math212") == "sem6") || (requirement("Math215") == "sem6") ||
					                (requirement("Math219") == "sem6") && (requirement("Math221") == "sem6") && (requirement("Math223") == "sem6") && (requirement("Math225") == "sem6") && (requirement("Math227") == "sem6") && (requirement("Math229") == "sem6") && (requirement("Math319") == "sem6") && (requirement("Math327") == "sem6") && (requirement("Math329") == "sem6") && (requirement("Math330") == "sem6") && (requirement("Math332") == "sem6") && (requirement("Math333") == "sem6") && (requirement("Math334") == "sem6") && (requirement("Math335") == "sem6") && (requirement("Math336") == "sem6") && (requirement("Math400") == "sem6")
					            )
					                return alert("211,212, 215 and one above 215 prereq for 451");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math451")) {
					            if ((requirement("Math211") == "sem7") || (requirement("Math212") == "sem7") || (requirement("Math215") == "sem7") ||
					                (requirement("Math219") == "sem7") && (requirement("Math221") == "sem7") && (requirement("Math223") == "sem7") && (requirement("Math225") == "sem7") && (requirement("Math227") == "sem7") && (requirement("Math229") == "sem7") && (requirement("Math319") == "sem7") && (requirement("Math327") == "sem7") && (requirement("Math329") == "sem7") && (requirement("Math330") == "sem7") && (requirement("Math332") == "sem7") && (requirement("Math333") == "sem7") && (requirement("Math334") == "sem7") && (requirement("Math335") == "sem7") && (requirement("Math336") == "sem7") && (requirement("Math400") == "sem7")
					            )
					                return alert("211,212, 215 and one above 215 prereq for 451");
					        }
					    }




					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math451")) {
					            if ((requirement("Math211") == "sem8") || (requirement("Math212") == "sem8") || (requirement("Math215") == "sem8") ||
					                (requirement("Math219") == "sem8") && (requirement("Math221") == "sem8") && (requirement("Math223") == "sem8") && (requirement("Math225") == "sem8") && (requirement("Math227") == "sem8") && (requirement("Math229") == "sem8") && (requirement("Math319") == "sem8") && (requirement("Math327") == "sem8") && (requirement("Math329") == "sem8") && (requirement("Math330") == "sem8") && (requirement("Math332") == "sem8") && (requirement("Math333") == "sem8") && (requirement("Math334") == "sem8") && (requirement("Math335") == "sem8") && (requirement("Math336") == "sem8") && (requirement("Math400") == "sem8")
					            )
					                return alert("211,212, 215 and one above 215 prereq for 451");
					        }
					    }




					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math451")) {
					            if ((requirement("Math211") == "sem9") || (requirement("Math212") == "sem9") || (requirement("Math215") == "sem9") ||
					                (requirement("Math219") == "sem9") && (requirement("Math221") == "sem9") && (requirement("Math223") == "sem9") && (requirement("Math225") == "sem9") && (requirement("Math227") == "sem9") && (requirement("Math229") == "sem9") && (requirement("Math319") == "sem9") && (requirement("Math327") == "sem9") && (requirement("Math329") == "sem9") && (requirement("Math330") == "sem9") && (requirement("Math332") == "sem9") && (requirement("Math333") == "sem9") && (requirement("Math334") == "sem9") && (requirement("Math335") == "sem9") && (requirement("Math336") == "sem9") && (requirement("Math400") == "sem9")
					            )
					                return alert("211,212, 215 and one above 215 prereq for 451");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math451")) {
					            if ((requirement("Math211") == "sem10") || (requirement("Math212") == "sem10") || (requirement("Math215") == "sem10") ||
					                (requirement("Math219") == "sem10") && (requirement("Math221") == "sem10") && (requirement("Math223") == "sem10") && (requirement("Math225") == "sem10") && (requirement("Math227") == "sem10") && (requirement("Math229") == "sem10") && (requirement("Math319") == "sem10") && (requirement("Math327") == "sem10") && (requirement("Math329") == "sem10") && (requirement("Math330") == "sem10") && (requirement("Math332") == "sem10") && (requirement("Math333") == "sem10") && (requirement("Math334") == "sem10") && (requirement("Math335") == "sem10") && (requirement("Math336") == "sem10") && (requirement("Math400") == "sem10")
					            )
					                return alert("211,212, 215 and one above 215 prereq for 451");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math451")) {
					            if ((requirement("Math211") == "sem11") || (requirement("Math212") == "sem11") || (requirement("Math215") == "sem11") ||
					                (requirement("Math219") == "sem11") && (requirement("Math221") == "sem11") && (requirement("Math223") == "sem11") && (requirement("Math225") == "sem11") && (requirement("Math227") == "sem11") && (requirement("Math229") == "sem11") && (requirement("Math319") == "sem11") && (requirement("Math327") == "sem11") && (requirement("Math329") == "sem11") && (requirement("Math330") == "sem11") && (requirement("Math332") == "sem11") && (requirement("Math333") == "sem11") && (requirement("Math334") == "sem11") && (requirement("Math335") == "sem11") && (requirement("Math336") == "sem11") && (requirement("Math400") == "sem11")
					            )
					                return alert("211,212, 215 and one above 215 prereq for 451");
					        }
					    }

					    // 452

					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5")

					    {
					        if ((course == "Math452")) {
					            if ((requirement("Math451") == "sem6"))
					                return alert("451 prereq for 452");
					        }
					    }



					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6")

					    {
					        if ((course == "Math452")) {
					            if ((requirement("Math451") == "sem7"))
					                return alert("451 prereq for 452");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7")

					    {
					        if ((course == "Math452")) {
					            if ((requirement("Math451") == "sem8"))
					                return alert("451 prereq for 452");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8")

					    {
					        if ((course == "Math452")) {
					            if ((requirement("Math451") == "sem9"))
					                return alert("451 prereq for 452");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9")

					    {
					        if ((course == "Math452")) {
					            if ((requirement("Math451") == "sem10"))
					                return alert("451 prereq for 452");
					        }
					    }


					    if (box == "sem1" || box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10")

					    {
					        if ((course == "Math452")) {
					            if ((requirement("Math451") == "sem11"))
					                return alert("451 prereq for 452");
					        }
					    }
					    //---------------------------------------------------------------------------------------------------
					    // Math after
					    //---------------------------------------------------------------------------------------------------
					    // 107
					    if (box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math107")) {
					            if ((requirement("Math108") == "sem2"))
					                return alert("107 comes b4 108");
					        }
					    }


					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math107")) {
					            if ((requirement("Math108") == "sem3"))
					                return alert("107 comes b4 108");
					        }
					    }


					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math107")) {
					            if ((requirement("Math108") == "sem4"))
					                return alert("107 comes b4 108");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math107")) {
					            if ((requirement("Math108") == "sem5"))
					                return alert("107 comes b4 108");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math107")) {
					            if ((requirement("Math108") == "sem6"))
					                return alert("107 comes b4 108");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math107")) {
					            if ((requirement("Math108") == "sem7"))
					                return alert("107 comes b4 108");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math107")) {
					            if ((requirement("Math108") == "sem8"))
					                return alert("107 comes b4 108");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math107")) {
					            if ((requirement("Math108") == "sem9"))
					                return alert("107 comes b4 108");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math107")) {
					            if ((requirement("Math108") == "sem10"))
					                return alert("107 comes b4 108");
					        }
					    }

					    // 108
					    if (box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108")) {
					            if ((requirement("Math211") == "sem2"))
					                return alert("108 comes b4 211");
					        }
					    }


					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108")) {
					            if ((requirement("Math211") == "sem3"))
					                return alert("108 comes b4 211");
					        }
					    }



					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108")) {
					            if ((requirement("Math211") == "sem4"))
					                return alert("108 comes b4 211");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108")) {
					            if ((requirement("Math211") == "sem5"))
					                return alert("108 comes b4 211");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108")) {
					            if ((requirement("Math211") == "sem6"))
					                return alert("108 comes b4 211");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108")) {
					            if ((requirement("Math211") == "sem7"))
					                return alert("108 comes b4 211");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108")) {
					            if ((requirement("Math211") == "sem8"))
					                return alert("108 comes b4 211");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108")) {
					            if ((requirement("Math211") == "sem9"))
					                return alert("108 comes b4 211");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math108")) {
					            if ((requirement("Math211") == "sem10"))
					                return alert("108 comes b4 211");
					        }
					    }

					    // 108 or 111
					    if (box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108") || ((course == "Math111"))) {
					            if ((requirement("Math112") == "sem1"))
					                return alert("108 and 111 are comes b4 112");
					        }
					    }


					    if (box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108") || ((course == "Math111"))) {
					            if ((requirement("Math112") == "sem2"))
					                return alert("108 and 111 are comes b4 112");
					        }
					    }



					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108") || ((course == "Math111"))) {
					            if ((requirement("Math112") == "sem3"))
					                return alert("108 and 111 are comes b4 112");
					        }
					    }


					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108") || ((course == "Math111"))) {
					            if ((requirement("Math112") == "sem4"))
					                return alert("108 and 111 are comes b4 112");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108") || ((course == "Math111"))) {
					            if ((requirement("Math112") == "sem5"))
					                return alert("108 and 111 are comes b4 112");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108") || ((course == "Math111"))) {
					            if ((requirement("Math112") == "sem6"))
					                return alert("108 and 111 are comes b4 112");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108") || ((course == "Math111"))) {
					            if ((requirement("Math112") == "sem7"))
					                return alert("108 and 111 are comes b4 112");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108") || ((course == "Math111"))) {
					            if ((requirement("Math112") == "sem8"))
					                return alert("108 and 111 are comes b4 112");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math108") || ((course == "Math111"))) {
					            if ((requirement("Math112") == "sem9"))
					                return alert("108 and 111 are comes b4 112");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math108") || ((course == "Math111"))) {
					            if ((requirement("Math112") == "sem10"))
					                return alert("108 and 111 are comes b4 112");
					        }
					    }

					    // 112
					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math211") == "sem3") || (requirement("Math212") == "sem3"))
					                return alert("112 comes b4 211 or 212");
					        }
					    }

					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math211") == "sem4") || (requirement("Math212") == "sem4"))
					                return alert("112 comes b4 211 or 212");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math211") == "sem5") || (requirement("Math212") == "sem5"))
					                return alert("112 comes b4 211 or 212");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math211") == "sem6") || (requirement("Math212") == "sem6"))
					                return alert("112 comes b4 211 or 212");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math211") == "sem7") || (requirement("Math212") == "sem7"))
					                return alert("112 comes b4 211 or 212");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math211") == "sem8") || (requirement("Math212") == "sem8"))
					                return alert("112 comes b4 211 or 212");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math211") == "sem9") || (requirement("Math212") == "sem9"))
					                return alert("112 comes b4 211 or 212");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math211") == "sem10") || (requirement("Math212") == "sem10"))
					                return alert("112 comes b4 211 or 212");
					        }
					    }
					    // 112 or 108
					    if (box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "Math108"))) {
					            if ((requirement("Math215") == "sem2"))
					                return alert("112 or 108 comes b4 215");
					        }
					    }


					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "Math108"))) {
					            if ((requirement("Math215") == "sem3"))
					                return alert("112 or 108 comes b4 215");
					        }
					    }


					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "Math108"))) {
					            if ((requirement("Math215") == "sem4"))
					                return alert("112 or 108 comes b4 215");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "Math108"))) {
					            if ((requirement("Math215") == "sem5"))
					                return alert("112 or 108 comes b4 215");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "Math108"))) {
					            if ((requirement("Math215") == "sem6"))
					                return alert("112 or 108 comes b4 215");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "Math108"))) {
					            if ((requirement("Math215") == "sem7"))
					                return alert("112 or 108 comes b4 215");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "Math108"))) {
					            if ((requirement("Math215") == "sem8"))
					                return alert("112 or 108 comes b4 215");
					        }
					    }

					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "Math108"))) {
					            if ((requirement("Math215") == "sem9"))
					                return alert("112 or 108 comes b4 215");
					        }
					    }

					    if (box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "Math108"))) {
					            if ((requirement("Math215") == "sem10"))
					                return alert("112 or 108 comes b4 215");
					        }
					    }
					    // 112
					    if (box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math221") == "sem2"))
					                return alert("112 comes b4 221");
					        }
					    }

					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math221") == "sem3"))
					                return alert("112 comes b4 221");
					        }
					    }


					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math221") == "sem4"))
					                return alert("112 comes b4 221");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math221") == "sem5"))
					                return alert("112 comes b4 221");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math221") == "sem6"))
					                return alert("112 comes b4 221");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math221") == "sem7"))
					                return alert("112 comes b4 221");
					        }
					    }

					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math221") == "sem8"))
					                return alert("112 comes b4 221");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math221") == "sem9"))
					                return alert("112 comes b4 221");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math221") == "sem10"))
					                return alert("112 comes b4 221");
					        }
					    }

					    // 211 or 215
					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math215"))) {
					            if ((requirement("Math223") == "sem3"))
					                return alert("211 or 215 comes b4 223");
					        }
					    }


					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math215"))) {
					            if ((requirement("Math223") == "sem4"))
					                return alert("211 or 215 comes b4 223");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math215"))) {
					            if ((requirement("Math223") == "sem5"))
					                return alert("211 or 215 comes b4 223");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math215"))) {
					            if ((requirement("Math223") == "sem6"))
					                return alert("211 or 215 comes b4 223");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math215"))) {
					            if ((requirement("Math223") == "sem7"))
					                return alert("211 or 215 comes b4 223");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math215"))) {
					            if ((requirement("Math223") == "sem8"))
					                return alert("211 or 215 comes b4 223");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math215"))) {
					            if ((requirement("Math223") == "sem9"))
					                return alert("211 or 215 comes b4 223");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math215"))) {
					            if ((requirement("Math223") == "sem10"))
					                return alert("211 or 215 comes b4 223");
					        }
					    }
					    // 112 and CS100
					    if (box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "CS100"))) {
					            if ((requirement("Math225") == "sem2"))
					                return alert("112 and CS100 comes b4 225");
					        }
					    }


					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "CS100"))) {
					            if ((requirement("Math225") == "sem3"))
					                return alert("112 and CS100 comes b4 225");
					        }
					    }


					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "CS100"))) {
					            if ((requirement("Math225") == "sem4"))
					                return alert("112 and CS100 comes b4 225");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "CS100"))) {
					            if ((requirement("Math225") == "sem5"))
					                return alert("112 and CS100 comes b4 225");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "CS100"))) {
					            if ((requirement("Math225") == "sem6"))
					                return alert("112 and CS100 comes b4 225");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "CS100"))) {
					            if ((requirement("Math225") == "sem7"))
					                return alert("112 and CS100 comes b4 225");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "CS100"))) {
					            if ((requirement("Math225") == "sem8"))
					                return alert("112 and CS100 comes b4 225");
					        }
					    }

					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "CS100"))) {
					            if ((requirement("Math225") == "sem9"))
					                return alert("112 and CS100 comes b4 225");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math112") || ((course == "CS100"))) {
					            if ((requirement("Math225") == "sem10"))
					                return alert("112 and CS100 comes b4 225");
					        }
					    }
					    // 211 and 212
					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math227") == "sem3"))
					                return alert("211 and 212 comes b4 227");
					        }
					    }


					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math227") == "sem4"))
					                return alert("211 and 212 comes b4 227");
					        }
					    }



					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math227") == "sem5"))
					                return alert("211 and 212 comes b4 227");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math227") == "sem6"))
					                return alert("211 and 212 comes b4 227");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math227") == "sem7"))
					                return alert("211 and 212 comes b4 227");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math227") == "sem8"))
					                return alert("211 and 212 comes b4 227");
					        }
					    }

					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math227") == "sem9"))
					                return alert("211 and 212 comes b4 227");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math227") == "sem10"))
					                return alert("211 and 212 comes b4 227");
					        }
					    }

					    // 112
					    if (box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math229") == "sem2"))
					                return alert("112 comes b4 229");
					        }
					    }

					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math229") == "sem3"))
					                return alert("112 comes b4 229");
					        }
					    }


					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math229") == "sem4"))
					                return alert("112 comes b4 229");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math229") == "sem5"))
					                return alert("112 comes b4 229");
					        }
					    }

					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math229") == "sem6"))
					                return alert("112 comes b4 229");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math229") == "sem7"))
					                return alert("112 comes b4 229");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math229") == "sem8"))
					                return alert("112 comes b4 229");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math229") == "sem9"))
					                return alert("112 comes b4 229");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math112")) {
					            if ((requirement("Math229") == "sem10"))
					                return alert("112 comes b4 229");
					        }
					    }


					    // CS100,112 and 211
					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "CS100") || ((course == "Math112")) || ((course == "Math211"))) {
					            if ((requirement("Math327") == "sem4"))
					                return alert("CS100,112 and 211 comes b4 327");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "CS100") || ((course == "Math112")) || ((course == "Math211"))) {
					            if ((requirement("Math327") == "sem5"))
					                return alert("CS100,112 and 211 comes b4 327");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "CS100") || ((course == "Math112")) || ((course == "Math211"))) {
					            if ((requirement("Math327") == "sem6"))
					                return alert("CS100,112 and 211 comes b4 327");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "CS100") || ((course == "Math112")) || ((course == "Math211"))) {
					            if ((requirement("Math327") == "sem7"))
					                return alert("CS100,112 and 211 comes b4 327");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "CS100") || ((course == "Math112")) || ((course == "Math211"))) {
					            if ((requirement("Math327") == "sem8"))
					                return alert("CS100,112 and 211 comes b4 327");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "CS100") || ((course == "Math112")) || ((course == "Math211"))) {
					            if ((requirement("Math327") == "sem9"))
					                return alert("CS100,112 and 211 comes b4 327");
					        }
					    }

					    if (box == "sem11")

					    {
					        if ((course == "CS100") || ((course == "Math112")) || ((course == "Math211"))) {
					            if ((requirement("Math327") == "sem10"))
					                return alert("CS100,112 and 211 comes b4 327");
					        }
					    }

					    // 211 and 229
					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math229"))) {
					            if ((requirement("Math329") == "sem3"))
					                return alert("211 and 229 comes b4 329");
					        }
					    }


					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math229"))) {
					            if ((requirement("Math329") == "sem4"))
					                return alert("211 and 229 comes b4 329");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math229"))) {
					            if ((requirement("Math329") == "sem5"))
					                return alert("211 and 229 comes b4 329");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math229"))) {
					            if ((requirement("Math329") == "sem6"))
					                return alert("211 and 229 comes b4 329");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math229"))) {
					            if ((requirement("Math329") == "sem7"))
					                return alert("211 and 229 comes b4 329");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math229"))) {
					            if ((requirement("Math329") == "sem8"))
					                return alert("211 and 229 comes b4 329");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math229"))) {
					            if ((requirement("Math329") == "sem9"))
					                return alert("211 and 229 comes b4 329");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math229"))) {
					            if ((requirement("Math329") == "sem10"))
					                return alert("211 and 229 comes b4 329");
					        }
					    }
					    // 211 and 212
					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math330") == "sem3"))
					                return alert("211 and 212 comes b4 330");
					        }
					    }

					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math330") == "sem4"))
					                return alert("211 and 212 comes b4 330");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math330") == "sem5"))
					                return alert("211 and 212 comes b4 330");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math330") == "sem6"))
					                return alert("211 and 212 comes b4 330");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math330") == "sem7"))
					                return alert("211 and 212 comes b4 330");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math330") == "sem8"))
					                return alert("211 and 212 comes b4 330");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math330") == "sem9"))
					                return alert("211 and 212 comes b4 330");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math330") == "sem10"))
					                return alert("211 and 212 comes b4 330");
					        }
					    }



					    // 211
					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math332") == "sem3"))
					                return alert("211 comes b4 332");
					        }
					    }

					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math332") == "sem4"))
					                return alert("211 comes b4 332");
					        }
					    }

					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math332") == "sem5"))
					                return alert("211 comes b4 332");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math332") == "sem6"))
					                return alert("211 comes b4 332");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math332") == "sem7"))
					                return alert("211 comes b4 332");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math332") == "sem8"))
					                return alert("211 comes b4 332");
					        }
					    }

					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math332") == "sem9"))
					                return alert("211 comes b4 332");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math332") == "sem10"))
					                return alert("211 comes b4 332");
					        }
					    }

					    // 332
					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math333") == "sem4"))
					                return alert("332 comes b4 333");
					        }
					    }

					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math333") == "sem5"))
					                return alert("332 comes b4 333");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math333") == "sem6"))
					                return alert("332 comes b4 333");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math333") == "sem7"))
					                return alert("332 comes b4 333");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math333") == "sem8"))
					                return alert("332 comes b4 333");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math333") == "sem9"))
					                return alert("332 comes b4 333");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math332")) {
					            if ((requirement("Math333") == "sem10"))
					                return alert("332 comes b4 333");
					        }
					    }


					    // 211
					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math334") == "sem4"))
					                return alert("211 comes b4 334");
					        }
					    }

					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math334") == "sem5"))
					                return alert("211 comes b4 334");
					        }
					    }


					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math334") == "sem6"))
					                return alert("211 comes b4 334");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math334") == "sem7"))
					                return alert("211 comes b4 334");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math334") == "sem8"))
					                return alert("211 comes b4 334");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math334") == "sem9"))
					                return alert("211 comes b4 334");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math211")) {
					            if ((requirement("Math334") == "sem10"))
					                return alert("211 comes b4 334");
					        }
					    }

					    // 334
					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math335") == "sem4"))
					                return alert("334 comes b4 335");
					        }
					    }

					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math335") == "sem5"))
					                return alert("334 comes b4 335");
					        }
					    }



					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math335") == "sem6"))
					                return alert("334 comes b4 335");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math335") == "sem7"))
					                return alert("334 comes b4 335");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math335") == "sem8"))
					                return alert("334 comes b4 335");
					        }
					    }


					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math335") == "sem9"))
					                return alert("334 comes b4 335");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math334")) {
					            if ((requirement("Math335") == "sem10"))
					                return alert("334 comes b4 335");
					        }
					    }


					    // 211 and 212
					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math336") == "sem4"))
					                return alert("211 and 212 comes b4 336");
					        }
					    }

					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math336") == "sem5"))
					                return alert("211 and 212 comes b4 336");
					        }
					    }



					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math336") == "sem6"))
					                return alert("211 and 212 comes b4 336");
					        }
					    }


					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math336") == "sem7"))
					                return alert("211 and 212 comes b4 336");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math336") == "sem8"))
					                return alert("211 and 212 comes b4 336");
					        }
					    }

					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math336") == "sem9"))
					                return alert("211 and 212 comes b4 336");
					        }
					    }

					    if (box == "sem11")

					    {
					        if ((course == "Math211") || ((course == "Math212"))) {
					            if ((requirement("Math336") == "sem10"))
					                return alert("211 and 212 comes b4 336");
					        }
					    }
					    // 211,212,215 and one above 215
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if (((course == "Math211") || (course == "Math212") || (course == "Math215")) || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math400")

					        ) {
					            if ((requirement("Math451") == "sem6"))
					                return alert("211, 212, 215 and another course above 215 comes b4 451");
					        }
					    }

					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if (((course == "Math211") || (course == "Math212") || (course == "Math215")) || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math400")

					        ) {
					            if ((requirement("Math451") == "sem7"))
					                return alert("211, 212, 215 and another course above 215 comes b4 451");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if (((course == "Math211") || (course == "Math212") || (course == "Math215")) || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math400")

					        ) {
					            if ((requirement("Math451") == "sem8"))
					                return alert("211, 212, 215 and another course above 215 comes b4 451");
					        }
					    }

					    if (box == "sem10" || box == "sem11")

					    {
					        if (((course == "Math211") || (course == "Math212") || (course == "Math215")) || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math400")

					        ) {
					            if ((requirement("Math451") == "sem9"))
					                return alert("211, 212, 215 and another course above 215 comes b4 451");
					        }
					    }


					    if (box == "sem11")

					    {
					        if (((course == "Math211") || (course == "Math212") || (course == "Math215")) || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math400")

					        ) {
					            if ((requirement("Math451") == "sem10"))
					                return alert("211, 212, 215 and another course above 215 comes b4 451");
					        }
					    }


					    // 451
					    if (box == "sem9" || box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math451")) {
					            if ((requirement("Math452") == "sem8"))
					                return alert("451 comes b4 452");
					        }
					    }

					    if (box == "sem10" || box == "sem11")

					    {
					        if ((course == "Math451")) {
					            if ((requirement("Math452") == "sem9"))
					                return alert("451 comes b4 452");
					        }
					    }


					    if (box == "sem11")

					    {
					        if ((course == "Math451")) {
					            if ((requirement("Math452") == "sem10"))
					                return alert("451 comes b4 452");
					        }
					    }

					    //-------------------------------------------------------------------------------------------------------------------------------------------
					    // Math co-requisites a
					    //-------------------------------------------------------------------------------------------------------------------------------------------

					    //  DRAGGIng upper level courses to where lower level coreqs courses are

					    // 107,108,111,112,211,215,221,223,225,227,229,327,329,330,332,333,334,335,336,451,452


					    // 107
					    // box 1
					    if (box == "sem1")

					    {

					        if (
					            (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math107") == "sem1"))

					                return alert("Cant take this course together with math 107");
					        }
					    }

					    // box 3
					    if (box == "sem3")

					    {

					        if (
					            (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math107") == "sem3"))

					                return alert("Cant take this course together with math 107");
					        }
					    }



					    if (box == "sem4")

					    {

					        if (
					            (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math107") == "sem4"))

					                return alert("Cant take this course together with math 107");
					        }
					    }


					    if (box == "sem6")

					    {

					        if (
					            (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math107") == "sem6"))

					                return alert("Cant take this course together with math 107");
					        }
					    }


					    if (box == "sem7")

					    {

					        if (
					            (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math107") == "sem7"))

					                return alert("Cant take this course together with math 107");
					        }
					    }


					    if (box == "sem9")

					    {

					        if (
					            (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math107") == "sem9"))

					                return alert("Cant take this course together with math 107");
					        }
					    }

					    if (box == "sem10")

					    {

					        if (
					            (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math107") == "sem10"))

					                return alert("Cant take this course together with math 107");
					        }
					    }

					    // 108
					    //box2
					    if (box == "sem2")

					    {

					        if (
					            (course == "Math107") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math108") == "sem2"))

					                return alert("Cant take this course together with math 108");
					        }


					    }

					    //box3
					    if (box == "sem3")

					    {

					        if (
					            (course == "Math107") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math108") == "sem3"))

					                return alert("Cant take this course together with math 108");
					        }


					    }


					    if (box == "sem5")

					    {

					        if (
					            (course == "Math107") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math108") == "sem5"))

					                return alert("Cant take this course together with math 108");
					        }


					    }


					    if (box == "sem6")

					    {

					        if (
					            (course == "Math107") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math108") == "sem6"))

					                return alert("Cant take this course together with math 108");
					        }


					    }


					    if (box == "sem8")

					    {

					        if (
					            (course == "Math107") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math108") == "sem8"))

					                return alert("Cant take this course together with math 108");
					        }


					    }


					    if (box == "sem9")

					    {

					        if (
					            (course == "Math107") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math108") == "sem9"))

					                return alert("Cant take this course together with math 108");
					        }


					    }


					    if (box == "sem11")

					    {

					        if (
					            (course == "Math107") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math108") == "sem11"))

					                return alert("Cant take this course together with math 108");
					        }

					    }


					    // 111
					    //box1
					    if (box == "sem1")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math111") == "sem1"))

					                return alert("Cant take this course together with math 111");
					        }


					    }

					    //box2
					    if (box == "sem2")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math111") == "sem2"))

					                return alert("Cant take this course together with math 111");
					        }


					    }

					    //box3
					    if (box == "sem3")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math111") == "sem3"))

					                return alert("Cant take this course together with math 111");
					        }


					    }


					    if (box == "sem4")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math111") == "sem4"))

					                return alert("Cant take this course together with math 111");
					        }


					    }


					    if (box == "sem5")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math111") == "sem5"))

					                return alert("Cant take this course together with math 111");
					        }


					    }


					    if (box == "sem6")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math111") == "sem6"))

					                return alert("Cant take this course together with math 111");
					        }


					    }


					    if (box == "sem7")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math111") == "sem7"))

					                return alert("Cant take this course together with math 111");
					        }


					    }


					    if (box == "sem8")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math111") == "sem8"))

					                return alert("Cant take this course together with math 111");
					        }


					    }


					    if (box == "sem9")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math111") == "sem9"))

					                return alert("Cant take this course together with math 111");
					        }


					    }


					    if (box == "sem10")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math111") == "sem10"))

					                return alert("Cant take this course together with math 111");
					        }


					    }


					    if (box == "sem11")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math112") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math111") == "sem11"))

					                return alert("Cant take this course together with math 111");
					        }


					    }
					    // 112
					    //box1
					    if (box == "sem1")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math112") == "sem1"))

					                return alert("Cant take this course together with math 112");
					        }


					    }

					    //box2
					    if (box == "sem2")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math112") == "sem2"))

					                return alert("Cant take this course together with math 112");
					        }


					    }

					    //box3
					    if (box == "sem3")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math112") == "sem3"))

					                return alert("Cant take this course together with math 112");
					        }


					    }



					    if (box == "sem4")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math112") == "sem4"))

					                return alert("Cant take this course together with math 112");
					        }


					    }


					    if (box == "sem5")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math112") == "sem5"))

					                return alert("Cant take this course together with math 112");
					        }


					    }


					    if (box == "sem6")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math112") == "sem6"))

					                return alert("Cant take this course together with math 112");
					        }


					    }


					    if (box == "sem7")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math112") == "sem7"))

					                return alert("Cant take this course together with math 112");
					        }


					    }

					    if (box == "sem8")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math112") == "sem8"))

					                return alert("Cant take this course together with math 112");
					        }


					    }


					    if (box == "sem9")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math112") == "sem9"))

					                return alert("Cant take this course together with math 112");
					        }


					    }


					    if (box == "sem10")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math112") == "sem10"))

					                return alert("Cant take this course together with math 112");
					        }


					    }


					    if (box == "sem11")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math211") || (course == "Math212") || (course == "Math215") || (course == "Math219") || (course == "Math221") || (course == "Math223") || (course == "Math225") || (course == "Math227") || (course == "Math229") || (course == "Math319") || (course == "Math327") || (course == "Math329") || (course == "Math330") || (course == "Math332") || (course == "Math333") || (course == "Math334") || (course == "Math335") || (course == "Math336") || (course == "Math451") || (course == "Math452")
					        ) {
					            if ((requirement("Math112") == "sem11"))

					                return alert("Cant take this course together with math 112");
					        }


					    }

					    // 211
					    //box1
					    if (box == "sem1")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math211") == "sem1"))

					                return alert("Cant take this course together with math 211");
					        }

					    }

					    //box2
					    if (box == "sem3")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math211") == "sem3"))

					                return alert("Cant take this course together with math 211");
					        }

					    }



					    if (box == "sem4")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math211") == "sem4"))

					                return alert("Cant take this course together with math 211");
					        }

					    }



					    if (box == "sem5")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math211") == "sem5"))

					                return alert("Cant take this course together with math 211");
					        }

					    }



					    if (box == "sem6")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math211") == "sem6"))

					                return alert("Cant take this course together with math 211");
					        }

					    }



					    if (box == "sem7")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math211") == "sem7"))

					                return alert("Cant take this course together with math 211");
					        }

					    }



					    if (box == "sem8")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math211") == "sem8"))

					                return alert("Cant take this course together with math 211");
					        }

					    }



					    if (box == "sem9")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math211") == "sem9"))

					                return alert("Cant take this course together with math 211");
					        }

					    }



					    if (box == "sem10")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math211") == "sem10"))

					                return alert("Cant take this course together with math 211");
					        }

					    }



					    if (box == "sem11")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math211") == "sem11"))

					                return alert("Cant take this course together with math 211");
					        }

					    }



					    // 212
					    //box1
					    if (box == "sem1")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math212") == "sem1"))

					                return alert("Cant take this course together with math 212");
					        }

					    }


					    if (box == "sem2")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math212") == "sem2"))

					                return alert("Cant take this course together with math 212");
					        }

					    }


					    if (box == "sem3")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math212") == "sem3"))

					                return alert("Cant take this course together with math 212");
					        }

					    }

					    if (box == "sem4")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math212") == "sem4"))

					                return alert("Cant take this course together with math 212");
					        }

					    }


					    if (box == "sem5")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math212") == "sem5"))

					                return alert("Cant take this course together with math 212");
					        }

					    }


					    if (box == "sem6")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math212") == "sem6"))

					                return alert("Cant take this course together with math 212");
					        }

					    }

					    if (box == "sem7")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math212") == "sem7"))

					                return alert("Cant take this course together with math 212");
					        }

					    }


					    if (box == "sem8")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math212") == "sem8"))

					                return alert("Cant take this course together with math 212");
					        }

					    }

					    if (box == "sem9")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math212") == "sem9"))

					                return alert("Cant take this course together with math 212");
					        }

					    }

					    if (box == "sem10")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math212") == "sem10"))

					                return alert("Cant take this course together with math 212");
					        }

					    }

					    if (box == "sem11")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math212") == "sem11"))

					                return alert("Cant take this course together with math 212");
					        }

					    }



					    // 215
					    //box1
					    if (box == "sem1")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math215") == "sem1"))

					                return alert("Cant take this course together with math 215");
					        }

					    }

					    //box2
					    if (box == "sem2")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math215") == "sem2"))

					                return alert("Cant take this course together with math 215");
					        }

					    }


					    //box3
					    if (box == "sem3")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math215") == "sem3"))

					                return alert("Cant take this course together with math 215");
					        }

					    }



					    if (box == "sem4")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math215") == "sem4"))

					                return alert("Cant take this course together with math 215");
					        }

					    }


					    if (box == "sem5")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math215") == "sem5"))

					                return alert("Cant take this course together with math 215");
					        }

					    }


					    if (box == "sem6")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math215") == "sem6"))

					                return alert("Cant take this course together with math 215");
					        }

					    }


					    if (box == "sem7")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math215") == "sem7"))

					                return alert("Cant take this course together with math 215");
					        }

					    }


					    if (box == "sem8")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math215") == "sem8"))

					                return alert("Cant take this course together with math 215");
					        }

					    }


					    if (box == "sem9")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math215") == "sem9"))

					                return alert("Cant take this course together with math 215");
					        }

					    }


					    if (box == "sem10")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math215") == "sem10"))

					                return alert("Cant take this course together with math 215");
					        }

					    }

					    if (box == "sem11")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math215") == "sem11"))

					                return alert("Cant take this course together with math 215");
					        }

					    }
					    // 221
					    //box1
					    if (box == "sem1")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math221") == "sem1"))

					                return alert("Cant take this course together with math 221");
					        }

					    }

					    //box2
					    if (box == "sem2")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math221") == "sem2"))

					                return alert("Cant take this course together with math 221");
					        }

					    }


					    //box3
					    if (box == "sem3")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math221") == "sem3"))

					                return alert("Cant take this course together with math 221");
					        }
					    }


					    if (box == "sem4")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math221") == "sem4"))

					                return alert("Cant take this course together with math 221");
					        }
					    }


					    if (box == "sem5")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math221") == "sem5"))

					                return alert("Cant take this course together with math 221");
					        }
					    }


					    if (box == "sem6")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math221") == "sem6"))

					                return alert("Cant take this course together with math 221");
					        }
					    }


					    if (box == "sem7")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math221") == "sem7"))

					                return alert("Cant take this course together with math 221");
					        }
					    }


					    if (box == "sem8")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math221") == "sem8"))

					                return alert("Cant take this course together with math 221");
					        }
					    }


					    if (box == "sem9")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math221") == "sem9"))

					                return alert("Cant take this course together with math 221");
					        }
					    }


					    if (box == "sem10")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math221") == "sem10"))

					                return alert("Cant take this course together with math 221");
					        }
					    }


					    if (box == "sem11")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math221") == "sem11"))

					                return alert("Cant take this course together with math 221");
					        }
					    }


					    // 223
					    //box1
					    if (box == "sem1")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215")
					        ) {
					            if ((requirement("Math223") == "sem1"))

					                return alert("Cant take this course together with math 223");
					        }

					    }

					    //box2
					    if (box == "sem2")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215")
					        ) {
					            if ((requirement("Math223") == "sem2"))

					                return alert("Cant take this course together with math 223");
					        }

					    }


					    //box3
					    if (box == "sem3")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215")
					        ) {
					            if ((requirement("Math223") == "sem3"))

					                return alert("Cant take this course together with math 223");
					        }

					    }


					    if (box == "sem4")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215")
					        ) {
					            if ((requirement("Math223") == "sem4"))

					                return alert("Cant take this course together with math 223");
					        }

					    }



					    if (box == "sem5")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215")
					        ) {
					            if ((requirement("Math223") == "sem5"))

					                return alert("Cant take this course together with math 223");
					        }

					    }


					    if (box == "sem6")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215")
					        ) {
					            if ((requirement("Math223") == "sem6"))

					                return alert("Cant take this course together with math 223");
					        }

					    }


					    if (box == "sem7")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215")
					        ) {
					            if ((requirement("Math223") == "sem7"))

					                return alert("Cant take this course together with math 223");
					        }

					    }


					    if (box == "sem8")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215")
					        ) {
					            if ((requirement("Math223") == "sem8"))

					                return alert("Cant take this course together with math 223");
					        }

					    }


					    if (box == "sem9")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215")
					        ) {
					            if ((requirement("Math223") == "sem9"))

					                return alert("Cant take this course together with math 223");
					        }

					    }


					    if (box == "sem10")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215")
					        ) {
					            if ((requirement("Math223") == "sem10"))

					                return alert("Cant take this course together with math 223");
					        }

					    }


					    if (box == "sem11")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112") || (course == "Math211") || (course == "Math215")
					        ) {
					            if ((requirement("Math223") == "sem11"))

					                return alert("Cant take this course together with math 223");
					        }

					    }
					    // 225
					    //box1
					    if (box == "sem1")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math225") == "sem1"))

					                return alert("Cant take this course together with math 225");
					        }

					    }

					    //box2
					    if (box == "sem2")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math225") == "sem2"))

					                return alert("Cant take this course together with math 225");
					        }

					    }


					    //box3
					    if (box == "sem3")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math225") == "sem3"))

					                return alert("Cant take this course together with math 225");
					        }
					    }


					    if (box == "sem4")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math225") == "sem4"))

					                return alert("Cant take this course together with math 225");
					        }
					    }

					    if (box == "sem5")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math225") == "sem5"))

					                return alert("Cant take this course together with math 225");
					        }
					    }



					    if (box == "sem6")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math225") == "sem6"))

					                return alert("Cant take this course together with math 225");
					        }
					    }


					    if (box == "sem7")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math225") == "sem7"))

					                return alert("Cant take this course together with math 225");
					        }
					    }


					    if (box == "sem8")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math225") == "sem8"))

					                return alert("Cant take this course together with math 225");
					        }
					    }


					    if (box == "sem9")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math225") == "sem9"))

					                return alert("Cant take this course together with math 225");
					        }
					    }


					    if (box == "sem10")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math225") == "sem10"))

					                return alert("Cant take this course together with math 225");
					        }
					    }

					    if (box == "sem11")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math225") == "sem11"))

					                return alert("Cant take this course together with math 225");
					        }
					    }

					    // 227
					    //box1
					    if (box == "sem1")

					    {

					        if (
					            (course == "CS100") || (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math227") == "sem1"))

					                return alert("Cant take this course together with math 227");
					        }

					    }

					    //box2
					    if (box == "sem2")

					    {

					        if (
					            (course == "CS100") || (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math227") == "sem2"))

					                return alert("Cant take this course together with math 227");
					        }

					    }


					    //box3
					    if (box == "sem3")

					    {

					        if (
					            (course == "CS100") || (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math227") == "sem3"))

					                return alert("Cant take this course together with math 227");
					        }

					    }

					    //box4
					    if (box == "sem4")

					    {

					        if (
					            (course == "CS100") || (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math227") == "sem4"))

					                return alert("Cant take this course together with math 227");
					        }

					    }

					    //box5
					    if (box == "sem5")

					    {

					        if (
					            (course == "CS100") || (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math227") == "sem5"))

					                return alert("Cant take this course together with math 227");
					        }

					    }


					    if (box == "sem6")

					    {

					        if (
					            (course == "CS100") || (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math227") == "sem6"))

					                return alert("Cant take this course together with math 227");
					        }

					    }


					    if (box == "sem7")

					    {

					        if (
					            (course == "CS100") || (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math227") == "sem7"))

					                return alert("Cant take this course together with math 227");
					        }

					    }


					    if (box == "sem8")

					    {

					        if (
					            (course == "CS100") || (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math227") == "sem8"))

					                return alert("Cant take this course together with math 227");
					        }

					    }


					    if (box == "sem9")

					    {

					        if (
					            (course == "CS100") || (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math227") == "sem9"))

					                return alert("Cant take this course together with math 227");
					        }

					    }


					    if (box == "sem10")

					    {

					        if (
					            (course == "CS100") || (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math227") == "sem10"))

					                return alert("Cant take this course together with math 227");
					        }

					    }

					    if (box == "sem11")

					    {

					        if (
					            (course == "CS100") || (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math227") == "sem11"))

					                return alert("Cant take this course together with math 227");
					        }

					    }
					    // 229
					    //box1
					    if (box == "sem1")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math229") == "sem1"))

					                return alert("Cant take this course together with math 229");
					        }

					    }

					    //box2
					    if (box == "sem2")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math229") == "sem2"))

					                return alert("Cant take this course together with math 229");
					        }

					    }

					    //box3
					    if (box == "sem3")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math229") == "sem3"))

					                return alert("Cant take this course together with math 229");
					        }

					    }


					    if (box == "sem4")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math229") == "sem4"))

					                return alert("Cant take this course together with math 229");
					        }

					    }


					    if (box == "sem5")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math229") == "sem5"))

					                return alert("Cant take this course together with math 229");
					        }

					    }



					    if (box == "sem6")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math229") == "sem6"))

					                return alert("Cant take this course together with math 229");
					        }

					    }


					    if (box == "sem7")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math229") == "sem7"))

					                return alert("Cant take this course together with math 229");
					        }

					    }

					    if (box == "sem8")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math229") == "sem8"))

					                return alert("Cant take this course together with math 229");
					        }

					    }


					    if (box == "sem9")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math229") == "sem9"))

					                return alert("Cant take this course together with math 229");
					        }

					    }


					    if (box == "sem10")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math229") == "sem10"))

					                return alert("Cant take this course together with math 229");
					        }

					    }

					    if (box == "sem11")

					    {

					        if (
					            (course == "Math107") || (course == "Math108") || (course == "Math111") || (course == "Math112")
					        ) {
					            if ((requirement("Math229") == "sem11"))

					                return alert("Cant take this course together with math 229");
					        }

					    }

					    // 327
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "CS100") || (course == "Math112") || (course == "Math211")
					        ) {
					            if ((requirement("Math327") == "sem1"))

					                return alert("Cant take this course together with math 327");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "CS100") || (course == "Math112") || (course == "Math211")
					        ) {
					            if ((requirement("Math327") == "sem2"))

					                return alert("Cant take this course together with math 327");
					        }
					    }


					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "CS100") || (course == "Math112") || (course == "Math211")
					        ) {
					            if ((requirement("Math327") == "sem3"))

					                return alert("Cant take this course together with math 327");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "CS100") || (course == "Math112") || (course == "Math211")
					        ) {
					            if ((requirement("Math327") == "sem4"))

					                return alert("Cant take this course together with math 327");
					        }
					    }


					    if (box == "sem5")

					    {
					        if (
					            (course == "CS100") || (course == "Math112") || (course == "Math211")
					        ) {
					            if ((requirement("Math327") == "sem5"))

					                return alert("Cant take this course together with math 327");
					        }
					    }



					    if (box == "sem6")

					    {
					        if (
					            (course == "CS100") || (course == "Math112") || (course == "Math211")
					        ) {
					            if ((requirement("Math327") == "sem6"))

					                return alert("Cant take this course together with math 327");
					        }
					    }


					    if (box == "sem7")

					    {
					        if (
					            (course == "CS100") || (course == "Math112") || (course == "Math211")
					        ) {
					            if ((requirement("Math327") == "sem7"))

					                return alert("Cant take this course together with math 327");
					        }
					    }



					    if (box == "sem8")

					    {
					        if (
					            (course == "CS100") || (course == "Math112") || (course == "Math211")
					        ) {
					            if ((requirement("Math327") == "sem8"))

					                return alert("Cant take this course together with math 327");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "CS100") || (course == "Math112") || (course == "Math211")
					        ) {
					            if ((requirement("Math327") == "sem9"))

					                return alert("Cant take this course together with math 327");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "CS100") || (course == "Math112") || (course == "Math211")
					        ) {
					            if ((requirement("Math327") == "sem10"))

					                return alert("Cant take this course together with math 327");
					        }
					    }

					    if (box == "sem11")

					    {
					        if (
					            (course == "CS100") || (course == "Math112") || (course == "Math211")
					        ) {
					            if ((requirement("Math327") == "sem11"))

					                return alert("Cant take this course together with math 327");
					        }
					    }

					    // 329
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math211") || (course == "Math229")
					        ) {
					            if ((requirement("Math329") == "sem1"))

					                return alert("Cant take this course together with math 329");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math211") || (course == "Math229")
					        ) {
					            if ((requirement("Math329") == "sem2"))

					                return alert("Cant take this course together with math 329");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math211") || (course == "Math229")
					        ) {
					            if ((requirement("Math329") == "sem3"))

					                return alert("Cant take this course together with math 329");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math211") || (course == "Math229")
					        ) {
					            if ((requirement("Math329") == "sem4"))

					                return alert("Cant take this course together with math 329");
					        }
					    }

					    //box5
					    if (box == "sem5")

					    {
					        if (
					            (course == "Math211") || (course == "Math229")
					        ) {
					            if ((requirement("Math329") == "sem5"))

					                return alert("Cant take this course together with math 329");
					        }
					    }


					    if (box == "sem6")

					    {
					        if (
					            (course == "Math211") || (course == "Math229")
					        ) {
					            if ((requirement("Math329") == "sem6"))

					                return alert("Cant take this course together with math 329");
					        }
					    }

					    if (box == "sem7")

					    {
					        if (
					            (course == "Math211") || (course == "Math229")
					        ) {
					            if ((requirement("Math329") == "sem7"))

					                return alert("Cant take this course together with math 329");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math211") || (course == "Math229")
					        ) {
					            if ((requirement("Math329") == "sem8"))

					                return alert("Cant take this course together with math 329");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math211") || (course == "Math229")
					        ) {
					            if ((requirement("Math329") == "sem9"))

					                return alert("Cant take this course together with math 329");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math211") || (course == "Math229")
					        ) {
					            if ((requirement("Math329") == "sem10"))

					                return alert("Cant take this course together with math 329");
					        }
					    }

					    if (box == "sem11")

					    {
					        if (
					            (course == "Math211") || (course == "Math229")
					        ) {
					            if ((requirement("Math329") == "sem11"))

					                return alert("Cant take this course together with math 329");
					        }
					    }
					    // 330
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math330") == "sem1"))

					                return alert("Cant take this course together with math 330");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math330") == "sem3"))

					                return alert("Cant take this course together with math 330");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math330") == "sem3"))

					                return alert("Cant take this course together with math 330");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math330") == "sem4"))

					                return alert("Cant take this course together with math 330");
					        }
					    }


					    if (box == "sem5")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math330") == "sem5"))

					                return alert("Cant take this course together with math 330");
					        }
					    }


					    if (box == "sem6")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math330") == "sem6"))

					                return alert("Cant take this course together with math 330");
					        }
					    }

					    if (box == "sem7")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math330") == "sem7"))

					                return alert("Cant take this course together with math 330");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math330") == "sem8"))

					                return alert("Cant take this course together with math 330");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math330") == "sem9"))

					                return alert("Cant take this course together with math 330");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math330") == "sem10"))

					                return alert("Cant take this course together with math 330");
					        }
					    }


					    if (box == "sem11")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math330") == "sem11"))

					                return alert("Cant take this course together with math 330");
					        }
					    }
					    // 332
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math332") == "sem1"))

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math332") == "sem2"))

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math332") == "sem3"))

					                return alert("Cant take this course together with math 332");
					        }
					    }


					    if (box == "sem4")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math332") == "sem4"))

					                return alert("Cant take this course together with math 332");
					        }
					    }


					    if (box == "sem5")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math332") == "sem5"))

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    if (box == "sem6")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math332") == "sem6"))

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    if (box == "sem7")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math332") == "sem7"))

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    if (box == "sem8")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math332") == "sem8"))

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    if (box == "sem9")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math332") == "sem9"))

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    if (box == "sem10")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math332") == "sem10"))

					                return alert("Cant take this course together with math 332");
					        }
					    }


					    if (box == "sem11")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math332") == "sem11"))

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    // 333
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if ((requirement("Math333") == "sem1"))

					                return alert("Cant take this course together with math 333");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if ((requirement("Math333") == "sem2"))

					                return alert("Cant take this course together with math 333");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if ((requirement("Math333") == "sem3"))

					                return alert("Cant take this course together with math 333");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if ((requirement("Math333") == "sem4"))

					                return alert("Cant take this course together with math 333");
					        }
					    }

					    //box5
					    if (box == "sem5")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if ((requirement("Math333") == "sem5"))

					                return alert("Cant take this course together with math 333");
					        }
					    }

					    //box6
					    if (box == "sem6")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if ((requirement("Math333") == "sem6"))

					                return alert("Cant take this course together with math 333");
					        }
					    }

					    if (box == "sem7")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if ((requirement("Math333") == "sem7"))

					                return alert("Cant take this course together with math 333");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if ((requirement("Math333") == "sem8"))

					                return alert("Cant take this course together with math 333");
					        }
					    }

					    if (box == "sem9")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if ((requirement("Math333") == "sem9"))

					                return alert("Cant take this course together with math 333");
					        }
					    }

					    if (box == "sem10")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if ((requirement("Math333") == "sem10"))

					                return alert("Cant take this course together with math 333");
					        }
					    }


					    if (box == "sem11")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if ((requirement("Math333") == "sem11"))

					                return alert("Cant take this course together with math 333");
					        }
					    }

					    // 334
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math334") == "sem1"))

					                return alert("Cant take this course together with math 334");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math334") == "sem2"))

					                return alert("Cant take this course together with math 334");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math334") == "sem3"))

					                return alert("Cant take this course together with math 334");
					        }
					    }


					    if (box == "sem4")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math334") == "sem4"))

					                return alert("Cant take this course together with math 334");
					        }
					    }


					    if (box == "sem5")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math334") == "sem5"))

					                return alert("Cant take this course together with math 334");
					        }
					    }


					    if (box == "sem6")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math334") == "sem6"))

					                return alert("Cant take this course together with math 334");
					        }
					    }


					    if (box == "sem7")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math334") == "sem7"))

					                return alert("Cant take this course together with math 334");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math334") == "sem8"))

					                return alert("Cant take this course together with math 334");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math334") == "sem9"))

					                return alert("Cant take this course together with math 334");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math334") == "sem10"))

					                return alert("Cant take this course together with math 334");
					        }
					    }

					    if (box == "sem11")

					    {
					        if (
					            (course == "Math211")
					        ) {
					            if ((requirement("Math334") == "sem11"))

					                return alert("Cant take this course together with math 334");
					        }
					    }
					    // 335
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if ((requirement("Math335") == "sem1"))

					                return alert("Cant take this course together with math 335");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if ((requirement("Math335") == "sem2"))

					                return alert("Cant take this course together with math 335");
					        }
					    }


					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if ((requirement("Math335") == "sem3"))

					                return alert("Cant take this course together with math 335");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if ((requirement("Math335") == "sem4"))

					                return alert("Cant take this course together with math 335");
					        }
					    }

					    //box5
					    if (box == "sem5")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if ((requirement("Math335") == "sem5"))

					                return alert("Cant take this course together with math 335");
					        }
					    }



					    if (box == "sem6")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if ((requirement("Math335") == "sem6"))

					                return alert("Cant take this course together with math 335");
					        }
					    }


					    if (box == "sem7")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if ((requirement("Math335") == "sem7"))

					                return alert("Cant take this course together with math 335");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if ((requirement("Math335") == "sem8"))

					                return alert("Cant take this course together with math 335");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if ((requirement("Math335") == "sem9"))

					                return alert("Cant take this course together with math 335");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if ((requirement("Math335") == "sem10"))

					                return alert("Cant take this course together with math 335");
					        }
					    }


					    if (box == "sem11")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if ((requirement("Math335") == "sem11"))

					                return alert("Cant take this course together with math 335");
					        }
					    }

					    // 336
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math336") == "sem1"))

					                return alert("Cant take this course together with math 336");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math336") == "sem3"))

					                return alert("Cant take this course together with math 336");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math336") == "sem3"))

					                return alert("Cant take this course together with math 336");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math336") == "sem4"))

					                return alert("Cant take this course together with math 336");
					        }
					    }


					    if (box == "sem5")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math336") == "sem5"))

					                return alert("Cant take this course together with math 336");
					        }
					    }


					    if (box == "sem6")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math336") == "sem6"))

					                return alert("Cant take this course together with math 336");
					        }
					    }


					    if (box == "sem7")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math336") == "sem7"))

					                return alert("Cant take this course together with math 336");
					        }
					    }

					    if (box == "sem8")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math336") == "sem8"))

					                return alert("Cant take this course together with math 336");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math336") == "sem9"))

					                return alert("Cant take this course together with math 336");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math336") == "sem10"))

					                return alert("Cant take this course together with math 336");
					        }
					    }


					    if (box == "sem11")

					    {
					        if (
					            (course == "Math211") || (course == "Math212")
					        ) {
					            if ((requirement("Math336") == "sem11"))

					                return alert("Cant take this course together with math 336");
					        }
					    }
					    // 451
					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math211") || (course == "Math212") || (course == "Math215")
					        ) {
					            if ((requirement("Math451") == "sem4"))

					                return alert("Cant take this course together with math 451");
					        }
					    }

					    //box5
					    if (box == "sem5")

					    {
					        if (
					            (course == "Math211") || (course == "Math212") || (course == "Math215")
					        ) {
					            if ((requirement("Math451") == "sem5"))

					                return alert("Cant take this course together with math 451");
					        }
					    }

					    //box6
					    if (box == "sem6")

					    {
					        if (
					            (course == "Math211") || (course == "Math212") || (course == "Math215")
					        ) {
					            if ((requirement("Math451") == "sem6"))

					                return alert("Cant take this course together with math 451");
					        }
					    }


					    //box7
					    if (box == "sem7")

					    {
					        if (
					            (course == "Math211") || (course == "Math212") || (course == "Math215")
					        ) {
					            if ((requirement("Math451") == "sem7"))

					                return alert("Cant take this course together with math 451");
					        }
					    }

					    //box8
					    if (box == "sem8")

					    {
					        if (
					            (course == "Math211") || (course == "Math212") || (course == "Math215")
					        ) {
					            if ((requirement("Math451") == "sem8"))

					                return alert("Cant take this course together with math 451");
					        }
					    }



					    if (box == "sem9")

					    {
					        if (
					            (course == "Math211") || (course == "Math212") || (course == "Math215")
					        ) {
					            if ((requirement("Math451") == "sem9"))

					                return alert("Cant take this course together with math 451");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math211") || (course == "Math212") || (course == "Math215")
					        ) {
					            if ((requirement("Math451") == "sem10"))

					                return alert("Cant take this course together with math 451");
					        }
					    }


					    if (box == "sem11")

					    {
					        if (
					            (course == "Math211") || (course == "Math212") || (course == "Math215")
					        ) {
					            if ((requirement("Math451") == "sem11"))

					                return alert("Cant take this course together with math 451");
					        }
					    }

					    // 452 as a requirement
					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if ((requirement("Math452") == "sem4"))

					                return alert("Cant take this course together with math 452");
					        }
					    }

					    //box5
					    if (box == "sem5")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if ((requirement("Math452") == "sem5"))

					                return alert("Cant take this course together with math 452");
					        }
					    }


					    //box6
					    if (box == "sem6")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if ((requirement("Math452") == "sem6"))

					                return alert("Cant take this course together with math 452");
					        }
					    }

					    //box7
					    if (box == "sem7")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if ((requirement("Math452") == "sem7"))

					                return alert("Cant take this course together with math 452");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if ((requirement("Math452") == "sem8"))

					                return alert("Cant take this course together with math 452");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if ((requirement("Math452") == "sem9"))

					                return alert("Cant take this course together with math 452");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if ((requirement("Math452") == "sem10"))

					                return alert("Cant take this course together with math 452");
					        }
					    }


					    if (box == "sem11")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if ((requirement("Math452") == "sem11"))

					                return alert("Cant take this course together with math 452");
					        }
					    }

					    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  
					    // Co-requisites b
					    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


					    // Math 227 as the dragged course	
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math227")
					        ) {
					            if (
					                (requirement("Math212") == "sem1") || (requirement("Math221") == "sem1")
					            )

					                return alert("Cant take this course together with math 212 and/or math 221");
					        }
					    }


					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math227")
					        ) {
					            if (
					                (requirement("Math212") == "sem2") || (requirement("Math221") == "sem2")
					            )

					                return alert("Cant take this course together with math 212 and/or math 221");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math227")
					        ) {
					            if (
					                (requirement("Math212") == "sem3") || (requirement("Math221") == "sem3")
					            )

					                return alert("Cant take this course together with math 212 and/or math 221");
					        }
					    }


					    if (box == "sem4")

					    {
					        if (
					            (course == "Math227")
					        ) {
					            if (
					                (requirement("Math212") == "sem4") || (requirement("Math221") == "sem4")
					            )

					                return alert("Cant take this course together with math 212 and/or math 221");
					        }
					    }


					    if (box == "sem5")

					    {
					        if (
					            (course == "Math227")
					        ) {
					            if (
					                (requirement("Math212") == "sem5") || (requirement("Math221") == "sem5")
					            )

					                return alert("Cant take this course together with math 212 and/or math 221");
					        }
					    }



					    if (box == "sem6")

					    {
					        if (
					            (course == "Math227")
					        ) {
					            if (
					                (requirement("Math212") == "sem6") || (requirement("Math221") == "sem6")
					            )

					                return alert("Cant take this course together with math 212 and/or math 221");
					        }
					    }


					    if (box == "sem7")

					    {
					        if (
					            (course == "Math227")
					        ) {
					            if (
					                (requirement("Math212") == "sem7") || (requirement("Math221") == "sem7")
					            )

					                return alert("Cant take this course together with math 212 and/or math 221");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math227")
					        ) {
					            if (
					                (requirement("Math212") == "sem8") || (requirement("Math221") == "sem8")
					            )

					                return alert("Cant take this course together with math 212 and/or math 221");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math227")
					        ) {
					            if (
					                (requirement("Math212") == "sem9") || (requirement("Math221") == "sem9")
					            )

					                return alert("Cant take this course together with math 212 and/or math 221");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math227")
					        ) {
					            if (
					                (requirement("Math212") == "sem10") || (requirement("Math221") == "sem10")
					            )

					                return alert("Cant take this course together with math 212 and/or math 221");
					        }
					    }


					    if (box == "sem11")

					    {
					        if (
					            (course == "Math227")
					        ) {
					            if (
					                (requirement("Math212") == "sem11") || (requirement("Math221") == "sem11")
					            )

					                return alert("Cant take this course together with math 212 and/or math 221");
					        }
					    }

					    // Math 327 as the dragged course	
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math327")
					        ) {
					            if (
					                (requirement("CS100") == "sem1") || (requirement("Math112") == "sem1") || (requirement("Math211") == "sem1")
					            )

					                return alert("Cant take this course together with CS100, math 112 and/or math 211");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math327")
					        ) {
					            if (
					                (requirement("CS100") == "sem2") || (requirement("Math112") == "sem2") || (requirement("Math211") == "sem2")
					            )

					                return alert("Cant take this course together with CS100, math 112 and/or math 211");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math327")
					        ) {
					            if (
					                (requirement("CS100") == "sem3") || (requirement("Math112") == "sem3") || (requirement("Math211") == "sem3")
					            )

					                return alert("Cant take this course together with CS100, math 112 and/or math 211");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math327")
					        ) {
					            if (
					                (requirement("CS100") == "sem4") || (requirement("Math112") == "sem4") || (requirement("Math211") == "sem4")
					            )

					                return alert("Cant take this course together with CS100, math 112, and/or math 211");
					        }
					    }

					    if (box == "sem5")

					    {
					        if (
					            (course == "Math327")
					        ) {
					            if (
					                (requirement("CS100") == "sem5") || (requirement("Math112") == "sem5") || (requirement("Math211") == "sem5")
					            )

					                return alert("Cant take this course together with CS100, math 112, and/or math 211");
					        }
					    }


					    if (box == "sem6")

					    {
					        if (
					            (course == "Math327")
					        ) {
					            if (
					                (requirement("CS100") == "sem6") || (requirement("Math112") == "sem6") || (requirement("Math211") == "sem6")
					            )

					                return alert("Cant take this course together with CS100, math 112, and/or math 211");
					        }
					    }


					    if (box == "sem7")

					    {
					        if (
					            (course == "Math327")
					        ) {
					            if (
					                (requirement("CS100") == "sem7") || (requirement("Math112") == "sem7") || (requirement("Math211") == "sem7")
					            )

					                return alert("Cant take this course together with CS100, math 112, and/or math 211");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math327")
					        ) {
					            if (
					                (requirement("CS100") == "sem8") || (requirement("Math112") == "sem8") || (requirement("Math211") == "sem8")
					            )

					                return alert("Cant take this course together with CS100, math 112, and/or math 211");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math327")
					        ) {
					            if (
					                (requirement("CS100") == "sem9") || (requirement("Math112") == "sem9") || (requirement("Math211") == "sem9")
					            )

					                return alert("Cant take this course together with CS100, math 112, and/or math 211");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math327")
					        ) {
					            if (
					                (requirement("CS100") == "sem10") || (requirement("Math112") == "sem10") || (requirement("Math211") == "sem10")
					            )

					                return alert("Cant take this course together with CS100, math 112, and/or math 211");
					        }
					    }


					    if (box == "sem11")

					    {
					        if (
					            (course == "Math327")
					        ) {
					            if (
					                (requirement("CS100") == "sem11") || (requirement("Math112") == "sem11") || (requirement("Math211") == "sem11")
					            )

					                return alert("Cant take this course together with CS100, math 112, and/or math 211");
					        }
					    }

					    // Math 329 as the dragged course	
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math329")
					        ) {
					            if (
					                (requirement("Math211") == "sem1") || (requirement("Math229") == "sem1")
					            )

					                return alert("Cant take this course together with math 211 and/or 229");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math329")
					        ) {
					            if (
					                (requirement("Math211") == "sem2") || (requirement("Math229") == "sem2")
					            )

					                return alert("Cant take this course together with math 211 and/or 229");
					        }
					    }


					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math329")
					        ) {
					            if (
					                (requirement("Math211") == "sem3") || (requirement("Math229") == "sem3")
					            )

					                return alert("Cant take this course together with math 211 and/or 229");
					        }
					    }


					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math329")
					        ) {
					            if (
					                (requirement("Math211") == "sem4") || (requirement("Math229") == "sem4")
					            )

					                return alert("Cant take this course together with math 211 and/or 229");
					        }
					    }


					    if (box == "sem5")

					    {
					        if (
					            (course == "Math329")
					        ) {
					            if (
					                (requirement("Math211") == "sem5") || (requirement("Math229") == "sem5")
					            )

					                return alert("Cant take this course together with math 211 and/or 229");
					        }
					    }


					    if (box == "sem6")

					    {
					        if (
					            (course == "Math329")
					        ) {
					            if (
					                (requirement("Math211") == "sem6") || (requirement("Math229") == "sem6")
					            )

					                return alert("Cant take this course together with math 211 and/or 229");
					        }
					    }



					    if (box == "sem7")

					    {
					        if (
					            (course == "Math329")
					        ) {
					            if (
					                (requirement("Math211") == "sem7") || (requirement("Math229") == "sem7")
					            )

					                return alert("Cant take this course together with math 211 and/or 229");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math329")
					        ) {
					            if (
					                (requirement("Math211") == "sem8") || (requirement("Math229") == "sem8")
					            )

					                return alert("Cant take this course together with math 211 and/or 229");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math329")
					        ) {
					            if (
					                (requirement("Math211") == "sem9") || (requirement("Math229") == "sem9")
					            )

					                return alert("Cant take this course together with math 211 and/or 229");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math329")
					        ) {
					            if (
					                (requirement("Math211") == "sem10") || (requirement("Math229") == "sem10")
					            )

					                return alert("Cant take this course together with math 211 and/or 229");
					        }
					    }

					    if (box == "sem11")

					    {
					        if (
					            (course == "Math329")
					        ) {
					            if (
					                (requirement("Math211") == "sem11") || (requirement("Math229") == "sem11")
					            )

					                return alert("Cant take this course together with math 211 and/or 229");
					        }
					    }
					    // Math 330 as the dragged course	
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math330")
					        ) {
					            if (
					                (requirement("Math211") == "sem1") || (requirement("Math212") == "sem1")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math330")
					        ) {
					            if (
					                (requirement("Math211") == "sem2") || (requirement("Math212") == "sem2")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math330")
					        ) {
					            if (
					                (requirement("Math211") == "sem3") || (requirement("Math212") == "sem3")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math330")
					        ) {
					            if (
					                (requirement("Math211") == "sem4") || (requirement("Math212") == "sem4")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }


					    if (box == "sem5")

					    {
					        if (
					            (course == "Math330")
					        ) {
					            if (
					                (requirement("Math211") == "sem5") || (requirement("Math212") == "sem5")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }


					    if (box == "sem6")

					    {
					        if (
					            (course == "Math330")
					        ) {
					            if (
					                (requirement("Math211") == "sem6") || (requirement("Math212") == "sem6")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }


					    if (box == "sem7")

					    {
					        if (
					            (course == "Math330")
					        ) {
					            if (
					                (requirement("Math211") == "sem7") || (requirement("Math212") == "sem7")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math330")
					        ) {
					            if (
					                (requirement("Math211") == "sem8") || (requirement("Math212") == "sem8")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math330")
					        ) {
					            if (
					                (requirement("Math211") == "sem9") || (requirement("Math212") == "sem9")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math330")
					        ) {
					            if (
					                (requirement("Math211") == "sem10") || (requirement("Math212") == "sem10")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }

					    if (box == "sem11")

					    {
					        if (
					            (course == "Math330")
					        ) {
					            if (
					                (requirement("Math211") == "sem11") || (requirement("Math212") == "sem11")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }

					    // Math 332 as the dragged course	
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if (
					                (requirement("Math211") == "sem1")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }
					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if (
					                (requirement("Math211") == "sem2")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if (
					                (requirement("Math211") == "sem3")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }


					    if (box == "sem4")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if (
					                (requirement("Math211") == "sem4")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }



					    if (box == "sem5")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if (
					                (requirement("Math211") == "sem5")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }



					    if (box == "sem5")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if (
					                (requirement("Math211") == "sem5")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }


					    if (box == "sem6")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if (
					                (requirement("Math211") == "sem6")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }



					    if (box == "sem7")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if (
					                (requirement("Math211") == "sem7")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if (
					                (requirement("Math211") == "sem8")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if (
					                (requirement("Math211") == "sem9")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if (
					                (requirement("Math211") == "sem10")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }


					    if (box == "sem11")

					    {
					        if (
					            (course == "Math332")
					        ) {
					            if (
					                (requirement("Math211") == "sem11")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }
					    // Math 333 as the dragged course	
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math333")
					        ) {
					            if (
					                (requirement("Math332") == "sem1")
					            )

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math333")
					        ) {
					            if (
					                (requirement("Math332") == "sem2")
					            )

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math333")
					        ) {
					            if (
					                (requirement("Math332") == "sem3")
					            )

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math333")
					        ) {
					            if (
					                (requirement("Math332") == "sem4")
					            )

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    //box5
					    if (box == "sem5")

					    {
					        if (
					            (course == "Math333")
					        ) {
					            if (
					                (requirement("Math332") == "sem5")
					            )

					                return alert("Cant take this course together with math 332");
					        }
					    }


					    if (box == "sem6")

					    {
					        if (
					            (course == "Math333")
					        ) {
					            if (
					                (requirement("Math332") == "sem6")
					            )

					                return alert("Cant take this course together with math 332");
					        }
					    }


					    if (box == "sem7")

					    {
					        if (
					            (course == "Math333")
					        ) {
					            if (
					                (requirement("Math332") == "sem7")
					            )

					                return alert("Cant take this course together with math 332");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math333")
					        ) {
					            if (
					                (requirement("Math332") == "sem8")
					            )

					                return alert("Cant take this course together with math 332");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math333")
					        ) {
					            if (
					                (requirement("Math332") == "sem9")
					            )

					                return alert("Cant take this course together with math 332");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math333")
					        ) {
					            if (
					                (requirement("Math332") == "sem10")
					            )

					                return alert("Cant take this course together with math 332");
					        }
					    }

					    if (box == "sem11")

					    {
					        if (
					            (course == "Math333")
					        ) {
					            if (
					                (requirement("Math332") == "sem11")
					            )

					                return alert("Cant take this course together with math 332");
					        }
					    }
					    // Math 334 as the dragged course	
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if (
					                (requirement("Math211") == "sem1")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if (
					                (requirement("Math211") == "sem2")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if (
					                (requirement("Math211") == "sem3")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if (
					                (requirement("Math211") == "sem4")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }

					    //box5
					    if (box == "sem5")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if (
					                (requirement("Math211") == "sem5")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }


					    if (box == "sem6")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if (
					                (requirement("Math211") == "sem6")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }


					    if (box == "sem7")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if (
					                (requirement("Math211") == "sem7")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if (
					                (requirement("Math211") == "sem8")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if (
					                (requirement("Math211") == "sem9")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if (
					                (requirement("Math211") == "sem10")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }

					    if (box == "sem11")

					    {
					        if (
					            (course == "Math334")
					        ) {
					            if (
					                (requirement("Math211") == "sem11")
					            )

					                return alert("Cant take this course together with math 211");
					        }
					    }

					    // Math 335 as the dragged course	
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math335")
					        ) {
					            if (
					                (requirement("Math334") == "sem1")
					            )

					                return alert("Cant take this course together with math 334");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math335")
					        ) {
					            if (
					                (requirement("Math334") == "sem2")
					            )

					                return alert("Cant take this course together with math 334");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math335")
					        ) {
					            if (
					                (requirement("Math334") == "sem3")
					            )

					                return alert("Cant take this course together with math 334");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math335")
					        ) {
					            if (
					                (requirement("Math334") == "sem4")
					            )

					                return alert("Cant take this course together with math 334");
					        }
					    }

					    //box5
					    if (box == "sem5")

					    {
					        if (
					            (course == "Math335")
					        ) {
					            if (
					                (requirement("Math334") == "sem5")
					            )

					                return alert("Cant take this course together with math 334");
					        }
					    }


					    if (box == "sem6")

					    {
					        if (
					            (course == "Math335")
					        ) {
					            if (
					                (requirement("Math334") == "sem6")
					            )

					                return alert("Cant take this course together with math 334");
					        }
					    }



					    if (box == "sem7")

					    {
					        if (
					            (course == "Math335")
					        ) {
					            if (
					                (requirement("Math334") == "sem7")
					            )

					                return alert("Cant take this course together with math 334");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math335")
					        ) {
					            if (
					                (requirement("Math334") == "sem8")
					            )

					                return alert("Cant take this course together with math 334");
					        }
					    }

					    if (box == "sem9")

					    {
					        if (
					            (course == "Math335")
					        ) {
					            if (
					                (requirement("Math334") == "sem9")
					            )

					                return alert("Cant take this course together with math 334");
					        }
					    }

					    if (box == "sem10")

					    {
					        if (
					            (course == "Math335")
					        ) {
					            if (
					                (requirement("Math334") == "sem10")
					            )

					                return alert("Cant take this course together with math 334");
					        }
					    }


					    if (box == "sem11")

					    {
					        if (
					            (course == "Math335")
					        ) {
					            if (
					                (requirement("Math334") == "sem11")
					            )

					                return alert("Cant take this course together with math 334");
					        }
					    }
					    // Math 336 as the dragged course	
					    //box1
					    if (box == "sem1")

					    {
					        if (
					            (course == "Math336")
					        ) {
					            if (
					                (requirement("Math211") == "sem1") || (requirement("Math212") == "sem1")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }

					    //box2
					    if (box == "sem2")

					    {
					        if (
					            (course == "Math336")
					        ) {
					            if (
					                (requirement("Math211") == "sem2") || (requirement("Math212") == "sem2")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math336")
					        ) {
					            if (
					                (requirement("Math211") == "sem3") || (requirement("Math212") == "sem3")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math336")
					        ) {
					            if (
					                (requirement("Math211") == "sem4") || (requirement("Math212") == "sem4")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }


					    if (box == "sem5")

					    {
					        if (
					            (course == "Math336")
					        ) {
					            if (
					                (requirement("Math211") == "sem5") || (requirement("Math212") == "sem5")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }


					    if (box == "sem6")

					    {
					        if (
					            (course == "Math336")
					        ) {
					            if (
					                (requirement("Math211") == "sem6") || (requirement("Math212") == "sem6")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }


					    if (box == "sem7")

					    {
					        if (
					            (course == "Math336")
					        ) {
					            if (
					                (requirement("Math211") == "sem7") || (requirement("Math212") == "sem7")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math336")
					        ) {
					            if (
					                (requirement("Math211") == "sem8") || (requirement("Math212") == "sem8")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math336")
					        ) {
					            if (
					                (requirement("Math211") == "sem9") || (requirement("Math212") == "sem9")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }

					    if (box == "sem10")

					    {
					        if (
					            (course == "Math336")
					        ) {
					            if (
					                (requirement("Math211") == "sem10") || (requirement("Math212") == "sem10")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }

					    if (box == "sem11")

					    {
					        if (
					            (course == "Math336")
					        ) {
					            if (
					                (requirement("Math211") == "sem11") || (requirement("Math212") == "sem11")
					            )

					                return alert("Cant take this course together with math 211 and/or 212");
					        }
					    }

					    // Math 451 as the dragged course	

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if (
					                (requirement("Math211") == "sem3") || (requirement("Math212") == "sem3") || (requirement("Math215") == "sem3")
					            )

					                return alert("Cant take this course together with math 211, 212 and/or 215");
					        }
					    }
					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if (
					                (requirement("Math211") == "sem4") || (requirement("Math212") == "sem4") || (requirement("Math215") == "sem4")
					            )

					                return alert("Cant take this course together with math 211, 212 and/or 215");
					        }
					    }

					    //box5
					    if (box == "sem5")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if (
					                (requirement("Math211") == "sem5") || (requirement("Math212") == "sem5") || (requirement("Math215") == "sem5")
					            )

					                return alert("Cant take this course together with math 211, 212 and/or 215");
					        }
					    }

					    //box6
					    if (box == "sem6")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if (
					                (requirement("Math211") == "sem6") || (requirement("Math212") == "sem6") || (requirement("Math215") == "sem6")
					            )

					                return alert("Cant take this course together with math 211, 212 and/or 215");
					        }
					    }


					    if (box == "sem7")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if (
					                (requirement("Math211") == "sem7") || (requirement("Math212") == "sem7") || (requirement("Math215") == "sem7")
					            )

					                return alert("Cant take this course together with math 211, 212 and/or 215");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if (
					                (requirement("Math211") == "sem8") || (requirement("Math212") == "sem8") || (requirement("Math215") == "sem8")
					            )

					                return alert("Cant take this course together with math 211, 212 and/or 215");
					        }
					    }


					    if (box == "sem9")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if (
					                (requirement("Math211") == "sem9") || (requirement("Math212") == "sem9") || (requirement("Math215") == "sem9")
					            )

					                return alert("Cant take this course together with math 211, 212 and/or 215");
					        }
					    }


					    if (box == "sem10")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if (
					                (requirement("Math211") == "sem10") || (requirement("Math212") == "sem10") || (requirement("Math215") == "sem10")
					            )

					                return alert("Cant take this course together with math 211, 212 and/or 215");
					        }
					    }

					    if (box == "sem11")

					    {
					        if (
					            (course == "Math451")
					        ) {
					            if (
					                (requirement("Math211") == "sem11") || (requirement("Math212") == "sem11") || (requirement("Math215") == "sem11")
					            )

					                return alert("Cant take this course together with math 211, 212 and/or 215");
					        }
					    }

					    // Math 452 as the dragged course	

					    //box3
					    if (box == "sem3")

					    {
					        if (
					            (course == "Math452")
					        ) {
					            if (
					                (requirement("Math451") == "sem3")
					            )

					                return alert("Cant take this course together with math 451");
					        }
					    }

					    //box4
					    if (box == "sem4")

					    {
					        if (
					            (course == "Math452")
					        ) {
					            if (
					                (requirement("Math451") == "sem4")
					            )

					                return alert("Cant take this course together with math 451");
					        }
					    }


					    if (box == "sem5")

					    {
					        if (
					            (course == "Math452")
					        ) {
					            if (
					                (requirement("Math451") == "sem5")
					            )

					                return alert("Cant take this course together with math 451");
					        }
					    }

					    if (box == "sem6")

					    {
					        if (
					            (course == "Math452")
					        ) {
					            if (
					                (requirement("Math451") == "sem6")
					            )

					                return alert("Cant take this course together with math 451");
					        }
					    }


					    if (box == "sem7")

					    {
					        if (
					            (course == "Math452")
					        ) {
					            if (
					                (requirement("Math451") == "sem7")
					            )

					                return alert("Cant take this course together with math 451");
					        }
					    }


					    if (box == "sem8")

					    {
					        if (
					            (course == "Math452")
					        ) {
					            if (
					                (requirement("Math451") == "sem8")
					            )

					                return alert("Cant take this course together with math 451");
					        }
					    }

					    if (box == "sem9")

					    {
					        if (
					            (course == "Math452")
					        ) {
					            if (
					                (requirement("Math451") == "sem9")
					            )

					                return alert("Cant take this course together with math 451");
					        }
					    }

					    if (box == "sem10")

					    {
					        if (
					            (course == "Math452")
					        ) {
					            if (
					                (requirement("Math451") == "sem10")
					            )

					                return alert("Cant take this course together with math 451");
					        }
					    }

					    if (box == "sem11")

					    {
					        if (
					            (course == "Math452")
					        ) {
					            if (
					                (requirement("Math451") == "sem11")
					            )

					                return alert("Cant take this course together with math 451");
					        }
					    }
					    /////---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
					    ///////////////BLOCKING LOWER LEVEL CS CLASSES FROM BEING REPOSITIONED SOMEWHERE AFTER UPPER LEVEL CLASSES
					    /////---------------------------------------------------------------------------------------------------------------------------------------------------------------------------



					    // blocking 100 and 102 from bein taken after 110
					    if (box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS100") || (course == "CS102")) {
					            if (requirement("CS110") == "sem1")
					                return alert("This course cannot be taken after 110 has been taken");
					        }
					    }


					    if (box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS100") || (course == "CS102")) {
					            if (requirement("CS110") == "sem2")
					                return alert("This course cannot be taken after 110 has been taken");
					        }
					    }


					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS100") || (course == "CS102")) {
					            if (requirement("CS110") == "sem3")
					                return alert("This course cannot be taken after 110 has been taken");
					        }
					    }


					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS100") || (course == "CS102")) {
					            if (requirement("CS110") == "sem4")
					                return alert("This course cannot be taken after 110 has been taken");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS100") || (course == "CS102")) {
					            if (requirement("CS110") == "sem5")
					                return alert("This course cannot be taken after 110 has been taken");
					        }
					    }



					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS100") || (course == "CS102")) {
					            if (requirement("CS110") == "sem6")
					                return alert("This course cannot be taken after 110 has been taken");
					        }
					    }



					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS100") || (course == "CS102")) {
					            if (requirement("CS110") == "sem7")
					                return alert("This course cannot be taken after 110 has been taken");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS100") || (course == "CS102")) {
					            if (requirement("CS110") == "sem8")
					                return alert("This course cannot be taken after 110 has been taken");
					        }
					    }


					    if (box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS100") || (course == "CS102")) {
					            if (requirement("CS110") == "sem9")
					                return alert("This course cannot be taken after 110 has been taken");
					        }
					    }



					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS100") || (course == "CS102")) {
					            if (requirement("CS110") == "sem10")
					                return alert("This course cannot be taken after 110 has been taken");
					        }
					    }




					    // blocking 110 from bein taken after 120
					    if (box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS110")) {
					            if (requirement("CS120") == "sem1")
					                return alert("This course cannot be taken after 120 has been taken");
					        }
					    }


					    if (box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS110")) {
					            if (requirement("CS120") == "sem2")
					                return alert("This course cannot be taken after 120 has been taken");
					        }
					    }


					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS110")) {
					            if (requirement("CS120") == "sem3")
					                return alert("This course cannot be taken after 120 has been taken");
					        }
					    }


					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS110")) {
					            if (requirement("CS120") == "sem4")
					                return alert("This course cannot be taken after 120 has been taken");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS110")) {
					            if (requirement("CS120") == "sem5")
					                return alert("This course cannot be taken after 120 has been taken");
					        }
					    }



					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS110")) {
					            if (requirement("CS120") == "sem6")
					                return alert("This course cannot be taken after 120 has been taken");
					        }
					    }



					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS110")) {
					            if (requirement("CS120") == "sem7")
					                return alert("This course cannot be taken after 120 has been taken");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS110")) {
					            if (requirement("CS120") == "sem8")
					                return alert("This course cannot be taken after 120 has been taken");
					        }
					    }


					    if (box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS110")) {
					            if (requirement("CS120") == "sem9")
					                return alert("This course cannot be taken after 110 has been taken");
					        }
					    }



					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS110")) {
					            if (requirement("CS120") == "sem10")
					                return alert("This course cannot be taken after 120 has been taken");
					        }
					    }


					    // bloking 120 from being taken after upper level cs courses
					    if (box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS120")) {

					            if ((requirement("CS200") == "sem1") || (requirement("CS210") == "sem1") || (requirement("CS212") == "sem1") || (requirement("CS220") == "sem1") || (requirement("CS222") == "sem1") || (requirement("CS230") == "sem1") || (requirement("CS232") == "sem1"))
					                return alert("CS 120 is a prereq for CS 200, 210, 212, 220, 222, 230, and 232. It cannot be taken after any of these courses");
					        }
					    }

					    if (box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS120")) {

					            if ((requirement("CS200") == "sem2") || (requirement("CS210") == "sem2") || (requirement("CS212") == "sem2") || (requirement("CS220") == "sem2") || (requirement("CS222") == "sem2") || (requirement("CS230") == "sem2") || (requirement("CS232") == "sem2"))
					                return alert("CS 120 is a prereq for CS 200, 210, 212, 220, 222, 230, and 232. It cannot be taken after any of these courses");
					        }
					    }

					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS120")) {

					            if ((requirement("CS200") == "sem3") || (requirement("CS210") == "sem3") || (requirement("CS212") == "sem3") || (requirement("CS220") == "sem3") || (requirement("CS222") == "sem3") || (requirement("CS230") == "sem3") || (requirement("CS232") == "sem3"))
					                return alert("CS 120 is a prereq for CS 200, 210, 212, 220, 222, 230, and 232. It cannot be taken after any of these courses");
					        }
					    }

					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS120")) {

					            if ((requirement("CS200") == "sem4") || (requirement("CS210") == "sem4") || (requirement("CS212") == "sem4") || (requirement("CS220") == "sem4") || (requirement("CS222") == "sem4") || (requirement("CS230") == "sem4") || (requirement("CS232") == "sem4"))
					                return alert("CS 120 is a prereq for CS 200, 210, 212, 220, 222, 230, and 232. It cannot be taken after any of these courses");
					        }
					    }

					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS120")) {

					            if ((requirement("CS200") == "sem5") || (requirement("CS210") == "sem5") || (requirement("CS212") == "sem5") || (requirement("CS220") == "sem5") || (requirement("CS222") == "sem5") || (requirement("CS230") == "sem5") || (requirement("CS232") == "sem5"))
					                return alert("CS 120 is a prereq for CS 200, 210, 212, 220, 222, 230, and 232. It cannot be taken after any of these courses");
					        }
					    }

					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS120")) {

					            if ((requirement("CS200") == "sem6") || (requirement("CS210") == "sem6") || (requirement("CS212") == "sem6") || (requirement("CS220") == "sem6") || (requirement("CS222") == "sem6") || (requirement("CS230") == "sem6") || (requirement("CS232") == "sem6"))
					                return alert("CS 120 is a prereq for CS 200, 210, 212, 220, 222, 230, and 232. It cannot be taken after any of these courses");
					        }
					    }

					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS120")) {

					            if ((requirement("CS200") == "sem7") || (requirement("CS210") == "sem7") || (requirement("CS212") == "sem7") || (requirement("CS220") == "sem7") || (requirement("CS222") == "sem7") || (requirement("CS230") == "sem7") || (requirement("CS232") == "sem7"))
					                return alert("CS 120 is a prereq for CS 200, 210, 212, 220, 222, 230, and 232. It cannot be taken after any of these courses");
					        }
					    }

					    if (box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS120")) {

					            if ((requirement("CS200") == "sem8") || (requirement("CS210") == "sem8") || (requirement("CS212") == "sem8") || (requirement("CS220") == "sem8") || (requirement("CS222") == "sem8") || (requirement("CS230") == "sem8") || (requirement("CS232") == "sem8"))
					                return alert("CS 120 is a prereq for CS 200, 210, 212, 220, 222, 230, and 232. It cannot be taken after any of these courses");
					        }
					    }

					    if (box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS120")) {

					            if ((requirement("CS200") == "sem9") || (requirement("CS210") == "sem9") || (requirement("CS212") == "sem9") || (requirement("CS220") == "sem9") || (requirement("CS222") == "sem9") || (requirement("CS230") == "sem9") || (requirement("CS232") == "sem9"))
					                return alert("CS 120 is a prereq for CS 200, 210, 212, 220, 222, 230, and 232. It cannot be taken after any of these courses");
					        }
					    }

					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS120")) {

					            if ((requirement("CS200") == "sem10") || (requirement("CS210") == "sem10") || (requirement("CS212") == "sem10") || (requirement("CS220") == "sem10") || (requirement("CS222") == "sem10") || (requirement("CS230") == "sem10") || (requirement("CS232") == "sem10"))
					                return alert("CS 120 is a prereq for CS 200, 210, 212, 220, 222, 230, and 232. It cannot be taken after any of these courses");
					        }
					    }




					    // blocking 200 from bein taken after 451
					    if (box == "sem2" || box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (requirement("CS451") == "sem1")
					                return alert("This course cannot be taken after 451 has been taken");
					        }
					    }


					    if (box == "sem3" || box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (requirement("CS451") == "sem2")
					                return alert("This course cannot be taken after 451 has been taken");
					        }
					    }


					    if (box == "sem4" || box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CSCS200")) {
					            if (requirement("CS451") == "sem3")
					                return alert("This course cannot be taken after 451 has been taken");
					        }
					    }


					    if (box == "sem5" || box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (requirement("CS451") == "sem4")
					                return alert("This course cannot be taken after 451 has been taken");
					        }
					    }


					    if (box == "sem6" || box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (requirement("CS451") == "sem5")
					                return alert("This course cannot be taken after 451 has been taken");
					        }
					    }



					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (requirement("CS451") == "sem6")
					                return alert("This course cannot be taken after 451 has been taken");
					        }
					    }



					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (requirement("CS451") == "sem7")
					                return alert("This course cannot be taken after 451 has been taken");
					        }
					    }


					    if (box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (requirement("CS451") == "sem8")
					                return alert("This course cannot be taken after 451 has been taken");
					        }
					    }


					    if (box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (requirement("CS451") == "sem9")
					                return alert("This course cannot be taken after 451 has been taken");
					        }
					    }



					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (requirement("CS451") == "sem10")
					                return alert("This course cannot be taken after 451 has been taken");
					        }
					    }

					    //-----------------------------------------------------------------------------------------------------------------------------------------------------------

					    // blocking 200 from bein taken after 300 when CS230 or CS232 are not available
					    //300 is in sem6
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS300") == "sem6") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 300 has been taken");
					        }
					    }

					    //300 is in sem7
					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS300") == "sem7") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 300 has been taken");
					        }
					    }

					    //300 is in sem9
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS300") == "sem9") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math211") == "sem9")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6") && (requirement("CS230") != "sem8")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6") && (requirement("CS232") != "sem8")
					            )
					                return alert("This course cannot be taken after 300 has been taken");
					        }
					    }


					    //300 is in sem10
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS300") == "sem10") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math211") == "sem9") || (requirement("Math211") == "sem10")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6") && (requirement("CS230") != "sem8") && (requirement("CS230") != "sem9")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6") && (requirement("CS232") != "sem8") && (requirement("CS232") != "sem9")
					            )
					                return alert("This course cannot be taken after 300 has been taken");
					        }
					    }



					    // blocking 200 from bein taken after 310 when CS230 or CS232 are not available
					    //310 is in sem6
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS310") == "sem6") &&
					                ((requirement("Math215") == "sem3") || (requirement("Math215") == "sem4") || (requirement("Math215") == "sem6") &&
					                    (requirement("Math223") == "sem3") || (requirement("Math223") == "sem4") || (requirement("Math223") == "sem6")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 310 has been taken");
					        }
					    }

					    //310 is in sem8
					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS310") == "sem8") &&
					                ((requirement("Math215") == "sem3") || (requirement("Math215") == "sem4") || (requirement("Math215") == "sem6") &&
					                    (requirement("Math223") == "sem3") || (requirement("Math223") == "sem4") || (requirement("Math223") == "sem6")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 310 has been taken");
					        }
					    }

					    //310 is in sem9
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS310") == "sem9") &&
					                ((requirement("Math215") == "sem3") || (requirement("Math215") == "sem5") || (requirement("Math215") == "sem6") || (requirement("Math215") == "sem8") &&
					                    (requirement("Math223") == "sem3") || (requirement("Math223") == "sem5") || (requirement("Math223") == "sem6") || (requirement("Math223") == "sem8")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6") && (requirement("CS230") != "sem8")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6") && (requirement("CS232") != "sem8")
					            )
					                return alert("This course cannot be taken after 310 has been taken");
					        }
					    }



					    // blocking 200 from bein taken after 320 when CS230 or CS232 are not available
					    //320 is in sem6
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS320") == "sem6") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 320 has been taken");
					        }
					    }

					    //320 is in sem7
					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS320") == "sem7") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 320 has been taken");
					        }
					    }

					    //320 is in sem9
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS320") == "sem9") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math211") == "sem9")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6") && (requirement("CS230") != "sem8")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6") && (requirement("CS232") != "sem8")
					            )
					                return alert("This course cannot be taken after 320 has been taken");
					        }
					    }


					    //320 is in sem10
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS320") == "sem10") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math211") == "sem9") || (requirement("Math211") == "sem10")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6") && (requirement("CS230") != "sem8") && (requirement("CS230") != "sem9")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6") && (requirement("CS232") != "sem8") && (requirement("CS232") != "sem9")
					            )
					                return alert("This course cannot be taken after 320 has been taken");
					        }
					    }




					    // blocking 200 from bein taken after 330 when CS230 or CS232 are not available
					    //330 is in sem6
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS330") == "sem6") &&
					                ((requirement("Math215") == "sem3") || (requirement("Math215") == "sem4") || (requirement("Math215") == "sem6") &&
					                    (requirement("Math223") == "sem3") || (requirement("Math223") == "sem4") || (requirement("Math223") == "sem6")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 330 has been taken");
					        }
					    }

					    //330 is in sem8
					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS330") == "sem8") &&
					                ((requirement("Math215") == "sem3") || (requirement("Math215") == "sem4") || (requirement("Math215") == "sem6") &&
					                    (requirement("Math223") == "sem3") || (requirement("Math223") == "sem4") || (requirement("Math223") == "sem6")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 330 has been taken");
					        }
					    }

					    //330 is in sem9
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS200")) {
					            if (
					                (requirement("CS330") == "sem9") &&
					                ((requirement("Math215") == "sem3") || (requirement("Math215") == "sem5") || (requirement("Math215") == "sem6") || (requirement("Math215") == "sem8") &&
					                    (requirement("Math223") == "sem3") || (requirement("Math223") == "sem5") || (requirement("Math223") == "sem6") || (requirement("Math223") == "sem8")) &&
					                ((requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6") && (requirement("CS230") != "sem8")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6") && (requirement("CS232") != "sem8")
					            )
					                return alert("This course cannot be taken after 330 has been taken");
					        }
					    }



					    //----------------------------------------------------------------------------------------------------------------------------------------------------------

					    // blocking 230 from bein taken after 300 when CS200 or CS232 are not available
					    //300 is in sem6
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS300") == "sem6") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 300 has been taken");
					        }
					    }

					    //300 is in sem7
					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS300") == "sem7") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 300 has been taken");
					        }
					    }

					    //300 is in sem9
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS300") == "sem9") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math211") == "sem9")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6") && (requirement("CS200") != "sem8")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6") && (requirement("CS232") != "sem8")
					            )
					                return alert("This course cannot be taken after 300 has been taken");
					        }
					    }


					    //300 is in sem10
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS300") == "sem10") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math211") == "sem9") || (requirement("Math211") == "sem10")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6") && (requirement("CS200") != "sem8") && (requirement("CS200") != "sem9")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6") && (requirement("CS232") != "sem8") && (requirement("CS232") != "sem9")
					            )
					                return alert("This course cannot be taken after 300 has been taken");
					        }
					    }



					    // blocking 230 from bein taken after 310 when CS200 or CS232 are not available
					    //310 is in sem6
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS310") == "sem6") &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 310 has been taken");
					        }
					    }

					    //310 is in sem8
					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS310") == "sem8") &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 310 has been taken");
					        }
					    }

					    //310 is in sem9
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS310") == "sem9") &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6") && (requirement("CS200") != "sem8")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6") && (requirement("CS232") != "sem8")
					            )
					                return alert("This course cannot be taken after 310 has been taken");
					        }
					    }


					    // blocking 230 from bein taken after 320 when CS200 or CS232 are not available
					    //320 is in sem6
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS320") == "sem6") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 320 has been taken");
					        }
					    }

					    //320 is in sem7
					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS320") == "sem7") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 320 has been taken");
					        }
					    }

					    //320 is in sem9
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS320") == "sem9") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math211") == "sem9")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6") && (requirement("CS200") != "sem8")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6") && (requirement("CS232") != "sem8")
					            )
					                return alert("This course cannot be taken after 320 has been taken");
					        }
					    }


					    //320 is in sem10
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS320") == "sem10") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math211") == "sem9") || (requirement("Math211") == "sem10")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6") && (requirement("CS200") != "sem8") && (requirement("CS200") != "sem9")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6") && (requirement("CS232") != "sem8") && (requirement("CS232") != "sem9")
					            )
					                return alert("This course cannot be taken after 320 has been taken");
					        }
					    }




					    // blocking 230 from bein taken after 330 when CS200 or CS232 are not available
					    //330 is in sem6
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS330") == "sem6") &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 330 has been taken");
					        }
					    }

					    //330 is in sem8
					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS330") == "sem8") &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6")
					            )
					                return alert("This course cannot be taken after 330 has been taken");
					        }
					    }

					    //330 is in sem9
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS230")) {
					            if (
					                (requirement("CS330") == "sem9") &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6") && (requirement("CS200") != "sem8")) &&
					                (requirement("CS232") != "sem3") && (requirement("CS232") != "sem5") && (requirement("CS232") != "sem6") && (requirement("CS232") != "sem8")
					            )
					                return alert("This course cannot be taken after 330 has been taken");
					        }
					    }



					    //----------------------------------------------------------------------------------------------------------------------------------------------------------

					    // blocking 232 from bein taken after 300 when CS200 or CS230 are not available
					    //300 is in sem6
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS300") == "sem6") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")
					            )
					                return alert("This course cannot be taken after 300 has been taken");
					        }
					    }

					    //300 is in sem7
					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS300") == "sem7") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")
					            )
					                return alert("This course cannot be taken after 300 has been taken");
					        }
					    }

					    //300 is in sem9
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS300") == "sem9") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math211") == "sem9")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6") && (requirement("CS200") != "sem8")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6") && (requirement("CS230") != "sem8")
					            )
					                return alert("This course cannot be taken after 300 has been taken");
					        }
					    }


					    //300 is in sem10
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS300") == "sem10") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math211") == "sem9") || (requirement("Math211") == "sem10")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6") && (requirement("CS200") != "sem8") && (requirement("CS200") != "sem9")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6") && (requirement("CS230") != "sem8") && (requirement("CS230") != "sem9")
					            )
					                return alert("This course cannot be taken after 300 has been taken");
					        }
					    }



					    // blocking 232 from bein taken after 310 when CS200 or CS232 are not available
					    //310 is in sem6
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS310") == "sem6") &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")
					            )
					                return alert("This course cannot be taken after 310 has been taken");
					        }
					    }

					    //310 is in sem8
					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS310") == "sem8") &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")
					            )
					                return alert("This course cannot be taken after 310 has been taken");
					        }
					    }

					    //310 is in sem9
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS310") == "sem9") &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6") && (requirement("CS200") != "sem8")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6") && (requirement("CS230") != "sem8")
					            )
					                return alert("This course cannot be taken after 310 has been taken");
					        }
					    }


					    // blocking 232 from bein taken after 320 when CS200 or CS230 are not available
					    //320 is in sem6
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS320") == "sem6") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")
					            )
					                return alert("This course cannot be taken after 320 has been taken");
					        }
					    }

					    //320 is in sem7
					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS320") == "sem7") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")
					            )
					                return alert("This course cannot be taken after 320 has been taken");
					        }
					    }

					    //320 is in sem9
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS320") == "sem9") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math211") == "sem9")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6") && (requirement("CS200") != "sem8")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6") && (requirement("CS230") != "sem8")
					            )
					                return alert("This course cannot be taken after 320 has been taken");
					        }
					    }


					    //320 is in sem10
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS320") == "sem10") &&
					                ((requirement("Math211") == "sem3") || (requirement("Math211") == "sem4") || (requirement("Math211") == "sem6") || (requirement("Math211") == "sem7") || (requirement("Math211") == "sem9") || (requirement("Math211") == "sem10")) &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6") && (requirement("CS200") != "sem8") && (requirement("CS200") != "sem9")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6") && (requirement("CS230") != "sem8") && (requirement("CS230") != "sem9")
					            )
					                return alert("This course cannot be taken after 320 has been taken");
					        }
					    }



					    // blocking 232 from bein taken after 310 when CS200 or CS232 are not available
					    //330 is in sem6
					    if (box == "sem7" || box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS330") == "sem6") &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")
					            )
					                return alert("This course cannot be taken after 330 has been taken");
					        }
					    }

					    //330 is in sem8
					    if (box == "sem8" || box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS330") == "sem8") &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6")
					            )
					                return alert("This course cannot be taken after 330 has been taken");
					        }
					    }

					    //330 is in sem9
					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS232")) {
					            if (
					                (requirement("CS330") == "sem9") &&
					                ((requirement("CS200") != "sem3") && (requirement("CS200") != "sem5") && (requirement("CS200") != "sem6") && (requirement("CS200") != "sem8")) &&
					                (requirement("CS230") != "sem3") && (requirement("CS230") != "sem5") && (requirement("CS230") != "sem6") && (requirement("CS230") != "sem8")
					            )
					                return alert("This course cannot be taken after 330 has been taken");
					        }
					    }

					    //---------------------------------------------------------------------------------------------------------------------------------------------------


					    // Blocking CS452 from being taken before 451
					    if (box == "sem9" || box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS451")) {
					            if (requirement("CS452") == "sem8")
					                return alert("This course cannot be taken after 452 has been taken");
					        }
					    }


					    if (box == "sem10" || box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS451")) {
					            if (requirement("CS452") == "sem9")
					                return alert("This course cannot be taken after 452has been taken");
					        }
					    }



					    if (box == "sem11" || box == "sem12")

					    {
					        if ((course == "CS451")) {
					            if (requirement("CS452") == "sem10")
					                return alert("This course cannot be taken after 452 has been taken");
					        }
					    }




					    /////---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


					    ev.target.appendChild(document.getElementById(course));
					    ev.target.style.background = "404040";

					}




					// expandable divs code/ for easier drag and drop   
					var sem1child = document.getElementById("sem1").firstChild;
					var sem2child = document.getElementById("sem2").firstChild;
					var sem3child = document.getElementById("sem3").firstChild;
					var sem4child = document.getElementById("sem4").firstChild;
					var sem5child = document.getElementById("sem5").firstChild;
					var sem6child = document.getElementById("sem6").firstChild;
					var sem7child = document.getElementById("sem7").firstChild;
					var sem8child = document.getElementById("sem8").firstChild;
					var sem9child = document.getElementById("sem9").firstChild;
					var sem10child = document.getElementById("sem10").firstChild;
					var sem11child = document.getElementById("sem11").firstChild;
					var sem12child = document.getElementById("sem12").firstChild;
					var div1child = document.getElementById("div1").firstChild;




					//Wishlist

					function div1powerfunction() {
					    div1child.style.marginBottom = "70px";
					}

					function div1closefunction() {
					    div1child.style.marginBottom = "0px";
					}



					// Sem1
					function sem1powerfunction() {
					    sem1child.style.marginBottom = "70px";
					}

					function sem1closefunction() {
					    sem1child.style.marginBottom = "0px";
					}

					//sem2

					function sem2powerfunction() {
					    sem2child.style.marginBottom = "70px";
					}

					function sem2closefunction() {
					    sem2child.style.marginBottom = "0px";
					}


					//sem3

					function sem3powerfunction() {
					    sem3child.style.marginBottom = "70px";
					}

					function sem3closefunction() {
					    sem3child.style.marginBottom = "0px";
					}

					//sem4

					function sem4powerfunction() {
					    sem4child.style.marginBottom = "70px";
					}

					function sem4closefunction() {
					    sem4child.style.marginBottom = "0px";
					}

					//sem5

					function sem5powerfunction() {
					    sem5child.style.marginBottom = "70px";
					}

					function sem5closefunction() {
					    sem5child.style.marginBottom = "0px";
					}

					//sem6

					function sem6powerfunction() {
					    sem6child.style.marginBottom = "70px";
					}

					function sem6closefunction() {
					    sem6child.style.marginBottom = "0px";
					}

					//sem7

					function sem7powerfunction() {
					    sem7child.style.marginBottom = "70px";
					}

					function sem7closefunction() {
					    sem7child.style.marginBottom = "0px";
					}

					//sem8

					function sem8powerfunction() {
					    sem8child.style.marginBottom = "70px";
					}

					function sem8closefunction() {
					    sem8child.style.marginBottom = "0px";
					}


					//sem9

					function sem9powerfunction() {
					    sem9child.style.marginBottom = "70px";
					}

					function sem9closefunction() {
					    sem9child.style.marginBottom = "0px";
					}


					//sem10

					function sem10powerfunction() {
					    sem10child.style.marginBottom = "70px";
					}

					function sem10closefunction() {
					    sem10child.style.marginBottom = "0px";
					}

					//sem11

					function sem11powerfunction() {
					    sem11child.style.marginBottom = "70px";
					}

					function sem11closefunction() {
					    sem11child.style.marginBottom = "0px";
					}


					//sem12

					function sem12powerfunction() {
					    sem12child.style.marginBottom = "70px";
					}

					function sem12closefunction() {
					    sem12child.style.marginBottom = "0px";
					}



					// Search filter
					window.document.body.querySelector('#filter').addEventListener('keyup', search, true);

					function search() {
					    var keyword = this.value.toLowerCase();

					    Array.prototype.forEach.call(document.body.querySelectorAll('.ff-items li'), function(searchresult) {

					        if ((searchresult.innerHTML.toLowerCase().match(keyword) != undefined) || (searchresult.innerHTML.toUpperCase().match(keyword) != undefined)) {
					            searchresult.style.display = 'inline';



					        } else {
					            searchresult.style.display = 'none';
					        }
					    });
					}



				
					    function alert(txt) {

					        //alertbox
					        var alertbox = document.createElement("div");
					        alertbox.setAttribute("id", "alert");
					        document.body.appendChild(alertbox);

					        //alertboxtext
					        var alertboxtext = document.createElement("p");
					        alertboxtext.innerHTML = txt;
					        alertbox.appendChild(alertboxtext);

					        //alertboxbutton
					        var alertboxbutton = document.createElement("button");
					        alertboxbutton.innerText = "    Ok    ";
					        alertbox.appendChild(alertboxbutton);
					        alertboxbutton.addEventListener("click", function() {
					            document.body.removeChild(alertbox);
					        });
					    }


				

					//<![CDATA[

					var accordionItems = new Array();

					function init() {

					    // Grab the accordion items from the page
					    var divs = document.getElementsByTagName('div');
					    for (var i = 0; i < divs.length; i++) {
					        if (divs[i].className == 'accordionItem') accordionItems.push(divs[i]);
					    }

					    // Assign onclick events to the accordion item headings
					    for (var i = 0; i < accordionItems.length; i++) {
					        var h2 = getFirstChildWithTagName(accordionItems[i], 'H2');
					        h2.onclick = toggleItem;

					    }

					    // Hide all accordion item bodies except the first
					    for (var i = 0; i < accordionItems.length; i++) {
					        accordionItems[i].className = 'accordionItem hide';
					    }
					}

					function toggleItem() {
					    var itemClass = this.parentNode.className;


					    // Hide all items
					    for (var i = 0; i < accordionItems.length; i++) {

					        accordionItems[i].className = 'accordionItem hide';


					    }



					    // Show this item if it was previously hidden

					    if (itemClass == 'accordionItem hide') {

					        this.parentNode.className = 'accordionItem';


					    }

					}

					function getFirstChildWithTagName(element, tagName) {
					    for (var i = 0; i < element.childNodes.length; i++) {
					        if (element.childNodes[i].nodeName == tagName) return element.childNodes[i];
					    }
					}