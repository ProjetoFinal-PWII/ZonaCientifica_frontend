import './categorie.css'

type Categorie = {
    category: {type: string, img: string};
    findTheme: (theme: string) => void
}
export function Categorie({category, findTheme}: Categorie){

    return(
        <button
            className='categorieButton'
            onClick={() => {
            findTheme(category.type);
            }}
         >        
            <div>
                <img src={category.img} />
                <figcaption>{category.type}</figcaption>
            </div>
        </button>       
    )
}