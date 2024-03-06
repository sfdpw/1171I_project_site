var clear_layers_button = L.Control.extend({

  options: {
    position: 'topleft'
  },

  onAdd: function(map) {
    var container = L.DomUtil.create('input');
    container.type = "button";
    container.title = "Remove all Layer(s)";

    container.style.backgroundColor = '#f4f4f4';
    container.style.borderRadius = '3px';
    //container.style.border = '3px';//' rgba(255, 255, 255, 0.4)';
    container.style.backgroundClip = 'padding-box';
    container.style.backgroundImage = 'url("css/images/clear_layers.png")';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundPosition = '50% 50%';
    container.style.backgroundSize = '20px 20px';
    container.style.width = '36px';
    container.style.height = '36px';
    //container.style.zindex = 'auto';
    container.onmouseover = function() {
      container.style.backgroundColor = 'pink';
    }
    container.onmouseout = function() {
      container.style.backgroundColor = '#f4f4f4';
    }
   

    container.onclick = function() {

      sweep_clear_layers();
    }

    return container;

  }
});

function check_clone(checkbox_id)

{

  if (checkbox_id.includes("_twin_popup"))

  {

    document.getElementById(checkbox_id.replace('_twin_popup', '_twin_menu')).checked = document.getElementById(checkbox_id).checked;

  } else if (document.getElementById(checkbox_id.replace('_twin_menu', '_twin_popup')) != null)

  {

    document.getElementById(checkbox_id.replace('_twin_menu', '_twin_popup')).checked = document.getElementById(checkbox_id).checked;

  }

}

function sweep_check_clone()

{

  var check_box_list = document.getElementsByTagName("INPUT");

  for (var ii = 0; ii < check_box_list.length; ii++)

  {

    if (check_box_list[ii].id.includes('_twin_menu') &&
      document.getElementById(check_box_list[ii].id).checked &&
      document.getElementById(check_box_list[ii].id.replace('_twin_menu', '_twin_popup')) != null) {

      document.getElementById(check_box_list[ii].id.replace('_twin_menu', '_twin_popup')).checked = true;

    }

  }

}

function sweep_clear_layers()

{

  //var overlay_layer_id = "";

  var check_box_list = document.getElementsByTagName("INPUT");

  for (var ii = 0; ii < check_box_list.length; ii++)

  {

    if (check_box_list[ii].type == 'checkbox' &&
        check_box_list[ii].id.includes('checkbox_osm') == false)

    {

      if (document.getElementById(check_box_list[ii].id).checked == true)

      {

        document.getElementById(check_box_list[ii].id).click();

      }

    }

  }

}

function layer_card_entry_generator(layer_index)

{

    var card_entry = '';

    card_entry =

        '<tr><td>\
           <input type="checkbox" id="L_' + layer_index + '" onchange="master_layer_array[' + layer_index + '].toggle()">\
             </td><td><img src="legend/1171I_L_' + layer_index + '.png" width="13" height="13"\
                         alt="Feature Symbol -' + master_layer_array[layer_index].layer_description + '"/>\
                    <label class="layer_label" for="L_' + layer_index + '">' +
        master_layer_array[layer_index].layer_description + '</label></td></tr>';

    return card_entry

}


function feature_layer_toggle(master_checkbox_id, L_index_start, L_index_end)

{

    var layer_int = 0;

    var check_box_list = document.getElementsByTagName("INPUT");

    for (var ii = 0; ii < check_box_list.length; ii++)

    {

        layer_int = parseInt(check_box_list[ii].id.substring(2, 5));


        if (check_box_list[ii].type == 'checkbox' &&
            (layer_int >= L_index_start && layer_int <= L_index_end ))

        {


            if (document.getElementById(master_checkbox_id).checked)

            {

                if (document.getElementById(check_box_list[ii].id).checked == false)

                {

                    document.getElementById(check_box_list[ii].id).click();

                }

            } 
            
             else

            {

                if (document.getElementById(check_box_list[ii].id).checked)

                {

                    document.getElementById(check_box_list[ii].id).click();

                }

            }

        }

    }

}


function add_feature_layer(type, layer_index, source_json_layer_obj, scope, rgba_code)

  {

    master_layer_array[layer_index] = {};

    var local_json_layer_obj = source_json_layer_obj;

    master_layer_array[layer_index].loaded = false;

    master_layer_array[layer_index].type = local_json_layer_obj.type;

    master_layer_array[layer_index].name = local_json_layer_obj.name;
 
    master_layer_array[layer_index].crs = local_json_layer_obj.crs;

    master_layer_array[layer_index].features = [];

    master_layer_array[layer_index].layer = {};

    if (type == 'mn')
    
      {
      
        master_layer_array[layer_index].layer_description = scope;
        master_layer_array[layer_index].toggle = 
       
        function() {toggle_sw_mn(type, layer_index, master_layer_array, local_json_layer_obj, scope, rgba_code);}
                                                            
       }
   
    else if (type == 'mh')
    
      {
      
       master_layer_array[layer_index].layer_description = scope;
       master_layer_array[layer_index].toggle = 
       
         function() {toggle_sw_mh(type, layer_index, master_layer_array, local_json_layer_obj, scope, rgba_code);}
                                                                               
       }
       
    else if (type == 'cl')

      {
      
       master_layer_array[layer_index].layer_description = scope;
       master_layer_array[layer_index].toggle = 
       
         function() {toggle_sw_cl(type, layer_index, master_layer_array, local_json_layer_obj, scope, rgba_code);}
                                                                               
      }

       
    else if (type == 'cb')

      {
      
       master_layer_array[layer_index].layer_description = scope;
       master_layer_array[layer_index].toggle = 
       
         function() {toggle_sw_cb(type, layer_index, master_layer_array, local_json_layer_obj, scope, rgba_code);}
                                                                               
      }
 
     else if (type == 'lt')

      {
      
       master_layer_array[layer_index].layer_description = scope;
       master_layer_array[layer_index].toggle = 
       
         function() {toggle_sw_lt(type, layer_index, master_layer_array, local_json_layer_obj, scope, rgba_code);}
                                                                               
      }
      
     else if (type == 'R_polygon')

      {
      
       master_layer_array[layer_index].layer_description = scope;
       master_layer_array[layer_index].toggle = 
       
          function() {flatwork_layer_toggle(layer_index, master_layer_array, local_json_layer_obj,           
                                            scope, rgba_code);}
                                                                               
      }  
      
     //  else if (type == 'R_point')

     //  {
           
     //   master_layer_array[layer_index].layer_description = scope;
     //   master_layer_array[layer_index].toggle = 
     //  
     //     function() {flatwork_point_layer_toggle(layer_index, master_layer_array, local_json_layer_obj,           
     //                                      scope, rgba_code);}
                                                                               
     //  }       
      
    }                                                                          
                                                                             

   
