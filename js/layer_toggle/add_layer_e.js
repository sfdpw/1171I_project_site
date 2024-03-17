map.createPane('pane_1171I_e_dwgs');
map.getPane('pane_1171I_e_dwgs').style.zIndex = 214;
map.getPane('pane_1171I_e_dwgs').style['mix-blend-mode'] = 'normal';

var layer_1171I_e_dwgs = new L.geoJson(layer_filter('E', json_1171I_plan_boundaries), {
    attribution: '',
    interactive: true,
    dataVar: 'json_1171I_e_dwgs',
    layerName: 'layer_1171I_e_dwgs',
    pane: 'pane_1171I_e_dwgs',
    onEachFeature: add_layer_pop_function,
    style: project_dwgs_layer_styler,

});

bounds_group.addLayer(layer_1171I_e_dwgs);
//map.addLayer(layer_1171I_e_dwgs);

function toggle_e() {

    if (document.getElementById("checkbox_e").checked) {

        layer_1171I_e_dwgs = new L.geoJson(layer_filter('E', json_1171I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1171I_e_dwgs',
            layerName: 'layer_1171I_e_dwgs',
            pane: 'pane_1171I_e_dwgs',
            onEachFeature: add_layer_pop_function,
            style: project_dwgs_layer_styler,
        });

        //bounds_group.addLayer(layer_1171I_e_dwgs);
        map.addLayer(layer_1171I_e_dwgs);

    } else {

        map.removeLayer(layer_1171I_e_dwgs);

    }

}
