map.createPane('pane_1171I_u_dwgs');
map.getPane('pane_1171I_u_dwgs').style.zIndex = 201;
map.getPane('pane_1171I_u_dwgs').style['mix-blend-mode'] = 'normal';

var layer_1171I_u_dwgs = new L.geoJson(layer_filter('U', json_1171I_plan_boundaries), {
    attribution: '',
    interactive: true,
    dataVar: 'json_1171I_u_dwgs',
    layerName: 'layer_1171I_u_dwgs',
    pane: 'pane_1171I_u_dwgs',
    onEachFeature: add_layer_pop_function,
    style: project_dwgs_layer_styler,

});

bounds_group.addLayer(layer_1171I_u_dwgs);
//map.addLayer(layer_1171I_u_dwgs);

function toggle_u() {

    if (document.getElementById("checkbox_u").checked) {

        layer_1171I_u_dwgs = new L.geoJson(layer_filter('U', json_1171I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1171I_u_dwgs',
            layerName: 'layer_1171I_u_dwgs',
            pane: 'pane_1171I_u_dwgs',
            onEachFeature: add_layer_pop_function,
            style: project_dwgs_layer_styler,
        });

        //bounds_group.addLayer(layer_1171I_u_dwgs);
        map.addLayer(layer_1171I_u_dwgs);

    } else {

        map.removeLayer(layer_1171I_u_dwgs);

    }

}
