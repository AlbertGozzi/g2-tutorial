import React, { useEffect } from 'react';
import './App.css';
import { Chart } from '@antv/g2';
import DataSet from '@antv/data-set';
import Tutorial from './components/Tutorial';
import { data } from './components/data.js';

// Utils

function toTitleCase(str) {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}

// Implement ticks

// function getTicks(scale) {
//   const { min, max, tickCount } = scale;
//   const avg = (max - min) / tickCount;
//   const ticks = [];
//   for (let i = min; i <= max; i += avg) {
//     ticks.push(i);
//   }
//   return ticks;
// }

// chart.scale('x', {
//   tickMethod: getTicks,
// });


function App() {

  // Example 0 - Bar Chart
  // Sum of value by phone
  useEffect( () => {
    let x = 'phone';
    let y = 'value';

    // Definition
    const chart = new Chart({
        container: 'example-0',
        autoFit: false,
        width: 600,
        height: 300,
        padding: [30, 30, 60, 60],
    });

    // Data transformation
    const dv = new DataSet.DataView().source(data);

    let displayY = `Sum of ${y}`;

    dv.transform({
      type: 'aggregate',
      fields: [y], 
      operations: ['sum'],
      as: [displayY],
      groupBy: [x], 
    });
    
    // Data loading
    chart.data(dv.rows);

    // Define scales
    chart.scale(displayY, {
      nice: true,
    })
    chart.scale(x, {
      alias: toTitleCase(x),
    })

    // Define axes titles
    chart.axis(displayY, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )
    chart.axis(x, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )

    // Geometry creation
  
    // eval("chart.line().position(`${x}*${displayY}`)");      
    chart
    .interval()
    .position(`${x}*${displayY}`)

    // Chart rendering
    chart.render();
  }, [])

  // Example 2 - Horizontal bar chart
  // Sum of value by phone
  useEffect( () => {
    let x = 'phone';
    let y = 'value';

    // Definition
    const chart = new Chart({
        container: 'example-1',
        autoFit: false,
        width: 600,
        height: 300,
        padding: [30, 30, 60, 150],
    });

    // Data transformation
    const dv = new DataSet.DataView().source(data);

    let displayY = `Sum of ${y}`;

    dv.transform({
      type: 'aggregate',
      fields: [y], 
      operations: ['sum'],
      as: [displayY],
      groupBy: [x], 
    });
    
    // Data loading
    chart.data(dv.rows);
  
    // Define coordinates
    chart.coordinate().transpose();  

    // Define scales
    chart.scale(displayY, {
      nice: true,
    })
    chart.scale(x, {
      alias: toTitleCase(x),
    })

    // Define axes titles
    chart.axis(displayY, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )
    chart.axis(x, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )

    // Geometry creation
    chart
    .interval()
    .position(`${x}*${displayY}`)

    // Chart rendering
    chart.render();
  }, [])

  // Example 3 - Stacked Bar Chart
  // Sum of value by phone
  useEffect( () => {
    let x = 'phone';
    let y = 'value';
    let stack = 'feature';

    // Definition
    const chart = new Chart({
        container: 'example-3',
        autoFit: false,
        width: 600,
        height: 300,
        padding: [30, 80, 60, 60],
    });

    // Data transformation
    const dv = new DataSet.DataView().source(data);

    // let displayY = `Sum of ${y}`;

    // dv.transform({
    //   type: 'aggregate',
    //   fields: [y], 
    //   operations: ['sum'],
    //   as: [displayY],
    //   groupBy: [x], 
    // });
    
    // Data loading
    chart.data(data);

    // Define coordinates
    chart.coordinate().transpose();  


    // Define scales
    chart.scale(y, {
      nice: true,
    })
    chart.scale(x, {
      alias: toTitleCase(x),
    })

    // Define axes titles
    chart.axis(y, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )
    chart.axis(x, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )

    // Legend
    chart.legend({
      position: 'right',
    });

    // Geometry creation
    chart
    .interval()
    .adjust('stack')
    .position(`${x}*${y}`)
    .color(stack)

    // Chart rendering
    chart.render();
  }, [])

    // Example 4 - Stacked horizontal Bar Chart
  // Sum of value by phone
  useEffect( () => {
    let x = 'phone';
    let y = 'value';
    let stack = 'feature';

    // Definition
    const chart = new Chart({
        container: 'example-2',
        autoFit: false,
        width: 600,
        height: 300,
        padding: [30, 80, 60, 60],
    });

    // Data transformation
    const dv = new DataSet.DataView().source(data);

    // let displayY = `Sum of ${y}`;

    // dv.transform({
    //   type: 'aggregate',
    //   fields: [y], 
    //   operations: ['sum'],
    //   as: [displayY],
    //   groupBy: [x], 
    // });
    
    // Data loading
    chart.data(data);

    // Define scales
    chart.scale(y, {
      nice: true,
    })
    chart.scale(x, {
      alias: toTitleCase(x),
    })

    // Define axes titles
    chart.axis(y, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )
    chart.axis(x, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )

    // Legend
    chart.legend({
      position: 'right',
    });

    // Geometry creation
    chart
    .interval()
    .adjust('stack')
    .position(`${x}*${y}`)
    .color(stack)

    // Chart rendering
    chart.render();
  }, [])

  // Example 5 - 100% Stacked Bar Chart
  // Sum of value by phone
  useEffect( () => {
    let x = 'phone';
    let y = 'value';
    let stack = 'feature';

    // Definition
    const chart = new Chart({
        container: 'example-4',
        autoFit: false,
        width: 600,
        height: 300,
        padding: [30, 80, 60, 60],
    });

    // Data transformation
    const dv = new DataSet.DataView().source(data);

    let displayY = `% of ${y}`;

    dv.transform({
      type: 'percent',
      field: y, // 统计销量
      dimension: stack, // 每年的占比
      groupBy: [x], // 以不同产品类别为分组，每个分组内部各自统计占比
      as: displayY, // 结果存储在 percent 字段
    })
    
    // console.log(dv);

    // Data loading
    chart.data(dv.rows);

    // Define scales
    chart.scale(displayY, {
      // min: 0,
      // max: 1,
      tickInterval: 0.25,
      formatter: (val) => `${val*100}%`,
      nice: true,
    })
    chart.scale(x, {
      alias: toTitleCase(x),
    })

    // Define axes titles
    chart.axis(displayY, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )
    chart.axis(x, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )

    // Legend
    chart.legend({
      position: 'right',
    });

    // Geometry creation
    chart
    .interval()
    .adjust('stack')
    .position(`${x}*${displayY}`)
    .color(stack)

    // Chart rendering
    chart.render();
  }, [])

  // Example 6 - 100% Stacked Bar Horizontal Chart
  // Sum of value by phone
  useEffect( () => {
    let x = 'phone';
    let y = 'value';
    let stack = 'feature';

    // Definition
    const chart = new Chart({
        container: 'example-5',
        autoFit: false,
        width: 600,
        height: 300,
        padding: [30, 90, 30, 120],
    });

    // Data transformation
    const dv = new DataSet.DataView().source(data);

    let displayY = `% of ${y}`;

    dv.transform({
      type: 'percent',
      field: y, // 统计销量
      dimension: stack, // 每年的占比
      groupBy: [x], // 以不同产品类别为分组，每个分组内部各自统计占比
      as: displayY, // 结果存储在 percent 字段
    })
    
    chart.coordinate().transpose();

    // Data loading
    chart.data(dv.rows);

    // Define scales
    chart.scale(displayY, {
      // min: 0,
      // max: 1,
      tickInterval: 0.25,
      formatter: (val) => `${val*100}%`,
      nice: true,
    })
    chart.scale(x, {
      alias: toTitleCase(x),
    })

    // Define axes titles
    chart.axis(displayY, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )
    chart.axis(x, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )

    // Legend
    chart.legend({
      position: 'right',
    });

    // Geometry creation
    chart
    .interval()
    .adjust('stack')
    .position(`${x}*${displayY}`)
    .color(stack)

    // Chart rendering
    chart.render();
  }, [])

    // Example 7 - Bar Chart
  // Sum of value by phone
  useEffect( () => {
    let x = 'feature';
    let y = 'value';
    let cluster = 'phone';

    // Definition
    const chart = new Chart({
        container: 'example-6',
        autoFit: false,
        width: 600,
        height: 300,
        padding: [30, 30, 90, 60],
    });

    // Data transformation
    const dv = new DataSet.DataView().source(data);

    // let displayY = `Sum of ${y}`;

    // dv.transform({
    //   type: 'aggregate',
    //   fields: [y], 
    //   operations: ['sum'],
    //   as: [displayY],
    //   groupBy: [x], 
    // });
    
    // Data loading
    chart.data(data);

    // Define scales
    chart.scale(y, {
      nice: true,
    })
    chart.scale(x, {
      alias: toTitleCase(x),
    })

    // Define axes titles
    chart.axis(y, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )
    chart.axis(x, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )

    // Geometry creation
  
    // eval("chart.line().position(`${x}*${displayY}`)");      
    chart
    .interval()
    .position(`${x}*${y}`)
    .color(cluster)
    .adjust([
      {
        type: 'dodge',
        marginRatio: 0,
      },
    ])

    // Chart rendering
    chart.render();
  }, [])

  // Example 8 - Bar-Line Chart
  // Sum of value by phone
  useEffect( () => {
    let x = 'phone';
    let y = 'value';
    // let cluster = 'phone';

    // Definition
    const chart = new Chart({
        container: 'example-7',
        autoFit: false,
        width: 600,
        height: 300,
        padding: [30, 30, 90, 60],
    });

    // Data transformation
    const dv = new DataSet.DataView().source(data);

    let displayY = `Sum of ${y}`;
    let displayY2 = `Count of ${y}`

    dv.transform({
      type: 'aggregate',
      fields: [y, y], 
      operations: ['sum', 'count'],
      as: [displayY, displayY2],
      groupBy: [x], 
    });
    
    console.log(dv.rows)
    // Data loading
    chart.data(dv.rows);

    // Define scales
    chart.scale(displayY, {
      nice: true,
    })
    chart.scale(displayY2, {
      min: 0,
      // max: 8,
      nice: true,
    })
    chart.scale(x, {
      alias: toTitleCase(x),
    })

    // Define axes titles
    chart.axis(displayY, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )

    chart.axis(displayY2, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )

    chart.axis(x, {
      title: {
        style: {
            fill: 'black',
        },
        },
      }
    )

    // Geometry creation
  
    // eval("chart.line().position(`${x}*${displayY}`)");      
    chart
    .interval()
    .position(`${x}*${displayY}`)

    chart
    .line()
    .position(`${x}*${displayY2}`);

    // Chart rendering
    chart.render();
  }, [])

  const displayDivs = () => {
    let numberCharts = 8;
    let arr = [...Array(numberCharts).keys()]
    return arr.map(i => {
      return <div key={i} className="chartCointainer" id={`example-${i}`}></div>;
    });
  } 
  
  return (
    <div className="App">
      <h2>Templates</h2>
      <div className="templates">
        {displayDivs()}
      </div>
      <h2>Tutorial</h2>
      <Tutorial/>
    </div>
  );
}

export default App;
