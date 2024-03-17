map.createPane('pane_1171I_ma_dwgs');
map.getPane('pane_1171I_ma_dwgs').style.zIndex = 204;
map.getPane('pane_1171I_ma_dwgs').style['mix-blend-mode'] = 'normal';

var layer_1171I_ma_dwgs = new L.geoJson(layer_filter('MA', json_1171I_plan_boundaries), {
    attribution: '',
    interactive: true,
    dataVar: 'json_1171I_ma_dwgs',
    layerName: 'layer_1171I_ma_dwgs',
    pane: 'pane_1171I_ma_dwgs',
    onEachFeature: add_layer_pop_function,
    style: project_dwgs_layer_styler,

});

bounds_group.addLayer(layer_1171I_ma_dwgs);
//map.addLayer(layer_1171I_ma_dwgs);

function toggle_ma() {

    if (document.getElementById("checkbox_ma").checked) {

        layer_1171I_ma_dwgs = new L.geoJson(layer_filter('MA', json_1171I_plan_boundaries), {
            attribution: '',
            interactive: true,
            dataVar: 'json_1171I_ma_dwgs',
            layerName: 'layer_1171I_ma_dwgs',
            pane: 'pane_1171I_ma_dwgs',
            onEachFeature: add_layer_pop_function,
            style: project_dwgs_layer_styler,
        });

        //bounds_group.addLayer(layer_1171I_ma_dwgs);
        map.addLayer(layer_1171I_ma_dwgs);

    } else {

        map.removeLayer(layer_1171I_ma_dwgs);

    }

}
