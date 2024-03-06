/*################# SHEET ENTRY CREATOR ########################################################## */
function popup_sheet_entry_creator(twin_op, dwg_type, dwg_no, specifier)

{

    var output_string = "";
    var overlay_checkbox = "";
    var specifier_text = '';

    for (let nn = 0; nn <= dwg_no[1]; nn++) {

        if (specifier != '') {

            overlay_checkbox = 'layer_1171I_dwg_tile_'.concat(dwg_type, "_", dwg_no[0], "_", specifier, "_", num_pad(nn, 3));
            specifier_text = ' - '.concat(specifier);

        } else {

            overlay_checkbox = 'layer_1171I_dwg_tile_'.concat(dwg_type, "_", dwg_no[0], "_", num_pad(nn, 3));

        }


        output_string += "<input type=\"checkbox\" id=\"".concat(overlay_checkbox, twin_op,
            "\" onchange=\"handleChange(this, ", overlay_checkbox, ");\">&nbsp;");

        if (nn > 0) {

            output_string += "<a href=\".\\sheets\\1171I_dwg_".concat(dwg_type, "-", dwg_no[0],
                "_rev", num_pad(nn, 2), ".pdf\" target=\"_blank\">", dwg_type, " ", dwg_no[0], " Rev. ", nn, specifier_text, "<\/a><br>");

        } else {

            output_string += "<a href=\".\\sheets\\1171I_dwg_".concat(dwg_type, "-", dwg_no[0],
                ".pdf\" target=\"_blank\">", dwg_type, " ", dwg_no[0], specifier_text, "<\/a><br>");

        }

    }

    return output_string

}


/*################# RELEVANT DOC ENTRY CREATOR ########################################################## */

function rlvnt_entry_creator(rlvnt_array, striping_plan_array = [])

{

    var output_string = "";

    //var overlay_checkbox = "";
    //var file_name = "";
    //var file_name_length = "";
    //var file_desc = "";


    for (const striping_plan of striping_plan_array)

    {

        output_string += "<a href=\".\\sheets\\1171I_dwg_T_".concat(striping_plan, ".pdf\" target=\"_blank\">".concat("T-", striping_plan).replace("-0", "-"), " - Striping Plan<\/a><br>");

    }

    for (const rlvnt_doc of rlvnt_array)

    {

        output_string += "<a href=\".\\sheets\\".concat(rlvnt_doc.file_name, ".pdf\" target=\"_blank\">",
            rlvnt_doc.file_name.concat(' - ', rlvnt_doc.desc).replace('1171I_dwg_', 'Project Sheet ').replace(/_/g, ' '), "<\/a><br>");

    }

    return output_string

}

/*################# UTILITY PLAN ENTRY CREATOR ########################################################## */

//function utility_plan_entry_creator(utility_plan_array)

//{

//    var output_string = "";
//    var overlay_checkbox = "";

//   for (const utility_plan of utility_plan_array)

//        {

//         overlay_checkbox = 'layer_1171I_dwg_'.concat(utility_plan);

//         output_string += "<input type=\"checkbox\" id=\"".concat(overlay_checkbox, '_twin_popup',
//            "\" onchange=\"handleChange(this, ", overlay_checkbox, ");\">", 
//            " <a href=\".\\sheets\\1171I_dwg_".concat(utility_plan.substring(0,4)),
//            ".pdf\" target=\"_blank\">", 'aaa' , "<\/a><br>");

//        }

//    return output_string

//}

/*################# UTILITY PLAN ENTRY CREATOR ########################################################## */

//function popup_u_plan_entry_creator(dwg_no) {

//    var output_string = "";

//output_string = output_string.concat(
//       "<a href=\".\\sheets\\1171I_dwg_U_", dwg_no , ".pdf\" target=\"_blank\">U-", dwg_no, "<\/a>"
//       ); 

//    return output_string

//}




/*################# SPEC ENTRY CREATOR ########################################################## */

function popup_spec_entry_creator(popup_args = null)

{

    var output_string = "";

    if (popup_args == null) {
        output_string = 'none';
    } else {

        var file_name = "";
        var file_name_length = "";
        var file_desc = "";


        for (var ii = 0; ii < popup_args.length; ii += 2)

        {

            file_name = popup_args[ii].replace(/ /g, '_');
            file_desc = popup_args[ii + 1];



            for (var jj = 0; jj < list_of_specs.length; jj++)

            {

                //alert(list_of_specs[jj].substring(6, 6 + file_name.length));

                if (file_name == list_of_specs[jj].substring(6, 6 + file_name.length))

                {

                    //alert(file_name);

                    file_name_length = file_name.length;
                    file_name = list_of_specs[jj].substring(6, list_of_specs[jj].length - 4);



                }


            }


            if (file_desc == null)

            {
                //             output_string = output_string.concat("<a href=\".\\specs\\1171I_", file_name, ".pdf\" target=\"_blank\">", file_name.substring(0, file_name_length), "<\/a> - ", file_name.substring(file_name_length+1, file_name.length).replace(/_/g,' '));
            } else

            {
                //            output_string = output_string.concat("<a href=\".\\specs\\1171I_", file_name, ".pdf\" target=\"_blank\">", file_name.substring(0, file_name_length).replace(/_/g,' '), "<\/a> - ", file_desc);
            }



            if (ii != popup_args.length) {
                //            output_string = output_string.concat("<br>");
            }


        }


    }

    return output_string

}

/* ################# AS BUILT ENTRY CREATOR ########################################################## */


function popup_as_built_entry_creator(feature)

{

    var output_string = '';
    var compare_string = '';

    for (const as_built_list_entry of json_ab_list)

    {

      compare_string = as_built_list_entry.substring(15, 20)
      
      if ( compare_string.slice(-1) == '_' ) {
      
        compare_string = compare_string.substring(0, compare_string.length-1)
      
      } 
    
     
        if ( compare_string == feature.properties.dwg_type.concat('_', feature.properties.dwg_no[0]) )
        
         {

            output_string += "<a href=\".\\as_builts\\".concat(as_built_list_entry,
                ".pdf\" target=\"_blank\">", as_built_list_entry.replace('1171I_', ''), "<\/a><br>");

        }

    }

    if (output_string == '') {
        output_string = 'none';
    }

    return output_string

}

/* ################# TCP ENTRY CREATOR ########################################################## */


function popup_tcp_entry_creator(feature)

{

    var output_string = '';
    var tcp_desc = '';
    var specifier_suffix = '';

    if (feature.properties.specifier != '') {
        specifier_suffix = '_'.concat(feature.properties.specifier);
    }

    for (const tcp of project_tcp_array) {

        tcp_desc = '';

        for (const rvln_bndry of tcp.rlvn) {

            if (rvln_bndry == feature.properties.dwg_type.concat('_', feature.properties.dwg_no[0], specifier_suffix)) {

                if (tcp.desc != '') {
                    tcp_desc = ' - '.concat(tcp.desc);
                }

                output_string += "<a href=\".\\tcps\\1171I_TCP_".concat(tcp.numb, ".pdf\" target=\"_blank\">TCP ", tcp.numb, tcp_desc, '<\/a><br>');

            }

        }

    }

    if (output_string == '') {
        output_string = 'none';
    }

    return output_string

}
