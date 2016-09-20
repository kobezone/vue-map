define(["dojo/_base/declare", "esri/layers/TiledMapServiceLayer", "esri/geometry/Extent", "esri/SpatialReference", "esri/layers/TileInfo"],
    function (declare, TiledMapServiceLayer, Extent, SpatialReference, TileInfo) {
        return declare(TiledMapServiceLayer, {
            // 构造函数
            constructor: function (properties) {
                this.spatialReference = new SpatialReference({
                    // wkid: 102113
                    wkid: 102100
                });

                // 图层提供的起始显示范围以及整个图层的地理范围
                this.fullExtent = new Extent(-20037508.342787, -20037508.342787, 20037508.342787, 20037508.342787, this.spatialReference);
                // this.initialExtent = new Extent(5916776.8, 1877209.3, 19242502.6, 7620381.8, this.spatialReference);
                // this.initialExtent = new Extent(15564801, 5639873, 15612230,5621528, this.spatialReference);
                // 图层提供的切片信息
                this.tileInfo = new TileInfo({
                    "rows": 256,
                    "cols": 256,
                    "compressionQuality": 90,
                    "origin": {
                        "x": -20037508.342787,
                        "y": 20037508.342787
                    },
                    "spatialReference": {
                        // "wkid": 102113
                        "wkid": 102100
                    },
                    "lods": [
                        {"level": 0, "resolution": 156543.033928, "scale": 591657527.591555},
                        {"level": 1, "resolution": 78271.5169639999, "scale": 295828763.795777},
                        {"level": 2, "resolution": 39135.7584820001, "scale": 147914381.897889},
                        {"level": 3, "resolution": 19567.8792409999, "scale": 73957190.948944},
                        {"level": 4, "resolution": 9783.93962049996, "scale": 36978595.474472},
                        {"level": 5, "resolution": 4891.96981024998, "scale": 18489297.737236},
                        {"level": 6, "resolution": 2445.98490512499, "scale": 9244648.868618},
                        {"level": 7, "resolution": 1222.99245256249, "scale": 4622324.434309},
                        {"level": 8, "resolution": 611.49622628138, "scale": 2311162.217155},
                        {"level": 9, "resolution": 305.748113140558, "scale": 1155581.108577},
                        {"level": 10, "resolution": 152.874056570411, "scale": 577790.554289},
                        {"level": 11, "resolution": 76.4370282850732, "scale": 288895.277144},
                        {"level": 12, "resolution": 38.2185141425366, "scale": 144447.638572},
                        {"level": 13, "resolution": 19.1092570712683, "scale": 72223.819286},
                        {"level": 14, "resolution": 9.55462853563415, "scale": 36111.909643},
                        {"level": 15, "resolution": 4.77731426794937, "scale": 18055.954822},
                        {"level": 16, "resolution": 2.38865713397468, "scale": 9027.977411},
                        {"level": 17, "resolution": 1.19432856685505, "scale": 4513.988705},
                        {"level": 18, "resolution": 0.597164283559817, "scale": 2256.994353},
                        {"level": 19, "resolution": 0.298582141647617, "scale": 1128.497176}
                    ]
                });

                // 设置图层的loaded属性，并触发onLoad事件
                this.loaded = true;
                this.onLoad(this);
            },

            getTileUrl: function (level, row, col) {
                // console.log("level,row,col=",level,row,col);
                var zoom = level - 1;
                var offsetX = Math.pow(2, zoom);
                var offsetY = offsetX - 1;
                // var numX = col - offsetX;
                // var numY = (-row) + offsetY;
                var numX;
                var numY ;
                switch(level+1){
                    case 1:
                    // numX = col - offsetX+260;
                    // numY = (-row) + offsetY+91;
                    // break;
                    case 2:
                    // numX = col - offsetX+260;
                    // numY = (-row) + offsetY+91;
                    // break;
                    case 3:
                    // numX = col - offsetX+260;
                    // numY = (-row) + offsetY+91;
                    // break;
                    case 4:
                    // numX = col - offsetX+260;
                    // numY = (-row) + offsetY+91;
                    // break;
                    case 5:
                    // numX = col - offsetX+1;
                    // numY = (-row) + offsetY+91;
                    // break;
                    case 6:
                    // numX = col - offsetX+2;
                    // numY = (-row) + offsetY+91;
                    // break;
                    case 7:
                        numX = col - offsetX+4;
                        numY = (-row) + offsetY+1;
                        break;
                    case 8:
                        numX = col - offsetX+8;
                        numY = (-row) + offsetY+3;
                        break;
                    case 9:
                        numX = col - offsetX+16;
                        numY = (-row) + offsetY+5;
                        break;
                    case 10:

                        numX = col - offsetX+32;
                        numY = (-row) + offsetY+11;
                        // console.log("col,offsetX,row,offsetY,numX,numY",col,offsetX,row,offsetY,numX,numY);
                        break;
                    case 11:

                        numX = col - offsetX+65;
                        numY = (-row) + offsetY+23;
                        // console.log("col,offsetX,row,offsetY,numX,numY",col,offsetX,row,offsetY,numX,numY);
                        break;
                    case 12:

                        numX = col - offsetX+130;
                        numY = (-row) + offsetY+46;
                        // console.log("col,offsetX,row,offsetY,numX,numY",col,offsetX,row,offsetY,numX,numY);
                        break;
                    case 13:
                        numX = col - offsetX+260;
                        numY = (-row) + offsetY+91;
                        break;
                    case 14:
                        numX = col - offsetX+520;
                        numY = (-row) + offsetY+182;
                        break;
                    case 15:
                        numX = col - offsetX+1040;
                        numY = (-row) + offsetY+364;
                        break;
                    case 16:
                        numX = col - offsetX+2080;
                        numY = (-row) + offsetY+728;
                        break;
                    case 17:
                        numX = col - offsetX+4160;
                        numY = (-row) + offsetY+1456;
                        break;
                    case 18:
                        numX = col - offsetX+8320;
                        numY = (-row) + offsetY+2912;
                        break;
                    case 19:
                        numX = col - offsetX+16640;
                        numY = (-row) + offsetY+5824;
                        break;
                    default:
                        numX = col - offsetX;
                        numY = (-row) + offsetY;
                }
                zoom = level + 1;
                // console.log("level:"+level);
                // console.log("z:"+(level+1));
                // console.log("offsetX:"+offsetX);
                // console.log("offsetY:"+offsetY);
                // console.log("numX:"+numX);
                // console.log("numY:"+numY);
                // console.log("http://online1.map.bdimg.com/tile/?qt=tile&x=" + numX + "&y=" + numY + "&z=" + zoom + "&styles=pl");
                var num = (col + row) % 8 + 1;
                var url = "http://online1.map.bdimg.com/tile/?qt=tile&x=" + numX + "&y=" + numY + "&z=" + zoom + "&styles=pl";
                return url;
            }
        });
    }
);