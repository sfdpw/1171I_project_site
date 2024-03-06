map.createPane('pane_1171I_r_dwgs');
map.getPane('pane_1171I_r_dwgs').style.zIndex = 203;
map.getPane('pane_1171I_r_dwgs').style['mix-blend-mode'] = 'normal';

var layer_1171I_r_dwgs = new L.geoJson(layer_filter('R', json_1171I_plan_boundaries), {
    attribution: '',
    interactive: true,
    dataVar: 'json_1171I_r_dwgs',
    layerName: 'layer_1171I_r_dwgs',
    pane: 'pane_1171I_r_dwgs',
    onEachFeature: add_layer_pop_function,
    style: project_dwgs_layer_styler,

});

bounds_group.addLayer(layer_1171I_r_dwgs);
//map.addLayer(layer_1171I_r_dwgs);

function toggle_r() {

    if (document.getElementById("checkbox_r").checked) {

        layer_1171I_r_dwgs = new L.geoJson(layer_filter('R', json_1171I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1171I_r_dwgs',
            layerName: 'layer_1171I_r_dwgs',
            pane: 'pane_1171I_r_dwgs',
            onEachFeature: add_layer_pop_function,
            style: project_dwgs_layer_styler,
        });

        //bounds_group.addLayer(layer_1171I_r_dwgs);
        map.addLayer(layer_1171I_r_dwgs);

    } else {

        map.removeLayer(layer_1171I_r_dwgs);

    }

}
