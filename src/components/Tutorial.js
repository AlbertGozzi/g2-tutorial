import React, { useEffect } from 'react';
import { Chart } from '@antv/g2';
import { data } from './data.js'

const Tutorial = () => {

    useEffect( () => {
        const chart = new Chart({
            container: 'example0',
            autoFit: false,
            width: 800,
            height: 300,
            theme: 'dark' //theme
        });

        chart.data(data);

        chart.coordinate()
            .reflect('y')
            .scale(0.5,0.5);

        // chart.theme({
        //   defaultColor: 'red',
        // })

        chart.scale('value', {
            // min: -1,
            // max: 3,
            tickCount: 3,
            // ticks: [0, 2, 4, 8, 10, 15],
            // tickMethod: 'wilkinson-extended',
            // tickInterval: 0.3,
            nice: true,
            // type: 'log',
        });

        chart
            .area()
            .adjust('stack')
            .position('feature*value')
            .color('phone');
        chart
            .line()
            .adjust('stack')
            .position('feature*value')
            .color('phone');
        chart
            .point()
            .adjust('stack')
            .position('feature*value')
            .color('phone')
            .shape('circle');

        chart.legend({
            position: 'right-bottom',
        });
        
        chart.render();
        }, [])

    useEffect( () => {
        const chart = new Chart({
            container: 'example1',
            autoFit: false,
            width: 800,
            height: 300,
        });

        chart.data(data);

        chart.coordinate()
            .scale(0.5,0.5);


        chart.scale('value', {
            // min: -1,
            // max: 3,
            tickCount: 3,
            // ticks: [0, 2, 4, 8, 10, 15],
            // tickMethod: 'wilkinson-extended',
            // tickInterval: 0.3,
            nice: true,
            // type: 'log',
        });

        chart
            .interval()
            .adjust('stack')
            .position('feature*value')
            .color('phone')
            .label('value', {
            type: 'base',
            layout: {
                type: 'fixed-overlap'
                // type: 'overlap'
                // type: 'limitInShape'
            }
            // type: 'overlap',
            })
            .shape('hollow-rect')

        chart.tooltip({
            showMarkers: false, // 不展示 tooltip markers
            shared: true,
        });

        chart.interaction('active-region');

        chart.legend({
            // position: 'right-bottom',
            position: 'left',
            // "top" | "top-left" | "top-right" | "right" | "right-top" | "right-bottom" | "left" | "left-top" | "left-bottom" | "bottom" | "bottom-left" | "bottom-right"
        });

        chart.render();
    }, [])

    useEffect( () => {
        const chart = new Chart({
            container: 'example2',
            autoFit: false,
            width: 800,
            height: 300,
            padding: [0, 100, 40, 40],
        });

        chart.data(data);
        chart.scale({
            value: {
            sync: true,
            formatter: (val) => `Rtng ${val*10}`,
            },
        });

        chart.scale('feature', {
            alias: 'Potential Features',
        });

        chart.axis('feature', {
            title: {
            style: {
                fill: 'red',
            },
            },
        });

        chart.facet('rect', {
            fields: [null, 'phone'],
            rowTitle: {
            style: {
                textAlign: 'start',
                fontSize: 12,
            },
            },
            eachView(view) {
            // view.area().position('feature*value');
            view.line().position('feature*value');
            // view.path().position('feature*value');
            // view
            //   .point()
            //   .position('feature*value')
            //   .shape('circle');
            },
        });    
        chart.render();
    }, [])

    useEffect( () => {
        const chart = new Chart({
            container: 'example3',
            autoFit: false,
            width: 800,
            height: 300,
            padding: [0, 100, 0, 40],
        });

        chart.data(data);

        chart.coordinate('polar')

        chart
        .area()
        // .adjust('stack')
        .position('phone*value')

        chart.render();
    }, [])

    useEffect( () => {
        const chart = new Chart({
            container: 'example4',
            autoFit: false,
            width: 800,
            height: 300,
        });

        chart.data(data);

        chart
        .interval()
        // .adjust('stack')
        .position('phone*value')
        // .color('phone');

        chart.render();
    }, [])

    return (
        <div className="tutorial">
            <div id="example0"></div>
            <div id="example1"></div>
            <div id="example2"></div>
            <div id="example3"></div>
            <div id="example4"></div>
        </div>
    );
};

export default Tutorial;