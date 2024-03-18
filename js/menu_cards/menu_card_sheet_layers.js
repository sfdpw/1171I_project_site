document.getElementById("map_master_menu").innerHTML +=

  '<div class="card">\
          <div class="card-header" id="heading_sheet_layers">\
            <h2 class="mb-0">\
              <button class="btn btn-link btn-layer" type="button"\
                      data-toggle="collapse" data-target="#collapse_sheet"\
                      aria-expanded="true" aria-controls="collapse_sheet">\
                <strong>\
                  Sheet Layer(s)\
                </strong>\
              </button>\
            </h2>\
          </div>\
          <div id="collapse_sheet" class="collapse"\
               aria-labelledby="heading_sheet_layers" data-parent="#map_master_menu">\
            <div class="card-body">\
              <table>\
\
                 <tr>\
                  <td>\
                    <input type="checkbox" id="checkbox_cr" onchange="toggle_cr()">\
                  </td>\
                  <td>\
                    <img src="legend/1171I_plan_boundary_cr.png" width="13" height="13"\
                         alt="Layer Symbol - CR - Curb Ramps"/>\
                    <label class="layer_label" for="checkbox_cr">CR - Curb Ramps</label>\
                  </td>\
                </tr>\
\
                <tr>\
                  <td>\
                    <input type="checkbox" id="checkbox_t" onchange="toggle_t()">\
                  </td>\
                  <td>\
                    <img src="legend/1171I_plan_boundary_t.png" width="13" height="13"\
                       alt="Layer Symbol - T - Striping"/>\
                    <label class="layer_label" for="checkbox_t">T - Striping</label>\
                  </td>\
                </tr>\
\
              <tr>\
                <td>\
                  <input type="checkbox" id="checkbox_r" onchange="toggle_r()">\
                </td>\
                <td>\
                  <img src="legend/1171I_plan_boundary_r.png" width="13" height="13"\
                     alt="Layer Symbol - R - Roadway"/>\
                  <label class="layer_label" for="checkbox_r">R - Roadway</label>\
                </td>\
              </tr>\
\
                <tr>\
                  <td>\
                    <input type="checkbox" id="checkbox_e" onchange="toggle_e()">\
                  </td>\
                  <td>\
                    <img src="legend/1171I_plan_boundary_e.png" width="13" height="13"\
                       alt="Layer Symbol - E - Electrical"/>\
                    <label class="layer_label" for="checkbox_e">E - Electrical</label>\
                  </td>\
                </tr>\
\
                <tr>\
                  <td>\
                    <input type="checkbox" id="checkbox_ma" onchange="toggle_ma()">\
                  </td>\
                  <td>\
                    <img src="legend/1171I_plan_boundary_ma.png" width="13" height="13"\
                      alt="Layer Symbol - MA - AWSS SMPs"/>\
                    <label class="layer_label" for="checkbox_ma">MA - AWSS SMPs</label>\
                  </td>\
                </tr>\
\
                <tr>\
                  <td>\
                    <input type="checkbox" id="checkbox_sw" onchange="toggle_sw()">\
                  </td>\
                  <td>\
                    <img src="legend/1171I_plan_boundary_sw.png" width="13" height="13"\
                    alt="Layer Symbol - SW - Sewer"/>\
                    <label class="layer_label" for="checkbox_sw">SW - Sewer</label>\
                  </td>\
                </tr>\
\
              <tr>\
                <td>\
                  <input type="checkbox" id="checkbox_misc" onchange="toggle_misc()">\
                </td>\
                <td>\
                  <img src="legend/1171I_plan_boundary_misc.png" width="13" height="13"\
                  alt="Layer Symbol - MISC - Misc."/>\
                  <label class="layer_label" for="checkbox_misc">MISC - Misc.</label>\
                </td>\
              </tr>\
\
                <tr>\
                  <td>\
                    <input type="checkbox" id="checkbox_u" onchange="toggle_u()">\
                  </td>\
                  <td>\
                    <img src="legend/1171I_plan_boundary_u.png" width="13" height="13"\
                       alt="Layer Symbol - U - Utility Occupancy"/>\
                    <label class="layer_label" for="checkbox_u">U - Utility Occupancy</label>\
                  </td>\
                </tr>\
\
                <tr>\
                  <td>\
                    <input type="checkbox" id="checkbox_osm" onchange="toggle_osm()" checked>\
                  </td>\
                  <td>\
                    <img src="legend/OSM_logo.png" width="13" height="13"\
                         alt="Layer Symbol - Street Map"/>\
                    <label class="layer_label" for="checkbox_osm">Street Map</label>\
                  </td>\
                </tr>\
              </table>\
            </div>\
          </div>\
        </div>';