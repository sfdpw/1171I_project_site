map.createPane('pane_1171I_t_dwgs');
map.getPane('pane_1171I_t_dwgs').style.zIndex = 204;
map.getPane('pane_1171I_t_dwgs').style['mix-blend-mode'] = 'normal';

var layer_1171I_t_dwgs = new L.geoJson(layer_filter('T', json_1171I_plan_boundaries), {
    attribution: '',
    interactive: true,
    dataVar: 'json_1171I_t_dwgs',
    layerName: 'layer_1171I_t_dwgs',
    pane: 'pane_1171I_t_dwgs',
    onEachFeature: add_layer_pop_function,
    style: project_dwgs_layer_styler,

});

bounds_group.addLayer(layer_1171I_t_dwgs);
//map.addLayer(layer_1171I_t_dwgs);

function toggle_t() {

    if (document.getElementById("checkbox_t").checked) {

        layer_1171I_t_dwgs = new L.geoJson(layer_filter('T', json_1171I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1171I_t_dwgs',
            layerName: 'layer_1171I_t_dwgs',
            pane: 'pane_1171I_t_dwgs',
            onEachFeature: add_layer_pop_function,
            style: project_dwgs_layer_styler,
        });

        //bounds_group.addLayer(layer_1171I_t_dwgs);
        map.addLayer(layer_1171I_t_dwgs);

    } else {

        map.removeLayer(layer_1171I_t_dwgs);

    }

}
