map.createPane('pane_1171I_sw_dwgs');
map.getPane('pane_1171I_sw_dwgs').style.zIndex = 202;
map.getPane('pane_1171I_sw_dwgs').style['mix-blend-mode'] = 'normal';

var layer_1171I_sw_dwgs = new L.geoJson(layer_filter('SW', json_1171I_plan_boundaries), {
    attribution: '',
    interactive: true,
    dataVar: 'json_1171I_sw_dwgs',
    layerName: 'layer_1171I_sw_dwgs',
    pane: 'pane_1171I_sw_dwgs',
    onEachFeature: add_layer_pop_function,
    style: project_dwgs_layer_styler,

});

bounds_group.addLayer(layer_1171I_sw_dwgs);
//map.addLayer(layer_1171I_sw_dwgs);

function toggle_sw() {

    if (document.getElementById("checkbox_sw").checked) {

        layer_1171I_sw_dwgs = new L.geoJson(layer_filter('SW', json_1171I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1171I_sw_dwgs',
            layerName: 'layer_1171I_sw_dwgs',
            pane: 'pane_1171I_sw_dwgs',
            onEachFeature: add_layer_pop_function,
            style: project_dwgs_layer_styler,
        });

        //bounds_group.addLayer(layer_1171I_sw_dwgs);
        map.addLayer(layer_1171I_sw_dwgs);

    } else {

        map.removeLayer(layer_1171I_sw_dwgs);

    }

}
