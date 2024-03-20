var max_pp_no = 11; // make this smarter

function top_nav(nav_element, pp_no = null, bid_item_id = null) {

	var return_block = '';
	var nav_path = '../';

	if (nav_element == 'map') {

		nav_path = '';

	}

	return_block =

		'<nav class="navbar navbar-expand-lg bg-nav navbar-dark bg-primary">\
       <button class="navbar-toggler"\
                type="button"\
                data-bs-toggle="collapse"\
                data-bs-target="#main_nav"\
                aria-expanded="false"\
                aria-label="Toggle navigation">\
         <span class="navbar-toggler-icon"></span>\
       </button>\
       <div class="collapse navbar-collapse" id="main_nav" >\
         <ul class="navbar-nav">\
	   <li class="nav-item active">\
             <a class="nav-link" href="' + nav_path + 'index.html">Map</a>\
           </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Payments</a>\
	     <ul class="dropdown-menu">';

	for (var ii = 1; ii < max_pp_no; ii++) {

		return_block += '<li><a class="dropdown-item" href="' + nav_path +
			'payments/payment_details_PP'.concat(num_pad(ii, 2), '.html">PP', num_pad(ii, 2),
				' - ', payment_array['PP'.concat(num_pad(ii, 2))], '</a></li>');

	}

	return_block +=

		'</ul>\
	   </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">QTYs</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="#">Flatwork &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	       </li>\
	       <li>\
	             <a class="dropdown-item" href="#">Street Rennovation &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-02.html"><b>R-02:</b> Temp Tape</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-03.html"><b>R-03:</b> Planing</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-04.html"><b>R-04:</b> HMA Paving</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-05.html"><b>R-05:</b> 8in Concrete Street Base</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-06.html"><b>R-06:</b> 10in Concrete Street Base</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-07.html"><b>R-07:</b> Conc. Pavement, Gutter, Parking Stip</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-28.html"><b>SW-28:</b> Concrete Street Base Beyond Sewer Limits</a>\
	               </li>\
	             </ul>\
	       </li>\
	       <li>\
	             <a class="dropdown-item" href="#">Sidewalk, Curb and Gutter &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-08.html"><b>R-08:</b> Sidewalk</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-09.html"><b>R-09:</b> Granite Curb</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-10.html"><b>R-10:</b> Concrete Curb</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-11.html"><b>R-11:</b> Combined Curb and Gutter</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-12.html"><b>R-12:</b> Curb Ramps</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_R-18.html"><b>R-18:</b> Tree Protection</a>\
	               </li>\
	             </ul>\
	       </li>\
	     </ul>\
	     </li>\
	     <li>\
	       <a class="dropdown-item" href="#">Sewer &raquo;</a>\
	       <ul class="submenu dropdown-menu">\
	         <li>\
	             <a class="dropdown-item" href="#">Side Sewers, Culverts &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-10.html"><b>SW-10:</b> Side Sewer and Culvert Bypass</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-18.html"><b>SW-18:</b> Side Sewer and Culvert Re-Instatement</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-19.html"><b>SW-19:</b> Side Sewer Connection</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-20.html"><b>SW-20:</b> Pre-Con TVI of (E) Side Sewers and Culverts</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-21.html"><b>SW-21:</b> Side Sewer Construction</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-22.html"><b>SW-22:</b> Culvert Construction</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-27.html"><b>SW-27:</b> Post-Con TVI of (N) Side Sewers and Culverts</a>\
	               </li>\
	             </ul>\
	       </li>\
	       <li>\
	             <a class="dropdown-item" href="#">Mains &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-08.html"><b>SW-08:</b> Removal of (E) Rat Walk</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-09.html"><b>SW-09:</b> Bypass (E) Main during CIPL and Mortaring</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-11.html"><b>SW-11:</b> 12in VCP Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-12.html"><b>SW-12:</b> Mortar (E) 3\'x5\' Brick Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-13.html"><b>SW-13:</b> 27in VCP Main</a>\
	               </li>\
				   <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-14.html"><b>SW-14:</b> Line (E) 3\'x5\' Brick Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-15.html"><b>SW-15:</b> Line (E) 18\" ISP Main</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-16.html"><b>SW-16:</b> Pre-Con (Pre CIPL) TVI of (E) Mains</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-25.html"><b>SW-25:</b> Post-Con TVI of (N) Mains</a>\
	               </li>\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-26.html"><b>SW-26:</b> Post-Con TVI of Lined (E) Mains</a>\
	               </li>\
	             </ul>\
	       </li>\
	       <li>\
	             <a class="dropdown-item" href="#">Catch Basins &raquo;</a>\
	             <ul class="submenu dropdown-menu">\
	               <li>\
	                 <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-23.html"><b>SW-23:</b> (N) CB - STD 87,188</a>\
	               </li>\
	             </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">Manholes &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-03.html"><b>SW-03:</b> (N) MH - STD 87,181</a>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-04.html"><b>SW-04:</b> (N) MH - STD 87,182</a>\
	           </li>\
	           <li>\
	             <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-05.html"><b>SW-05:</b> (N) MH - STD 87,184</a>\
	           </li>\
			   <li>\
			     <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-07.html"><b>SW-07:</b> Mortar (E) MH</a>\
			   </li>\
	         </ul>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="#">Misc &raquo;</a>\
	         <ul class="submenu dropdown-menu">\
	           <li>\
	             <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_SW-31.html"><b>SW-31:</b> Potholing</a>\
	           </li>\
	         </ul>\
	       </li>\
	     </ul>\
	   </li>\
	   <li>\
	    <a class="dropdown-item" href="#">PCOs &raquo;</a>\
	    <ul class="submenu dropdown-menu">\
		  <li>\
		    <a class="dropdown-item" href="#">PCO 2 - 18" VCP on SVN - 14th St to 15th St &raquo;</a>\
			<ul class="submenu dropdown-menu">\
			  <li>\
				<a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_PCO-02_SW-05.html"><b>PCO-02 - SW-05:</b> Deletion - (N) Box MH per 87,184</a>\
			  </li>\
			  <li>\
				<a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_PCO-02_SW-07.html"><b>PCO-02 - SW-07:</b> Deletion - Mortar (E) MH</a>\
			  </li>\
			  <li>\
			    <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_PCO-02_SW-14.html"><b>PCO-02 - SW-14:</b> Deletion - Line (E) 3\'x5\' Brick Main</a>\
			  </li>\
			  <li>\
			    <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_PCO-02_SW-18.html"><b>PCO-02 - SW-18:</b> Deletion - Side Sewer and Culvert Re-Instatement</a>\
		      </li>\
		      <li>\
		        <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_PCO-02_SW-26.html"><b>PCO-02 - SW-26:</b> Deletion - Post-Con TVI of Lined (E) Mains</a>\
		      </li>\
		      <li>\
		        <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_PCO-02_SW-03.html"><b>PCO-02 - SW-03:</b> Addition - (N) MH - STD 87,181</a>\
		      </li>\
			  <li>\
			    <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_PCO-02_SW-19.html"><b>PCO-02 - SW-19:</b> Addition - Side Sewer Connection</a>\
			  </li>\
			  <li>\
			    <a class="dropdown-item" href="' + nav_path + 'qty/qty_tracking_PCO-02_SW-25.html"><b>PCO-02 - SW-25:</b> Addition - Post-Con TVI of (N) Mains</a>\
			  </li>\
			</ul>\
	      </li>\
	    </ul>\
      </li>\
	 </ul>\
	   </li>\
	   <li class="nav-item dropdown">\
	     <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Tracking</a>\
	     <ul class="dropdown-menu">\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_lines.html">Sewer Mains, Culverts and Laterals</a>\
	       </li>\
	       <li>\
	         <a class="dropdown-item" href="' + nav_path + 'tracking/sw_tracking_points.html">Sewer MHs and CBs</a>\
	       </li>\
	     </ul>\
	   </li>\
	   <li class="nav-item active">\
	     <a class="nav-link" href="' + nav_path + 'specs/specs.html">Specs</a>\
           </li>\
	   <li class="nav-item active">\
	     <a class="nav-link" href="' + nav_path + 'other/1171I_mixes.pdf" target="_blank">Mixes</a>\
           </li>\
         </ul>\
       </div>';

	if (nav_element == 'payment_details') {

		return_block += '<div style="float:right; padding-right:10px; color:white; font-weight:bold">Payment Details for PP ' + pp_no + '</div>';

	} else if (nav_element == 'qty') {

		return_block +=

			'<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    data-toogle="tooltip"\
	            title="' + base_sov[bid_item_sov_index_finder(bid_item_id)].description + ' (' +
			base_sov[bid_item_sov_index_finder(bid_item_id)].unit + ')"\> Quantity Details for ' + bid_item_id + '</div>';

	} else if (nav_element.includes('Asset_Tracking')) {

		return_block +=

			'<div style="float:right;\
                    padding-right:10px;\
                    color:white;\
                    font-weight:bold"\
                    >' + nav_element.replace(/_/g, " ") + '</div>';

	}

	return_block += '</nav>';

	return return_block

}
