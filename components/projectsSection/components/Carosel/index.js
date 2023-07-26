import Card from "../Card"

export default function Carosel(){
    return(<div className="h-full w-full overflow-y-scroll columns-4 rows-2 flex flex-wrap items-center snap-y snap-mandatory">
        <Card demoLink="https://www.google.com/" projectName="Google" githubLink="https://www.github.com/" description="Very cool project something something really long not sure if it's overflowwed" imgLink="/duck-dance.gif"/>
        <Card demoLink="https://www.google.com/" projectName="Google" githubLink="https://www.github.com/" description="Very cool project" imgLink="/duck-dance.gif"/>
        <Card demoLink="https://www.google.com/" projectName="Google" githubLink="https://www.github.com/" description="Very cool project" imgLink="/duck-dance.gif"/>
        <Card demoLink="https://www.google.com/" projectName="Google" githubLink="https://www.github.com/" description="Very cool project" imgLink="/duck-dance.gif"/>
        <Card demoLink="https://www.google.com/" projectName="Google" githubLink="https://www.github.com/" description="Very cool project" imgLink="/duck-dance.gif"/>
    </div>)
}