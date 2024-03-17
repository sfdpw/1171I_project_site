function project_dwgs_layer_styler(feature) {

    switch (String(feature.properties.dwg_type)) {

        case 'CR':
            return {
                pane: 'pane_1171I_cr_dwgs',
                opacity: 1,
                color: '#000000',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.5,
                fillColor: '#d71a1c',
                interactive: true,
            }
            break;

        case 'T':
            return {
                pane: 'pane_1171I_t_dwgs',
                opacity: 1,
                color: '#000000',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.5,
                fillColor: '#eb6e44',
                interactive: true,
            }
            break;

        case 'R':
            return {
                pane: 'pane_1171I_r_dwgs',
                opacity: 1,
                color: '#000000',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.5,
                fillColor: '#fdb96e',
                interactive: true,
            }
            break;

        case 'E':
            return {
                pane: 'pane_1171I_e_dwgs',
                opacity: 1,
                color: '#000000',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.5,
                fillColor: '#fde7a3',
                interactive: true,
            }
            break;

        case 'MA':
            return {
                pane: 'pane_1171I_ma_dwgs',
                opacity: 1,
                color: '#000000',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.5,
                fillColor: '#e7f5b7',
                interactive: true,
            }
            break;

        case 'MISC':
            return {
                pane: 'pane_1171I_misc_dwgs',
                opacity: 1,
                color: '#000000',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.5,
                fillColor: '#74b5ad',
                interactive: true,
            }
            break;

        case 'SW':
            return {
                pane: 'pane_1171I_sw_dwgs',
                opacity: 1,
                color: '#000000',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.5,
                fillColor: '#b7e1a7',
                interactive: true,
            }
            break;

        case 'U':
            return {
                pane: 'pane_1171I_u_dwgs',
                opacity: 1,
                color: '#000000',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0,
                fill: true,
                fillOpacity: 0.5,
                fillColor: '#2c83b9',
                interactive: true,
            }
            break;


    }
}




function sw_line_layer_styler(feature) {

    //var dash_code = '';
    //var status_line_weight = 4.0;

    switch (String(feature.properties.status)) {

        case sewer_status_code_array[0]: // Status Not Found
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: feature.rgba_code_stored_in_each_feature,
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 50,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[1]: // No Construction
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: feature.rgba_code_stored_in_each_feature,
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[2]: // Status Not Tracked
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: feature.rgba_code_stored_in_each_feature,
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[3]: // Pending Post-Con Television
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: feature.rgba_code_stored_in_each_feature,
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 15.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[4]: // Post-Con Televised - Accepted
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: feature.rgba_code_stored_in_each_feature,
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 10.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[5]: // Post-Con Televised, Re-Televising Needed
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: feature.rgba_code_stored_in_each_feature,
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 15.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;


        case sewer_status_code_array[6]: //  Pre-Construction
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: feature.rgba_code_stored_in_each_feature,
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[7]: //  Pending Direction
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: feature.rgba_code_stored_in_each_feature,
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[8]: //  Televised - Lining Directed
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: '#ffee01',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 10.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[9]: // Televised - No Other Work Directed
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: feature.rgba_code_stored_in_each_feature,
                dashArray: '10, 10',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 10.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[10]: // Televised - Replacement Directed
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: '#ffee01',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 10.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[11]: // Scope Deleted
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: '#000000',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[12]: // (E) Capped
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: '#000000',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[13]: // (E) Not Found
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: '#000000',
                dashArray: '10, 10',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;

        case sewer_status_code_array[16]: // (E) Abandoned
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                opacity: 1,
                color: '#000000',
                dashArray: '',
                lineCap: 'round',
                lineJoin: 'round',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
            break;


    }
}

function sw_point_layer_styler(feature) {


    switch (String(feature.properties.status)) {

        case sewer_status_code_array[0]: // Status Not Found
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                radius: 50,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2,
                fill: true,
                fillOpacity: 1,
                fillColor: feature.rgba_code_stored_in_each_feature,
                interactive: true,
            }
            break;

        case sewer_status_code_array[1]: // No Construction
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2,
                fill: true,
                fillOpacity: 1,
                fillColor: feature.rgba_code_stored_in_each_feature,
                interactive: true,
            }
            break;

        case sewer_status_code_array[2]: // Status Not Tracked
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2,
                fill: true,
                fillOpacity: 1,
                fillColor: feature.rgba_code_stored_in_each_feature,
                interactive: true,
            }
            break;

        case sewer_status_code_array[6]: //  Pre-Construction
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2,
                fill: true,
                fillOpacity: 1,
                fillColor: feature.rgba_code_stored_in_each_feature,
                interactive: true,
            }
            break;

        case sewer_status_code_array[11]: // Scope Deleted

            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                radius: 4.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2,
                fill: true,
                fillOpacity: 1,
                fillColor: '#000000',
                interactive: true,
            }
            break;

        case sewer_status_code_array[15]: // Post-Construction
            return {
                pane: 'P_'.concat(feature.L_index_stored_in_each_feature),
                radius: 6.0,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 2,
                fill: true,
                fillOpacity: 1,
                fillColor: feature.rgba_code_stored_in_each_feature,
                interactive: true,
            }
            break;


    }
}
