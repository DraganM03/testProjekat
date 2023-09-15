import {Card} from './Card'
import "./style/Container.css"

export const Container = ()=>{

    const faker = [{
        "image":"https://placehold.co/100x100",
        "title":"Title test 1",
        "desc":"opis test 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "authort":"neko i nesto",
        "date":"1694778143687"
    },{
        "image":"https://placehold.co/100x100",
        "title":"Title test 1",
        "desc":"opis test 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "authort":"neko i nesto",
        "date":"1694778143687"
    },{
        "image":"https://placehold.co/100x100",
        "title":"Title test 1",
        "desc":"opis test 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "authort":"neko i nesto",
        "date":"1694778143687"
    },{
        "image":"https://placehold.co/100x100",
        "title":"Title test 1",
        "desc":"opis test 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "authort":"neko i nesto",
        "date":"1694778143687"
    },{
        "image":"https://placehold.co/100x100",
        "title":"Title test 1",
        "desc":"opis test 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "authort":"neko i nesto",
        "date":"1694778143687"
    },{
        "image":"https://placehold.co/100x100",
        "title":"Title test 1",
        "desc":"opis test 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "authort":"neko i nesto",
        "date":"1694778143687"
    }]



    return <>
        <div className='container'>
            {faker.map(({image, title, desc}, index)=><Card key={index} image={image} title={title} desc={desc}/>)}
        </div>
    </>
    
}