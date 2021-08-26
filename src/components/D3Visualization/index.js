import { React, useEffect, useState } from 'react';
import * as d3 from 'd3';


//style
import * as styles from './style.module.css';

const dataSet = [
        //550 = max
        {subject: "Dogs", count: 150},
        {subject: "Fish", count: 75},
        {subject: "Cats", count: 135},
        {subject: "Bunnies", count: 240},
]
const life = [
    {
        name: 'plants',
        amount: '450',
    },
    {
        name: 'animals',
        amount: '2',
    },
    {
        name: 'bacteria',
        amount: '70',
    },
    {
        name: 'viruses',
        amount: '0.2',
    },
    {
        name: 'archaea',
        amount: '7',
    },
    {
        name: 'protist',
        amount: '4',
    },
    {
        name: 'fungi',
        amount: '12',
    }
]
const genVisualization = () => {
        d3.select('#pgraphs')
            .selectAll('p')
            .data(dataSet)
            .enter()
            .append('p')
            .text(dt => dt.subject + ": " + dt.count)
}
export function D3Visualization() {
    useEffect(() => {
        genVisualization();
    }, [])

    return (
        <div className={styles.container}>
             <div id="pgraphs"></div> 
        </div>
    )
}