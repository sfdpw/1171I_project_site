// ################# SHEET ENTRY CREATOR ####################################################

function popup_sheet_entry_creator(twin_op, dwg_type, dwg_no, specifier, pop_deets) {

    var view_table = '<table>';
    var view_desc = '';


    if (specifier != '') {

        var head_text = '(View '.concat(specifier.toUpperCase(), ')');
        view_table += '<tr><th colspan="3">'.concat(head_text, '</th></tr>');
        view_table += '<tr><td colspan="3">'.concat('&nbsp;', '</td></tr>');

    }

    for (const view_row of pop_deets) {

        view_desc = '';
        view_table += '<tr style="height:18px">';

        if (view_row[0] == '') {

            view_table += '<td></td>';

        } else {

            view_table += '<td><input type=\"checkbox\" id=\"'.concat(
                view_row[0], twin_op, '\" onchange=\"handleChange(this, ',
                view_row[0], ');\"></td>');
        }

        if (view_row[2] != '') {

            var view_desc = ' - '.concat(view_row[2]);

        }

        if (view_row[1] != '') {

            view_table += '<td><a href=\".\\sheets\\'.concat(
                view_row[1], '.pdf\" target=\"_blank\">',
                view_row[1].replace('1171I_dwg_', '').replace('_rev', ' Rev. '), '<\/a></td>');
            view_table += '<td>'.concat(view_desc, '</td>');

        } else {

            view_table += '<td>'.concat(view_desc, '</td>');
            view_table += '<td></td>';

        }

        view_table += '</tr>';
    }

    view_table += '</table>'

    return view_table
}

// ################# RELEVANT DOC ENTRY CREATOR ###############################################

function rlvnt_entry_creator(rlvnt_array) {

    var output_string = "";

    //var overlay_checkbox = "";
    //var file_name = "";
    //var file_name_length = "";
    //var file_desc = "";

    for (const rlvnt_doc of rlvnt_array) {

        output_string += "<a href=\".\\sheets\\".concat(rlvnt_doc.file_name, ".pdf\" target=\"_blank\">",
            rlvnt_doc.file_name.concat(' - ', rlvnt_doc.desc).replace('1171I_dwg_', '').replace(/_/g, ' '), "<\/a><br>");

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

function popup_spec_entry_creator(popup_args = null) {

    var output_string = "";

    if (popup_args == null) {
        output_string = 'none';
    } else {

        var file_name = "";
        var file_name_length = "";
        var file_desc = "";

        for (var ii = 0; ii < popup_args.length; ii += 2) {

            file_name = popup_args[ii].replace(/ /g, '_');
            file_desc = popup_args[ii + 1];

            for (var jj = 0; jj < list_of_specs.length; jj++) {

                //alert(list_of_specs[jj].substring(6, 6 + file_name.length));

                if (file_name == list_of_specs[jj].substring(6, 6 + file_name.length)) {

                    //alert(file_name);

                    file_name_length = file_name.length;
                    file_name = list_of_specs[jj].substring(6, list_of_specs[jj].length - 4);

                }

            }

            if (file_desc == null) {
                //             output_string = output_string.concat("<a href=\".\\specs\\1171I_", file_name, ".pdf\" target=\"_blank\">", file_name.substring(0, file_name_length), "<\/a> - ", file_name.substring(file_name_length+1, file_name.length).replace(/_/g,' '));
            } else {
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


function popup_as_built_entry_creator(feature) {

    var output_string = '';
    var compare_string = '';

    for (const as_built_list_entry of json_ab_list) {

        compare_string = as_built_list_entry.substring(15, 20)

        if (compare_string.slice(-1) == '_') {

            compare_string = compare_string.substring(0, compare_string.length - 1)

        }

        if (compare_string == feature.properties.dwg_type.concat('_', feature.properties.dwg_no[0])) {

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


function popup_tcp_entry_creator(feature) {

    var output_string = '';

    var sheet_id = feature.properties.dwg_type.concat(
        '_', feature.properties.dwg_no
    );

    if (feature.properties.specifier != '') {

        sheet_id = sheet_id.concat('_', feature.properties.specifier);

    }

    //output_string = sheet_id;

    for (const tcp of project_tcp_array) {

        var tcp_desc = '';

        if (tcp.desc != '') {

            tcp_desc = ' - '.concat(tcp.desc);

        }

        for (const tcp_relevancy of tcp.rlvn) {

            if (tcp_relevancy == sheet_id) {

                output_string = output_string.concat(
                    '<a href=\".\\tcps\\1171I_tcp_',
                    tcp.numb,
                    ".pdf\" target=\"_blank\">TCP ",
                    tcp.numb,
                    tcp_desc,
                    '<\/a><br>');

            }

        }

    }

    if (output_string == '') {
        output_string = 'none';
    }

    return output_string

}
