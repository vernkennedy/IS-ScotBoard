<?php
require 'connect.php';

$query="SELECT * FROM courses ORDER BY departmentName";
	if($query_run=mysql_query($query)){
		
		echo '<ul class="ff-items">';
		echo '<div class="accordionItem"><h2 id="courses">COURSES</h2>
      <div id="coursesdiv">';
	
		while($query_row=mysql_fetch_assoc($query_run)){
				$id=$query_row['id'];
				$departmentName=$query_row['departmentName'];
				$courseNumber=$query_row['courseNumber'];
				$courseName=$query_row['courseName'];
				$courseDescription=$query_row['courseDescription'];				
				$GEDrequirements=$query_row['GEDrequirements'];
				$termOffered=$query_row['termOffered'];
				$yearOffered=$query_row['yearOffered'];
				$nextOffered=$query_row['nextOffered'];			
			    $tags=$query_row['tags'];
				$year='year';
				
				// if statements for parsing the term to the filter
			
				if($termOffered=="Fall"){
					$termOfferedforfilter='ff-item-type-1';
				}
				else if($termOffered=="Spring"){
					$termOfferedforfilter='ff-item-type-2';
				}
				else if($termOffered=="Summer"){
					$termOfferedforfilter='ff-item-type-3';
				}
				else if($termOffered=="Fall&Spring"){
					$termOfferedforfilter='ff-item-type-4';
				}
				else if($termOffered=="Fall&Summer"){
					$termOfferedforfilter='ff-item-type-5';
				}
				else if($termOffered=="Spring&Summer"){
					$termOfferedforfilter='ff-item-type-6';
				}
				else if($termOffered=="YearRound"){
					$termOfferedforfilter='ff-item-type-7';
				}
				
				
	
		
		echo '<li draggable ="true" ondragstart="drag(event)" target="_md-trigger" class="'.$termOfferedforfilter.'" data-modal="'.$departmentName.'" id="'.$departmentName.$courseNumber.'"><div title="'.$courseDescription.'"> '.$departmentName.' '.$courseNumber.' : '.$courseName.'</div>
					<i>'.$termOffered.'</i>					
					&nbsp
					<i>'.$GEDrequirements.'</i>
					&nbsp
					<i>'.$yearOffered.'</i>	
					&nbsp
					<i>'.$nextOffered.'</i>	
				    
					<i id="'.$departmentName.$courseNumber.$year.'">'.$yearOffered.'</i>	
					</span>
					
				
				
			</li>  ';
			

	    echo '	<div class="md-modal md-effect-1" id="'.$departmentName.'">
			<div class="md-content">
				<h3>'.$departmentName.' '.$courseNumber.' : '.$courseName.'</h3>
				<div>
				
					
					
					
					COURSE DESCRIPTION<br>
					'.$courseDescription.'
					
					<br><br>TERM OFFERED<br>
					'.$termOffered.'
					
					
				
					<button class="md-close" title="click here to close">x</button>
				</div>
			</div>
		</div> ';
	
		
		}
		echo ' </div>   </div>';
	}
	else {
		echo 'query not sent ';
	}
	

?>




	<?php


$query="SELECT * FROM cocurricular ORDER BY departmentName";
	if($query_run=mysql_query($query)){
		
		
	    	echo '<div class="accordionItem"><h2>EXTRA-CURRICULAR</h2><div>';
		while($query_row=mysql_fetch_assoc($query_run)){
			$id=$query_row['id'];
				$departmentName=$query_row['departmentName'];
				$activityName=$query_row['activityName'];
				$activityType=$query_row['activityType'];
				$activityDescription=$query_row['activityDescription'];
				$termOffered=$query_row['termOffered'];
				$tags=$query_row['tags'];
					// if statements for parsing the term to the filter
			
				if($termOffered=="Fall"){
					$termOfferedforfilter='ff-item-type-1';
				}
				else if($termOffered=="Spring"){
					$termOfferedforfilter='ff-item-type-2';
				}
				else if($termOffered=="Summer"){
					$termOfferedforfilter='ff-item-type-3';
				}
				else if($termOffered=="Fall&Spring"){
					$termOfferedforfilter='ff-item-type-4';
				}
				else if($termOffered=="Fall&Summer"){
					$termOfferedforfilter='ff-item-type-5';
				}
				else if($termOffered=="Spring&Summer"){
					$termOfferedforfilter='ff-item-type-6';
				}
				else if($termOffered=="YearRound"){
					$termOfferedforfilter='ff-item-type-7';
				}
		
		echo '<li  draggable ="true" ondragstart="drag(event)" title="'.$activityDescription.'" class="'.$termOfferedforfilter.'" data-modal="'.$departmentName.$activityName.'" id="'.$activityName.'"><div > '.$activityName.' </div>
					<i>'.$departmentName.'</i>					
				
					<i>('.$activityType.')</i>	
					&nbsp
					<i><br>'.$termOffered.'</i>
				    <span id="tags">'.$tags.'</span>
				
			</li>';
			
		
		}
	  echo ' </div>   </div>';
	}
	else {
		echo 'query not sent';
	}
	


?>





		<?php


$query="SELECT * FROM extracuricular ORDER BY departmentName";
	if($query_run=mysql_query($query)){
		
		
		echo '<div class="accordionItem"><h2>CO-CURRICULAR</h2><div id="coursediv">';
		
	    
		while($query_row=mysql_fetch_assoc($query_run)){
			$id=$query_row['id'];
				$departmentName=$query_row['departmentName'];
				$activityName=$query_row['activityName'];
				$activityType=$query_row['activityType'];
				$activityDescription=$query_row['activityDescription'];
				$termOffered=$query_row['termOffered'];
				$tags=$query_row['tags'];
					// if statements for parsing the term to the filter
			
				if($termOffered=="Fall"){
					$termOfferedforfilter='ff-item-type-1';
				}
				else if($termOffered=="Spring"){
					$termOfferedforfilter='ff-item-type-2';
				}
				else if($termOffered=="Summer"){
					$termOfferedforfilter='ff-item-type-3';
				}
				else if($termOffered=="Fall&Spring"){
					$termOfferedforfilter='ff-item-type-4';
				}
				else if($termOffered=="Fall&Summer"){
					$termOfferedforfilter='ff-item-type-5';
				}
				else if($termOffered=="Spring&Summer"){
					$termOfferedforfilter='ff-item-type-6';
				}
				else if($termOffered=="YearRound"){
					$termOfferedforfilter='ff-item-type-7';
				}
		
		echo '<li draggable ="true" ondragstart="drag(event)" title="'.$activityDescription.'" class="'.$termOfferedforfilter.'" data-modal="'.$departmentName.$activityName.'" id="'.$activityName.'"><div > '.$activityName.' </div>
					<i>'.$departmentName.'</i>					
				
					<i>('.$activityType.')</i>	
					&nbsp
					<i><br>'.$termOffered.'</i>
				    <span id="tags">'.$tags.'</span>
				
			</li>';
			
		
		
		
			
			
		
		}
	   echo ' </div>   </div>';
	   	 echo'<div   ondrop="drop(event)" ondragover="allowDrop(event)" class="accordionItem"> <h2>RECYCLE BIN</h2> <p id="recyclebin"><br>Drag here to recycle<br></p> ';
	
	echo ' </div>';	
	 echo '</ul>';
	}
	else {
		echo 'query not sent';
	}
	


?>