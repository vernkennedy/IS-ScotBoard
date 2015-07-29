<!DOCTYPE html>
<html lang="en">


<head>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body onload="myFunction()">


	<div class="container">

		<div id="container">
			<span class="drop" id="sem1" ondrop="drop(event)" ondragenter=" sem1powerfunction()" ondragover="allowDrop(event)"><h3 id="fall1" align="center">Fall 1</h3></span>
			<span class="drop" id="sem2" ondrop="drop(event)" ondragenter=" sem2powerfunction()" ondragover="allowDrop(event)"><h3 id="spring1" align="center">Spring 1</h3></span>
			<span class="drop" id="sem3" ondrop="drop(event)" ondragenter=" sem3powerfunction()" ondragover="allowDrop(event)"><h3 id="summer1" align="center">Summer 1</h3></span>

			<span class="drop" id="sem4" ondrop="drop(event)" ondragenter=" sem4powerfunction()" ondragover="allowDrop(event)"><h3 id="fall2" align="center">Fall 2</h3></span>
			<span class="drop" id="sem5" ondrop="drop(event)" ondragenter=" sem5powerfunction()" ondragover="allowDrop(event)"><h3 id="spring2" align="center">Spring 2</h3></span>
			<span class="drop" id="sem6" ondrop="drop(event)" ondragenter=" sem6powerfunction()" ondragover="allowDrop(event)"><h3 id="summer2" align="center">Summer 2</h3></span>

			<span class="drop" id="sem7" ondrop="drop(event)" ondragenter=" sem7powerfunction()" ondragover="allowDrop(event)"><h3 id="fall3"  align="center">Fall 3</h3></span>
			<span class="drop" id="sem8" ondrop="drop(event)" ondragenter=" sem8powerfunction()" ondragover="allowDrop(event)"><h3 id="spring3"  align="center">Spring 3</h3></span>
			<span class="drop" id="sem9" ondrop="drop(event)" ondragenter=" sem9powerfunction()" ondragover="allowDrop(event)"><h3 id="summer3"  align="center">Summer 3</h3></span>

			<span class="drop" id="sem10" ondrop="drop(event)" ondragenter=" sem10powerfunction()" ondragover="allowDrop(event)"><h3 id="fall4" align="center">Fall 4</h3></span>
			<span class="drop" id="sem11" ondrop="drop(event)" ondragenter=" sem11powerfunction()" ondragover="allowDrop(event)"><h3 id="spring4" align="center">Spring 4</h3></span>
			<span class="drop" id="sem12" ondrop="drop(event)" ondragenter=" sem12powerfunction()" ondragover="allowDrop(event)"><h3 id="summer4" align="center">Summer 4</h3></span>
		</div>



		<section class="ff-container">
			<!--Scotboard-->
			<p id="headertext" align="middle" color="silver">
				<br>ScotBoard</p>

			<!--Filters-->
			<label id="filterby" for="select-type-al" class="ff-label-type-ll">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspFILTER BY: </label>

			<input id="select-type-all" name="radio-set-1" type="radio" class="ff-selector-type-all" checked="checked" />&nbsp
			<label for="select-type-all" class="ff-label-type-all">No filter&nbsp</label>

			<input id="select-type-1" name="radio-set-1" type="radio" class="ff-selector-type-1" />

			<label for="select-type-1" class="ff-label-type-1">Fall Only&nbsp</label>

			<input id="select-type-2" name="radio-set-1" type="radio" class="ff-selector-type-2" />
			<label for="select-type-2" class="ff-label-type-2">Spring Only&nbsp</label>

			<input id="select-type-3" name="radio-set-1" type="radio" class="ff-selector-type-3" />
			<label for="select-type-3" class="ff-label-type-3">Summer Only&nbsp</label>

			<input id="select-type-4" name="radio-set-1" type="radio" class="ff-selector-type-4" />
			<label for="select-type-4" class="ff-label-type-4">Fall & Spring &nbsp</label>&nbsp

			<input id="select-type-5" name="radio-set-1" type="radio" class="ff-selector-type-5" />
			<label for="select-type-5" class="ff-label-type-5">Fall & Summer&nbsp</label>

			<input id="select-type-6" name="radio-set-1" type="radio" class="ff-selector-type-6" />
			<label for="select-type-6" class="ff-label-type-6">Spring & Summer&nbsp</label>

			<input id="select-type-7" name="radio-set-1" type="radio" class="ff-selector-type-7" />
			<label for="select-type-7" class="ff-label-type-7">YearRound &nbsp</label>

			<!--WishList Title-->
			<h3 id="offeringtitle2">My WishList</h3>

			<!--Woo Title-->
			<h3 id="offeringtitle" color="silver">The College of Wooster</h3>

			<!--WishList-->
			<section id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
			</section>

			<!--Database connection and querying-->
			<?php include 'essentialPHP.php';?>
		</section>




		<div id="searchcontainer">
			<!--Universal search form-->
			<form method="get">
				<input id="filter" autocomplete="off" placeholder="Search for courses, activities etc" class="gn-search" x-webkit-speech onwebkitspeechchange="searchthis()" />
			</form>

			<!--Print Button-->
			<div id="print" onclick="printFunction()" title="Click to print your plan">Print</div>
		</div>

	</div>

	<!--All JavaScripts-->
	<script src="RuleBase.js"></script>

</body>

</html>