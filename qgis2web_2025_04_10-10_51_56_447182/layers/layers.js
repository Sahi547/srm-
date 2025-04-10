var wms_layers = [];

var lyr_TrueOrtho_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "True Ortho",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/TrueOrtho_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [8961646.462268, 1857949.477716, 8962255.994623, 1858901.390655]
                            })
                        });
var format_adminblock_1 = new ol.format.GeoJSON();
var features_adminblock_1 = format_adminblock_1.readFeatures(json_adminblock_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adminblock_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adminblock_1.addFeatures(features_adminblock_1);
var lyr_adminblock_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adminblock_1, 
                style: style_adminblock_1,
                popuplayertitle: "admin block",
                interactive: true,
                title: '<img src="styles/legend/adminblock_1.png" /> admin block'
            });
var format_tenniscourt_2 = new ol.format.GeoJSON();
var features_tenniscourt_2 = format_tenniscourt_2.readFeatures(json_tenniscourt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tenniscourt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tenniscourt_2.addFeatures(features_tenniscourt_2);
var lyr_tenniscourt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tenniscourt_2, 
                style: style_tenniscourt_2,
                popuplayertitle: "tennis court",
                interactive: true,
                title: '<img src="styles/legend/tenniscourt_2.png" /> tennis court'
            });
var format_jcblock_3 = new ol.format.GeoJSON();
var features_jcblock_3 = format_jcblock_3.readFeatures(json_jcblock_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jcblock_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jcblock_3.addFeatures(features_jcblock_3);
var lyr_jcblock_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jcblock_3, 
                style: style_jcblock_3,
                popuplayertitle: "jc block",
                interactive: true,
                title: '<img src="styles/legend/jcblock_3.png" /> jc block'
            });
var format_xlab_4 = new ol.format.GeoJSON();
var features_xlab_4 = format_xlab_4.readFeatures(json_xlab_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_xlab_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_xlab_4.addFeatures(features_xlab_4);
var lyr_xlab_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_xlab_4, 
                style: style_xlab_4,
                popuplayertitle: "x lab",
                interactive: true,
                title: '<img src="styles/legend/xlab_4.png" /> x lab'
            });
var format_basketballcourt_5 = new ol.format.GeoJSON();
var features_basketballcourt_5 = format_basketballcourt_5.readFeatures(json_basketballcourt_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basketballcourt_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basketballcourt_5.addFeatures(features_basketballcourt_5);
var lyr_basketballcourt_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basketballcourt_5, 
                style: style_basketballcourt_5,
                popuplayertitle: "basketball court",
                interactive: true,
                title: '<img src="styles/legend/basketballcourt_5.png" /> basketball court'
            });
var format_waterpurifier_6 = new ol.format.GeoJSON();
var features_waterpurifier_6 = format_waterpurifier_6.readFeatures(json_waterpurifier_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waterpurifier_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waterpurifier_6.addFeatures(features_waterpurifier_6);
var lyr_waterpurifier_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_waterpurifier_6, 
                style: style_waterpurifier_6,
                popuplayertitle: "water purifier",
                interactive: true,
                title: '<img src="styles/legend/waterpurifier_6.png" /> water purifier'
            });
var format_krishnahostel_7 = new ol.format.GeoJSON();
var features_krishnahostel_7 = format_krishnahostel_7.readFeatures(json_krishnahostel_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_krishnahostel_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_krishnahostel_7.addFeatures(features_krishnahostel_7);
var lyr_krishnahostel_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_krishnahostel_7, 
                style: style_krishnahostel_7,
                popuplayertitle: "krishna hostel",
                interactive: true,
                title: '<img src="styles/legend/krishnahostel_7.png" /> krishna hostel'
            });
var format_girlshostel2_8 = new ol.format.GeoJSON();
var features_girlshostel2_8 = format_girlshostel2_8.readFeatures(json_girlshostel2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_girlshostel2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_girlshostel2_8.addFeatures(features_girlshostel2_8);
var lyr_girlshostel2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_girlshostel2_8, 
                style: style_girlshostel2_8,
                popuplayertitle: "girls hostel 2",
                interactive: true,
                title: '<img src="styles/legend/girlshostel2_8.png" /> girls hostel 2'
            });
var format_girlshostel3_9 = new ol.format.GeoJSON();
var features_girlshostel3_9 = format_girlshostel3_9.readFeatures(json_girlshostel3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_girlshostel3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_girlshostel3_9.addFeatures(features_girlshostel3_9);
var lyr_girlshostel3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_girlshostel3_9, 
                style: style_girlshostel3_9,
                popuplayertitle: "girls hostel 3",
                interactive: true,
                title: '<img src="styles/legend/girlshostel3_9.png" /> girls hostel 3'
            });
var format_girlshostel4_10 = new ol.format.GeoJSON();
var features_girlshostel4_10 = format_girlshostel4_10.readFeatures(json_girlshostel4_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_girlshostel4_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_girlshostel4_10.addFeatures(features_girlshostel4_10);
var lyr_girlshostel4_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_girlshostel4_10, 
                style: style_girlshostel4_10,
                popuplayertitle: "girls hostel 4",
                interactive: true,
                title: '<img src="styles/legend/girlshostel4_10.png" /> girls hostel 4'
            });
var format_girlshostel5_11 = new ol.format.GeoJSON();
var features_girlshostel5_11 = format_girlshostel5_11.readFeatures(json_girlshostel5_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_girlshostel5_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_girlshostel5_11.addFeatures(features_girlshostel5_11);
var lyr_girlshostel5_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_girlshostel5_11, 
                style: style_girlshostel5_11,
                popuplayertitle: "girls hostel 5",
                interactive: true,
                title: '<img src="styles/legend/girlshostel5_11.png" /> girls hostel 5'
            });
var format_mainmess_12 = new ol.format.GeoJSON();
var features_mainmess_12 = format_mainmess_12.readFeatures(json_mainmess_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mainmess_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mainmess_12.addFeatures(features_mainmess_12);
var lyr_mainmess_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mainmess_12, 
                style: style_mainmess_12,
                popuplayertitle: "main mess",
                interactive: true,
                title: '<img src="styles/legend/mainmess_12.png" /> main mess'
            });
var format_vedavatihostel_13 = new ol.format.GeoJSON();
var features_vedavatihostel_13 = format_vedavatihostel_13.readFeatures(json_vedavatihostel_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vedavatihostel_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vedavatihostel_13.addFeatures(features_vedavatihostel_13);
var lyr_vedavatihostel_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vedavatihostel_13, 
                style: style_vedavatihostel_13,
                popuplayertitle: "vedavati hostel",
                interactive: true,
                title: '<img src="styles/legend/vedavatihostel_13.png" /> vedavati hostel'
            });
var format_gangahostel_14 = new ol.format.GeoJSON();
var features_gangahostel_14 = format_gangahostel_14.readFeatures(json_gangahostel_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gangahostel_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gangahostel_14.addFeatures(features_gangahostel_14);
var lyr_gangahostel_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gangahostel_14, 
                style: style_gangahostel_14,
                popuplayertitle: "ganga hostel",
                interactive: true,
                title: '<img src="styles/legend/gangahostel_14.png" /> ganga hostel'
            });
var format_sblock_15 = new ol.format.GeoJSON();
var features_sblock_15 = format_sblock_15.readFeatures(json_sblock_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sblock_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sblock_15.addFeatures(features_sblock_15);
var lyr_sblock_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sblock_15, 
                style: style_sblock_15,
                popuplayertitle: "s block",
                interactive: true,
                title: '<img src="styles/legend/sblock_15.png" /> s block'
            });
var format_mart_16 = new ol.format.GeoJSON();
var features_mart_16 = format_mart_16.readFeatures(json_mart_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mart_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mart_16.addFeatures(features_mart_16);
var lyr_mart_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mart_16, 
                style: style_mart_16,
                popuplayertitle: "mart",
                interactive: true,
                title: '<img src="styles/legend/mart_16.png" /> mart'
            });
var format_footballground_17 = new ol.format.GeoJSON();
var features_footballground_17 = format_footballground_17.readFeatures(json_footballground_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_footballground_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_footballground_17.addFeatures(features_footballground_17);
var lyr_footballground_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_footballground_17, 
                style: style_footballground_17,
                popuplayertitle: "football ground",
                interactive: true,
                title: '<img src="styles/legend/footballground_17.png" /> football ground'
            });

lyr_TrueOrtho_0.setVisible(true);lyr_adminblock_1.setVisible(true);lyr_tenniscourt_2.setVisible(true);lyr_jcblock_3.setVisible(true);lyr_xlab_4.setVisible(true);lyr_basketballcourt_5.setVisible(true);lyr_waterpurifier_6.setVisible(true);lyr_krishnahostel_7.setVisible(true);lyr_girlshostel2_8.setVisible(true);lyr_girlshostel3_9.setVisible(true);lyr_girlshostel4_10.setVisible(true);lyr_girlshostel5_11.setVisible(true);lyr_mainmess_12.setVisible(true);lyr_vedavatihostel_13.setVisible(true);lyr_gangahostel_14.setVisible(true);lyr_sblock_15.setVisible(true);lyr_mart_16.setVisible(true);lyr_footballground_17.setVisible(true);
var layersList = [lyr_TrueOrtho_0,lyr_adminblock_1,lyr_tenniscourt_2,lyr_jcblock_3,lyr_xlab_4,lyr_basketballcourt_5,lyr_waterpurifier_6,lyr_krishnahostel_7,lyr_girlshostel2_8,lyr_girlshostel3_9,lyr_girlshostel4_10,lyr_girlshostel5_11,lyr_mainmess_12,lyr_vedavatihostel_13,lyr_gangahostel_14,lyr_sblock_15,lyr_mart_16,lyr_footballground_17];
lyr_adminblock_1.set('fieldAliases', {'id': 'id', });
lyr_tenniscourt_2.set('fieldAliases', {'id': 'id', });
lyr_jcblock_3.set('fieldAliases', {'id': 'id', });
lyr_xlab_4.set('fieldAliases', {'id': 'id', });
lyr_basketballcourt_5.set('fieldAliases', {'id': 'id', });
lyr_waterpurifier_6.set('fieldAliases', {'id': 'id', });
lyr_krishnahostel_7.set('fieldAliases', {'id': 'id', });
lyr_girlshostel2_8.set('fieldAliases', {'id': 'id', });
lyr_girlshostel3_9.set('fieldAliases', {'id': 'id', });
lyr_girlshostel4_10.set('fieldAliases', {'id': 'id', });
lyr_girlshostel5_11.set('fieldAliases', {'id': 'id', });
lyr_mainmess_12.set('fieldAliases', {'id': 'id', });
lyr_vedavatihostel_13.set('fieldAliases', {'id': 'id', });
lyr_gangahostel_14.set('fieldAliases', {'id': 'id', });
lyr_sblock_15.set('fieldAliases', {'id': 'id', });
lyr_mart_16.set('fieldAliases', {'id': 'id', });
lyr_footballground_17.set('fieldAliases', {'id': 'id', });
lyr_adminblock_1.set('fieldImages', {'id': '', });
lyr_tenniscourt_2.set('fieldImages', {'id': '', });
lyr_jcblock_3.set('fieldImages', {'id': '', });
lyr_xlab_4.set('fieldImages', {'id': '', });
lyr_basketballcourt_5.set('fieldImages', {'id': '', });
lyr_waterpurifier_6.set('fieldImages', {'id': '', });
lyr_krishnahostel_7.set('fieldImages', {'id': '', });
lyr_girlshostel2_8.set('fieldImages', {'id': '', });
lyr_girlshostel3_9.set('fieldImages', {'id': '', });
lyr_girlshostel4_10.set('fieldImages', {'id': '', });
lyr_girlshostel5_11.set('fieldImages', {'id': '', });
lyr_mainmess_12.set('fieldImages', {'id': '', });
lyr_vedavatihostel_13.set('fieldImages', {'id': '', });
lyr_gangahostel_14.set('fieldImages', {'id': '', });
lyr_sblock_15.set('fieldImages', {'id': '', });
lyr_mart_16.set('fieldImages', {'id': '', });
lyr_footballground_17.set('fieldImages', {'id': '', });
lyr_adminblock_1.set('fieldLabels', {'id': 'no label', });
lyr_tenniscourt_2.set('fieldLabels', {'id': 'no label', });
lyr_jcblock_3.set('fieldLabels', {'id': 'no label', });
lyr_xlab_4.set('fieldLabels', {'id': 'no label', });
lyr_basketballcourt_5.set('fieldLabels', {'id': 'no label', });
lyr_waterpurifier_6.set('fieldLabels', {'id': 'no label', });
lyr_krishnahostel_7.set('fieldLabels', {'id': 'no label', });
lyr_girlshostel2_8.set('fieldLabels', {'id': 'no label', });
lyr_girlshostel3_9.set('fieldLabels', {'id': 'no label', });
lyr_girlshostel4_10.set('fieldLabels', {'id': 'no label', });
lyr_girlshostel5_11.set('fieldLabels', {'id': 'no label', });
lyr_mainmess_12.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_vedavatihostel_13.set('fieldLabels', {'id': 'no label', });
lyr_gangahostel_14.set('fieldLabels', {'id': 'no label', });
lyr_sblock_15.set('fieldLabels', {'id': 'no label', });
lyr_mart_16.set('fieldLabels', {'id': 'no label', });
lyr_footballground_17.set('fieldLabels', {'id': 'no label', });
lyr_footballground_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});