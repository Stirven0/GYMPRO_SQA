/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 156.0, "minX": 0.0, "maxY": 1710.0, "series": [{"data": [[0.0, 156.0], [0.1, 156.0], [0.2, 156.0], [0.3, 156.0], [0.4, 156.0], [0.5, 156.0], [0.6, 156.0], [0.7, 197.0], [0.8, 197.0], [0.9, 197.0], [1.0, 197.0], [1.1, 197.0], [1.2, 197.0], [1.3, 197.0], [1.4, 205.0], [1.5, 205.0], [1.6, 205.0], [1.7, 205.0], [1.8, 205.0], [1.9, 205.0], [2.0, 208.0], [2.1, 208.0], [2.2, 208.0], [2.3, 208.0], [2.4, 208.0], [2.5, 208.0], [2.6, 208.0], [2.7, 215.0], [2.8, 215.0], [2.9, 215.0], [3.0, 215.0], [3.1, 215.0], [3.2, 215.0], [3.3, 215.0], [3.4, 217.0], [3.5, 217.0], [3.6, 217.0], [3.7, 217.0], [3.8, 217.0], [3.9, 217.0], [4.0, 217.0], [4.1, 217.0], [4.2, 217.0], [4.3, 217.0], [4.4, 217.0], [4.5, 217.0], [4.6, 217.0], [4.7, 218.0], [4.8, 218.0], [4.9, 218.0], [5.0, 218.0], [5.1, 218.0], [5.2, 218.0], [5.3, 218.0], [5.4, 218.0], [5.5, 218.0], [5.6, 218.0], [5.7, 218.0], [5.8, 218.0], [5.9, 218.0], [6.0, 218.0], [6.1, 218.0], [6.2, 218.0], [6.3, 218.0], [6.4, 218.0], [6.5, 218.0], [6.6, 218.0], [6.7, 219.0], [6.8, 219.0], [6.9, 219.0], [7.0, 219.0], [7.1, 219.0], [7.2, 219.0], [7.3, 219.0], [7.4, 221.0], [7.5, 221.0], [7.6, 221.0], [7.7, 221.0], [7.8, 221.0], [7.9, 221.0], [8.0, 221.0], [8.1, 221.0], [8.2, 221.0], [8.3, 221.0], [8.4, 221.0], [8.5, 221.0], [8.6, 221.0], [8.7, 223.0], [8.8, 223.0], [8.9, 223.0], [9.0, 223.0], [9.1, 223.0], [9.2, 223.0], [9.3, 223.0], [9.4, 223.0], [9.5, 223.0], [9.6, 223.0], [9.7, 223.0], [9.8, 223.0], [9.9, 223.0], [10.0, 223.0], [10.1, 223.0], [10.2, 223.0], [10.3, 223.0], [10.4, 223.0], [10.5, 223.0], [10.6, 223.0], [10.7, 225.0], [10.8, 225.0], [10.9, 225.0], [11.0, 225.0], [11.1, 225.0], [11.2, 225.0], [11.3, 225.0], [11.4, 231.0], [11.5, 231.0], [11.6, 231.0], [11.7, 231.0], [11.8, 231.0], [11.9, 231.0], [12.0, 233.0], [12.1, 233.0], [12.2, 233.0], [12.3, 233.0], [12.4, 233.0], [12.5, 233.0], [12.6, 233.0], [12.7, 236.0], [12.8, 236.0], [12.9, 236.0], [13.0, 236.0], [13.1, 236.0], [13.2, 236.0], [13.3, 236.0], [13.4, 239.0], [13.5, 239.0], [13.6, 239.0], [13.7, 239.0], [13.8, 239.0], [13.9, 239.0], [14.0, 248.0], [14.1, 248.0], [14.2, 248.0], [14.3, 248.0], [14.4, 248.0], [14.5, 248.0], [14.6, 248.0], [14.7, 249.0], [14.8, 249.0], [14.9, 249.0], [15.0, 249.0], [15.1, 249.0], [15.2, 249.0], [15.3, 249.0], [15.4, 250.0], [15.5, 250.0], [15.6, 250.0], [15.7, 250.0], [15.8, 250.0], [15.9, 250.0], [16.0, 255.0], [16.1, 255.0], [16.2, 255.0], [16.3, 255.0], [16.4, 255.0], [16.5, 255.0], [16.6, 255.0], [16.7, 262.0], [16.8, 262.0], [16.9, 262.0], [17.0, 262.0], [17.1, 262.0], [17.2, 262.0], [17.3, 262.0], [17.4, 263.0], [17.5, 263.0], [17.6, 263.0], [17.7, 263.0], [17.8, 263.0], [17.9, 263.0], [18.0, 266.0], [18.1, 266.0], [18.2, 266.0], [18.3, 266.0], [18.4, 266.0], [18.5, 266.0], [18.6, 266.0], [18.7, 282.0], [18.8, 282.0], [18.9, 282.0], [19.0, 282.0], [19.1, 282.0], [19.2, 282.0], [19.3, 282.0], [19.4, 287.0], [19.5, 287.0], [19.6, 287.0], [19.7, 287.0], [19.8, 287.0], [19.9, 287.0], [20.0, 295.0], [20.1, 295.0], [20.2, 295.0], [20.3, 295.0], [20.4, 295.0], [20.5, 295.0], [20.6, 295.0], [20.7, 301.0], [20.8, 301.0], [20.9, 301.0], [21.0, 301.0], [21.1, 301.0], [21.2, 301.0], [21.3, 301.0], [21.4, 301.0], [21.5, 301.0], [21.6, 301.0], [21.7, 301.0], [21.8, 301.0], [21.9, 301.0], [22.0, 302.0], [22.1, 302.0], [22.2, 302.0], [22.3, 302.0], [22.4, 302.0], [22.5, 302.0], [22.6, 302.0], [22.7, 304.0], [22.8, 304.0], [22.9, 304.0], [23.0, 304.0], [23.1, 304.0], [23.2, 304.0], [23.3, 304.0], [23.4, 310.0], [23.5, 310.0], [23.6, 310.0], [23.7, 310.0], [23.8, 310.0], [23.9, 310.0], [24.0, 310.0], [24.1, 312.0], [24.2, 312.0], [24.3, 312.0], [24.4, 312.0], [24.5, 312.0], [24.6, 312.0], [24.7, 336.0], [24.8, 336.0], [24.9, 336.0], [25.0, 336.0], [25.1, 336.0], [25.2, 336.0], [25.3, 336.0], [25.4, 344.0], [25.5, 344.0], [25.6, 344.0], [25.7, 344.0], [25.8, 344.0], [25.9, 344.0], [26.0, 344.0], [26.1, 345.0], [26.2, 345.0], [26.3, 345.0], [26.4, 345.0], [26.5, 345.0], [26.6, 345.0], [26.7, 360.0], [26.8, 360.0], [26.9, 360.0], [27.0, 360.0], [27.1, 360.0], [27.2, 360.0], [27.3, 360.0], [27.4, 362.0], [27.5, 362.0], [27.6, 362.0], [27.7, 362.0], [27.8, 362.0], [27.9, 362.0], [28.0, 362.0], [28.1, 374.0], [28.2, 374.0], [28.3, 374.0], [28.4, 374.0], [28.5, 374.0], [28.6, 374.0], [28.7, 378.0], [28.8, 378.0], [28.9, 378.0], [29.0, 378.0], [29.1, 378.0], [29.2, 378.0], [29.3, 378.0], [29.4, 385.0], [29.5, 385.0], [29.6, 385.0], [29.7, 385.0], [29.8, 385.0], [29.9, 385.0], [30.0, 385.0], [30.1, 385.0], [30.2, 385.0], [30.3, 385.0], [30.4, 385.0], [30.5, 385.0], [30.6, 385.0], [30.7, 394.0], [30.8, 394.0], [30.9, 394.0], [31.0, 394.0], [31.1, 394.0], [31.2, 394.0], [31.3, 394.0], [31.4, 399.0], [31.5, 399.0], [31.6, 399.0], [31.7, 399.0], [31.8, 399.0], [31.9, 399.0], [32.0, 399.0], [32.1, 418.0], [32.2, 418.0], [32.3, 418.0], [32.4, 418.0], [32.5, 418.0], [32.6, 418.0], [32.7, 419.0], [32.8, 419.0], [32.9, 419.0], [33.0, 419.0], [33.1, 419.0], [33.2, 419.0], [33.3, 419.0], [33.4, 421.0], [33.5, 421.0], [33.6, 421.0], [33.7, 421.0], [33.8, 421.0], [33.9, 421.0], [34.0, 421.0], [34.1, 426.0], [34.2, 426.0], [34.3, 426.0], [34.4, 426.0], [34.5, 426.0], [34.6, 426.0], [34.7, 439.0], [34.8, 439.0], [34.9, 439.0], [35.0, 439.0], [35.1, 439.0], [35.2, 439.0], [35.3, 439.0], [35.4, 443.0], [35.5, 443.0], [35.6, 443.0], [35.7, 443.0], [35.8, 443.0], [35.9, 443.0], [36.0, 444.0], [36.1, 444.0], [36.2, 444.0], [36.3, 444.0], [36.4, 444.0], [36.5, 444.0], [36.6, 444.0], [36.7, 444.0], [36.8, 444.0], [36.9, 444.0], [37.0, 444.0], [37.1, 444.0], [37.2, 444.0], [37.3, 444.0], [37.4, 453.0], [37.5, 453.0], [37.6, 453.0], [37.7, 453.0], [37.8, 453.0], [37.9, 453.0], [38.0, 456.0], [38.1, 456.0], [38.2, 456.0], [38.3, 456.0], [38.4, 456.0], [38.5, 456.0], [38.6, 456.0], [38.7, 458.0], [38.8, 458.0], [38.9, 458.0], [39.0, 458.0], [39.1, 458.0], [39.2, 458.0], [39.3, 458.0], [39.4, 459.0], [39.5, 459.0], [39.6, 459.0], [39.7, 459.0], [39.8, 459.0], [39.9, 459.0], [40.0, 461.0], [40.1, 461.0], [40.2, 461.0], [40.3, 461.0], [40.4, 461.0], [40.5, 461.0], [40.6, 461.0], [40.7, 466.0], [40.8, 466.0], [40.9, 466.0], [41.0, 466.0], [41.1, 466.0], [41.2, 466.0], [41.3, 466.0], [41.4, 467.0], [41.5, 467.0], [41.6, 467.0], [41.7, 467.0], [41.8, 467.0], [41.9, 467.0], [42.0, 495.0], [42.1, 495.0], [42.2, 495.0], [42.3, 495.0], [42.4, 495.0], [42.5, 495.0], [42.6, 495.0], [42.7, 497.0], [42.8, 497.0], [42.9, 497.0], [43.0, 497.0], [43.1, 497.0], [43.2, 497.0], [43.3, 497.0], [43.4, 499.0], [43.5, 499.0], [43.6, 499.0], [43.7, 499.0], [43.8, 499.0], [43.9, 499.0], [44.0, 501.0], [44.1, 501.0], [44.2, 501.0], [44.3, 501.0], [44.4, 501.0], [44.5, 501.0], [44.6, 501.0], [44.7, 501.0], [44.8, 501.0], [44.9, 501.0], [45.0, 501.0], [45.1, 501.0], [45.2, 501.0], [45.3, 501.0], [45.4, 514.0], [45.5, 514.0], [45.6, 514.0], [45.7, 514.0], [45.8, 514.0], [45.9, 514.0], [46.0, 518.0], [46.1, 518.0], [46.2, 518.0], [46.3, 518.0], [46.4, 518.0], [46.5, 518.0], [46.6, 518.0], [46.7, 527.0], [46.8, 527.0], [46.9, 527.0], [47.0, 527.0], [47.1, 527.0], [47.2, 527.0], [47.3, 527.0], [47.4, 534.0], [47.5, 534.0], [47.6, 534.0], [47.7, 534.0], [47.8, 534.0], [47.9, 534.0], [48.0, 536.0], [48.1, 536.0], [48.2, 536.0], [48.3, 536.0], [48.4, 536.0], [48.5, 536.0], [48.6, 536.0], [48.7, 538.0], [48.8, 538.0], [48.9, 538.0], [49.0, 538.0], [49.1, 538.0], [49.2, 538.0], [49.3, 538.0], [49.4, 553.0], [49.5, 553.0], [49.6, 553.0], [49.7, 553.0], [49.8, 553.0], [49.9, 553.0], [50.0, 555.0], [50.1, 555.0], [50.2, 555.0], [50.3, 555.0], [50.4, 555.0], [50.5, 555.0], [50.6, 555.0], [50.7, 556.0], [50.8, 556.0], [50.9, 556.0], [51.0, 556.0], [51.1, 556.0], [51.2, 556.0], [51.3, 556.0], [51.4, 558.0], [51.5, 558.0], [51.6, 558.0], [51.7, 558.0], [51.8, 558.0], [51.9, 558.0], [52.0, 560.0], [52.1, 560.0], [52.2, 560.0], [52.3, 560.0], [52.4, 560.0], [52.5, 560.0], [52.6, 560.0], [52.7, 562.0], [52.8, 562.0], [52.9, 562.0], [53.0, 562.0], [53.1, 562.0], [53.2, 562.0], [53.3, 562.0], [53.4, 574.0], [53.5, 574.0], [53.6, 574.0], [53.7, 574.0], [53.8, 574.0], [53.9, 574.0], [54.0, 576.0], [54.1, 576.0], [54.2, 576.0], [54.3, 576.0], [54.4, 576.0], [54.5, 576.0], [54.6, 576.0], [54.7, 577.0], [54.8, 577.0], [54.9, 577.0], [55.0, 577.0], [55.1, 577.0], [55.2, 577.0], [55.3, 577.0], [55.4, 582.0], [55.5, 582.0], [55.6, 582.0], [55.7, 582.0], [55.8, 582.0], [55.9, 582.0], [56.0, 586.0], [56.1, 586.0], [56.2, 586.0], [56.3, 586.0], [56.4, 586.0], [56.5, 586.0], [56.6, 586.0], [56.7, 587.0], [56.8, 587.0], [56.9, 587.0], [57.0, 587.0], [57.1, 587.0], [57.2, 587.0], [57.3, 587.0], [57.4, 589.0], [57.5, 589.0], [57.6, 589.0], [57.7, 589.0], [57.8, 589.0], [57.9, 589.0], [58.0, 589.0], [58.1, 589.0], [58.2, 589.0], [58.3, 589.0], [58.4, 589.0], [58.5, 589.0], [58.6, 589.0], [58.7, 590.0], [58.8, 590.0], [58.9, 590.0], [59.0, 590.0], [59.1, 590.0], [59.2, 590.0], [59.3, 590.0], [59.4, 594.0], [59.5, 594.0], [59.6, 594.0], [59.7, 594.0], [59.8, 594.0], [59.9, 594.0], [60.0, 595.0], [60.1, 595.0], [60.2, 595.0], [60.3, 595.0], [60.4, 595.0], [60.5, 595.0], [60.6, 595.0], [60.7, 596.0], [60.8, 596.0], [60.9, 596.0], [61.0, 596.0], [61.1, 596.0], [61.2, 596.0], [61.3, 596.0], [61.4, 597.0], [61.5, 597.0], [61.6, 597.0], [61.7, 597.0], [61.8, 597.0], [61.9, 597.0], [62.0, 601.0], [62.1, 601.0], [62.2, 601.0], [62.3, 601.0], [62.4, 601.0], [62.5, 601.0], [62.6, 601.0], [62.7, 610.0], [62.8, 610.0], [62.9, 610.0], [63.0, 610.0], [63.1, 610.0], [63.2, 610.0], [63.3, 610.0], [63.4, 614.0], [63.5, 614.0], [63.6, 614.0], [63.7, 614.0], [63.8, 614.0], [63.9, 614.0], [64.0, 619.0], [64.1, 619.0], [64.2, 619.0], [64.3, 619.0], [64.4, 619.0], [64.5, 619.0], [64.6, 619.0], [64.7, 621.0], [64.8, 621.0], [64.9, 621.0], [65.0, 621.0], [65.1, 621.0], [65.2, 621.0], [65.3, 621.0], [65.4, 622.0], [65.5, 622.0], [65.6, 622.0], [65.7, 622.0], [65.8, 622.0], [65.9, 622.0], [66.0, 624.0], [66.1, 624.0], [66.2, 624.0], [66.3, 624.0], [66.4, 624.0], [66.5, 624.0], [66.6, 624.0], [66.7, 624.0], [66.8, 624.0], [66.9, 624.0], [67.0, 624.0], [67.1, 624.0], [67.2, 624.0], [67.3, 624.0], [67.4, 633.0], [67.5, 633.0], [67.6, 633.0], [67.7, 633.0], [67.8, 633.0], [67.9, 633.0], [68.0, 633.0], [68.1, 633.0], [68.2, 633.0], [68.3, 633.0], [68.4, 633.0], [68.5, 633.0], [68.6, 633.0], [68.7, 635.0], [68.8, 635.0], [68.9, 635.0], [69.0, 635.0], [69.1, 635.0], [69.2, 635.0], [69.3, 635.0], [69.4, 644.0], [69.5, 644.0], [69.6, 644.0], [69.7, 644.0], [69.8, 644.0], [69.9, 644.0], [70.0, 648.0], [70.1, 648.0], [70.2, 648.0], [70.3, 648.0], [70.4, 648.0], [70.5, 648.0], [70.6, 648.0], [70.7, 681.0], [70.8, 681.0], [70.9, 681.0], [71.0, 681.0], [71.1, 681.0], [71.2, 681.0], [71.3, 681.0], [71.4, 686.0], [71.5, 686.0], [71.6, 686.0], [71.7, 686.0], [71.8, 686.0], [71.9, 686.0], [72.0, 687.0], [72.1, 687.0], [72.2, 687.0], [72.3, 687.0], [72.4, 687.0], [72.5, 687.0], [72.6, 687.0], [72.7, 695.0], [72.8, 695.0], [72.9, 695.0], [73.0, 695.0], [73.1, 695.0], [73.2, 695.0], [73.3, 695.0], [73.4, 695.0], [73.5, 695.0], [73.6, 695.0], [73.7, 695.0], [73.8, 695.0], [73.9, 695.0], [74.0, 698.0], [74.1, 698.0], [74.2, 698.0], [74.3, 698.0], [74.4, 698.0], [74.5, 698.0], [74.6, 698.0], [74.7, 701.0], [74.8, 701.0], [74.9, 701.0], [75.0, 701.0], [75.1, 701.0], [75.2, 701.0], [75.3, 701.0], [75.4, 704.0], [75.5, 704.0], [75.6, 704.0], [75.7, 704.0], [75.8, 704.0], [75.9, 704.0], [76.0, 766.0], [76.1, 766.0], [76.2, 766.0], [76.3, 766.0], [76.4, 766.0], [76.5, 766.0], [76.6, 766.0], [76.7, 771.0], [76.8, 771.0], [76.9, 771.0], [77.0, 771.0], [77.1, 771.0], [77.2, 771.0], [77.3, 771.0], [77.4, 773.0], [77.5, 773.0], [77.6, 773.0], [77.7, 773.0], [77.8, 773.0], [77.9, 773.0], [78.0, 784.0], [78.1, 784.0], [78.2, 784.0], [78.3, 784.0], [78.4, 784.0], [78.5, 784.0], [78.6, 784.0], [78.7, 785.0], [78.8, 785.0], [78.9, 785.0], [79.0, 785.0], [79.1, 785.0], [79.2, 785.0], [79.3, 785.0], [79.4, 795.0], [79.5, 795.0], [79.6, 795.0], [79.7, 795.0], [79.8, 795.0], [79.9, 795.0], [80.0, 803.0], [80.1, 803.0], [80.2, 803.0], [80.3, 803.0], [80.4, 803.0], [80.5, 803.0], [80.6, 803.0], [80.7, 806.0], [80.8, 806.0], [80.9, 806.0], [81.0, 806.0], [81.1, 806.0], [81.2, 806.0], [81.3, 806.0], [81.4, 819.0], [81.5, 819.0], [81.6, 819.0], [81.7, 819.0], [81.8, 819.0], [81.9, 819.0], [82.0, 821.0], [82.1, 821.0], [82.2, 821.0], [82.3, 821.0], [82.4, 821.0], [82.5, 821.0], [82.6, 821.0], [82.7, 823.0], [82.8, 823.0], [82.9, 823.0], [83.0, 823.0], [83.1, 823.0], [83.2, 823.0], [83.3, 823.0], [83.4, 834.0], [83.5, 834.0], [83.6, 834.0], [83.7, 834.0], [83.8, 834.0], [83.9, 834.0], [84.0, 834.0], [84.1, 843.0], [84.2, 843.0], [84.3, 843.0], [84.4, 843.0], [84.5, 843.0], [84.6, 843.0], [84.7, 854.0], [84.8, 854.0], [84.9, 854.0], [85.0, 854.0], [85.1, 854.0], [85.2, 854.0], [85.3, 854.0], [85.4, 857.0], [85.5, 857.0], [85.6, 857.0], [85.7, 857.0], [85.8, 857.0], [85.9, 857.0], [86.0, 857.0], [86.1, 858.0], [86.2, 858.0], [86.3, 858.0], [86.4, 858.0], [86.5, 858.0], [86.6, 858.0], [86.7, 860.0], [86.8, 860.0], [86.9, 860.0], [87.0, 860.0], [87.1, 860.0], [87.2, 860.0], [87.3, 860.0], [87.4, 870.0], [87.5, 870.0], [87.6, 870.0], [87.7, 870.0], [87.8, 870.0], [87.9, 870.0], [88.0, 870.0], [88.1, 874.0], [88.2, 874.0], [88.3, 874.0], [88.4, 874.0], [88.5, 874.0], [88.6, 874.0], [88.7, 882.0], [88.8, 882.0], [88.9, 882.0], [89.0, 882.0], [89.1, 882.0], [89.2, 882.0], [89.3, 882.0], [89.4, 884.0], [89.5, 884.0], [89.6, 884.0], [89.7, 884.0], [89.8, 884.0], [89.9, 884.0], [90.0, 884.0], [90.1, 889.0], [90.2, 889.0], [90.3, 889.0], [90.4, 889.0], [90.5, 889.0], [90.6, 889.0], [90.7, 920.0], [90.8, 920.0], [90.9, 920.0], [91.0, 920.0], [91.1, 920.0], [91.2, 920.0], [91.3, 920.0], [91.4, 920.0], [91.5, 920.0], [91.6, 920.0], [91.7, 920.0], [91.8, 920.0], [91.9, 920.0], [92.0, 920.0], [92.1, 920.0], [92.2, 920.0], [92.3, 920.0], [92.4, 920.0], [92.5, 920.0], [92.6, 920.0], [92.7, 920.0], [92.8, 920.0], [92.9, 920.0], [93.0, 920.0], [93.1, 920.0], [93.2, 920.0], [93.3, 920.0], [93.4, 924.0], [93.5, 924.0], [93.6, 924.0], [93.7, 924.0], [93.8, 924.0], [93.9, 924.0], [94.0, 924.0], [94.1, 926.0], [94.2, 926.0], [94.3, 926.0], [94.4, 926.0], [94.5, 926.0], [94.6, 926.0], [94.7, 1006.0], [94.8, 1006.0], [94.9, 1006.0], [95.0, 1006.0], [95.1, 1006.0], [95.2, 1006.0], [95.3, 1006.0], [95.4, 1031.0], [95.5, 1031.0], [95.6, 1031.0], [95.7, 1031.0], [95.8, 1031.0], [95.9, 1031.0], [96.0, 1031.0], [96.1, 1051.0], [96.2, 1051.0], [96.3, 1051.0], [96.4, 1051.0], [96.5, 1051.0], [96.6, 1051.0], [96.7, 1067.0], [96.8, 1067.0], [96.9, 1067.0], [97.0, 1067.0], [97.1, 1067.0], [97.2, 1067.0], [97.3, 1067.0], [97.4, 1071.0], [97.5, 1071.0], [97.6, 1071.0], [97.7, 1071.0], [97.8, 1071.0], [97.9, 1071.0], [98.0, 1071.0], [98.1, 1075.0], [98.2, 1075.0], [98.3, 1075.0], [98.4, 1075.0], [98.5, 1075.0], [98.6, 1075.0], [98.7, 1193.0], [98.8, 1193.0], [98.9, 1193.0], [99.0, 1193.0], [99.1, 1193.0], [99.2, 1193.0], [99.3, 1193.0], [99.4, 1710.0], [99.5, 1710.0], [99.6, 1710.0], [99.7, 1710.0], [99.8, 1710.0], [99.9, 1710.0], [100.0, 1710.0]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 29.0, "series": [{"data": [[1100.0, 1.0], [300.0, 17.0], [600.0, 19.0], [700.0, 8.0], [400.0, 18.0], [800.0, 16.0], [200.0, 29.0], [100.0, 2.0], [1700.0, 1.0], [900.0, 6.0], [1000.0, 6.0], [500.0, 27.0]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 83.0, "series": [{"data": [[0.0, 65.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 83.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 8.139999999999997, "minX": 1.78199394E12, "maxY": 8.139999999999997, "series": [{"data": [[1.78199394E12, 8.139999999999997]], "isOverall": false, "label": "", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78199394E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 220.6, "minX": 1.0, "maxY": 802.75, "series": [{"data": [[4.0, 802.75], [8.0, 556.3000000000001], [2.0, 262.5], [1.0, 304.0], [9.0, 450.83333333333337], [5.0, 518.3571428571429], [10.0, 661.9444444444447], [6.0, 370.3333333333333], [3.0, 220.6], [7.0, 420.99999999999994]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}, {"data": [[8.139999999999997, 553.8800000000003]], "isOverall": false, "label": "EMPTY_SERIE_NAME-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 0.0, "minX": 1.78199394E12, "maxY": 5046.3, "series": [{"data": [[1.78199394E12, 5046.3]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78199394E12, 0.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78199394E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 553.8800000000003, "minX": 1.78199394E12, "maxY": 553.8800000000003, "series": [{"data": [[1.78199394E12, 553.8800000000003]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78199394E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 553.8133333333337, "minX": 1.78199394E12, "maxY": 553.8133333333337, "series": [{"data": [[1.78199394E12, 553.8133333333337]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78199394E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.78199394E12, "maxY": 4.9E-324, "series": [{"data": [[1.78199394E12, 0.0]], "isOverall": false, "label": "EMPTY_SERIE_NAME", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78199394E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 197.0, "minX": 1.78199394E12, "maxY": 1710.0, "series": [{"data": [[1.78199394E12, 1710.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78199394E12, 197.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78199394E12, 889.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78199394E12, 1451.5]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78199394E12, 555.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78199394E12, 1018.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78199394E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 156.0, "minX": 4.0, "maxY": 1018.5, "series": [{"data": [[4.0, 1018.5], [16.0, 610.0], [10.0, 575.5], [20.0, 529.5], [11.0, 695.0], [22.0, 511.5], [6.0, 240.0], [15.0, 385.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 156.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 156.0, "minX": 4.0, "maxY": 1017.0, "series": [{"data": [[4.0, 1017.0], [16.0, 610.0], [10.0, 575.5], [20.0, 529.5], [11.0, 695.0], [22.0, 511.5], [6.0, 240.0], [15.0, 385.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[16.0, 156.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 2.5, "minX": 1.78199394E12, "maxY": 2.5, "series": [{"data": [[1.78199394E12, 2.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78199394E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.78199394E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.78199394E12, 2.4833333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78199394E12, 0.016666666666666666]], "isOverall": false, "label": "502", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78199394E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.78199394E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.78199394E12, 2.4833333333333334]], "isOverall": false, "label": "-success", "isController": false}, {"data": [[1.78199394E12, 0.016666666666666666]], "isOverall": false, "label": "-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78199394E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.78199394E12, "maxY": 2.4833333333333334, "series": [{"data": [[1.78199394E12, 2.4833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78199394E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78199394E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

