'use client';

import Link from "next/link"

import FadeOutBox from "../../components/fadeoutbox"

const name = ['L',"U","K","E"," ","M","A","I"]
const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
export default function Page(){
    return(
        <div>
                Something
                {people.map(person => <li>{person}</li>)}
                {name.map(letter => {})}


        </div>
    )
}