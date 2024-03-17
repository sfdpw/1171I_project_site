map.createPane('pane_1171I_cr_dwgs');
map.getPane('pane_1171I_cr_dwgs').style.zIndex = 220;
map.getPane('pane_1171I_cr_dwgs').style['mix-blend-mode'] = 'normal';

var layer_1171I_cr_dwgs = new L.geoJson(layer_filter('CR', json_1171I_plan_boundaries), {
    attribution: '',
    interactive: true,
    dataVar: 'json_1171I_cr_dwgs',
    layerName: 'layer_1171I_cr_dwgs',
    pane: 'pane_1171I_cr_dwgs',
    onEachFeature: add_layer_pop_function,
    style: project_dwgs_layer_styler,

});

bounds_group.addLayer(layer_1171I_cr_dwgs);
//map.addLayer(layer_1171I_cr_dwgs);

function toggle_cr() {

    if (document.getElementById("checkbox_cr").checked) {

        layer_1171I_cr_dwgs = new L.geoJson(layer_filter('CR', json_1171I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1171I_cr_dwgs',
            layerName: 'layer_1171I_cr_dwgs',
            pane: 'pane_1171I_cr_dwgs',
            onEachFeature: add_layer_pop_function,
            style: project_dwgs_layer_styler,
        });

        //bounds_group.addLayer(layer_1171I_cr_dwgs);
        map.addLayer(layer_1171I_cr_dwgs);

    } else {

        map.removeLayer(layer_1171I_cr_dwgs);

    }

}
